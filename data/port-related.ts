import type { PortRelatedLink } from "./types";

export const portRelatedLinks: Record<string, PortRelatedLink[]> = {
  "st-thomas": [
    { label: "Compare with St. Maarten", href: "/compare/st-thomas-vs-st-maarten" },
    { label: "Compare with Tortola", href: "/cruise-planner#eastern-caribbean" },
    { label: "Eastern Caribbean Cruise Planner", href: "/cruise-planner#eastern-caribbean" },
    { label: "St. Thomas Shore Excursions", href: "https://stthomasshoreexcursions.com", external: true },
  ],
  aruba: [
    { label: "Compare with Curaçao", href: "/compare/aruba-vs-curacao" },
    { label: "Compare with Bonaire", href: "/cruise-planner#southern-caribbean" },
    { label: "Southern Caribbean Cruise Planner", href: "/cruise-planner#southern-caribbean" },
    { label: "Aruba Shore Excursions", href: "https://arubashoreexcursion.com", external: true },
  ],
  cozumel: [
    { label: "Compare with Roatán", href: "/compare/roatan-vs-cozumel" },
    { label: "Compare with Costa Maya", href: "/cruise-planner#western-caribbean" },
    { label: "Western Caribbean Cruise Planner", href: "/cruise-planner#western-caribbean" },
    { label: "Cozumel Cruise Excursions", href: "https://cozumelcruiseexcursion.com", external: true },
  ],
  "puerto-plata": [
    { label: "Compare with Amber Cove", href: "/ports/puerto-plata" },
    { label: "Compare with Samaná", href: "/cruise-planner#eastern-caribbean" },
    { label: "Dominican Republic Cruise Planner", href: "/cruise-planner#eastern-caribbean" },
    { label: "Puerto Plata Cruise Excursions", href: "https://puertoplatacruiseexcursion.com", external: true },
  ],
  "grand-cayman": [
    { label: "Compare with Nassau", href: "/compare/grand-cayman-vs-nassau" },
    { label: "Western Caribbean Cruise Planner", href: "/cruise-planner#western-caribbean" },
    { label: "Grand Cayman Shore Excursions", href: "https://grandcaymanshoreexcursions.com", external: true },
  ],
  nassau: [
    { label: "Compare with Grand Cayman", href: "/compare/grand-cayman-vs-nassau" },
    { label: "Bahamas Cruise Planner", href: "/cruise-planner#bahamas" },
    { label: "Nassau Shore Excursions", href: "https://nassaushoreexcursions.com", external: true },
  ],
  roatan: [
    { label: "Compare with Cozumel", href: "/compare/roatan-vs-cozumel" },
    { label: "Western Caribbean Cruise Planner", href: "/cruise-planner#western-caribbean" },
    { label: "Roatán Shore Excursions", href: "https://roatanshoreexcursions.com", external: true },
  ],
  "st-maarten": [
    { label: "Compare with St. Thomas", href: "/compare/st-thomas-vs-st-maarten" },
    { label: "Eastern Caribbean Cruise Planner", href: "/cruise-planner#eastern-caribbean" },
    { label: "St. Maarten Shore Excursions", href: "https://stmaartenshoreexcursions.com", external: true },
  ],
};

export function getPortRelatedLinks(slug: string): PortRelatedLink[] {
  return portRelatedLinks[slug] ?? [];
}
