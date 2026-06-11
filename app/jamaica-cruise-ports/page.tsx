import { notFound } from "next/navigation";
import { RegionPageView } from "@/components/RegionPageView";
import { getRegionBySlug } from "@/data/regions";
import { buildRegionMetadata } from "@/lib/region-page";

const SLUG = "jamaica-cruise-ports";

export const metadata = buildRegionMetadata(SLUG);

export default function JamaicaPortsPage() {
  const region = getRegionBySlug(SLUG);
  if (!region) notFound();
  return <RegionPageView region={region} />;
}
