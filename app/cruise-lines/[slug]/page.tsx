import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getCruiseLineBySlug, getAllCruiseLineSlugs } from "@/data/cruise-lines";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
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
      title: `${line.name} Caribbean Cruise Guide`,
      description: line.overview.slice(0, 155) + "...",
      path: `/cruise-lines/${slug}`,
      keywords: [`${line.name} Caribbean`, `${line.name} shore excursions`, `${line.name} ports`],
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
            title: `${line.name} Caribbean Cruise Guide`,
            description: line.overview,
            path: `/cruise-lines/${slug}`,
          }),
        ]}
      />
      <PageHero title={`${line.name} Caribbean Guide`} subtitle={line.tagline} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{line.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Caribbean Routes</h2>
            <ul className="space-y-2">
              {line.caribbeanRoutes.map((route) => (
                <li key={route} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 text-caribbean-500">→</span>
                  {route}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Popular Ports</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {line.popularPorts.map((port) => (
                <Link key={port.slug} href={`/ports/${port.slug}`} className="card hover:border-caribbean-200">
                  <span className="font-semibold text-gray-900">{port.name}</span>
                  <span className="block text-sm text-caribbean-700 mt-1">View port guide →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Excursion Tips</h2>
            <ul className="space-y-3">
              {line.excursionTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Booking Tips</h2>
            <ul className="space-y-3">
              {line.bookingTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tropical-mango text-white text-xs">★</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <FAQSection faqs={line.faqs} />
        </div>
      </article>
    </>
  );
}
