import { getCruisePortNaming } from "@/data/cruise-port-naming";
import { formatMonthLabel } from "@/lib/schedule-utils";

export function formatDestinationWithDock(destinationName: string, slug: string): string {
  const naming = getCruisePortNaming(slug);
  if (!naming) return destinationName;
  return `${destinationName} (${naming.dockTown})`;
}

export function getPortGuideHeroTitle(slug: string, destinationName: string): string {
  return `${formatDestinationWithDock(destinationName, slug)} Shore Excursions & Cruise Port Guide`;
}

export function getScheduleHubHeroTitle(slug: string, destinationName: string): string {
  return `${formatDestinationWithDock(destinationName, slug)} Cruise Ship Schedule`;
}

export function getScheduleYearHeroTitle(
  slug: string,
  destinationName: string,
  year: number,
): string {
  return `${formatDestinationWithDock(destinationName, slug)} Cruise Ship Schedule ${year}`;
}

export function getScheduleMonthHeroTitle(
  slug: string,
  destinationName: string,
  monthKey: string,
): string {
  return `${formatDestinationWithDock(destinationName, slug)} Cruise Ship Schedule, ${formatMonthLabel(monthKey)}`;
}

export function getPortGuideIntro(slug: string): string | undefined {
  return getCruisePortNaming(slug)?.portGuideIntro;
}

export function getScheduleIntro(slug: string): string | undefined {
  return getCruisePortNaming(slug)?.scheduleIntro;
}

export function augmentMetadataTitle(
  baseTitle: string,
  destinationName: string,
  slug: string,
): string {
  const naming = getCruisePortNaming(slug);
  if (!naming || baseTitle.includes(`(${naming.dockTown})`)) return baseTitle;
  if (baseTitle.startsWith(destinationName)) {
    return baseTitle.replace(destinationName, `${destinationName} (${naming.dockTown})`);
  }
  return `${destinationName} (${naming.dockTown}), ${baseTitle}`;
}

export function augmentMetadataDescription(
  baseDescription: string,
  slug: string,
  context: "port" | "schedule",
): string {
  const naming = getCruisePortNaming(slug);
  if (!naming) return baseDescription;

  const lead = context === "port" ? naming.portGuideIntro : naming.scheduleIntro;
  const firstSentence = lead.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!firstSentence || baseDescription.includes(firstSentence.slice(0, 50))) {
    return baseDescription;
  }
  return `${firstSentence} ${baseDescription}`;
}
