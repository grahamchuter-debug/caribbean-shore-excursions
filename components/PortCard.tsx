import Link from "next/link";
import type { Port } from "@/data/types";

export function PortCard({ port }: { port: Port }) {
  return (
    <Link href={`/ports/${port.slug}`} className="card-gradient group block">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700 transition-colors">
            {port.name}
          </h3>
          <p className="text-sm text-gray-500">{port.country}</p>
        </div>
        <span className="shrink-0 rounded-full bg-caribbean-100 px-2.5 py-0.5 text-xs font-medium text-caribbean-700">
          {port.region}
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-600 line-clamp-2">{port.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {port.highlights.slice(0, 3).map((h) => (
          <span
            key={h}
            className="rounded-md bg-caribbean-50 px-2 py-0.5 text-xs text-caribbean-700"
          >
            {h}
          </span>
        ))}
      </div>
    </Link>
  );
}
