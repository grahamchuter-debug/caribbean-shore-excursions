import Link from "next/link";
import type { BestGuidePage } from "@/data/types";
import { getPortBySlug } from "@/data/ports";
import { hasShipSchedule } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { BestGuideComparisonTable } from "@/components/BestGuideComparisonTable";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function BestGuidePageView({ guide }: { guide: BestGuidePage }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Best Excursions", path: "/best-shore-excursion-every-caribbean-port" },
    { name: guide.title, path: `/${guide.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(guide.faqs),
          travelGuideSchema({
            title: guide.seoTitle,
            description: guide.metaDescription,
            path: `/${guide.slug}`,
          }),
        ]}
      />
      <PageHero title={guide.title} subtitle={guide.heroSubtitle} />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">{guide.introduction}</p>
            <p className="text-gray-700 leading-relaxed">{guide.introductionDetail}</p>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Top Recommended Ports</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {guide.topPorts.map((item) => {
                const port = getPortBySlug(item.slug);
                if (!port) return null;
                return (
                  <div key={item.slug} className="card-gradient">
                    <h3 className="font-display text-lg font-bold text-gray-900">
                      <Link href={`/ports/${item.slug}`} className="hover:text-caribbean-700">
                        {port.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-caribbean-600 font-medium">{port.bestFor}</p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.reason}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href={`/ports/${item.slug}`} className="btn-primary text-xs">
                        Authority Port Guide
                      </Link>
                      {hasShipSchedule(item.slug) && (
                        <Link href={`/ship-schedules/${item.slug}`} className="btn-secondary text-xs">
                          Ship Schedule
                        </Link>
                      )}
                      <a
                        href={port.specialistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs"
                      >
                        {port.specialistName}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Recommended Excursions</h2>
            <div className="space-y-4">
              {guide.recommendedExcursions.map((exc) => {
                const port = getPortBySlug(exc.portSlug);
                return (
                  <div key={`${exc.portSlug}-${exc.name}`} className="card">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{exc.name}</h3>
                        <p className="mt-1 text-sm text-caribbean-700">
                          <Link href={`/ports/${exc.portSlug}`} className="hover:underline">
                            {port?.name ?? exc.portSlug}
                          </Link>
                          {port && (
                            <>
                              {" · "}
                              <a
                                href={port.specialistUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                Book locally
                              </a>
                            </>
                          )}
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">{exc.description}</p>
                      </div>
                      <span className="shrink-0 text-sm text-gray-500">{exc.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Port Comparison</h2>
            <p className="text-sm text-gray-600 mb-4">
              Compare transfer times, excursion highlights, and ratings across the top Caribbean ports for this excursion type.
            </p>
            <BestGuideComparisonTable rows={guide.comparisonTable} />
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Passenger Recommendations</h2>
            <div className="space-y-4">
              {guide.passengerRecommendations.map((rec) => (
                <div key={rec.title} className="rounded-lg border border-caribbean-100 bg-caribbean-50/40 p-5">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{rec.advice}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 flex flex-wrap gap-4">
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Check Ship Schedules
            </Link>
            <Link href="/cruise-planner" className="btn-secondary text-sm">
              Cruise Planner
            </Link>
            {guide.excursionTypeSlug && (
              <Link
                href={`/excursion-types/${guide.excursionTypeSlug}`}
                className="btn-secondary text-sm"
              >
                Excursion Type Guide
              </Link>
            )}
          </section>

          <FAQSection faqs={guide.faqs} />

          <div className="mt-12">
            <AuthorityHubLinks />
          </div>
        </div>
      </article>
    </>
  );
}
