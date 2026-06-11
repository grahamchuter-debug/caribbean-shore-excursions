import { notFound } from "next/navigation";
import { RegionalCruisePlannerPageView } from "@/components/RegionalCruisePlannerPageView";
import { getRegionalCruisePlannerBySlug } from "@/data/regional-cruise-planners";
import { buildRegionalCruisePlannerMetadata } from "@/lib/regional-cruise-planner";

const SLUG = "abc-islands-cruise-planner";

export const metadata = buildRegionalCruisePlannerMetadata(SLUG);

export default function Page() {
  const planner = getRegionalCruisePlannerBySlug(SLUG);
  if (!planner) notFound();
  return <RegionalCruisePlannerPageView planner={planner} />;
}
