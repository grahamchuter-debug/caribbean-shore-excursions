import { notFound } from "next/navigation";
import { ItineraryPlannerPageView } from "@/components/ItineraryPlannerPageView";
import { getItineraryPlannerBySlug } from "@/data/itinerary-planners";
import { buildItineraryPlannerMetadata } from "@/lib/itinerary-planner";

const SLUG = "dominican-republic-cruise-planner";

export const metadata = buildItineraryPlannerMetadata(SLUG);

export default function Page() {
  const planner = getItineraryPlannerBySlug(SLUG);
  if (!planner) notFound();
  return <ItineraryPlannerPageView planner={planner} />;
}
