import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getCruiseLineBySlug, getAllCruiseLineSlugs } from "@/data/cruise-lines";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { CruiseLinePlanningSections } from "@/components/CruiseLinePlanningSections";
import { BookingJourneyPanel } from "@/components/BookingJourneyPanel";
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
          <BookingJourneyPanel
            title={`Book ${line.name} Caribbean shore excursions`}
            description={`Open the ${line.name} shore excursions guide, match ports in the Excursion Finder, or check ship schedules before you book independent tours.`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${line.pageSlug}`} className="btn-primary text-sm">
              {line.name} Shore Excursions Guide
            </Link>
            <Link href="/caribbean-excursion-finder" className="btn-secondary text-sm">
              Caribbean Excursion Finder
            </Link>
          </div>
          <div className="mt-12">
            <FAQSection faqs={line.faqs} />
          </div>
        </div>
      </article>
    </>
  );
}
