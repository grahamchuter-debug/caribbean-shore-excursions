import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ships, getFeaturedShips } from "@/data/ships";
import { getCruiseLineBySlug } from "@/data/cruise-lines";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ships Guide",
  description:
    "Planning guides for major Caribbean cruise ships including Icon of the Seas, Mardi Gras, MSC World America, and Sun Princess. Itineraries, ports, and shore excursion links.",
  path: "/ships",
  keywords: ["cruise ships", "Caribbean cruise ships", "ship shore excursions"],
});

const cruiseLineOrder = [
  "royal-caribbean",
  "carnival",
  "norwegian",
  "msc",
  "celebrity",
  "princess",
];

export default function ShipsPage() {
  const featured = getFeaturedShips();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ships", path: "/ships" },
          ]),
          travelGuideSchema({
            title: "Caribbean Cruise Ships Guide",
            description: "Ship-by-ship Caribbean cruise planning with port and excursion links.",
            path: "/ships",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Ships"
        subtitle="Ship-specific Caribbean planning guides with itineraries, common ports, shore excursion picks, and links to schedules and local specialists."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Ships", path: "/ships" },
            ]}
          />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Featured Ship Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((ship) => {
                const line = getCruiseLineBySlug(ship.cruiseLineSlug);
                return (
                  <Link key={ship.slug} href={`/ships/${ship.slug}`} className="card-gradient group">
                    <p className="text-xs font-medium text-caribbean-600">{line?.name}</p>
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700 mt-1">
                      {ship.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{ship.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="section-title text-2xl sm:text-3xl mb-6">All Ships by Cruise Line</h2>
            <div className="space-y-10">
              {cruiseLineOrder.map((lineSlug) => {
                const line = getCruiseLineBySlug(lineSlug);
                const lineShips = ships.filter((s) => s.cruiseLineSlug === lineSlug);
                if (!line || lineShips.length === 0) return null;
                return (
                  <div key={lineSlug}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="font-display text-xl font-bold text-gray-900">
                        <Link href={`/cruise-lines/${lineSlug}`} className="hover:text-caribbean-700">
                          {line.name}
                        </Link>
                      </h3>
                      <Link href={`/${line.pageSlug}`} className="text-sm text-caribbean-700 hover:underline">
                        Shore excursions guide →
                      </Link>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {lineShips.map((ship) =>
                        ship.featuredPage ? (
                          <Link
                            key={ship.slug}
                            href={`/ships/${ship.slug}`}
                            className="rounded-lg border border-gray-200 bg-white px-4 py-3 hover:border-caribbean-200 hover:shadow-sm transition-all"
                          >
                            <span className="font-medium text-gray-900">{ship.name}</span>
                            <span className="block text-xs text-caribbean-700 mt-1">Ship guide →</span>
                          </Link>
                        ) : (
                          <div
                            key={ship.slug}
                            className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                          >
                            <span className="font-medium text-gray-700">{ship.name}</span>
                            <span className="block text-xs text-gray-500 mt-1">Overview on cruise line page</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="mt-12 rounded-xl border border-caribbean-200 bg-caribbean-50/40 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Cruise Line → Ship → Port → Schedule</h3>
            <p className="text-sm text-gray-700 mb-4">
              Start with a cruise line guide, drill into your ship, then use port guides and ship schedules to
              plan independent shore excursions through specialist local operators.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/cruise-lines" className="btn-primary text-sm">
                Cruise Line Guides
              </Link>
              <Link href="/ship-schedules" className="btn-secondary text-sm">
                Ship Schedules
              </Link>
              <Link href="/ports" className="btn-secondary text-sm">
                Port Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
