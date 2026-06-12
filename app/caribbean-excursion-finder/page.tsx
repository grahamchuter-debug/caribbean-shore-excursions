import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { CaribbeanExcursionFinderWithRoute } from "@/components/CaribbeanExcursionFinderWithRoute";
import { CaribbeanRoutePresets } from "@/components/CaribbeanRoutePresets";
import { finderFaqs, getPortComparisonRows, portDayMistakes } from "@/data/excursion-finder";
import { getPortBySlug } from "@/data/ports";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Excursion Finder | Personalised Shore Excursion Plan",
  description:
    "Your personalised Caribbean cruise recommendation engine. Match ports, traveller style and time ashore to shore excursions with Cruise Match scores and return-to-ship confidence.",
  path: "/caribbean-excursion-finder",
  keywords: [
    "Caribbean excursion finder",
    "cruise shore excursions",
    "Caribbean cruise planner",
    "port day planner",
  ],
});

export default function CaribbeanExcursionFinderPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Caribbean Excursion Finder", path: "/caribbean-excursion-finder" },
  ];

  const comparisonRows = getPortComparisonRows();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(finderFaqs),
          travelGuideSchema({
            title: "Caribbean Excursion Finder",
            description:
              "Personalised Caribbean shore excursion recommendations with Cruise Match scores and return-to-ship confidence.",
            path: "/caribbean-excursion-finder",
          }),
        ]}
      />

      <PageHero
        title="Caribbean Excursion Finder™"
        subtitle="Your personalised Caribbean cruise recommendation engine. Match ports, traveller style and time ashore to shore excursions with Caribbean Cruise Match scores and return-to-ship confidence."
      />

      <section className="section-padding">
        <div className="container-wide max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl">Popular Caribbean Cruise Routes</h2>
            <p className="section-subtitle">
              Start with a proven route, then open the excursion finder to preselect matching ports and refine for your
              ship and port times.
            </p>
            <div className="mt-8">
              <CaribbeanRoutePresets />
            </div>
          </div>

          <div className="mb-12">
            <CaribbeanExcursionFinderWithRoute />
          </div>

          <div className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl">How the finder works</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Choose your traveller type, cruise line, Caribbean ports on your itinerary, fitness level and typical time
              ashore. The finder generates a Caribbean Cruise Match summary plus port-by-port plans with excursion picks,
              best-for tags, port guide links, specialist booking sites and return-to-ship confidence badges.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              This is a personalised planning tool for cruise passengers, not a live AI booking engine. Always confirm
              excursion duration and all-aboard times with your operator and cruise line.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl">Compare Caribbean Cruise Ports</h2>
            <p className="section-subtitle mb-6">
              Side by side planning for headline Caribbean ports, then jump to authority guides or local booking sites.
            </p>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-caribbean-50">
                    <th className="px-4 py-3 font-semibold text-gray-900">Port</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Best for</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Top excursion</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Time needed</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.portSlug} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link href={`/ports/${row.portSlug}`} className="text-caribbean-700 hover:underline">
                          {row.portName}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.bestFor}</td>
                      <td className="px-4 py-3 text-gray-600">{row.topExcursion}</td>
                      <td className="px-4 py-3 text-gray-600">{row.duration}</td>
                      <td className="px-4 py-3 text-gray-600">{row.activityLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:hidden">
              {comparisonRows.map((row) => (
                <div key={row.portSlug} className="card-gradient">
                  <h3 className="font-semibold text-gray-900">
                    <Link href={`/ports/${row.portSlug}`} className="text-caribbean-700 hover:underline">
                      {row.portName}
                    </Link>
                  </h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div>
                      <dt className="font-medium text-gray-700">Best for</dt>
                      <dd className="text-gray-600">{row.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-700">Top excursion</dt>
                      <dd className="text-gray-600">{row.topExcursion}</dd>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <dt className="font-medium text-gray-700">Time</dt>
                        <dd className="text-gray-600">{row.duration}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Activity</dt>
                        <dd className="text-gray-600">{row.activityLevel}</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <Link href="/ports" className="mt-6 inline-flex text-sm font-medium text-caribbean-700 hover:underline">
              View all Caribbean ports →
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl">Don&apos;t Waste Your Caribbean Port Day</h2>
            <p className="section-subtitle mb-8">
              Common cruise-day mistakes at popular Caribbean ports, and the better excursion choices that deliver real
              payoff.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {portDayMistakes.map((tip) => {
                const port = getPortBySlug(tip.portSlug);
                return (
                  <div key={tip.portSlug} className="card-gradient">
                    <h3 className="font-display text-lg font-bold text-gray-900">{port?.name ?? tip.portSlug}</h3>
                    <p className="mt-3 text-sm text-gray-700">
                      <span className="font-semibold text-rose-700">Avoid:</span> {tip.mistake}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      <span className="font-semibold text-emerald-700">Better:</span> {tip.better}
                    </p>
                    {port && (
                      <Link
                        href={`/ports/${tip.portSlug}`}
                        className="mt-4 inline-flex text-sm font-medium text-caribbean-700 hover:underline"
                      >
                        {port.name} port guide →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <FAQSection faqs={finderFaqs} title="Caribbean Excursion Finder FAQs" />
        </div>
      </section>
    </>
  );
}
