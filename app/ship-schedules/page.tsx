import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts, getShipCallCountForPortYear } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SCHEDULE_YEARS } from "@/lib/schedule-utils";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules 2026 & 2027",
  description:
    "Caribbean cruise ship schedules for 2026 and 2027 at St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, St. Maarten, Puerto Plata, Costa Maya, and Ocho Rios.",
  path: "/ship-schedules",
  keywords: [
    "cruise ship schedule 2026",
    "cruise ship schedule 2027",
    "Caribbean port schedule",
    "ships in port",
  ],
});

export default function ShipSchedulesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ship Schedules", path: "/ship-schedules" },
          ]),
          webPageSchema({
            title: "Caribbean Cruise Ship Schedules 2026 & 2027",
            description:
              "Cruise ship schedules for the top ten Caribbean cruise ports with dedicated 2026 and 2027 year pages.",
            path: "/ship-schedules",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Ship Schedules 2026 & 2027"
        subtitle="See which cruise ships are scheduled at the Caribbean's top ten ports. Choose a port hub, then open the 2026 or 2027 monthly schedule."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ship Schedules", path: "/ship-schedules" },
            ]}
          />
          <p className="text-gray-700 mb-4 max-w-3xl">
            Each port hub links to dedicated 2026 and 2027 schedules with monthly arrival and departure
            tables, planning tips, and authority port guides.
          </p>
          <p className="text-sm text-gray-500 mb-6 max-w-3xl">
            Months awaiting verified data display &quot;Schedule data being updated&quot;. We do not
            publish unverified ship calls, cruise lines, or passenger capacities.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <Link href="/busiest-caribbean-cruise-ports-2027" className="card-gradient block hover:border-caribbean-300">
              <h2 className="font-display text-xl font-bold text-gray-900">Busiest Caribbean Cruise Ports 2027</h2>
              <p className="mt-2 text-sm text-gray-600">
                Verified ship call rankings, passenger estimates, and planning insights.
              </p>
            </Link>
            <Link href="/caribbean-cruise-calendar-2027" className="card-gradient block hover:border-caribbean-300">
              <h2 className="font-display text-xl font-bold text-gray-900">Caribbean Cruise Calendar 2027</h2>
              <p className="mt-2 text-sm text-gray-600">
                Peak months, regional seasonality, and seasonal cruise patterns.
              </p>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedulePorts.map((port) => {
              const yearCounts = SCHEDULE_YEARS.map((year) => ({
                year,
                count: getShipCallCountForPortYear(port.slug, year),
              }));

              return (
                <div key={port.slug} className="card-gradient">
                  <Link href={`/ship-schedules/${port.slug}`} className="group block">
                    <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                      {port.name}
                    </h2>
                    <p className="text-sm text-gray-500">{port.country}</p>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{port.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
                      Open schedule hub
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {yearCounts.map(({ year, count }) => (
                      <Link
                        key={year}
                        href={`/ship-schedules/${port.slug}/${year}`}
                        className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                      >
                        {year}
                        {count > 0 ? ` (${count})` : ""}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <AuthorityHubLinks current="schedules" />
          </div>
        </div>
      </section>
    </>
  );
}
