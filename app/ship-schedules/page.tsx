import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScheduleYearHeroCards } from "@/components/ScheduleYearHeroCards";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { portHubPath } from "@/lib/schedule-utils";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules",
  description:
    "Choose your sailing year first: browse 2026 or 2027 Caribbean cruise ship schedules for St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, and seven more top ports.",
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
            title: "Caribbean Cruise Ship Schedules",
            description:
              "Year-first hub for 2026 and 2027 Caribbean cruise ship schedules across ten top ports.",
            path: "/ship-schedules",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Ship Schedules"
        subtitle="Start with your sailing year. Each master hub lists every top port with monthly arrival and departure tables for planning shore excursions."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ship Schedules", path: "/ship-schedules" },
            ]}
          />

          <section className="mb-14">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Choose Your Schedule Year</h2>
            <ScheduleYearHeroCards />
          </section>

          <section className="mb-14">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">2027 Planning Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
              <Link href="/busiest-caribbean-cruise-ports-2027" className="card-gradient block hover:border-caribbean-300">
                <h3 className="font-display text-lg font-bold text-gray-900">Busiest Caribbean Cruise Ports 2027</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Verified ship call rankings, passenger estimates, and planning insights.
                </p>
              </Link>
              <Link href="/caribbean-cruise-calendar-2027" className="card-gradient block hover:border-caribbean-300">
                <h3 className="font-display text-lg font-bold text-gray-900">Caribbean Cruise Calendar 2027</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Peak months, regional seasonality, and seasonal cruise patterns.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Browse by Port</h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              Prefer to start with a destination? Open a port schedule hub to choose between its 2026
              and 2027 monthly tables.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schedulePorts.map((port) => (
                <Link
                  key={port.slug}
                  href={portHubPath(port.slug)}
                  className="card-gradient group block hover:border-caribbean-300"
                >
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                    {port.name}
                  </h3>
                  <p className="text-sm text-gray-500">{port.country}</p>
                  <span className="mt-3 inline-flex text-sm font-medium text-caribbean-700">
                    Port schedule hub
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <AuthorityHubLinks current="schedules" />
        </div>
      </section>
    </>
  );
}
