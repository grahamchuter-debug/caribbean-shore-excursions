import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cruiseLines } from "@/data/cruise-lines";
import { getFeaturedShips } from "@/data/ships";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Line Guides",
  description:
    "Caribbean cruise planning guides for Royal Caribbean, Carnival, Norwegian, MSC, Princess, and Celebrity. Fleet overviews, popular ships, ports, excursions, and booking advice.",
  path: "/cruise-lines",
  keywords: ["cruise line guides", "Caribbean cruise lines", "shore excursion booking"],
});

export default function CruiseLinesPage() {
  const featuredShips = getFeaturedShips();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cruise Lines", path: "/cruise-lines" },
          ]),
          travelGuideSchema({
            title: "Caribbean Cruise Line Guides",
            description: "Planning guides for major cruise lines sailing the Caribbean.",
            path: "/cruise-lines",
          }),
        ]}
      />
      <PageHero
        title="Cruise Line Guides"
        subtitle="Caribbean-specific planning for every major cruise line: fleet overviews, popular ships, hub ports, excursion categories, and shore excursion booking strategies."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Cruise Lines", path: "/cruise-lines" },
            ]}
          />

          <div className="mb-10 rounded-xl border border-caribbean-200 bg-caribbean-50/40 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900">Cruise Line → Ship → Port → Schedule</h2>
              <p className="mt-1 text-sm text-gray-600">
                Pick your cruise line, find your ship, then plan port days with authority guides and live schedules.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/ships" className="btn-primary text-sm">
                Browse Ships
              </Link>
              <Link href="/ship-schedules" className="btn-secondary text-sm">
                Ship Schedules
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
            {cruiseLines.map((line) => (
              <div key={line.slug} className="card-gradient group">
                <Link href={`/cruise-lines/${line.slug}`} className="block">
                  <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                    {line.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{line.tagline}</p>
                </Link>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {line.popularPorts.slice(0, 3).map((p) => (
                    <span key={p.slug} className="rounded bg-caribbean-50 px-2 py-0.5 text-xs text-caribbean-700">
                      {p.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link href={`/cruise-lines/${line.slug}`} className="text-caribbean-700 hover:underline font-medium">
                    Planning hub →
                  </Link>
                  <Link href={`/${line.pageSlug}`} className="text-gray-600 hover:underline">
                    Excursions guide
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <section>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <h2 className="section-title text-2xl sm:text-3xl">Featured Caribbean Ships</h2>
              <Link href="/ships" className="text-sm text-caribbean-700 hover:underline">
                All ships →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredShips.map((ship) => (
                <Link key={ship.slug} href={`/ships/${ship.slug}`} className="card hover:border-caribbean-200">
                  <span className="font-semibold text-gray-900">{ship.name}</span>
                  <span className="block text-xs text-gray-500 mt-1 line-clamp-2">{ship.tagline}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
