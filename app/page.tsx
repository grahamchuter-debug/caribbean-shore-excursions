import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPortBySlug } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { cruiseLines } from "@/data/cruise-lines";
import { cruiseTips } from "@/data/tips";
import { comparisons } from "@/data/comparisons";
import { schedulePorts } from "@/data/schedules";
import { featuredPortCards, HOMEPAGE_SCHEDULE_SLUGS, homepageFaqs } from "@/data/homepage";
import { regions } from "@/data/regions";
import { bestGuides } from "@/data/best-guides";
import { itineraryPlanners } from "@/data/itinerary-planners";
import { regionalCruisePlanners } from "@/data/regional-cruise-planners";
import { AuthorityPortCard } from "@/components/AuthorityPortCard";
import { SchedulePreviewCard } from "@/components/SchedulePreviewCard";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Shore Excursion Planner | Ports, Ship Schedules & Cruise Tours",
  description:
    "Compare Caribbean shore excursions, cruise ports, ship schedules, cruise lines and excursion types across the Caribbean. Plan better cruise days in St. Thomas, Cozumel, Aruba, Nassau, Roatán and more.",
  path: "/",
  keywords: [
    "Caribbean shore excursions",
    "Caribbean cruise ports",
    "ship schedules",
    "cruise planner",
    "excursion types",
  ],
});

export default function HomePage() {
  const featuredPorts = featuredPortCards
    .map((card) => {
      const port = getPortBySlug(card.slug);
      return port ? { port, ...card } : null;
    })
    .filter(Boolean) as Array<{
    port: NonNullable<ReturnType<typeof getPortBySlug>>;
    slug: string;
    description: string;
    bestFor: string;
  }>;

  const homepageSchedules = HOMEPAGE_SCHEDULE_SLUGS.map((slug) =>
    schedulePorts.find((p) => p.slug === slug)
  ).filter(Boolean);

  const breadcrumbs = [{ name: "Home", path: "/" }];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(homepageFaqs),
          travelGuideSchema({
            title: "Caribbean Shore Excursion Planner",
            description:
              "Compare Caribbean cruise ports, discover top-rated excursions, view ship schedules and find the best shore excursions for your cruise.",
            path: "/",
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-white py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-tropical-mango -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container-wide relative px-4 sm:px-6 lg:px-8">
          <p className="text-caribbean-100 font-medium mb-4 tracking-wide uppercase text-sm">
            The Caribbean Shore Excursion Planner
          </p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl max-w-4xl leading-tight">
            Caribbean Shore Excursion Planner
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-caribbean-100 sm:text-xl leading-relaxed">
            Compare Caribbean cruise ports, discover top-rated excursions, view ship schedules and find the best shore excursions for your cruise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ports"
              className="btn-primary bg-white text-caribbean-800 hover:bg-caribbean-50 hover:text-caribbean-900"
            >
              Explore Caribbean Ports
            </Link>
            <Link href="/ship-schedules" className="btn-secondary border-white text-white hover:bg-white/10">
              View Ship Schedules
            </Link>
            <Link
              href="/cruise-planner"
              className="btn-secondary border-white/60 text-white hover:bg-white/10"
            >
              Plan My Cruise Excursions
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Caribbean Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">All Caribbean Cruise Ports</h2>
              <p className="section-subtitle">
                Twelve authority port guides with excursion recommendations, related port links, and specialist local booking sites.
              </p>
            </div>
            <Link href="/ports" className="btn-secondary shrink-0">
              View All Ports
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPorts.map(({ port, description, bestFor }) => (
              <AuthorityPortCard key={port.slug} port={port} description={description} bestFor={bestFor} />
            ))}
          </div>
        </div>
      </section>

      {/* 2026 and 2027 Ship Schedules */}
      <section className="section-padding bg-tropical-sand/30">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">2026 and 2027 Caribbean Cruise Ship Schedules</h2>
              <p className="section-subtitle">
                See which ships are in port before you book excursions. Multi-ship days mean crowded beaches and sold-out tours.
              </p>
            </div>
            <Link href="/ship-schedules" className="btn-primary shrink-0">
              All Ship Schedules
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageSchedules.map(
              (port) => port && <SchedulePreviewCard key={port.slug} port={port} />
            )}
          </div>
        </div>
      </section>

      {/* Cruise Planner */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="section-title">Cruise Planner</h2>
              <p className="section-subtitle">
                Build your ideal Caribbean cruise itinerary. Compare ports, match excursions to your interests, and plan each port day before you sail.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Compare Eastern vs Western Caribbean routes",
                  "Match excursions to your travel style",
                  "Check ship schedules before booking tours",
                  "Get port-specific passenger tips",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/cruise-planner" className="btn-primary mt-8">
                Open Cruise Planner
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Port Guides", count: "12", href: "/ports" },
                { label: "Excursion Types", count: `${excursionTypes.length}`, href: "/excursion-types" },
                { label: "Cruise Lines", count: `${cruiseLines.length}`, href: "/cruise-lines" },
                { label: "Comparisons", count: `${comparisons.length}`, href: "/cruise-planner#compare" },
              ].map((stat) => (
                <Link key={stat.label} href={stat.href} className="card text-center hover:border-caribbean-200">
                  <div className="text-3xl font-bold text-caribbean-700">{stat.count}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare Caribbean Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Compare Caribbean Ports</h2>
          <p className="section-subtitle mb-10">
            Choosing between two Caribbean ports? Our head-to-head comparisons help you decide which destination fits your cruise style.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700 transition-colors">
                  {comp.portA} vs {comp.portB}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{comp.summary}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
                  Read comparison
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Excursion Types */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Excursion Types</h2>
              <p className="section-subtitle">
                From beach days to catamaran sails, find the right excursion category for your Caribbean port day.
              </p>
            </div>
            <Link href="/excursion-types" className="btn-secondary shrink-0">
              All Excursion Types
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {excursionTypes.map((type) => (
              <Link key={type.slug} href={`/excursion-types/${type.slug}`} className="card group hover:border-caribbean-200">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                  {type.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{type.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Line Guides */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Cruise Line Guides</h2>
              <p className="section-subtitle">
                Caribbean-specific planning advice for every major cruise line, routes, popular ports, and excursion booking tips.
              </p>
            </div>
            <Link href="/cruise-lines" className="btn-secondary shrink-0">
              All Cruise Lines
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cruiseLines.map((line) => (
              <Link key={line.slug} href={`/cruise-lines/${line.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                  {line.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{line.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Excursion Guides */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Best Caribbean Excursions</h2>
              <p className="section-subtitle">
                Authority-ranked excursion guides by type, beaches, snorkeling, families, couples, private tours, and more.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/best-shore-excursion-every-caribbean-port" className="btn-primary">
                Every Port Guide
              </Link>
              <Link href="/best-caribbean-shore-excursions" className="btn-secondary">
                All Best Guides
              </Link>
            </div>
          </div>
          <Link
            href="/best-shore-excursion-every-caribbean-port"
            className="card-gradient mb-6 block group border-2 border-caribbean-200"
          >
            <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
              Best Shore Excursion at Every Caribbean Port
            </h3>
            <p className="mt-2 text-gray-600">
              Master table covering all 12 ports, signature excursion, duration, activity level, and links to authority guides and local specialists.
            </p>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestGuides.map((guide) => (
              <Link key={guide.slug} href={`/${guide.slug}`} className="card group hover:border-caribbean-200">
                <h3 className="font-display text-base font-bold text-gray-900 group-hover:text-caribbean-700 leading-snug">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{guide.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Planners */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Caribbean Itinerary Planners</h2>
          <p className="section-subtitle mb-10">
            Plan by cruise route, Eastern, Western, and Southern Caribbean ports, excursions, and specialist links.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {itineraryPlanners.map((planner) => (
              <Link key={planner.slug} href={`/${planner.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                  {planner.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{planner.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Cruise Planners */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <h2 className="section-title">Regional Cruise Planners</h2>
          <p className="section-subtitle mb-10">
            ABC Islands, Virgin Islands, Bahamas, and Mexican Caribbean, port comparisons, beaches, private tours, and family picks.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regionalCruisePlanners.map((planner) => (
              <Link key={planner.slug} href={`/${planner.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                  {planner.title.replace(" Cruise Planner", "")}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{planner.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Caribbean Regions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Caribbean Cruise Regions</h2>
          <p className="section-subtitle mb-10">
            Plan by region, compare ports, excursion styles, and specialist local sites across the Eastern, Western, and Southern Caribbean.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link key={region.slug} href={`/${region.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
                  {region.title.replace(" Guide", "")}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{region.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Caribbean Cruise Tips */}
      <section className="section-padding bg-gradient-to-b from-caribbean-700 to-caribbean-800 text-white">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Caribbean Cruise Tips</h2>
          <p className="mt-3 max-w-2xl text-caribbean-100 text-lg">
            Expert advice to help you get the most from every Caribbean port day.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cruiseTips.map((tip) => (
              <div key={tip.title} className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/10">
                <h3 className="font-display text-lg font-bold">{tip.title}</h3>
                <p className="mt-2 text-sm text-caribbean-100 leading-relaxed">{tip.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage FAQs */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={homepageFaqs} title="Caribbean Shore Excursion Planning FAQs" />
        </div>
      </section>
    </>
  );
}
