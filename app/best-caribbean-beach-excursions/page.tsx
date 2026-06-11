import { notFound } from "next/navigation";
import { BestGuidePageView } from "@/components/BestGuidePageView";
import { getBestGuideBySlug } from "@/data/best-guides";
import { buildBestGuideMetadata } from "@/lib/best-guide";

const SLUG = "best-caribbean-beach-excursions";

export const metadata = buildBestGuideMetadata(SLUG);

export default function Page() {
  const guide = getBestGuideBySlug(SLUG);
  if (!guide) notFound();
  return <BestGuidePageView guide={guide} />;
}
