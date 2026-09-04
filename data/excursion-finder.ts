import { ports } from "./ports";
import { cruiseLines } from "./cruise-lines";
import { ships } from "./ships";
import { portExcursionAuthority } from "./port-excursion-authority";

export type TravellerTypeId =
  | "beach-lovers"
  | "snorkellers"
  | "families"
  | "adventure"
  | "private-tours"
  | "first-time";

export type FitnessLevel = "easy" | "moderate" | "active";
export type TimeInPort = "under-4" | "4-6" | "6-8" | "8-plus";

export interface TravellerTypeOption {
  id: TravellerTypeId;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
}

export interface CaribbeanRoutePreset {
  id: string;
  title: string;
  portSlugs: string[];
  tags: string[];
  description: string;
}

export interface PortDayMistake {
  portSlug: string;
  mistake: string;
  better: string;
}

export const travellerTypes: TravellerTypeOption[] = [
  {
    id: "beach-lovers",
    label: "Beach Lover",
    shortLabel: "Beaches",
    description: "Calm sand, beach clubs, and easy pier-to-shore transfers",
    icon: "🏖️",
  },
  {
    id: "snorkellers",
    label: "Snorkeller",
    shortLabel: "Reefs",
    description: "Reef boats, house reefs, and clear-water snorkel trails",
    icon: "🤿",
  },
  {
    id: "families",
    label: "Family Traveller",
    shortLabel: "Families",
    description: "Gentle tours, water parks, and mixed-age shore days",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "adventure",
    label: "Adventure Seeker",
    shortLabel: "Adventure",
    description: "Waterfalls, zip lines, ruins, and active port days",
    icon: "⛰️",
  },
  {
    id: "private-tours",
    label: "Private Tour Guest",
    shortLabel: "Private",
    description: "Custom pacing, smaller groups, and tailored routes",
    icon: "🚐",
  },
  {
    id: "first-time",
    label: "First-Time Cruiser",
    shortLabel: "First visit",
    description: "Iconic highlights without over-planning each port",
    icon: "⚓",
  },
];

export const fitnessLevels: { id: FitnessLevel; label: string; description: string }[] = [
  { id: "easy", label: "Easy", description: "Minimal walking, beach transfers, and calm water" },
  { id: "moderate", label: "Moderate", description: "Some climbing, boat rides, or uneven terrain" },
  { id: "active", label: "Active", description: "Waterfall hikes, long transfers, or full-day adventure" },
];

export const timeInPortOptions: { id: TimeInPort; label: string; hours: number }[] = [
  { id: "under-4", label: "Under 4 hours", hours: 3.5 },
  { id: "4-6", label: "4 to 6 hours", hours: 5 },
  { id: "6-8", label: "6 to 8 hours", hours: 7 },
  { id: "8-plus", label: "8+ hours", hours: 9 },
];

export const sailingMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const popularCaribbeanRoutes: CaribbeanRoutePreset[] = [
  {
    id: "eastern-classic",
    title: "Eastern Caribbean Classic",
    portSlugs: ["st-thomas", "st-maarten", "puerto-plata", "nassau", "tortola"],
    tags: ["Beaches", "Shopping", "First-time cruisers"],
    description: "The most common 7-night Eastern loop with beach-heavy port days and easy pier logistics.",
  },
  {
    id: "western-reef",
    title: "Western Reef Route",
    portSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya", "progreso", "puerto-limon"],
    tags: ["Snorkelling", "Wildlife", "Reef boats"],
    description: "Reef-forward Western Caribbean sailings where morning boat slots matter most.",
  },
  {
    id: "southern-sun",
    title: "Southern Sun Route",
    portSlugs: ["aruba", "curacao", "bonaire", "st-maarten"],
    tags: ["Beaches", "Catamarans", "Reliable weather"],
    description: "ABC and Dutch Caribbean ports with long beach windows and strong private-tour options.",
  },
  {
    id: "bahamas-beach",
    title: "Bahamas Beach Route",
    portSlugs: ["nassau", "grand-cayman"],
    tags: ["Families", "Beaches", "Short cruises"],
    description: "Popular shorter itineraries pairing Nassau waterparks with Grand Cayman wildlife sandbars.",
  },
  {
    id: "jamaica-adventure",
    title: "Jamaica Adventure Route",
    portSlugs: ["ocho-rios", "falmouth", "montego-bay"],
    tags: ["Waterfalls", "Rafting", "Active days"],
    description: "North-coast Jamaica calls built around Dunn's River, Martha Brae, and Doctor's Cave beach options.",
  },
  {
    id: "first-timer-favourites",
    title: "First-Timer Favourites",
    portSlugs: ["st-thomas", "cozumel", "nassau", "grand-cayman"],
    tags: ["Iconic highlights", "Easy logistics", "High reward"],
    description: "The four ports most first-time Caribbean cruisers remember, strong payoff with simple planning.",
  },
  {
    id: "dominican-coast",
    title: "Dominican Coast Route",
    portSlugs: ["puerto-plata", "samana", "la-romana"],
    tags: ["Waterfalls", "Whale watching", "Island catamarans"],
    description: "Eastern Caribbean sailings with Dominican Republic calls spanning Amber Coast adventures, Samaná whales, and Saona Island sails.",
  },
];

export const portDayMistakes: PortDayMistake[] = [
  {
    portSlug: "cozumel",
    mistake: "Don't book a late-morning reef boat on a short port call.",
    better: "Palancar and El Cielo need early departures. Pair reef time with downtown lunch only when you have 7+ hours ashore.",
  },
  {
    portSlug: "grand-cayman",
    mistake: "Don't sleep in on tender day.",
    better: "Stingray City and Seven Mile Beach both need early tender departures. Book the first boat and keep a 60 to 90 minute return buffer.",
  },
  {
    portSlug: "st-thomas",
    mistake: "Don't attempt St. John without checking ferry timing.",
    better: "Trunk Bay needs a 6+ hour port call. Magens Bay or Sapphire Beach fit shorter Eastern Caribbean schedules.",
  },
  {
    portSlug: "nassau",
    mistake: "Don't wander downtown without a plan on a half-day call.",
    better: "Atlantis, Paradise Island beach, or a short guided heritage walk match realistic Nassau port windows better than open-ended shopping.",
  },
  {
    portSlug: "roatan",
    mistake: "Don't assume every beach is walkable from the pier.",
    better: "West Bay and reef snorkel combos need a short taxi or organized transfer, still excellent value versus busier Western ports.",
  },
  {
    portSlug: "aruba",
    mistake: "Don't skip the beach on a weather-perfect day.",
    better: "Eagle Beach morning plus an afternoon catamaran sail is the highest-reward low-stress Aruba formula.",
  },
  {
    portSlug: "ocho-rios",
    mistake: "Don't arrive late for Dunn's River Falls.",
    better: "First-slot climbs avoid cruise-ship crowds. Stack Mystic Mountain or beach time only after the falls are done.",
  },
  {
    portSlug: "puerto-plata",
    mistake: "Don't stay only inside Amber Cove village.",
    better: "27 Charcos, Teleférico, or historic Puerto Plata deliver the Amber Coast payoff most passengers came for.",
  },
  {
    portSlug: "puerto-limon",
    mistake: "Don't expect a walkable resort beach town at the pier.",
    better: "Sloth sanctuary tours, Veragua Rainforest, or Cahuita snorkel deliver Limón's payoff. Book organized excursions that plan around your published pier times.",
  },
  {
    portSlug: "tortola",
    mistake: "Don't book a Virgin Gorda day trip on a short tender call.",
    better: "The Baths need 6+ hours ashore. Cane Garden Bay or a half-day BVI catamaran sail fit realistic Tortola port windows better.",
  },
  {
    portSlug: "progreso",
    mistake: "Don't treat Progreso as a reef snorkel port like Cozumel.",
    better: "Mérida colonial tours, Uxmal ruins, and Celestún flamingos deliver Progreso's payoff. Book early departures for inland routes.",
  },
  {
    portSlug: "samana",
    mistake: "Don't book whale watching outside peak season without a backup plan.",
    better: "Humpback tours peak January to March. El Limón waterfall and Los Haitises mangrove boats work year-round with similar nature payoff.",
  },
  {
    portSlug: "la-romana",
    mistake: "Don't underestimate Saona Island tour duration.",
    better: "Full-day catamaran sails need early pier departure and confirmed return timing. Altos de Chavón suits half-day calls better.",
  },
  {
    portSlug: "montego-bay",
    mistake: "Don't attempt Dunn's River Falls from Montego Bay on a standard port call.",
    better: "Doctor's Cave Beach, Rose Hall, and Hip Strip dining fit MoBay timing. Ocho Rios is the practical falls port with shorter transfers.",
  },
  {
    portSlug: "bonaire",
    mistake: "Don't expect traditional resort beaches at the pier.",
    better: "Bonaire rewards reef-entry snorkel and shore diving. Book guided marine park tours and bring water shoes for rocky entries.",
  },
  {
    portSlug: "curacao",
    mistake: "Don't skip Willemstad if you only book a beach transfer.",
    better: "Pair Tugboat Beach snorkel with a Handelskade walk. Curacao's culture-and-reef combo beats a beach-only half day.",
  },
  {
    portSlug: "st-maarten",
    mistake: "Don't split both nations without watching the clock.",
    better: "Choose Orient Bay beach club OR a Maho-and-Philipsburg loop. Dual-nation days need disciplined taxi timing on shorter calls.",
  },
  {
    portSlug: "costa-maya",
    mistake: "Don't stay only inside the cruise village on a full-day call.",
    better: "Chacchoben ruins or Mahahual beach clubs deliver Costa Maya's value. The port pool works only when you want a low-transfer day.",
  },
  {
    portSlug: "falmouth",
    mistake: "Don't drive to Dunn's River from Falmouth on a short call.",
    better: "Martha Brae rafting and historic Falmouth walks are the port's signature experiences with reliable return timing.",
  },
];

export const finderFaqs = [
  {
    question: "Is the Caribbean Excursion Finder powered by live AI?",
    answer:
      "No. It uses rules-based logic to produce personalised shore excursion recommendations. It is not connected to live availability or a booking database.",
  },
  {
    question: "What is the Caribbean Cruise Match score?",
    answer:
      "An overall score out of 100 summarising how well your selected ports, traveller style, fitness level, and time ashore align with recommended excursions. Each port also shows a match label, Excellent Match, Strong Match, Good Match, or Possible Match, so you can compare recommendations at a glance.",
  },
  {
    question: "What do return-to-ship confidence labels mean?",
    answer:
      "Green means a comfortable fit for your stated port time. Amber means confirm exact timings with your operator. Red means avoid longer tours unless your port call is extended or you book a cruise-line excursion that includes the line's return policy.",
  },
  {
    question: "Can I check ship schedules from my plan?",
    answer:
      "Yes. Where we publish schedules, each port recommendation links to the ship schedule hub so you can see multi-ship days before booking tours.",
  },
];

export const featuredFinderPortSlugs = [
  "st-thomas",
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "st-maarten",
  "curacao",
  "costa-maya",
  "puerto-limon",
  "puerto-plata",
  "ocho-rios",
  "falmouth",
  "bonaire",
  "tortola",
  "progreso",
  "samana",
  "la-romana",
  "montego-bay",
];

export function getFinderPortsGroupedByRegion() {
  const grouped = new Map<string, typeof ports>();
  for (const port of ports) {
    const list = grouped.get(port.region) ?? [];
    list.push(port);
    grouped.set(port.region, list);
  }
  return [...grouped.entries()].map(([region, regionPorts]) => ({
    region,
    ports: regionPorts.sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

export function getRoutePresetById(id: string): CaribbeanRoutePreset | undefined {
  return popularCaribbeanRoutes.find((route) => route.id === id);
}

export function getPortComparisonRows() {
  return portExcursionAuthority.portTable.map((row) => ({
    portSlug: row.portSlug,
    portName: row.portName,
    bestFor: row.bestFor,
    topExcursion: row.bestExcursion,
    duration: row.duration,
    activityLevel: row.activityLevel,
  }));
}

export const finderCruiseLines = cruiseLines.map((line) => ({
  slug: line.slug,
  name: line.name,
}));

export const finderShips = ships.map((ship) => ({
  slug: ship.slug,
  name: ship.name,
  cruiseLineSlug: ship.cruiseLineSlug,
  commonPortSlugs: ship.commonPortSlugs,
}));
