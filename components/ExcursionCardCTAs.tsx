import Link from "next/link";
import { getBestScheduleUrl } from "@/lib/schedule-cta-url";
import {
  getSpecialistExcursionUrl,
  type SpecialistExcursionUrlInput,
} from "@/lib/specialist-links";

export interface ExcursionCardCTAsProps extends SpecialistExcursionUrlInput {
  portSlug: string;
  className?: string;
}

export function ExcursionCardCTAs({
  portSlug,
  excursionTypeSlug,
  excursionType,
  sectionHint,
  guideHref,
  text,
  className,
}: ExcursionCardCTAsProps) {
  const specialistHref = getSpecialistExcursionUrl(portSlug, {
    excursionTypeSlug,
    excursionType,
    sectionHint,
    guideHref,
    text,
  });
  const scheduleCta = getBestScheduleUrl({ portSlug });

  return (
    <div className={`flex flex-wrap gap-2 ${className ?? "mt-4"}`}>
      <a
        href={specialistHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-xs"
      >
        View Excursion Options
      </a>
      <Link href={`/ports/${portSlug}`} className="btn-secondary text-xs">
        View Port Guide
      </Link>
      {scheduleCta && (
        <Link href={scheduleCta.href} className="btn-secondary text-xs">
          Check Ship Schedule
        </Link>
      )}
      {scheduleCta?.fallbackNote && (
        <p className="w-full text-xs text-gray-500">{scheduleCta.fallbackNote}</p>
      )}
    </div>
  );
}
