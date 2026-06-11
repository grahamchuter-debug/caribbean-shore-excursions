import type { PortRelatedLink } from "./types";

export const portRelatedLinks: Record<string, PortRelatedLink[]> = {
  "st-thomas": [
    { label: "Compare with St. Maarten", href: "/compare/st-thomas-vs-st-maarten" },
    { label: "Compare with Tortola", href: "/eastern-caribbean-cruise-ports" },
    { label: "Eastern Caribbean Cruise Ports", href: "/eastern-caribbean-cruise-ports" },
    { label: "St. Thomas Shore Excursions", href: "https://stthomasshoreexcursions.com", external: true },
  ],
  aruba: [
    { label: "Compare with Curaçao", href: "/compare/aruba-vs-curacao" },
    { label: "Compare with Bonaire", href: "/southern-caribbean-cruise-ports" },
    { label: "Southern Caribbean Cruise Ports", href: "/southern-caribbean-cruise-ports" },
    { label: "Aruba Shore Excursions", href: "https://arubashoreexcursion.com", external: true },
  ],
  cozumel: [
    { label: "Compare with Roatán", href: "/compare/roatan-vs-cozumel" },
    { label: "Compare with Costa Maya", href: "/western-caribbean-cruise-ports" },
    { label: "Western Caribbean Cruise Ports", href: "/western-caribbean-cruise-ports" },
    { label: "Cozumel Cruise Excursions", href: "https://cozumelcruiseexcursion.com", external: true },
  ],
  "puerto-plata": [
    { label: "Compare with Amber Cove", href: "/ports/puerto-plata" },
    { label: "Compare with Samaná", href: "/dominican-republic-cruise-ports" },
    { label: "Dominican Republic Cruise Ports", href: "/dominican-republic-cruise-ports" },
    { label: "Puerto Plata Cruise Excursions", href: "https://puertoplatacruiseexcursion.com", external: true },
  ],
  "grand-cayman": [
    { label: "Compare with Nassau", href: "/compare/grand-cayman-vs-nassau" },
    { label: "Western Caribbean Cruise Ports", href: "/western-caribbean-cruise-ports" },
    { label: "Grand Cayman Shore Excursions", href: "https://grandcaymanshoreexcursions.com", external: true },
  ],
  nassau: [
    { label: "Compare with Grand Cayman", href: "/compare/grand-cayman-vs-nassau" },
    { label: "Eastern Caribbean Cruise Ports", href: "/eastern-caribbean-cruise-ports" },
    { label: "Nassau Shore Excursions", href: "https://nassaushoreexcursions.com", external: true },
  ],
  roatan: [
    { label: "Compare with Cozumel", href: "/compare/roatan-vs-cozumel" },
    { label: "Western Caribbean Cruise Ports", href: "/western-caribbean-cruise-ports" },
    { label: "Roatán Shore Excursions", href: "https://roatanshoreexcursions.com", external: true },
  ],
  "st-maarten": [
    { label: "Compare with St. Thomas", href: "/compare/st-thomas-vs-st-maarten" },
    { label: "Eastern Caribbean Cruise Ports", href: "/eastern-caribbean-cruise-ports" },
    { label: "St. Maarten Shore Excursions", href: "https://stmaartenshoreexcursions.com", external: true },
  ],
  "costa-maya": [
    { label: "Compare with Cozumel", href: "/compare/roatan-vs-cozumel" },
    { label: "Western Caribbean Cruise Ports", href: "/western-caribbean-cruise-ports" },
    { label: "Costa Maya Shore Excursions", href: "https://costamayashoreexcursions.com", external: true },
  ],
  "ocho-rios": [
    { label: "Compare with Falmouth", href: "/compare/ocho-rios-vs-falmouth" },
    { label: "Jamaica Cruise Ports", href: "/jamaica-cruise-ports" },
    { label: "Ocho Rios Shore Excursions", href: "https://ochoriosshoreexcursions.com", external: true },
  ],
};

export function getPortRelatedLinks(slug: string): PortRelatedLink[] {
  return portRelatedLinks[slug] ?? [];
}
