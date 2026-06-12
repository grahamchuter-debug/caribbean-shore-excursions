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
    portSlugs: ["st-thomas", "st-maarten", "puerto-plata", "nassau"],
    tags: ["Beaches", "Shopping", "First-time cruisers"],
    description: "The most common 7-night Eastern loop with beach-heavy port days and easy pier logistics.",
  },
  {
    id: "western-reef",
    title: "Western Reef Route",
    portSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya"],
    tags: ["Snorkelling", "Wildlife", "Reef boats"],
    description: "Reef-forward Western Caribbean sailings where morning boat slots matter most.",
  },
  {
    id: "southern-sun",
    title: "Southern Sun Route",
    portSlugs: ["aruba", "curacao", "st-maarten"],
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
    description: "The four ports most first-time Caribbean cruisers remember — strong payoff with simple planning.",
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
    better: "Stingray City and Seven Mile Beach both need early tender departures. Book the first boat and keep a 60–90 minute return buffer.",
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
    better: "West Bay and reef snorkel combos need a short taxi or organized transfer — still excellent value versus busier Western ports.",
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
      "An overall score out of 100 summarising how well your selected ports, traveller style, fitness level, and time ashore align with recommended excursions — plus best port, excursion type, and hidden-gem highlights.",
  },
  {
    question: "What do return-to-ship confidence labels mean?",
    answer:
      "Green means a comfortable fit for your stated port time. Amber means confirm exact timings with your operator. Red means avoid longer tours unless your port call is extended or you book a cruise-line excursion with a return guarantee.",
  },
  {
    question: "Can I check ship schedules from my plan?",
    answer:
      "Yes. Where we publish verified schedules, each port recommendation links to the ship schedule hub so you can see multi-ship days before booking tours.",
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
  "puerto-plata",
  "ocho-rios",
  "falmouth",
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
