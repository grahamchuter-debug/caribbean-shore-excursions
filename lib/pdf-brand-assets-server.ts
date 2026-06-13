import { readFileSync } from "node:fs";
import { join } from "node:path";
import { HERO_IMAGE } from "@/lib/hero-image";
import type { PdfBrandAssets } from "@/lib/pdf-brand-assets";

function toDataUrl(buffer: Buffer, mime = "image/png"): string {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

/** Load brand assets from disk (Node smoke tests / sample generation). */
export function loadPdfBrandAssetsFromDisk(projectRoot: string): PdfBrandAssets {
  try {
    const heroPath = join(projectRoot, "public", HERO_IMAGE.src.replace(/^\//, ""));
    const buffer = readFileSync(heroPath);
    return { heroImageDataUrl: toDataUrl(buffer) };
  } catch {
    return {};
  }
}
