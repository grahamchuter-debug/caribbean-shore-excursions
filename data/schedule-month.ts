import type { FAQ, ScheduleEntry, ShipSchedulePort } from "./types";
import { ESTIMATED_PASSENGERS_PER_CALL } from "./schedule-insights";
import { getUniqueCruiseLines } from "@/lib/schedule-utils";
import { formatMonthLabel, getMonthName } from "@/lib/schedule-utils";
import {
  augmentMetadataDescription,
  augmentMetadataTitle,
  formatDestinationWithDock,
  getScheduleMonthHeroTitle,
} from "@/lib/cruise-port-display";

export interface MonthlyScheduleStats {
  shipCalls: number;
  estimatedPassengers: number;
  busiestDay: { date: string; count: number } | null;
  cruiseLines: string[];
  planningTip: string;
}

function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getBusiestScheduledDay(entries: ScheduleEntry[]): { date: string; count: number } | null {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    counts.set(entry.date, (counts.get(entry.date) ?? 0) + 1);
  }

  let busiest: { date: string; count: number } | null = null;
  for (const [date, count] of counts) {
    if (!busiest || count > busiest.count) {
      busiest = { date, count };
    }
  }

  return busiest;
}

export function getMonthlyScheduleStats(
  entries: ScheduleEntry[],
  port: ShipSchedulePort,
  monthKey: string,
): MonthlyScheduleStats {
  const shipCalls = entries.length;
  const busiestDay = getBusiestScheduledDay(entries);
  const cruiseLines = getUniqueCruiseLines(entries);
  const monthName = getMonthName(monthKey);

  let planningTip =
    `Review arrival and departure times for your ship before booking ${port.name} shore excursions in ${monthName}.`;

  if (busiestDay && busiestDay.count >= 3) {
    planningTip = `${formatDisplayDate(busiestDay.date)} is the busiest day this month with ${busiestDay.count} scheduled ship calls. Book reef tours, beach clubs, and popular attractions early on that date.`;
  } else if (shipCalls >= 40) {
    planningTip = `${monthName} is a high-volume month at ${port.name}. Compare independent operators that plan around your published departure and leave a sensible buffer before choosing your port-day activities.`;
  } else if (port.usesTender) {
    planningTip = `${port.name} uses tenders. On ${monthName} port days, allow 20-40 minutes each way and keep 60-90 minutes before published departure.`;
  }

  return {
    shipCalls,
    estimatedPassengers: shipCalls * ESTIMATED_PASSENGERS_PER_CALL,
    busiestDay,
    cruiseLines,
    planningTip,
  };
}

type ScheduleRegion = "western" | "eastern" | "bahamas" | "southern";

const PORT_REGION: Record<string, ScheduleRegion> = {
  cozumel: "western",
  "costa-maya": "western",
  "grand-cayman": "western",
  roatan: "western",
  "ocho-rios": "western",
  "puerto-limon": "western",
  "st-thomas": "eastern",
  "st-maarten": "eastern",
  "puerto-plata": "eastern",
  "st-kitts": "eastern",
  tortola: "eastern",
  nassau: "bahamas",
  aruba: "southern",
};

type CrowdLevel = "peak" | "shoulder" | "low";

function getSeasonCrowdLevel(month: number): CrowdLevel {
  if ([12, 1, 2, 3].includes(month)) return "peak";
  if ([8, 9, 10].includes(month)) return "low";
  return "shoulder";
}

/**
 * Short, month-specific guidance (weather, season, crowds, suitability) keyed by
 * month + region so it scales across every port-month page without hand-writing
 * hundreds of pages. Kept to 2–4 concise sentences.
 */
export function getMonthGuidance(port: ShipSchedulePort, monthKey: string): string {
  const month = Number(monthKey.split("-")[1]);
  const monthName = getMonthName(monthKey);
  const region = PORT_REGION[port.slug] ?? "western";
  const isSouthern = region === "southern";

  let base: string;
  if ([12, 1, 2, 3].includes(month)) {
    base = `${monthName} falls in the Caribbean's dry winter peak season, with reliable sunshine, generally calm seas, and the year's heaviest cruise traffic. Expect ${port.name} to fill on multi-ship days, so reserve signature excursions well ahead. Conditions favour reef snorkel, catamaran sails, and beach days.`;
    if (region === "bahamas") {
      base = `${monthName} is winter peak season in the Bahamas — mostly sunny and busy, though occasional cool fronts bring breezier, choppier days. Nassau fills on multi-ship dates, so book Atlantis and snorkel tours early. Mornings are best for calm-water catamaran sails.`;
    }
  } else if (month === 4 || month === 5) {
    base = `${monthName} is shoulder season — warm, largely dry, and quieter than the winter peak apart from early-April spring-break weeks. ${port.name} crowds ease, improving excursion availability. Seas stay favourable for snorkel and boat tours.`;
  } else if (month === 6 || month === 7) {
    base = `${monthName} brings hot, humid weather and the early Atlantic hurricane season, though storm risk stays low this early. Family travel lifts ${port.name} demand around school holidays. Plan beaches and reef trips for the morning before afternoon heat and showers.`;
  } else if ([8, 9, 10].includes(month)) {
    if (isSouthern) {
      base = `${monthName} sits within Atlantic hurricane season, but Aruba lies outside the main hurricane belt and rarely takes a direct hit — expect hot, breezy, largely reliable beach weather with the lightest cruise crowds of the year. Excursions are easy to book, and afternoon catamaran sails suit late departures.`;
    } else {
      base = `${monthName} is the peak of Atlantic hurricane season — the hottest, wettest stretch with the lightest cruise traffic and occasional itinerary changes. ${port.name} excursions are easiest to book now, but keep plans flexible and watch tropical weather. Choose operators with clear cancellation terms.`;
    }
  } else {
    base = `${monthName} is shoulder season as hurricane risk winds down and winter cruise traffic ramps up. ${port.name} balances warm weather with more manageable crowds. Seas generally settle, favouring reef snorkel and catamaran sails.`;
  }

  if (port.usesTender && !isSouthern) {
    base += ` As a tender port, ${port.name} is sensitive to sea conditions — allow extra return buffer if winds pick up.`;
  }

  return base;
}

export function getMonthlyScheduleFaqs(
  port: ShipSchedulePort,
  monthKey: string,
  entries: ScheduleEntry[],
): FAQ[] {
  const monthLabel = formatMonthLabel(monthKey);
  const month = Number(monthKey.split("-")[1]);
  const crowd = getSeasonCrowdLevel(month);
  const shipCalls = entries.length;
  const busiestDay = getBusiestScheduledDay(entries);
  const uniqueShips = [...new Set(entries.map((entry) => entry.ship))].sort();
  const shipList =
    uniqueShips.length <= 8
      ? uniqueShips.join(", ")
      : `${uniqueShips.slice(0, 8).join(", ")}, and ${uniqueShips.length - 8} more`;

  const tenderClause = port.usesTender ? "tender operations, " : "";
  const crowdBookingClause =
    crowd === "peak"
      ? `${monthLabel} is peak season at ${port.name}, so book must-do tours two to three weeks ahead`
      : crowd === "low"
        ? `${monthLabel} is quieter at ${port.name}, so availability is easier — but still book a week or two ahead on any multi-ship date`
        : `${monthLabel} is shoulder season at ${port.name}, so book popular tours one to two weeks ahead`;
  const busiestClause =
    busiestDay && busiestDay.count >= 3
      ? ` The busiest day this month lists ${busiestDay.count} ships, when operators sell out fastest.`
      : "";
  const returnBuffer = port.usesTender
    ? `As a tender port, plan to be at the ${port.name} tender pickup point 60–90 minutes before published departure`
    : `Plan to be back at the ${port.name} terminal 30–60 minutes before published departure`;

  return [
    {
      question: `Which cruise ships visit ${port.name} in ${monthLabel}?`,
      answer:
        uniqueShips.length > 0
          ? `This page lists ${uniqueShips.length} scheduled vessel${uniqueShips.length !== 1 ? "s" : ""} in ${monthLabel}, including ${shipList}. Use the schedule table for exact arrival and departure times.`
          : `No published ship calls are listed for ${port.name} in ${monthLabel}.`,
    },
    {
      question: `Can ${port.name} arrival times change in ${monthLabel}?`,
      answer:
        `Yes. Cruise lines and the port adjust ${monthLabel} times for weather, pier traffic, ${tenderClause}and operational delays. ${getMonthGuidance(port, monthKey).split(". ")[0]}, so treat these as planning guides and confirm on your ship's daily program before disembarking.`,
    },
    {
      question: `How early should I book a ${monthLabel} ${port.name} shore excursion?`,
      answer:
        `Once you confirm your ship's in-port window from this ${monthLabel} schedule, ${crowdBookingClause}.${busiestClause} Popular snorkel, beach, and wildlife tours sell out fastest when multiple ships share the port.`,
    },
    {
      question: `How much time should I leave before returning to the ship at ${port.name} in ${monthLabel}?`,
      answer:
        `${returnBuffer}. Add extra buffer on full-day tours and dates when multiple ships are in port${crowd === "peak" ? `, which is common in ${monthLabel}` : ""}.`,
    },
    {
      question: `What excursions suit ${port.name} in ${monthLabel}?`,
      answer: getMonthGuidance(port, monthKey),
    },
  ];
}

export function getMonthlyPageTitle(
  portName: string,
  monthKey: string,
  portSlug?: string,
): string {
  if (portSlug) return getScheduleMonthHeroTitle(portSlug, portName, monthKey);
  return `${portName} Cruise Ship Schedule, ${formatMonthLabel(monthKey)}`;
}

export function getMonthlySeoTitle(
  portName: string,
  monthKey: string,
  portSlug?: string,
): string {
  const monthLabel = formatMonthLabel(monthKey);
  const destination = portSlug ? formatDestinationWithDock(portName, portSlug) : portName;
  return `${destination} Cruise Ship Schedule ${monthLabel} | Cruise Calls & Port Times`;
}

export function getMonthlyMetaDescription(
  portName: string,
  monthKey: string,
  shipCalls: number,
  portSlug?: string,
): string {
  const monthLabel = formatMonthLabel(monthKey);
  const callNote =
    shipCalls > 0
      ? `${shipCalls} scheduled cruise call${shipCalls !== 1 ? "s" : ""}`
      : "scheduled cruise calls";
  const baseDescription = `View the ${portName} cruise ship schedule for ${monthLabel}, including ${callNote}, arrival times, departure times and planning tips for shore excursions.`;
  return portSlug
    ? augmentMetadataDescription(baseDescription, portSlug, "schedule")
    : baseDescription;
}
