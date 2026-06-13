/**
 * Caribbean cruise regions for the Explore by Region map section.
 * Port lists are sourced from itinerary planners, regional planners, and data/regions.ts.
 */

export interface CaribbeanMapRegion {
  id: string;
  name: string;
  bestFor: string;
  portSlugs: string[];
  plannerHref: string;
  portsHref: string;
  /** Short badge label shown on the map card */
  badge: string;
}

export const caribbeanMapRegions: CaribbeanMapRegion[] = [
  {
    id: "eastern-caribbean",
    name: "Eastern Caribbean",
    bestFor: "Classic beaches, island-hopping & duty-free shopping",
    portSlugs: ["st-thomas", "st-maarten", "puerto-plata", "nassau", "tortola"],
    plannerHref: "/eastern-caribbean-cruise-planner",
    portsHref: "/eastern-caribbean-cruise-ports",
    badge: "East",
  },
  {
    id: "western-caribbean",
    name: "Western Caribbean",
    bestFor: "Reef snorkeling, Mayan ruins & adventure excursions",
    portSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya", "ocho-rios", "progreso", "puerto-limon"],
    plannerHref: "/western-caribbean-cruise-planner",
    portsHref: "/western-caribbean-cruise-ports",
    badge: "West",
  },
  {
    id: "southern-caribbean",
    name: "Southern Caribbean",
    bestFor: "Year-round sunshine & deep-island Dutch-Caribbean routes",
    portSlugs: ["aruba", "curacao", "st-maarten", "bonaire"],
    plannerHref: "/southern-caribbean-cruise-planner",
    portsHref: "/southern-caribbean-cruise-ports",
    badge: "South",
  },
  {
    id: "abc-islands",
    name: "ABC Islands",
    bestFor: "Reliable beaches, desert landscapes & culture-plus-reef days",
    portSlugs: ["aruba", "curacao", "bonaire"],
    plannerHref: "/abc-islands-cruise-planner",
    portsHref: "/southern-caribbean-cruise-ports",
    badge: "ABC",
  },
  {
    id: "virgin-islands",
    name: "Virgin Islands",
    bestFor: "Magens Bay, St. John ferries & dual-nation island days",
    portSlugs: ["st-thomas", "st-maarten", "tortola"],
    plannerHref: "/virgin-islands-cruise-planner",
    portsHref: "/eastern-caribbean-cruise-ports",
    badge: "VI",
  },
  {
    id: "bahamas",
    name: "Bahamas",
    bestFor: "Walkable piers, Atlantis resort days & tender wildlife",
    portSlugs: ["nassau", "grand-cayman"],
    plannerHref: "/bahamas-cruise-planner",
    portsHref: "/cruise-planner#bahamas",
    badge: "BS",
  },
  {
    id: "dominican-republic",
    name: "Dominican Republic",
    bestFor: "Waterfalls, cable car views & Amber Coast adventures",
    portSlugs: ["puerto-plata", "samana", "la-romana"],
    plannerHref: "/dominican-republic-cruise-planner",
    portsHref: "/dominican-republic-cruise-ports",
    badge: "DR",
  },
  {
    id: "jamaica",
    name: "Jamaica",
    bestFor: "Dunn's River Falls, rainforest thrills & river rafting",
    portSlugs: ["ocho-rios", "falmouth", "montego-bay"],
    plannerHref: "/jamaica-cruise-planner",
    portsHref: "/jamaica-cruise-ports",
    badge: "JM",
  },
  {
    id: "mexican-caribbean",
    name: "Mexican Caribbean",
    bestFor: "World-class reefs, El Cielo sandbars & Mayan ruin routes",
    portSlugs: ["cozumel", "costa-maya", "progreso"],
    plannerHref: "/mexican-caribbean-cruise-planner",
    portsHref: "/western-caribbean-cruise-ports",
    badge: "MX",
  },
  {
    id: "central-america",
    name: "Central America",
    bestFor: "Barrier-reef value, rainforest wildlife & ruin-beach combos",
    portSlugs: ["roatan", "costa-maya", "puerto-limon"],
    plannerHref: "/central-america-cruise-planner",
    portsHref: "/western-caribbean-cruise-ports",
    badge: "CA",
  },
];

const plannerSlugToRegionId: Record<string, string> = {
  "eastern-caribbean-cruise-planner": "eastern-caribbean",
  "western-caribbean-cruise-planner": "western-caribbean",
  "southern-caribbean-cruise-planner": "southern-caribbean",
  "dominican-republic-cruise-planner": "dominican-republic",
  "jamaica-cruise-planner": "jamaica",
  "central-america-cruise-planner": "central-america",
  "abc-islands-cruise-planner": "abc-islands",
  "virgin-islands-cruise-planner": "virgin-islands",
  "bahamas-cruise-planner": "bahamas",
  "mexican-caribbean-cruise-planner": "mexican-caribbean",
};

export function getCaribbeanMapRegionById(id: string): CaribbeanMapRegion | undefined {
  return caribbeanMapRegions.find((region) => region.id === id);
}

export function getCaribbeanRegionIdForPlanner(plannerSlug: string): string | undefined {
  return plannerSlugToRegionId[plannerSlug];
}
