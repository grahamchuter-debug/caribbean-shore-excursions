import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getComparisonBySlug, getAllComparisonSlugs } from "@/data/comparisons";
import { ComparisonPageView } from "@/components/ComparisonPageView";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const comp = getComparisonBySlug(slug);
    if (!comp) return {};
    return buildMetadata({
      title: comp.seoTitle,
      description: comp.metaDescription,
      path: `/compare/${slug}`,
      keywords: [
        `${comp.portA} vs ${comp.portB}`,
        "Caribbean port comparison",
        "cruise port guide",
        comp.portA,
        comp.portB,
      ],
    });
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  return <ComparisonPageView comp={comp} />;
}
