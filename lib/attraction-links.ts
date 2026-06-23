import { getPortBySlug } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { getStThomasAttractionGuides } from "@/data/st-thomas-attractions";
import type { Attraction, ExcursionItem } from "@/data/types";
import { getExcursionTypeSlugByLabel } from "@/lib/excursion-type-lookup";
import { getSpecialistExcursionUrl, resolveExcursionTypeSlug } from "@/lib/specialist-links";

export interface AttractionDestination {
  href: string;
  label: string;
  external?: boolean;
}

const PORT_ATTRACTIONS_SECTION_ID = "nearby-attractions";

function normalizeForMatch(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function significantWords(value: string, minLength = 4): string[] {
  return normalizeForMatch(value)
    .split(" ")
    .filter((word) => word.length >= minLength);
}

function namesOverlap(a: string, b: string): boolean {
  const aNorm = normalizeForMatch(a);
  const bNorm = normalizeForMatch(b);
  if (!aNorm || !bNorm) return false;
  if (aNorm.includes(bNorm) || bNorm.includes(aNorm)) return true;

  const aWords = significantWords(a);
  const bWords = significantWords(b);
  return aWords.some((word) => bNorm.includes(word)) || bWords.some((word) => aNorm.includes(word));
}

function matchBestExcursion(
  attractionName: string,
  excursions: ExcursionItem[],
): ExcursionItem | undefined {
  return excursions.find((excursion) => namesOverlap(attractionName, excursion.name));
}

function getAttractionGuideHref(portSlug: string, attraction: Attraction): string | undefined {
  if (attraction.guideHref) return attraction.guideHref;

  if (portSlug !== "st-thomas") return undefined;

  for (const guide of getStThomasAttractionGuides()) {
    const slugCore = guide.slug.replace(/-st-thomas$/, "").replace(/-/g, " ");
    if (
      namesOverlap(attraction.name, guide.title) ||
      namesOverlap(attraction.name, slugCore) ||
      normalizeForMatch(attraction.name).includes(slugCore)
    ) {
      return `/${guide.slug}`;
    }
  }

  return undefined;
}

function getExcursionTypeDestination(
  portSlug: string,
  attraction: Attraction,
  matchedExcursion?: ExcursionItem,
): AttractionDestination | undefined {
  const typeLabel = matchedExcursion?.type;
  const typeSlug =
    (typeLabel ? getExcursionTypeSlugByLabel(typeLabel) : undefined) ??
    resolveExcursionTypeSlug({
      excursionType: typeLabel,
      text: `${attraction.name} ${attraction.description}`,
    });

  if (!typeSlug) return undefined;

  const excursionType = excursionTypes.find((type) => type.slug === typeSlug);
  const excursionLabel = excursionType?.name ?? "Excursions";

  const specialistHref = getSpecialistExcursionUrl(portSlug, {
    excursionTypeSlug: typeSlug,
    excursionType: typeLabel,
    text: `${attraction.name} ${attraction.description}`,
  });
  const port = getPortBySlug(portSlug);
  const specialistBase = port?.specialistUrl.replace(/\/$/, "");

  if (specialistBase && specialistHref !== port?.specialistUrl && specialistHref.startsWith(specialistBase)) {
    return {
      href: specialistHref,
      label: `Book ${excursionLabel.toLowerCase()}`,
      external: true,
    };
  }

  return {
    href: `/excursion-types/${typeSlug}`,
    label: excursionLabel,
  };
}

function getPortGuideDestination(portSlug: string, withSectionAnchor: boolean): AttractionDestination {
  const port = getPortBySlug(portSlug);
  const portName = port?.name ?? portSlug;
  return {
    href: withSectionAnchor ? `/ports/${portSlug}#${PORT_ATTRACTIONS_SECTION_ID}` : `/ports/${portSlug}`,
    label: `View on ${portName} port guide`,
  };
}

export function getAttractionDestination(
  portSlug: string,
  attractionName: string,
  attraction?: Pick<Attraction, "description" | "distance" | "guideHref">,
): AttractionDestination {
  const port = getPortBySlug(portSlug);
  const resolvedAttraction: Attraction = {
    name: attractionName,
    description: attraction?.description ?? "",
    distance: attraction?.distance ?? "",
    guideHref: attraction?.guideHref,
  };

  const guideHref = getAttractionGuideHref(portSlug, resolvedAttraction);
  if (guideHref) {
    return { href: guideHref, label: "Attraction guide" };
  }

  const matchedExcursion = port ? matchBestExcursion(attractionName, port.bestExcursions) : undefined;
  const excursionDestination = getExcursionTypeDestination(portSlug, resolvedAttraction, matchedExcursion);
  if (excursionDestination) {
    return excursionDestination;
  }

  if (port?.topAttractions.some((item) => item.name === attractionName)) {
    return getPortGuideDestination(portSlug, true);
  }

  return getPortGuideDestination(portSlug, false);
}

export { PORT_ATTRACTIONS_SECTION_ID };
