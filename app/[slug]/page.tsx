import { notFound } from "next/navigation";
import { AttractionGuidePageView } from "@/components/AttractionGuidePageView";
import {
  getAllAttractionGuideSlugs,
  getAttractionGuideBySlug,
} from "@/data/st-thomas-attractions";
import { buildAttractionGuideMetadata } from "@/lib/st-thomas-attractions";

export function generateStaticParams() {
  return getAllAttractionGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const guide = getAttractionGuideBySlug(slug);
    if (!guide) return {};
    return buildAttractionGuideMetadata(guide);
  });
}

export default async function AttractionGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getAttractionGuideBySlug(slug);
  if (!guide) notFound();
  return <AttractionGuidePageView guide={guide} />;
}
