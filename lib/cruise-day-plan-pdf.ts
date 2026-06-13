import { jsPDF } from "jspdf";
import type { CombinedCruisePlannerInput, CruiseDayPlan } from "@/lib/cruise-day-plan";
import { cruiseDayPlanActivityLevels, cruiseDayPlanInterests } from "@/lib/cruise-day-plan";
import { getSpecialistExcursionUrl } from "@/lib/specialist-links";
import { loadPdfBrandAssets, type PdfBrandAssets } from "@/lib/pdf-brand-assets";
import {
  drawBrandedFooter,
  drawCardSurface,
  drawDisplayTitle,
  drawEyebrowLabel,
  drawGradientCardSurface,
  drawHeroImageBand,
  drawMatchBadge,
  drawPrimaryCta,
  drawSiteWordmark,
  PDF_CONTENT_WIDTH,
  PDF_PAGE,
} from "@/lib/pdf-brand-layout";
import { PDF_BRAND } from "@/lib/pdf-brand-tokens";

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

const { margin: MARGIN, width: PAGE_WIDTH, height: PAGE_HEIGHT, footerY: FOOTER_Y } = PDF_PAGE;
const CONTENT_WIDTH = PDF_CONTENT_WIDTH;
const C = PDF_BRAND.colors;
const F = PDF_BRAND.fonts;

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
  return path.startsWith("http") ? path : `${PDF_BRAND.siteUrl}${path}`;
}

class PdfCanvas {
  y: number = MARGIN;
  pageNumber = 1;

  constructor(
    readonly doc: jsPDF,
    readonly assets: PdfBrandAssets,
  ) {}

  ensureSpace(needed: number): void {
    if (this.y + needed <= FOOTER_Y - 10) return;
    this.drawFooter();
    this.doc.addPage();
    this.pageNumber += 1;
    this.y = MARGIN;
  }

  drawFooter(): void {
    drawBrandedFooter(this.doc, this.pageNumber);
  }

  addSpacer(mm = 4): void {
    this.y += mm;
  }

  addSectionTitle(title: string): void {
    this.ensureSpace(14);
    const { doc } = this;
    doc.setTextColor(...C.caribbean800);
    doc.setFont(F.display, "bold");
    doc.setFontSize(12);
    doc.text(title, MARGIN, this.y);
    this.y += 7;
  }

  addParagraph(text: string, fontSize = 9, maxLines?: number): void {
    const { doc } = this;
    doc.setTextColor(...C.gray700);
    doc.setFont(F.body, "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    const visible = maxLines ? lines.slice(0, maxLines) : lines;
    const blockHeight = visible.length * (fontSize * 0.42) + 2;
    this.ensureSpace(blockHeight);
    doc.text(visible, MARGIN, this.y);
    this.y += blockHeight + 3;
  }

  addMetaChips(chips: { label: string; value: string }[]): void {
    const chipHeight = 10;
    const gap = 3;
    let x = MARGIN;
    let row = 0;
    const { doc } = this;

    this.ensureSpace(chipHeight + 4);

    for (const chip of chips) {
      doc.setFont(F.body, "bold");
      doc.setFontSize(6.5);
      const labelWidth = doc.getTextWidth(chip.label.toUpperCase()) + 3;
      doc.setFont(F.body, "normal");
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
      doc.setDrawColor(...C.cardBorder);
      doc.setFillColor(...C.white);
      doc.roundedRect(x, chipY - 5, chipWidth, chipHeight, 2, 2, "FD");

      doc.setTextColor(...C.gray600);
      doc.setFont(F.body, "bold");
      doc.setFontSize(6.5);
      doc.text(chip.label.toUpperCase(), x + 3, chipY);

      doc.setTextColor(...C.gray900);
      doc.setFont(F.body, "normal");
      doc.setFontSize(7.5);
      doc.text(chip.value, x + 3 + labelWidth, chipY);

      x += chipWidth + gap;
    }

    this.y += (row + 1) * (chipHeight + gap) + 2;
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

      this.doc.setDrawColor(...C.cardBorder);
      this.doc.setFillColor(...C.white);
      this.doc.roundedRect(x, y - 5, colWidth, rowHeight - 2, 2, 2, "FD");

      this.doc.setTextColor(...C.gray600);
      this.doc.setFont(F.body, "bold");
      this.doc.setFontSize(6.5);
      this.doc.text(items[i].label.toUpperCase(), x + 3, y);

      this.doc.setTextColor(...C.gray900);
      this.doc.setFont(F.body, "normal");
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
      this.doc.setTextColor(...C.gray700);
      this.doc.setFont(F.body, "normal");
      this.doc.setFontSize(8.5);
      this.doc.setFillColor(...C.caribbean600);
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

      this.doc.setFillColor(...C.caribbean700);
      this.doc.roundedRect(MARGIN, this.y - 4, 22, 7, 1.5, 1.5, "F");
      this.doc.setTextColor(...C.white);
      this.doc.setFont(F.body, "bold");
      this.doc.setFontSize(7);
      this.doc.text(step.time, MARGIN + 11, this.y, { align: "center" });

      this.doc.setTextColor(...C.gray900);
      this.doc.setFont(F.body, "normal");
      this.doc.setFontSize(8.5);
      this.doc.text(activityLines, MARGIN + 26, this.y);

      this.y += blockHeight;
    }
    this.y += 2;
  }

  getCurrentPage(): number {
    return this.doc.getNumberOfPages();
  }

  resetY(offset: number = MARGIN): void {
    this.y = offset;
  }
}

class PortPlanPdfSections {
  constructor(private canvas: PdfCanvas) {}

  addPassengerSnapshot(plan: CruiseDayPlan): void {
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

  addRecommendedExcursion(plan: CruiseDayPlan): void {
    const { recommendedExcursions: rec } = plan;
    const { doc } = this.canvas;

    this.canvas.addSectionTitle("Recommended Excursion");
    this.canvas.ensureSpace(42);

    const cardTop = this.canvas.y;
    drawGradientCardSurface(doc, MARGIN, cardTop - 2, CONTENT_WIDTH, 38);

    doc.setTextColor(...C.caribbean800);
    doc.setFont(F.body, "bold");
    doc.setFontSize(7);
    doc.text("TOP PICK FOR YOU", MARGIN + 4, cardTop + 3);

    drawMatchBadge(doc, rec.matchLabel, rec.matchScore, PAGE_WIDTH - MARGIN - 52, cardTop + 3);

    doc.setTextColor(...C.gray900);
    doc.setFont(F.body, "bold");
    doc.setFontSize(13);
    doc.text(rec.primary.name, MARGIN + 4, cardTop + 11);

    doc.setFont(F.body, "normal");
    doc.setFontSize(8.5);
    const descLines = doc.splitTextToSize(rec.primary.description, CONTENT_WIDTH - 8);
    doc.text(descLines.slice(0, 2), MARGIN + 4, cardTop + 17);

    doc.setFontSize(7.5);
    doc.setTextColor(...C.gray600);
    doc.text(rec.primary.type, MARGIN + 4, cardTop + 28);

    this.canvas.y = cardTop + 42;
    this.canvas.addSpacer(2);

    this.canvas.addMetaChips([
      { label: "Duration", value: rec.primary.duration },
      { label: "Activity", value: activityLevelLabel(plan.activityLevel) },
      { label: "Return", value: plan.returnToShipAdvice.returnLabel },
    ]);
  }

  addMatchReasonsPanel(plan: CruiseDayPlan): void {
    const { recommendedExcursions: rec } = plan;
    if (rec.matchReasons.length === 0) return;

    const { doc } = this.canvas;
    const panelHeight = 14 + rec.matchReasons.length * 6;
    this.canvas.ensureSpace(panelHeight);

    const panelTop = this.canvas.y;
    drawCardSurface(doc, MARGIN, panelTop, CONTENT_WIDTH, panelHeight, C.caribbean50);

    drawEyebrowLabel(doc, "Why this matches", MARGIN + 4, panelTop + 6);
    doc.setFont(F.body, "bold");
    doc.setFontSize(9);
    doc.setTextColor(...C.gray900);
    doc.text(`${rec.matchLabel} because:`, MARGIN + 4, panelTop + 11);

    let reasonY = panelTop + 16;
    for (const reason of rec.matchReasons) {
      doc.setFillColor(...C.caribbean600);
      doc.circle(MARGIN + 5, reasonY - 1, 0.8, "F");
      doc.setFont(F.body, "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...C.gray700);
      const lines = doc.splitTextToSize(reason, CONTENT_WIDTH - 12);
      doc.text(lines.slice(0, 2), MARGIN + 8, reasonY);
      reasonY += lines.length > 1 ? 8 : 5;
    }

    this.canvas.y = panelTop + panelHeight + 4;
  }

  addPortDayOutline(plan: CruiseDayPlan): void {
    this.canvas.addSectionTitle("Port Day Outline");
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

  addScheduleSummary(plan: CruiseDayPlan): void {
    const { scheduleInfo } = plan;
    const hasSchedule = scheduleInfo.hasDateMatch && scheduleInfo.entries.length > 0;
    if (!hasSchedule && !scheduleInfo.scheduleHref) return;

    this.canvas.addSectionTitle("Schedule Summary");
    this.canvas.addParagraph(scheduleInfo.message, 8.5, 3);

    if (hasSchedule) {
      this.renderScheduleTable(scheduleInfo.entries);
    }

    if (scheduleInfo.scheduleHref) {
      this.canvas.addParagraph(`Full schedule: ${PDF_BRAND.siteUrl}${scheduleInfo.scheduleHref}`, 7.5);
    }
    if (scheduleInfo.scheduleFallbackNote) {
      this.canvas.addParagraph(scheduleInfo.scheduleFallbackNote, 7.5, 2);
    }
  }

  addExcursionCta(plan: CruiseDayPlan): void {
    this.canvas.addSpacer(2);
    this.canvas.ensureSpace(18);
    this.canvas.y = drawPrimaryCta(
      this.canvas.doc,
      "View Excursion Options →",
      getExcursionCtaUrl(plan),
      MARGIN,
      this.canvas.y,
      CONTENT_WIDTH,
    );
  }

  addPortSections(plan: CruiseDayPlan): void {
    this.addPassengerSnapshot(plan);
    this.addRecommendedExcursion(plan);
    this.addMatchReasonsPanel(plan);
    this.addPortDayOutline(plan);
    this.addScheduleSummary(plan);
    this.addExcursionCta(plan);
  }

  private renderScheduleTable(entries: CruiseDayPlan["scheduleInfo"]["entries"]): void {
    const colWidths = [42, 32, 22, 22, 24];
    const headers = ["Ship", "Line", "Arrival", "Departure", "In port"];
    let x = MARGIN;
    const { doc } = this.canvas;

    this.canvas.ensureSpace(12 + entries.length * 6);
    doc.setFillColor(...C.caribbean50);
    doc.roundedRect(MARGIN, this.canvas.y - 4, CONTENT_WIDTH, 8, 1.5, 1.5, "F");
    doc.setFont(F.body, "bold");
    doc.setFontSize(7);
    doc.setTextColor(...C.gray600);
    for (let i = 0; i < headers.length; i++) {
      doc.text(headers[i], x + 2, this.canvas.y);
      x += colWidths[i];
    }
    this.canvas.y += 7;

    doc.setFont(F.body, "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...C.gray900);
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

  constructor(
    private plan: CruiseDayPlan,
    assets: PdfBrandAssets,
  ) {
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.canvas = new PdfCanvas(doc, assets);
    this.sections = new PortPlanPdfSections(this.canvas);
    this.drawSinglePortCover();
  }

  private drawSinglePortCover(): void {
    const { plan, canvas } = this;
    const { doc } = canvas;
    const heroHeight = 58;

    drawHeroImageBand(doc, canvas.assets, 0, 0, PAGE_WIDTH, heroHeight);
    drawSiteWordmark(doc, MARGIN, 14);

    drawDisplayTitle(doc, "Your Personal", MARGIN, 30, 18);
    drawDisplayTitle(doc, "Cruise Planner", MARGIN, 38, 18);

    doc.setFont(F.body, "normal");
    doc.setFontSize(12);
    doc.setTextColor(...C.white);
    doc.text(plan.portName, MARGIN, 48);

    doc.setFontSize(8.5);
    doc.setTextColor(230, 247, 251);
    doc.text(
      `${plan.displayDate} · ${interestLabels(plan.interests)} · ${activityLevelLabel(plan.activityLevel)} activity`,
      MARGIN,
      54,
    );

    canvas.y = heroHeight + 8;
    canvas.addParagraph(
      "A personalised shore-day guide with excursion picks, itinerary timing, and return-to-ship advice.",
      9,
    );
  }

  build(): Blob {
    this.sections.addPortSections(this.plan);
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

  constructor(
    private input: CombinedCruisePlannerInput,
    assets: PdfBrandAssets,
  ) {
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    this.canvas = new PdfCanvas(doc, assets);
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
      this.drawPortHeroBand(plan);
      this.sections.addPortSections(plan);
    }

    this.drawTableOfContents();
    this.drawAllFooters();
    return this.canvas.doc.output("blob");
  }

  private drawCoverPage(): void {
    const { input, canvas } = this;
    const { doc } = canvas;
    const heroHeight = 72;
    const sailingLabel =
      input.sailingMonth && input.sailingYear
        ? `${input.sailingMonth} ${input.sailingYear}`
        : (input.sailingMonth ?? "Your sailing dates");

    drawHeroImageBand(doc, canvas.assets, 0, 0, PAGE_WIDTH, heroHeight);
    drawSiteWordmark(doc, MARGIN, 16);

    drawDisplayTitle(doc, "Your Personal", MARGIN, 34, 22);
    drawDisplayTitle(doc, "Cruise Planner", MARGIN, 44, 22);

    doc.setFont(F.body, "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(230, 247, 251);
    let metaY = 54;
    if (input.cruiseLineName) {
      doc.text(`Cruise line: ${input.cruiseLineName}`, MARGIN, metaY);
      metaY += 5;
    }
    if (input.shipName) {
      doc.text(`Ship: ${input.shipName}`, MARGIN, metaY);
      metaY += 5;
    }
    doc.text(`Sailing: ${sailingLabel}`, MARGIN, metaY);

    canvas.resetY(heroHeight + 8);

    drawCardSurface(doc, MARGIN, canvas.y, CONTENT_WIDTH, 28, C.caribbean50);
    doc.setFont(F.body, "bold");
    doc.setFontSize(7);
    doc.setTextColor(...C.caribbean800);
    doc.text("TRAVELLER PROFILE", MARGIN + 4, canvas.y + 6);
    doc.setFont(F.body, "normal");
    doc.setFontSize(10);
    doc.setTextColor(...C.gray900);
    doc.text(input.travellerTypeLabels.join(" · "), MARGIN + 4, canvas.y + 12);
    doc.setFont(F.body, "bold");
    doc.setFontSize(7);
    doc.setTextColor(...C.caribbean800);
    doc.text("ACTIVITY LEVEL", MARGIN + 4, canvas.y + 18);
    doc.setFont(F.body, "normal");
    doc.setFontSize(10);
    doc.setTextColor(...C.gray900);
    doc.text(input.fitnessLevelLabel, MARGIN + 4, canvas.y + 24);
    canvas.y += 34;

    canvas.addSectionTitle("Your Ports");
    for (let i = 0; i < input.portPlans.length; i++) {
      const plan = input.portPlans[i];
      canvas.ensureSpace(10);
      doc.setFillColor(...C.caribbean700);
      doc.circle(MARGIN + 2, canvas.y - 1.5, 2.5, "F");
      doc.setTextColor(...C.white);
      doc.setFont(F.body, "bold");
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 2, canvas.y, { align: "center" });
      doc.setTextColor(...C.gray900);
      doc.setFont(F.body, "normal");
      doc.setFontSize(10);
      doc.text(plan.portName, MARGIN + 8, canvas.y);
      doc.setFontSize(8);
      doc.setTextColor(...C.gray600);
      doc.text(plan.portInformation.region, MARGIN + 8, canvas.y + 4);
      canvas.y += 10;
    }

    canvas.addSpacer(2);
    this.drawExcursionSummary();

    canvas.addSpacer(2);
    canvas.addParagraph(
      "Your personalised guide to every port on this itinerary — excursion picks, day plans, return-to-ship advice, and schedule context.",
      9,
      3,
    );
  }

  private drawExcursionSummary(): void {
    const { input, canvas } = this;
    const { doc } = canvas;

    canvas.addSectionTitle("Recommended Excursions");
    for (let i = 0; i < input.portPlans.length; i++) {
      const plan = input.portPlans[i];
      const rec = plan.recommendedExcursions;
      canvas.ensureSpace(14);

      drawCardSurface(doc, MARGIN, canvas.y - 4, CONTENT_WIDTH, 12, C.caribbean50);

      doc.setFillColor(...C.caribbean700);
      doc.circle(MARGIN + 3, canvas.y + 1.5, 2.2, "F");
      doc.setTextColor(...C.white);
      doc.setFont(F.body, "bold");
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 3, canvas.y + 2, { align: "center" });

      doc.setTextColor(...C.gray900);
      doc.setFont(F.body, "bold");
      doc.setFontSize(9);
      doc.text(plan.portName, MARGIN + 8, canvas.y + 1);

      doc.setFont(F.body, "normal");
      doc.setFontSize(8);
      const excursionLine = doc.splitTextToSize(rec.primary.name, CONTENT_WIDTH - 58)[0] ?? rec.primary.name;
      doc.text(excursionLine, MARGIN + 8, canvas.y + 5.5);

      drawMatchBadge(doc, rec.matchLabel, rec.matchScore, PAGE_WIDTH - MARGIN - 52, canvas.y + 3);

      canvas.y += 12;
    }
    canvas.addSpacer(2);
  }

  private drawPortHeroBand(plan: CruiseDayPlan): void {
    const { doc } = this.canvas;
    const { recommendedExcursions: rec } = plan;
    const bandHeight = 36;

    drawHeroImageBand(doc, this.canvas.assets, 0, 0, PAGE_WIDTH, bandHeight);

    drawEyebrowLabel(doc, plan.portInformation.region, MARGIN, 12);
    doc.setTextColor(...C.white);
    doc.setFont(F.display, "bold");
    doc.setFontSize(20);
    doc.text(plan.portName, MARGIN, 22);

    doc.setFont(F.body, "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(230, 247, 251);
    doc.text(plan.displayDate, MARGIN, 29);

    drawMatchBadge(doc, rec.matchLabel, rec.matchScore, PAGE_WIDTH - MARGIN - 54, 22);

    this.canvas.resetY(bandHeight + 6);
  }

  private drawTableOfContents(): void {
    const { doc } = this.canvas;
    doc.setPage(2);
    this.canvas.pageNumber = 2;
    this.canvas.resetY(MARGIN);

    drawCardSurface(doc, MARGIN, this.canvas.y, CONTENT_WIDTH, 16, C.caribbean50);
    doc.setTextColor(...C.caribbean800);
    doc.setFont(F.display, "bold");
    doc.setFontSize(18);
    doc.text("Table of Contents", MARGIN + 4, this.canvas.y + 10);
    this.canvas.y += 22;

    doc.setFont(F.body, "normal");
    doc.setFontSize(10);

    for (let i = 0; i < this.tocEntries.length; i++) {
      const entry = this.tocEntries[i];
      this.canvas.ensureSpace(12);
      const rowY = this.canvas.y;

      drawCardSurface(doc, MARGIN, rowY - 5, CONTENT_WIDTH, 10, C.white);

      doc.setFillColor(...C.caribbean700);
      doc.circle(MARGIN + 5, rowY, 2.2, "F");
      doc.setTextColor(...C.white);
      doc.setFont(F.body, "bold");
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 5, rowY + 0.5, { align: "center" });

      doc.setTextColor(...C.gray900);
      doc.setFont(F.body, "normal");
      doc.setFontSize(10);
      doc.text(entry.portName, MARGIN + 11, rowY + 0.5);

      const pageText = String(entry.page);
      doc.text(pageText, PAGE_WIDTH - MARGIN - 4, rowY + 0.5, { align: "right" });

      const nameWidth = doc.getTextWidth(entry.portName) + MARGIN + 14;
      const pageWidth = doc.getTextWidth(pageText) + 6;
      const dotsStart = nameWidth + 2;
      const dotsEnd = PAGE_WIDTH - MARGIN - pageWidth - 6;
      if (dotsEnd > dotsStart) {
        doc.setTextColor(190, 190, 190);
        doc.setFontSize(8);
        let dotX = dotsStart;
        while (dotX < dotsEnd) {
          doc.text(".", dotX, rowY + 0.5);
          dotX += 1.8;
        }
      }

      this.canvas.y += 12;
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
export function buildCombinedCruisePlannerPdfBlob(
  input: CombinedCruisePlannerInput,
  assets: PdfBrandAssets = {},
): Blob {
  return new CombinedCruisePlannerPdfBuilder(input, assets).build();
}

/** Build single-port PDF blob without browser guard (for smoke tests). */
export function buildCruiseDayPlanPdfBlob(plan: CruiseDayPlan, assets: PdfBrandAssets = {}): Blob {
  return new CruiseDayPlanPdfBuilder(plan, assets).build();
}

/** Generate an A4 PDF blob from a cruise day plan (client-side). */
export async function generateCruiseDayPlanPdf(plan: CruiseDayPlan): Promise<Blob | null> {
  if (typeof window === "undefined") return null;
  try {
    const assets = await loadPdfBrandAssets();
    return buildCruiseDayPlanPdfBlob(plan, assets);
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
    const assets = await loadPdfBrandAssets();
    return buildCombinedCruisePlannerPdfBlob(input, assets);
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
