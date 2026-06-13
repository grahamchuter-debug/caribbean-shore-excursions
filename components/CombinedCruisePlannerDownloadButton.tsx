"use client";

import { useState } from "react";
import type { CombinedCruisePlannerInput } from "@/lib/cruise-day-plan";
import { downloadCombinedCruisePlannerPdf } from "@/lib/cruise-day-plan-pdf";

interface CombinedCruisePlannerDownloadButtonProps {
  planner: CombinedCruisePlannerInput;
  className?: string;
  label?: string;
}

export function CombinedCruisePlannerDownloadButton({
  planner,
  className = "btn-primary",
  label = "Download Complete Cruise Planner PDF",
}: CombinedCruisePlannerDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setFailed(false);
    try {
      const ok = await downloadCombinedCruisePlannerPdf(planner);
      if (!ok) setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className={className}
        aria-busy={loading}
      >
        {loading ? "Generating PDF…" : label}
      </button>
      {failed && (
        <p className="text-xs text-amber-800">
          PDF generation failed. Please try again in a moment.
        </p>
      )}
    </div>
  );
}
