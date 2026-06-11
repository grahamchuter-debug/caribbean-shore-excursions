import type { ScheduleEntry, ShipSchedulePort } from "./types";

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "st-thomas",
    name: "St. Thomas",
    country: "U.S. Virgin Islands",
    years: "2026–2027",
    description:
      "One of the Caribbean's busiest cruise ports with two terminals serving Eastern and Southern Caribbean itineraries year-round.",
    scheduleOverview:
      "St. Thomas regularly hosts multiple ships per day at Havensight and Crown Bay terminals. Peak season (December–April) sees the highest call volumes from Royal Caribbean, Carnival, Norwegian, Celebrity, and MSC. Use this schedule hub to identify multi-ship days before booking Magens Bay or St. John excursions.",
  },
  {
    slug: "cozumel",
    name: "Cozumel",
    country: "Mexico",
    years: "2026–2027",
    description:
      "Mexico's top cruise port handling Western Caribbean itineraries from multiple cruise lines daily during peak season.",
    scheduleOverview:
      "Cozumel is among the world's busiest cruise ports with up to five ships daily at Punta Langosta, International Pier, and Puerta Maya during peak weeks. Carnival, Royal Caribbean, and Norwegian dominate call volumes. Check monthly schedules to plan reef snorkel tours away from peak pier crowds.",
  },
  {
    slug: "aruba",
    name: "Aruba",
    country: "Aruba",
    years: "2026–2027",
    description:
      "Southern Caribbean hub outside the hurricane belt with consistent year-round cruise traffic.",
    scheduleOverview:
      "Aruba's Port of Oranjestad receives consistent Southern Caribbean traffic year-round with extended evening departures common. Princess, Celebrity, Carnival, Royal Caribbean, and MSC are frequent visitors. Schedule data helps plan Eagle Beach days around large-ship arrivals.",
  },
  {
    slug: "grand-cayman",
    name: "Grand Cayman",
    country: "Cayman Islands",
    years: "2026–2027",
    description:
      "Popular Western Caribbean tender port known for variable daily ship counts depending on weather conditions.",
    scheduleOverview:
      "Grand Cayman requires tender operations from George Town anchorage — schedules are weather-dependent and may change at short notice. Carnival and Royal Caribbean account for most calls. Monitor ship counts to plan Stingray City departures early on busy tender days.",
  },
  {
    slug: "nassau",
    name: "Nassau",
    country: "Bahamas",
    years: "2026–2027",
    description:
      "Bahamas gateway port with high volume from short Bahamas and Caribbean itineraries departing Florida.",
    scheduleOverview:
      "Nassau Prince George Wharf handles high volumes from Florida-based Bahamas and Caribbean itineraries. Multiple mega-ships frequently share the downtown pier. Carnival, Royal Caribbean, MSC, Norwegian, and Disney Cruise Line are regular callers — essential for planning Atlantis and snorkel excursions.",
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
  {
    slug: "curacao",
    name: "Curaçao",
    country: "Curaçao",
    years: "2026–2027",
    description:
      "Southern Caribbean cultural port at Willemstad with reef snorkeling, UNESCO waterfront, and ABC island itineraries.",
    scheduleOverview:
      "Curaçao's Mathey Wharf receives consistent Southern and Eastern Caribbean traffic alongside Aruba on many itineraries. Carnival, Royal Caribbean, and MSC are frequent callers. Schedule data helps plan Willemstad walking tours and west-coast snorkel days around multi-ship arrivals.",
  },
  {
    slug: "costa-maya",
    name: "Costa Maya",
    country: "Mexico",
    years: "2026–2027",
    description:
      "Purpose-built Mexican Caribbean cruise port near Mahahual with Mayan ruins, beach clubs, and quieter reef access than Cozumel.",
    scheduleOverview:
      "Costa Maya's cruise village handles Western Caribbean calls with strong Carnival and Royal Caribbean volumes. Ships typically share the pier with one or two other vessels. Check schedules before booking Chacchoben ruins or Mahahual beach club excursions.",
  },
  {
    slug: "ocho-rios",
    name: "Ocho Rios",
    country: "Jamaica",
    years: "2026–2027",
    description:
      "Jamaica's adventure-focused north-coast port for Dunn's River Falls, Mystic Mountain, and rainforest excursions.",
    scheduleOverview:
      "Ocho Rios receives Western Caribbean traffic from Carnival, Royal Caribbean, and Norwegian with variable weekly call counts. Multi-ship days affect Dunn's River Falls timing — plan waterfall climbs early on busy schedule weeks.",
  },
  {
    slug: "falmouth",
    name: "Falmouth",
    country: "Jamaica",
    years: "2026–2027",
    description:
      "Historic Jamaica cruise port with Martha Brae rafting access and colonial town walks on select Western Caribbean itineraries.",
    scheduleOverview:
      "Falmouth sees fewer calls than Ocho Rios but hosts major Carnival and Royal Caribbean ships on Jamaica-focused routes. Monitor schedules to plan Martha Brae rafting and north-coast highlights with adequate return buffers.",
  },
];

export const portSchedules: Record<string, ScheduleEntry[]> = {
  "st-thomas": [
    { date: "2026-01-15", ship: "Symphony of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "17:00", passengers: "5,500" },
    { date: "2026-01-15", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "09:00", departure: "18:00", passengers: "4,700" },
    { date: "2026-01-16", ship: "Norwegian Escape", cruiseLine: "Norwegian", arrival: "07:30", departure: "16:30", passengers: "4,200" },
    { date: "2026-01-17", ship: "Celebrity Beyond", cruiseLine: "Celebrity", arrival: "08:00", departure: "18:00", passengers: "3,900" },
    { date: "2026-01-18", ship: "MSC Seascape", cruiseLine: "MSC", arrival: "09:00", departure: "19:00", passengers: "4,500" },
    { date: "2026-02-10", ship: "Oasis of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "17:00", passengers: "5,400" },
    { date: "2026-02-12", ship: "Carnival Magic", cruiseLine: "Carnival", arrival: "09:00", departure: "18:00", passengers: "3,600" },
    { date: "2026-03-05", ship: "Celebrity Apex", cruiseLine: "Celebrity", arrival: "07:30", departure: "17:30", passengers: "2,900" },
    { date: "2026-03-08", ship: "Norwegian Viva", cruiseLine: "Norwegian", arrival: "08:00", departure: "18:00", passengers: "3,100" },
  ],
  cozumel: [
    { date: "2026-01-15", ship: "Carnival Breeze", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,700" },
    { date: "2026-01-15", ship: "Allure of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "17:00", passengers: "5,400" },
    { date: "2026-01-16", ship: "Norwegian Prima", cruiseLine: "Norwegian", arrival: "08:30", departure: "17:30", passengers: "3,200" },
    { date: "2026-01-17", ship: "Carnival Vista", cruiseLine: "Carnival", arrival: "09:00", departure: "16:00", passengers: "3,900" },
    { date: "2026-01-18", ship: "Wonder of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:30", departure: "16:30", passengers: "5,800" },
    { date: "2026-02-14", ship: "Carnival Jubilee", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "5,300" },
    { date: "2026-02-20", ship: "Icon of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "17:00", passengers: "5,600" },
    { date: "2026-03-03", ship: "MSC Seashore", cruiseLine: "MSC", arrival: "09:00", departure: "18:00", passengers: "4,500" },
    { date: "2026-03-15", ship: "Norwegian Escape", cruiseLine: "Norwegian", arrival: "08:00", departure: "17:00", passengers: "4,200" },
  ],
  aruba: [
    { date: "2026-01-15", ship: "Celebrity Reflection", cruiseLine: "Celebrity", arrival: "08:00", departure: "22:00", passengers: "3,000" },
    { date: "2026-01-17", ship: "Royal Princess", cruiseLine: "Princess", arrival: "07:00", departure: "18:00", passengers: "3,500" },
    { date: "2026-01-20", ship: "Carnival Magic", cruiseLine: "Carnival", arrival: "09:00", departure: "20:00", passengers: "3,600" },
    { date: "2026-01-22", ship: "MSC Divina", cruiseLine: "MSC", arrival: "08:30", departure: "19:30", passengers: "3,900" },
    { date: "2026-02-08", ship: "Celebrity Beyond", cruiseLine: "Celebrity", arrival: "08:00", departure: "21:00", passengers: "3,900" },
    { date: "2026-02-18", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "09:00", departure: "20:00", passengers: "4,700" },
    { date: "2026-03-12", ship: "Royal Princess", cruiseLine: "Princess", arrival: "07:30", departure: "18:00", passengers: "3,500" },
  ],
  "grand-cayman": [
    { date: "2026-01-15", ship: "Carnival Freedom", cruiseLine: "Carnival", arrival: "07:00", departure: "15:00", passengers: "3,000" },
    { date: "2026-01-16", ship: "Navigator of the Seas", cruiseLine: "Royal Caribbean", arrival: "08:00", departure: "16:00", passengers: "3,800" },
    { date: "2026-01-17", ship: "Norwegian Dawn", cruiseLine: "Norwegian", arrival: "07:30", departure: "14:30", passengers: "2,300" },
    { date: "2026-01-19", ship: "Carnival Conquest", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,200" },
    { date: "2026-02-11", ship: "Harmony of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "15:00", passengers: "5,400" },
    { date: "2026-02-22", ship: "Carnival Breeze", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,700" },
    { date: "2026-03-07", ship: "Celebrity Silhouette", cruiseLine: "Celebrity", arrival: "08:00", departure: "16:00", passengers: "2,900" },
  ],
  nassau: [
    { date: "2026-01-15", ship: "Carnival Celebration", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "5,300" },
    { date: "2026-01-15", ship: "Symphony of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "16:00", passengers: "5,500" },
    { date: "2026-01-16", ship: "MSC World America", cruiseLine: "MSC", arrival: "09:00", departure: "18:00", passengers: "4,800" },
    { date: "2026-01-17", ship: "Norwegian Breakaway", cruiseLine: "Norwegian", arrival: "08:00", departure: "17:00", passengers: "4,000" },
    { date: "2026-01-18", ship: "Disney Wish", cruiseLine: "Disney", arrival: "07:30", departure: "16:30", passengers: "4,000" },
    { date: "2026-02-09", ship: "Wonder of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:00", departure: "16:00", passengers: "5,800" },
    { date: "2026-02-16", ship: "Carnival Venezia", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "4,200" },
    { date: "2026-03-04", ship: "Norwegian Prima", cruiseLine: "Norwegian", arrival: "08:30", departure: "17:30", passengers: "3,200" },
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
  curacao: [
    { date: "2026-01-16", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "08:00", departure: "18:00", passengers: "4,700" },
    { date: "2026-01-18", ship: "Celebrity Reflection", cruiseLine: "Celebrity", arrival: "07:30", departure: "19:00", passengers: "3,000" },
    { date: "2026-01-21", ship: "MSC Divina", cruiseLine: "MSC", arrival: "09:00", departure: "20:00", passengers: "3,900" },
    { date: "2026-02-14", ship: "Royal Princess", cruiseLine: "Princess", arrival: "08:00", departure: "18:00", passengers: "3,500" },
  ],
  "costa-maya": [
    { date: "2026-01-15", ship: "Carnival Breeze", cruiseLine: "Carnival", arrival: "08:00", departure: "16:00", passengers: "3,700" },
    { date: "2026-01-17", ship: "Navigator of the Seas", cruiseLine: "Royal Caribbean", arrival: "09:00", departure: "17:00", passengers: "3,800" },
    { date: "2026-01-20", ship: "Carnival Vista", cruiseLine: "Carnival", arrival: "08:30", departure: "16:30", passengers: "3,900" },
    { date: "2026-02-18", ship: "Norwegian Prima", cruiseLine: "Norwegian", arrival: "08:00", departure: "17:00", passengers: "3,200" },
  ],
  "ocho-rios": [
    { date: "2026-01-16", ship: "Harmony of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:30", departure: "16:00", passengers: "5,400" },
    { date: "2026-01-19", ship: "Carnival Magic", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "3,600" },
    { date: "2026-01-22", ship: "Norwegian Escape", cruiseLine: "Norwegian", arrival: "08:00", departure: "17:30", passengers: "4,200" },
    { date: "2026-02-11", ship: "Celebrity Equinox", cruiseLine: "Celebrity", arrival: "07:00", departure: "16:30", passengers: "2,850" },
  ],
  falmouth: [
    { date: "2026-01-18", ship: "Carnival Horizon", cruiseLine: "Carnival", arrival: "08:00", departure: "17:00", passengers: "4,700" },
    { date: "2026-01-24", ship: "Allure of the Seas", cruiseLine: "Royal Caribbean", arrival: "07:30", departure: "16:00", passengers: "5,400" },
    { date: "2026-02-08", ship: "Carnival Celebration", cruiseLine: "Carnival", arrival: "09:00", departure: "18:00", passengers: "5,300" },
    { date: "2026-03-01", ship: "MSC Meraviglia", cruiseLine: "MSC", arrival: "08:00", departure: "17:00", passengers: "4,500" },
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
