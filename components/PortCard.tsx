import Link from "next/link";
import type { Port } from "@/data/types";
import { getThemeStyle } from "@/lib/port-themes";

export function PortCard({ port }: { port: Port }) {
  const theme = getThemeStyle(port.imageTheme);

  return (
    <Link
      href={`/ports/${port.slug}`}
      className="group block overflow-hidden rounded-2xl border border-caribbean-100/80 bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div
        className={`relative h-32 bg-gradient-to-br sm:h-36 ${theme.gradient}`}
        role="img"
        aria-label={port.imageAlt}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-caribbean-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-xl font-bold text-white drop-shadow-sm group-hover:text-caribbean-50">
            {port.name}
          </h3>
          <p className="text-sm text-white/90">{port.country}</p>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-caribbean-800 backdrop-blur-sm">
          {port.region}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">{port.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {port.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-full border border-caribbean-100 bg-caribbean-50/80 px-2.5 py-0.5 text-xs font-medium text-caribbean-800"
            >
              {h}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs font-semibold text-caribbean-700 group-hover:underline">
          View port guide →
        </p>
      </div>
    </Link>
  );
}
