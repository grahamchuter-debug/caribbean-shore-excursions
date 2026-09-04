import type { FAQ } from "./types";
import type { ScheduleYear } from "@/lib/schedule-utils";
import { getAverageTimeInPort } from "./port-planning";
import { scheduleHubContent } from "./schedule-hub-content";

export const SCHEDULE_HUB_PORT_SLUGS = [
  "nassau",
  "cozumel",
  "st-maarten",
  "grand-cayman",
  "costa-maya",
  "roatan",
  "puerto-plata",
  "st-thomas",
  "aruba",
  "tortola",
  "ocho-rios",
  "st-kitts",
  "puerto-limon",
] as const;

export type ScheduleHubPortSlug = (typeof SCHEDULE_HUB_PORT_SLUGS)[number];

export type SchedulePageContentKey =
  | "home"
  | "year-2026"
  | "year-2027"
  | `${ScheduleHubPortSlug}-2026`
  | `${ScheduleHubPortSlug}-2027`
  | `${ScheduleHubPortSlug}-hub`;

export interface PlanningYourDayContent {
  summary: string;
  typicalActivities: string[];
  topAttractions: string[];
  recommendedExcursions: string[];
  timingConsiderations: string[];
  returnGuidance: string;
}

export interface SchedulePageInternalLink {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

export interface ScheduleHubPopularExcursion {
  name: string;
  description: string;
  duration: string;
}

export interface ScheduleHubDetails {
  popularExcursions: ScheduleHubPopularExcursion[];
  terminalInfo: string;
  tenderVsDock: string;
  typicalTimeInPort: string;
  bestExcursionTiming: string[];
}

export interface SchedulePageContent {
  intro: string;
  heroSubtitle?: string;
  whyPassengersUseTitle?: string;
  whyPassengersUse: string[];
  planningTitle?: string;
  planningYourDay: PlanningYourDayContent;
  faqs: FAQ[];
  internalLinks: SchedulePageInternalLink[];
  hubDetails?: ScheduleHubDetails;
}

// ---------------------------------------------------------------------------
// Generated per-port-year content for ports without hand-written year pages.
// Each profile injects destination-specific facts (terminals, piers, signature
// excursions, transfer quirks) so no two ports share copy. Planning-your-day and
// internal links are reused from the port's bespoke hub content to stay DRY while
// keeping cross-port uniqueness. Intro/why/FAQs are year-parameterized.
// ---------------------------------------------------------------------------

type GeneratedPortYearKey =
  | "st-thomas-2026"
  | "st-thomas-2027"
  | "aruba-2026"
  | "aruba-2027"
  | "grand-cayman-2026"
  | "grand-cayman-2027"
  | "roatan-2026"
  | "roatan-2027"
  | "puerto-plata-2026"
  | "puerto-plata-2027"
  | "costa-maya-2026"
  | "costa-maya-2027"
  | "ocho-rios-2026"
  | "ocho-rios-2027"
  | "tortola-2026"
  | "tortola-2027"
  | "puerto-limon-2026"
  | "puerto-limon-2027"
  | "st-kitts-2026"
  | "st-kitts-2027";

interface PortYearProfile {
  slug: ScheduleHubPortSlug;
  name: string;
  years: ScheduleYear[];
  terminalsPhrase: string;
  dockSentence: string;
  signatureList: string;
  crowdSubject: string;
  whyPassengersUse: string[];
  faqs: FAQ[];
}

const fillYear = (value: string, year: ScheduleYear): string =>
  value.replace(/%Y/g, String(year));

const portYearProfiles: PortYearProfile[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    years: [2027],
    terminalsPhrase: "the Havensight and Crown Bay terminals",
    dockSentence:
      "Both are dock berths with walk-off access — no tenders — but whether you land at Havensight or Crown Bay changes your taxi time to Magens Bay and whether Charlotte Amalie shopping is walkable.",
    signatureList: "Magens Bay loungers, a St. John ferry day, or a catamaran snorkel sail",
    crowdSubject: "days when two or more mega-ships share the terminals",
    whyPassengersUse: [
      "St. Thomas handles heavy Eastern Caribbean mega-ship traffic at two terminals — your %Y row shows whether you dock at Havensight or Crown Bay so operators stage pickup at the right gate.",
      "Magens Bay loungers and taxis thin out on multi-ship %Y days; the monthly table reveals overlap so you can book transfers before embarkation.",
      "A St. John ferry day to Trunk Bay needs six to seven hours ashore — the %Y departure column shows whether it fits or whether Sapphire Beach is the smarter choice.",
      "Duty-free Charlotte Amalie shopping is walkable from Havensight but not Crown Bay, so terminal assignment shapes your self-guided morning.",
    ],
    faqs: [
      {
        question: "Which St. Thomas terminal will my %Y ship use — Havensight or Crown Bay?",
        answer:
          "Both serve cruise traffic year-round. Your %Y monthly row lists the terminal for your sailing; confirm on the ship because operators need the correct pickup gate. Havensight sits beside Charlotte Amalie shopping, while Crown Bay is west of town.",
      },
      {
        question: "Does St. Thomas use tender boats in %Y?",
        answer:
          "No. Havensight and Crown Bay are dock terminals with walk-off access in %Y. Tender logistics do not apply, though taxi time between the terminals and Magens Bay still needs planning.",
      },
      {
        question: "Can I reach St. John on a %Y St. Thomas port day?",
        answer:
          "St. John day trips need roughly six to seven hours including round-trip ferry and beach time. Check your %Y departure column — if all-aboard is early afternoon, choose Magens Bay or a Sapphire Beach snorkel instead.",
      },
      {
        question: "How busy is St. Thomas on my %Y sailing date?",
        answer:
          "Open the %Y month that matches your cruise and count ships on the same date. St. Thomas regularly lists multiple large vessels, which drives Magens Bay crowds and snorkel-boat sellouts.",
      },
    ],
  },
  {
    slug: "aruba",
    name: "Aruba",
    years: [2026, 2027],
    terminalsPhrase: "the Port of Oranjestad",
    dockSentence:
      "Ships berth dockside at Oranjestad with downtown a five-minute walk — no tenders — and many Aruba calls carry late-evening departures that open afternoon catamaran sails other ports cannot fit.",
    signatureList: "Eagle Beach transfers, an Arikok 4x4 adventure, or a De Palm Island package",
    crowdSubject: "weeks that stack multiple ships in Oranjestad",
    whyPassengersUse: [
      "Aruba sits outside the hurricane belt with steady Southern Caribbean traffic — the %Y table shows which weeks stack multiple ships before you book Eagle Beach or Arikok tours.",
      "Oranjestad's docked terminals put downtown within a five-minute walk, so your %Y arrival column frames how soon independent beach taxis can start.",
      "Many %Y Aruba calls carry late-evening departures, opening afternoon catamaran snorkel sails that short Eastern Caribbean stops cannot fit.",
      "De Palm Island and Arikok have daily capacity limits — multi-ship %Y overlap helps you reserve before pier-side sellout.",
    ],
    faqs: [
      {
        question: "Is Aruba a tender or dock port in %Y?",
        answer:
          "Aruba is a dock port. %Y ships berth at the Port of Oranjestad with walk-off access to downtown and taxi ranks — no tender boats under normal conditions.",
      },
      {
        question: "How does the %Y Aruba schedule help with Eagle Beach planning?",
        answer:
          "Eagle Beach loungers and taxis thin out when several ships are in port. Your %Y monthly table shows overlap days so you can book organized transfers or arrive early rather than relying on brochure itinerary times.",
      },
      {
        question: "Why do Aruba passengers use %Y schedules for catamaran timing?",
        answer:
          "Many Aruba calls depart later than short Eastern Caribbean stops. The %Y departure column shows whether an afternoon snorkel sail fits with a safe return buffer to the Oranjestad terminal.",
      },
      {
        question: "How busy is Oranjestad on my %Y sailing date?",
        answer:
          "Open the %Y month that matches your cruise and count ships on the same date. Multiple large vessels mean fuller Eagle Beach clubs, longer taxi queues, and quicker Arikok 4x4 sellouts.",
      },
    ],
  },
  {
    slug: "grand-cayman",
    name: "Grand Cayman",
    years: [2026, 2027],
    terminalsPhrase: "the George Town anchorage",
    dockSentence:
      "Ships anchor offshore and passengers tender into George Town, so add 20–40 minutes each way plus queue time — and keep a weather-cancellation backup in mind, since rough seas can suspend tendering entirely.",
    signatureList: "Stingray City, a Seven Mile Beach transfer, or a reef snorkel boat",
    crowdSubject: "multi-ship anchorage days that lengthen tender queues",
    whyPassengersUse: [
      "Grand Cayman requires tenders into George Town — the %Y table lets you add 20–40 minutes each way to excursion math before booking Stingray City or snorkel boats.",
      "Rough seas can delay or cancel tender operations; knowing how many ships share your %Y anchorage day helps you prioritize early departures.",
      "Stingray City sandbar tours batch morning slots — the %Y arrival column shows whether you can make first boats after tender queues clear.",
      "Seven Mile Beach and Turtle Centre transfers depend on George Town landing times, so published %Y windows frame realistic return buffers.",
    ],
    faqs: [
      {
        question: "Does Grand Cayman have a cruise dock in %Y?",
        answer:
          "No. Ships anchor offshore in George Town harbor and passengers tender ashore in %Y. Rough seas can suspend tendering, which is why %Y schedule planning must include weather contingency.",
      },
      {
        question: "Why is the %Y Grand Cayman schedule especially important for excursions?",
        answer:
          "Tender queues, weather holds, and multi-ship anchorages add time dock ports do not. Your %Y row plus a tender buffer determines whether Stingray City and snorkel tours are realistic.",
      },
      {
        question: "How early should I book Stingray City for my %Y port day?",
        answer:
          "Book before you sail on weeks when the %Y table shows multiple ships at anchor. Operators stage morning departures around first tender waves — late arrivals after long queues can miss optimal sandbar windows.",
      },
      {
        question: "How much return buffer should I leave at Grand Cayman in %Y?",
        answer:
          "Plan to be at the George Town tender pier 60–75 minutes before published departure — longer than dock ports. Add margin when several ships anchor offshore or seas are choppy.",
      },
    ],
  },
  {
    slug: "roatan",
    name: "Roatán",
    years: [2026, 2027],
    terminalsPhrase: "the Mahogany Bay Cruise Center and Port of Roatán at Coxen Hole",
    dockSentence:
      "Ships dock at either terminal — no tenders — so confirm whether you berth at Mahogany Bay or Coxen Hole before booking West Bay transfers, since Coxen Hole sits closer to the beach.",
    signatureList: "a West Bay Beach snorkel, a Gumbalimba Park adventure, or a West End reef tour",
    crowdSubject: "days when Mahogany Bay and Coxen Hole both fill",
    whyPassengersUse: [
      "Roatán assigns ships to the Mahogany Bay Cruise Center or Port of Roatán at Coxen Hole — your %Y row helps match operators to the correct pier.",
      "West Bay Beach and reef snorkel offer Cozumel-quality visibility at lower prices, and %Y overlap days sell those slots out faster.",
      "Docked berths at both terminals simplify return timing versus tender ports, but taxi time to West Bay still depends on your %Y arrival column.",
      "Zip-line parks like Gumbalimba book out on %Y weeks with multiple Carnival and Norwegian calls — reserve before embarkation.",
    ],
    faqs: [
      {
        question: "Which Roatán pier does my %Y ship use — Mahogany Bay or Coxen Hole?",
        answer:
          "Cruise lines use both terminals. Open your %Y monthly table and confirm on the ship before booking — operators stage pickups at specific gates, and Coxen Hole is closer to West Bay.",
      },
      {
        question: "Is Roatán a tender port in %Y?",
        answer:
          "No. Both Mahogany Bay Cruise Center and Port of Roatán are dock berths with walk-off access in %Y. Tender logistics do not apply under normal conditions.",
      },
      {
        question: "How does the %Y Roatán schedule help with reef snorkel booking?",
        answer:
          "Reef boats and West Bay taxis scale with pier-day volume. When the %Y table shows two or more ships, book snorkel seats before embarkation and target morning departures after gangway opens.",
      },
      {
        question: "How busy is Roatán on my %Y sailing date?",
        answer:
          "Count the ships listed on your date in the %Y month table. Multiple Carnival, Norwegian, or Royal Caribbean calls mean fuller West Bay loungers and quicker Gumbalimba sellouts.",
      },
    ],
  },
  {
    slug: "puerto-plata",
    name: "Puerto Plata",
    years: [2026, 2027],
    terminalsPhrase: "the Amber Cove and Taíno Bay terminals",
    dockSentence:
      "Ships dock at either Amber Cove or Taíno Bay — two separate terminals a few miles apart — so your coach or taxi must meet you at the correct gate.",
    signatureList:
      "the Teleférico cable car, a 27 Waterfalls of Damajagua adventure, or a colonial city tour",
    crowdSubject: "days when both Amber Cove and Taíno Bay are occupied",
    whyPassengersUse: [
      "Puerto Plata splits calls between Amber Cove and Taíno Bay — the %Y table shows which terminal your ship uses so coaches meet you at the correct gate.",
      "Waterfall and cable-car excursions need mainland coach time; the %Y departure column determines whether 27 Charcos or Damajagua fits.",
      "Eastern Caribbean loops often stack Puerto Plata with St. Maarten or St. Thomas — %Y volumes help you avoid overbooking adventure days.",
      "Carnival and MSC volumes are strong here, so multi-ship %Y terminal days fill organized coaches before pier-side walk-up availability.",
    ],
    faqs: [
      {
        question: "What is the difference between Amber Cove and Taíno Bay in %Y?",
        answer:
          "They are separate Puerto Plata cruise terminals a few miles apart. Your %Y monthly row lists which facility your ship uses — coaches and taxis must meet you at the correct terminal gate.",
      },
      {
        question: "Is Puerto Plata a tender port in %Y?",
        answer:
          "No. Both Amber Cove and Taíno Bay are dedicated dock facilities with walk-off access in %Y. Adventure excursions use organized coaches from the pier area.",
      },
      {
        question: "Can I do 27 Waterfalls on a %Y Puerto Plata port day?",
        answer:
          "Yes on longer calls — Damajagua needs roughly five to six hours including coach time and a safety briefing. Check your %Y departure column; short turnarounds suit the Teleférico or a city tour instead.",
      },
      {
        question: "How busy is Puerto Plata on my %Y sailing date?",
        answer:
          "Open the %Y month and count ships across both terminals on your date. Strong Carnival and MSC volumes can fill waterfall and cable-car coaches early.",
      },
    ],
  },
  {
    slug: "costa-maya",
    name: "Costa Maya",
    years: [2026, 2027],
    terminalsPhrase: "the Mahahual cruise village pier",
    dockSentence:
      "Ships dock at the single cruise village pier — no tenders — but ruin and lagoon tours run on mainland coach time that dictates which excursions fit your departure.",
    signatureList: "a Chacchoben ruins coach, a Mahahual beach break, or a Bacalar lagoon expedition",
    crowdSubject: "multi-ship days that fill Chacchoben coaches by mid-morning",
    whyPassengersUse: [
      "Costa Maya concentrates ships at one Mahahual cruise village pier — the %Y table shows whether your sailing shares the dock with additional vessels affecting coach departures.",
      "Chacchoben and Bacalar excursions need mainland transit — %Y departure times show which tours fit without missed-ship risk.",
      "The on-site port pool is convenient but crowds on multi-ship %Y days; schedules help you weigh port-village time against Mahahual village transfers.",
      "Western loops often pair Costa Maya with Cozumel — the %Y table anchors planning before you cross-reference the busier Cozumel schedule.",
    ],
    faqs: [
      {
        question: "Is Costa Maya a tender port in %Y?",
        answer:
          "No. %Y ships dock at the dedicated Costa Maya cruise village with immediate access to the port complex. Coach excursions meet at the pier or village staging area.",
      },
      {
        question: "Can I fit Bacalar Lagoon using %Y Costa Maya schedule times?",
        answer:
          "Bacalar needs roughly six to seven hours round trip from the cruise village. Open your %Y sailing month's departure column — if all-aboard is mid-afternoon or earlier, choose Chacchoben or Mahahual instead.",
      },
      {
        question: "Why check the %Y schedule before booking Chacchoben ruins?",
        answer:
          "Coach departures batch around morning arrivals. When two or three ships share the pier on a %Y date, organized ruin tours sell out faster and port-village congestion slows pickup.",
      },
      {
        question: "How busy is Costa Maya on my %Y sailing date?",
        answer:
          "Count the ships on your date in the %Y month table. Carnival and Royal Caribbean call frequently, so multi-ship overlap can appear in any season.",
      },
    ],
  },
  {
    slug: "ocho-rios",
    name: "Ocho Rios",
    years: [2026, 2027],
    terminalsPhrase: "the Ocho Rios cruise pier",
    dockSentence:
      "Ships dock with walk-off access — no tenders — but Dunn's River Falls and Mystic Mountain run on coaches that batch around morning arrivals.",
    signatureList: "a Dunn's River Falls climb, Mystic Mountain, or a White River tubing float",
    crowdSubject: "multi-ship weeks that fill falls and mountain coaches",
    whyPassengersUse: [
      "Dunn's River Falls is time-sensitive — the %Y table shows arrival windows that fit a guided climb versus a shorter shopping stop.",
      "Mystic Mountain and rainforest adventures need coach transfers; the %Y departure column prevents booking bobsled runs that cannot return on time.",
      "Jamaica north-coast traffic varies by pier-day volume, so %Y overlap helps you grab early coach slots before sellout.",
      "Western loops often pair Ocho Rios with Cozumel or Costa Maya — %Y comparison builds realistic adventure pacing across ports.",
    ],
    faqs: [
      {
        question: "Is Ocho Rios a tender port in %Y?",
        answer:
          "No. %Y ships dock at the Ocho Rios cruise pier with walk-off access. Dunn's River Falls and Mystic Mountain excursions use coaches from the terminal area — no tender queues to factor in.",
      },
      {
        question: "How does the %Y schedule help with Dunn's River Falls timing?",
        answer:
          "Guided falls climbs batch around morning arrivals. Your %Y row shows whether you can reach the falls before crowds build and whether departure allows the full three-to-four-hour experience.",
      },
      {
        question: "Can I combine Dunn's River Falls and Mystic Mountain on one %Y port day?",
        answer:
          "Only on longer windows — together they need roughly six hours plus transfers. Check your %Y departure column; shorter calls should prioritize one adventure.",
      },
      {
        question: "How busy is Ocho Rios on my %Y sailing date?",
        answer:
          "Count ships on your date in the %Y month table. Multi-ship weeks fill falls and mountain coaches, so book first-slot departures early.",
      },
    ],
  },
  {
    slug: "tortola",
    name: "Tortola",
    years: [2026, 2027],
    terminalsPhrase: "the Road Town anchorage",
    dockSentence:
      "Ships anchor in Road Town harbour and passengers tender ashore, so add tender queue time and hold a 60–75 minute return buffer for BVI boat trips.",
    signatureList: "a BVI catamaran snorkel sail, a Virgin Gorda and The Baths day, or a Road Town stroll",
    crowdSubject: "multi-ship Road Town days that lengthen tender waits",
    whyPassengersUse: [
      "Tortola requires tenders at Road Town — the %Y table lets you add queue time before booking BVI catamaran departures.",
      "Virgin Gorda and The Baths need boat time plus tender logistics — %Y departure columns frame whether day sails are realistic.",
      "Eastern loops pair Tortola with St. Thomas and St. Maarten — comparing %Y volumes prevents overcommitted sailing days.",
      "Multi-ship Road Town %Y weeks lengthen tender waits and fill catamaran capacity, so overlap counts drive early booking.",
    ],
    faqs: [
      {
        question: "Does Tortola use tenders or a cruise dock in %Y?",
        answer:
          "Tortola is a tender port. %Y ships anchor in Road Town harbour and passengers reach shore via ship tenders. Allow extra queue time morning and afternoon versus docked St. Thomas calls.",
      },
      {
        question: "Can I reach Virgin Gorda on a %Y Tortola port day?",
        answer:
          "Yes on longer calls with calm seas. Open your %Y row, subtract tender time twice, then compare the remaining hours to a five-to-six-hour Virgin Gorda boat expedition.",
      },
      {
        question: "Why do BVI catamaran operators ask for %Y Tortola schedule times?",
        answer:
          "Sailing departures batch around tender completion. Operators need your %Y arrival and departure windows to plan boat return before the last tender — especially on multi-ship Road Town days.",
      },
      {
        question: "How much return buffer should I leave at Tortola in %Y?",
        answer:
          "Be at the Road Town tender pier 60–75 minutes before published departure. BVI boat tours must drop you with time for the last launch — tighter than dock ports like St. Thomas.",
      },
    ],
  },
  {
    slug: "puerto-limon",
    name: "Puerto Limón",
    years: [2026, 2027],
    terminalsPhrase: "the Limón Cruise Terminal",
    dockSentence:
      "Ships dock with walk-off access — no tenders — but the surrounding city is industrial, so nearly all passengers leave on organized coaches to rainforest and wildlife sites.",
    signatureList: "a sloth sanctuary visit, a Veragua Rainforest tour, or a Cahuita snorkel",
    crowdSubject: "the dates your itinerary actually calls, since Limón traffic is thinner than the mega-ports",
    whyPassengersUse: [
      "Puerto Limón is a coach-excursion port — %Y arrival times tell operators when to stage sloth sanctuary and rainforest pickups at the Limón Cruise Terminal.",
      "Wildlife tours need inland transit through lush terrain — the %Y departure column determines whether Veragua Rainforest or a shorter Cahuita snorkel fits.",
      "Puerto Limón is called less often than the mega-ports — the %Y table confirms whether your itinerary includes this port and on which dates.",
      "Rainforest weather can slow coach returns, so knowing your published %Y departure helps operators pad return times.",
    ],
    faqs: [
      {
        question: "Is Puerto Limón a tender port in %Y?",
        answer:
          "No. %Y ships dock at the Limón Cruise Terminal with walk-off access for organized coaches. Most passengers book shore excursions rather than exploring the industrial port city independently.",
      },
      {
        question: "Can I fit Veragua Rainforest using %Y schedule times?",
        answer:
          "Veragua needs roughly five to six hours including coach transit and aerial-tram time. Compare your %Y departure column — shorter calls suit the sloth sanctuary or a Cahuita snorkel instead.",
      },
      {
        question: "How much Puerto Limón schedule data exists for %Y?",
        answer:
          "Call volumes are thinner than mega-ports like Cozumel. Check your specific %Y sailing month rather than assuming daily multi-ship congestion.",
      },
      {
        question: "Why do Puerto Limón operators need %Y arrival times?",
        answer:
          "Coaches batch pickups around gangway opening. Rainforest roads and wildlife briefings add fixed time, so operators use your %Y arrival window to plan return before all-aboard.",
      },
    ],
  },
  {
    slug: "st-kitts",
    name: "St. Kitts",
    years: [2026, 2027],
    terminalsPhrase: "Port Zante in Basseterre",
    dockSentence:
      "Ships dock at Port Zante with walk-off access — no tenders — and the Scenic Railway and Brimstone Hill both run on capacity-limited coaches.",
    signatureList: "the St. Kitts Scenic Railway, Brimstone Hill Fortress, or a South Friars Beach break",
    crowdSubject: "single-ship versus dual-ship days at Basseterre",
    whyPassengersUse: [
      "St. Kitts receives Eastern and Southern Caribbean traffic at Port Zante — the %Y table shows whether your sailing shares Basseterre with another vessel affecting railway and fortress capacity.",
      "The Scenic Railway and Brimstone Hill both need half-day blocks — %Y departure columns size realistic combinations.",
      "Smaller call volumes can mean easier beach access than mega-ports — the %Y table confirms whether your week is a quiet single-ship day or a busier overlap.",
      "Neighbouring St. Maarten and Tortola often share the itinerary — %Y hub comparison helps cross-port pacing.",
    ],
    faqs: [
      {
        question: "Is St. Kitts a tender port in %Y?",
        answer:
          "No. %Y ships dock at Port Zante in Basseterre with walk-off access to downtown and taxi ranks. Tender logistics do not apply at the main cruise berth.",
      },
      {
        question: "Can I do the Scenic Railway and Brimstone Hill on one %Y port day?",
        answer:
          "Only on longer calls exceeding roughly six hours ashore. Check your %Y departure column — most passengers pick one headline experience plus a short beach or downtown stop.",
      },
      {
        question: "Why check %Y St. Kitts schedules before booking excursions?",
        answer:
          "Railway seating and fortress coaches are capacity-limited. Even one additional ship in Basseterre can fill organized tours, so the %Y rows show overlap before you pay non-refundable deposits.",
      },
      {
        question: "How busy is St. Kitts on my %Y sailing date?",
        answer:
          "Call volumes are lower than St. Thomas or Cozumel. Use the %Y table to confirm single-ship versus dual-ship days rather than assuming peak-season congestion.",
      },
    ],
  },
];

function buildPortYearContent(
  profile: PortYearProfile,
  year: ScheduleYear,
): SchedulePageContent {
  const hub = scheduleHubContent[`${profile.slug}-hub`];
  return {
    intro: `This ${year} ${profile.name} cruise ship schedule lists published arrivals and departures at ${profile.terminalsPhrase}. ${profile.dockSentence} Before booking ${profile.signatureList}, check the monthly ${year} tables for ${profile.crowdSubject} so you can reserve popular operators early.`,
    whyPassengersUse: profile.whyPassengersUse.map((point) => fillYear(point, year)),
    planningYourDay: hub.planningYourDay,
    faqs: profile.faqs.map((faq) => ({
      question: fillYear(faq.question, year),
      answer: fillYear(faq.answer, year),
    })),
    internalLinks: hub.internalLinks,
  };
}

// St. Thomas 2026 has zero published calls but strong intent and full 2027 data,
// so it stays indexed with a tailored editorial reference rather than a data table.
const stThomas2026Content: SchedulePageContent = {
  intro:
    "Published St. Thomas ship calls currently concentrate in 2027, so this 2026 page is a planning reference for passengers whose itineraries pre-date the imported dataset. St. Thomas docks at the Havensight and Crown Bay terminals — no tenders — and the guidance below on Magens Bay timing, St. John ferry windows, and terminal-specific taxis applies to any St. Thomas port day. Open the 2027 schedule for the full month-by-month ship list.",
  whyPassengersUse: [
    "St. Thomas docks at Havensight and Crown Bay — no tenders — so your terminal assignment, not tender queues, is the main variable in a St. Thomas port day.",
    "Magens Bay is roughly 20 minutes by taxi; on any busy pier day loungers and taxis thin out, so organized transfers beat curbside waits.",
    "A St. John ferry day to Trunk Bay needs six to seven hours ashore — size it against your ship's departure before committing.",
    "For published month-by-month ship lists, open the St. Thomas 2027 schedule, where the current dataset concentrates.",
  ],
  planningYourDay: scheduleHubContent["st-thomas-hub"].planningYourDay,
  faqs: [
    {
      question: "Why does the 2026 St. Thomas schedule show few published calls?",
      answer:
        "Our imported dataset currently concentrates St. Thomas calls in 2027. This 2026 page remains a planning reference for terminal logistics, Magens Bay timing, and St. John ferry windows; open the St. Thomas 2027 schedule for the full month-by-month ship list.",
    },
    {
      question: "Which St. Thomas terminal will my ship use — Havensight or Crown Bay?",
      answer:
        "Both serve cruise traffic year-round. Confirm your terminal on the ship because operators need the correct pickup gate. Havensight sits beside Charlotte Amalie shopping, while Crown Bay is west of town and needs a short taxi to reach the same beaches.",
    },
    {
      question: "Does St. Thomas use tender boats?",
      answer:
        "No. Havensight and Crown Bay are dock terminals with walk-off access. Tender logistics do not apply, though taxi time between the terminals and Magens Bay still needs planning.",
    },
    {
      question: "Can I visit St. John on a St. Thomas port day?",
      answer:
        "St. John day trips need roughly six to seven hours including round-trip ferry and beach time. If all-aboard is early afternoon, choose Magens Bay or a Sapphire Beach snorkel instead.",
    },
  ],
  internalLinks: scheduleHubContent["st-thomas-hub"].internalLinks,
};

const generatedPortYearContent = portYearProfiles.reduce(
  (acc, profile) => {
    for (const year of profile.years) {
      acc[`${profile.slug}-${year}` as GeneratedPortYearKey] = buildPortYearContent(
        profile,
        year,
      );
    }
    return acc;
  },
  { "st-thomas-2026": stThomas2026Content } as Record<
    GeneratedPortYearKey,
    SchedulePageContent
  >,
);

const schedulePageContent: Record<SchedulePageContentKey, SchedulePageContent> = {
  ...scheduleHubContent,
  ...generatedPortYearContent,
  home: {
    intro:
      "This is the starting point for Caribbean cruise ship and port schedules across our busiest destinations. Whether you are comparing 2026 and 2027 sailings, checking how many ships share a pier on your port day, or lining up shore excursions before you sail, open the year hub or port page that matches your itinerary and work backward from published arrival and departure times.",
    heroSubtitle:
      "Published Caribbean cruise ship schedules for 2026 and 2027 — compare port call volumes, plan shore excursions around arrival windows, and link through to local specialist operators.",
    whyPassengersUse: [
      "Match shore excursions to your actual in-port window before you pay deposits — reef snorkel sails, Atlantis day passes, and mainland Tulum combos all need enough time ashore.",
      "Spot busy pier days when multiple mega-ships share Nassau, Cozumel, or St. Thomas so you can book early or choose less crowded alternatives.",
      "Build a realistic return buffer: docked ports still need 30–60 minutes before all-aboard, and tender ports like Grand Cayman need extra margin on top of published departure times.",
      "Compare 2026 versus 2027 call patterns when choosing between sail dates or extending a Western versus Eastern Caribbean itinerary.",
    ],
    planningYourDay: {
      summary:
        "Every Caribbean port day follows the same rhythm — confirm your ship's times, pick one anchor experience, then layer shorter stops around safe return margins.",
      typicalActivities: [
        "Morning reef snorkel or catamaran sail while waters are calm and tour boats have capacity",
        "Midday beach club or downtown exploration when pier-adjacent towns like Nassau and Cozumel are walkable",
        "Afternoon highlights tour or shorter cultural stop if your ship has a late departure",
      ],
      topAttractions: [
        "Nassau — Paradise Island, Atlantis Aquaventure, and walkable downtown from Prince George Wharf",
        "Cozumel — Palancar Reef, San Miguel shopping, and Chankanaab beach park",
        "St. Thomas — Magens Bay, St. John ferry day trips, and Havensight shopping",
      ],
      recommendedExcursions: [
        "Signature reef snorkel or stingray encounters on Western Caribbean ports",
        "Half-day culture and beach combos on Eastern Caribbean hub calls",
        "Private drivers when you want flexible timing across multiple stops",
      ],
      timingConsiderations: [
        "Open your port's year page first, then the month that matches your sailing",
        "Full-day mainland tours (Tulum from Cozumel, Exuma pigs from Nassau) need the longest port windows",
        "Multi-ship days sell out popular operators by mid-morning — book must-do tours before you sail",
      ],
      returnGuidance:
        "Plan to be back at your pier or tender pickup point at least 30–60 minutes before published departure. Add more time on tender ports, after long taxi rides, or when several ships are in port and terminal queues build.",
    },
    faqs: [
      {
        question: "How do I find my port's cruise ship schedule on this site?",
        answer:
          "Start here, choose 2026 or 2027, then open your destination's port page. Each port has monthly tables with ship names, arrival and departure times, and estimated time in port. Nassau and Cozumel pages are the busiest and include dedicated passenger planning sections.",
      },
      {
        question: "Why check the schedule before booking shore excursions?",
        answer:
          "Your in-port window determines which tours are realistic. A seven-hour Cozumel call can fit Palancar Reef snorkel; a short Nassau stop may suit downtown and Atlantis better than a flight to Exuma. Matching excursions to published schedule times reduces missed-departure risk.",
      },
      {
        question: "Do busy port days affect excursion availability?",
        answer:
          "Yes. When three or more ships call at Nassau or Cozumel, popular snorkel boats, Atlantis passes, and private drivers book out faster. The schedule shows how many vessels share your pier day so you can reserve early or pick less crowded alternatives.",
      },
      {
        question: "Are arrival and departure times on this hub guaranteed?",
        answer:
          "No — published schedules are planning guides. Weather, pier assignments, tender conditions, and cruise line changes can shift times. Always confirm the daily program on your ship before leaving for an independent excursion.",
      },
    ],
    internalLinks: [
      {
        label: "2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Master hub with published 2026 ship calls ranked by port volume.",
      },
      {
        label: "2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "Compare 2027 call volumes — Nassau and Cozumel lead published call counts.",
      },
      {
        label: "Cruise Planner",
        href: "/cruise-planner",
        description: "Step-by-step itinerary planning across Eastern, Western, and Southern Caribbean routes.",
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "Ranked call volumes and passenger estimates for multi-port planning.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Prince George Wharf arrivals with dock-side excursion planning.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Three-pier schedule with reef and mainland tour timing guidance.",
      },
    ],
  },

  "year-2026": {
    intro:
      "The 2026 master hub collects published Caribbean cruise ship schedules in one place so you can compare call volumes before you lock in shore excursions. Every listed port has a dedicated 2026 page with monthly arrival and departure tables — use the rankings below to see which terminals handle the heaviest traffic, then drill into Nassau, Cozumel, or your specific destination.",
    heroSubtitle:
      "Master 2026 hub: rank Caribbean ports by published ship calls, compare busy pier weeks, and plan shore excursions around published arrival and departure times.",
    whyPassengersUse: [
      "Compare how many ships call at each port across 2026 before choosing between Eastern, Western, or Southern Caribbean itineraries.",
      "Identify peak multi-ship weeks at Nassau and Cozumel when Atlantis, reef snorkel, and beach-club operators sell out earliest.",
      "Anchor excursion bookings to published arrival and departure windows instead of guessing from brochure itineraries.",
      "Cross-check 2026 against 2027 sail dates when your travel dates span seasons or you are deciding between back-to-back cruises.",
    ],
    planningYourDay: {
      summary:
        "Use the 2026 hub to map your full itinerary, then open each port's year page for month-by-month ship lists and passenger planning detail.",
      typicalActivities: [
        "Scan the top-ports table to see which destinations dominate your route's call volume",
        "Open monthly pages for your sailing month to confirm exact ship names and pier times",
        "Book signature excursions at high-volume ports first, then fill shorter stops",
      ],
      topAttractions: [
        "Nassau — downtown Nassau and Paradise Island from a docked Prince George Wharf berth",
        "Cozumel — reef sites and San Miguel from Punta Langosta, International Pier, or Puerta Maya",
        "St. Thomas — dual-terminal calls at Havensight and Crown Bay with Magens Bay access",
      ],
      recommendedExcursions: [
        "Reef snorkel and catamaran sails on Western Caribbean 2026 itineraries",
        "Beach-and-culture combos on Eastern Caribbean hub ports",
        "Private drivers when your 2026 schedule shows a late departure",
      ],
      timingConsiderations: [
        "Winter and spring 2026 weeks carry the highest multi-ship counts at Nassau and Cozumel",
        "Months still marked 'Schedule data being updated' should not be used for firm excursion bookings yet",
        "Late-departure ships open afternoon tour options that morning-only calls cannot fit",
      ],
      returnGuidance:
        "For every 2026 port day, work backward from published departure: allow 30–60 minutes at the terminal, more on tender ports like Grand Cayman and Tortola, and extra taxi time when your ship docks at Cozumel's Puerta Maya pier farthest from downtown.",
    },
    faqs: [
      {
        question: "Which Caribbean ports have the most 2026 cruise ship calls?",
        answer:
          "Published schedule rankings on this hub update as data is added. Nassau and Cozumel typically lead call volumes. Use the top-ports table to compare your itinerary's destinations and spot congested pier days before booking excursions.",
      },
      {
        question: "How do monthly 2026 schedule pages help excursion planning?",
        answer:
          "Monthly pages list every published ship call for that port and period with arrival, departure, and time-in-port columns. That lets you see whether your vessel shares the pier with two other mega-ships on the same Tuesday — critical for Nassau Atlantis and Cozumel reef departures.",
      },
      {
        question: "Should I compare 2026 schedules with 2027 before booking tours?",
        answer:
          "If you are choosing between sail dates or sailing twice in consecutive years, yes. Call patterns shift seasonally. Open the 2027 hub to see whether your preferred port week is busier or quieter in the alternate year.",
      },
      {
        question: "What if my 2026 port month shows schedule data being updated?",
        answer:
          "That month has not finished import yet. Use neighboring months for planning context, but confirm final times with your cruise line before booking non-refundable independent excursions tied to a specific arrival window.",
      },
    ],
    internalLinks: [
      {
        label: "2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "Compare next-year call volumes and seasonal patterns.",
      },
      {
        label: "Ship Schedules Home",
        href: "/ship-schedules",
        description: "Return to the main Caribbean schedule hub.",
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Itinerary planning for Nassau, St. Thomas, and Eastern hub ports.",
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Route planning for Cozumel, Grand Cayman, and Western loops.",
      },
      {
        label: "Nassau 2026 Schedule",
        href: "/ship-schedules/nassau/2026",
        description: "Docked Prince George Wharf schedule with excursion timing.",
      },
      {
        label: "Cozumel 2026 Schedule",
        href: "/ship-schedules/cozumel/2026",
        description: "Three-pier 2026 calls with reef tour departure guidance.",
      },
    ],
  },

  "year-2027": {
    intro:
      "The 2027 master hub is built for passengers comparing published ship calls across the Caribbean's busiest terminals. Nassau and Cozumel lead 2027 call volumes — use this page to rank ports by call count, jump to monthly tables, and plan shore excursions around published arrival and departure times before peak weeks fill popular operators.",
    heroSubtitle:
      "Master 2027 hub: Nassau and Cozumel lead published call volumes — compare every Caribbean port and plan excursions around published pier times.",
    whyPassengersUse: [
      "See which 2027 ports carry the heaviest traffic so you can prioritize excursion bookings at Nassau, Cozumel, and St. Thomas.",
      "Compare arrival windows across your full 2027 itinerary before paying deposits on reef snorkel, Atlantis, or mainland Tulum tours.",
      "Avoid planning around outdated assumptions — published 2027 rows replace guesswork with ship names and pier times.",
      "Link through to port-year pages that explain dock versus tender logistics and return-to-ship buffers for each destination.",
    ],
    planningYourDay: {
      summary:
        "Treat this 2027 hub as your itinerary map: rank ports by call volume, open each destination's 2027 page, then align one signature experience per stop with your published in-port window.",
      typicalActivities: [
        "Review busiest-port rankings and calendar seasonality before finalizing a 2027 sailing",
        "Open monthly grids for high-volume ports on your exact sailing dates",
        "Reserve must-do tours at Nassau and Cozumel when schedules show overlapping mega-ships",
      ],
      topAttractions: [
        "Nassau — Atlantis on Paradise Island and walkable Bahamian downtown",
        "Cozumel — Mesoamerican Barrier Reef sites and San Miguel plazas",
        "Aruba — Oranjestad dock with Eagle Beach and Arikok access",
      ],
      recommendedExcursions: [
        "Morning reef snorkel when 2027 schedules show afternoon departures",
        "Half-day downtown plus beach combos on short Nassau calls",
        "Regional cruise-planner routes for multi-port 2027 Eastern or Western loops",
      ],
      timingConsiderations: [
        "2027 peak weeks concentrate multiple ships at Nassau and Cozumel — book early",
        "Use the Caribbean Cruise Calendar 2027 for seasonal sailing patterns alongside this schedule data",
        "Puerta Maya and International Pier assignments in Cozumel affect taxi time to downtown",
      ],
      returnGuidance:
        "On 2027 sailings, aim to be at your pier or tender station 30–60 minutes before departure. Docked Nassau passengers walk straight off at Prince George Wharf; Cozumel passengers should confirm which of the three piers their ship uses before booking pier-side pickup.",
    },
    faqs: [
      {
        question: "Why do Nassau and Cozumel top the 2027 schedule rankings?",
        answer:
          "Both ports anchor high-frequency Florida and Caribbean itineraries with year-round traffic. Their 2027 pages list the most published ship calls in our dataset, making them essential stops for excursion planning and busy-day avoidance.",
      },
      {
        question: "How should I use 2027 monthly schedule pages for shore excursions?",
        answer:
          "Open your port's 2027 page, select the month you sail, and read arrival and departure columns for your ship and any others sharing the pier. That window is what reef operators, Atlantis transfers, and private drivers need when planning a sensible buffer before departure.",
      },
      {
        question: "Where can I see 2027 seasonal cruise patterns alongside schedules?",
        answer:
          "Pair this hub with the Caribbean Cruise Calendar 2027 and Busiest Caribbean Cruise Ports 2027 pages linked below. Schedules show daily ship calls; those tools show broader seasonality across regions.",
      },
      {
        question: "Can 2027 arrival times change after I book an excursion?",
        answer:
          "Yes. Cruise lines adjust for weather, pier availability, and operational needs. Treat published 2027 times as planning guides and reconfirm on your ship's daily program before disembarking.",
      },
    ],
    internalLinks: [
      {
        label: "2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Compare prior-year call volumes on the same ports.",
      },
      {
        label: "Caribbean Cruise Calendar 2027",
        href: "/caribbean-cruise-calendar-2027",
        description: "Peak months and regional seasonality for 2027 sailings.",
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "Passenger estimates and multi-port planning insights.",
      },
      {
        label: "Southern Caribbean Cruise Planner",
        href: "/southern-caribbean-cruise-planner",
        description: "Longer Southern loops including Aruba and St. Maarten.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Highest-volume 2027 Bahamas port schedule.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Busiest Western Caribbean 2027 pier schedule.",
      },
    ],
  },

  "nassau-2026": {
    intro:
      "This 2026 Nassau cruise ship schedule lists published arrivals and departures at Prince George Wharf — a downtown dock, not a tender port. Before you reserve Atlantis Aquaventure, Blue Lagoon dolphins, or a Rose Island snorkel sail, check which other vessels share your pier day; Nassau regularly hosts multiple mega-ships and popular operators book out on the busiest 2026 call dates.",
    whyPassengersUse: [
      "Prince George Wharf is steps from downtown Nassau, so your published 2026 arrival time directly controls how soon you can start walkable sightseeing or taxi to Paradise Island.",
      "Atlantis day passes and Exuma pig flights need long, predictable port windows — the schedule shows whether your 2026 call is long enough before you commit.",
      "Multi-ship 2026 days crowd Straw Market, cable-beach transfers, and snorkel catamarans; seeing all vessels in port helps you book early or pick morning departures.",
      "No tender boats means simpler return logistics than Grand Cayman, but you still need 30–60 minutes before all-aboard when downtown traffic backs up.",
    ],
    planningYourDay: {
      summary:
        "Nassau rewards passengers who match one anchor experience to their 2026 in-port window, then fill gaps with walkable downtown stops from the cruise terminal.",
      typicalActivities: [
        "Walk Queen's Staircase and explore historic downtown right off the pier on shorter calls",
        "Taxi or bridge transfer to Paradise Island for Atlantis beaches and Aquaventure on longer 2026 port days",
        "Catamaran snorkel to Rose Island or Blue Lagoon when morning departures fit your arrival time",
      ],
      topAttractions: [
        "Paradise Island & Atlantis — resort beaches, aquarium, and water park",
        "Queen's Staircase — 66-step historic limestone landmark in downtown Nassau",
        "Blue Lagoon Island — dolphin encounters and beach time by boat",
        "Cable Beach — resort strip west of downtown",
      ],
      recommendedExcursions: [
        "Atlantis Aquaventure day pass on six-hour-plus 2026 port windows",
        "Half-day snorkel and catamaran sail when two or fewer ships are scheduled",
        "Downtown heritage walk combined with a short beach stop on tight turnaround days",
      ],
      timingConsiderations: [
        "Exuma swimming-pig flights need essentially a full 2026 port day — verify departure is late afternoon",
        "Atlantis sells out on peak multi-ship weeks; cross-check the monthly table before booking",
        "Afternoon departures allow a morning Atlantis visit plus downtown shopping",
      ],
      returnGuidance:
        "Walk back to Prince George Wharf at least 45–60 minutes before your ship's 2026 published departure. Downtown Nassau is compact, but taxi queues at Paradise Island and late-afternoon traffic on the bridge can eat into your buffer.",
    },
    faqs: [
      {
        question: "Does the 2026 Nassau schedule show tender or dock arrivals?",
        answer:
          "Nassau is a dock port. Ships berth at Prince George Wharf in downtown Nassau with immediate walk-off access. You do not need tender boats, which simplifies excursion pickup and return timing compared with tender-only destinations.",
      },
      {
        question: "How do I plan Atlantis around the 2026 Nassau ship schedule?",
        answer:
          "Find your sailing date in the monthly 2026 table and note arrival and departure times. Atlantis Aquaventure needs roughly five to six hours plus bridge transfer time. If your ship arrives late morning or shares the pier with several others, book passes well ahead or choose a shorter downtown-and-beach combo.",
      },
      {
        question: "Why does the 2026 Nassau schedule matter for snorkel excursions?",
        answer:
          "Snorkel catamarans and Rose Island boats depart on fixed morning schedules. When three ships are in port on the same 2026 date, boats fill faster and pier-area traffic slows taxi pickups. The schedule shows those overlap days so you can reserve early.",
      },
      {
        question: "Can 2026 Prince George Wharf arrival times change?",
        answer:
          "Yes. Cruise lines adjust for weather, operational delays, and pier sequencing. Use the 2026 schedule for planning, then confirm final times on your ship's daily program before leaving for an independent Nassau excursion.",
      },
    ],
    internalLinks: [
      {
        label: "Nassau Port Guide",
        href: "/ports/nassau",
        description: "Excursions, beaches, and passenger tips for cruise visitors.",
      },
      {
        label: "Nassau Shore Excursions",
        href: "https://nassaucruiseexcursions.com",
        description: "Pier-aware operators who plan around published departure times.",
        external: true,
      },
      {
        label: "Bahamas Cruise Planner",
        href: "/bahamas-cruise-planner",
        description: "Multi-port Bahamas itinerary planning.",
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes that include Nassau hub calls.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Compare next-year call volumes on the same pier.",
      },
      {
        label: "All 2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Return to the 2026 master hub.",
      },
    ],
  },

  "nassau-2027": {
    intro:
      "Nassau leads Caribbean 2027 schedule volumes by call count, and this page shows every published Prince George Wharf arrival and departure for the year. Ships dock downtown — no tenders — so your listed 2027 times frame how much room you have for Atlantis, snorkel sails, and Bahamian culture ashore. Scan monthly tables for days when multiple vessels share the pier before you book must-do excursions.",
    whyPassengersUse: [
      "2027 Nassau call counts are among the highest in the Caribbean — knowing your exact pier day helps you avoid sold-out Atlantis and catamaran departures.",
      "Docked Prince George Wharf berths mean walk-off access; your 2027 arrival column tells you when downtown exploration realistically starts.",
      "Comparing 2027 ship lists across months reveals quieter weeks when private drivers and beach clubs have more availability.",
      "Published departure times set the hard cutoff for Paradise Island returns and Exuma day-trip flights.",
    ],
    planningYourDay: {
      summary:
        "On a 2027 Nassau port day, pick one headline experience sized to your published in-port window, then use the walkable downtown around Prince George Wharf for shorter fills.",
      typicalActivities: [
        "Morning Atlantis or Blue Lagoon transfer when 2027 schedules show early arrival",
        "Downtown heritage walk covering Queen's Staircase and Straw Market on medium-length calls",
        "Afternoon beach time at Cable Beach when your 2027 departure is evening",
      ],
      topAttractions: [
        "Paradise Island & Atlantis — water park, marine habitats, and resort beaches",
        "Queen's Staircase & Fort Fincastle — compact historic sites near the terminal",
        "Blue Lagoon Island — marine encounters a short boat ride from Nassau",
        "Rose Island — shallow snorkel stops on catamaran half-days",
      ],
      recommendedExcursions: [
        "Atlantis Aquaventure when your 2027 window exceeds six hours ashore",
        "Snorkel and catamaran combo for passengers prioritizing reef time over resort water parks",
        "Guided downtown culture tour on shorter 2027 turnaround calls",
      ],
      timingConsiderations: [
        "Peak 2027 weeks stack several mega-ships at Prince George Wharf — prioritize reservations",
        "Exuma pig excursions require flight time plus buffer; only book on longest 2027 port days",
        "Bridge traffic to Paradise Island intensifies when multiple ships discharge passengers simultaneously",
      ],
      returnGuidance:
        "Be back inside Prince George Wharf security at least 45–60 minutes before your 2027 published departure. Docked arrivals simplify logistics, but Atlantis and Blue Lagoon returns still depend on taxis or operator transfers hitting bridge traffic windows.",
    },
    faqs: [
      {
        question: "Why is the 2027 Nassau schedule important for excursion planning?",
        answer:
          "Nassau handles more published 2027 ship calls than nearly any Caribbean port. That volume drives operator sellouts and pier-area congestion. Your monthly 2027 row shows arrival, departure, and competing vessels so you can size tours realistically.",
      },
      {
        question: "Do Nassau cruise ships tender in 2027?",
        answer:
          "No. 2027 arrivals at Prince George Wharf are dockside. Passengers walk directly into downtown Nassau without tender boats, which makes punctual return easier than at tender ports — provided you allow time for taxi transfers from Paradise Island.",
      },
      {
        question: "How full is Nassau on my 2027 sailing date?",
        answer:
          "Open the month that matches your cruise and count how many ships list the same date. Two or more large vessels on one 2027 day typically mean longer Atlantis lines, fuller snorkel boats, and heavier downtown foot traffic.",
      },
      {
        question: "Should I use the 2027 schedule or my cruise line app for final times?",
        answer:
          "Use this 2027 schedule for advance excursion planning and busy-day research. Always confirm final arrival and departure on your ship's daily program before disembarking — cruise lines can adjust overnight.",
      },
    ],
    internalLinks: [
      {
        label: "Nassau Port Guide",
        href: "/ports/nassau",
        description: "Authority guide to excursions, logistics, and beaches.",
      },
      {
        label: "Nassau Shore Excursions",
        href: "https://nassaucruiseexcursions.com",
        description: "Local specialist listings with pier pickup details.",
        external: true,
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "See how Nassau ranks for 2027 call volume.",
      },
      {
        label: "Bahamas Cruise Planner",
        href: "/bahamas-cruise-planner",
        description: "Plan multi-day Bahamas cruise routes.",
      },
      {
        label: "Nassau 2026 Schedule",
        href: "/ship-schedules/nassau/2026",
        description: "Compare prior-year pier patterns.",
      },
      {
        label: "All 2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "2027 master hub with every port ranked.",
      },
    ],
  },

  "cozumel-2026": {
    intro:
      "This 2026 Cozumel cruise ship schedule tracks published arrivals at Punta Langosta, International Pier, and Puerta Maya — all dock berths with no passenger tenders. Cozumel often schedules three or more ships on peak 2026 days, which affects reef-boat departures, downtown congestion, and taxi times from the farthest pier. Check your month's table before booking Palancar snorkel, Chankanaab, or a mainland Tulum combo.",
    whyPassengersUse: [
      "Cozumel assigns ships across three piers — your 2026 schedule row helps confirm which terminal your vessel uses so operators meet you at the right gate.",
      "Reef snorkel boats and El Cielo catamarans run on fixed morning slots tied to port arrival times; the schedule shows whether you can make first departures.",
      "Multi-ship 2026 days strain San Miguel traffic and sell out popular operators long before all-aboard.",
      "Mainland Tulum tours need ferry time to Playa del Carmen plus road transit — only realistic on longer 2026 port windows shown in the departure column.",
    ],
    planningYourDay: {
      summary:
        "A 2026 Cozumel port day works best when you align pier location, reef or beach timing, and taxi routes before you leave the ship — no tenders, but three piers spread across the waterfront.",
      typicalActivities: [
        "Morning Palancar or Columbia reef snorkel when boats match your 2026 arrival",
        "Downtown San Miguel shopping and lunch when docked at Punta Langosta",
        "Chankanaab beach park or El Cielo sandbar catamaran on medium-length calls",
        "Full-day Tulum and beach combo only when departure allows seven to eight hours ashore",
      ],
      topAttractions: [
        "Palancar Reef — signature coral formations a short boat ride from pier areas",
        "San Miguel de Cozumel — plazas, restaurants, and shopping near downtown pier",
        "Chankanaab Beach Park — snorkel lagoon, dolphins, and facilities",
        "San Gervasio Mayan ruins — inland cultural stop by taxi",
      ],
      recommendedExcursions: [
        "Two-tank or single-site reef snorkel with pier pickup on busy 2026 schedule days",
        "Beach club pass when you want a fixed return time without mainland travel",
        "Private driver for San Gervasio plus a west-side beach on longer calls",
      ],
      timingConsiderations: [
        "Puerta Maya is farthest from downtown — add 15–20 minutes each way for taxis",
        "Tulum excursions require passenger ferry to Playa del Carmen; verify total 2026 time ashore",
        "Book reef trips early when monthly tables show three ships on your date",
      ],
      returnGuidance:
        "Plan to be back at your assigned Cozumel pier 45–60 minutes before 2026 published departure. Ships dock, not tender, but wrong-pier pickup mistakes and San Miguel traffic on multi-ship days are the most common causes of late returns.",
    },
    faqs: [
      {
        question: "Which Cozumel pier will my 2026 ship use?",
        answer:
          "Cruise lines rotate among Punta Langosta (downtown), International Pier, and Puerta Maya. Our 2026 schedule lists published calls; confirm your pier assignment on the ship before booking operators who offer pier-specific pickup.",
      },
      {
        question: "Does Cozumel use tender boats in 2026?",
        answer:
          "No. All three Cozumel cruise piers are dockside. Passengers walk off directly, which is faster than tender ports — but you must still know which pier your ship occupies for excursion meeting points.",
      },
      {
        question: "How does the 2026 Cozumel schedule help with reef snorkel timing?",
        answer:
          "Reef boats batch departures around morning arrivals. If your 2026 row shows a late morning arrival or multiple ships, book the earliest compatible snorkel slot or choose an operator that can time pier pickup after your actual gangway time.",
      },
      {
        question: "Can I fit Tulum using the 2026 Cozumel arrival and departure times?",
        answer:
          "Tulum combos need roughly seven to eight hours including ferry and road time. Compare your 2026 time-in-port column — if departure is mid-afternoon or earlier, pick an island-only reef or beach club instead.",
      },
    ],
    internalLinks: [
      {
        label: "Cozumel Port Guide",
        href: "/ports/cozumel",
        description: "Reef excursions, pier logistics, and passenger tips.",
      },
      {
        label: "Cozumel Cruise Excursions",
        href: "https://cozumelcruiseexcursion.com",
        description: "Pier-aware reef and beach operators.",
        external: true,
      },
      {
        label: "Mexican Caribbean Cruise Planner",
        href: "/mexican-caribbean-cruise-planner",
        description: "Cozumel-focused multi-port route planning.",
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western loops that include Cozumel hub calls.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Compare next-year three-pier call patterns.",
      },
      {
        label: "All 2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "2026 master hub with port rankings.",
      },
    ],
  },

  "cozumel-2027": {
    intro:
      "Cozumel ranks among the busiest 2027 Caribbean schedule ports, with daily calls spread across Punta Langosta, International Pier, and Puerta Maya. Every berth is a dock — no tenders — but pier assignment changes taxi times and operator pickup points. Use this 2027 table to see how many ships share your reef day before you commit to Palancar snorkel, Chankanaab, or a mainland Tulum expedition.",
    whyPassengersUse: [
      "2027 multi-ship Cozumel days fill reef boats and beach clubs by mid-morning — the schedule shows overlap before you sail.",
      "Three pier locations mean your 2027 arrival port affects how quickly you reach San Miguel or west-side snorkel docks.",
      "Departure times determine whether mainland Tulum is feasible or whether you should stay on-island for reef and beach clubs.",
      "Published 2027 rows replace brochure guesses with ship names and times independent operators need when planning a sensible buffer before departure.",
    ],
    planningYourDay: {
      summary:
        "Structure your 2027 Cozumel day around pier location and morning reef departures, then keep mainland tours in reserve only for the longest port windows.",
      typicalActivities: [
        "Reef snorkel at Palancar or El Cielo sandbar catamaran on standard-length 2027 calls",
        "San Miguel plaza lunch and shopping when docked at Punta Langosta",
        "Chankanaab all-in-one beach and snorkel lagoon for families",
        "Tulum and Riviera Maya beach on rare full-day 2027 windows",
      ],
      topAttractions: [
        "Palancar Reef — world-class visibility and coral formations",
        "El Cielo Sandbar — shallow starfish waters on catamaran trips",
        "San Miguel de Cozumel — walkable from the downtown pier",
        "Tulum ruins — mainland clifftop Mayan site via ferry and road",
      ],
      recommendedExcursions: [
        "Morning two-reef snorkel with operator tracking your 2027 pier assignment",
        "Chankanaab or Mr. Sanchos-style beach club for predictable return timing",
        "Island highlights tour covering ruins and a west-side beach on longer departures",
      ],
      timingConsiderations: [
        "2027 peak weeks can schedule four or more ships — book reef seats before cruise embarkation",
        "Ferry to Playa del Carmen adds roughly 45 minutes each way for Tulum combos",
        "International Pier and Puerta Maya passengers should pre-arrange taxis rather than hunt curbside",
      ],
      returnGuidance:
        "Be at the correct Cozumel pier 45–60 minutes before your 2027 published departure. Docking eliminates tender queues, but returning to the wrong pier after a reef trip is a common delay — verify pier name with your operator when you book.",
    },
    faqs: [
      {
        question: "How busy is Cozumel on my 2027 cruise date?",
        answer:
          "Open the 2027 month that matches your sailing and read every ship on that date. Cozumel frequently lists three or more vessels simultaneously, which affects reef-boat capacity, taxi availability, and downtown restaurant waits.",
      },
      {
        question: "Are Cozumel cruise passengers tendered in 2027?",
        answer:
          "No. Ships dock at Punta Langosta, International Pier, or Puerta Maya. Walk-off access is standard, but pier distance from downtown varies — factor that into your 2027 excursion pickup plan.",
      },
      {
        question: "Why does pier assignment matter for 2027 Cozumel excursions?",
        answer:
          "Operators stage pickups at specific gates. Puerta Maya is south of downtown; Punta Langosta is in the center. Matching your 2027 pier to the operator's meeting point avoids lost time at the start of your port day.",
      },
      {
        question: "How do I use 2027 departure times to avoid missing the ship?",
        answer:
          "Subtract 45–60 minutes for terminal buffer, then subtract excursion duration and taxi or ferry transit. If the math is tight on your 2027 row, choose a shorter reef trip or beach club with a fixed schedule instead of a mainland Tulum run.",
      },
    ],
    internalLinks: [
      {
        label: "Cozumel Port Guide",
        href: "/ports/cozumel",
        description: "Authority reef, beach, and logistics guide.",
      },
      {
        label: "Cozumel Cruise Excursions",
        href: "https://cozumelcruiseexcursion.com",
        description: "Specialist operator with three-pier pickup experience.",
        external: true,
      },
      {
        label: "Compare Cozumel vs Roatán",
        href: "/compare/roatan-vs-cozumel",
        description: "Reef value comparison for Western Caribbean planning.",
      },
      {
        label: "Mexican Caribbean Cruise Planner",
        href: "/mexican-caribbean-cruise-planner",
        description: "Multi-port Mexican Caribbean itineraries.",
      },
      {
        label: "Cozumel 2026 Schedule",
        href: "/ship-schedules/cozumel/2026",
        description: "Prior-year pier and call-volume comparison.",
      },
      {
        label: "All 2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "2027 master hub ranked by published calls.",
      },
    ],
  },

  "st-maarten-2026": {
    intro:
      "This 2026 St. Maarten cruise ship schedule — also searched as SXM cruise ship schedule 2026 or Sint Maarten ship calls — lists published arrivals and departures at the Dr. A.C. Wathey Cruise Facility in Philipsburg. Ships dock in Great Bay with no tenders, so your published 2026 times frame how much room you have for Maho Beach plane-spotting, Orient Bay beach clubs, and French-side dining before all-aboard.",
    whyPassengersUse: [
      "Philipsburg is a dock port — your 2026 arrival column tells you when gangway opens for Maho Beach taxis and water taxis to Front Street shopping.",
      "Multi-ship 2026 Great Bay days crowd Maho Beach viewpoints and Orient Bay loungers; the monthly table shows competing vessels on your exact date.",
      "Dual-nation tours crossing Sint Maarten and Saint Martin need five to six hours ashore — the 2026 departure time is the hard cutoff for Grand Case lunches.",
      "Catamaran sails and island highlights combos batch morning departures around pier arrivals — published 2026 schedules replace brochure guesses when planning a sensible buffer before departure.",
    ],
    planningYourDay: {
      summary:
        "On a 2026 St. Maarten port day, pick one signature experience sized to your published in-port window — Maho Beach aviation, Orient Bay swim, or a Dutch-and-French loop — then use Philipsburg's walkable waterfront for shorter fills.",
      typicalActivities: [
        "Morning Maho Beach visit for Princess Juliana aircraft approaches when 2026 arrivals are before 9:00 AM",
        "Orient Bay beach club afternoon on longer port windows across the French side",
        "Front Street Philipsburg duty-free shopping walkable from the Dr. A.C. Wathey terminal",
        "Grand Case lunch on the French side via taxi on six-hour-plus 2026 calls",
      ],
      topAttractions: [
        "Maho Beach — aircraft land over Maho Bay beside SXM airport",
        "Orient Bay — wide Atlantic beach with clubs and water sports on Saint Martin",
        "Philipsburg — Dutch capital with Front Street shopping near Great Bay",
        "Grand Case — French-side dining capital known for waterfront restaurants",
      ],
      recommendedExcursions: [
        "Maho Beach and island highlights combo on standard-length 2026 port windows",
        "Orient Bay beach break with fixed return transfer on multi-ship weeks",
        "Dual-nation circle tour covering Dutch Philipsburg and French Marigot markets",
      ],
      timingConsiderations: [
        "Maho Beach crowds peak when multiple 2026 ships discharge simultaneously — check monthly tables",
        "French-side dining runs slower; allow extra return time for Grand Case lunches",
        "Island traffic between Maho, Orient Bay, and Philipsburg intensifies on busy pier days",
      ],
      returnGuidance:
        "Be back at the Dr. A.C. Wathey terminal 45–60 minutes before your 2026 published departure. Docked arrivals avoid tender queues, but SXM island taxis can queue on multi-ship days — share your ship's departure time when booking independent drivers.",
    },
    faqs: [
      {
        question: "Is the 2026 St. Maarten schedule the same as an SXM cruise ship schedule?",
        answer:
          "Yes for planning purposes. Travelers often search 'cruise ship schedule SXM' or 'sxm cruise ship schedule 2026' when their itinerary lists Sint Maarten. This page shows published 2026 ship calls at the Dr. A.C. Wathey terminal in Philipsburg — the Dutch-side cruise dock.",
      },
      {
        question: "Does St. Maarten use tender boats in 2026?",
        answer:
          "No. 2026 arrivals at the Dr. A.C. Wathey Cruise Facility are dockside in Great Bay. Passengers walk off directly without tender boats, which simplifies return timing compared with Tortola or Grand Cayman on the same itinerary.",
      },
      {
        question: "How do I plan Maho Beach around the 2026 St. Maarten ship schedule?",
        answer:
          "Find your sailing date in the monthly 2026 table and note arrival time. Maho Beach is roughly 15 minutes by taxi from Philipsburg — reach it within 90 minutes of gangway opening on busy weeks when several ships share Great Bay.",
      },
      {
        question: "Can 2026 Dr. A.C. Wathey arrival times change after I book excursions?",
        answer:
          "Yes. Cruise lines adjust for weather, operational delays, and pier sequencing. Use the 2026 schedule for advance planning, then confirm final times on your ship's daily program before disembarking for Orient Bay or French-side tours.",
      },
    ],
    internalLinks: [
      {
        label: "St. Maarten Port Guide",
        href: "/ports/st-maarten",
        description: "Maho Beach, Orient Bay, and dual-nation passenger logistics.",
      },
      {
        label: "St. Maarten Shore Excursions",
        href: "https://stmaartenshoreexcursion.com",
        description: "Pier-aware operators who plan around published departure times.",
        external: true,
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes that include St. Maarten hub calls.",
      },
      {
        label: "Compare St. Thomas vs St. Maarten",
        href: "/compare/st-thomas-vs-st-maarten",
        description: "Eastern Caribbean hub port comparison.",
      },
      {
        label: "St. Maarten 2027 Schedule",
        href: "/ship-schedules/st-maarten/2027",
        description: "Compare next-year Philipsburg call volumes.",
      },
      {
        label: "St. Maarten Schedule Hub",
        href: "/ship-schedules/st-maarten",
        description: "Return to the dual-year SXM schedule hub.",
      },
      {
        label: "All 2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Return to the 2026 master hub.",
      },
    ],
  },

  "st-maarten-2027": {
    intro:
      "St. Maarten ranks among the busier 2027 Eastern Caribbean schedule ports, with more than 500 published Philipsburg calls listed for the year. This Sint Maarten cruise ship schedule page shows every Dr. A.C. Wathey terminal arrival and departure — ships dock in Great Bay with no tenders, so your 2027 times determine whether Maho Beach, Orient Bay, and French-side dining fit with a safe return buffer.",
    whyPassengersUse: [
      "2027 SXM call volume drives Maho Beach taxi demand and Orient Bay club sellouts — knowing your exact pier day helps you reserve before embarkation.",
      "Docked Dr. A.C. Wathey berths mean walk-off access; your 2027 arrival column frames when Philipsburg shopping and water-taxi transfers realistically start.",
      "Comparing 2027 ship lists across months reveals quieter weeks when private drivers and catamaran sails have more availability.",
      "Published 2027 departure times set the hard cutoff for dual-nation tours crossing Dutch Sint Maarten and French Saint Martin.",
    ],
    planningYourDay: {
      summary:
        "Structure your 2027 St. Maarten day around one headline experience matched to published gangway and all-aboard times, then layer shorter Philipsburg stops around island taxi realities.",
      typicalActivities: [
        "Early Maho Beach plane-spotting when 2027 schedules show arrival before 9:00 AM",
        "Orient Bay beach club with lunch on the French side for medium-length calls",
        "Catamaran snorkel sail to nearby islets on afternoons with late departure",
        "Marigot market and Grand Case dining loop on six-hour-plus 2027 port windows",
      ],
      topAttractions: [
        "Maho Beach — signature aircraft approaches over Maho Bay near SXM airport",
        "Orient Bay — Saint Martin's liveliest beach with clubs and water sports",
        "Philipsburg Front Street — duty-free shopping a water taxi from the terminal",
        "Marigot — French capital with open-air market and waterfront cafés",
      ],
      recommendedExcursions: [
        "Maho Beach experience when your 2027 window is four to five hours minimum",
        "Orient Bay transfer with reserved loungers on peak multi-ship 2027 weeks",
        "Island highlights tour combining Dutch Philipsburg and French Grand Case",
      ],
      timingConsiderations: [
        "Peak 2027 weeks stack multiple mega-ships in Great Bay — prioritize Maho and Orient Bay reservations",
        "French-side restaurants run on island time; build extra return margin for Grand Case lunches",
        "Princess Juliana flight schedules affect Maho Beach crowds independently of ship volume",
      ],
      returnGuidance:
        "Be inside Dr. A.C. Wathey terminal security 45–60 minutes before your 2027 published departure. Docked Philipsburg access simplifies logistics, but returns from Orient Bay and Maho still depend on island taxi availability on busy schedule days.",
    },
    faqs: [
      {
        question: "Why is the 2027 St. Maarten schedule important for SXM excursion planning?",
        answer:
          "St. Maarten handles hundreds of published 2027 ship calls at Philipsburg. That volume drives operator sellouts and Great Bay congestion. Your monthly 2027 row shows arrival, departure, and competing vessels so you can size Maho Beach and Orient Bay tours realistically.",
      },
      {
        question: "Do Sint Maarten cruise ships tender in 2027?",
        answer:
          "No. 2027 arrivals berth at the Dr. A.C. Wathey Cruise Facility with walk-off gangway access. No tender boats are used under normal conditions — unlike Tortola tender days on many Eastern Caribbean itineraries.",
      },
      {
        question: "How busy is Philipsburg on my 2027 sailing date?",
        answer:
          "Open the 2027 month that matches your cruise and count ships on the same date. Two or more large vessels typically mean longer Maho Beach taxi queues, fuller Orient Bay clubs, and heavier Front Street foot traffic.",
      },
      {
        question: "Should I use this 2027 schedule or my cruise line app for final SXM port times?",
        answer:
          "Use this 2027 St. Maarten schedule for advance excursion planning and busy-day research. Always confirm final arrival and departure on your ship's daily program before disembarking — cruise lines can adjust overnight.",
      },
    ],
    internalLinks: [
      {
        label: "St. Maarten Port Guide",
        href: "/ports/st-maarten",
        description: "Authority guide to Maho Beach, Orient Bay, and terminal logistics.",
      },
      {
        label: "St. Maarten Shore Excursions",
        href: "https://stmaartenshoreexcursion.com",
        description: "Local specialist listings with pier pickup details.",
        external: true,
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Plan multi-port Eastern Caribbean routes with St. Maarten calls.",
      },
      {
        label: "Compare St. Maarten vs Tortola",
        href: "/compare/st-maarten-vs-tortola",
        description: "Dock versus tender logistics on Eastern Caribbean itineraries.",
      },
      {
        label: "Virgin Islands Cruise Planner",
        href: "/virgin-islands-cruise-planner",
        description: "St. Thomas, Tortola, and St. Maarten multi-port planning.",
      },
      {
        label: "St. Maarten 2026 Schedule",
        href: "/ship-schedules/st-maarten/2026",
        description: "Compare prior-year Philipsburg pier patterns.",
      },
      {
        label: "St. Maarten Schedule Hub",
        href: "/ship-schedules/st-maarten",
        description: "Dual-year SXM schedule entry point.",
      },
      {
        label: "All 2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "2027 master hub with every port ranked.",
      },
    ],
  },
};

export function getSchedulePageContentKey(
  page: "home" | { year: ScheduleYear } | { portSlug: string; year: ScheduleYear },
): SchedulePageContentKey | null {
  if (page === "home") return "home";
  if ("year" in page && !("portSlug" in page)) return `year-${page.year}` as SchedulePageContentKey;
  if ("portSlug" in page && "year" in page) {
    const key = `${page.portSlug}-${page.year}` as SchedulePageContentKey;
    return key in schedulePageContent ? key : null;
  }
  return null;
}

export function getSchedulePageContent(
  key: SchedulePageContentKey,
): SchedulePageContent {
  return schedulePageContent[key];
}

export function getSchedulePageContentForPortYear(
  portSlug: string,
  year: ScheduleYear,
): SchedulePageContent | null {
  const key = getSchedulePageContentKey({ portSlug, year });
  return key ? getSchedulePageContent(key) : null;
}

export function getSchedulePageContentForPortHub(
  portSlug: string,
): SchedulePageContent | null {
  const key = `${portSlug}-hub` as SchedulePageContentKey;
  if (!(key in schedulePageContent)) return null;

  const content = schedulePageContent[key];
  const verifiedTime = getAverageTimeInPort(portSlug);
  if (!verifiedTime || !content.hubDetails) return content;

  return {
    ...content,
    hubDetails: {
      ...content.hubDetails,
      typicalTimeInPort: `${verifiedTime} — derived from published schedule data at this port.`,
    },
  };
}

export function isScheduleHubPortSlug(slug: string): slug is ScheduleHubPortSlug {
  return (SCHEDULE_HUB_PORT_SLUGS as readonly string[]).includes(slug);
}
