import Link from "next/link";
import type { CruiseLine } from "@/data/types";
import { getPortBySlug } from "@/data/ports";
import { hasShipSchedule } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { BestGuideComparisonTable } from "@/components/BestGuideComparisonTable";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { SpecialistLocalGuideSection } from "@/components/SpecialistLocalGuide";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function CruiseLineGuidePageView({ line }: { line: CruiseLine }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Cruise Lines", path: "/cruise-lines" },
    { name: `${line.name} Shore Excursions`, path: `/${line.pageSlug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(line.faqs),
          travelGuideSchema({
            title: line.seoTitle,
            description: line.metaDescription,
            path: `/${line.pageSlug}`,
          }),
        ]}
      />
      <PageHero
        title={`${line.name} Shore Excursions`}
        subtitle={line.tagline}
      />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">{line.overview}</p>
            <p className="text-gray-700 leading-relaxed">{line.overviewDetail}</p>
            <div className="mt-4">
              <Link href={`/cruise-lines/${line.slug}`} className="text-sm text-caribbean-700 hover:underline">
                {line.name} cruise line hub →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Popular Caribbean Itineraries</h2>
            <div className="space-y-4">
              {line.popularItineraries.map((itinerary) => (
                <div key={itinerary.name} className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{itinerary.name}</h3>
                    <span className="shrink-0 text-sm font-medium text-caribbean-700">{itinerary.duration}</span>
                  </div>
                  <p className="text-sm text-caribbean-600 font-medium mb-2">{itinerary.ports}</p>
                  <p className="text-gray-600 leading-relaxed">{itinerary.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Most Visited Caribbean Ports</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {line.popularPorts.map((port) => {
                const portData = getPortBySlug(port.slug);
                return (
                  <div key={port.slug} className="card-gradient">
                    <h3 className="font-display text-lg font-bold text-gray-900">
                      <Link href={`/ports/${port.slug}`} className="hover:text-caribbean-700">
                        {port.name}
                      </Link>
                    </h3>
                    {portData && (
                      <p className="mt-1 text-xs text-caribbean-600 font-medium">{portData.bestFor}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href={`/ports/${port.slug}`} className="btn-primary text-xs">
                        Port Guide
                      </Link>
                      {hasShipSchedule(port.slug) && (
                        <Link href={`/ship-schedules/${port.slug}`} className="btn-secondary text-xs">
                          Ship Schedule
                        </Link>
                      )}
                      {portData && (
                        <a
                          href={portData.specialistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs"
                        >
                          Book Locally
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <SpecialistLocalGuideSection
            portSlugs={line.popularPorts.map((p) => p.slug)}
            intro={`${line.name} passengers most often visit the ports below. Each has a dedicated local specialist site with live tour listings, local pricing, and pier pickup details for booking beyond this cruise line overview.`}
          />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Recommended Shore Excursions</h2>
            <div className="space-y-4">
              {line.recommendedExcursions.map((exc) => {
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
                      </div>
                      <span className="shrink-0 text-sm text-gray-500">{exc.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Family Recommendations</h2>
            <div className="space-y-4">
              {line.familyRecommendations.map((rec) => (
                <div key={rec.title} className="rounded-lg border border-caribbean-100 bg-caribbean-50/40 p-5">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="mt-1 text-sm text-caribbean-700">
                    <Link href={`/ports/${rec.portSlug}`} className="hover:underline">
                      {getPortBySlug(rec.portSlug)?.name ?? rec.portSlug}
                    </Link>
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed">{rec.advice}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Beach Recommendations</h2>
            <div className="space-y-4">
              {line.beachRecommendations.map((rec) => (
                <div key={rec.title} className="rounded-lg border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="mt-1 text-sm text-caribbean-700">
                    <Link href={`/ports/${rec.portSlug}`} className="hover:underline">
                      {getPortBySlug(rec.portSlug)?.name ?? rec.portSlug}
                    </Link>
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed">{rec.advice}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Adventure Recommendations</h2>
            <div className="space-y-4">
              {line.adventureRecommendations.map((rec) => (
                <div key={rec.title} className="rounded-lg border border-tropical-mango/30 bg-orange-50/30 p-5">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="mt-1 text-sm text-caribbean-700">
                    <Link href={`/ports/${rec.portSlug}`} className="hover:underline">
                      {getPortBySlug(rec.portSlug)?.name ?? rec.portSlug}
                    </Link>
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed">{rec.advice}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Port Excursion Comparison</h2>
            <p className="text-sm text-gray-600 mb-4">
              Top {line.name} Caribbean ports ranked by excursion type, transfer time, and passenger ratings.
            </p>
            <BestGuideComparisonTable rows={line.comparisonTable} />
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Excursion & Booking Tips</h2>
            <ul className="space-y-3 mb-6">
              {line.excursionTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                    ✓
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {line.bookingTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tropical-mango text-white text-xs">
                    ★
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <FAQSection faqs={line.faqs} />

          <div className="mt-12">
            <AuthorityHubLinks />
          </div>
        </div>
      </article>
    </>
  );
}
