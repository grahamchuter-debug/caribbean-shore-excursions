import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getCruiseLineBySlug, getAllCruiseLineSlugs } from "@/data/cruise-lines";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { CruiseLinePlanningSections } from "@/components/CruiseLinePlanningSections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllCruiseLineSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const line = getCruiseLineBySlug(slug);
    if (!line) return {};
    return buildMetadata({
      title: `${line.name} Caribbean Cruise Planning Guide`,
      description: line.metaDescription,
      path: `/cruise-lines/${slug}`,
      keywords: [
        `${line.name} Caribbean`,
        `${line.name} cruise planning`,
        `${line.name} shore excursions`,
        `${line.name} ships`,
        "Caribbean cruise line",
      ],
    });
  });
}

export default async function CruiseLinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const line = getCruiseLineBySlug(slug);
  if (!line) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Cruise Lines", path: "/cruise-lines" },
    { name: line.name, path: `/cruise-lines/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(line.faqs),
          travelGuideSchema({
            title: `${line.name} Caribbean Cruise Planning Guide`,
            description: line.metaDescription,
            path: `/cruise-lines/${slug}`,
          }),
        ]}
      />
      <PageHero title={`${line.name} Caribbean Guide`} subtitle={line.tagline} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruiseLinePlanningSections line={line} variant="hub" />
          <div className="mt-12">
            <FAQSection faqs={line.faqs} />
          </div>
        </div>
      </article>
    </>
  );
}
