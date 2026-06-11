"use client";

import { useMemo, useState } from "react";
import type { ScheduleEntry } from "@/data/types";
import { ScheduleTable } from "@/components/ScheduleTable";
import {
  formatMonthLabel,
  getAllMonthKeys,
  getMonthsWithEntries,
  getDisplayEntries,
  getUniqueCruiseLines,
} from "@/lib/schedule-utils";

export function ScheduleHub({
  entries,
  portName,
  scheduleOverview,
  referenceScheduleUrl,
}: {
  entries: ScheduleEntry[];
  portName: string;
  scheduleOverview?: string;
  referenceScheduleUrl?: string;
}) {
  const monthsWithData = useMemo(() => getMonthsWithEntries(entries), [entries]);
  const allMonths = useMemo(() => getAllMonthKeys(), []);
  const cruiseLines = useMemo(() => getUniqueCruiseLines(entries), [entries]);

  const defaultMonth = monthsWithData[0] ?? allMonths[0];
  const [activeMonth, setActiveMonth] = useState(defaultMonth);

  const filtered = useMemo(
    () => getDisplayEntries(entries, activeMonth, portName),
    [entries, activeMonth, portName],
  );

  return (
    <div className="space-y-8">
      {scheduleOverview && (
        <section>
          <h2 className="section-title text-2xl sm:text-3xl mb-4">Schedule Overview</h2>
          <p className="text-gray-700 leading-relaxed">{scheduleOverview}</p>
        </section>
      )}

      {cruiseLines.length > 0 && (
        <section>
          <h2 className="section-title text-2xl sm:text-3xl mb-4">Cruise Lines Visiting</h2>
          <div className="flex flex-wrap gap-2">
            {cruiseLines.map((line) => (
              <span
                key={line}
                className="rounded-full bg-caribbean-100 px-3 py-1 text-sm font-medium text-caribbean-800"
              >
                {line}
              </span>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="section-title text-2xl sm:text-3xl mb-4">2026 Monthly Schedule</h2>
        <p className="text-sm text-gray-600 mb-4">
          Select a month to view scheduled ship calls. Tables are structured for verified data import
          with columns for date, ship, cruise line, arrival, departure, time in port, passenger
          capacity, and notes.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {allMonths.map((monthKey) => {
            const hasData = monthsWithData.includes(monthKey);
            const isActive = activeMonth === monthKey;
            return (
              <button
                key={monthKey}
                type="button"
                onClick={() => setActiveMonth(monthKey)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-caribbean-700 text-white"
                    : hasData
                      ? "bg-caribbean-50 text-caribbean-700 hover:bg-caribbean-100"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
                aria-pressed={isActive}
              >
                {formatMonthLabel(monthKey)}
              </button>
            );
          })}
        </div>
        <h3 className="font-semibold text-gray-900 mb-3">
          {formatMonthLabel(activeMonth)} — {portName}
        </h3>
        <ScheduleTable entries={filtered} portName={portName} />
        {referenceScheduleUrl && (
          <p className="mt-4 text-xs text-gray-500">
            Reference source for schedule imports:{" "}
            <a
              href={referenceScheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caribbean-700 hover:underline"
            >
              CruiseTimetables.com port calendar
            </a>
            . We publish verified rows only — months without data show a placeholder until import is
            complete.
          </p>
        )}
      </section>
    </div>
  );
}
