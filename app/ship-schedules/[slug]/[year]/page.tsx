import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import {
  getSchedulePortBySlug,
  getAllSchedulePortSlugs,
  getShipCallCountForPortYear,
} from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipSchedulePageView } from "@/components/ShipSchedulePageView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import {
  isValidScheduleYear,
  isScheduleYearSlug,
  parseScheduleYear,
  SCHEDULE_YEARS,
  portHubPath,
  portYearPath,
  yearHubPath,
} from "@/lib/schedule-utils";

export function generateStaticParams() {
  return getAllSchedulePortSlugs().flatMap((slug) =>
    SCHEDULE_YEARS.map((year) => ({ slug, year: String(year) })),
  );
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  return params.then(({ slug, year: yearParam }) => {
    if (isScheduleYearSlug(slug)) return {};
    const port = getSchedulePortBySlug(slug);
    const year = parseScheduleYear(yearParam);
    if (!port || !year) return {};

    const shipCalls = getShipCallCountForPortYear(slug, year);
    const callNote =
      shipCalls > 0
        ? `${shipCalls} verified ship calls listed.`
        : "Monthly schedule with placeholders until import completes.";

    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule ${year}`,
      description: `${port.name} ${year} cruise ship schedule with arrival and departure times. ${callNote} Plan shore excursions around your port day.`,
      path: portYearPath(slug, year),
      keywords: [
        `${port.name} ship schedule ${year}`,
        `${port.name} cruise schedule ${year}`,
        "ships in port",
        "cruise arrival times",
      ],
    });
  });
}

export default async function ShipScheduleYearPage({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  const { slug, year: yearParam } = await params;
  if (isScheduleYearSlug(slug)) notFound();

  const year = parseScheduleYear(yearParam);
  const port = getSchedulePortBySlug(slug);
  if (!port || !year || !isValidScheduleYear(year)) notFound();

  const title = `${port.name} Cruise Ship Schedule ${year}`;
  const otherYear = year === 2026 ? 2027 : 2026;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: `${year} Schedules`, path: yearHubPath(year) },
    { name: port.name, path: portYearPath(slug, year) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title,
            description: `${port.name} ${year} cruise ship schedule with verified arrival and departure times where available.`,
            path: portYearPath(slug, year),
          }),
          ...(port.faqs?.length ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero title={title} subtitle={port.description} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-6 flex flex-wrap gap-4">
            <Link href={yearHubPath(year)} className="btn-primary text-sm">
              All {year} Caribbean Schedules
            </Link>
            <Link href={portYearPath(slug, otherYear)} className="btn-secondary text-sm">
              View {otherYear} Schedule
            </Link>
            <Link href={portHubPath(slug)} className="btn-secondary text-sm">
              {port.name} schedule hub
            </Link>
            <Link href={`/ports/${slug}`} className="btn-secondary text-sm">
              {port.name} Port Guide
            </Link>
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
          </div>

          <ShipSchedulePageView port={port} year={year} />

          <p className="mt-8 text-sm text-gray-500">
            Arrival and departure times are published for planning purposes and may change due to
            weather, tender conditions, or cruise line schedule adjustments. Always confirm final
            times with your ship before disembarking.
          </p>
        </div>
      </section>
    </>
  );
}
