import { notFound } from "next/navigation";
import { CruiseLineGuidePageView } from "@/components/CruiseLineGuidePageView";
import { getCruiseLineByPageSlug } from "@/data/cruise-lines";
import { buildCruiseLineGuideMetadata } from "@/lib/cruise-line-guide";

const PAGE_SLUG = "celebrity-shore-excursions";

export const metadata = buildCruiseLineGuideMetadata(PAGE_SLUG);

export default function Page() {
  const line = getCruiseLineByPageSlug(PAGE_SLUG);
  if (!line) notFound();
  return <CruiseLineGuidePageView line={line} />;
}
