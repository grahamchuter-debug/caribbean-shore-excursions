import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules 2026",
  description:
    "Check 2026 Caribbean cruise ship schedules for St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, St. Maarten, Puerto Plata, Costa Maya, and Ocho Rios. Plan shore excursions around arrival and departure times.",
  path: "/ship-schedules",
  keywords: ["cruise ship schedule 2026", "Caribbean port schedule", "ships in port"],
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
            title: "Caribbean Cruise Ship Schedules 2026",
            description:
              "2026 cruise ship schedules for the top ten Caribbean cruise ports.",
            path: "/ship-schedules",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Ship Schedules 2026"
        subtitle="See which cruise ships are scheduled at the Caribbean's top ten ports. Plan shore excursions around arrival and departure times before you sail."
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
            Select a port below to view the 2026 monthly cruise ship schedule. Each page includes
            arrival and departure columns, planning tips, and links to authority port guides and
            specialist excursion websites.
          </p>
          <p className="text-sm text-gray-500 mb-8 max-w-3xl">
            Months awaiting verified data display &quot;Schedule data being updated&quot; — we do not
            publish unverified ship calls, cruise lines, or passenger capacities.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedulePorts.map((port) => (
              <Link
                key={port.slug}
                href={`/ship-schedules/${port.slug}`}
                className="card-gradient group"
              >
                <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                  {port.name}
                </h2>
                <p className="text-sm text-caribbean-700 font-medium mt-1">
                  {port.seoTitle}
                </p>
                <p className="text-sm text-gray-500">{port.country}</p>
                <p className="mt-3 text-sm text-gray-600 line-clamp-2">{port.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
                  View 2026 schedule
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <AuthorityHubLinks current="schedules" />
          </div>
        </div>
      </section>
    </>
  );
}
