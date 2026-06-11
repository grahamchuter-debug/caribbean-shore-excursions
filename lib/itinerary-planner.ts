import { getItineraryPlannerBySlug } from "@/data/itinerary-planners";
import { buildMetadata } from "./seo";

export function buildItineraryPlannerMetadata(slug: string) {
  const planner = getItineraryPlannerBySlug(slug);
  if (!planner) return {};
  return buildMetadata({
    title: planner.title,
    description: planner.metaDescription,
    path: `/${slug}`,
    keywords: ["Caribbean cruise planner", "cruise itinerary", slug.replace(/-/g, " ")],
  });
}
