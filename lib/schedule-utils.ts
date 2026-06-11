import type { ScheduleEntry } from "@/data/types";

export const SCHEDULE_YEARS = [2026] as const;

export const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function getMonthKey(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}

export function parseMonthKey(key: string): { year: number; month: number } {
  const [year, month] = key.split("-").map(Number);
  return { year, month };
}

export function getEntryMonthKey(entry: ScheduleEntry): string {
  return entry.date.slice(0, 7);
}

export function filterEntriesByMonth(
  entries: ScheduleEntry[],
  monthKey: string
): ScheduleEntry[] {
  return entries.filter((e) => getEntryMonthKey(e) === monthKey);
}

export function getMonthsWithEntries(entries: ScheduleEntry[]): string[] {
  const months = new Set(entries.map(getEntryMonthKey));
  return [...months].sort();
}

export function getUniqueCruiseLines(entries: ScheduleEntry[]): string[] {
  return [...new Set(entries.map((e) => e.cruiseLine))].sort();
}

export function getAllMonthKeys(): string[] {
  const keys: string[] = [];
  for (const year of SCHEDULE_YEARS) {
    for (let month = 1; month <= 12; month++) {
      keys.push(getMonthKey(year, month));
    }
  }
  return keys;
}

export function formatMonthLabel(monthKey: string): string {
  const { year, month } = parseMonthKey(monthKey);
  return `${MONTH_LABELS[month - 1]} ${year}`;
}

export function getDisplayEntries(
  entries: ScheduleEntry[],
  monthKey: string,
  portName: string,
): ScheduleEntry[] {
  const filtered = filterEntriesByMonth(entries, monthKey);
  if (filtered.length > 0) return filtered;

  return [
    {
      date: formatMonthLabel(monthKey),
      ship: "Schedule data being updated",
      cruiseLine: "—",
      arrival: "—",
      departure: "—",
      timeInPort: "—",
      passengers: "—",
      notes: `Verified ${portName} ship calls for this month are being imported. Do not rely on unofficial lists — confirm arrival and departure times with your cruise line.`,
      isPlaceholder: true,
    },
  ];
}
