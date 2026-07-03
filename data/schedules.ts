import type { ScheduleEntry, ShipSchedulePort } from "./types";
import { getPassengerCapacityLabel } from "@/lib/ship-capacities";
import {
  filterEntriesByMonth,
  getMonthsWithEntries,
  monthKeyToSlug,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import { SCHEDULE_FAQS } from "./schedule-content";
import stThomasSchedule from "./imported-schedules/st-thomas.json";
import ochoRiosSchedule from "./imported-schedules/ocho-rios.json";
import tortolaSchedule from "./imported-schedules/tortola.json";
import stKittsSchedule from "./imported-schedules/st-kitts.json";
import cozumelSchedule from "./imported-schedules/cozumel.json";
import arubaSchedule from "./imported-schedules/aruba.json";
import grandCaymanSchedule from "./imported-schedules/grand-cayman.json";
import nassauSchedule from "./imported-schedules/nassau.json";
import roatanSchedule from "./imported-schedules/roatan.json";
import stMaartenSchedule from "./imported-schedules/st-maarten.json";
import puertoPlataSchedule from "./imported-schedules/puerto-plata.json";
import costaMayaSchedule from "./imported-schedules/costa-maya.json";
import puertoLimonSchedule from "./imported-schedules/puerto-limon.json";

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
  "st-kitts",
  "puerto-limon",
] as const;

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    country: "U.S. Virgin Islands",
    seoTitle: "St. Thomas Cruise Ship Schedule 2027",
    metaDescription:
      "Check the 2027 St. Thomas cruise ship schedule, published arrival and departure times at Havensight and Crown Bay to plan shore excursions around your port day.",
    intro:
      "This page helps cruise passengers see which ships are scheduled at St. Thomas and plan shore excursions around published arrival and departure times. St. Thomas is one of the Caribbean's busiest ports, so knowing how many vessels are in port can help you avoid crowded beaches and sold-out tours.",
    description:
      "Eastern Caribbean hub with Havensight and Crown Bay terminals serving year-round cruise traffic.",
    scheduleOverview:
      "St. Thomas regularly hosts multiple ships per day at Havensight and Crown Bay. This page lists published 2027 ship calls. Use the monthly tables to spot busy days before booking Magens Bay, St. John ferry trips, or catamaran snorkel sails.",
    relatedPortSlugs: ["st-maarten", "nassau", "puerto-plata"],
    excursionTypeSlugs: ["beaches", "snorkeling", "catamaran-cruises", "private-tours"],
    planningTips: [
      "Note whether your ship docks at Havensight or Crown Bay — Havensight is walkable to Charlotte Amalie shopping, while Crown Bay needs a short taxi to reach the same beaches.",
      "Dispatch a taxi to Magens Bay right after the gangway opens on multi-ship days; loungers and cabs thin out fast once several ships are in.",
      "Only attempt a St. John ferry day to Trunk Bay when arrival is before 9:00 AM and departure after 4:00 PM — it needs six to seven hours ashore.",
      "St. Thomas is a dock port, so no tender buffer is needed, but leave 45–60 minutes for taxi queues back from Magens Bay or the St. John ferry.",
      "Book catamaran snorkel sails with pier pickup at your assigned terminal so the operator meets you at the correct gate.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "cozumel",
    name: "Cozumel",
    country: "Mexico",
    seoTitle: "Cozumel Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Cozumel cruise ship schedule for 2026 and 2027 with published arrival and departure times at Punta Langosta, International Pier, and Puerta Maya. Plan reef snorkel, beach clubs, and Tulum tours around your port window.",
    intro:
      "Use this Cozumel cruise ship schedule to check which vessels are due in port and how long they stay before you book reef snorkel tours, beach clubs, or mainland Tulum excursions. Cozumel often hosts several ships daily during peak weeks — compare 2026 and 2027 sail dates if your itinerary spans seasons.",
    description:
      "Mexico's busiest cruise port with three piers serving Western Caribbean itineraries.",
    scheduleOverview:
      "Cozumel is among the world's busiest cruise ports, with multiple daily calls at Punta Langosta, International Pier, and Puerta Maya during peak season. Check monthly arrivals to plan Palancar Reef snorkel departures and avoid pier congestion on the busiest schedule days.",
    relatedPortSlugs: ["costa-maya", "roatan", "grand-cayman"],
    excursionTypeSlugs: ["snorkeling", "beaches", "catamaran-cruises", "adventure-tours"],
    planningTips: [
      "Confirm which of the three piers — Punta Langosta, International Pier, or Puerta Maya — your ship uses, since operators stage pickups at specific gates.",
      "Puerta Maya is farthest from downtown San Miguel; add 15–20 minutes each way for taxis if you dock there.",
      "Target first-departure reef boats to Palancar when arrival is before 9:30 AM, especially on three- or four-ship days.",
      "Only book a mainland Tulum combo when your departure allows seven to eight hours ashore including the Playa del Carmen ferry.",
      "All three Cozumel piers are dockside — no tenders — but returning to the wrong pier after a reef trip is the most common cause of late returns.",
    ],
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
    planningTips: [
      "Aruba docks at the Port of Oranjestad with downtown a five-minute walk — no tenders — so start beach taxis as soon as the gangway opens.",
      "Book Eagle Beach transfers for the first hour ashore on multi-ship days before loungers and cabs thin out.",
      "Reserve Arikok National Park 4x4 tours before sailing; the park has daily capacity limits.",
      "Aruba's sun is intense year-round — plan beach time for the morning and carry water and shade.",
      "Many Aruba calls depart in the evening, so an afternoon catamaran snorkel sail is feasible when departure is 6:00 PM or later.",
    ],
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
      "Grand Cayman is a tender port — allow 20–40 minutes each way plus queue time on top of your excursion duration.",
      "Keep 60–75 minutes before all-aboard, not the 30-minute dock-port minimum, and add margin on multi-ship anchorage days.",
      "Join the first Stingray City departure after your tender clears rather than waiting for late-morning slots.",
      "Rough seas can suspend tendering entirely — choose excursions with flexible cancellation and keep a ship-side backup plan.",
      "Skip long Seven Mile Beach transfers when your arrival is delayed by tender backlog.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "nassau",
    name: "Nassau",
    country: "Bahamas",
    seoTitle: "Nassau Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Nassau cruise ship schedule for 2026 and 2027 with published Prince George Wharf arrivals and departures. Plan Atlantis, snorkel, and downtown excursions around your port window.",
    intro:
      "Check which cruise ships are scheduled at Nassau's Prince George Wharf and their arrival and departure times before you book Atlantis Aquaventure, snorkel tours, or downtown walking excursions. Nassau is the Caribbean's busiest schedule port — use monthly tables to avoid peak multi-ship days.",
    description:
      "High-volume Bahamas port on short Florida and Caribbean itineraries.",
    scheduleOverview:
      "Nassau handles heavy volumes from Florida-based Bahamas and Caribbean sailings, with multiple mega-ships frequently sharing the downtown pier. Use monthly schedules to plan Atlantis and snorkel tours before peak call days sell out.",
    relatedPortSlugs: ["grand-cayman", "st-thomas", "st-maarten"],
    excursionTypeSlugs: ["beaches", "family-tours", "adventure-tours", "private-tours"],
    planningTips: [
      "Nassau docks at Prince George Wharf downtown — no tenders — so walkable sightseeing starts as soon as the gangway opens.",
      "Book Atlantis Aquaventure passes ahead on peak weeks; they need five to six hours plus bridge transfer time.",
      "Reserve morning snorkel catamarans to Rose Island when arrival is before 9:00 AM.",
      "Only book an Exuma swimming-pig flight on the longest port days with a late-afternoon departure.",
      "Walk back to Prince George Wharf 45–60 minutes before departure; bridge traffic from Paradise Island builds on multi-ship days.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "roatan",
    name: "Roatán",
    country: "Honduras",
    seoTitle: "Roatán Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Roatán cruise ship schedule for 2026 and 2027 with published Mahogany Bay and Coxen Hole arrivals and departures. Plan reef snorkel and West Bay Beach excursions around your port window.",
    intro:
      "This Roatán schedule helps you see which ships are due at Mahogany Bay or Coxen Hole and plan reef snorkel, beach, and zip-line excursions around your published port times. Compare 2026 and 2027 monthly tables when choosing between sail dates.",
    description:
      "Western Caribbean port with strong reef snorkeling demand at Mahogany Bay.",
    scheduleOverview:
      "Roatán's call volumes vary by week, with Carnival, Norwegian, and Royal Caribbean among regular visitors. Check monthly arrivals before booking West Bay snorkel tours or Gumbalimba Park adventures on shared pier days.",
    relatedPortSlugs: ["cozumel", "costa-maya", "grand-cayman"],
    excursionTypeSlugs: ["snorkeling", "beaches", "adventure-tours", "family-tours"],
    planningTips: [
      "Confirm whether you dock at Mahogany Bay Cruise Center or Port of Roatán at Coxen Hole — Coxen Hole is closer to West Bay Beach.",
      "Taxi to West Bay within the first hour on multi-ship days before loungers run short.",
      "Both terminals are dockside — no tenders — but verify your terminal name with operators so pickup happens at the right gate.",
      "Book Gumbalimba Park zip-lines before sailing when multiple Carnival or Norwegian ships share the day.",
      "Use Mahogany Bay's on-site beach only on shorter calls when a West Bay transfer is too tight.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "st-maarten",
    name: "St. Maarten",
    country: "Sint Maarten / Saint Martin",
    seoTitle: "St. Maarten Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "St. Maarten and SXM cruise ship schedule for 2026 and 2027 with published Philipsburg arrivals at the Dr. A.C. Wathey terminal. Plan Maho Beach, Orient Bay, and Sint Maarten dual-nation tours around your ship times.",
    intro:
      "Use this St. Maarten cruise ship schedule — often searched as SXM or Sint Maarten — to check which vessels are expected at the Dr. A.C. Wathey Cruise Facility in Philipsburg and plan Maho Beach, Orient Bay, and French-side excursions around arrival and departure times.",
    description:
      "Eastern Caribbean dual-nation port (Sint Maarten / Saint Martin) with year-round cruise traffic at Philipsburg.",
    scheduleOverview:
      "St. Maarten receives consistent Eastern and Southern Caribbean traffic at the Dr. A.C. Wathey terminal. Multi-ship Philipsburg days affect taxi availability to Maho Beach and Orient Bay. Review 2026 and 2027 monthly schedules before booking plane-spotting or beach club excursions.",
    relatedPortSlugs: ["st-thomas", "aruba", "puerto-plata"],
    excursionTypeSlugs: ["beaches", "catamaran-cruises", "private-tours", "family-tours"],
    planningTips: [
      "St. Maarten docks at the Dr. A.C. Wathey terminal in Philipsburg — no tenders — with a water taxi or 15-minute walk to Front Street.",
      "Reach Maho Beach within 90 minutes of the gangway opening on multi-ship days for the best aircraft-spotting.",
      "Book Orient Bay transfers early when two or more large ships share Great Bay.",
      "Schedule French-side Grand Case or Marigot lunches only when departure is 4:00 PM or later.",
      "Share your ship's departure time with island taxi drivers, who queue on busy pier days.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "puerto-plata",
    name: "Puerto Plata",
    country: "Dominican Republic",
    seoTitle: "Puerto Plata Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Puerto Plata cruise ship schedule for 2026 and 2027 with published Amber Cove and Taíno Bay arrivals and departures. Plan waterfall and cable car shore excursions around your port window.",
    intro:
      "This Puerto Plata schedule covers ships calling at Amber Cove and Taíno Bay terminals. Check arrival and departure times before booking Teleférico cable car rides, 27 Waterfalls adventures, or colonial city tours. Both 2026 and 2027 monthly tables are available.",
    description:
      "Dominican Republic Amber Coast port serving Eastern Caribbean itineraries.",
    scheduleOverview:
      "Puerto Plata serves both Amber Cove and Taíno Bay with strong Carnival and MSC volumes on many Eastern Caribbean routes. Review monthly calls before booking waterfall excursions that require coach transfers from the pier.",
    relatedPortSlugs: ["st-maarten", "st-thomas", "ocho-rios"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "private-tours", "snorkeling"],
    planningTips: [
      "Verify whether your ship uses Amber Cove or Taíno Bay — the two terminals are a few miles apart and coaches meet you at the correct gate.",
      "Book the 27 Waterfalls of Damajagua for the earliest coach slot; it needs five to six hours including transit and a safety briefing.",
      "Choose the Teleférico cable car or a colonial city tour on shorter calls when waterfall canyoning does not fit your departure.",
      "Both terminals are dockside — no tenders — but coach tours use strict cutoffs, so share your ship's departure when booking.",
      "Be back at your assigned terminal 45–60 minutes before departure to clear coach return traffic.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "costa-maya",
    name: "Costa Maya",
    country: "Mexico",
    seoTitle: "Costa Maya Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Costa Maya cruise ship schedule for 2026 and 2027 with published Mahahual cruise village arrivals and departures. Plan Mayan ruin and beach club excursions around your port window.",
    intro:
      "Check which cruise ships are scheduled at Costa Maya's purpose-built cruise village and plan Chacchoben ruins, Mahahual beach clubs, and snorkel tours around published arrival and departure times. Compare 2026 and 2027 sailings when booking ruin tours that need coach time.",
    description:
      "Mexican Caribbean port village near Mahahual on Western Caribbean routes.",
    scheduleOverview:
      "Costa Maya typically hosts one to three ships at the cruise village pier. Carnival and Royal Caribbean are frequent callers. Check monthly schedules before booking ruin tours that need mainland coach time.",
    relatedPortSlugs: ["cozumel", "roatan", "ocho-rios"],
    excursionTypeSlugs: ["adventure-tours", "beaches", "snorkeling", "family-tours"],
    planningTips: [
      "Costa Maya docks at the single Mahahual cruise village pier — no tenders — with coaches staging from the pier area.",
      "Book Chacchoben ruins coaches for the first morning departure after the gangway opens on multi-ship days.",
      "Only attempt Bacalar Lagoon when departure allows six to seven hours ashore; otherwise choose Chacchoben or Mahahual.",
      "The on-site port pool crowds on triple-ship days — Mahahual village beaches are a short, less-crowded transfer.",
      "Coach tours use timed returns, so confirm your operator's cutoff against your ship's departure column.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "ocho-rios",
    name: "Ocho Rios",
    country: "Jamaica",
    seoTitle: "Ocho Rios Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Ocho Rios cruise ship schedule with published arrival and departure times for 2026 and 2027. Plan Dunn's River Falls and rainforest excursions around your port day.",
    intro:
      "This Ocho Rios cruise ship schedule shows which vessels are due in port and their published times, helping you plan Dunn's River Falls climbs, Mystic Mountain adventures, and private north-coast tours with safe return buffers.",
    description:
      "Jamaica north-coast adventure port for waterfall and rainforest excursions.",
    scheduleOverview:
      "Ocho Rios receives Western Caribbean traffic from Carnival, Royal Caribbean, and Norwegian with variable weekly counts. This page lists published ship calls for 2026 and 2027. Busy schedule days affect Dunn's River Falls timing, so plan early departures on multi-ship weeks.",
    relatedPortSlugs: ["costa-maya", "cozumel", "roatan"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "private-tours"],
    planningTips: [
      "Ocho Rios is a dock port — no tenders — with coaches meeting passengers at the pier for Dunn's River Falls and Mystic Mountain.",
      "Book the earliest Dunn's River Falls coach after the gangway opens; the climb is physical and busiest late morning.",
      "Only stack Dunn's River Falls with Mystic Mountain when departure is 4:00 PM or later — together they need about six hours plus transfers.",
      "Build in buffer for Jamaica road traffic on the return leg beyond the excursion's stated duration.",
      "Be back at the cruise pier 45–60 minutes before departure; coach tours use firm cutoffs.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "st-kitts",
    name: "St. Kitts",
    country: "St. Kitts & Nevis",
    seoTitle: "St. Kitts Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "St. Kitts cruise ship schedule with published 2026 and 2027 arrival and departure times at Basseterre. Plan Brimstone Hill, railway, and beach excursions around your port day.",
    intro:
      "This St. Kitts cruise ship schedule shows which vessels are expected at Basseterre and their published port times, helping you plan Brimstone Hill fortress visits, scenic railway tours, and beach excursions with safe return buffers.",
    description:
      "Eastern Caribbean port at Basseterre serving Southern Caribbean and multi-island itineraries.",
    scheduleOverview:
      "St. Kitts receives Eastern and Southern Caribbean traffic alongside St. Maarten and Tortola on many itineraries. Review monthly ship calls before booking railway tours or rainforest adventures on busy multi-ship days.",
    relatedPortSlugs: ["st-maarten", "tortola", "st-thomas"],
    excursionTypeSlugs: ["adventure-tours", "beaches", "private-tours", "family-tours"],
    planningTips: [
      "St. Kitts docks at Port Zante in Basseterre — no tenders — with downtown and taxi ranks minutes from the gangway.",
      "Reserve Scenic Railway seats before sailing; capacity is limited even on single-ship days.",
      "Visit Brimstone Hill Fortress in the morning before afternoon heat builds on the exposed walls.",
      "Only combine the railway and Brimstone Hill on calls exceeding roughly six hours ashore.",
      "Add a South Friars Beach stop only when departure is 3:30 PM or later.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "tortola",
    name: "Tortola",
    country: "British Virgin Islands",
    seoTitle: "Tortola Cruise Ship Schedule 2026 & 2027",
    metaDescription:
      "Tortola cruise ship schedule with published 2026 and 2027 arrival and departure times at Road Town. Plan BVI catamaran sails and Virgin Gorda trips around tender operations.",
    intro:
      "This Tortola cruise ship schedule shows which vessels are expected in Road Town harbor and their published port times. Ships anchor and use tenders, so check arrival and departure windows before booking catamaran sails or Virgin Gorda day trips.",
    description:
      "British Virgin Islands sailing hub with Road Town tender landings.",
    scheduleOverview:
      "Tortola receives Eastern Caribbean traffic alongside St. Thomas and St. Maarten on many itineraries. This page lists published ship calls for June through December 2026 and all of 2027. Multi-ship weeks affect tender queues and sailing excursion availability.",
    relatedPortSlugs: ["st-thomas", "st-maarten", "nassau"],
    excursionTypeSlugs: ["catamaran-cruises", "snorkeling", "private-tours", "beaches"],
    usesTender: true,
    planningTips: [
      "Tortola is a tender port at Road Town — add 20–40 minutes each way plus queue time to your excursion math.",
      "Clear the first tender wave before joining late-morning catamaran departures.",
      "Only attempt Virgin Gorda and The Baths on longer calls with calm seas — it needs five to six hours after you tender ashore.",
      "Hold 60–75 minutes before all-aboard so BVI boat tours can return you in time for the last tender.",
      "Choppy conditions can delay or suspend tendering, so pick operators with flexible policies.",
    ],
    faqs: SCHEDULE_FAQS,
  },
  {
    slug: "puerto-limon",
    name: "Puerto Limón",
    country: "Costa Rica",
    seoTitle: "Puerto Limón Cruise Ship Schedule 2026",
    metaDescription:
      "Puerto Limón 2026 cruise ship schedule for Limón Cruise Terminal arrivals and departures. Plan rainforest wildlife and Cahuita snorkel excursions around your port day.",
    intro:
      "Check which cruise ships are scheduled at Puerto Limón's Limón Cruise Terminal and plan sloth sanctuary tours, Veragua Rainforest adventures, and Cahuita snorkel excursions around published arrival and departure times.",
    description:
      "Costa Rica Caribbean coast port on Panama Canal and Southern Caribbean routes.",
    scheduleOverview:
      "Puerto Limón receives seasonal cruise traffic on Panama Canal partial transit and extended Caribbean sailings. Carnival, Princess, and other lines call during winter months. Check monthly schedules before booking rainforest tours that need disciplined pier return timing.",
    relatedPortSlugs: ["roatan", "costa-maya", "cozumel", "ocho-rios"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "snorkeling", "private-tours"],
    planningTips: [
      "Puerto Limón is a dock port, but the city is industrial — plan to leave on an organized coach to rainforest or wildlife sites.",
      "Book sloth sanctuary coaches for the first departure after the gangway opens.",
      "Choose a Cahuita snorkel over Veragua Rainforest when departure is before 3:00 PM; Veragua needs five to six hours.",
      "Tortuguero canal trips require essentially a full port day — verify departure before booking.",
      "Rainforest roads add return time, so confirm your ship's departure with the operator when you book.",
    ],
    faqs: SCHEDULE_FAQS,
  },
];

/** Verified schedule rows imported via scripts/import-schedules.mjs */
export const portSchedules: Record<string, ScheduleEntry[]> = {
  "st-thomas": stThomasSchedule as ScheduleEntry[],
  cozumel: cozumelSchedule as ScheduleEntry[],
  aruba: arubaSchedule as ScheduleEntry[],
  "grand-cayman": grandCaymanSchedule as ScheduleEntry[],
  nassau: nassauSchedule as ScheduleEntry[],
  roatan: roatanSchedule as ScheduleEntry[],
  "st-maarten": stMaartenSchedule as ScheduleEntry[],
  "puerto-plata": puertoPlataSchedule as ScheduleEntry[],
  "costa-maya": costaMayaSchedule as ScheduleEntry[],
  "puerto-limon": puertoLimonSchedule as ScheduleEntry[],
  "ocho-rios": ochoRiosSchedule as ScheduleEntry[],
  tortola: tortolaSchedule as ScheduleEntry[],
  "st-kitts": stKittsSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

function enrichScheduleEntry(entry: ScheduleEntry): ScheduleEntry {
  if (entry.passengers && entry.passengers !== "-") return entry;
  const passengers = getPassengerCapacityLabel(entry.ship);
  return passengers ? { ...entry, passengers } : entry;
}

export function getScheduleForPort(slug: string): ScheduleEntry[] {
  return (portSchedules[slug] ?? []).map(enrichScheduleEntry);
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

export function getScheduleDatesForPort(slug: string): string[] {
  return [
    ...new Set(
      getScheduleForPort(slug)
        .filter((entry) => !entry.isPlaceholder)
        .map((entry) => entry.date),
    ),
  ].sort();
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
