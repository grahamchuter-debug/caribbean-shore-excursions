import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  getMonthsWithEntries,
  monthKeyToSlug,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import { SCHEDULE_FAQS, SCHEDULE_PLANNING_TIPS } from "./schedule-content";
import stThomasSchedule from "./imported-schedules/st-thomas.json";
import ochoRiosSchedule from "./imported-schedules/ocho-rios.json";

export const TOP_SCHEDULE_PORT_SLUGS = [
  "st-thomas",
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "st-maarten",
  "puerto-plata",
  "costa-maya",
  "ocho-rios",
] as const;

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    country: "U.S. Virgin Islands",
    seoTitle: "St. Thomas Cruise Ship Schedule 2027",
    metaDescription:
      "Check the 2027 St. Thomas cruise ship schedule, verified arrival and departure times at Havensight and Crown Bay to plan shore excursions around your port day.",
    intro:
      "This page helps cruise passengers see which ships are scheduled at St. Thomas and plan shore excursions around published arrival and departure times. St. Thomas is one of the Caribbean's busiest ports, so knowing how many vessels are in port can help you avoid crowded beaches and sold-out tours.",
    description:
      "Eastern Caribbean hub with Havensight and Crown Bay terminals serving year-round cruise traffic.",
    scheduleOverview:
      "St. Thomas regularly hosts multiple ships per day at Havensight and Crown Bay. This page lists verified 2027 ship calls. Use the monthly tables to spot busy days before booking Magens Bay, St. John ferry trips, or catamaran snorkel sails.",
    relatedPortSlugs: ["st-maarten", "nassau", "puerto-plata"],
    excursionTypeSlugs: ["beaches", "snorkeling", "catamaran-cruises", "private-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "cozumel",
    name: "Cozumel",
    country: "Mexico",
    seoTitle: "Cozumel Cruise Ship Schedule 2026",
    metaDescription:
      "2026 Cozumel cruise ship schedule with arrival and departure times at Punta Langosta, International Pier, and Puerta Maya for reef snorkel and tour planning.",
    intro:
      "Use this Cozumel cruise ship schedule to check which vessels are due in port and how long they stay before you book reef snorkel tours, beach clubs, or mainland Tulum excursions. Cozumel often hosts several ships daily during peak weeks.",
    description:
      "Mexico's busiest cruise port with three piers serving Western Caribbean itineraries.",
    scheduleOverview:
      "Cozumel is among the world's busiest cruise ports, with multiple daily calls at Punta Langosta, International Pier, and Puerta Maya during peak season. Check monthly arrivals to plan Palancar Reef snorkel departures and avoid pier congestion on the busiest schedule days.",
    relatedPortSlugs: ["costa-maya", "roatan", "grand-cayman"],
    excursionTypeSlugs: ["snorkeling", "beaches", "catamaran-cruises", "adventure-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "aruba",
    name: "Aruba",
    country: "Aruba",
    seoTitle: "Aruba Cruise Ship Schedule 2026",
    metaDescription:
      "View the 2026 Aruba cruise ship schedule for Oranjestad arrivals and departures. Plan Eagle Beach days and Southern Caribbean excursions around your ship times.",
    intro:
      "This Aruba schedule page shows which cruise ships are expected in Oranjestad and their published port times, so you can plan beach days, catamaran sails, and Arikok tours with enough return buffer.",
    description:
      "Southern Caribbean port outside the hurricane belt with consistent year-round traffic.",
    scheduleOverview:
      "Aruba's Port of Oranjestad receives steady Southern Caribbean traffic with extended evening departures common on many itineraries. Review monthly ship calls before booking Eagle Beach transfers or De Palm Island packages on busy arrival days.",
    relatedPortSlugs: ["st-maarten", "cozumel", "puerto-plata"],
    excursionTypeSlugs: ["beaches", "snorkeling", "catamaran-cruises", "adventure-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "grand-cayman",
    name: "Grand Cayman",
    country: "Cayman Islands",
    seoTitle: "Grand Cayman Cruise Ship Schedule 2026",
    metaDescription:
      "Grand Cayman 2026 cruise ship schedule for George Town tender ports. Check arrivals and departures before booking Stingray City and snorkel excursions.",
    intro:
      "Grand Cayman cruise schedules matter more than most ports because ships anchor offshore and passengers tender into George Town. Check arrival and departure times here before booking Stingray City, snorkel tours, or Seven Mile Beach transfers.",
    description:
      "Western Caribbean tender port with weather-dependent daily ship counts.",
    scheduleOverview:
      "Grand Cayman requires tender operations from George Town anchorage, so published schedules can change quickly in rough weather. Monitor monthly call lists to plan Stingray City departures early on multi-ship tender days.",
    relatedPortSlugs: ["cozumel", "nassau", "roatan"],
    excursionTypeSlugs: ["snorkeling", "beaches", "private-tours", "family-tours"],
    usesTender: true,
    planningTips: [
      ...SCHEDULE_PLANNING_TIPS,
      "Grand Cayman uses tenders. Add 20-40 minutes each way when planning return times.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "nassau",
    name: "Nassau",
    country: "Bahamas",
    seoTitle: "Nassau Cruise Ship Schedule 2026",
    metaDescription:
      "Nassau 2026 cruise ship schedule for Prince George Wharf arrivals and departures. Plan Atlantis, snorkel, and downtown excursions around your port window.",
    intro:
      "Check which cruise ships are scheduled at Nassau's Prince George Wharf and their arrival and departure times before you book Atlantis Aquaventure, snorkel tours, or downtown walking excursions.",
    description:
      "High-volume Bahamas port on short Florida and Caribbean itineraries.",
    scheduleOverview:
      "Nassau handles heavy volumes from Florida-based Bahamas and Caribbean sailings, with multiple mega-ships frequently sharing the downtown pier. Use monthly schedules to plan Atlantis and snorkel tours before peak call days sell out.",
    relatedPortSlugs: ["grand-cayman", "st-thomas", "st-maarten"],
    excursionTypeSlugs: ["beaches", "family-tours", "adventure-tours", "private-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "roatan",
    name: "Roatán",
    country: "Honduras",
    seoTitle: "Roatán Cruise Ship Schedule 2026",
    metaDescription:
      "Roatán 2026 cruise ship schedule for Mahogany Bay and Coxen Hole. View arrival and departure times to plan reef snorkel and West Bay Beach excursions.",
    intro:
      "This Roatán schedule helps you see which ships are due at Mahogany Bay or Coxen Hole and plan reef snorkel, beach, and zip-line excursions around your published port times.",
    description:
      "Western Caribbean port with strong reef snorkeling demand at Mahogany Bay.",
    scheduleOverview:
      "Roatán's call volumes vary by week, with Carnival, Norwegian, and Royal Caribbean among regular visitors. Check monthly arrivals before booking West Bay snorkel tours or Gumbalimba Park adventures on shared pier days.",
    relatedPortSlugs: ["cozumel", "costa-maya", "grand-cayman"],
    excursionTypeSlugs: ["snorkeling", "beaches", "adventure-tours", "family-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "st-maarten",
    name: "St. Maarten",
    country: "Sint Maarten / Saint Martin",
    seoTitle: "St. Maarten Cruise Ship Schedule 2026",
    metaDescription:
      "St. Maarten 2026 cruise ship schedule for Philipsburg arrivals and departures. Plan Maho Beach, Orient Bay, and dual-nation tours around your ship times.",
    intro:
      "Use this St. Maarten cruise ship schedule to check which vessels are expected at the Dr. A.C. Wathey Cruise Facility and plan Maho Beach, Orient Bay, and French-side excursions around arrival and departure times.",
    description:
      "Eastern Caribbean dual-nation port with year-round cruise traffic at Philipsburg.",
    scheduleOverview:
      "St. Maarten receives consistent Eastern and Southern Caribbean traffic. Multi-ship days affect taxi availability to Maho Beach and Orient Bay. Review monthly schedules before booking plane-spotting or beach club excursions.",
    relatedPortSlugs: ["st-thomas", "aruba", "puerto-plata"],
    excursionTypeSlugs: ["beaches", "catamaran-cruises", "private-tours", "family-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "puerto-plata",
    name: "Puerto Plata",
    country: "Dominican Republic",
    seoTitle: "Puerto Plata Cruise Ship Schedule 2026",
    metaDescription:
      "Puerto Plata 2026 cruise ship schedule for Amber Cove and Taíno Bay. Check arrivals and departures before waterfall and cable car shore excursions.",
    intro:
      "This Puerto Plata schedule covers ships calling at Amber Cove and Taíno Bay terminals. Check arrival and departure times before booking Teleférico cable car rides, 27 Waterfalls adventures, or colonial city tours.",
    description:
      "Dominican Republic Amber Coast port serving Eastern Caribbean itineraries.",
    scheduleOverview:
      "Puerto Plata serves both Amber Cove and Taíno Bay with strong Carnival and MSC volumes on many Eastern Caribbean routes. Review monthly calls before booking waterfall excursions that require coach transfers from the pier.",
    relatedPortSlugs: ["st-maarten", "st-thomas", "ocho-rios"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "private-tours", "snorkeling"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "costa-maya",
    name: "Costa Maya",
    country: "Mexico",
    seoTitle: "Costa Maya Cruise Ship Schedule 2026",
    metaDescription:
      "Costa Maya 2026 cruise ship schedule for the Mahahual cruise village. View arrival and departure times for Mayan ruin and beach club excursion planning.",
    intro:
      "Check which cruise ships are scheduled at Costa Maya's purpose-built cruise village and plan Chacchoben ruins, Mahahual beach clubs, and snorkel tours around published arrival and departure times.",
    description:
      "Mexican Caribbean port village near Mahahual on Western Caribbean routes.",
    scheduleOverview:
      "Costa Maya typically hosts one to three ships at the cruise village pier. Carnival and Royal Caribbean are frequent callers. Check monthly schedules before booking ruin tours that need mainland coach time.",
    relatedPortSlugs: ["cozumel", "roatan", "ocho-rios"],
    excursionTypeSlugs: ["adventure-tours", "beaches", "snorkeling", "family-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "ocho-rios",
    name: "Ocho Rios",
    country: "Jamaica",
    seoTitle: "Ocho Rios Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Ocho Rios cruise ship schedule with verified arrival and departure times for 2026 and 2027. Plan Dunn's River Falls and rainforest excursions around your port day.",
    intro:
      "This Ocho Rios cruise ship schedule shows which vessels are due in port and their published times, helping you plan Dunn's River Falls climbs, Mystic Mountain adventures, and private north-coast tours with safe return buffers.",
    description:
      "Jamaica north-coast adventure port for waterfall and rainforest excursions.",
    scheduleOverview:
      "Ocho Rios receives Western Caribbean traffic from Carnival, Royal Caribbean, and Norwegian with variable weekly counts. This page lists verified ship calls for 2026 and 2027. Busy schedule days affect Dunn's River Falls timing, so plan early departures on multi-ship weeks.",
    relatedPortSlugs: ["costa-maya", "cozumel", "roatan"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "private-tours"],
    planningTips: [...SCHEDULE_PLANNING_TIPS],
    faqs: SCHEDULE_FAQS,
  },
];

/** Verified schedule rows imported via scripts/import-schedules.mjs */
export const portSchedules: Record<string, ScheduleEntry[]> = {
  "st-thomas": stThomasSchedule as ScheduleEntry[],
  "ocho-rios": ochoRiosSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getScheduleForPort(slug: string): ScheduleEntry[] {
  return portSchedules[slug] ?? [];
}

export function getScheduleForPortYear(slug: string, year: number): ScheduleEntry[] {
  const prefix = `${year}-`;
  return getScheduleForPort(slug).filter((entry) => entry.date.startsWith(prefix));
}

export function getShipCallCountForPortYear(slug: string, year: number): number {
  return getScheduleForPortYear(slug, year).length;
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function hasVerifiedScheduleData(slug: string): boolean {
  return (portSchedules[slug]?.length ?? 0) > 0;
}

export function hasVerifiedScheduleDataForYear(slug: string, year: number): boolean {
  return getShipCallCountForPortYear(slug, year) > 0;
}

export function getVerifiedScheduleEntriesForMonth(
  slug: string,
  monthKey: string,
): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleForPort(slug), monthKey).filter(
    (entry) => !entry.isPlaceholder,
  );
}

export function getVerifiedMonthKeysForPort(slug: string): string[] {
  return getMonthsWithEntries(getScheduleForPort(slug));
}

export function getVerifiedMonthKeysForPortYear(slug: string, year: ScheduleYear): string[] {
  return getVerifiedMonthKeysForPort(slug).filter((key) => key.startsWith(`${year}-`));
}

export function hasVerifiedScheduleDataForMonth(slug: string, monthKey: string): boolean {
  return getVerifiedScheduleEntriesForMonth(slug, monthKey).length > 0;
}

export function getAllVerifiedMonthPageParams(): { slug: string; period: string }[] {
  const params: { slug: string; period: string }[] = [];

  for (const slug of getAllSchedulePortSlugs()) {
    for (const monthKey of getVerifiedMonthKeysForPort(slug)) {
      params.push({ slug, period: monthKeyToSlug(monthKey) });
    }
  }

  return params;
}
