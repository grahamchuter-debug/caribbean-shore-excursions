import { getPortBySlug } from "@/data/ports";
import {
  getPortPlanningSnapshot,
  getTypicalCruiseDay,
  getPortPlanningCards,
} from "@/data/port-planning";
import { portExcursionAuthority } from "@/data/port-excursion-authority";
import { topicClusters } from "@/data/topic-clusters";
import { hasShipSchedule } from "@/lib/routes";
import type {
  FitnessLevel,
  TimeInPort,
  TravellerTypeId,
} from "@/data/excursion-finder";

export type ReturnConfidence = "high" | "moderate" | "caution";

export type MatchTier = "Excellent Match" | "Strong Match" | "Good Match" | "Possible Match";

/** Upper bound used internally by scoreExcursion, ranking uses raw values on this scale. */
export const MAX_RAW_EXCURSION_SCORE = 1.2;

export interface FinderExcursionPick {
  name: string;
  description: string;
  duration: string;
  type: string;
  rating?: number;
  matchReason: string;
}

export interface PortExcursionPlan {
  portSlug: string;
  portName: string;
  region: string;
  bestFor: string;
  recommended: FinderExcursionPick;
  alternate?: FinderExcursionPick;
  bestForTags: string[];
  returnConfidence: ReturnConfidence;
  returnLabel: string;
  returnMessage: string;
  dayPlan: string[];
  portGuideHref: string;
  specialistUrl: string;
  specialistName: string;
  scheduleHref?: string;
  portMatchScore: number;
  portMatchLabel: MatchTier;
}

export interface ExcursionFinderResult {
  matchScore: number;
  bestPort: { slug: string; name: string; excursion: string } | null;
  bestExcursionType: string | null;
  hiddenGem: { slug: string; name: string; excursion: string } | null;
  portPlans: PortExcursionPlan[];
  summaryLine: string;
}

export interface ExcursionFinderInput {
  portSlugs: string[];
  travellerTypes: TravellerTypeId[];
  fitnessLevel: FitnessLevel;
  timeInPort: TimeInPort;
}

const hiddenGemSlugs = new Set([
  "falmouth",
  "puerto-plata",
  "bonaire",
  "costa-maya",
  "samana",
  "la-romana",
  "progreso",
  "montego-bay",
  "tortola",
]);

const travellerTypeLabels: Record<TravellerTypeId, string> = {
  "beach-lovers": "Beach lovers",
  snorkellers: "Snorkellers",
  families: "Families",
  adventure: "Adventure seekers",
  "private-tours": "Private tour guests",
  "first-time": "First-time cruisers",
};

const excursionTypeKeywords: Record<TravellerTypeId, string[]> = {
  "beach-lovers": ["beach", "catamaran", "island"],
  snorkellers: ["snorkel", "reef", "dive"],
  families: ["family", "beach", "park", "lagoon"],
  adventure: ["adventure", "culture", "nature", "island", "wildlife", "zip"],
  "private-tours": ["private", "charter", "custom"],
  "first-time": [],
};

const fitnessPenalties: Record<FitnessLevel, Record<string, number>> = {
  easy: { active: -0.35, moderate: -0.1, easy: 0.2 },
  moderate: { active: -0.15, moderate: 0.15, easy: 0.05 },
  active: { active: 0.25, moderate: 0.1, easy: -0.1 },
};

function parseDurationHours(duration: string): number {
  const range = duration.match(/(\d+)\s*-\s*(\d+)/);
  if (range) return (Number(range[1]) + Number(range[2])) / 2;
  const single = duration.match(/(\d+)/);
  return single ? Number(single[1]) : 4;
}

function inferActivityLevel(type: string, duration: string): "easy" | "moderate" | "active" {
  const lower = `${type} ${duration}`.toLowerCase();
  if (/falls|hike|zip|off-road|atv|climb|waterfall/.test(lower)) return "active";
  if (/snorkel|reef|ruin|culture|island|boat/.test(lower)) return "moderate";
  return "easy";
}

function timeBudgetHours(timeInPort: TimeInPort): number {
  switch (timeInPort) {
    case "under-4":
      return 3.5;
    case "4-6":
      return 5;
    case "6-8":
      return 7;
    case "8-plus":
      return 9;
  }
}

function scoreExcursion(
  excursion: { name: string; description: string; duration: string; type: string; rating?: number },
  travellerTypes: TravellerTypeId[],
  fitnessLevel: FitnessLevel,
  timeInPort: TimeInPort,
): number {
  let score = excursion.rating ? excursion.rating / 5 : 0.75;
  const haystack = `${excursion.name} ${excursion.description} ${excursion.type}`.toLowerCase();

  for (const traveller of travellerTypes) {
    if (traveller === "first-time") {
      score += 0.08;
      continue;
    }
    const keywords = excursionTypeKeywords[traveller];
    if (keywords.some((keyword) => haystack.includes(keyword))) {
      score += 0.18;
    }
  }

  const activity = inferActivityLevel(excursion.type, excursion.duration);
  score += fitnessPenalties[fitnessLevel][activity];

  const hoursNeeded = parseDurationHours(excursion.duration);
  const budget = timeBudgetHours(timeInPort);
  if (hoursNeeded > budget - 1.5) score -= 0.35;
  else if (hoursNeeded <= budget - 2) score += 0.1;

  return Math.max(0, Math.min(MAX_RAW_EXCURSION_SCORE, score));
}

export function normalizeExcursionScore(rawScore: number): number {
  return Math.min(
    100,
    Math.max(0, Math.round((rawScore / MAX_RAW_EXCURSION_SCORE) * 100)),
  );
}

export function getMatchTier(normalizedScore: number): MatchTier {
  if (normalizedScore >= 85) return "Excellent Match";
  if (normalizedScore >= 70) return "Strong Match";
  if (normalizedScore >= 55) return "Good Match";
  return "Possible Match";
}

export function getOverallMatchTier(matchScore: number): MatchTier {
  return getMatchTier(matchScore);
}

function getAuthorityExcursion(portSlug: string) {
  return portExcursionAuthority.portTable.find((row) => row.portSlug === portSlug);
}

function getTravellerClusterPick(portSlug: string, travellerTypes: TravellerTypeId[]) {
  const typeMap: Partial<Record<TravellerTypeId, string>> = {
    "beach-lovers": "Beach lovers",
    snorkellers: "Wildlife/nature lovers",
    families: "Families",
    adventure: "Active travellers",
    "private-tours": "Couples",
    "first-time": "First-time cruisers",
  };

  for (const traveller of travellerTypes) {
    const label = typeMap[traveller];
    if (!label) continue;
    for (const cluster of topicClusters) {
      const pick = cluster.travellerPicks.find(
        (p) => p.portSlug === portSlug && p.travellerType === label,
      );
      if (pick) return pick;
    }
  }
  return null;
}

function buildExcursionPick(
  portSlug: string,
  travellerTypes: TravellerTypeId[],
  fitnessLevel: FitnessLevel,
  timeInPort: TimeInPort,
): { primary: FinderExcursionPick; alternate?: FinderExcursionPick; score: number } {
  const port = getPortBySlug(portSlug);
  if (!port) {
    return {
      primary: {
        name: "Port guide review",
        description: "Open the authority port guide for excursion options.",
        duration: "Varies",
        type: "Planning",
        matchReason: "Port data unavailable",
      },
      score: 0,
    };
  }

  const clusterPick = getTravellerClusterPick(portSlug, travellerTypes);
  const scored = port.bestExcursions
    .map((excursion) => ({
      excursion,
      score: scoreExcursion(excursion, travellerTypes, fitnessLevel, timeInPort),
    }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0];
  const alternate = scored[1];

  let primary: FinderExcursionPick;
  if (clusterPick && best && best.score < 0.85) {
    primary = {
      name: clusterPick.excursionName,
      description: clusterPick.description,
      duration: best?.excursion.duration ?? "4-5 hours",
      type: best?.excursion.type ?? "Curated pick",
      rating: best?.excursion.rating,
      matchReason: `Matched to ${clusterPick.travellerType.toLowerCase()} style`,
    };
  } else if (best) {
    const authority = getAuthorityExcursion(portSlug);
    primary = {
      name: best.excursion.name,
      description: best.excursion.description,
      duration: best.excursion.duration,
      type: best.excursion.type,
      rating: best.excursion.rating,
      matchReason: authority
        ? authority.whyRecommended.slice(0, 120) + (authority.whyRecommended.length > 120 ? "…" : "")
        : `Top-rated ${best.excursion.type.toLowerCase()} fit for your cruise day`,
    };
  } else {
    const authority = getAuthorityExcursion(portSlug);
    primary = {
      name: authority?.bestExcursion ?? `${port.name} highlight tour`,
      description: authority?.whyRecommended ?? port.tagline,
      duration: authority?.duration ?? "4-5 hours",
      type: authority?.bestFor ?? port.bestFor,
      matchReason: "Signature port excursion",
    };
  }

  const altPick = alternate
    ? {
        name: alternate.excursion.name,
        description: alternate.excursion.description,
        duration: alternate.excursion.duration,
        type: alternate.excursion.type,
        rating: alternate.excursion.rating,
        matchReason: `Strong alternate ${alternate.excursion.type.toLowerCase()} option`,
      }
    : undefined;

  return { primary, alternate: altPick, score: best?.score ?? 0.6 };
}

function getReturnConfidence(
  portSlug: string,
  excursionDuration: string,
  timeInPort: TimeInPort,
): { confidence: ReturnConfidence; label: string; message: string } {
  const port = getPortBySlug(portSlug);
  const snapshot = getPortPlanningSnapshot(portSlug);
  const tender = port?.portInfo.tenderRequired ?? false;
  const hoursNeeded = parseDurationHours(excursionDuration);
  const budget = timeBudgetHours(timeInPort);

  if (tender && (timeInPort === "under-4" || hoursNeeded > budget - 2)) {
    return {
      confidence: "caution",
      label: "Check tender timing",
      message:
        "Tender ports need early departure and a generous return buffer. Confirm all-aboard with your operator.",
    };
  }

  if (hoursNeeded > budget - 1.25 || timeInPort === "under-4") {
    return {
      confidence: "moderate",
      label: "Confirm timings",
      message:
        "This excursion can work on your schedule, but confirm pier pickup and return time with the operator.",
    };
  }

  if (snapshot?.returnToShipConfidence?.toLowerCase().includes("moderate")) {
    return {
      confidence: "moderate",
      label: "Moderate confidence",
      message: snapshot.returnToShipConfidence,
    };
  }

  return {
    confidence: "high",
    label: "Comfortable fit",
    message: "Typical port timing supports this excursion with a standard return-to-ship buffer.",
  };
}

function buildBestForTags(
  portSlug: string,
  travellerTypes: TravellerTypeId[],
  excursionType: string,
): string[] {
  const tags = new Set<string>();
  for (const traveller of travellerTypes) {
    tags.add(travellerTypeLabels[traveller]);
  }
  const cards = getPortPlanningCards(portSlug);
  for (const card of cards) {
    if (
      (travellerTypes.includes("beach-lovers") && card.label === "Beaches") ||
      (travellerTypes.includes("snorkellers") && card.label === "Snorkeling") ||
      (travellerTypes.includes("families") && card.label === "Families") ||
      (travellerTypes.includes("private-tours") && card.label === "Private Tours") ||
      (travellerTypes.includes("adventure") && card.label === "Wildlife")
    ) {
      tags.add(card.label);
    }
  }
  tags.add(excursionType);
  return [...tags].slice(0, 4);
}

function buildDayPlan(portSlug: string, excursionName: string): string[] {
  const typical = getTypicalCruiseDay(portSlug);
  if (typical.length > 0) {
    return typical.map((step) => `${step.time}: ${step.activity}`);
  }
  return [
    "Disembark promptly and meet your excursion at the pier or approved pickup point",
    `Morning or early afternoon: ${excursionName}`,
    "Allow time for lunch near the port if your schedule permits",
    "Return to the gangway with at least 45 to 60 minutes before all-aboard",
  ];
}

export function generateExcursionFinderPlan(input: ExcursionFinderInput): ExcursionFinderResult | null {
  const uniquePorts = [...new Set(input.portSlugs)].filter((slug) => getPortBySlug(slug));
  if (uniquePorts.length === 0 || input.travellerTypes.length === 0) {
    return null;
  }

  const portPlans = uniquePorts
    .map((portSlug) => {
      const port = getPortBySlug(portSlug)!;
      const pick = buildExcursionPick(
        portSlug,
        input.travellerTypes,
        input.fitnessLevel,
        input.timeInPort,
      );
      const returnInfo = getReturnConfidence(portSlug, pick.primary.duration, input.timeInPort);
      const normalizedScore = normalizeExcursionScore(pick.score);

      return {
        portSlug,
        portName: port.name,
        region: port.region,
        bestFor: port.bestFor,
        recommended: pick.primary,
        alternate: pick.alternate,
        bestForTags: buildBestForTags(portSlug, input.travellerTypes, pick.primary.type),
        returnConfidence: returnInfo.confidence,
        returnLabel: returnInfo.label,
        returnMessage: returnInfo.message,
        dayPlan: buildDayPlan(portSlug, pick.primary.name),
        portGuideHref: `/ports/${portSlug}`,
        specialistUrl: port.specialistUrl,
        specialistName: port.specialistName,
        scheduleHref: hasShipSchedule(portSlug) ? `/ship-schedules/${portSlug}` : undefined,
        rawScore: pick.score,
        portMatchScore: normalizedScore,
        portMatchLabel: getMatchTier(normalizedScore),
      };
    })
    .sort((a, b) => b.rawScore - a.rawScore)
    .map(({ rawScore: _rawScore, ...plan }) => plan);

  const avgPortScore =
    portPlans.reduce((sum, plan) => sum + plan.portMatchScore, 0) / portPlans.length;
  const travellerBonus = Math.min(12, input.travellerTypes.length * 3);
  const cautionPenalty = portPlans.filter((p) => p.returnConfidence === "caution").length * 8;
  const moderatePenalty = portPlans.filter((p) => p.returnConfidence === "moderate").length * 3;
  const matchScore = Math.max(
    35,
    Math.min(98, Math.round(avgPortScore * 0.75 + travellerBonus + 18 - cautionPenalty - moderatePenalty)),
  );

  const best = portPlans[0];
  const hiddenGemPlan =
    portPlans.find((plan) => hiddenGemSlugs.has(plan.portSlug) && plan.portMatchScore >= 65) ??
    portPlans.find((plan) => hiddenGemSlugs.has(plan.portSlug));

  const excursionTypeCounts = new Map<string, number>();
  for (const plan of portPlans) {
    excursionTypeCounts.set(plan.recommended.type, (excursionTypeCounts.get(plan.recommended.type) ?? 0) + 1);
  }
  const bestExcursionType = [...excursionTypeCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

  const travellerSummary = input.travellerTypes
    .map((id) => travellerTypeLabels[id])
    .slice(0, 2)
    .join(" and ");

  return {
    matchScore,
    bestPort: best
      ? { slug: best.portSlug, name: best.portName, excursion: best.recommended.name }
      : null,
    bestExcursionType,
    hiddenGem: hiddenGemPlan
      ? {
          slug: hiddenGemPlan.portSlug,
          name: hiddenGemPlan.portName,
          excursion: hiddenGemPlan.recommended.name,
        }
      : null,
    portPlans,
    summaryLine: `${matchScore}/100 Caribbean Cruise Match for ${uniquePorts.length} port${uniquePorts.length === 1 ? "" : "s"}, optimised for ${travellerSummary}.`,
  };
}

export function getConfidenceStyles(confidence: ReturnConfidence) {
  switch (confidence) {
    case "high":
      return {
        badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
        dot: "bg-emerald-500",
      };
    case "moderate":
      return {
        badge: "bg-amber-100 text-amber-800 border-amber-200",
        dot: "bg-amber-500",
      };
    case "caution":
      return {
        badge: "bg-rose-100 text-rose-800 border-rose-200",
        dot: "bg-rose-500",
      };
  }
}

export function getMatchTierStyles(tier: MatchTier) {
  switch (tier) {
    case "Excellent Match":
      return "bg-caribbean-700 text-white";
    case "Strong Match":
      return "bg-caribbean-100 text-caribbean-800 border border-caribbean-200";
    case "Good Match":
      return "bg-sky-100 text-sky-800 border border-sky-200";
    case "Possible Match":
      return "bg-gray-100 text-gray-700 border border-gray-200";
  }
}
