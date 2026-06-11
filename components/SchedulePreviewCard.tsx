import Link from "next/link";
import type { ShipSchedulePort } from "@/data/types";
import { getScheduleForPort } from "@/data/schedules";
export function SchedulePreviewCard({ port }: { port: ShipSchedulePort }) {
  const entries = getScheduleForPort(port.slug);
  const shipCount = entries.length;
  const href = `/ship-schedules/${port.slug}`;

  return (
    <Link href={href} className="card group hover:border-caribbean-200 block">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-caribbean-700 transition-colors">
            {port.name}
          </h3>
          <p className="text-sm text-gray-500">{port.country}</p>
        </div>
        <span className="shrink-0 rounded-full bg-caribbean-50 px-2.5 py-0.5 text-xs font-medium text-caribbean-700">
          {port.years ?? "2026–2027"}
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-600 line-clamp-2">{port.description}</p>
      {shipCount > 0 && (
        <p className="mt-3 text-xs text-gray-500">
          Sample schedule: {shipCount} upcoming ship{shipCount !== 1 ? "s" : ""} listed
        </p>
      )}
      <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
        View {port.name} schedule
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
