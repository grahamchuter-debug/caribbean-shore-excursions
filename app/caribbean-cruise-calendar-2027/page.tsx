import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import {
  calendar2027Insights,
  getMonthlyCallTotals,
  getPeakMonths,
} from "@/data/schedule-insights";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { NavCardCta } from "@/components/NavCardCta";

const YEAR = 2027;

export const metadata = buildMetadata({
  title: "Caribbean Cruise Calendar 2027",
  description:
    "2027 Caribbean cruise calendar with peak sailing months, best months by region, seasonal patterns, and links to port ship schedules.",
  path: "/caribbean-cruise-calendar-2027",
  keywords: [
    "Caribbean cruise calendar 2027",
    "best month to cruise Caribbean",
    "peak cruise season Caribbean",
    "Caribbean cruise seasonality",
  ],
});

export default function CaribbeanCruiseCalendar2027Page() {
  const monthlyTotals = getMonthlyCallTotals(YEAR);
  const peakMonths = getPeakMonths(YEAR);
  const maxCalls = peakMonths[0]?.shipCalls ?? 1;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: "Cruise Calendar 2027", path: "/caribbean-cruise-calendar-2027" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          ...(calendar2027Insights.faqs?.length ? [faqSchema(calendar2027Insights.faqs)] : []),
          travelGuideSchema({
            title: "Caribbean Cruise Calendar 2027",
            description: calendar2027Insights.intro,
            path: "/caribbean-cruise-calendar-2027",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Calendar 2027"
        subtitle="Peak cruise months, regional seasonality, and seasonal patterns to plan smarter port days."
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">{calendar2027Insights.intro}</p>

          <div className="mb-6 flex flex-wrap gap-3">
            <Link href="/ship-schedules/2027" className="btn-primary text-sm">
              2027 Caribbean Schedules
            </Link>
            <Link href="/busiest-caribbean-cruise-ports-2027" className="btn-secondary text-sm">
              Busiest Caribbean Ports 2027
            </Link>
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
          </div>

          {monthlyTotals.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-4">Peak Cruise Months (Verified Data)</h2>
              <p className="text-sm text-gray-600 mb-6">
                Combined verified ship calls across imported 2027 schedules. Totals will expand as more port imports are added.
              </p>
              <div className="space-y-3">
                {monthlyTotals.map((month) => (
                  <div key={month.monthKey} className="flex items-center gap-4">
                    <span className="w-32 shrink-0 text-sm font-medium text-gray-900">
                      {month.monthLabel}
                    </span>
                    <div className="flex-1 rounded-full bg-gray-100 h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-caribbean-600"
                        style={{ width: `${Math.max(8, (month.shipCalls / maxCalls) * 100)}%` }}
                      />
                    </div>
                    <span className="w-16 shrink-0 text-right text-sm text-gray-600">
                      {month.shipCalls}
                    </span>
                  </div>
                ))}
              </div>
              {peakMonths.length > 0 && (
                <p className="mt-4 text-sm text-gray-600">
                  Peak months so far:{" "}
                  {peakMonths.map((month) => month.monthLabel).join(", ")}.
                </p>
              )}
            </section>
          )}

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Months by Region</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {calendar2027Insights.regionalPatterns.map((region) => (
                <div key={region.region} className="card-gradient">
                  <h3 className="font-display text-xl font-bold text-gray-900">{region.region}</h3>
                  <p className="mt-2 text-sm font-medium text-caribbean-700">
                    Best months: {region.bestMonths}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{region.notes}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {region.portSlugs.map((slug) => {
                      const port = schedulePorts.find((item) => item.slug === slug);
                      if (!port) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/ship-schedules/${slug}/${YEAR}`}
                          className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                        >
                          {port.name} {YEAR}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Seasonal Cruise Patterns</h2>
            <div className="space-y-4">
              {calendar2027Insights.seasonalNotes.map((note) => (
                <div key={note.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-gray-900">{note.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{note.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">2027 Port Schedules</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schedulePorts.map((port) => (
                <Link
                  key={port.slug}
                  href={`/ship-schedules/${port.slug}/${YEAR}`}
                  className="card-gradient group flex h-full flex-col hover:border-caribbean-300"
                >
                  <h3 className="font-semibold text-gray-900">{port.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{port.country}</p>
                  <NavCardCta className="pt-4">View {port.name} {YEAR} schedule</NavCardCta>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={calendar2027Insights.faqs} />

          <div className="mt-10">
            <AuthorityHubLinks current="schedules" />
          </div>
        </div>
      </section>
    </>
  );
}
