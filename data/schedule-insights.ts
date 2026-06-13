import { getSchedulePortCount } from "./content-inventory";
import {
  getAllSchedulePortSlugs,
  getScheduleForPortYear,
  getSchedulePortBySlug,
  getShipCallCountForPortYear,
  schedulePorts,
} from "./schedules";
import { getEntryMonthKey, MONTH_LABELS } from "../lib/schedule-utils";

/** Industry-average estimate when published passenger counts are unavailable. */
export const ESTIMATED_PASSENGERS_PER_CALL = 3000;

export interface PortYearStats {
  slug: string;
  name: string;
  country: string;
  region: string;
  shipCalls: number;
  estimatedPassengers: number | null;
  hasVerifiedData: boolean;
}

export interface MonthlyCallStats {
  monthKey: string;
  monthLabel: string;
  shipCalls: number;
}

function getPortRegion(slug: string): string {
  const regions: Record<string, string> = {
    "st-thomas": "Eastern Caribbean",
    cozumel: "Western Caribbean",
    aruba: "Southern Caribbean",
    "grand-cayman": "Western Caribbean",
    nassau: "Bahamas",
    roatan: "Western Caribbean",
    "st-maarten": "Eastern Caribbean",
    "puerto-plata": "Eastern Caribbean",
    "costa-maya": "Western Caribbean",
    "ocho-rios": "Western Caribbean",
  };
  return regions[slug] ?? "Caribbean";
}

export function getPortYearStats(slug: string, year: number): PortYearStats | undefined {
  const port = getSchedulePortBySlug(slug);
  if (!port) return undefined;

  const shipCalls = getShipCallCountForPortYear(slug, year);
  const hasVerifiedData = shipCalls > 0;

  return {
    slug,
    name: port.name,
    country: port.country,
    region: getPortRegion(slug),
    shipCalls,
    estimatedPassengers: hasVerifiedData ? shipCalls * ESTIMATED_PASSENGERS_PER_CALL : null,
    hasVerifiedData,
  };
}

export function getAllPortYearStats(year: number): PortYearStats[] {
  return getAllSchedulePortSlugs()
    .map((slug) => getPortYearStats(slug, year))
    .filter((stats): stats is PortYearStats => Boolean(stats));
}

export function getVerifiedPortRankings(year: number): PortYearStats[] {
  return getAllPortYearStats(year)
    .filter((stats) => stats.hasVerifiedData)
    .sort((a, b) => b.shipCalls - a.shipCalls);
}

export function getMonthlyCallTotals(year: number): MonthlyCallStats[] {
  const totals = new Map<string, number>();

  for (const port of schedulePorts) {
    for (const entry of getScheduleForPortYear(port.slug, year)) {
      const monthKey = getEntryMonthKey(entry);
      totals.set(monthKey, (totals.get(monthKey) ?? 0) + 1);
    }
  }

  return [...totals.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([monthKey, shipCalls]) => {
      const month = Number(monthKey.split("-")[1]);
      const yearNum = Number(monthKey.split("-")[0]);
      return {
        monthKey,
        monthLabel: `${MONTH_LABELS[month - 1]} ${yearNum}`,
        shipCalls,
      };
    });
}

export function getPeakMonths(year: number, limit = 5): MonthlyCallStats[] {
  return [...getMonthlyCallTotals(year)].sort((a, b) => b.shipCalls - a.shipCalls).slice(0, limit);
}

export function getBusiestPorts2027Insights() {
  const schedulePortCount = getSchedulePortCount();

  return {
    intro: `This page ranks Caribbean cruise ports using verified 2027 ship call data where available, with planning context for all ${schedulePortCount} ports we track. Passenger figures are estimates based on an average of 3,000 guests per call when cruise lines do not publish capacity.`,
    planningInsights: [
      "St. Thomas leads verified 2027 call volume among imported schedules, making Magens Bay, St. John ferries, and downtown shopping busiest on multi-ship winter weeks.",
      "Ocho Rios call counts are lower but spike in January through March, when Dunn's River Falls and Mystic Mountain excursions need early booking.",
      "Cozumel, Nassau, and Grand Cayman typically rank among the busiest Caribbean ports industry-wide. Import those schedules next to compare exact call totals.",
      "Tender ports like Grand Cayman add 30-60 minutes each way. Build excursion return times around published departure windows, not just arrival times.",
      "Use monthly year schedules to spot quiet port days before booking private drivers, beach clubs, or small-group snorkel tours.",
    ],
    faqs: [
      {
        question: "Which Caribbean cruise port has the most ship calls in 2027?",
        answer:
          "Among verified schedules on this site, St. Thomas has the highest 2027 ship call count. Additional ports will rank here as monthly schedule imports are completed.",
      },
      {
        question: "How are passenger estimates calculated?",
        answer:
          "When cruise lines do not publish capacity, we multiply verified ship calls by 3,000 guests as a conservative industry average. Treat these figures as planning estimates, not official port authority totals.",
      },
      {
        question: "Why do some ports show zero verified calls?",
        answer: `Only ports with completed CSV imports display verified totals. Other tracked ports show placeholders until their monthly source data is imported.`,
      },
    ],
  };
}

/** @deprecated Use getBusiestPorts2027Insights() for current inventory counts. */
export const busiestPorts2027Insights = getBusiestPorts2027Insights();

export const calendar2027Insights = {
  intro:
    "Use this 2027 Caribbean cruise calendar to see peak sailing months from verified ship schedules, plus regional seasonality for Eastern, Western, Southern, and Bahamas itineraries.",
  regionalPatterns: [
    {
      region: "Eastern Caribbean",
      bestMonths: "December through April",
      notes:
        "St. Thomas and St. Maarten see the heaviest winter traffic. Verified St. Thomas data peaks in January and December 2027.",
      portSlugs: ["st-thomas", "st-maarten", "puerto-plata"],
    },
    {
      region: "Western Caribbean",
      bestMonths: "November through April; steady summer sailings",
      notes:
        "Cozumel, Roatán, Costa Maya, and Ocho Rios anchor Western routes year-round. Ocho Rios verified calls cluster in Q1 2027.",
      portSlugs: ["cozumel", "roatan", "costa-maya", "ocho-rios", "grand-cayman"],
    },
    {
      region: "Southern Caribbean",
      bestMonths: "January through May",
      notes:
        "Aruba sits outside the main hurricane belt and attracts dry-season sailings with reliable beach weather.",
      portSlugs: ["aruba"],
    },
    {
      region: "Bahamas",
      bestMonths: "Year-round; peaks with short cruises from Florida",
      notes:
        "Nassau and private-island stops stay busy on three- to five-night itineraries throughout 2027.",
      portSlugs: ["nassau"],
    },
  ],
  seasonalNotes: [
    {
      title: "Winter peak (December to April)",
      description:
        "Highest verified call volumes fall in January, February, March, November, and December. Book top excursions early and expect longer taxi queues at major terminals.",
    },
    {
      title: "Shoulder season (May and October)",
      description:
        "Fewer multi-ship days create better conditions for private tours and popular beaches. Ocho Rios verified data shows lighter spring and autumn weeks.",
    },
    {
      title: "Summer sailings (June to August)",
      description:
        "Family cruise traffic continues, especially on Western Caribbean loops. Monitor afternoon rain when planning outdoor adventures in Jamaica and Mexico.",
    },
    {
      title: "Hurricane season awareness (June to November)",
      description:
        "Eastern and Bahamas itineraries can face weather disruptions. Southern ports like Aruba are less affected. Always keep a flexible excursion plan near peak storm months.",
    },
  ],
  faqs: [
    {
      question: "What is the busiest cruise month in the Caribbean for 2027?",
      answer:
        "Based on verified schedules imported so far, January and December 2027 show the highest combined ship call totals, led by St. Thomas.",
    },
    {
      question: "When is the best time to cruise the Western Caribbean?",
      answer:
        "November through April offers the driest weather for Mexico, Honduras, and Jamaica ports. Summer remains popular for families on seven-night Western loops.",
    },
    {
      question: "How do I use this calendar with port schedules?",
      answer:
        "Start here for seasonal patterns, then open a port hub and choose the 2026 or 2027 schedule to review exact arrival and departure times by month.",
    },
  ],
};
