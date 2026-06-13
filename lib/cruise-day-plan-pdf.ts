import { jsPDF } from "jspdf";
import type { CombinedCruisePlannerInput, CruiseDayPlan } from "@/lib/cruise-day-plan";
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

function buildCombinedPdfFilename(input: CombinedCruisePlannerInput): string {
  const month = input.sailingMonth?.toLowerCase().slice(0, 3) ?? "cruise";
  const year = input.sailingYear ?? new Date().getFullYear();
  const ship = input.shipName
    ? input.shipName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
    : "planner";
  return `cruise-planner-${ship}-${month}${year}.pdf`;
}

type PageHeaderMode = "none" | "port" | "combined";

class PdfCanvas {
  y = MARGIN;
  pageNumber = 1;
  private pageHeaderMode: PageHeaderMode = "none";
  private pageHeaderLabel = "";

  constructor(readonly doc: jsPDF) {}

  setPageHeader(mode: PageHeaderMode, label = ""): void {
    this.pageHeaderMode = mode;
    this.pageHeaderLabel = label;
  }

  ensureSpace(needed: number): void {
    if (this.y + needed <= FOOTER_Y - 4) return;
    this.drawFooter();
    this.doc.addPage();
    this.pageNumber += 1;
    this.y = MARGIN;
    if (this.pageHeaderMode === "port") {
      this.drawPortPageHeader(this.pageHeaderLabel);
    } else if (this.pageHeaderMode === "combined") {
      this.drawCombinedPageHeader(this.pageHeaderLabel);
    }
  }

  drawFooter(): void {
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

  drawCoverBand(title: string, subtitle: string, meta?: string): void {
    const { doc } = this;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 34, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 10);

    doc.setFontSize(20);
    doc.text(title, MARGIN, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(subtitle, MARGIN, 28);

    if (meta) {
      doc.setFontSize(9);
      doc.text(meta, MARGIN, 32);
    }

    this.y = 42;
  }

  drawPortPageHeader(portName: string): void {
    const { doc } = this;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`${SITE_NAME} · ${portName}`, MARGIN, 8);
    this.y = 18;
  }

  drawCombinedPageHeader(portName: string): void {
    const { doc } = this;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`${SITE_NAME} · Complete Cruise Planner · ${portName}`, MARGIN, 8);
    this.y = 18;
  }

  addSectionTitle(title: string): void {
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

  addParagraph(text: string, fontSize = 9): void {
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

  addLabelValue(label: string, value: string): void {
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

  addSnapshotGrid(items: { label: string; value: string }[]): void {
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

  addBulletList(items: string[]): void {
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

  getCurrentPage(): number {
    return this.doc.getNumberOfPages();
  }

  resetY(offset = MARGIN): void {
    this.y = offset;
  }
}

class PortPlanPdfSections {
  constructor(private canvas: PdfCanvas) {}

  addPassengerSnapshot(plan: CruiseDayPlan): void {
    const { passengerSnapshot } = plan;
    this.canvas.addSectionTitle("Cruise Passenger Snapshot");
    this.canvas.addParagraph("Six signals to decide how to spend your day ashore.");
    this.canvas.addSnapshotGrid([
      { label: "Time in Port", value: passengerSnapshot.timeInPort },
      { label: "Best For", value: passengerSnapshot.bestFor },
      { label: "Walking Required", value: passengerSnapshot.walkingRequired },
      { label: "Family Friendly", value: passengerSnapshot.familyFriendly },
      { label: "Private Tour Friendly", value: passengerSnapshot.privateTourFriendly },
      { label: "Return to Ship Confidence", value: passengerSnapshot.returnToShipConfidence },
    ]);
  }

  addRecommendedExcursions(plan: CruiseDayPlan, options?: { includeAlternate?: boolean }): void {
    const { recommendedExcursions: rec } = plan;
    const includeAlternate = options?.includeAlternate ?? true;
    this.canvas.addSectionTitle("Recommended Excursions");
    this.canvas.addParagraph("Matched to your interests and activity level using port authority data.");

    this.canvas.ensureSpace(28);
    const { doc } = this.canvas;
    doc.setFillColor(230, 245, 252);
    doc.setDrawColor(...ACCENT_RGB);
    doc.roundedRect(MARGIN, this.canvas.y - 4, CONTENT_WIDTH, 26, 2, 2, "FD");

    doc.setTextColor(...ACCENT_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("TOP PICK", MARGIN + 3, this.canvas.y);
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(11);
    doc.text(rec.primary.name, MARGIN + 3, this.canvas.y + 5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(`${rec.matchLabel} · ${rec.matchScore}/100`, PAGE_WIDTH - MARGIN - 3, this.canvas.y + 5, {
      align: "right",
    });

    const descLines = doc.splitTextToSize(rec.primary.description, CONTENT_WIDTH - 6);
    doc.text(descLines.slice(0, 3), MARGIN + 3, this.canvas.y + 10);

    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED_RGB);
    doc.text(
      `Duration: ${rec.primary.duration} · Type: ${rec.primary.type} · ${rec.primary.matchReason}`,
      MARGIN + 3,
      this.canvas.y + 20,
    );

    this.canvas.y += 30;

    if (rec.matchReasons.length > 0) {
      this.canvas.ensureSpace(4 + rec.matchReasons.length * 5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...ACCENT_RGB);
      doc.text("Why this matches", MARGIN, this.canvas.y);
      this.canvas.y += 4;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(50, 50, 50);
      for (const reason of rec.matchReasons) {
        const lines = doc.splitTextToSize(`• ${reason}`, CONTENT_WIDTH - 4);
        doc.text(lines, MARGIN + 2, this.canvas.y);
        this.canvas.y += lines.length * 3.5 + 1;
      }
      this.canvas.y += 2;
    }

    if (includeAlternate && rec.alternate) {
      this.canvas.addLabelValue("Alternate pick", `${rec.alternate.name} — ${rec.alternate.description}`);
    }

    if (rec.bestForTags.length > 0) {
      this.canvas.addParagraph(`Best for: ${rec.bestForTags.join(", ")}`);
    }
  }

  addItinerary(plan: CruiseDayPlan): void {
    this.canvas.addSectionTitle("Cruise Day Itinerary");
    const steps = plan.itinerary;
    if (steps.length === 0) {
      this.canvas.addParagraph(
        "Disembark promptly, enjoy your recommended excursion, allow time for lunch near port, and return with a generous all-aboard buffer.",
      );
      return;
    }
    this.canvas.addBulletList(steps.map((step) => `${step.time}: ${step.activity}`));
  }

  addReturnAdvice(plan: CruiseDayPlan): void {
    const advice = plan.returnToShipAdvice;
    this.canvas.addSectionTitle("Return to Ship Advice");
    this.canvas.addParagraph(`${advice.returnLabel} — ${advice.returnMessage}`);
    if (advice.tenderRequired) {
      this.canvas.addParagraph(
        advice.tenderNote ? `Tender port: ${advice.tenderNote}` : "Tender port — allow extra return time.",
      );
    }
    this.canvas.addParagraph(advice.timeBuffer);
    if (advice.typicalReturnStep) {
      this.canvas.addParagraph(`Typical return: ${advice.typicalReturnStep}`);
    }
    if (advice.portMistake) {
      this.canvas.addParagraph(`Avoid: ${advice.portMistake.mistake}`);
      this.canvas.addParagraph(`Better: ${advice.portMistake.better}`);
    }
  }

  addRelatedExcursions(plan: CruiseDayPlan): void {
    this.canvas.addSectionTitle("Related Excursions");
    this.canvas.addParagraph("Excursion types and guides aligned with your interests.");
    for (const item of plan.relatedExcursions) {
      this.canvas.addLabelValue(item.label, `${item.teaser} · ${item.excursionTypeHref}`);
    }
  }

  addScheduleInfo(plan: CruiseDayPlan): void {
    const { scheduleInfo } = plan;
    this.canvas.addSectionTitle("Schedule Information");
    this.canvas.addParagraph(scheduleInfo.message);

    if (scheduleInfo.hasDateMatch && scheduleInfo.entries.length > 0) {
      this.canvas.ensureSpace(12 + scheduleInfo.entries.length * 6);
      const colWidths = [42, 32, 22, 22, 24];
      const headers = ["Ship", "Line", "Arrival", "Departure", "In port"];
      let x = MARGIN;
      const { doc } = this.canvas;

      doc.setFillColor(240, 245, 250);
      doc.rect(MARGIN, this.canvas.y - 3, CONTENT_WIDTH, 7, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setTextColor(...MUTED_RGB);
      for (let i = 0; i < headers.length; i++) {
        doc.text(headers[i], x + 1, this.canvas.y);
        x += colWidths[i];
      }
      this.canvas.y += 6;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(40, 40, 40);
      for (const entry of scheduleInfo.entries) {
        this.canvas.ensureSpace(7);
        x = MARGIN;
        const cells = [
          entry.ship,
          entry.cruiseLine,
          entry.arrival,
          entry.departure,
          entry.timeInPort ?? "—",
        ];
        for (let i = 0; i < cells.length; i++) {
          const clipped = doc.splitTextToSize(cells[i], colWidths[i] - 2)[0] ?? cells[i];
          doc.text(clipped, x + 1, this.canvas.y);
          x += colWidths[i];
        }
        this.canvas.y += 5.5;
      }
      this.canvas.y += 3;
    }

    if (scheduleInfo.scheduleHref) {
      this.canvas.addParagraph(`Full schedule: caribbeanshoreexcursion.com${scheduleInfo.scheduleHref}`);
    }
    if (scheduleInfo.scheduleFallbackNote) {
      this.canvas.addParagraph(scheduleInfo.scheduleFallbackNote);
    }
  }

  addShipsSummary(plan: CruiseDayPlan): void {
    const { shipsSummary, shipsInPort } = plan;
    this.canvas.addSectionTitle("Ships In Port Summary");
    if (!shipsSummary) {
      this.canvas.addParagraph(
        "No verified ship schedule for this date yet. Use the passenger snapshot above and confirm your ship's published all-aboard time before booking independent excursions.",
      );
      return;
    }

    this.canvas.addParagraph(
      `${shipsSummary.crowdLevel} — ${shipsSummary.shipCount} ship${shipsSummary.shipCount === 1 ? "" : "s"} · ~${shipsSummary.estimatedPassengers.toLocaleString()} passengers`,
    );
    this.canvas.addParagraph(shipsSummary.planningNote);
    if (shipsSummary.busiestShip) {
      this.canvas.addParagraph(
        `Largest call: ${shipsSummary.busiestShip.name} (~${shipsSummary.busiestShip.passengers.toLocaleString()} passengers)`,
      );
    }
    if (shipsInPort.length > 0) {
      this.canvas.addBulletList(
        shipsInPort.map(
          (ship) =>
            `${ship.ship} · ${ship.cruiseLine} · ${ship.arrival}–${ship.departure} · ${ship.passengers} pax`,
        ),
      );
    }
  }

  addCombinedPortSections(plan: CruiseDayPlan): void {
    this.addRecommendedExcursions(plan, { includeAlternate: false });
    this.addItinerary(plan);
    this.addReturnAdvice(plan);
    this.addPassengerSnapshot(plan);
    this.addScheduleSummary(plan);
  }

  addScheduleSummary(plan: CruiseDayPlan): void {
    const { scheduleInfo, shipsSummary, shipsInPort } = plan;
    const hasSchedule =
      scheduleInfo.hasDateMatch && scheduleInfo.entries.length > 0;
    const hasShipsSummary = Boolean(shipsSummary);

    if (!hasSchedule && !hasShipsSummary) return;

    this.canvas.addSectionTitle("Schedule Summary");
    this.canvas.addParagraph(scheduleInfo.message);

    if (hasSchedule) {
      this.canvas.ensureSpace(12 + scheduleInfo.entries.length * 6);
      const colWidths = [42, 32, 22, 22, 24];
      const headers = ["Ship", "Line", "Arrival", "Departure", "In port"];
      let x = MARGIN;
      const { doc } = this.canvas;

      doc.setFillColor(240, 245, 250);
      doc.rect(MARGIN, this.canvas.y - 3, CONTENT_WIDTH, 7, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setTextColor(...MUTED_RGB);
      for (let i = 0; i < headers.length; i++) {
        doc.text(headers[i], x + 1, this.canvas.y);
        x += colWidths[i];
      }
      this.canvas.y += 6;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(40, 40, 40);
      for (const entry of scheduleInfo.entries) {
        this.canvas.ensureSpace(7);
        x = MARGIN;
        const cells = [
          entry.ship,
          entry.cruiseLine,
          entry.arrival,
          entry.departure,
          entry.timeInPort ?? "—",
        ];
        for (let i = 0; i < cells.length; i++) {
          const clipped = doc.splitTextToSize(cells[i], colWidths[i] - 2)[0] ?? cells[i];
          doc.text(clipped, x + 1, this.canvas.y);
          x += colWidths[i];
        }
        this.canvas.y += 5.5;
      }
      this.canvas.y += 3;
    }

    if (hasShipsSummary && shipsSummary) {
      this.canvas.addParagraph(
        `${shipsSummary.crowdLevel} — ${shipsSummary.shipCount} ship${shipsSummary.shipCount === 1 ? "" : "s"} · ~${shipsSummary.estimatedPassengers.toLocaleString()} passengers`,
      );
      this.canvas.addParagraph(shipsSummary.planningNote);
      if (shipsSummary.busiestShip) {
        this.canvas.addParagraph(
          `Largest call: ${shipsSummary.busiestShip.name} (~${shipsSummary.busiestShip.passengers.toLocaleString()} passengers)`,
        );
      }
    }

    if (shipsInPort.length > 0) {
      this.canvas.addBulletList(
        shipsInPort.map(
          (ship) =>
            `${ship.ship} · ${ship.cruiseLine} · ${ship.arrival}–${ship.departure} · ${ship.passengers} pax`,
        ),
      );
    }

    if (scheduleInfo.scheduleHref) {
      this.canvas.addParagraph(`Full schedule: caribbeanshoreexcursion.com${scheduleInfo.scheduleHref}`);
    }
    if (scheduleInfo.scheduleFallbackNote) {
      this.canvas.addParagraph(scheduleInfo.scheduleFallbackNote);
    }
  }
}

class CruiseDayPlanPdfBuilder {
  private canvas: PdfCanvas;
  private sections: PortPlanPdfSections;

  constructor(private plan: CruiseDayPlan) {
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.canvas = new PdfCanvas(doc);
    this.sections = new PortPlanPdfSections(this.canvas);
    this.canvas.drawCoverBand(
      "Cruise Day Plan",
      plan.portName,
      `${plan.displayDate} · ${interestLabels(plan.interests)} · ${plan.activityLevel} activity`,
    );
    this.canvas.setPageHeader("port", plan.portName);
  }

  build(): Blob {
    this.sections.addPassengerSnapshot(this.plan);
    this.sections.addRecommendedExcursions(this.plan);
    this.sections.addItinerary(this.plan);
    this.sections.addReturnAdvice(this.plan);
    this.sections.addRelatedExcursions(this.plan);
    this.sections.addScheduleInfo(this.plan);
    this.sections.addShipsSummary(this.plan);
    this.canvas.drawFooter();
    return this.canvas.doc.output("blob");
  }
}

interface TocEntry {
  portName: string;
  page: number;
}

class CombinedCruisePlannerPdfBuilder {
  private canvas: PdfCanvas;
  private sections: PortPlanPdfSections;
  private tocEntries: TocEntry[] = [];

  constructor(private input: CombinedCruisePlannerInput) {
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.canvas = new PdfCanvas(doc);
    this.sections = new PortPlanPdfSections(this.canvas);
    this.drawCoverPage();
    doc.addPage();
    this.canvas.pageNumber = 2;
    this.canvas.resetY(MARGIN);
  }

  build(): Blob {
    for (const plan of this.input.portPlans) {
      this.canvas.doc.addPage();
      this.canvas.pageNumber = this.canvas.getCurrentPage();
      this.tocEntries.push({
        portName: plan.portName,
        page: this.canvas.pageNumber,
      });
      this.canvas.setPageHeader("combined", plan.portName);
      this.drawPortSectionHeader(plan);
      this.sections.addCombinedPortSections(plan);
    }

    this.drawTableOfContents();
    this.drawAllFooters();
    return this.canvas.doc.output("blob");
  }

  private drawCoverPage(): void {
    const { input } = this;
    const sailingLabel =
      input.sailingMonth && input.sailingYear
        ? `${input.sailingMonth} ${input.sailingYear}`
        : input.sailingMonth ?? "Your sailing";

    const shipLine =
      input.shipName && input.cruiseLineName
        ? `${input.cruiseLineName} · ${input.shipName}`
        : input.cruiseLineName ?? input.shipName ?? "Your cruise";

    this.canvas.drawCoverBand("Complete Cruise Planner", shipLine, sailingLabel);
    this.canvas.setPageHeader("none");

    this.canvas.addLabelValue("Traveller profile", input.travellerTypeLabels.join(", "));
    this.canvas.addLabelValue("Activity level", input.fitnessLevelLabel);
    this.canvas.addLabelValue(
      "Ports included",
      input.portPlans.map((plan) => plan.portName).join(", "),
    );

    this.canvas.addParagraph(
      "Personalized shore-day plans for each port on your itinerary — recommended excursions, itineraries, return-to-ship advice, and schedule context.",
    );
  }

  private drawPortSectionHeader(plan: CruiseDayPlan): void {
    const { doc } = this.canvas;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 22, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 8);
    doc.setFontSize(16);
    doc.text(plan.portName, MARGIN, 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(
      `${plan.displayDate} · ${plan.portInformation.region}`,
      MARGIN,
      20,
    );
    this.canvas.resetY(30);
  }

  private drawTableOfContents(): void {
    const { doc } = this.canvas;
    doc.setPage(2);
    this.canvas.pageNumber = 2;
    this.canvas.resetY(MARGIN);

    doc.setTextColor(...BRAND_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Table of Contents", MARGIN, this.canvas.y);
    this.canvas.y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);

    for (const entry of this.tocEntries) {
      this.canvas.ensureSpace(8);
      doc.text(entry.portName, MARGIN, this.canvas.y);
      doc.text(String(entry.page), PAGE_WIDTH - MARGIN, this.canvas.y, { align: "right" });
      doc.setDrawColor(220, 220, 220);
      doc.line(MARGIN, this.canvas.y + 2, PAGE_WIDTH - MARGIN, this.canvas.y + 2);
      this.canvas.y += 8;
    }
  }

  private drawAllFooters(): void {
    const totalPages = this.canvas.doc.getNumberOfPages();
    for (let page = 1; page <= totalPages; page++) {
      this.canvas.doc.setPage(page);
      this.canvas.pageNumber = page;
      this.canvas.drawFooter();
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

/** Generate a combined cruise planner PDF blob (client-side). */
export async function generateCombinedCruisePlannerPdf(
  input: CombinedCruisePlannerInput,
): Promise<Blob | null> {
  if (typeof window === "undefined") return null;
  try {
    const builder = new CombinedCruisePlannerPdfBuilder(input);
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

/** Trigger a browser download of the combined cruise planner PDF. */
export async function downloadCombinedCruisePlannerPdf(
  input: CombinedCruisePlannerInput,
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const blob = await generateCombinedCruisePlannerPdf(input);
  if (!blob) return false;

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = buildCombinedPdfFilename(input);
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
