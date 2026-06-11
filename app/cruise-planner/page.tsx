import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ports } from "@/data/ports";
import { comparisons } from "@/data/comparisons";
import { excursionTypes } from "@/data/excursion-types";
import { cruiseLines } from "@/data/cruise-lines";
import { cruiseTips } from "@/data/tips";
import { itineraryPlanners } from "@/data/itinerary-planners";
import { bestGuides } from "@/data/best-guides";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Planner",
  description:
    "Plan your Caribbean cruise itinerary with port comparisons, excursion matching, ship schedule checks, and expert planning tips for every port day.",
  path: "/cruise-planner",
  keywords: ["cruise planner", "Caribbean itinerary", "cruise planning tool"],
});

const plannerFaqs = [
  {
    question: "How do I plan shore excursions for a Caribbean cruise?",
    answer: "Start by reviewing each port on your itinerary, then match excursion types to your interests. Check ship schedules for crowded days, book must-do excursions early, and use our port guides to compare options at each destination.",
  },
  {
    question: "Should I book excursions through the cruise line or independently?",
    answer: "Book your one must-do excursion through the cruise line for the return guarantee. Use independent operators for additional activities — they typically offer better pricing and smaller groups.",
  },
  {
    question: "How far in advance should I plan Caribbean port days?",
    answer: "Research ports as soon as you book your cruise. Book popular excursions 2-4 weeks before sailing. Check ship schedules 1-2 weeks out to identify multi-ship days.",
  },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cruise Planner", path: "/cruise-planner" },
          ]),
          faqSchema(plannerFaqs),
          travelGuideSchema({
            title: "Caribbean Cruise Planner",
            description: "Plan your Caribbean cruise itinerary with port guides and excursion recommendations.",
            path: "/cruise-planner",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Planner"
        subtitle="Build your perfect cruise itinerary step by step. Compare ports, choose excursions, and plan every port day with confidence."
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Cruise Planner", path: "/cruise-planner" },
            ]}
          />

          {/* Itinerary planners */}
          <div className="mb-16">
            <h2 className="section-title text-2xl mb-6">Itinerary Planners by Route</h2>
            <p className="text-gray-700 mb-6">
              Plan your full cruise route with port rankings, excursion picks, and specialist links for each itinerary style.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {itineraryPlanners.map((planner) => (
                <Link key={planner.slug} href={`/${planner.slug}`} className="card-gradient">
                  <h3 className="font-semibold text-gray-900">{planner.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{planner.heroSubtitle}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Best excursion guides */}
          <div className="mb-16">
            <h2 className="section-title text-2xl mb-6">Best Excursion Guides</h2>
            <div className="flex flex-wrap gap-2">
              {bestGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/${guide.slug}`}
                  className="rounded-full bg-caribbean-50 px-4 py-2 text-sm font-medium text-caribbean-700 hover:bg-caribbean-100"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Regional planners */}
          <div className="mb-16">
            <h2 className="section-title text-2xl mb-6">Regional Cruise Planners</h2>
            <p className="text-gray-700 mb-6">
              Jump to port guides and comparisons by Caribbean region to plan shore excursions faster.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div id="eastern-caribbean" className="card-gradient scroll-mt-24">
                <h3 className="font-display text-lg font-bold text-gray-900">Eastern Caribbean</h3>
                <p className="mt-2 text-sm text-gray-600 mb-4">
                  St. Thomas, St. Maarten, Puerto Plata and nearby island comparisons.
                </p>
                <div className="flex flex-wrap gap-2">
                  {ports
                    .filter((p) => p.region === "Eastern Caribbean")
                    .map((port) => (
                      <Link
                        key={port.slug}
                        href={`/ports/${port.slug}`}
                        className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                      >
                        {port.name}
                      </Link>
                    ))}
                </div>
              </div>
              <div id="western-caribbean" className="card-gradient scroll-mt-24">
                <h3 className="font-display text-lg font-bold text-gray-900">Western Caribbean</h3>
                <p className="mt-2 text-sm text-gray-600 mb-4">
                  Cozumel, Roatán, Grand Cayman, Costa Maya and Ocho Rios adventures.
                </p>
                <div className="flex flex-wrap gap-2">
                  {ports
                    .filter((p) => p.region === "Western Caribbean")
                    .map((port) => (
                      <Link
                        key={port.slug}
                        href={`/ports/${port.slug}`}
                        className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                      >
                        {port.name}
                      </Link>
                    ))}
                </div>
              </div>
              <div id="southern-caribbean" className="card-gradient scroll-mt-24">
                <h3 className="font-display text-lg font-bold text-gray-900">Southern Caribbean</h3>
                <p className="mt-2 text-sm text-gray-600 mb-4">
                  Aruba, Curaçao comparisons and Southern route planning.
                </p>
                <div className="flex flex-wrap gap-2">
                  {ports
                    .filter((p) => p.region === "Southern Caribbean")
                    .map((port) => (
                      <Link
                        key={port.slug}
                        href={`/ports/${port.slug}`}
                        className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                      >
                        {port.name}
                      </Link>
                    ))}
                  <Link
                    href="/compare/aruba-vs-curacao"
                    className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                  >
                    Aruba vs Curaçao
                  </Link>
                </div>
              </div>
              <div id="bahamas" className="card-gradient scroll-mt-24">
                <h3 className="font-display text-lg font-bold text-gray-900">Bahamas</h3>
                <p className="mt-2 text-sm text-gray-600 mb-4">
                  Nassau port days, Atlantis excursions and Bahamas cruise planning.
                </p>
                <div className="flex flex-wrap gap-2">
                  {ports
                    .filter((p) => p.region === "Bahamas")
                    .map((port) => (
                      <Link
                        key={port.slug}
                        href={`/ports/${port.slug}`}
                        className="rounded-full bg-caribbean-50 px-3 py-1 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                      >
                        {port.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-700 text-white font-bold">1</span>
              <h2 className="section-title text-2xl">Review Your Ports</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Start with our port guides for every destination on your itinerary. Each guide covers the best excursions, port logistics, and passenger tips.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {ports.map((port) => (
                <Link key={port.slug} href={`/ports/${port.slug}`} className="card text-sm hover:border-caribbean-200">
                  <span className="font-semibold text-gray-900">{port.name}</span>
                  <span className="text-gray-500"> — {port.region}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-16" id="compare">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-700 text-white font-bold">2</span>
              <h2 className="section-title text-2xl">Compare Ports</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Debating between two destinations? Our head-to-head comparisons break down beaches, excursions, culture, and port convenience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {comparisons.map((comp) => (
                <Link key={comp.slug} href={`/compare/${comp.slug}`} className="card-gradient">
                  <h3 className="font-semibold text-gray-900">{comp.portA} vs {comp.portB}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{comp.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-700 text-white font-bold">3</span>
              <h2 className="section-title text-2xl">Choose Excursion Types</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Match your interests to the right excursion category. Each guide recommends the best ports for that activity type.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {excursionTypes.map((type) => (
                <Link key={type.slug} href={`/excursion-types/${type.slug}`} className="card text-sm hover:border-caribbean-200">
                  <span className="font-semibold text-gray-900">{type.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-700 text-white font-bold">4</span>
              <h2 className="section-title text-2xl">Check Ship Schedules</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Multi-ship days mean crowded beaches and sold-out tours. Check which ships are in port on your cruise day.
            </p>
            <Link href="/ship-schedules" className="btn-primary">View Ship Schedules</Link>
          </div>

          {/* Step 5 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-700 text-white font-bold">5</span>
              <h2 className="section-title text-2xl">Review Cruise Line Tips</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Each cruise line has different Caribbean routes, booking systems, and excursion policies.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cruiseLines.map((line) => (
                <Link key={line.slug} href={`/cruise-lines/${line.slug}`} className="card text-sm hover:border-caribbean-200">
                  <span className="font-semibold text-gray-900">{line.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-12">
            <h2 className="section-title text-2xl mb-6">Planning Tips</h2>
            <div className="space-y-6">
              {cruiseTips.map((tip) => (
                <div key={tip.title} className="card">
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  <p className="mt-2 text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          <AuthorityHubLinks />
        </div>
      </section>
    </>
  );
}
