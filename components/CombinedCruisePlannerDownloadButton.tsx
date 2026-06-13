"use client";

import { useState } from "react";
import type { CombinedCruisePlannerInput } from "@/lib/cruise-day-plan";
import { downloadCombinedCruisePlannerPdf } from "@/lib/cruise-day-plan-pdf";
import {
  isValidPlannerEmail,
  normalizePlannerEmail,
  submitCruisePlannerLead,
  type CruisePlannerLeadRecord,
} from "@/lib/cruise-planner-lead-capture";
import { CruisePlannerEmailModal } from "@/components/CruisePlannerEmailModal";

export interface CruisePlannerLeadMetadata {
  cruiseLineSlug?: string;
  cruiseLineName?: string;
  shipSlug?: string;
  shipName?: string;
  sailingMonth?: string;
  sailingYear?: number;
}

interface CombinedCruisePlannerDownloadButtonProps {
  planner: CombinedCruisePlannerInput;
  leadMetadata?: CruisePlannerLeadMetadata;
  className?: string;
  label?: string;
}

export function CombinedCruisePlannerDownloadButton({
  planner,
  leadMetadata,
  className = "btn-primary",
  label = "Download Complete Cruise Planner PDF",
}: CombinedCruisePlannerDownloadButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [formError, setFormError] = useState<string | undefined>();

  const buildLeadRecord = (normalizedEmail: string): CruisePlannerLeadRecord => ({
    email: normalizedEmail,
    marketingConsent,
    cruiseLineSlug: leadMetadata?.cruiseLineSlug ?? undefined,
    cruiseLineName: leadMetadata?.cruiseLineName ?? planner.cruiseLineName,
    shipSlug: leadMetadata?.shipSlug ?? undefined,
    shipName: leadMetadata?.shipName ?? planner.shipName,
    sailingMonth: leadMetadata?.sailingMonth ?? planner.sailingMonth,
    sailingYear: leadMetadata?.sailingYear ?? planner.sailingYear,
    portSlugs: planner.portPlans.map((plan) => plan.portSlug),
    portNames: planner.portPlans.map((plan) => plan.portName),
    capturedAt: new Date().toISOString(),
  });

  const handleDownload = async () => {
    const normalizedEmail = normalizePlannerEmail(email);
    if (!isValidPlannerEmail(normalizedEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setFailed(false);
    setFormError(undefined);

    try {
      await submitCruisePlannerLead(buildLeadRecord(normalizedEmail));

      const ok = await downloadCombinedCruisePlannerPdf(planner);
      if (!ok) {
        setFailed(true);
        setFormError("PDF generation failed. Please try again.");
        return;
      }

      setModalOpen(false);
      setEmail("");
      setMarketingConsent(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => {
          setFailed(false);
          setFormError(undefined);
          setModalOpen(true);
        }}
        disabled={loading}
        className={className}
        aria-haspopup="dialog"
      >
        {label}
      </button>

      {failed && !modalOpen && (
        <p className="text-xs text-amber-800">
          PDF generation failed. Please try again in a moment.
        </p>
      )}

      <CruisePlannerEmailModal
        open={modalOpen}
        email={email}
        marketingConsent={marketingConsent}
        loading={loading}
        error={formError}
        onEmailChange={setEmail}
        onMarketingConsentChange={setMarketingConsent}
        onSubmit={handleDownload}
        onClose={() => {
          if (!loading) setModalOpen(false);
        }}
      />
    </div>
  );
}
