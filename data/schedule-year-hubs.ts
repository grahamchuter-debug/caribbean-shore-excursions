import type { ScheduleYear } from "../lib/schedule-utils";
import { getSchedulePortCount } from "./content-inventory";

export interface ScheduleYearHubContent {
  year: ScheduleYear;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  topPortsIntro: string;
}

export const scheduleYearHubContent: Record<ScheduleYear, ScheduleYearHubContent> = {
  2026: {
    year: 2026,
    title: "2026 Caribbean Cruise Ship Schedules",
    metaDescription:
      "2026 Caribbean cruise ship schedule and port schedule hub for Cozumel, Nassau, St. Thomas, Aruba, Grand Cayman, Roatán, St. Maarten, Puerto Plata, Costa Maya, Tortola, and more. Verified arrival and departure times by port and month.",
    heroSubtitle:
      "Master 2026 cruise schedule hub: browse every Caribbean port, compare verified ship calls, and plan shore excursions around published arrival and departure times.",
    intro:
      "This is the master 2026 cruise ship schedule hub for the Caribbean's busiest ports. Select a port below to open its dedicated 2026 monthly table with ship names, cruise lines, arrival and departure times, and time in port. Every hub port now has verified import data; months still being refreshed show a clear placeholder rather than unverified calls.",
    topPortsIntro:
      "Ranked by verified 2026 ship calls. Use this table to spot the busiest terminals before booking beaches, snorkel tours, or private drivers. Each port links to passenger tips, recommended excursions, and the 2027 schedule where available.",
  },
  2027: {
    year: 2027,
    title: "2027 Caribbean Cruise Ship Schedules",
    metaDescription:
      "2027 Caribbean cruise ship schedule and port schedule hub for Cozumel, Nassau, St. Thomas, Aruba, Grand Cayman, Roatán, St. Maarten, Puerto Plata, Costa Maya, Tortola, and more. Verified 2027 arrival and departure times by port and month.",
    heroSubtitle:
      "Master 2027 cruise schedule hub: browse every Caribbean port, compare verified ship calls, and plan shore excursions around published arrival and departure times.",
    intro:
      "This is the master 2027 cruise ship schedule hub for the Caribbean's busiest ports. Select a port below to open its dedicated 2027 monthly table with ship names, cruise lines, arrival and departure times, and time in port. Verified rows are imported from monthly source data across all hub ports.",
    topPortsIntro:
      "Ranked by verified 2027 ship calls. Nassau and Cozumel lead call volumes; use this hub to compare busy pier days before booking excursions. Each port page includes cruise passenger information, what to do ashore, and links to local specialist operators.",
  },
};

export function getScheduleYearHubContent(year: ScheduleYear): ScheduleYearHubContent {
  const content = scheduleYearHubContent[year];
  const schedulePortCount = getSchedulePortCount();

  return {
    ...content,
    intro: content.intro.replace(
      "top cruise ports",
      `top ${schedulePortCount} cruise ports`,
    ),
  };
}
