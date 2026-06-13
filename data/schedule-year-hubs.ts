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
      "2026 Caribbean cruise ship schedules for St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, St. Maarten, Puerto Plata, Costa Maya, and Ocho Rios. Monthly arrival and departure times for every top port.",
    heroSubtitle:
      "Master hub for 2026 Caribbean cruise ship schedules. Browse every top port and plan shore excursions around published arrival and departure times.",
    intro:
      "This is the master 2026 schedule hub for the Caribbean's top cruise ports. Select a port below to open its dedicated 2026 monthly table with ship names, cruise lines, arrival and departure times, and time in port. Verified rows are imported from monthly source data; months still awaiting import show a clear placeholder.",
    topPortsIntro:
      "Ports with verified 2026 imports appear first. Additional port schedules will rank here as CSV imports are completed.",
  },
  2027: {
    year: 2027,
    title: "2027 Caribbean Cruise Ship Schedules",
    metaDescription:
      "2027 Caribbean cruise ship schedules for St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, St. Maarten, Puerto Plata, Costa Maya, and Ocho Rios. Monthly arrival and departure times for every top port.",
    heroSubtitle:
      "Master hub for 2027 Caribbean cruise ship schedules. Browse every top port and plan shore excursions around published arrival and departure times.",
    intro:
      "This is the master 2027 schedule hub for the Caribbean's top cruise ports. Select a port below to open its dedicated 2027 monthly table with ship names, cruise lines, arrival and departure times, and time in port. St. Thomas and Ocho Rios currently have verified 2027 data; other ports update as imports are added.",
    topPortsIntro:
      "Ranked by verified 2027 ship calls where import data is available. Use this hub to spot the busiest terminals before booking excursions.",
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
