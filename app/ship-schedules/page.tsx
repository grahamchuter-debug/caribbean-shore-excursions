import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import { getSchedulePortCount } from "@/data/content-inventory";
import { getSchedulePageContent } from "@/data/schedule-page-content";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScheduleYearHeroCards } from "@/components/ScheduleYearHeroCards";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/FAQSection";
import {
  SchedulePageContentSections,
  SchedulePageIntro,
} from "@/components/SchedulePageContentSections";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { NavCardCta } from "@/components/NavCardCta";
import { portHubPath } from "@/lib/schedule-utils";

const SCHEDULE_PORT_COUNT = getSchedulePortCount();
const homeContent = getSchedulePageContent("home");

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ship Schedules 2026 & 2027",
  description:
    `Caribbean cruise ship schedule and port schedule hub for ${SCHEDULE_PORT_COUNT} top ports. Browse published 2026 and 2027 arrival and departure times for Cozumel, Nassau, St. Thomas, Aruba, Grand Cayman, and more.`,
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
              `Year-first cruise ship schedule hub for published 2026 and 2027 Caribbean port schedules across ${SCHEDULE_PORT_COUNT} top ports.`,
            path: "/ship-schedules",
          }),
          ...(homeContent.faqs?.length ? [faqSchema(homeContent.faqs)] : []),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Ship Schedules"
        subtitle={homeContent.heroSubtitle ?? "Browse published cruise ship and port schedules for 2026 and 2027."}
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ship Schedules", path: "/ship-schedules" },
            ]}
          />

          <SchedulePageIntro content={homeContent} />

          <SchedulePageContentSections content={homeContent} />

          <section className="mb-14">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Choose Your Schedule Year</h2>
            <ScheduleYearHeroCards />
          </section>

          <section className="mb-14">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">2027 Planning Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
              <Link href="/busiest-caribbean-cruise-ports-2027" className="card-gradient group flex h-full flex-col hover:border-caribbean-300">
                <h3 className="font-display text-lg font-bold text-gray-900">Busiest Caribbean Cruise Ports 2027</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Published ship call rankings, passenger estimates, and planning insights.
                </p>
                <NavCardCta className="pt-4">View busiest ports ranking</NavCardCta>
              </Link>
              <Link href="/caribbean-cruise-calendar-2027" className="card-gradient group flex h-full flex-col hover:border-caribbean-300">
                <h3 className="font-display text-lg font-bold text-gray-900">Caribbean Cruise Calendar 2027</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Peak months, regional seasonality, and seasonal cruise patterns.
                </p>
                <NavCardCta className="pt-4">Open 2027 cruise calendar</NavCardCta>
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
                  className="card-gradient group flex h-full flex-col hover:border-caribbean-300"
                >
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                    {port.name}
                  </h3>
                  <p className="text-sm text-gray-500">{port.country}</p>
                  <NavCardCta className="pt-4">Open {port.name} schedule hub</NavCardCta>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={homeContent.faqs} />

          <AuthorityHubLinks current="schedules" />
        </div>
      </section>
    </>
  );
}
