import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getComparisonBySlug, getAllComparisonSlugs } from "@/data/comparisons";
import { getPortBySlug } from "@/data/ports";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const comp = getComparisonBySlug(slug);
    if (!comp) return {};
    return buildMetadata({
      title: comp.title,
      description: comp.summary.slice(0, 155) + "...",
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
            description: comp.summary,
            path: `/compare/${slug}`,
          }),
        ]}
      />
      <PageHero title={comp.title} subtitle={comp.summary} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-8 flex flex-wrap gap-4">
            {getPortBySlug(comp.portASlug) && (
              <Link href={`/ports/${comp.portASlug}`} className="btn-secondary text-sm">
                {comp.portA} Guide
              </Link>
            )}
            {getPortBySlug(comp.portBSlug) && (
              <Link href={`/ports/${comp.portBSlug}`} className="btn-secondary text-sm">
                {comp.portB} Guide
              </Link>
            )}
          </div>

          {comp.sections.map((section) => (
            <section key={section.title} className="mb-10">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">{section.title}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="card border-t-4 border-t-caribbean-500">
                  <h3 className="font-display text-lg font-bold text-caribbean-800 mb-3">{comp.portA}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.portAContent}</p>
                </div>
                <div className="card border-t-4 border-t-tropical-mango">
                  <h3 className="font-display text-lg font-bold text-caribbean-800 mb-3">{comp.portB}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.portBContent}</p>
                </div>
              </div>
            </section>
          ))}

          <section className="mb-12 rounded-xl bg-caribbean-50 border border-caribbean-100 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Our Verdict</h2>
            <p className="text-gray-700 leading-relaxed">{comp.verdict}</p>
          </section>

          <FAQSection faqs={comp.faqs} />
        </div>
      </article>
    </>
  );
}
