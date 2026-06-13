import { jsPDF } from "jspdf";
import type { CombinedCruisePlannerInput, CruiseDayPlan } from "@/lib/cruise-day-plan";
import { cruiseDayPlanActivityLevels, cruiseDayPlanInterests } from "@/lib/cruise-day-plan";
import type { MatchTier } from "@/lib/excursion-finder-engine";
import { getSpecialistExcursionUrl } from "@/lib/specialist-links";

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
const FOOTER_Y = PAGE_HEIGHT - 12;
const FOOTER_DISCLAIMER =
  "For planning only — always confirm times with your cruise line and tour operator.";
const BRAND_RGB: [number, number, number] = [0, 95, 146];
const ACCENT_RGB: [number, number, number] = [0, 119, 182];
const MUTED_RGB: [number, number, number] = [75, 85, 99];
const SAND_RGB: [number, number, number] = [255, 248, 240];
const CARD_BG: [number, number, number] = [248, 252, 255];
const CARD_BORDER: [number, number, number] = [210, 225, 238];
const SITE_NAME = "Caribbean Shore Excursions";
const SITE_URL = "https://caribbeanshoreexcursion.com";

const MATCH_BADGE_COLORS: Record<MatchTier, [number, number, number]> = {
  "Excellent Match": [6, 95, 70],
  "Strong Match": [0, 95, 146],
  "Good Match": [180, 120, 0],
  "Possible Match": [100, 110, 120],
};

function interestLabels(ids: CruiseDayPlan["interests"]): string {
  return ids
    .map((id) => cruiseDayPlanInterests.find((option) => option.id === id)?.label ?? id)
    .join(", ");
}

function activityLevelLabel(level: CruiseDayPlan["activityLevel"]): string {
  return cruiseDayPlanActivityLevels.find((option) => option.id === level)?.label ?? level;
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
  return `caribbean-cruise-planner-${ship}-${month}${year}.pdf`;
}

function getExcursionCtaUrl(plan: CruiseDayPlan): string {
  const related = plan.relatedExcursions[0];
  const path = getSpecialistExcursionUrl(plan.portSlug, {
    excursionType: plan.recommendedExcursions.primary.type,
    text: `${plan.recommendedExcursions.primary.name} ${plan.recommendedExcursions.primary.description}`,
    guideHref: related?.guideHref,
  });
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
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
    if (this.y + needed <= FOOTER_Y - 6) return;
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
    doc.setDrawColor(...CARD_BORDER);
    doc.line(MARGIN, FOOTER_Y - 5, PAGE_WIDTH - MARGIN, FOOTER_Y - 5);
    doc.setTextColor(...MUTED_RGB);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.text(FOOTER_DISCLAIMER, MARGIN, FOOTER_Y);
    doc.text(`${SITE_URL.replace("https://", "")} · Page ${this.pageNumber}`, PAGE_WIDTH - MARGIN, FOOTER_Y, {
      align: "right",
    });
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
    doc.text(`${SITE_NAME} · Your Caribbean Cruise Planner · ${portName}`, MARGIN, 8);
    this.y = 18;
  }

  addSpacer(mm = 4): void {
    this.y += mm;
  }

  addSectionTitle(title: string): void {
    this.ensureSpace(16);
    const { doc } = this;
    doc.setTextColor(...BRAND_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title, MARGIN, this.y);
    this.y += 3;
    doc.setDrawColor(...ACCENT_RGB);
    doc.setLineWidth(0.5);
    doc.line(MARGIN, this.y, MARGIN + 48, this.y);
    this.y += 7;
  }

  addParagraph(text: string, fontSize = 9, maxLines?: number): void {
    const { doc } = this;
    doc.setTextColor(45, 45, 45);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    const visible = maxLines ? lines.slice(0, maxLines) : lines;
    const blockHeight = visible.length * (fontSize * 0.42) + 2;
    this.ensureSpace(blockHeight);
    doc.text(visible, MARGIN, this.y);
    this.y += blockHeight + 3;
  }

  addMatchBadge(label: MatchTier, score: number, x: number, y: number): number {
    const { doc } = this;
    const rgb = MATCH_BADGE_COLORS[label] ?? MATCH_BADGE_COLORS["Good Match"];
    const text = `${label} · ${score}/100`;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    const width = doc.getTextWidth(text) + 8;
    doc.setFillColor(...rgb);
    doc.roundedRect(x, y - 4.5, width, 7, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(text, x + 4, y);
    return width;
  }

  addMetaChips(chips: { label: string; value: string }[]): void {
    const chipHeight = 10;
    const gap = 3;
    let x = MARGIN;
    let row = 0;
    const { doc } = this;

    this.ensureSpace(chipHeight + 4);

    for (const chip of chips) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.5);
      const labelWidth = doc.getTextWidth(chip.label.toUpperCase()) + 3;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      const valueWidth = doc.getTextWidth(chip.value) + 6;
      const chipWidth = labelWidth + valueWidth + 6;

      if (x + chipWidth > PAGE_WIDTH - MARGIN) {
        row += 1;
        x = MARGIN;
        this.y += chipHeight + gap;
        this.ensureSpace(chipHeight);
      }

      const chipY = this.y + row * (chipHeight + gap);
      doc.setDrawColor(...CARD_BORDER);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(x, chipY - 5, chipWidth, chipHeight, 2, 2, "FD");

      doc.setTextColor(...MUTED_RGB);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.5);
      doc.text(chip.label.toUpperCase(), x + 3, chipY);

      doc.setTextColor(30, 30, 30);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.text(chip.value, x + 3 + labelWidth, chipY);

      x += chipWidth + gap;
    }

    this.y += (row + 1) * (chipHeight + gap) + 2;
  }

  addSectionCard(render: () => void, padding = 5, minHeight = 30): void {
    const startY = this.y;
    this.ensureSpace(minHeight);

    this.doc.setDrawColor(...CARD_BORDER);
    this.doc.setFillColor(...CARD_BG);
    this.doc.roundedRect(MARGIN, startY, CONTENT_WIDTH, minHeight, 3, 3, "FD");

    this.y = startY + padding;
    render();
    this.y = startY + Math.max(minHeight, this.y - startY + padding) + 4;
  }

  addSnapshotGrid(items: { label: string; value: string }[]): void {
    const colWidth = CONTENT_WIDTH / 2 - 2;
    const rowHeight = 16;
    const rows = Math.ceil(items.length / 2);

    this.ensureSpace(rows * rowHeight + 6);

    for (let i = 0; i < items.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = MARGIN + col * (colWidth + 4);
      const y = this.y + row * rowHeight;

      this.doc.setDrawColor(...CARD_BORDER);
      this.doc.setFillColor(255, 255, 255);
      this.doc.roundedRect(x, y - 5, colWidth, rowHeight - 2, 2, 2, "FD");

      this.doc.setTextColor(...MUTED_RGB);
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(6.5);
      this.doc.text(items[i].label.toUpperCase(), x + 3, y);

      this.doc.setTextColor(30, 30, 30);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8);
      const valueLines = this.doc.splitTextToSize(items[i].value, colWidth - 6);
      this.doc.text(valueLines.slice(0, 2), x + 3, y + 4.5);
    }

    this.y += rows * rowHeight + 6;
  }

  addBulletList(items: string[], indent = 4): void {
    for (const item of items) {
      const lines = this.doc.splitTextToSize(item, CONTENT_WIDTH - indent - 2);
      const blockHeight = lines.length * 4 + 2;
      this.ensureSpace(blockHeight);
      this.doc.setTextColor(45, 45, 45);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8.5);
      this.doc.setFillColor(...ACCENT_RGB);
      this.doc.circle(MARGIN + 1.5, this.y - 1, 0.8, "F");
      this.doc.text(lines, MARGIN + indent, this.y);
      this.y += blockHeight + 1;
    }
    this.y += 3;
  }

  addTimeline(steps: { time: string; activity: string }[]): void {
    for (const step of steps) {
      const activityLines = this.doc.splitTextToSize(step.activity, CONTENT_WIDTH - 28);
      const blockHeight = Math.max(10, activityLines.length * 4 + 4);
      this.ensureSpace(blockHeight + 2);

      this.doc.setFillColor(...ACCENT_RGB);
      this.doc.roundedRect(MARGIN, this.y - 4, 22, 7, 1.5, 1.5, "F");
      this.doc.setTextColor(255, 255, 255);
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(7);
      this.doc.text(step.time, MARGIN + 11, this.y, { align: "center" });

      this.doc.setTextColor(40, 40, 40);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8.5);
      this.doc.text(activityLines, MARGIN + 26, this.y);

      this.y += blockHeight;
    }
    this.y += 2;
  }

  addCtaButton(label: string, url: string): void {
    this.ensureSpace(16);
    const { doc } = this;
    const buttonWidth = CONTENT_WIDTH;
    const buttonHeight = 12;

    doc.setFillColor(...BRAND_RGB);
    doc.roundedRect(MARGIN, this.y - 5, buttonWidth, buttonHeight, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.textWithLink(label, MARGIN + buttonWidth / 2, this.y + 1.5, {
      align: "center",
      url,
    });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(url.replace("https://", ""), MARGIN + buttonWidth / 2, this.y + 5.5, {
      align: "center",
    });

    this.y += buttonHeight + 4;
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

  addPremiumPassengerSnapshot(plan: CruiseDayPlan): void {
    const { passengerSnapshot } = plan;
    this.canvas.addSectionTitle("Cruise Passenger Snapshot");
    this.canvas.addParagraph("Six quick signals to shape your day ashore.", 8.5);
    this.canvas.addSnapshotGrid([
      { label: "Time in Port", value: passengerSnapshot.timeInPort },
      { label: "Best For", value: passengerSnapshot.bestFor },
      { label: "Walking Required", value: passengerSnapshot.walkingRequired },
      { label: "Family Friendly", value: passengerSnapshot.familyFriendly },
      { label: "Private Tour Friendly", value: passengerSnapshot.privateTourFriendly },
      { label: "Return Confidence", value: passengerSnapshot.returnToShipConfidence },
    ]);
  }

  addPremiumExcursionBlock(plan: CruiseDayPlan): void {
    const { recommendedExcursions: rec } = plan;
    const { doc } = this.canvas;

    this.canvas.addSectionTitle("Recommended Excursion");
    this.canvas.ensureSpace(42);

    const cardTop = this.canvas.y;
    doc.setFillColor(...SAND_RGB);
    doc.setDrawColor(...ACCENT_RGB);
    doc.setLineWidth(0.6);
    doc.roundedRect(MARGIN, cardTop - 2, CONTENT_WIDTH, 38, 3, 3, "FD");

    doc.setTextColor(...ACCENT_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("TOP PICK FOR YOU", MARGIN + 4, cardTop + 3);

    this.canvas.addMatchBadge(rec.matchLabel, rec.matchScore, PAGE_WIDTH - MARGIN - 52, cardTop + 3);

    doc.setTextColor(25, 25, 25);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(rec.primary.name, MARGIN + 4, cardTop + 11);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    const descLines = doc.splitTextToSize(rec.primary.description, CONTENT_WIDTH - 8);
    doc.text(descLines.slice(0, 2), MARGIN + 4, cardTop + 17);

    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED_RGB);
    doc.text(rec.primary.type, MARGIN + 4, cardTop + 28);

    this.canvas.y = cardTop + 42;
    this.canvas.addSpacer(2);

    this.canvas.addMetaChips([
      { label: "Duration", value: rec.primary.duration },
      { label: "Activity", value: activityLevelLabel(plan.activityLevel) },
      {
        label: "Return",
        value: plan.returnToShipAdvice.returnLabel,
      },
    ]);

    if (rec.matchReasons.length > 0) {
      this.canvas.addSpacer(2);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(...BRAND_RGB);
      this.canvas.ensureSpace(6);
      doc.text("Why this matches", MARGIN, this.canvas.y);
      this.canvas.y += 5;
      this.canvas.addBulletList(rec.matchReasons);
    }
  }

  addPremiumItinerary(plan: CruiseDayPlan): void {
    this.canvas.addSectionTitle("Typical Port Day Itinerary");
    const steps = plan.itinerary;
    if (steps.length === 0) {
      this.canvas.addParagraph(
        "Disembark promptly, enjoy your recommended excursion, allow time for lunch near port, and return with a generous all-aboard buffer.",
        8.5,
      );
      return;
    }
    this.canvas.addTimeline(steps);
  }

  addPremiumReturnAdvice(plan: CruiseDayPlan): void {
    const advice = plan.returnToShipAdvice;
    this.canvas.addSectionCard(() => {
      this.canvas.doc.setFont("helvetica", "bold");
      this.canvas.doc.setFontSize(9);
      this.canvas.doc.setTextColor(...BRAND_RGB);
      this.canvas.doc.text("Return-to-Ship Advice", MARGIN + 4, this.canvas.y);
      this.canvas.y += 6;

      this.canvas.addParagraph(`${advice.returnLabel} — ${advice.returnMessage}`, 8.5, 2);
      if (advice.tenderRequired) {
        this.canvas.addParagraph(
          advice.tenderNote ? `Tender port: ${advice.tenderNote}` : "Tender port — allow extra return time.",
          8,
          2,
        );
      }
      this.canvas.addParagraph(advice.timeBuffer, 8, 2);
      if (advice.typicalReturnStep) {
        this.canvas.addParagraph(`Typical return: ${advice.typicalReturnStep}`, 8, 2);
      }
    });
  }

  addPremiumSchedule(plan: CruiseDayPlan): void {
    const { scheduleInfo } = plan;
    const hasSchedule = scheduleInfo.hasDateMatch && scheduleInfo.entries.length > 0;
    if (!hasSchedule && !scheduleInfo.scheduleHref) return;

    this.canvas.addSectionTitle("Schedule Information");
    this.canvas.addParagraph(scheduleInfo.message, 8.5, 3);

    if (hasSchedule) {
      this.renderScheduleTable(scheduleInfo.entries);
    }

    if (scheduleInfo.scheduleHref) {
      this.canvas.addParagraph(`Full schedule: ${SITE_URL}${scheduleInfo.scheduleHref}`, 7.5);
    }
    if (scheduleInfo.scheduleFallbackNote) {
      this.canvas.addParagraph(scheduleInfo.scheduleFallbackNote, 7.5, 2);
    }
  }

  addPremiumShipsSummary(plan: CruiseDayPlan): void {
    const { shipsSummary, shipsInPort } = plan;
    if (!shipsSummary && shipsInPort.length === 0) return;

    this.canvas.addSectionTitle("Ships in Port Summary");
    if (!shipsSummary) {
      this.canvas.addParagraph(
        "No verified ship schedule for this date yet. Confirm your ship's published all-aboard time before booking independent excursions.",
        8.5,
        3,
      );
      return;
    }

    this.canvas.addSectionCard(() => {
      this.canvas.addParagraph(
        `${shipsSummary.crowdLevel} — ${shipsSummary.shipCount} ship${shipsSummary.shipCount === 1 ? "" : "s"} · ~${shipsSummary.estimatedPassengers.toLocaleString()} passengers`,
        8.5,
        2,
      );
      this.canvas.addParagraph(shipsSummary.planningNote, 8, 2);
      if (shipsSummary.busiestShip) {
        this.canvas.addParagraph(
          `Largest call: ${shipsSummary.busiestShip.name} (~${shipsSummary.busiestShip.passengers.toLocaleString()} passengers)`,
          8,
          2,
        );
      }
    });

    if (shipsInPort.length > 0) {
      this.canvas.addBulletList(
        shipsInPort.map(
          (ship) =>
            `${ship.ship} · ${ship.cruiseLine} · ${ship.arrival}–${ship.departure} · ${ship.passengers} pax`,
        ),
      );
    }
  }

  addExcursionCta(plan: CruiseDayPlan): void {
    this.canvas.addSpacer(2);
    this.canvas.addCtaButton("View Excursion Options →", getExcursionCtaUrl(plan));
  }

  addPremiumPortSections(plan: CruiseDayPlan): void {
    this.addPremiumPassengerSnapshot(plan);
    this.addPremiumExcursionBlock(plan);
    this.addPremiumItinerary(plan);
    this.addPremiumReturnAdvice(plan);
    this.addPremiumSchedule(plan);
    this.addPremiumShipsSummary(plan);
    this.addExcursionCta(plan);
  }

  addSinglePortSections(plan: CruiseDayPlan): void {
    this.addPremiumPassengerSnapshot(plan);
    this.addPremiumExcursionBlock(plan);
    this.addPremiumItinerary(plan);
    this.addPremiumReturnAdvice(plan);
    this.addPremiumSchedule(plan);
    this.addPremiumShipsSummary(plan);
    this.addExcursionCta(plan);
  }

  private renderScheduleTable(entries: CruiseDayPlan["scheduleInfo"]["entries"]): void {
    const colWidths = [42, 32, 22, 22, 24];
    const headers = ["Ship", "Line", "Arrival", "Departure", "In port"];
    let x = MARGIN;
    const { doc } = this.canvas;

    this.canvas.ensureSpace(12 + entries.length * 6);
    doc.setFillColor(240, 245, 250);
    doc.roundedRect(MARGIN, this.canvas.y - 4, CONTENT_WIDTH, 8, 1.5, 1.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...MUTED_RGB);
    for (let i = 0; i < headers.length; i++) {
      doc.text(headers[i], x + 2, this.canvas.y);
      x += colWidths[i];
    }
    this.canvas.y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(40, 40, 40);
    for (const entry of entries) {
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
        doc.text(clipped, x + 2, this.canvas.y);
        x += colWidths[i];
      }
      this.canvas.y += 5.5;
    }
    this.canvas.y += 4;
  }
}

class CruiseDayPlanPdfBuilder {
  private canvas: PdfCanvas;
  private sections: PortPlanPdfSections;

  constructor(private plan: CruiseDayPlan) {
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.canvas = new PdfCanvas(doc);
    this.sections = new PortPlanPdfSections(this.canvas);
    this.drawSinglePortCover();
    this.canvas.setPageHeader("port", plan.portName);
  }

  private drawSinglePortCover(): void {
    const { plan } = this;
    const { doc } = this.canvas;
    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 52, "F");
    doc.setFillColor(...ACCENT_RGB);
    doc.rect(0, 48, PAGE_WIDTH, 8, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 12);

    doc.setFontSize(22);
    doc.text("Your Caribbean Cruise Planner", MARGIN, 26);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text(plan.portName, MARGIN, 36);

    doc.setFontSize(9);
    doc.text(
      `${plan.displayDate} · ${interestLabels(plan.interests)} · ${activityLevelLabel(plan.activityLevel)} activity`,
      MARGIN,
      44,
    );

    this.canvas.y = 64;
    this.canvas.addParagraph(
      "A personalised shore-day guide with excursion picks, itinerary timing, and return-to-ship advice.",
      9,
    );
  }

  build(): Blob {
    this.sections.addSinglePortSections(this.plan);
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
      this.sections.addPremiumPortSections(plan);
    }

    this.drawTableOfContents();
    this.drawAllFooters();
    return this.canvas.doc.output("blob");
  }

  private drawCoverPage(): void {
    const { input, canvas } = this;
    const { doc } = canvas;
    const sailingLabel =
      input.sailingMonth && input.sailingYear
        ? `${input.sailingMonth} ${input.sailingYear}`
        : input.sailingMonth ?? "Your sailing dates";

    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 78, "F");
    doc.setFillColor(...ACCENT_RGB);
    doc.rect(0, 72, PAGE_WIDTH, 12, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 14);

    doc.setFontSize(26);
    doc.text("Your Caribbean", MARGIN, 32);
    doc.text("Cruise Planner", MARGIN, 44);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    if (input.cruiseLineName) {
      doc.text(`Cruise line: ${input.cruiseLineName}`, MARGIN, 56);
    }
    if (input.shipName) {
      doc.text(`Ship: ${input.shipName}`, MARGIN, input.cruiseLineName ? 62 : 56);
    }
    const sailingY = input.cruiseLineName && input.shipName ? 68 : input.cruiseLineName || input.shipName ? 62 : 56;
    doc.text(`Sailing: ${sailingLabel}`, MARGIN, sailingY);

    canvas.resetY(92);
    canvas.setPageHeader("none");

    canvas.addSectionCard(() => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED_RGB);
      doc.text("TRAVELLER PROFILE", MARGIN + 4, canvas.y);
      canvas.y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(30, 30, 30);
      doc.text(input.travellerTypeLabels.join(" · "), MARGIN + 4, canvas.y);
      canvas.y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED_RGB);
      doc.text("ACTIVITY LEVEL", MARGIN + 4, canvas.y);
      canvas.y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(30, 30, 30);
      doc.text(input.fitnessLevelLabel, MARGIN + 4, canvas.y);
    });

    canvas.addSpacer(4);
    canvas.addSectionTitle("Your Ports");
    for (let i = 0; i < input.portPlans.length; i++) {
      const plan = input.portPlans[i];
      canvas.ensureSpace(8);
      doc.setFillColor(...ACCENT_RGB);
      doc.circle(MARGIN + 2, canvas.y - 1.5, 2.5, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 2, canvas.y, { align: "center" });
      doc.setTextColor(30, 30, 30);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(plan.portName, MARGIN + 8, canvas.y);
      doc.setFontSize(8);
      doc.setTextColor(...MUTED_RGB);
      doc.text(plan.portInformation.region, MARGIN + 8, canvas.y + 4);
      canvas.y += 10;
    }

    canvas.addSpacer(4);
    canvas.addParagraph(
      "Your personalised guide to every port on this itinerary — excursion picks, day plans, return-to-ship advice, and schedule context.",
      9,
      3,
    );

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED_RGB);
    canvas.ensureSpace(8);
    doc.text(`Prepared by ${SITE_NAME}`, MARGIN, FOOTER_Y - 18);
  }

  private drawPortSectionHeader(plan: CruiseDayPlan): void {
    const { doc } = this.canvas;
    const { recommendedExcursions: rec } = plan;

    doc.setFillColor(...BRAND_RGB);
    doc.rect(0, 0, PAGE_WIDTH, 28, "F");
    doc.setFillColor(...ACCENT_RGB);
    doc.rect(0, 24, PAGE_WIDTH, 6, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(SITE_NAME.toUpperCase(), MARGIN, 9);

    doc.setFontSize(18);
    doc.text(plan.portName, MARGIN, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(`${plan.displayDate} · ${plan.portInformation.region}`, MARGIN, 24);

    this.canvas.addMatchBadge(rec.matchLabel, rec.matchScore, PAGE_WIDTH - MARGIN - 54, 18);

    this.canvas.resetY(36);
  }

  private drawTableOfContents(): void {
    const { doc } = this.canvas;
    doc.setPage(2);
    this.canvas.pageNumber = 2;
    this.canvas.resetY(MARGIN + 4);

    doc.setFillColor(...SAND_RGB);
    doc.roundedRect(MARGIN, this.canvas.y - 6, CONTENT_WIDTH, 18, 3, 3, "F");
    doc.setTextColor(...BRAND_RGB);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Table of Contents", MARGIN + 4, this.canvas.y + 4);
    this.canvas.y += 22;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    for (let i = 0; i < this.tocEntries.length; i++) {
      const entry = this.tocEntries[i];
      this.canvas.ensureSpace(10);
      const rowY = this.canvas.y;

      doc.setFillColor(...ACCENT_RGB);
      doc.circle(MARGIN + 2, rowY - 1.5, 2.2, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 2, rowY, { align: "center" });

      doc.setTextColor(35, 35, 35);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(entry.portName, MARGIN + 8, rowY);

      const pageText = String(entry.page);
      doc.text(pageText, PAGE_WIDTH - MARGIN, rowY, { align: "right" });

      const nameWidth = doc.getTextWidth(entry.portName) + MARGIN + 10;
      const pageWidth = doc.getTextWidth(pageText) + 4;
      const dotsStart = nameWidth + 2;
      const dotsEnd = PAGE_WIDTH - MARGIN - pageWidth - 2;
      if (dotsEnd > dotsStart) {
        doc.setTextColor(190, 190, 190);
        doc.setFontSize(8);
        let dotX = dotsStart;
        while (dotX < dotsEnd) {
          doc.text(".", dotX, rowY);
          dotX += 1.8;
        }
      }

      doc.setDrawColor(...CARD_BORDER);
      doc.line(MARGIN, rowY + 3, PAGE_WIDTH - MARGIN, rowY + 3);
      this.canvas.y += 10;
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

/** Build combined PDF blob without browser guard (for smoke tests). */
export function buildCombinedCruisePlannerPdfBlob(input: CombinedCruisePlannerInput): Blob {
  return new CombinedCruisePlannerPdfBuilder(input).build();
}

/** Build single-port PDF blob without browser guard (for smoke tests). */
export function buildCruiseDayPlanPdfBlob(plan: CruiseDayPlan): Blob {
  return new CruiseDayPlanPdfBuilder(plan).build();
}

/** Generate an A4 PDF blob from a cruise day plan (client-side). */
export async function generateCruiseDayPlanPdf(plan: CruiseDayPlan): Promise<Blob | null> {
  if (typeof window === "undefined") return null;
  try {
    return buildCruiseDayPlanPdfBlob(plan);
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
    return buildCombinedCruisePlannerPdfBlob(input);
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
