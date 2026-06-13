import type { MatchTier } from "@/lib/excursion-finder-engine";

interface MatchReasonsPanelProps {
  matchLabel: MatchTier;
  reasons: string[];
  className?: string;
}

export function MatchReasonsPanel({ matchLabel, reasons, className = "" }: MatchReasonsPanelProps) {
  if (reasons.length === 0) return null;

  return (
    <div
      className={`rounded-xl border border-caribbean-100 bg-caribbean-50/40 p-4 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-caribbean-800">
        Why this matches
      </p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{matchLabel} because:</p>
      <ul className="mt-3 space-y-2">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-caribbean-600" aria-hidden="true" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
