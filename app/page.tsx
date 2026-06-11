import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ports } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { cruiseLines } from "@/data/cruise-lines";
import { cruiseTips } from "@/data/tips";
import { comparisons } from "@/data/comparisons";
import { PortCard } from "@/components/PortCard";

export const metadata = buildMetadata({
  title: "Plan Better Caribbean Shore Excursions",
  description:
    "Compare Caribbean cruise ports, discover top-rated shore excursions, and build the perfect cruise itinerary. Your independent Caribbean cruise planning authority.",
  path: "/",
  keywords: ["Caribbean shore excursions", "cruise planning", "port guides"],
});

export default function HomePage() {
  const popularPorts = ports.slice(0, 6);
  const featuredExcursions = ports.flatMap((p) =>
    p.bestExcursions.slice(0, 1).map((e) => ({ ...e, port: p.name, portSlug: p.slug }))
  ).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-white py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-tropical-mango -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container-wide relative px-4 sm:px-6 lg:px-8">
          <p className="text-caribbean-100 font-medium mb-4 tracking-wide uppercase text-sm">
            Caribbean Cruise Planning Authority
          </p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl max-w-4xl leading-tight">
            Plan Better Caribbean Shore Excursions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-caribbean-100 sm:text-xl leading-relaxed">
            Compare Caribbean cruise ports, discover top-rated excursions and build the perfect cruise itinerary.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/cruise-planner" className="btn-primary bg-white text-caribbean-800 hover:bg-caribbean-50 hover:text-caribbean-900">
              Start Planning
            </Link>
            <Link href="/ports" className="btn-secondary border-white text-white hover:bg-white/10">
              Explore Ports
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Caribbean Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Popular Caribbean Ports</h2>
              <p className="section-subtitle">
                In-depth guides to the Caribbean&apos;s most visited cruise ports with excursion recommendations and local tips.
              </p>
            </div>
            <Link href="/ports" className="btn-secondary shrink-0">View All Ports</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularPorts.map((port) => (
              <PortCard key={port.slug} port={port} />
            ))}
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
                {["Compare Eastern vs Western Caribbean routes", "Match excursions to your travel style", "Check ship schedules before booking tours", "Get port-specific passenger tips"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/cruise-planner" className="btn-primary mt-8">Open Cruise Planner</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Port Guides", count: `${ports.length}+`, href: "/ports" },
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

      {/* Compare Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Compare Ports</h2>
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

      {/* Ship Schedules */}
      <section className="section-padding bg-tropical-sand/30">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="section-title">Ship Schedules</h2>
              <p className="section-subtitle">
                Know which ships are in port on your cruise day. Multi-ship days mean crowded beaches and sold-out excursions — check schedules before you book tours.
              </p>
              <Link href="/ship-schedules" className="btn-primary mt-6">View Ship Schedules</Link>
            </div>
            <div className="card p-0 overflow-hidden">
              <div className="bg-caribbean-700 text-white px-4 py-3 text-sm font-semibold">
                St. Thomas — January 15, 2026
              </div>
              <div className="divide-y divide-gray-100">
                {["Symphony of the Seas — Royal Caribbean", "Carnival Horizon — Carnival", "Norwegian Escape — Norwegian"].map((ship) => (
                  <div key={ship} className="px-4 py-3 text-sm text-gray-700">{ship}</div>
                ))}
              </div>
              <div className="bg-gray-50 px-4 py-2 text-xs text-gray-400">3 ships in port — expect crowds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Excursion Types */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Excursion Types</h2>
          <p className="section-subtitle mb-10">
            From beach days to adventure tours, find the right excursion category for your Caribbean port day.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {excursionTypes.map((type) => (
              <Link key={type.slug} href={`/excursion-types/${type.slug}`} className="card group hover:border-caribbean-200">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">{type.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{type.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Line Guides */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <h2 className="section-title">Cruise Line Guides</h2>
          <p className="section-subtitle mb-10">
            Caribbean-specific planning advice for every major cruise line — routes, popular ports, and excursion booking tips.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cruiseLines.map((line) => (
              <Link key={line.slug} href={`/cruise-lines/${line.slug}`} className="card-gradient group">
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">{line.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{line.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shore Excursions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Featured Shore Excursions</h2>
          <p className="section-subtitle mb-10">
            Top-rated excursions across the Caribbean, curated from our port specialist network.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExcursions.map((exc) => (
              <Link key={`${exc.portSlug}-${exc.name}`} href={`/ports/${exc.portSlug}`} className="card group">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-caribbean-700 bg-caribbean-50 px-2 py-0.5 rounded">{exc.port}</span>
                  {exc.rating && (
                    <span className="text-xs text-tropical-mango font-semibold">★ {exc.rating}</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-caribbean-700">{exc.name}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{exc.description}</p>
                <div className="mt-3 flex gap-3 text-xs text-gray-500">
                  <span>{exc.duration}</span>
                  <span>·</span>
                  <span>{exc.type}</span>
                </div>
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
    </>
  );
}
