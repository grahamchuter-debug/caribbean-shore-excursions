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

const regionalPlannerLinks: Record<string, PortRelatedLink> = {
  "st-thomas": {
    label: "Virgin Islands Cruise Planner",
    href: "/virgin-islands-cruise-planner",
  },
  aruba: { label: "ABC Islands Cruise Planner", href: "/abc-islands-cruise-planner" },
  curacao: { label: "ABC Islands Cruise Planner", href: "/abc-islands-cruise-planner" },
  nassau: { label: "Bahamas Cruise Planner", href: "/bahamas-cruise-planner" },
  cozumel: {
    label: "Mexican Caribbean Cruise Planner",
    href: "/mexican-caribbean-cruise-planner",
  },
  "costa-maya": {
    label: "Mexican Caribbean Cruise Planner",
    href: "/mexican-caribbean-cruise-planner",
  },
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

  const comparison = comparisonLinks[slug];
  if (comparison) links.push(comparison);

  const planner = regionalPlannerLinks[slug];
  if (planner) links.push(planner);

  const region = regionPageLinks[slug];
  if (region) links.push(region);

  links.push({
    label: port.specialistName,
    href: port.specialistUrl,
    external: true,
  });

  return links;
}
