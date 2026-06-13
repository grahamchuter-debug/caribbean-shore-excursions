import type { CruiseDayPlan } from "@/lib/cruise-day-plan";

/**
 * Future-ready PDF generation interface.
 * v1 uses browser print; later implementations can swap in react-pdf, puppeteer, etc.
 */
export interface CruiseDayPlanPdfOptions {
  plan: CruiseDayPlan;
  /** When true, opens the dedicated print route in a new tab before printing. */
  usePrintRoute?: boolean;
}

export interface CruiseDayPlanPdfGenerator {
  generate(plan: CruiseDayPlan): Promise<Blob | null>;
  print(options: CruiseDayPlanPdfOptions): void;
}

function buildPrintQueryString(plan: CruiseDayPlan): string {
  const params = new URLSearchParams({
    port: plan.portSlug,
    date: plan.date,
    interests: plan.interests.join(","),
    activity: plan.activityLevel,
  });
  return params.toString();
}

export function getCruiseDayPlanPrintUrl(plan: CruiseDayPlan): string {
  return `/cruise-day-plan/print?${buildPrintQueryString(plan)}`;
}

/** Stub for server-side or library PDF generation (not implemented in v1). */
export async function generateCruiseDayPlanPdf(_plan: CruiseDayPlan): Promise<Blob | null> {
  return null;
}

/** v1: browser print via window.print() on the current or print route page. */
export function printCruiseDayPlan({ plan, usePrintRoute = false }: CruiseDayPlanPdfOptions): void {
  if (typeof window === "undefined") return;

  if (usePrintRoute) {
    const printUrl = getCruiseDayPlanPrintUrl(plan);
    const printWindow = window.open(printUrl, "_blank", "noopener,noreferrer");
    if (printWindow) {
      printWindow.addEventListener("load", () => {
        printWindow.print();
      });
    }
    return;
  }

  window.print();
}

export const cruiseDayPlanPdfGenerator: CruiseDayPlanPdfGenerator = {
  generate: generateCruiseDayPlanPdf,
  print: printCruiseDayPlan,
};
