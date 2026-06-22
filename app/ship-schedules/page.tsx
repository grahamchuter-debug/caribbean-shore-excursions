import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import { getSchedulePortCount } from "@/data/content-inventory";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScheduleYearHeroCards } from "@/components/ScheduleYearHeroCards";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/FAQSection";
import { SCHEDULE_HOME_FAQS } from "@/data/schedule-hub-faqs";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { portHubPath } from "@/lib/schedule-utils";

const SCHEDULE_PORT_COUNT = getSchedulePortCount();

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules 2026 & 2027",
  description:
    `Caribbean cruise ship schedule and port schedule hub for ${SCHEDULE_PORT_COUNT} top ports. Browse verified 2026 and 2027 arrival and departure times for Cozumel, Nassau, St. Thomas, Aruba, Grand Cayman, and more.`,
  path: "/ship-schedules",
  keywords: [
    "cruise ship schedule",
    "cruise ship schedule 2026",
    "cruise ship schedule 2027",
    "cruise schedule",
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
              `Year-first cruise ship schedule hub for verified 2026 and 2027 Caribbean port schedules across ${SCHEDULE_PORT_COUNT} top ports.`,
            path: "/ship-schedules",
          }),
          faqSchema(SCHEDULE_HOME_FAQS),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Ship Schedules"
        subtitle="Browse verified cruise ship and port schedules for 2026 and 2027. Each port page includes arrival and departure times, cruise passenger tips, recommended excursions, and links to local specialist operators."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ship Schedules", path: "/ship-schedules" },
            ]}
          />

          <section className="mb-14 max-w-3xl">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">How to Use This Cruise Schedule Hub</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Search for a cruise ship schedule, port schedule, or sailing year and you will land here
              or on a port-specific page. Start with 2026 or 2027, open your destination, then use
              monthly tables to see which ships are in port and how long you have ashore before booking
              excursions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every port schedule page includes cruise passenger information, what to do in port,
              recommended shore excursions, and links to vetted local specialist websites with
              pier-aware pickup and return guarantees.
            </p>
          </section>

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

          <FAQSection faqs={SCHEDULE_HOME_FAQS} />

          <AuthorityHubLinks current="schedules" />
        </div>
      </section>
    </>
  );
}
