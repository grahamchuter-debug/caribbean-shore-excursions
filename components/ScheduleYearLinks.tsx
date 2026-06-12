import Link from "next/link";
import { SCHEDULE_YEARS } from "@/lib/schedule-utils";
import { getShipCallCountForPortYear } from "@/data/schedules";

export function ScheduleYearLinks({
  portSlug,
  portName,
  currentYear,
}: {
  portSlug: string;
  portName: string;
  currentYear?: number;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {SCHEDULE_YEARS.map((year) => {
        const shipCalls = getShipCallCountForPortYear(portSlug, year);
        const isCurrent = currentYear === year;

        return (
          <Link
            key={year}
            href={`/ship-schedules/${portSlug}/${year}`}
            className={`card-gradient group block ${
              isCurrent ? "border-caribbean-400 ring-2 ring-caribbean-200" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-caribbean-700">
                  {year} Schedule
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Monthly ship calls at {portName}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-caribbean-50 px-2.5 py-0.5 text-xs font-medium text-caribbean-700">
                {year}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {shipCalls > 0
                ? `${shipCalls} verified ship call${shipCalls !== 1 ? "s" : ""}`
                : "Monthly schedule, import in progress"}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-caribbean-700">
              View {year} schedule
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
