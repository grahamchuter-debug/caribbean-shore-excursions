import { notFound } from "next/navigation";
import { RegionPageView } from "@/components/RegionPageView";
import { getRegionBySlug } from "@/data/regions";
import { buildRegionMetadata } from "@/lib/region-page";

const SLUG = "southern-caribbean-cruise-ports";

export const metadata = buildRegionMetadata(SLUG);

export default function SouthernCaribbeanPortsPage() {
  const region = getRegionBySlug(SLUG);
  if (!region) notFound();
  return <RegionPageView region={region} />;
}
