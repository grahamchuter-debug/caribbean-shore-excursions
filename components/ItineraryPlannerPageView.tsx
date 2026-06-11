import Link from "next/link";
import type { ItineraryPlannerPage } from "@/data/types";
import { getPortBySlug } from "@/data/ports";
import { getBestGuideBySlug } from "@/data/best-guides";
import { comparisons } from "@/data/comparisons";
import { hasShipSchedule } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function ItineraryPlannerPageView({ planner }: { planner: ItineraryPlannerPage }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Cruise Planner", path: "/cruise-planner" },
    { name: planner.title, path: `/${planner.slug}` },
  ];

  const relatedComparisons = comparisons.filter((c) =>
    planner.topPortSlugs.includes(c.portASlug) || planner.topPortSlugs.includes(c.portBSlug)
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(planner.faqs),
          travelGuideSchema({
            title: planner.title,
            description: planner.metaDescription,
            path: `/${planner.slug}`,
          }),
        ]}
      />
      <PageHero title={planner.title} subtitle={planner.heroSubtitle} />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">About This Itinerary</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{planner.overview}</p>
            <ul className="mt-6 space-y-3">
              {planner.itineraryHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Top Ports on This Itinerary</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {planner.topPortSlugs.map((slug) => {
                const port = getPortBySlug(slug);
                if (!port) return null;
                return (
                  <div key={slug} className="card-gradient">
                    <h3 className="font-display text-lg font-bold text-gray-900">
                      <Link href={`/ports/${slug}`} className="hover:text-caribbean-700">
                        {port.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{port.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href={`/ports/${slug}`} className="btn-primary text-xs">
                        Port Guide
                      </Link>
                      {hasShipSchedule(slug) && (
                        <Link href={`/ship-schedules/${slug}`} className="btn-secondary text-xs">
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
            <div className="mt-4">
              <Link href={`/${planner.regionPageSlug}`} className="text-sm font-medium text-caribbean-700 hover:underline">
                View full region port guide →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Recommended Excursions</h2>
            <ul className="space-y-3">
              {planner.recommendedExcursions.map((exc) => (
                <li key={exc} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                    ✓
                  </span>
                  {exc}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Excursion Guides</h2>
            <div className="flex flex-wrap gap-2">
              {planner.bestGuideSlugs.map((slug) => {
                const guide = getBestGuideBySlug(slug);
                return guide ? (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="rounded-full bg-caribbean-50 px-4 py-2 text-sm font-medium text-caribbean-700 hover:bg-caribbean-100"
                  >
                    {guide.title}
                  </Link>
                ) : null;
              })}
            </div>
          </section>

          {relatedComparisons.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">Port Comparisons</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedComparisons.map((comp) => (
                  <Link key={comp.slug} href={`/compare/${comp.slug}`} className="card hover:border-caribbean-200">
                    <span className="font-semibold text-gray-900">
                      {comp.portA} vs {comp.portB}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mb-12 flex flex-wrap gap-4">
            <Link href="/cruise-planner" className="btn-primary">
              Full Cruise Planner
            </Link>
            <Link href="/cruise-lines" className="btn-secondary">
              Cruise Line Guides
            </Link>
            <Link href="/ship-schedules" className="btn-secondary">
              Ship Schedules
            </Link>
          </div>

          <FAQSection faqs={planner.faqs} />

          <div className="mt-12">
            <AuthorityHubLinks />
          </div>
        </div>
      </article>
    </>
  );
}
