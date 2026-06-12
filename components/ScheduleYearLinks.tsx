import Link from "next/link";
import { SCHEDULE_YEARS } from "@/lib/schedule-utils";
import { getShipCallCountForPortYear } from "@/data/schedules";
import { portYearPath, yearHubPath } from "@/lib/schedule-utils";

export function ScheduleYearLinks({
  portSlug,
  portName,
  currentYear,
  prominent = false,
}: {
  portSlug: string;
  portName: string;
  currentYear?: number;
  prominent?: boolean;
}) {
  return (
    <div className="space-y-4">
      <div className={`grid gap-4 sm:grid-cols-2 ${prominent ? "lg:gap-6" : ""}`}>
        {SCHEDULE_YEARS.map((year) => {
          const shipCalls = getShipCallCountForPortYear(portSlug, year);
          const isCurrent = currentYear === year;

          return (
            <Link
              key={year}
              href={portYearPath(portSlug, year)}
              className={`group block rounded-2xl border-2 transition-colors ${
                prominent
                  ? isCurrent
                    ? "border-caribbean-500 bg-gradient-to-br from-caribbean-50 to-white p-8 ring-2 ring-caribbean-200"
                    : "border-caribbean-200 bg-white p-8 hover:border-caribbean-400"
                  : isCurrent
                    ? "card-gradient border-caribbean-400 ring-2 ring-caribbean-200"
                    : "card-gradient"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className={`font-display font-bold text-gray-900 group-hover:text-caribbean-700 ${
                      prominent ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    View {year} Schedule
                  </h3>
                  <p className={`mt-2 text-gray-600 ${prominent ? "text-base" : "text-sm"}`}>
                    Monthly ship calls at {portName}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-caribbean-700 px-3 py-1 text-xs font-semibold text-white">
                  {year}
                </span>
              </div>
              <p className={`mt-4 text-gray-600 ${prominent ? "text-sm" : "text-sm"}`}>
                {shipCalls > 0
                  ? `${shipCalls} verified ship call${shipCalls !== 1 ? "s" : ""}`
                  : "Monthly schedule, import in progress"}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-caribbean-700">
                Open {portName} {year} schedule
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          );
        })}
      </div>
      {!currentYear && (
        <p className="text-sm text-gray-500">
          Or browse all ports on the{" "}
          <Link href={yearHubPath(2026)} className="font-medium text-caribbean-700 hover:text-caribbean-800">
            2026 master hub
          </Link>{" "}
          and{" "}
          <Link href={yearHubPath(2027)} className="font-medium text-caribbean-700 hover:text-caribbean-800">
            2027 master hub
          </Link>
          .
        </p>
      )}
    </div>
  );
}
