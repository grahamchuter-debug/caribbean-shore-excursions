import Link from "next/link";
import { regions } from "@/data/regions";

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
