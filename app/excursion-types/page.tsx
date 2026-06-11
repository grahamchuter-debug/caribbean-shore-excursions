import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { excursionTypes } from "@/data/excursion-types";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Shore Excursion Types",
  description:
    "Explore Caribbean shore excursion categories — beaches, snorkeling, private tours, family tours, catamaran cruises, and adventure tours. Find the best ports for each type.",
  path: "/excursion-types",
  keywords: ["excursion types", "Caribbean tours", "shore excursion categories"],
});

export default function ExcursionTypesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Excursion Types", path: "/excursion-types" },
          ]),
          travelGuideSchema({
            title: "Caribbean Shore Excursion Types",
            description: "Guide to Caribbean shore excursion categories and the best ports for each.",
            path: "/excursion-types",
          }),
        ]}
      />
      <PageHero
        title="Excursion Types"
        subtitle="Find the right shore excursion category for your Caribbean port day. Each guide covers what to expect, best ports, and expert tips."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Excursion Types", path: "/excursion-types" },
            ]}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursionTypes.map((type) => (
              <Link key={type.slug} href={`/excursion-types/${type.slug}`} className="card-gradient group">
                <h2 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                  {type.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{type.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {type.bestPorts.slice(0, 3).map((p) => (
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
