import { getBestGuideBySlug } from "@/data/best-guides";
import { buildMetadata } from "./seo";

export function buildBestGuideMetadata(slug: string) {
  const guide = getBestGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    path: `/${slug}`,
    keywords: ["Caribbean shore excursions", "best excursions", slug.replace(/-/g, " ")],
  });
}
