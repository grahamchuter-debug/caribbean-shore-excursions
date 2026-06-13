import { bestGuides } from "@/data/best-guides";
import { excursionTypes } from "@/data/excursion-types";
import { portExcursionAuthority } from "@/data/port-excursion-authority";
import { getPortBySlug } from "@/data/ports";
import type {
  ExcursionType,
  ExcursionTypeLink,
  ExcursionTypePortRecommendation,
  ExcursionTypeSpecialistSite,
  PortExcursionCategoryPick,
} from "@/data/types";
import { getSpecialistExcursionUrl } from "@/lib/specialist-links";

function groupPicksByPort(
  picks: PortExcursionCategoryPick[],
  maxPorts = 6,
): ExcursionTypePortRecommendation[] {
  const order: string[] = [];
  const byPort = new Map<string, string[]>();

  for (const pick of picks) {
    if (!byPort.has(pick.portSlug)) order.push(pick.portSlug);
    const list = byPort.get(pick.portSlug) ?? [];
    if (!list.includes(pick.excursionName)) list.push(pick.excursionName);
    byPort.set(pick.portSlug, list);
  }

  return order.slice(0, maxPorts).map((portSlug) => ({
    portSlug,
    portName: getPortBySlug(portSlug)?.name ?? portSlug,
    excursions: (byPort.get(portSlug) ?? []).slice(0, 2),
  }));
}

function specialistSitesForPorts(
  portSlugs: string[],
  excursionTypeSlug: string,
): ExcursionTypeSpecialistSite[] {
  return portSlugs
    .map((portSlug) => {
      const port = getPortBySlug(portSlug);
      if (!port) return null;
      const siteUrl = getSpecialistExcursionUrl(portSlug, { excursionTypeSlug });
      const hostname = port.specialistUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return {
        portSlug,
        portName: port.name,
        siteLabel: hostname,
        siteUrl,
      };
    })
    .filter((row): row is ExcursionTypeSpecialistSite => row !== null);
}

function guideLink(slug: string): ExcursionTypeLink | undefined {
  const guide = bestGuides.find((g) => g.slug === slug);
  if (!guide) return undefined;
  return {
    href: `/${slug}`,
    label: guide.title,
    description: guide.heroSubtitle,
  };
}

function portAuthorityLink(slug: string, label?: string): ExcursionTypeLink {
  const port = getPortBySlug(slug);
  return {
    href: `/ports/${slug}`,
    label: label ?? (port ? `${port.name} port guide` : slug),
    description: port?.bestFor,
  };
}

const ADVENTURE_PORT_PICKS: PortExcursionCategoryPick[] = [
  {
    portSlug: "ocho-rios",
    excursionName: "Dunn's River Falls Climb",
    description: "Jamaica's iconic waterfall climb with guided human-chain ascent.",
  },
  {
    portSlug: "puerto-plata",
    excursionName: "27 Charcos Waterfalls",
    description: "Amber Coast adventure through jungle waterfall pools.",
  },
  {
    portSlug: "aruba",
    excursionName: "Arikok National Park 4x4",
    description: "Off-road desert and coastline exploration to Natural Pool.",
  },
  {
    portSlug: "roatan",
    excursionName: "Gumbalimba Park Adventure",
    description: "Zip-lines, wildlife, and rainforest canopy routes.",
  },
  {
    portSlug: "costa-maya",
    excursionName: "Chacchoben Mayan Ruins",
    description: "Jungle pyramids with manageable transfers from the cruise village.",
  },
  {
    portSlug: "curacao",
    excursionName: "Hato Caves & City Highlights",
    description: "Culture and geology combo in Willemstad's historic districts.",
  },
];

const CATAMARAN_PICKS: PortExcursionCategoryPick[] = [
  {
    portSlug: "st-thomas",
    excursionName: "St. John Snorkel Sail",
    description: "Open-bar catamaran to outer cays with reef stops.",
  },
  {
    portSlug: "cozumel",
    excursionName: "El Cielo Sandbar Catamaran",
    description: "Starfish shallows and reef snorkel with open bar.",
  },
  {
    portSlug: "st-maarten",
    excursionName: "Tintamarre Islet Sail",
    description: "Uninhabited snorkel and beach stop off the Dutch coast.",
  },
  {
    portSlug: "aruba",
    excursionName: "Sunset Catamaran Cruise",
    description: "Trade-wind evening sail along the leeward coast.",
  },
  {
    portSlug: "nassau",
    excursionName: "Rose Island Reef Sail",
    description: "Half-day catamaran with reef snorkel near Nassau harbor.",
  },
  {
    portSlug: "tortola",
    excursionName: "BVI Catamaran Snorkel Sail",
    description: "Norman Island caves and secluded cove sailing.",
  },
  {
    portSlug: "la-romana",
    excursionName: "Saona Island Catamaran",
    description: "National park beaches with natural pool and lunch included.",
  },
];

const FAMILY_PORT_OVERRIDES: ExcursionTypePortRecommendation[] = [
  {
    portSlug: "st-thomas",
    portName: "St. Thomas",
    excursions: ["Magens Bay Family Beach Day", "Coral World Turtle & Reef Encounter"],
  },
  {
    portSlug: "cozumel",
    portName: "Cozumel",
    excursions: ["Chankanaab Family Day", "Dolphin Lagoon Program"],
  },
  {
    portSlug: "grand-cayman",
    portName: "Grand Cayman",
    excursions: ["Stingray City Family Tour", "Turtle Centre & Beach Combo"],
  },
  {
    portSlug: "nassau",
    portName: "Nassau",
    excursions: ["Atlantis Aquaventure", "Blue Lagoon Island Day"],
  },
  {
    portSlug: "aruba",
    portName: "Aruba",
    excursions: ["De Palm Island All-Inclusive", "Baby Beach Shallow Lagoon"],
  },
];

type PathwayConfig = {
  picks: PortExcursionCategoryPick[];
  recommendedByPort?: ExcursionTypePortRecommendation[];
  authoritySectionTitle: string;
  authorityGuideSlug: string;
  specialistSectionTitle: string;
  extraAuthorityLinks?: ExcursionTypeLink[];
  extraBookingLinks?: ExcursionTypeLink[];
  categoryImageAlt: string;
};

const PATHWAY_CONFIG: Record<string, PathwayConfig> = {
  beaches: {
    picks: portExcursionAuthority.bestBeachExcursions,
    authoritySectionTitle: "Best Caribbean Ports For Beach Days",
    authorityGuideSlug: "best-caribbean-beach-excursions",
    specialistSectionTitle: "Beach Shore Excursion Sites",
    categoryImageAlt: "Turquoise Caribbean beach with cruise passengers on shore",
    extraAuthorityLinks: [
      { href: "/western-caribbean-cruise-planner", label: "Western Caribbean cruise planner" },
      { href: "/eastern-caribbean-cruise-planner", label: "Eastern Caribbean cruise planner" },
    ],
  },
  snorkeling: {
    picks: portExcursionAuthority.bestSnorkellingExcursions,
    authoritySectionTitle: "Best Caribbean Ports For Snorkelling",
    authorityGuideSlug: "best-caribbean-snorkeling-excursions",
    specialistSectionTitle: "Snorkelling Shore Excursion Sites",
    categoryImageAlt: "Snorkeller above Caribbean reef coral",
    extraAuthorityLinks: [
      { href: "/western-caribbean-cruise-planner", label: "Western Caribbean cruise planner" },
      { href: "/best-shore-excursion-every-caribbean-port", label: "Best excursion at every port" },
    ],
  },
  "family-tours": {
    picks: portExcursionAuthority.bestFamilyExcursions,
    recommendedByPort: FAMILY_PORT_OVERRIDES,
    authoritySectionTitle: "Best Caribbean Ports For Families",
    authorityGuideSlug: "best-caribbean-family-excursions",
    specialistSectionTitle: "Family-Friendly Shore Excursion Sites",
    categoryImageAlt: "Family enjoying calm Caribbean beach on cruise port day",
    extraAuthorityLinks: [
      { href: "/bahamas-cruise-planner", label: "Bahamas cruise planner" },
      { href: "/caribbean-excursion-finder", label: "Caribbean Excursion Finder" },
    ],
  },
  "private-tours": {
    picks: portExcursionAuthority.bestPrivateExcursions,
    authoritySectionTitle: "Best Caribbean Ports For Private Tours",
    authorityGuideSlug: "best-caribbean-private-tours",
    specialistSectionTitle: "Private Tour Specialist Sites",
    categoryImageAlt: "Private tour vehicle at Caribbean cruise port",
    extraAuthorityLinks: [
      { href: "/southern-caribbean-cruise-planner", label: "Southern Caribbean cruise planner" },
      { href: "/virgin-islands-cruise-planner", label: "Virgin Islands cruise planner" },
    ],
  },
  "catamaran-cruises": {
    picks: CATAMARAN_PICKS,
    authoritySectionTitle: "Best Caribbean Ports For Catamaran Cruises",
    authorityGuideSlug: "best-caribbean-catamaran-cruises",
    specialistSectionTitle: "Catamaran & Sailing Specialist Sites",
    categoryImageAlt: "Catamaran sailing Caribbean turquoise waters",
    extraAuthorityLinks: [
      { href: "/eastern-caribbean-cruise-planner", label: "Eastern Caribbean cruise planner" },
      { href: "/abc-islands-cruise-planner", label: "ABC Islands cruise planner" },
    ],
  },
  "adventure-tours": {
    picks: [...ADVENTURE_PORT_PICKS, ...portExcursionAuthority.bestWildlifeExcursions.slice(0, 4)],
    authoritySectionTitle: "Best Caribbean Ports For Adventure & Wildlife",
    authorityGuideSlug: "best-caribbean-wildlife-excursions",
    specialistSectionTitle: "Adventure & Wildlife Excursion Sites",
    categoryImageAlt: "Caribbean rainforest waterfall adventure excursion",
    extraAuthorityLinks: [
      { href: "/jamaica-cruise-planner", label: "Jamaica cruise planner" },
      { href: "/dominican-republic-cruise-planner", label: "Dominican Republic cruise planner" },
      {
        href: "/best-shore-excursion-every-caribbean-port",
        label: "Culture & sightseeing at every port",
        description: "Mayan ruins, colonial cities, and heritage routes",
      },
    ],
    extraBookingLinks: [
      {
        href: "/best-caribbean-shore-excursions",
        label: "Best Caribbean shore excursions hub",
        description: "Compare signature picks across every port",
      },
    ],
  },
};

function buildBookingPathways(
  slug: string,
  config: PathwayConfig,
  portSlugs: string[],
): ExcursionTypeLink[] {
  const guide = guideLink(config.authorityGuideSlug);
  const links: ExcursionTypeLink[] = [
    {
      href: "/caribbean-excursion-finder",
      label: "Caribbean Excursion Finder",
      description: "Match excursions to your ports and traveller style",
    },
    ...(guide ? [guide] : []),
    {
      href: "/best-shore-excursion-every-caribbean-port",
      label: "Best excursion at every Caribbean port",
      description: "Signature pick for all nineteen ports we cover",
    },
    ...portSlugs.slice(0, 3).map((portSlug) => portAuthorityLink(portSlug)),
    {
      href: `/ship-schedules/${portSlugs[0] ?? "cozumel"}`,
      label: "Check ship schedules",
      description: "See how many ships share your port day before booking",
    },
    ...(config.extraAuthorityLinks ?? []),
    ...(config.extraBookingLinks ?? []),
    { href: "/excursion-types", label: "All excursion types" },
  ];

  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

export function enrichExcursionType(base: ExcursionType): ExcursionType {
  const config = PATHWAY_CONFIG[base.slug];
  if (!config) return base;

  const recommendedByPort =
    config.recommendedByPort ?? groupPicksByPort(config.picks);
  const portSlugs = recommendedByPort.map((row) => row.portSlug);
  const guide = guideLink(config.authorityGuideSlug);

  const authorityLinks: ExcursionTypeLink[] = [
    ...(guide ? [guide] : []),
    ...base.bestPorts.map((port) => ({
      href: `/ports/${port.slug}`,
      label: port.name,
      description: port.reason,
    })),
    ...(config.extraAuthorityLinks ?? []),
  ];

  const specialistSites = specialistSitesForPorts(portSlugs.slice(0, 6), base.slug);

  const bookingPathways = buildBookingPathways(base.slug, config, portSlugs);

  return {
    ...base,
    recommendedByPort,
    authoritySectionTitle: config.authoritySectionTitle,
    authorityLinks,
    specialistSectionTitle: config.specialistSectionTitle,
    specialistSites,
    bookingPathways,
    heroImage: base.heroImage ?? {
      src: "/images/caribbean-cruise-hero.png",
      alt: `${base.name} in the Caribbean`,
    },
    categoryImage: base.categoryImage ?? {
      src: "/images/caribbean-cruise-hero.png",
      alt: config.categoryImageAlt,
    },
  };
}

export function getEnrichedExcursionType(slug: string): ExcursionType | undefined {
  const base = excursionTypes.find((type) => type.slug === slug);
  if (!base) return undefined;
  return enrichExcursionType(base);
}

export interface ExcursionTypeAuditRow {
  slug: string;
  name: string;
  pathwayCount: number;
  specialistSiteCount: number;
  bookingLinkCount: number;
  hasHeroImage: boolean;
  hasCategoryImage: boolean;
  issues: string[];
}

export function auditExcursionTypes(): ExcursionTypeAuditRow[] {
  return excursionTypes.map((base) => {
    const type = enrichExcursionType(base);
    const issues: string[] = [];
    const pathwayCount = type.recommendedByPort?.length ?? 0;
    const specialistSiteCount = type.specialistSites?.length ?? 0;
    const bookingLinkCount = type.bookingPathways?.length ?? 0;

    if (pathwayCount < 5) issues.push(`Only ${pathwayCount} port excursion pathways (need 5+)`);
    if (specialistSiteCount < 3) issues.push(`Only ${specialistSiteCount} specialist sites linked`);
    if (bookingLinkCount < 5) issues.push(`Only ${bookingLinkCount} booking journey links`);

    const portsWithoutSpecialist = (type.recommendedByPort ?? []).filter(
      (row) => !getPortBySlug(row.portSlug)?.specialistUrl,
    );
    if (portsWithoutSpecialist.length > 0) {
      issues.push(
        `Ports without specialist URL: ${portsWithoutSpecialist.map((p) => p.portName).join(", ")}`,
      );
    }

    return {
      slug: type.slug,
      name: type.name,
      pathwayCount,
      specialistSiteCount,
      bookingLinkCount,
      hasHeroImage: Boolean(type.heroImage?.src),
      hasCategoryImage: Boolean(type.categoryImage?.src),
      issues,
    };
  });
}

/** Pages mentioned in audits that do not exist as excursion-type routes */
export const NON_EXISTENT_EXCURSION_TYPE_PAGES = [
  {
    label: "Culture",
    note: "No /excursion-types/culture page. Culture routes appear under Adventure Tours and port guides (e.g. Progreso, Costa Maya, Puerto Plata).",
  },
  {
    label: "Wildlife",
    note: "No standalone /excursion-types/wildlife page. Wildlife pathways live under Adventure Tours and /best-caribbean-wildlife-excursions.",
  },
];
