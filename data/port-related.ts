import type { PortRelatedLink } from "./types";
import { getPortBySlug } from "./ports";

/** 2-4 related Caribbean port slugs for cross-linking on each authority page. */
const relatedPortSlugs: Record<string, string[]> = {
  "st-thomas": ["st-maarten", "nassau", "puerto-plata"],
  cozumel: ["costa-maya", "roatan", "grand-cayman"],
  aruba: ["curacao", "st-maarten", "cozumel"],
  curacao: ["aruba", "st-maarten", "cozumel"],
  "grand-cayman": ["cozumel", "nassau", "roatan"],
  nassau: ["grand-cayman", "st-thomas", "cozumel"],
  roatan: ["cozumel", "costa-maya", "grand-cayman"],
  "st-maarten": ["st-thomas", "aruba", "puerto-plata"],
  "costa-maya": ["cozumel", "roatan", "ocho-rios"],
  "puerto-plata": ["st-maarten", "st-thomas", "ocho-rios"],
  "ocho-rios": ["falmouth", "costa-maya", "cozumel"],
  falmouth: ["ocho-rios", "costa-maya", "grand-cayman"],
};

const comparisonLinks: Record<string, PortRelatedLink> = {
  "st-thomas": { label: "Compare St. Thomas vs St. Maarten", href: "/compare/st-thomas-vs-st-maarten" },
  aruba: { label: "Compare Aruba vs Curaçao", href: "/compare/aruba-vs-curacao" },
  curacao: { label: "Compare Aruba vs Curaçao", href: "/compare/aruba-vs-curacao" },
  cozumel: { label: "Compare Cozumel vs Roatán", href: "/compare/roatan-vs-cozumel" },
  roatan: { label: "Compare Cozumel vs Roatán", href: "/compare/roatan-vs-cozumel" },
  "costa-maya": { label: "Compare Cozumel vs Roatán", href: "/compare/roatan-vs-cozumel" },
  "grand-cayman": { label: "Compare Grand Cayman vs Nassau", href: "/compare/grand-cayman-vs-nassau" },
  nassau: { label: "Compare Grand Cayman vs Nassau", href: "/compare/grand-cayman-vs-nassau" },
  "st-maarten": { label: "Compare St. Thomas vs St. Maarten", href: "/compare/st-thomas-vs-st-maarten" },
  "puerto-plata": {
    label: "Compare Amber Cove vs Puerto Plata",
    href: "/compare/amber-cove-vs-puerto-plata",
  },
  "ocho-rios": { label: "Compare Ocho Rios vs Falmouth", href: "/compare/ocho-rios-vs-falmouth" },
  falmouth: { label: "Compare Ocho Rios vs Falmouth", href: "/compare/ocho-rios-vs-falmouth" },
};

const clusterPlannerLinks: Record<string, PortRelatedLink> = {
  "st-thomas": { label: "Virgin Islands Cruise Planner", href: "/virgin-islands-cruise-planner" },
  "st-maarten": { label: "Virgin Islands Cruise Planner", href: "/virgin-islands-cruise-planner" },
  aruba: { label: "ABC Islands Cruise Planner", href: "/abc-islands-cruise-planner" },
  curacao: { label: "ABC Islands Cruise Planner", href: "/abc-islands-cruise-planner" },
  nassau: { label: "Bahamas Cruise Planner", href: "/bahamas-cruise-planner" },
  "grand-cayman": { label: "Bahamas Cruise Planner", href: "/bahamas-cruise-planner" },
  cozumel: { label: "Mexican Caribbean Cruise Planner", href: "/mexican-caribbean-cruise-planner" },
  "costa-maya": { label: "Central America Cruise Planner", href: "/central-america-cruise-planner" },
  roatan: { label: "Central America Cruise Planner", href: "/central-america-cruise-planner" },
  "puerto-plata": { label: "Dominican Republic Cruise Planner", href: "/dominican-republic-cruise-planner" },
  "ocho-rios": { label: "Jamaica Cruise Planner", href: "/jamaica-cruise-planner" },
  falmouth: { label: "Jamaica Cruise Planner", href: "/jamaica-cruise-planner" },
};

const secondaryClusterLinks: Record<string, PortRelatedLink[]> = {
  "costa-maya": [
    { label: "Mexican Caribbean Cruise Planner", href: "/mexican-caribbean-cruise-planner" },
  ],
  cozumel: [
    { label: "Central America Cruise Planner", href: "/central-america-cruise-planner" },
  ],
  "grand-cayman": [
    { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  ],
  roatan: [
    { label: "Mexican Caribbean Cruise Planner", href: "/mexican-caribbean-cruise-planner" },
  ],
};

const itineraryPlannerLinks: Record<string, PortRelatedLink> = {
  "st-thomas": { label: "Eastern Caribbean Cruise Planner", href: "/eastern-caribbean-cruise-planner" },
  "st-maarten": { label: "Eastern Caribbean Cruise Planner", href: "/eastern-caribbean-cruise-planner" },
  "puerto-plata": { label: "Eastern Caribbean Cruise Planner", href: "/eastern-caribbean-cruise-planner" },
  nassau: { label: "Eastern Caribbean Cruise Planner", href: "/eastern-caribbean-cruise-planner" },
  cozumel: { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  roatan: { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  "grand-cayman": { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  "costa-maya": { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  "ocho-rios": { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  falmouth: { label: "Western Caribbean Cruise Planner", href: "/western-caribbean-cruise-planner" },
  aruba: { label: "Southern Caribbean Cruise Planner", href: "/southern-caribbean-cruise-planner" },
  curacao: { label: "Southern Caribbean Cruise Planner", href: "/southern-caribbean-cruise-planner" },
};

const regionPageLinks: Record<string, PortRelatedLink> = {
  "st-thomas": {
    label: "Eastern Caribbean Cruise Ports",
    href: "/eastern-caribbean-cruise-ports",
  },
  "st-maarten": {
    label: "Eastern Caribbean Cruise Ports",
    href: "/eastern-caribbean-cruise-ports",
  },
  "puerto-plata": {
    label: "Dominican Republic Cruise Ports",
    href: "/dominican-republic-cruise-ports",
  },
  nassau: { label: "Eastern Caribbean Cruise Ports", href: "/eastern-caribbean-cruise-ports" },
  cozumel: {
    label: "Western Caribbean Cruise Ports",
    href: "/western-caribbean-cruise-ports",
  },
  roatan: {
    label: "Western Caribbean Cruise Ports",
    href: "/western-caribbean-cruise-ports",
  },
  "grand-cayman": {
    label: "Western Caribbean Cruise Ports",
    href: "/western-caribbean-cruise-ports",
  },
  "costa-maya": {
    label: "Western Caribbean Cruise Ports",
    href: "/western-caribbean-cruise-ports",
  },
  "ocho-rios": { label: "Jamaica Cruise Ports", href: "/jamaica-cruise-ports" },
  falmouth: { label: "Jamaica Cruise Ports", href: "/jamaica-cruise-ports" },
  aruba: {
    label: "Southern Caribbean Cruise Ports",
    href: "/southern-caribbean-cruise-ports",
  },
  curacao: {
    label: "Southern Caribbean Cruise Ports",
    href: "/southern-caribbean-cruise-ports",
  },
};

export function getSimilarPortSlugs(slug: string): string[] {
  return relatedPortSlugs[slug] ?? [];
}

export function getPortRelatedLinks(slug: string): PortRelatedLink[] {
  const port = getPortBySlug(slug);
  if (!port) return [];

  const links: PortRelatedLink[] = [];

  for (const relSlug of relatedPortSlugs[slug] ?? []) {
    const related = getPortBySlug(relSlug);
    if (related) {
      links.push({
        label: `${related.name} port guide`,
        href: `/ports/${relSlug}`,
      });
    }
  }

  const cluster = clusterPlannerLinks[slug];
  if (cluster) links.push(cluster);

  for (const secondary of secondaryClusterLinks[slug] ?? []) {
    if (!links.some((link) => link.href === secondary.href)) {
      links.push(secondary);
    }
  }

  const itinerary = itineraryPlannerLinks[slug];
  if (itinerary && itinerary.href !== cluster?.href) links.push(itinerary);

  const comparison = comparisonLinks[slug];
  if (comparison) links.push(comparison);

  const region = regionPageLinks[slug];
  if (region) links.push(region);

  links.push({
    label: port.specialistName,
    href: port.specialistUrl,
    external: true,
  });

  return links;
}
