import type { ScheduleEntry, ShipSchedulePort } from "./types";

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    country: "U.S. Virgin Islands",
    years: "2026–2027",
    description:
      "One of the Caribbean's busiest cruise ports with two terminals serving Eastern and Southern Caribbean itineraries year-round.",
  },
  {
    slug: "cozumel",
    name: "Cozumel",
    country: "Mexico",
    years: "2026–2027",
    description:
      "Mexico's top cruise port handling Western Caribbean itineraries from multiple cruise lines daily during peak season.",
  },
  {
    slug: "aruba",
    name: "Aruba",
    country: "Aruba",
    years: "2026–2027",
    description:
      "Southern Caribbean hub outside the hurricane belt with consistent year-round cruise traffic.",
  },
  {
    slug: "grand-cayman",
    name: "Grand Cayman",
    country: "Cayman Islands",
    years: "2026–2027",
    description:
      "Popular Western Caribbean tender port known for variable daily ship counts depending on weather conditions.",
  },
  {
    slug: "nassau",
    name: "Nassau",
    country: "Bahamas",
    years: "2026–2027",
    description:
      "Bahamas gateway port with high volume from short Bahamas and Caribbean itineraries departing Florida.",
  },
  {
    slug: "roatan",
    name: "Roatán",
    country: "Honduras",
    years: "2026–2027",
    description:
      "Growing Western Caribbean port at Mahogany Bay and Coxen Hole with strong reef snorkeling demand.",
  },
  {
    slug: "puerto-plata",
    name: "Puerto Plata",
    country: "Dominican Republic",
    years: "2026–2027",
    description:
      "Amber Coast port including Amber Cove and Taíno Bay serving Eastern Caribbean and Dominican Republic itineraries.",
  },
  {
    slug: "st-maarten",
    name: "St. Maarten",
    country: "Sint Maarten / Saint Martin",
    years: "2026–2027",
    description:
      "Eastern Caribbean dual-nation port with year-round cruise traffic at the Dr. A.C. Wathey Cruise Facility.",
  },
];

export const portSchedules: Record<string, ScheduleEntry[]> = {
  "st-thomas": [
    { date: "2026-01-15", ship: "Symphony of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "17:00", passengers: "5,500" },
    { date: "2026-01-15", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "09:00", departure: "18:00", passengers: "4,700" },
    { date: "2026-01-16", ship: "Norwegian Escape", cruiseLine: "Norwegian", arrival: "07:30", departure: "16:30", passengers: "4,200" },
    { date: "2026-01-17", ship: "Celebrity Beyond", cruiseLine: "Celebrity", arrival: "08:00", departure: "18:00", passengers: "3,900" },
    { date: "2026-01-18", ship: "MSC Seascape", cruiseLine: "MSC", arrival: "09:00", departure: "19:00", passengers: "4,500" },
  ],
  cozumel: [
    { date: "2026-01-15", ship: "Carnival Breeze", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,700" },
    { date: "2026-01-15", ship: "Allure of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "17:00", passengers: "5,400" },
    { date: "2026-01-16", ship: "Norwegian Prima", cruiseLine: "Norwegian", arrival: "08:30", departure: "17:30", passengers: "3,200" },
    { date: "2026-01-17", ship: "Carnival Vista", cruiseLine: "Carnival", arrival: "09:00", departure: "16:00", passengers: "3,900" },
    { date: "2026-01-18", ship: "Wonder of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:30", departure: "16:30", passengers: "5,800" },
  ],
  aruba: [
    { date: "2026-01-15", ship: "Celebrity Reflection", cruiseLine: "Celebrity", arrival: "08:00", departure: "22:00", passengers: "3,000" },
    { date: "2026-01-17", ship: "Royal Princess", cruiseLine: "Princess", arrival: "07:00", departure: "18:00", passengers: "3,500" },
    { date: "2026-01-20", ship: "Carnival Magic", cruiseLine: "Carnival", arrival: "09:00", departure: "20:00", passengers: "3,600" },
    { date: "2026-01-22", ship: "MSC Divina", cruiseLine: "MSC", arrival: "08:30", departure: "19:30", passengers: "3,900" },
  ],
  "grand-cayman": [
    { date: "2026-01-15", ship: "Carnival Freedom", cruiseLine: "Carnival", arrival: "07:00", departure: "15:00", passengers: "3,000" },
    { date: "2026-01-16", ship: "Navigator of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "16:00", passengers: "3,800" },
    { date: "2026-01-17", ship: "Norwegian Dawn", cruiseLine: "Norwegian", arrival: "07:30", departure: "14:30", passengers: "2,300" },
    { date: "2026-01-19", ship: "Carnival Conquest", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,200" },
  ],
  nassau: [
    { date: "2026-01-15", ship: "Carnival Celebration", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "5,300" },
    { date: "2026-01-15", ship: "Symphony of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "16:00", passengers: "5,500" },
    { date: "2026-01-16", ship: "MSC World America", cruiseLine: "MSC", arrival: "09:00", departure: "18:00", passengers: "4,800" },
    { date: "2026-01-17", ship: "Norwegian Breakaway", cruiseLine: "Norwegian", arrival: "08:00", departure: "17:00", passengers: "4,000" },
    { date: "2026-01-18", ship: "Disney Wish", cruiseLine: "Disney", arrival: "07:30", departure: "16:30", passengers: "4,000" },
  ],
  roatan: [
    { date: "2026-01-15", ship: "Carnival Vista", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "3,900" },
    { date: "2026-01-17", ship: "Norwegian Viva", cruiseLine: "Norwegian", arrival: "07:30", departure: "16:30", passengers: "3,100" },
    { date: "2026-01-20", ship: "Celebrity Equinox", cruiseLine: "Celebrity", arrival: "08:00", departure: "18:00", passengers: "2,850" },
    { date: "2026-01-22", ship: "MSC Seascape", cruiseLine: "MSC", arrival: "09:00", departure: "19:00", passengers: "4,500" },
  ],
  "puerto-plata": [
    { date: "2026-01-16", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "4,700" },
    { date: "2026-01-18", ship: "MSC Meraviglia", cruiseLine: "MSC", arrival: "09:00", departure: "18:00", passengers: "4,500" },
    { date: "2026-01-21", ship: "Carnival Magic", cruiseLine: "Carnival", arrival: "08:30", departure: "17:30", passengers: "3,600" },
    { date: "2026-01-24", ship: "Celebrity Summit", cruiseLine: "Celebrity", arrival: "07:00", departure: "16:00", passengers: "2,900" },
  ],
  "st-maarten": [
    { date: "2026-01-15", ship: "Oasis of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "18:00", passengers: "5,400" },
    { date: "2026-01-17", ship: "Carnival Legend", cruiseLine: "Carnival", arrival: "09:00", departure: "19:00", passengers: "2,900" },
    { date: "2026-01-19", ship: "Norwegian Epic", cruiseLine: "Norwegian", arrival: "07:30", departure: "17:00", passengers: "4,100" },
    { date: "2026-01-22", ship: "Celebrity Beyond", cruiseLine: "Celebrity", arrival: "08:00", departure: "22:00", passengers: "3,900" },
  ],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getScheduleForPort(slug: string): ScheduleEntry[] {
  return portSchedules[slug] ?? [];
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}
