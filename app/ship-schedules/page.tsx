import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules",
  description:
    "Check 2026 and 2027 Caribbean cruise ship schedules by port. See which ships visit St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, Puerto Plata, and St. Maarten on your cruise day.",
  path: "/ship-schedules",
  keywords: ["cruise ship schedule", "port schedule", "ships in port"],
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
          travelGuideSchema({
            title: "Caribbean Cruise Ship Schedules",
            description: "Cruise ship schedules for major Caribbean ports.",
            path: "/ship-schedules",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Ship Schedules"
        subtitle="See which cruise ships are scheduled at major Caribbean ports. Plan around multi-ship days to avoid crowds and sold-out excursions."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ship Schedules", path: "/ship-schedules" },
            ]}
          />
          <p className="text-gray-700 mb-8 max-w-3xl">
            Select a port below to view scheduled cruise ship arrivals and departures. Multi-ship days with three or more vessels typically mean crowded beaches, longer tender queues, and limited excursion availability — plan your port day accordingly.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedulePorts.map((port) => (
              <Link key={port.slug} href={`/ship-schedules/${port.slug}`} className="card-gradient group">
                <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                  {port.name}
                </h2>
                <p className="text-sm text-gray-500">{port.country}</p>
                <p className="mt-3 text-sm text-gray-600">{port.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
                  View schedule
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
