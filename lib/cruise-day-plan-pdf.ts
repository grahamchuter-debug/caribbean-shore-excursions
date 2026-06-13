import { jsPDF } from "jspdf";
import type { CruiseDayPlan } from "@/lib/cruise-day-plan";
import { cruiseDayPlanInterests } from "@/lib/cruise-day-plan";

/**
 * Client-side PDF generation for static export (Cloudflare Pages).
 * Print route remains available as fallback via printCruiseDayPlan().
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

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 16;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const FOOTER_Y = PAGE_HEIGHT - 10;
const BRAND_RGB: [number, number, number] = [0, 95, 146];
const ACCENT_RGB: [number, number, number] = [0, 119, 182];
const MUTED_RGB: [number, number, number] = [75, 85, 99];
const SITE_NAME = "Caribbean Shore Excursions";

function interestLabels(ids: CruiseDayPlan["interests"]): string {
  return ids
    .map((id) => cruiseDayPlanInterests.find((option) => option.id === id)?.label ?? id)
    .join(", ");
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

function buildPdfFilename(plan: CruiseDayPlan): string {
  return `cruise-day-plan-${plan.portSlug}-${plan.date}.pdf`;
}

class CruiseDayPlanPdfBuilder {
  private doc: jsPDF;
  private y = MARGIN;
  private pageNumber = 1;

  constructor(private plan: CruiseDayPlan) {
    this.doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.drawCoverHeader();
  }

  build(): Blob {
    this.addPassengerSnapshot();
    this.addRecommendedExcursions();
    this.addItinerary();
    this.addReturnAdvice();
    this.addRelatedExcursions();
    this.addScheduleInfo();
    this.addShipsSummary();
    this.drawFooter();
    return this.doc.output("blob");
  }

  private ensureSpace(needed: number): void {
    if (this.y + needed <= FOOTER_Y - 4) return;
    this.drawFooter();
    this.doc.addPage();
    this.pageNumber += 1;
    this.y = MARGIN;
    this.drawPageHeader();
  }

  private drawCoverHeader(): void {
    const { doc, plan } = this;

    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 34, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 10);

    doc.setFontSize(20);
    doc.text("Cruise Day Plan", MARGIN, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(plan.portName, MARGIN, 28);

    doc.setFontSize(9);
    doc.text(
      `${plan.displayDate} · ${interestLabels(plan.interests)} · ${plan.activityLevel} activity`,
      MARGIN,
      32,
    );

    this.y = 42;
  }

  private drawPageHeader(): void {
    const { doc, plan } = this;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`${SITE_NAME} · ${plan.portName}`, MARGIN, 8);
    this.y = 18;
  }

  private drawFooter(): void {
    const { doc } = this;
    doc.setDrawColor(200, 200, 200);
    doc.line(MARGIN, FOOTER_Y - 4, PAGE_WIDTH - MARGIN, FOOTER_Y - 4);
    doc.setTextColor(...MUTED_RGB);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(
      "For planning only — confirm times with your cruise line and tour operator.",
      MARGIN,
      FOOTER_Y,
    );
    doc.text(`caribbeanshoreexcursion.com · Page ${this.pageNumber}`, PAGE_WIDTH - MARGIN, FOOTER_Y, {
      align: "right",
    });
  }

  private addSectionTitle(title: string): void {
    this.ensureSpace(14);
    const { doc } = this;
    doc.setTextColor(...BRAND_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, MARGIN, this.y);
    this.y += 2;
    doc.setDrawColor(...ACCENT_RGB);
    doc.setLineWidth(0.4);
    doc.line(MARGIN, this.y, MARGIN + 40, this.y);
    this.y += 6;
  }

  private addParagraph(text: string, fontSize = 9): void {
    const { doc } = this;
    doc.setTextColor(40, 40, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    const blockHeight = lines.length * (fontSize * 0.42) + 2;
    this.ensureSpace(blockHeight);
    doc.text(lines, MARGIN, this.y);
    this.y += blockHeight + 2;
  }

  private addLabelValue(label: string, value: string): void {
    const { doc } = this;
    this.ensureSpace(8);
    doc.setTextColor(...MUTED_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(label.toUpperCase(), MARGIN, this.y);
    this.y += 4;
    doc.setTextColor(30, 30, 30);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const lines = doc.splitTextToSize(value, CONTENT_WIDTH);
    doc.text(lines, MARGIN, this.y);
    this.y += lines.length * 3.8 + 3;
  }

  private addSnapshotGrid(items: { label: string; value: string }[]): void {
    const colWidth = CONTENT_WIDTH / 2 - 2;
    const rowHeight = 14;
    const rows = Math.ceil(items.length / 2);

    this.ensureSpace(rows * rowHeight + 4);

    for (let i = 0; i < items.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = MARGIN + col * (colWidth + 4);
      const y = this.y + row * rowHeight;

      this.doc.setDrawColor(220, 220, 220);
      this.doc.setFillColor(250, 252, 255);
      this.doc.roundedRect(x, y - 4, colWidth, rowHeight - 2, 1.5, 1.5, "FD");

      this.doc.setTextColor(...MUTED_RGB);
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(6.5);
      this.doc.text(items[i].label.toUpperCase(), x + 2, y);

      this.doc.setTextColor(30, 30, 30);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8);
      const valueLines = this.doc.splitTextToSize(items[i].value, colWidth - 4);
      this.doc.text(valueLines.slice(0, 2), x + 2, y + 4);
    }

    this.y += rows * rowHeight + 4;
  }

  private addBulletList(items: string[]): void {
    for (const item of items) {
      const lines = this.doc.splitTextToSize(item, CONTENT_WIDTH - 6);
      const blockHeight = lines.length * 3.8 + 2;
      this.ensureSpace(blockHeight);
      this.doc.setTextColor(40, 40, 40);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(9);
      this.doc.text("•", MARGIN, this.y);
      this.doc.text(lines, MARGIN + 4, this.y);
      this.y += blockHeight;
    }
    this.y += 2;
  }

  private addPassengerSnapshot(): void {
    const { passengerSnapshot } = this.plan;
    this.addSectionTitle("Cruise Passenger Snapshot");
    this.addParagraph("Six signals to decide how to spend your day ashore.");
    this.addSnapshotGrid([
      { label: "Time in Port", value: passengerSnapshot.timeInPort },
      { label: "Best For", value: passengerSnapshot.bestFor },
      { label: "Walking Required", value: passengerSnapshot.walkingRequired },
      { label: "Family Friendly", value: passengerSnapshot.familyFriendly },
      { label: "Private Tour Friendly", value: passengerSnapshot.privateTourFriendly },
      { label: "Return to Ship Confidence", value: passengerSnapshot.returnToShipConfidence },
    ]);
  }

  private addRecommendedExcursions(): void {
    const { recommendedExcursions: rec } = this.plan;
    this.addSectionTitle("Recommended Excursions");
    this.addParagraph("Matched to your interests and activity level using port authority data.");

    this.ensureSpace(28);
    this.doc.setFillColor(230, 245, 252);
    this.doc.setDrawColor(...ACCENT_RGB);
    this.doc.roundedRect(MARGIN, this.y - 4, CONTENT_WIDTH, 26, 2, 2, "FD");

    this.doc.setTextColor(...ACCENT_RGB);
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(7);
    this.doc.text("TOP PICK", MARGIN + 3, this.y);
    this.doc.setTextColor(30, 30, 30);
    this.doc.setFontSize(11);
    this.doc.text(rec.primary.name, MARGIN + 3, this.y + 5);
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(8);
    this.doc.text(`${rec.matchLabel} · ${rec.matchScore}/100`, PAGE_WIDTH - MARGIN - 3, this.y + 5, {
      align: "right",
    });

    const descLines = this.doc.splitTextToSize(rec.primary.description, CONTENT_WIDTH - 6);
    this.doc.text(descLines.slice(0, 3), MARGIN + 3, this.y + 10);

    this.doc.setFontSize(7.5);
    this.doc.setTextColor(...MUTED_RGB);
    this.doc.text(
      `Duration: ${rec.primary.duration} · Type: ${rec.primary.type} · ${rec.primary.matchReason}`,
      MARGIN + 3,
      this.y + 20,
    );

    this.y += 30;

    if (rec.matchReasons.length > 0) {
      this.ensureSpace(4 + rec.matchReasons.length * 5);
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(8);
      this.doc.setTextColor(...ACCENT_RGB);
      this.doc.text("Why this matches", MARGIN, this.y);
      this.y += 4;
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(7.5);
      this.doc.setTextColor(50, 50, 50);
      for (const reason of rec.matchReasons) {
        const lines = this.doc.splitTextToSize(`• ${reason}`, CONTENT_WIDTH - 4);
        this.doc.text(lines, MARGIN + 2, this.y);
        this.y += lines.length * 3.5 + 1;
      }
      this.y += 2;
    }

    if (rec.alternate) {
      this.addLabelValue("Alternate pick", `${rec.alternate.name} — ${rec.alternate.description}`);
    }

    if (rec.bestForTags.length > 0) {
      this.addParagraph(`Best for: ${rec.bestForTags.join(", ")}`);
    }
  }

  private addItinerary(): void {
    this.addSectionTitle("Cruise Day Itinerary");
    const steps = this.plan.itinerary;
    if (steps.length === 0) {
      this.addParagraph(
        "Disembark promptly, enjoy your recommended excursion, allow time for lunch near port, and return with a generous all-aboard buffer.",
      );
      return;
    }
    this.addBulletList(steps.map((step) => `${step.time}: ${step.activity}`));
  }

  private addReturnAdvice(): void {
    const advice = this.plan.returnToShipAdvice;
    this.addSectionTitle("Return to Ship Advice");
    this.addParagraph(`${advice.returnLabel} — ${advice.returnMessage}`);
    if (advice.tenderRequired) {
      this.addParagraph(advice.tenderNote ? `Tender port: ${advice.tenderNote}` : "Tender port — allow extra return time.");
    }
    this.addParagraph(advice.timeBuffer);
    if (advice.typicalReturnStep) {
      this.addParagraph(`Typical return: ${advice.typicalReturnStep}`);
    }
    if (advice.portMistake) {
      this.addParagraph(`Avoid: ${advice.portMistake.mistake}`);
      this.addParagraph(`Better: ${advice.portMistake.better}`);
    }
  }

  private addRelatedExcursions(): void {
    this.addSectionTitle("Related Excursions");
    this.addParagraph("Excursion types and guides aligned with your interests.");
    for (const item of this.plan.relatedExcursions) {
      this.addLabelValue(item.label, `${item.teaser} · ${item.excursionTypeHref}`);
    }
  }

  private addScheduleInfo(): void {
    const { scheduleInfo } = this.plan;
    this.addSectionTitle("Schedule Information");
    this.addParagraph(scheduleInfo.message);

    if (scheduleInfo.hasDateMatch && scheduleInfo.entries.length > 0) {
      this.ensureSpace(12 + scheduleInfo.entries.length * 6);
      const colWidths = [42, 32, 22, 22, 24];
      const headers = ["Ship", "Line", "Arrival", "Departure", "In port"];
      let x = MARGIN;

      this.doc.setFillColor(240, 245, 250);
      this.doc.rect(MARGIN, this.y - 3, CONTENT_WIDTH, 7, "F");
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(7);
      this.doc.setTextColor(...MUTED_RGB);
      for (let i = 0; i < headers.length; i++) {
        this.doc.text(headers[i], x + 1, this.y);
        x += colWidths[i];
      }
      this.y += 6;

      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(7.5);
      this.doc.setTextColor(40, 40, 40);
      for (const entry of scheduleInfo.entries) {
        this.ensureSpace(7);
        x = MARGIN;
        const cells = [
          entry.ship,
          entry.cruiseLine,
          entry.arrival,
          entry.departure,
          entry.timeInPort ?? "—",
        ];
        for (let i = 0; i < cells.length; i++) {
          const clipped = this.doc.splitTextToSize(cells[i], colWidths[i] - 2)[0] ?? cells[i];
          this.doc.text(clipped, x + 1, this.y);
          x += colWidths[i];
        }
        this.y += 5.5;
      }
      this.y += 3;
    }

    if (scheduleInfo.scheduleHref) {
      this.addParagraph(`Full schedule: caribbeanshoreexcursion.com${scheduleInfo.scheduleHref}`);
    }
    if (scheduleInfo.scheduleFallbackNote) {
      this.addParagraph(scheduleInfo.scheduleFallbackNote);
    }
  }

  private addShipsSummary(): void {
    const { shipsSummary, shipsInPort } = this.plan;
    this.addSectionTitle("Ships In Port Summary");
    if (!shipsSummary) {
      this.addParagraph(
        "No verified ship schedule for this date yet. Use the passenger snapshot above and confirm your ship's published all-aboard time before booking independent excursions.",
      );
      return;
    }

    this.addParagraph(
      `${shipsSummary.crowdLevel} — ${shipsSummary.shipCount} ship${shipsSummary.shipCount === 1 ? "" : "s"} · ~${shipsSummary.estimatedPassengers.toLocaleString()} passengers`,
    );
    this.addParagraph(shipsSummary.planningNote);
    if (shipsSummary.busiestShip) {
      this.addParagraph(
        `Largest call: ${shipsSummary.busiestShip.name} (~${shipsSummary.busiestShip.passengers.toLocaleString()} passengers)`,
      );
    }
    if (shipsInPort.length > 0) {
      this.addBulletList(
        shipsInPort.map(
          (ship) =>
            `${ship.ship} · ${ship.cruiseLine} · ${ship.arrival}–${ship.departure} · ${ship.passengers} pax`,
        ),
      );
    }
  }
}

/** Generate an A4 PDF blob from a cruise day plan (client-side). */
export async function generateCruiseDayPlanPdf(plan: CruiseDayPlan): Promise<Blob | null> {
  if (typeof window === "undefined") return null;
  try {
    const builder = new CruiseDayPlanPdfBuilder(plan);
    return builder.build();
  } catch {
    return null;
  }
}

/** Trigger a browser download of the plan PDF; falls back to print route on failure. */
export async function downloadCruiseDayPlanPdf(plan: CruiseDayPlan): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const blob = await generateCruiseDayPlanPdf(plan);
  if (!blob) {
    printCruiseDayPlan({ plan, usePrintRoute: true });
    return false;
  }

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = buildPdfFilename(plan);
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
  return true;
}

/** Browser print via window.print() on the current or print route page. */
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
