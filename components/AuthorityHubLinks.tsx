import Link from "next/link";
import { regions } from "@/data/regions";
import { bestGuides } from "@/data/best-guides";
import { itineraryPlanners } from "@/data/itinerary-planners";
import { regionalCruisePlanners } from "@/data/regional-cruise-planners";
import { comparisons } from "@/data/comparisons";
import { cruiseLines } from "@/data/cruise-lines";

const hubLinks = [
  { href: "/", label: "Homepage" },
  { href: "/ports", label: "All Ports" },
  { href: "/ship-schedules", label: "Ship Schedules" },
  { href: "/cruise-planner", label: "Cruise Planner" },
  { href: "/cruise-lines", label: "Cruise Lines" },
  { href: "/excursion-types", label: "Excursion Types" },
] as const;

export function AuthorityHubLinks({
  current,
  portSlug,
}: {
  current?: "ports" | "schedules" | "regions" | "home";
  portSlug?: string;
}) {
  return (
    <section className="rounded-xl border border-caribbean-100 bg-caribbean-50/50 p-6">
      <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
        Caribbean Authority Hub
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {hubLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-caribbean-700 border border-caribbean-100 hover:border-caribbean-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mb-4">
        <Link
          href="/best-shore-excursion-every-caribbean-port"
          className="block rounded-lg bg-caribbean-700 text-white px-4 py-3 text-sm font-semibold hover:bg-caribbean-800 mb-3"
        >
          Best excursion at every Caribbean port →
        </Link>
      </div>

      <div className="mb-4">
        <span className="text-xs text-gray-500 w-full mb-2 block">Best excursion guides</span>
        <div className="flex flex-wrap gap-2">
          {bestGuides.slice(0, 4).map((guide) => (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {guide.title.replace("Best Caribbean ", "")}
            </Link>
          ))}
          <Link
            href="/best-caribbean-shore-excursions"
            className="rounded-full bg-caribbean-100 px-3 py-1.5 text-xs font-medium text-caribbean-800"
          >
            All best guides
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-gray-500 w-full mb-2 block">Cruise line shore excursion guides</span>
        <div className="flex flex-wrap gap-2">
          {cruiseLines.map((line) => (
            <Link
              key={line.pageSlug}
              href={`/${line.pageSlug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {line.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-gray-500 w-full mb-2 block">Itinerary planners</span>
        <div className="flex flex-wrap gap-2">
          {itineraryPlanners.map((planner) => (
            <Link
              key={planner.slug}
              href={`/${planner.slug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {planner.title.replace(" Planner", "")}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-gray-500 w-full mb-2 block">Regional cruise planners</span>
        <div className="flex flex-wrap gap-2">
          {regionalCruisePlanners.map((planner) => (
            <Link
              key={planner.slug}
              href={`/${planner.slug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {planner.title.replace(" Cruise Planner", "")}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-gray-500 w-full mb-2 block">Port comparisons</span>
        <div className="flex flex-wrap gap-2">
          {comparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {comp.portA} vs {comp.portB}
            </Link>
          ))}
        </div>
      </div>

      {current !== "regions" && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-gray-500 w-full mb-1">Region guides</span>
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
            >
              {region.title.replace(" Guide", "")}
            </Link>
          ))}
        </div>
      )}
      {portSlug && (
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href={`/ports/${portSlug}`} className="btn-secondary text-xs">
            Port Authority Guide
          </Link>
          <Link href={`/ship-schedules/${portSlug}`} className="btn-secondary text-xs">
            Ship Schedule
          </Link>
        </div>
      )}
    </section>
  );
}
