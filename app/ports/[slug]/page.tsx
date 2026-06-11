import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPortBySlug, getAllPortSlugs } from "@/data/ports";
import { hasShipSchedule } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { SpecialistLink } from "@/components/SpecialistLink";
import { PortRelatedLinks } from "@/components/PortRelatedLinks";
import { getPortRelatedLinks } from "@/data/port-related";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getPortBySlug(slug);
    if (!port) return {};
    return buildMetadata({
      title: `${port.name} Cruise Port Guide`,
      description: `${port.overview.slice(0, 155)}...`,
      path: `/ports/${slug}`,
      keywords: [`${port.name} shore excursions`, `${port.name} cruise port`, port.country],
    });
  });
}

export default async function PortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const port = getPortBySlug(slug);
  if (!port) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Caribbean Ports", path: "/ports" },
    { name: port.name, path: `/ports/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(port.faqs),
          travelGuideSchema({
            title: `${port.name} Cruise Port Guide`,
            description: port.overview,
            path: `/ports/${slug}`,
          }),
        ]}
      />
      <PageHero title={`${port.name} Cruise Port Guide`} subtitle={port.tagline} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          {/* Overview */}
          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{port.overview}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {port.highlights.map((h) => (
                <span key={h} className="rounded-full bg-caribbean-100 px-3 py-1 text-sm text-caribbean-800 font-medium">
                  {h}
                </span>
              ))}
            </div>
          </section>

          {/* Best Excursions */}
          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Excursions</h2>
            <div className="space-y-4">
              {port.bestExcursions.map((exc) => (
                <div key={exc.name} className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{exc.name}</h3>
                      <p className="mt-1 text-gray-600">{exc.description}</p>
                    </div>
                    <div className="flex shrink-0 gap-3 text-sm">
                      {exc.rating && (
                        <span className="text-tropical-mango font-semibold">★ {exc.rating}</span>
                      )}
                      <span className="text-gray-500">{exc.duration}</span>
                      <span className="rounded bg-caribbean-50 px-2 py-0.5 text-caribbean-700">{exc.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Port Information */}
          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Port Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Dock Type", value: port.portInfo.dockType },
                { label: "Walking Distance", value: port.portInfo.walkingDistance },
                { label: "Tender Required", value: port.portInfo.tenderRequired ? "Yes" : "No" },
                { label: "Currency", value: port.portInfo.currency },
                { label: "Language", value: port.portInfo.language },
                { label: "Time Zone", value: port.portInfo.timeZone },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                  <dd className="mt-1 text-gray-900">{item.value}</dd>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600 bg-tropical-sand/40 rounded-lg p-4">
              <strong>Safety:</strong> {port.portInfo.safetyNotes}
            </p>
          </section>

          {/* Cruise Passenger Tips */}
          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Passenger Tips</h2>
            <ul className="space-y-3">
              {port.passengerTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Top Attractions */}
          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Top Attractions</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {port.topAttractions.map((attr) => (
                <div key={attr.name} className="card-gradient">
                  <h3 className="font-semibold text-gray-900">{attr.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{attr.description}</p>
                  <p className="mt-2 text-xs text-caribbean-700 font-medium">{attr.distance}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Specialist Link */}
          <section className="mb-12">
            <SpecialistLink url={port.specialistUrl} name={port.specialistName} portName={port.name} />
          </section>

          <PortRelatedLinks links={getPortRelatedLinks(slug)} />

          {/* Schedule & excursion links */}
          <section className="mb-12 flex flex-wrap gap-4">
            {hasShipSchedule(port.slug) ? (
              <Link href={`/ship-schedules/${port.slug}`} className="btn-secondary text-sm">
                {port.name} Ship Schedule
              </Link>
            ) : (
              <Link href="/ship-schedules" className="btn-secondary text-sm">
                Ship Schedules
              </Link>
            )}
            <Link href="/excursion-types" className="btn-secondary text-sm">
              Excursion Types
            </Link>
          </section>

          <FAQSection faqs={port.faqs} />
        </div>
      </article>
    </>
  );
}
