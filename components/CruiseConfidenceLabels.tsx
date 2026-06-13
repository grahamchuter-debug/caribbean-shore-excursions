import {
  CRUISE_CONFIDENCE_LABELS,
  type CruiseConfidenceLabelId,
} from "@/lib/cruise-confidence";

interface CruiseConfidenceLabelsProps {
  labels: CruiseConfidenceLabelId[];
  className?: string;
  compact?: boolean;
}

export function CruiseConfidenceLabels({
  labels,
  className = "",
  compact = false,
}: CruiseConfidenceLabelsProps) {
  if (labels.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {labels.map((id) => {
        const meta = CRUISE_CONFIDENCE_LABELS[id];
        return (
          <span
            key={id}
            title={compact ? meta.description : undefined}
            className="rounded-full border border-caribbean-200 bg-white px-2.5 py-1 text-xs font-medium text-caribbean-800"
          >
            {meta.label}
          </span>
        );
      })}
    </div>
  );
}
