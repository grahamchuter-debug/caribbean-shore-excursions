import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { schedulePorts } from "@/data/schedules";
import {
  getBusiestPorts2027Insights,
  ESTIMATED_PASSENGERS_PER_CALL,
  getAllPortYearStats,
  getVerifiedPortRankings,
} from "@/data/schedule-insights";
import { getSchedulePortCount } from "@/data/content-inventory";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

const YEAR = 2027;

export const metadata = buildMetadata({
  title: "Busiest Caribbean Cruise Ports 2027",
  description:
    "Rank the busiest Caribbean cruise ports in 2027 using verified ship call data, passenger estimates, and cruise planning insights for St. Thomas, Cozumel, Nassau, and more.",
  path: "/busiest-caribbean-cruise-ports-2027",
  keywords: [
    "busiest Caribbean cruise ports 2027",
    "cruise ship calls",
    "Caribbean port traffic",
    "cruise passenger estimates",
  ],
});

function formatPassengers(value: number | null): string {
  if (value === null) return "Awaiting import";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M est.`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}K est.`;
  return `${value.toLocaleString()} est.`;
}

export default function BusiestCaribbeanCruisePorts2027Page() {
  const busiestPorts2027Insights = getBusiestPorts2027Insights();
  const schedulePortCount = getSchedulePortCount();
  const allStats = getAllPortYearStats(YEAR);
  const verifiedRankings = getVerifiedPortRankings(YEAR);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: "Busiest Ports 2027", path: "/busiest-caribbean-cruise-ports-2027" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(busiestPorts2027Insights.faqs),
          travelGuideSchema({
            title: "Busiest Caribbean Cruise Ports 2027",
            description: busiestPorts2027Insights.intro,
            path: "/busiest-caribbean-cruise-ports-2027",
          }),
        ]}
      />
      <PageHero
        title="Busiest Caribbean Cruise Ports 2027"
        subtitle="Verified ship call rankings, passenger estimates, and planning insights for the Caribbean's top cruise ports."
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">{busiestPorts2027Insights.intro}</p>

          <div className="mb-6 flex flex-wrap gap-3">
            <Link href="/ship-schedules/2027" className="btn-primary text-sm">
              2027 Caribbean Schedules
            </Link>
            <Link href="/caribbean-cruise-calendar-2027" className="btn-secondary text-sm">
              Caribbean Cruise Calendar 2027
            </Link>
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
          </div>

          {verifiedRankings.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-4">Verified 2027 Rankings</h2>
              <p className="text-sm text-gray-600 mb-4">
                Based on imported monthly schedules. Passenger totals use a {ESTIMATED_PASSENGERS_PER_CALL.toLocaleString()}-guest average per call when capacity is unpublished.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Rank</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Port</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Region</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Ship calls</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Passengers</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Schedule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {verifiedRankings.map((stats, index) => (
                      <tr key={stats.slug}>
                        <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{stats.name}</td>
                        <td className="px-4 py-3 text-gray-600">{stats.region}</td>
                        <td className="px-4 py-3 text-gray-700">{stats.shipCalls.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {formatPassengers(stats.estimatedPassengers)}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/ship-schedules/${stats.slug}/${YEAR}`}
                            className="font-medium text-caribbean-700 hover:text-caribbean-800"
                          >
                            View {YEAR}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">All {schedulePortCount} Tracked Ports</h2>
            <p className="text-sm text-gray-600 mb-4">
              Full port list we track. Ports without verified imports show call and passenger fields as pending.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Port</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Region</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">2027 ship calls</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">2027 passengers</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Links</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {allStats.map((stats) => (
                    <tr key={stats.slug}>
                      <td className="px-4 py-3 font-medium text-gray-900">{stats.name}</td>
                      <td className="px-4 py-3 text-gray-600">{stats.region}</td>
                      <td className="px-4 py-3 text-gray-700">
                        {stats.hasVerifiedData ? stats.shipCalls.toLocaleString() : "Import pending"}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {formatPassengers(stats.estimatedPassengers)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/ship-schedules/${stats.slug}`}
                            className="text-caribbean-700 hover:text-caribbean-800"
                          >
                            Hub
                          </Link>
                          <Link
                            href={`/ship-schedules/${stats.slug}/${YEAR}`}
                            className="text-caribbean-700 hover:text-caribbean-800"
                          >
                            {YEAR}
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Planning Insights</h2>
            <ul className="space-y-3">
              {busiestPorts2027Insights.planningInsights.map((insight) => (
                <li key={insight} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                    ✓
                  </span>
                  {insight}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Port Schedule Hubs</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schedulePorts.map((port) => (
                <Link
                  key={port.slug}
                  href={`/ship-schedules/${port.slug}`}
                  className="card-gradient block hover:border-caribbean-300"
                >
                  <h3 className="font-semibold text-gray-900">{port.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{port.country}</p>
                  <span className="mt-3 inline-flex text-sm font-medium text-caribbean-700">
                    2026 &amp; 2027 schedules
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={busiestPorts2027Insights.faqs} />

          <div className="mt-10">
            <AuthorityHubLinks current="schedules" />
          </div>
        </div>
      </section>
    </>
  );
}
