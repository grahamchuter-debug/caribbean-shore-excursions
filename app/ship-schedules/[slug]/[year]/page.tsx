import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import {
  getSchedulePortBySlug,
  getAllSchedulePortSlugs,
  getShipCallCountForPortYear,
  getAllVerifiedMonthPageParams,
  getVerifiedScheduleEntriesForMonth,
  hasVerifiedScheduleDataForMonth,
} from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipSchedulePageView } from "@/components/ShipSchedulePageView";
import { ShipScheduleMonthPageView } from "@/components/ShipScheduleMonthPageView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import {
  getMonthlyMetaDescription,
  getMonthlyPageTitle,
  getMonthlyScheduleFaqs,
  getMonthlySeoTitle,
} from "@/data/schedule-month";
import {
  isValidScheduleYear,
  isScheduleYearSlug,
  parseScheduleYear,
  parseMonthSlug,
  SCHEDULE_YEARS,
  portHubPath,
  portYearPath,
  portMonthPath,
  yearHubPath,
  formatMonthLabel,
} from "@/lib/schedule-utils";

export function generateStaticParams() {
  const yearParams = getAllSchedulePortSlugs().flatMap((slug) =>
    SCHEDULE_YEARS.map((year) => ({ slug, year: String(year) })),
  );
  const monthParams = getAllVerifiedMonthPageParams().map(({ slug, period }) => ({
    slug,
    year: period,
  }));
  return [...yearParams, ...monthParams];
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  return params.then(({ slug, year: periodParam }) => {
    if (isScheduleYearSlug(slug)) return {};
    const port = getSchedulePortBySlug(slug);
    if (!port) return {};

    const monthKey = parseMonthSlug(periodParam);
    if (monthKey) {
      const entries = getVerifiedScheduleEntriesForMonth(slug, monthKey);
      if (entries.length === 0) return {};
      return buildMetadata({
        title: getMonthlySeoTitle(port.name, monthKey),
        description: getMonthlyMetaDescription(port.name, monthKey, entries.length),
        path: portMonthPath(slug, monthKey),
        keywords: [
          `${port.name} ship schedule ${formatMonthLabel(monthKey)}`,
          `${port.name} cruise schedule ${formatMonthLabel(monthKey)}`,
          "ships in port",
          "cruise arrival times",
        ],
      });
    }

    const year = parseScheduleYear(periodParam);
    if (!year) return {};

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

export default async function ShipSchedulePeriodPage({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  const { slug, year: periodParam } = await params;
  if (isScheduleYearSlug(slug)) notFound();

  const port = getSchedulePortBySlug(slug);
  if (!port) notFound();

  const monthKey = parseMonthSlug(periodParam);
  if (monthKey) {
    if (!hasVerifiedScheduleDataForMonth(slug, monthKey)) notFound();

    const entries = getVerifiedScheduleEntriesForMonth(slug, monthKey);
    const monthLabel = formatMonthLabel(monthKey);
    const year = Number(monthKey.split("-")[0]);
    const title = getMonthlyPageTitle(port.name, monthKey);
    const faqs = getMonthlyScheduleFaqs(port, monthKey, entries);
    const breadcrumbs = [
      { name: "Home", path: "/" },
      { name: "Ship Schedules", path: "/ship-schedules" },
      { name: `${year} Schedules`, path: yearHubPath(year as 2026 | 2027) },
      { name: port.name, path: portHubPath(slug) },
      { name: monthLabel, path: portMonthPath(slug, monthKey) },
    ];

    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema(breadcrumbs),
            webPageSchema({
              title,
              description: getMonthlyMetaDescription(port.name, monthKey, entries.length),
              path: portMonthPath(slug, monthKey),
            }),
            faqSchema(faqs),
          ]}
        />
        <PageHero title={title} subtitle={port.description} compact />
        <section className="section-padding">
          <div className="container-wide max-w-5xl">
            <Breadcrumbs items={breadcrumbs} />
            <ShipScheduleMonthPageView port={port} monthKey={monthKey} entries={entries} />
          </div>
        </section>
      </>
    );
  }

  const year = parseScheduleYear(periodParam);
  if (!year || !isValidScheduleYear(year)) notFound();

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
