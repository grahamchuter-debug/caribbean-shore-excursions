import type { AttractionGuidePage } from "./types";
import {
  getStThomasAttractionGuides,
  stThomasAttractionGuides,
} from "./st-thomas-attractions";
import { getPortAttractionGuides, portAttractionGuides } from "./port-attractions";

export const allAttractionGuides: AttractionGuidePage[] = [
  ...stThomasAttractionGuides,
  ...portAttractionGuides,
];

const guideBySlug = Object.fromEntries(
  allAttractionGuides.map((guide) => [guide.slug, guide]),
) as Record<string, AttractionGuidePage>;

export function getAttractionGuideBySlug(slug: string): AttractionGuidePage | undefined {
  return guideBySlug[slug];
}

export function getAllAttractionGuideSlugs(): string[] {
  return allAttractionGuides.map((guide) => guide.slug);
}

export function getAttractionGuidesByPortSlug(portSlug: string): AttractionGuidePage[] {
  return allAttractionGuides.filter((guide) => guide.portSlug === portSlug);
}

export function getAllAttractionGuides(): AttractionGuidePage[] {
  return allAttractionGuides;
}

/** @deprecated Use getAttractionGuidesByPortSlug("st-thomas") */
export { getStThomasAttractionGuides };
