import Link from "next/link";
import { popularCaribbeanRoutes } from "@/data/excursion-finder";
import { getPortBySlug } from "@/data/ports";

interface CaribbeanRoutePresetsProps {
  linkToFinder?: boolean;
}

export function CaribbeanRoutePresets({ linkToFinder = true }: CaribbeanRoutePresetsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {popularCaribbeanRoutes.map((route) => {
        const portNames = route.portSlugs
          .map((slug) => getPortBySlug(slug)?.name)
          .filter(Boolean)
          .join(", ");

        const inner = (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-caribbean-600">Cruise route</p>
            <h3 className="mt-2 font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700">
              {route.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{portNames}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {route.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-caribbean-50 px-2.5 py-1 text-xs font-medium text-caribbean-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
              {linkToFinder ? "Use in finder →" : "Open route →"}
            </span>
          </>
        );

        if (linkToFinder) {
          return (
            <Link
              key={route.id}
              href={`/caribbean-excursion-finder?route=${route.id}`}
              className="card-gradient group hover:border-caribbean-300"
            >
              {inner}
            </Link>
          );
        }

        return (
          <div key={route.id} className="card-gradient">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
