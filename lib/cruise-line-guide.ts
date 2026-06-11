import { getCruiseLineByPageSlug } from "@/data/cruise-lines";
import { buildMetadata } from "./seo";

export function buildCruiseLineGuideMetadata(pageSlug: string) {
  const line = getCruiseLineByPageSlug(pageSlug);
  if (!line) return {};
  return buildMetadata({
    title: line.seoTitle,
    description: line.metaDescription,
    path: `/${pageSlug}`,
    keywords: [
      `${line.name} shore excursions`,
      `${line.name} Caribbean`,
      "cruise line port guide",
      "Caribbean cruise planning",
    ],
  });
}
