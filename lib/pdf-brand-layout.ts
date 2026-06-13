import type { jsPDF } from "jspdf";
import type { MatchTier } from "@/lib/excursion-finder-engine";
import { MATCH_BADGE_COLORS, PDF_BRAND, type Rgb } from "@/lib/pdf-brand-tokens";
import type { PdfBrandAssets } from "@/lib/pdf-brand-assets";

export const PDF_PAGE = {
  width: 210,
  height: 297,
  margin: 16,
  footerY: 287,
} as const;

export const PDF_CONTENT_WIDTH = PDF_PAGE.width - PDF_PAGE.margin * 2;

export function drawHeroGradient(doc: jsPDF, x: number, y: number, w: number, h: number): void {
  const steps = 10;
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const r = Math.round(0 + (64 - 0) * t);
    const g = Math.round(119 + (180 - 119) * t);
    const b = Math.round(182 + (216 - 182) * t);
    doc.setFillColor(r, g, b);
    doc.rect(x + (w / steps) * i, y, w / steps + 0.5, h, "F");
  }
}

export function drawHeroImageBand(
  doc: jsPDF,
  assets: PdfBrandAssets,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  if (assets.heroImageDataUrl) {
    try {
      doc.addImage(assets.heroImageDataUrl, "PNG", x, y, w, h, undefined, "FAST");
    } catch {
      drawHeroGradient(doc, x, y, w, h);
    }
  } else {
    drawHeroGradient(doc, x, y, w, h);
  }

  const overlaySteps = 6;
  for (let i = 0; i < overlaySteps; i++) {
    const t = i / (overlaySteps - 1);
    const alphaMix = 0.55 + t * 0.35;
    const base = PDF_BRAND.colors.caribbean900;
    const blend = PDF_BRAND.colors.caribbean700;
    const r = Math.round(base[0] * alphaMix + blend[0] * (1 - alphaMix));
    const g = Math.round(base[1] * alphaMix + blend[1] * (1 - alphaMix));
    const b = Math.round(base[2] * alphaMix + blend[2] * (1 - alphaMix));
    doc.setFillColor(r, g, b);
    doc.rect(x + (w / overlaySteps) * i, y, w / overlaySteps + 0.5, h, "F");
  }
}

export function drawSiteLogoMark(doc: jsPDF, x: number, y: number, size = 10): void {
  drawHeroGradient(doc, x, y - size + 2, size, size);
  doc.setFillColor(...PDF_BRAND.colors.white);
  doc.circle(x + size / 2, y - size / 2 + 2, size / 2, "F");
  drawHeroGradient(doc, x + 0.8, y - size + 2.8, size - 1.6, size - 1.6);
  doc.setTextColor(...PDF_BRAND.colors.white);
  doc.setFont(PDF_BRAND.fonts.body, "bold");
  doc.setFontSize(size * 0.38);
  doc.text("CS", x + size / 2, y - size / 2 + 2.8, { align: "center" });
}

export function drawSiteWordmark(doc: jsPDF, x: number, y: number): number {
  drawSiteLogoMark(doc, x, y, 10);
  doc.setTextColor(...PDF_BRAND.colors.white);
  doc.setFont(PDF_BRAND.fonts.display, "bold");
  doc.setFontSize(11);
  doc.text(PDF_BRAND.siteShortLine, x + 13, y - 1.5);
  doc.setFont(PDF_BRAND.fonts.body, "normal");
  doc.setFontSize(7);
  doc.setTextColor(230, 247, 251);
  doc.text(PDF_BRAND.siteTagline, x + 13, y + 2.5);
  return y + 6;
}

export function drawEyebrowLabel(doc: jsPDF, text: string, x: number, y: number): void {
  doc.setFont(PDF_BRAND.fonts.body, "bold");
  doc.setFontSize(7);
  doc.setTextColor(...PDF_BRAND.colors.caribbean800);
  doc.text(text.toUpperCase(), x, y);
}

export function drawDisplayTitle(doc: jsPDF, text: string, x: number, y: number, size = 22): void {
  doc.setFont(PDF_BRAND.fonts.display, "bold");
  doc.setFontSize(size);
  doc.setTextColor(...PDF_BRAND.colors.white);
  doc.text(text, x, y);
}

export function drawMatchBadge(
  doc: jsPDF,
  label: MatchTier,
  score: number,
  x: number,
  y: number,
): number {
  const rgb = MATCH_BADGE_COLORS[label] ?? MATCH_BADGE_COLORS["Good Match"];
  const text = `${label} · ${score}/100`;
  doc.setFont(PDF_BRAND.fonts.body, "bold");
  doc.setFontSize(7);
  const width = doc.getTextWidth(text) + 8;
  doc.setFillColor(...rgb);
  doc.roundedRect(x, y - 4.5, width, 7, 2, 2, "F");
  doc.setTextColor(...PDF_BRAND.colors.white);
  doc.text(text, x + 4, y);
  return width;
}

export function drawCardSurface(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  fill: Rgb = PDF_BRAND.colors.caribbean50,
): void {
  doc.setDrawColor(...PDF_BRAND.colors.cardBorder);
  doc.setFillColor(...fill);
  doc.roundedRect(x, y, w, h, 3, 3, "FD");
}

export function drawGradientCardSurface(doc: jsPDF, x: number, y: number, w: number, h: number): void {
  doc.setDrawColor(...PDF_BRAND.colors.caribbean100);
  doc.setFillColor(...PDF_BRAND.colors.caribbean50);
  doc.roundedRect(x, y, w, h, 3, 3, "FD");
  doc.setFillColor(248, 252, 255);
  doc.triangle(x, y, x + w, y, x, y + h * 0.45, "F");
}

export function drawBrandedFooter(doc: jsPDF, pageNumber: number): void {
  const y = PDF_PAGE.footerY;
  doc.setDrawColor(...PDF_BRAND.colors.caribbean100);
  doc.setLineWidth(0.3);
  doc.line(PDF_PAGE.margin, y - 6, PDF_PAGE.width - PDF_PAGE.margin, y - 6);

  doc.setFont(PDF_BRAND.fonts.body, "bold");
  doc.setFontSize(6.5);
  doc.setTextColor(...PDF_BRAND.colors.caribbean800);
  doc.text(PDF_BRAND.siteName, PDF_PAGE.margin, y - 1.5);

  doc.setFont(PDF_BRAND.fonts.body, "normal");
  doc.setFontSize(6.5);
  doc.setTextColor(...PDF_BRAND.colors.gray600);
  doc.text(PDF_BRAND.siteUrl.replace("https://", ""), PDF_PAGE.width / 2, y - 1.5, {
    align: "center",
  });
  doc.text(`Page ${pageNumber}`, PDF_PAGE.width - PDF_PAGE.margin, y - 1.5, { align: "right" });

  doc.setFontSize(6);
  doc.text(PDF_BRAND.disclaimer, PDF_PAGE.margin, y + 3.5);
}

export function drawPrimaryCta(doc: jsPDF, label: string, url: string, x: number, y: number, w: number): number {
  const h = 12;
  doc.setFillColor(...PDF_BRAND.colors.caribbean700);
  doc.roundedRect(x, y, w, h, 3, 3, "F");
  doc.setTextColor(...PDF_BRAND.colors.white);
  doc.setFont(PDF_BRAND.fonts.body, "bold");
  doc.setFontSize(9.5);
  doc.textWithLink(label, x + w / 2, y + 5, { align: "center", url });
  doc.setFont(PDF_BRAND.fonts.body, "normal");
  doc.setFontSize(6.5);
  doc.text(url.replace("https://", ""), x + w / 2, y + 9, { align: "center" });
  return y + h + 4;
}
