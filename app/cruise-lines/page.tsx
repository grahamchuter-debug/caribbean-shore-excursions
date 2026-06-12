import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cruiseLines } from "@/data/cruise-lines";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Line Guides",
  description:
    "Caribbean cruise planning guides for Royal Caribbean, Carnival, Norwegian, MSC, Princess, and Celebrity. Routes, popular ports, and excursion booking tips.",
  path: "/cruise-lines",
  keywords: ["cruise line guides", "Caribbean cruise lines", "shore excursion booking"],
});

export default function CruiseLinesPage() {
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
        subtitle="Caribbean-specific planning advice for every major cruise line, itineraries, popular ports, and shore excursion booking strategies."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Cruise Lines", path: "/cruise-lines" },
            ]}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cruiseLines.map((line) => (
              <Link key={line.slug} href={`/${line.pageSlug}`} className="card-gradient group">
                <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                  {line.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{line.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {line.popularPorts.slice(0, 3).map((p) => (
                    <span key={p.slug} className="rounded bg-caribbean-50 px-2 py-0.5 text-xs text-caribbean-700">
                      {p.name}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
