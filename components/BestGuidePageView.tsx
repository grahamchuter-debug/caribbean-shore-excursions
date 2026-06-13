import Link from "next/link";
import type { BestGuidePage } from "@/data/types";
import { getPortBySlug } from "@/data/ports";
import { getBestScheduleUrl } from "@/lib/schedule-cta-url";
import { getRelatedComparisonsForPorts } from "@/lib/best-guide";
import { BEST_CARIBBEAN_GUIDES_HUB_SLUG } from "@/data/best-caribbean-guides-hub";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { BestGuideComparisonTable } from "@/components/BestGuideComparisonTable";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { SpecialistLocalGuideSection } from "@/components/SpecialistLocalGuide";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { ExcursionCardCTAs } from "@/components/ExcursionCardCTAs";

export function BestGuidePageView({ guide }: { guide: BestGuidePage }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Best Caribbean Guides", path: `/${BEST_CARIBBEAN_GUIDES_HUB_SLUG}` },
    { name: guide.title, path: `/${guide.slug}` },
  ];

  const relatedComparisons = getRelatedComparisonsForPorts(guide.topPorts.map((p) => p.slug));

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
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Ranked Ports</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {guide.topPorts.map((item, index) => {
                const port = getPortBySlug(item.slug);
                const scheduleCta = getBestScheduleUrl({ portSlug: item.slug, year: 2027 });
                if (!port) return null;
                return (
                  <div key={item.slug} className="card-gradient">
                    <p className="text-xs font-semibold uppercase tracking-wide text-caribbean-600">
                      #{index + 1} · {port.region}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-gray-900">
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
                      {scheduleCta && (
                        <Link href={scheduleCta.href} className="btn-secondary text-xs">
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
                    {scheduleCta?.fallbackNote && (
                      <p className="mt-2 text-xs text-gray-500">{scheduleCta.fallbackNote}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <SpecialistLocalGuideSection
            portSlugs={guide.topPorts.map((p) => p.slug)}
            intro="The ports below are covered in this guide. Visit each specialist local site for live tour listings, local operator pricing, and pier-aware booking beyond this authority overview."
          />

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
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">{exc.description}</p>
                        <ExcursionCardCTAs
                          portSlug={exc.portSlug}
                          excursionTypeSlug={guide.excursionTypeSlug}
                          text={`${exc.name} ${exc.description}`}
                        />
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

          {relatedComparisons.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-4">Related Port Comparisons</h2>
              <p className="text-sm text-gray-600 mb-4">
                Head-to-head comparisons for ports featured in this guide.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedComparisons.map((comparison) => (
                  <Link
                    key={comparison.slug}
                    href={`/compare/${comparison.slug}`}
                    className="rounded-lg border border-caribbean-100 bg-white px-4 py-3 hover:border-caribbean-200 hover:shadow-sm transition-all"
                  >
                    <span className="font-medium text-gray-900">
                      {comparison.portA} vs {comparison.portB}
                    </span>
                    <span className="mt-1 block text-xs text-gray-500 line-clamp-2">{comparison.summary}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

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
            <Link href={`/${BEST_CARIBBEAN_GUIDES_HUB_SLUG}`} className="btn-primary text-sm">
              All Best Caribbean Guides
            </Link>
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
