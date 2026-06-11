import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { ports } from "@/data/ports";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Caribbean Shore Excursions",
  description:
    "Learn about Caribbean Shore Excursions — the independent Caribbean cruise planning authority helping passengers compare ports, excursions, and itineraries.",
  path: "/about",
  keywords: ["about us", "cruise planning authority", "Caribbean travel guide"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          organizationSchema(),
        ]}
      />
      <PageHero
        title="About Us"
        subtitle="The independent Caribbean cruise planning authority — helping passengers make informed decisions about ports, excursions, and itineraries."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]}
          />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg leading-relaxed">
              {SITE.name} is the planning authority for Caribbean cruise passengers. We are not a tour operator — we are an independent resource that helps you compare ports, understand excursion options, and build the perfect cruise itinerary before you sail.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Our Mission</h2>
            <p>
              Caribbean cruising offers incredible diversity — from Mayan ruins in Cozumel to stingrays in Grand Cayman, from Dunn&apos;s River Falls in Jamaica to duty-free shopping in St. Thomas. With so many options at every port, planning can be overwhelming.
            </p>
            <p>
              We cut through the noise with honest, detailed port guides, head-to-head comparisons, and practical passenger tips. Our network of specialist port websites connects you with vetted local excursion operators when you are ready to book.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">What We Offer</h2>
            <ul className="space-y-3">
              {[
                "In-depth guides to 10+ Caribbean cruise ports and growing",
                "Head-to-head port comparisons to help you choose itineraries",
                "Excursion type guides matched to the best Caribbean ports",
                "Cruise line-specific Caribbean planning advice",
                "Ship schedule framework for crowd planning",
                "Links to specialist local excursion websites at every port",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Our Port Network</h2>
            <p>
              We connect cruise passengers with specialist excursion websites at each Caribbean port. These local partners offer curated tours from vetted operators with cruise-passenger-friendly policies.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 not-prose">
              {ports.map((port) => (
                <a
                  key={port.slug}
                  href={port.specialistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-sm hover:border-caribbean-200"
                >
                  <span className="font-semibold text-gray-900">{port.specialistName}</span>
                </a>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Built for Growth</h2>
            <p>
              This site is architected for long-term expansion to 100+ pages. As we add more ports, comparisons, excursion guides, and schedule data, our goal remains the same: help Caribbean cruise passengers plan better port days with trustworthy, independent information.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
