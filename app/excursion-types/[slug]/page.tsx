import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getExcursionTypeBySlug, getAllExcursionTypeSlugs } from "@/data/excursion-types";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllExcursionTypeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const type = getExcursionTypeBySlug(slug);
    if (!type) return {};
    return buildMetadata({
      title: `${type.name} in the Caribbean`,
      description: type.overview.slice(0, 155) + "...",
      path: `/excursion-types/${slug}`,
      keywords: [`Caribbean ${type.name.toLowerCase()}`, "shore excursions", type.slug],
    });
  });
}

export default async function ExcursionTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = getExcursionTypeBySlug(slug);
  if (!type) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Excursion Types", path: "/excursion-types" },
    { name: type.name, path: `/excursion-types/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(type.faqs),
          travelGuideSchema({
            title: `${type.name} in the Caribbean`,
            description: type.overview,
            path: `/excursion-types/${slug}`,
          }),
        ]}
      />
      <PageHero title={type.name} subtitle={type.tagline} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{type.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">What to Expect</h2>
            <ul className="space-y-3">
              {type.whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Ports</h2>
            <div className="space-y-4">
              {type.bestPorts.map((port) => (
                <Link key={port.slug} href={`/ports/${port.slug}`} className="card block hover:border-caribbean-200">
                  <h3 className="font-semibold text-gray-900">{port.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{port.reason}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Tips</h2>
            <ul className="space-y-3">
              {type.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tropical-mango text-white text-xs">★</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <FAQSection faqs={type.faqs} />
        </div>
      </article>
    </>
  );
}
