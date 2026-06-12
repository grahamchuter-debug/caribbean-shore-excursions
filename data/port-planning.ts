import type {
  PortPlanningCard,
  PortPlanningSnapshot,
  TypicalCruiseDayStep,
} from "./types";
import { getPortBySlug } from "./ports";
import { getPortAuthority } from "./port-authority";
import { cruiseLines } from "./cruise-lines";
import { getSimilarPortSlugs } from "./port-related";
import {
  getScheduleForPort,
  getShipCallCountForPortYear,
  hasVerifiedScheduleData,
} from "./schedules";

interface PortPlanningConfig {
  snapshot: Partial<PortPlanningSnapshot>;
  typicalCruiseDay: TypicalCruiseDayStep[];
  cardTeasers: {
    beaches: string;
    snorkeling: string;
    families: string;
    wildlife: string;
    private: string;
  };
}

const planningConfig: Record<string, PortPlanningConfig> = {
  "st-thomas": {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at terminal",
      familyFriendly: "Excellent",
      privateTourFriendly: "Excellent",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Taxi to Magens Bay or Red Hook ferry for St. John" },
      { time: "10:00 AM", activity: "Beach time or Trunk Bay snorkel" },
      { time: "1:00 PM", activity: "Lunch and optional Charlotte Amalie shopping" },
      { time: "3:30 PM", activity: "Return to Havensight or Crown Bay" },
    ],
    cardTeasers: {
      beaches: "Magens Bay calm swim day",
      snorkeling: "Sapphire Beach or St. John ferry",
      families: "Coral World and easy beach access",
      wildlife: "Reef fish at Coki and Sapphire",
      private: "Custom taxi or charter island loop",
    },
  },
  cozumel: {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low from downtown pier",
      familyFriendly: "Excellent",
      privateTourFriendly: "Excellent",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Boat depart for Palancar Reef snorkel" },
      { time: "11:00 AM", activity: "Second reef stop or El Cielo sandbar" },
      { time: "1:30 PM", activity: "Downtown San Miguel lunch near pier" },
      { time: "3:30 PM", activity: "Walk back to ship at Punta Langosta" },
    ],
    cardTeasers: {
      beaches: "Palancar coast and beach clubs",
      snorkeling: "Palancar and Columbia Reef",
      families: "Chankanaab lagoon and glass-bottom boats",
      wildlife: "Reef turtles and tropical fish",
      private: "Private snorkel boat two-stop routes",
    },
  },
  aruba: {
    snapshot: {
      timeInPort: "8-10 hours typical",
      walkingRequired: "Low in Oranjestad",
      familyFriendly: "Very Good",
      privateTourFriendly: "Excellent",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Catamaran snorkel sail or Eagle Beach transfer" },
      { time: "12:00 PM", activity: "Beach lunch and swim at Eagle or Palm Beach" },
      { time: "2:30 PM", activity: "Optional downtown shopping in Oranjestad" },
      { time: "4:00 PM", activity: "Return to cruise terminal" },
    ],
    cardTeasers: {
      beaches: "Eagle Beach and Baby Beach",
      snorkeling: "Boca Catalina and catamaran reefs",
      families: "De Palm Island and calm lagoons",
      wildlife: "Reef fish and sea turtles",
      private: "4x4 Arikok or custom beach loop",
    },
  },
  curacao: {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at Willemstad pier",
      familyFriendly: "Good",
      privateTourFriendly: "Very Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Walk Handelskade and Queen Emma Bridge" },
      { time: "10:30 AM", activity: "Tugboat Beach or reef snorkel boat" },
      { time: "1:00 PM", activity: "Lunch in Punda or Otrobanda" },
      { time: "3:30 PM", activity: "Return via floating bridge to ship" },
    ],
    cardTeasers: {
      beaches: "Grote Knip day trip option",
      snorkeling: "Tugboat Beach wreck snorkel",
      families: "Calm lagoon and town exploration",
      wildlife: "Reef fish at shore-access sites",
      private: "Custom Willemstad and beach route",
    },
  },
  "grand-cayman": {
    snapshot: {
      timeInPort: "6-8 hours typical (tender)",
      walkingRequired: "Minimal after tender",
      familyFriendly: "Excellent",
      privateTourFriendly: "Very Good",
      returnToShipConfidence: "Moderate (tender buffer)",
    },
    typicalCruiseDay: [
      { time: "8:00 AM", activity: "Disembark tender early for Stingray City boat" },
      { time: "10:30 AM", activity: "Sandbar stingray encounter" },
      { time: "1:00 PM", activity: "Seven Mile Beach or second snorkel stop" },
      { time: "3:00 PM", activity: "Tender return with 60-minute buffer" },
    ],
    cardTeasers: {
      beaches: "Seven Mile Beach organized access",
      snorkeling: "Cemetery Reef and reef combos",
      families: "Stingray City sandbar",
      wildlife: "Stingray City signature encounter",
      private: "Small-group Stingray and reef boats",
    },
  },
  "st-maarten": {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at Philipsburg",
      familyFriendly: "Very Good",
      privateTourFriendly: "Excellent",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Taxi to Maho Beach or Orient Bay" },
      { time: "11:00 AM", activity: "Beach club time on French or Dutch side" },
      { time: "1:30 PM", activity: "Philipsburg shopping strip" },
      { time: "3:30 PM", activity: "Return to Dr. A.C. Wathey terminal" },
    ],
    cardTeasers: {
      beaches: "Orient Bay and Great Bay",
      snorkeling: "Boat snorkel off Simpson Bay",
      families: "Beach clubs with facilities",
      wildlife: "Reef snorkel catamaran sails",
      private: "Dual-nation island custom tour",
    },
  },
  nassau: {
    snapshot: {
      timeInPort: "6-8 hours typical",
      walkingRequired: "Low in downtown Nassau",
      familyFriendly: "Excellent",
      privateTourFriendly: "Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Atlantis transfer or downtown heritage walk" },
      { time: "11:00 AM", activity: "Paradise Island beach or water park block" },
      { time: "1:30 PM", activity: "Straw Market and Bay Street shopping" },
      { time: "3:30 PM", activity: "Walk back to Prince George Wharf" },
    ],
    cardTeasers: {
      beaches: "Paradise Island and Cable Beach",
      snorkeling: "Rose Island catamaran trips",
      families: "Atlantis Aquaventure day pass",
      wildlife: "Swimming pigs flight or reef tours",
      private: "Custom Paradise Island driver day",
    },
  },
  roatan: {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at cruise piers",
      familyFriendly: "Very Good",
      privateTourFriendly: "Excellent",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Taxi or tour to West Bay Beach" },
      { time: "10:30 AM", activity: "Offshore reef snorkel from beach" },
      { time: "1:00 PM", activity: "Lunch at West Bay or Mahogany Bay" },
      { time: "3:30 PM", activity: "Return to Coxen Hole or Mahogany Bay pier" },
    ],
    cardTeasers: {
      beaches: "West Bay and Tabyana Beach",
      snorkeling: "West Bay reef from shore",
      families: "Gumbalimba Park wildlife",
      wildlife: "Capuchins and iguanas at Gumbalimba",
      private: "Private driver West Bay loop",
    },
  },
  "costa-maya": {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low in cruise village",
      familyFriendly: "Very Good",
      privateTourFriendly: "Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Coach to Chacchoben ruins or beach club" },
      { time: "11:30 AM", activity: "Ruins tour or Mahahual beach block" },
      { time: "1:30 PM", activity: "Lunch in port village or Mahahual" },
      { time: "3:30 PM", activity: "Return to cruise village pier" },
    ],
    cardTeasers: {
      beaches: "Mahahual village beach",
      snorkeling: "Reef tours from Mahahual",
      families: "Port pool and kayak lagoon",
      wildlife: "Reef snorkel and lagoon wildlife",
      private: "Chacchoben private van tour",
    },
  },
  "puerto-plata": {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at Amber Cove / Taíno Bay",
      familyFriendly: "Very Good",
      privateTourFriendly: "Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Coach to 27 Charcos or Teleférico cable car" },
      { time: "12:00 PM", activity: "Waterfall adventure or city heritage stop" },
      { time: "2:00 PM", activity: "Port pool time at Amber Cove" },
      { time: "4:00 PM", activity: "Return to scheduled pier" },
    ],
    cardTeasers: {
      beaches: "Cofresí and Amber Coast clubs",
      snorkeling: "Sosúa Bay reef boats",
      families: "Port pool and waterfall coaches",
      wildlife: "Reef snorkel north-coast trips",
      private: "Custom Amber Coast waterfall day",
    },
  },
  "ocho-rios": {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low at cruise pier",
      familyFriendly: "Very Good",
      privateTourFriendly: "Very Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "First-slot Dunn's River Falls climb" },
      { time: "11:00 AM", activity: "Mystic Mountain or beach transfer" },
      { time: "1:30 PM", activity: "Lunch near pier or island jerk stop" },
      { time: "3:30 PM", activity: "Return to Ocho Rios cruise terminal" },
    ],
    cardTeasers: {
      beaches: "Dunn's River base beach",
      snorkeling: "Reef boat north-coast trips",
      families: "Dunn's River and Dolphin Cove",
      wildlife: "Dolphin Cove lagoon encounters",
      private: "Private first-slot falls guide",
    },
  },
  falmouth: {
    snapshot: {
      timeInPort: "7-9 hours typical",
      walkingRequired: "Low in historic Falmouth",
      familyFriendly: "Very Good",
      privateTourFriendly: "Very Good",
      returnToShipConfidence: "High",
    },
    typicalCruiseDay: [
      { time: "8:30 AM", activity: "Martha Brae bamboo rafting departure" },
      { time: "11:30 AM", activity: "Historic Falmouth walking tour" },
      { time: "1:30 PM", activity: "Optional Burwood Beach taxi stop" },
      { time: "3:30 PM", activity: "Return to Falmouth pier" },
    ],
    cardTeasers: {
      beaches: "Burwood Beach calm swim",
      snorkeling: "North-coast reef day trips",
      families: "Martha Brae rafting for mixed ages",
      wildlife: "River and lagoon birdlife",
      private: "Rafting plus custom heritage route",
    },
  },
};

function deriveWalkingLabel(tenderRequired: boolean, walkingDistance: string): string {
  if (tenderRequired) return "Minimal after tender";
  if (/walk/i.test(walkingDistance)) return "Low at terminal";
  if (/minute/i.test(walkingDistance)) return "Low to moderate";
  return "Varies by excursion";
}

function parseTimeInPortHours(value: string): number | null {
  const hours = value.match(/(\d+)\s*h/i);
  const mins = value.match(/(\d+)\s*m/i);
  if (!hours) return null;
  return Number(hours[1]) + (mins ? Number(mins[1]) / 60 : 0);
}

export function getAverageTimeInPort(slug: string): string | null {
  const entries = getScheduleForPort(slug).filter((e) => e.timeInPort && e.timeInPort !== "-");
  if (entries.length < 5) return null;

  const hours = entries
    .map((e) => parseTimeInPortHours(e.timeInPort ?? ""))
    .filter((v): v is number => v !== null);
  if (hours.length === 0) return null;

  const avg = hours.reduce((sum, h) => sum + h, 0) / hours.length;
  const rounded = Math.round(avg * 10) / 10;
  return `~${rounded}h average (verified calls)`;
}

export function getPortPlanningSnapshot(slug: string): PortPlanningSnapshot | null {
  const port = getPortBySlug(slug);
  const config = planningConfig[slug];
  if (!port || !config) return null;

  const verifiedTime = getAverageTimeInPort(slug);

  return {
    timeInPort: verifiedTime ?? config.snapshot.timeInPort ?? "6-9 hours typical",
    bestFor: port.bestFor,
    walkingRequired:
      config.snapshot.walkingRequired ?? deriveWalkingLabel(port.portInfo.tenderRequired, port.portInfo.walkingDistance),
    familyFriendly: config.snapshot.familyFriendly ?? "Very Good",
    privateTourFriendly: config.snapshot.privateTourFriendly ?? "Very Good",
    returnToShipConfidence:
      config.snapshot.returnToShipConfidence ??
      (port.portInfo.tenderRequired ? "Moderate (tender buffer)" : "High"),
  };
}

export function getTypicalCruiseDay(slug: string): TypicalCruiseDayStep[] {
  return planningConfig[slug]?.typicalCruiseDay ?? [];
}

export function getCruiseLinesForPort(slug: string) {
  return cruiseLines.filter((line) => line.popularPorts.some((p) => p.slug === slug));
}

export function getPortPlanningCards(slug: string): PortPlanningCard[] {
  const config = planningConfig[slug];
  const authority = getPortAuthority(slug);
  if (!config) return [];

  const fallback = (primary: string | undefined, key: keyof typeof config.cardTeasers) =>
    config.cardTeasers[key] || primary || "Plan with local operators";

  return [
    {
      label: "Beaches",
      href: "/excursion-types/beaches",
      guideHref: "/best-caribbean-beach-excursions",
      teaser: fallback(authority?.bestBeaches[0]?.name, "beaches"),
      tone: "sand",
    },
    {
      label: "Snorkeling",
      href: "/excursion-types/snorkeling",
      guideHref: "/best-caribbean-snorkeling-excursions",
      teaser: fallback(authority?.snorkelling[0]?.site, "snorkeling"),
      tone: "reef",
    },
    {
      label: "Families",
      href: "/excursion-types/family-tours",
      guideHref: "/best-caribbean-family-excursions",
      teaser: fallback(authority?.bestForFamilies[0], "families"),
      tone: "family",
    },
    {
      label: "Wildlife",
      href: "/excursion-types/adventure-tours",
      guideHref: "/best-caribbean-wildlife-excursions",
      teaser: config.cardTeasers.wildlife,
      tone: "wildlife",
    },
    {
      label: "Private Tours",
      href: "/excursion-types/private-tours",
      guideHref: "/best-caribbean-private-tours",
      teaser: fallback(authority?.privateTours[0]?.name, "private"),
      tone: "private",
    },
  ];
}

export interface PortPopularityStats {
  hasVerifiedData: boolean;
  calls2026: number;
  calls2027: number;
  busiestYear: number | null;
  busiestYearCalls: number;
  peakMonths: string[];
  note: string;
}

export function getPortPopularityStats(slug: string): PortPopularityStats {
  const calls2026 = getShipCallCountForPortYear(slug, 2026);
  const calls2027 = getShipCallCountForPortYear(slug, 2027);
  const hasVerifiedData = hasVerifiedScheduleData(slug);

  const entries = getScheduleForPort(slug);
  const monthCounts = new Map<string, number>();
  for (const entry of entries) {
    const monthKey = entry.date.slice(0, 7);
    monthCounts.set(monthKey, (monthCounts.get(monthKey) ?? 0) + 1);
  }

  const peakMonths = [...monthCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => {
      const [year, month] = key.split("-");
      const date = new Date(Number(year), Number(month) - 1, 1);
      return date.toLocaleString("en-US", { month: "long", year: "numeric" });
    });

  const busiestYear = calls2027 >= calls2026 ? (calls2027 > 0 ? 2027 : calls2026 > 0 ? 2026 : null) : 2026;
  const busiestYearCalls = busiestYear === 2027 ? calls2027 : calls2026;

  let note = "Schedule import pending. Check back for verified call counts.";
  if (hasVerifiedData) {
    note =
      peakMonths.length > 0
        ? `Busiest months in imported data: ${peakMonths.join(", ")}.`
        : "Verified ship calls imported for this port.";
  }

  return {
    hasVerifiedData,
    calls2026,
    calls2027,
    busiestYear,
    busiestYearCalls,
    peakMonths,
    note,
  };
}

export function getSimilarPorts(slug: string) {
  return getSimilarPortSlugs(slug)
    .map((relSlug) => getPortBySlug(relSlug))
    .filter(Boolean);
}
