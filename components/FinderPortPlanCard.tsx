import Link from "next/link";
import type { PortExcursionPlan } from "@/lib/excursion-finder-engine";
import { getMatchTierStyles } from "@/lib/excursion-finder-engine";
import { getPortBySlug } from "@/data/ports";
import { getThemeStyle, excursionTypeImageTheme } from "@/lib/port-themes";
import { CruiseConfidenceBadge } from "@/components/CruiseConfidenceBadge";
import { CruiseConfidenceCard } from "@/components/CruiseConfidenceCard";
import { CruiseConfidenceLabels } from "@/components/CruiseConfidenceLabels";
import { ExcursionCardCTAs } from "@/components/ExcursionCardCTAs";
import { MatchReasonsPanel } from "@/components/MatchReasonsPanel";

interface FinderPortPlanCardProps {
  plan: PortExcursionPlan;
  dayPlanActions?: React.ReactNode;
}

export function FinderPortPlanCard({ plan, dayPlanActions }: FinderPortPlanCardProps) {
  const port = getPortBySlug(plan.portSlug);
  const portTheme = getThemeStyle(port?.imageTheme ?? "beach");
  const excursionTheme = getThemeStyle(excursionTypeImageTheme(plan.recommended.type));
  const matchStyles = getMatchTierStyles(plan.portMatchLabel);

  return (
    <article className="overflow-hidden rounded-2xl border border-caribbean-100/90 bg-white shadow-lg">
      <div className={`relative h-36 bg-gradient-to-br sm:h-40 ${portTheme.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-caribbean-950/80 via-caribbean-900/35 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{plan.region}</p>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{plan.portName}</h3>
              <p className="mt-1 max-w-xl text-sm text-white/90">{plan.bestFor}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${matchStyles}`}>
                {plan.portMatchLabel}
              </span>
              <CruiseConfidenceBadge level={plan.cruiseConfidence.level} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="border-b border-gray-100 p-5 sm:p-6 lg:col-span-3 lg:border-b-0 lg:border-r">
          <div
            className={`mb-4 h-24 rounded-xl bg-gradient-to-br sm:h-28 ${excursionTheme.gradient}`}
            role="img"
            aria-label={`${plan.recommended.name} excursion`}
          >
            <div className="flex h-full flex-col justify-end rounded-xl bg-gradient-to-t from-black/45 to-transparent p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                Recommended excursion
              </p>
              <p className="font-display text-lg font-bold text-white">{plan.recommended.name}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-700">{plan.recommended.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-caribbean-200 bg-caribbean-50 px-3 py-1 text-xs font-semibold text-caribbean-800">
              {plan.recommended.duration}
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              {plan.recommended.type}
            </span>
          </div>

          <CruiseConfidenceLabels labels={plan.supportingLabels} className="mt-4" compact />

          <MatchReasonsPanel
            matchLabel={plan.portMatchLabel}
            reasons={plan.matchReasons}
            className="mt-5"
          />

          {plan.alternate && (
            <p className="mt-4 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3 text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Alternate pick:</span> {plan.alternate.name}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {plan.bestForTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-caribbean-100 bg-white px-2.5 py-1 text-xs font-medium text-caribbean-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <ExcursionCardCTAs
            portSlug={plan.portSlug}
            excursionType={plan.recommended.type}
            text={`${plan.recommended.name} ${plan.recommended.description}`}
            className="mt-5"
          />
        </div>

        <div className="space-y-4 bg-gradient-to-b from-caribbean-50/40 to-white p-5 sm:p-6 lg:col-span-2">
          <CruiseConfidenceCard assessment={plan.cruiseConfidence} showDisclaimer={false} />

          <div className="rounded-xl border border-white/80 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-caribbean-700">
              Port day outline
            </p>
            <ol className="relative mt-4 space-y-4 border-l border-caribbean-200 pl-4">
              {plan.dayPlan.map((step) => (
                <li key={step} className="relative text-sm leading-relaxed text-gray-700">
                  <span className="absolute -left-[1.35rem] top-1.5 h-2 w-2 rounded-full bg-caribbean-600 ring-2 ring-white" />
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <p className="text-xs leading-relaxed text-gray-500">
            Planning guidance only — confirm all-aboard times with your cruise line and excursion operator.
          </p>

          <div className="flex flex-wrap gap-2">
            <Link href={plan.portGuideHref} className="btn-secondary text-xs">
              Port guide
            </Link>
            {dayPlanActions}
          </div>
        </div>
      </div>
    </article>
  );
}
