import type { ScheduleEntry, ShipSchedulePort } from "./types";

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    country: "U.S. Virgin Islands",
    description:
      "One of the Caribbean's busiest cruise ports with two terminals serving Eastern and Southern Caribbean itineraries year-round.",
  },
  {
    slug: "cozumel",
    name: "Cozumel",
    country: "Mexico",
    description:
      "Mexico's top cruise port handling Western Caribbean itineraries from multiple cruise lines daily during peak season.",
  },
  {
    slug: "aruba",
    name: "Aruba",
    country: "Aruba",
    description:
      "Southern Caribbean hub outside the hurricane belt with consistent year-round cruise traffic.",
  },
  {
    slug: "grand-cayman",
    name: "Grand Cayman",
    country: "Cayman Islands",
    description:
      "Popular Western Caribbean tender port known for variable daily ship counts depending on weather conditions.",
  },
  {
    slug: "nassau",
    name: "Nassau",
    country: "Bahamas",
    description:
      "Bahamas gateway port with high volume from short Bahamas and Caribbean itineraries departing Florida.",
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
