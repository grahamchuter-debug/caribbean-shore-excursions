import Link from "next/link";
import type { CruiseShip } from "@/data/types";
import { getCruiseLineBySlug } from "@/data/cruise-lines";
import { getPortBySlug } from "@/data/ports";
import { hasShipSchedule } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function ShipPageView({ ship }: { ship: CruiseShip }) {
  const line = getCruiseLineBySlug(ship.cruiseLineSlug);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ships", path: "/ships" },
    { name: ship.name, path: `/ships/${ship.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(ship.faqs),
          travelGuideSchema({
            title: ship.seoTitle,
            description: ship.metaDescription,
            path: `/ships/${ship.slug}`,
          }),
        ]}
      />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          {line && (
            <div className="mb-8 flex flex-wrap gap-3">
              <Link href={`/cruise-lines/${line.slug}`} className="btn-secondary text-sm">
                {line.name} Cruise Line Guide
              </Link>
              <Link href={`/${line.pageSlug}`} className="btn-secondary text-sm">
                {line.name} Shore Excursions
              </Link>
            </div>
          )}

          <section className="mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {ship.name}
            </h1>
            <p className="text-lg text-caribbean-700 font-medium mb-4">{ship.tagline}</p>
            <p className="text-gray-700 leading-relaxed text-lg">{ship.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Caribbean Itineraries</h2>
            <ul className="space-y-3">
              {ship.caribbeanItineraries.map((itinerary) => (
                <li key={itinerary} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 text-caribbean-500">→</span>
                  {itinerary}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Common Caribbean Ports</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ship.commonPortSlugs.map((portSlug) => {
                const port = getPortBySlug(portSlug);
                if (!port) return null;
                return (
                  <div key={portSlug} className="card-gradient">
                    <h3 className="font-semibold text-gray-900">
                      <Link href={`/ports/${portSlug}`} className="hover:text-caribbean-700">
                        {port.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-caribbean-600">{port.bestFor}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href={`/ports/${portSlug}`} className="btn-primary text-xs">
                        Port Guide
                      </Link>
                      {hasShipSchedule(portSlug) && (
                        <Link href={`/ship-schedules/${portSlug}`} className="btn-secondary text-xs">
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

          {ship.recommendedExcursions.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">Recommended Shore Excursions</h2>
              <div className="space-y-4">
                {ship.recommendedExcursions.map((exc) => {
                  const port = getPortBySlug(exc.portSlug);
                  return (
                    <div key={`${exc.portSlug}-${exc.name}`} className="card">
                      <h3 className="font-semibold text-gray-900 text-lg">{exc.name}</h3>
                      <p className="mt-1 text-sm text-caribbean-700">
                        <Link href={`/ports/${exc.portSlug}`} className="hover:underline">
                          {port?.name ?? exc.portSlug}
                        </Link>
                      </p>
                      <p className="mt-2 text-gray-600 leading-relaxed">{exc.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {ship.planningAdvice.length > 0 && (
            <section className="mb-12 rounded-2xl border-2 border-caribbean-200 bg-caribbean-50/40 p-6 sm:p-8">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Planning Advice</h2>
              <ul className="space-y-3">
                {ship.planningAdvice.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                      ✓
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/ship-schedules" className="text-sm text-caribbean-700 hover:underline">
                  Ship schedules hub →
                </Link>
                <Link href="/cruise-planner" className="text-sm text-caribbean-700 hover:underline">
                  Caribbean cruise planner →
                </Link>
              </div>
            </section>
          )}

          {ship.faqs.length > 0 && <FAQSection faqs={ship.faqs} />}
        </div>
      </article>
    </>
  );
}
