interface AffiliateDisclosureProps {
  className?: string;
  variant?: "inline" | "card";
}

const DISCLOSURE_TEXT =
  "We may have a commercial relationship with the local operators we link to. Recommendations are based on suitability for cruise passengers — port logistics, return-to-ship timing, and experience quality — not commission.";

export function AffiliateDisclosure({ className = "", variant = "inline" }: AffiliateDisclosureProps) {
  if (variant === "card") {
    return (
      <div className={`rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-600 ${className}`}>
        <p>
          <span className="font-semibold text-gray-800">How we recommend: </span>
          {DISCLOSURE_TEXT}
        </p>
      </div>
    );
  }

  return (
    <p className={`text-sm leading-relaxed text-gray-500 ${className}`}>{DISCLOSURE_TEXT}</p>
  );
}
