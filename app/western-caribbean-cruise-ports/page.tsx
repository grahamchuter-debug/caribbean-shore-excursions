import { notFound } from "next/navigation";
import { RegionPageView } from "@/components/RegionPageView";
import { getRegionBySlug } from "@/data/regions";
import { buildRegionMetadata } from "@/lib/region-page";

const SLUG = "western-caribbean-cruise-ports";

export const metadata = buildRegionMetadata(SLUG);

export default function WesternCaribbeanPortsPage() {
  const region = getRegionBySlug(SLUG);
  if (!region) notFound();
  return <RegionPageView region={region} />;
}
