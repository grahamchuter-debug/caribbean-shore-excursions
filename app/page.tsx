import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPortBySlug } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { cruiseLines } from "@/data/cruise-lines";
import { cruiseTips } from "@/data/tips";
import { comparisons } from "@/data/comparisons";
import { getPortGuideCount } from "@/data/content-inventory";
import { schedulePorts } from "@/data/schedules";
import { featuredPortCards, HOMEPAGE_SCHEDULE_SLUGS, getHomepageFaqs } from "@/data/homepage";
import { bestGuides } from "@/data/best-guides";
import { getFeaturedBestCaribbeanGuides, bestCaribbeanGuidesHub } from "@/data/best-caribbean-guides-hub";
import { itineraryPlanners } from "@/data/itinerary-planners";
import { regionalCruisePlanners } from "@/data/regional-cruise-planners";
import { AuthorityPortCard } from "@/components/AuthorityPortCard";
import { SchedulePreviewCard } from "@/components/SchedulePreviewCard";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { CruisePlannerStatsGrid } from "@/components/CruisePlannerStatsGrid";
import { CaribbeanExcursionFinder } from "@/components/CaribbeanExcursionFinder";
import { CaribbeanRoutePresets } from "@/components/CaribbeanRoutePresets";
import { ExploreByRegion } from "@/components/ExploreByRegion";
import { HeroBackground } from "@/components/HeroBackground";
import { PortSearch } from "@/components/PortSearch";
import { FindMyCruiseShip } from "@/components/FindMyCruiseShip";
import { TrustBadgeStrip } from "@/components/TrustBadge";
import { HomeActionCard } from "@/components/HomeActionCard";
import { NavCardIcon, excursionTypeNavIcon } from "@/components/NavCardIcon";
import { NavCardCta } from "@/components/NavCardCta";
import { getHomepageNavActions } from "@/data/homepage-nav";

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

  const homepageFaqs = getHomepageFaqs();
  const featuredBestGuides = getFeaturedBestCaribbeanGuides();
  const homepageNavActions = getHomepageNavActions();
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

      {/* Hero — compact above-the-fold: heading → search → trust */}
      <section className="home-hero">
        <HeroBackground />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-caribbean-100 drop-shadow-sm">
            Caribbean cruise planning authority
          </p>
          <h1 className="home-hero-heading">
            Caribbean Shore Excursion Planner
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-snug text-white/90 sm:text-[1.0625rem] drop-shadow-sm">
            Compare Caribbean cruise ports, discover curated shore excursions, view ship schedules, and plan every port day with confidence.
          </p>
          <div className="mt-4 max-w-2xl">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-caribbean-100/90">
              Start with your port
            </p>
            <PortSearch variant="home" />
          </div>
          <div className="mt-3">
            <TrustBadgeStrip variant="dark" />
          </div>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <div className="hero-scroll-cue-fade" />
          <span className="hero-scroll-cue-label">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">More below</span>
            <svg
              className="hero-scroll-cue-icon h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </section>

      {/* Discovery cards — secondary; sits below hero so the next section peeks above the fold */}
      <section className="hero-discovery-strip">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-caribbean-700/80">
            Or explore by topic
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {homepageNavActions.map((action) => (
              <HomeActionCard
                key={action.href}
                href={action.href}
                category={action.category}
                title={action.title}
                description={action.description}
                icon={action.icon}
                actionLabel={action.actionLabel}
                variant="hero"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Caribbean Excursion Finder */}
      <section className="home-hero-next-peek section-padding bg-white border-b border-caribbean-100">
        <div className="container-wide max-w-6xl">
          <div className="mb-8 text-center sm:text-left">
            <p className="section-eyebrow">
              Personalised shore excursion matching
            </p>
            <h2 className="section-title mt-2">Caribbean Excursion Finder™</h2>
            <p className="section-subtitle mx-auto sm:mx-0">
              Match your ports, traveller style and time ashore to shore excursions with Caribbean Cruise Match scores
              and return-to-ship confidence.
            </p>
          </div>
          <CaribbeanExcursionFinder variant="home" />
        </div>
      </section>

      {/* Popular Caribbean Routes */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <h2 className="section-title">Popular Caribbean Cruise Routes</h2>
          <p className="section-subtitle mb-8">
            Start with a proven itinerary, then refine excursion picks for your ship and port times.
          </p>
          <CaribbeanRoutePresets />
        </div>
      </section>

      {/* Caribbean Cruise Map / Explore by Region */}
      <section className="section-padding bg-white border-b border-caribbean-100">
        <ExploreByRegion />
      </section>

      {/* Popular Caribbean Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">All Caribbean Cruise Ports</h2>
              <p className="section-subtitle">
                {getPortGuideCount()} authority port guides with excursion recommendations, related port links, and specialist local booking sites.
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
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/ship-schedules/2026" className="btn-primary">
                2026 Schedules
              </Link>
              <Link href="/ship-schedules/2027" className="btn-primary">
                2027 Schedules
              </Link>
              <Link href="/ship-schedules" className="btn-secondary">
                All Ship Schedules
              </Link>
            </div>
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
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/caribbean-excursion-finder" className="btn-primary">
                  Open Excursion Finder
                </Link>
                <Link href="/cruise-day-plan" className="btn-primary">
                  Cruise Day Plan PDF
                </Link>
                <Link href="/cruise-planner" className="btn-secondary">
                  Cruise Planner Hub
                </Link>
              </div>
            </div>
            <CruisePlannerStatsGrid />
          </div>
        </div>
      </section>

      <FindMyCruiseShip />

      {/* Compare Caribbean Ports */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="section-title">Compare Caribbean Ports</h2>
          <p className="section-subtitle mb-10">
            Choosing between two Caribbean ports? Our head-to-head comparisons help you decide which destination fits your cruise style.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon="compare" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-caribbean-800">
                      {comp.portA} vs {comp.portB}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{comp.summary}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">Read comparison</NavCardCta>
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
              <Link key={type.slug} href={`/excursion-types/${type.slug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon={excursionTypeNavIcon(type.slug)} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-caribbean-800">
                      {type.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{type.tagline}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">Explore excursion type</NavCardCta>
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
              <Link key={line.slug} href={`/${line.pageSlug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon="cruise-line" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-caribbean-800">
                      {line.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{line.tagline}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">View cruise line guide</NavCardCta>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Caribbean Guides */}
      <section className="section-padding bg-caribbean-50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">{bestCaribbeanGuidesHub.title}</h2>
              <p className="section-subtitle">
                Ranked port guides for beaches, snorkelling, families, first-time cruisers, and top 2027 cruise ports.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href={`/${bestCaribbeanGuidesHub.slug}`} className="btn-primary">
                Guides Hub
              </Link>
              <Link href="/best-shore-excursion-every-caribbean-port" className="btn-secondary">
                Every Port Table
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBestGuides.map((guide, index) => (
              <Link key={guide.slug} href={`/${guide.slug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon="guide" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-caribbean-600">Guide {index + 1}</p>
                    <h3 className="mt-1 font-display text-base font-bold text-gray-900 transition-colors group-hover:text-caribbean-800 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">{guide.heroSubtitle}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">Read guide</NavCardCta>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            More ranked guides:{" "}
            {bestGuides
              .filter((g) => !featuredBestGuides.some((f) => f.slug === g.slug))
              .slice(0, 4)
              .map((guide, i, arr) => (
                <span key={guide.slug}>
                  <Link href={`/${guide.slug}`} className="font-medium text-caribbean-700 hover:underline">
                    {guide.title}
                  </Link>
                  {i < arr.length - 1 ? " · " : ""}
                </span>
              ))}
          </p>
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
              <Link key={planner.slug} href={`/${planner.slug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon="planner" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-caribbean-800">
                      {planner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{planner.heroSubtitle}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">Open planner</NavCardCta>
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
              <Link key={planner.slug} href={`/${planner.slug}`} className="nav-card group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <NavCardIcon icon="planner" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-caribbean-800">
                      {planner.title.replace(" Cruise Planner", "")}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{planner.heroSubtitle}</p>
                  </div>
                </div>
                <NavCardCta className="pt-4">Open regional planner</NavCardCta>
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
