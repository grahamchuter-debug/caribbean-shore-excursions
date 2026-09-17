import type { ScheduleEntry } from "@/data/types";

export const SCHEDULE_YEARS = [2026, 2027, 2028] as const;

export type ScheduleYear = (typeof SCHEDULE_YEARS)[number];

export function isScheduleYearSlug(value: string): value is `${ScheduleYear}` {
  return value === "2026" || value === "2027" || value === "2028";
}

export function parseScheduleYear(value: string): ScheduleYear | null {
  const year = Number(value);
  return isValidScheduleYear(year) ? year : null;
}

export function yearHubPath(year: ScheduleYear): string {
  return `/ship-schedules/${year}`;
}

export function portHubPath(slug: string): string {
  return `/ship-schedules/${slug}`;
}

export function portYearPath(slug: string, year: ScheduleYear): string {
  return `/ship-schedules/${slug}/${year}`;
}

export function monthKeyToSlug(monthKey: string): string {
  const { year, month } = parseMonthKey(monthKey);
  return `${MONTH_SLUGS[month - 1]}-${year}`;
}

export function parseMonthSlug(value: string): string | null {
  const match = value.match(/^([a-z]+)-(\d{4})$/);
  if (!match) return null;
  const [, monthName, yearStr] = match;
  const monthIndex = MONTH_SLUGS.indexOf(monthName as MonthSlug);
  if (monthIndex === -1) return null;
  const year = Number(yearStr);
  if (!isValidScheduleYear(year)) return null;
  return getMonthKey(year, monthIndex + 1);
}

export function isMonthSlugParam(value: string): boolean {
  return parseMonthSlug(value) !== null;
}

export function portMonthPath(slug: string, monthKey: string): string {
  return `/ship-schedules/${slug}/${monthKeyToSlug(monthKey)}`;
}

export function getMonthName(monthKey: string): string {
  const { month } = parseMonthKey(monthKey);
  return MONTH_LABELS[month - 1];
}

export function getAdjacentVerifiedMonthKeys(
  monthKeys: string[],
  monthKey: string,
): { prev: string | null; next: string | null } {
  const index = monthKeys.indexOf(monthKey);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? monthKeys[index - 1] : null,
    next: index < monthKeys.length - 1 ? monthKeys[index + 1] : null,
  };
}

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

export const MONTH_SLUGS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export type MonthSlug = (typeof MONTH_SLUGS)[number];

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

export function isValidScheduleYear(year: number): year is (typeof SCHEDULE_YEARS)[number] {
  return (SCHEDULE_YEARS as readonly number[]).includes(year);
}

export function filterEntriesByYear(entries: ScheduleEntry[], year: number): ScheduleEntry[] {
  const prefix = `${year}-`;
  return entries.filter((e) => e.date.startsWith(prefix));
}

export function getMonthKeysForYear(year: number): string[] {
  return Array.from({ length: 12 }, (_, i) => getMonthKey(year, i + 1));
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

/** Extra minutes to reserve on tender ports when converting itinerary time → usable hours ashore. */
export const TENDER_ASHORE_BUFFER_MINUTES = {
  outboundQueue: 30,
  returnQueue: 60,
} as const;

function parseClockToMinutes(value: string | null | undefined): number | null {
  if (!value) return null;
  const m = String(value).trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh > 23 || mm > 59) return null;
  if (hh === 0 && mm === 0) return null; // treat placeholder midnight as unknown
  return hh * 60 + mm;
}

/**
 * Usable hours ashore from published itinerary arrival/departure.
 * Tender ports subtract outbound + return queue buffers so excursion windows stay realistic.
 */
export function usableHoursAshoreFromTimes(
  arrival: string | null | undefined,
  departure: string | null | undefined,
  options?: { tenderRequired?: boolean },
): number | null {
  const start = parseClockToMinutes(arrival);
  const end = parseClockToMinutes(departure);
  if (start == null || end == null) return null;
  let mins = end - start;
  if (mins <= 0) mins += 24 * 60;
  if (options?.tenderRequired) {
    mins -= TENDER_ASHORE_BUFFER_MINUTES.outboundQueue + TENDER_ASHORE_BUFFER_MINUTES.returnQueue;
  }
  if (mins <= 0) return 0;
  return Math.round((mins / 60) * 10) / 10;
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
      cruiseLine: "-",
      arrival: "-",
      departure: "-",
      timeInPort: "-",
      passengers: "-",
      isPlaceholder: true,
    },
  ];
}
