import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getComparisonBySlug, getAllComparisonSlugs } from "@/data/comparisons";
import { getPortBySlug } from "@/data/ports";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

const CATEGORIES = [
  { key: "overview" as const, label: "Overview" },
  { key: "beaches" as const, label: "Beaches" },
  { key: "excursions" as const, label: "Excursions" },
  { key: "families" as const, label: "Families" },
  { key: "couples" as const, label: "Couples" },
  { key: "snorkeling" as const, label: "Snorkeling" },
  { key: "foodAndDrink" as const, label: "Food & Drink" },
  { key: "easeFromPort" as const, label: "Ease from Cruise Port" },
];

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const comp = getComparisonBySlug(slug);
    if (!comp) return {};
    return buildMetadata({
      title: comp.title,
      description: comp.metaDescription,
      path: `/compare/${slug}`,
      keywords: [`${comp.portA} vs ${comp.portB}`, "port comparison", "Caribbean cruise ports"],
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

  const portA = getPortBySlug(comp.portASlug);
  const portB = getPortBySlug(comp.portBSlug);
  const showBothPortLinks = comp.portASlug !== comp.portBSlug;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Cruise Planner", path: "/cruise-planner" },
    { name: `${comp.portA} vs ${comp.portB}`, path: `/compare/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(comp.faqs),
          travelGuideSchema({
            title: comp.title,
            description: comp.metaDescription,
            path: `/compare/${slug}`,
          }),
        ]}
      />
      <PageHero title={comp.title} subtitle={comp.summary} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-8 flex flex-wrap gap-4">
            {portA && (
              <Link href={`/ports/${comp.portASlug}`} className="btn-secondary text-sm">
                {comp.portA} Port Guide
              </Link>
            )}
            {showBothPortLinks && portB && (
              <Link href={`/ports/${comp.portBSlug}`} className="btn-secondary text-sm">
                {comp.portB} Port Guide
              </Link>
            )}
            {portA && (
              <a
                href={portA.specialistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                {portA.specialistName}
              </a>
            )}
          </div>

          {CATEGORIES.map(({ key, label }) => {
            const category = comp[key];
            if (!category || typeof category !== "object" || !("portA" in category)) return null;
            return (
              <section key={key} className="mb-10">
                <h2 className="section-title text-2xl sm:text-3xl mb-6">{label}</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="card border-t-4 border-t-caribbean-500">
                    <h3 className="font-display text-lg font-bold text-caribbean-800 mb-3">
                      {comp.portA}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{category.portA}</p>
                  </div>
                  <div className="card border-t-4 border-t-tropical-mango">
                    <h3 className="font-display text-lg font-bold text-caribbean-800 mb-3">
                      {comp.portB}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{category.portB}</p>
                  </div>
                </div>
              </section>
            );
          })}

          <section className="mb-10">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Overall</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{comp.bestOverall}</p>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Comparison Table</h2>
            <ComparisonTable
              portA={comp.portA}
              portB={comp.portB}
              rows={comp.comparisonTable}
            />
          </section>

          <section className="mb-12 rounded-xl bg-caribbean-50 border border-caribbean-100 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Our Verdict</h2>
            <p className="text-gray-700 leading-relaxed">{comp.verdict}</p>
          </section>

          <FAQSection faqs={comp.faqs} />

          <div className="mt-12">
            <AuthorityHubLinks />
          </div>
        </div>
      </article>
    </>
  );
}
