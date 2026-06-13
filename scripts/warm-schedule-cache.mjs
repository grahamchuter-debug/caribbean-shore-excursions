#!/usr/bin/env node
/**
 * Fetch CruiseTimetables pages into data/schedule-cache/{slug}/ with long delays to avoid 429.
 * Usage: node scripts/warm-schedule-cache.mjs tortola [delayMs]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCES_DIR = path.join(ROOT, "data/schedule-sources");
const DELAY_MS = Number.parseInt(process.argv[3] ?? "45000", 10);

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
};

function normalizeUrl(raw) {
  let url = raw.trim();
  if (!url.startsWith("http")) url = `https://${url.replace(/^\/\//, "")}`;
  if (!url.startsWith("https://www.")) url = url.replace("https://", "https://www.");
  return url;
}

function parseCsv(filePath) {
  const lines = fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const urls = [];
  for (const line of lines.slice(1)) {
    const comma = line.indexOf(",");
    if (comma === -1) continue;
    const monthLabel = line.slice(0, comma).trim();
    const rawUrl = line.slice(comma + 1).trim();
    if (!/^https?:\/\//i.test(rawUrl)) continue;
    urls.push({ monthLabel, url: normalizeUrl(rawUrl) });
  }
  return urls;
}

function cacheFileName(url) {
  const match = url.match(/-([a-z]{3}\d{4})(?:\?|$)/i);
  if (match) return `${match[1]}.txt`;
  const offset = url.match(/offset=(\d+)/i)?.[1];
  const base = url.match(/visiting[^?]+/)?.[0] ?? "page";
  return `${base.replace(/[^\w-]/g, "")}-offset-${offset ?? "0"}.txt`;
}

async function fetchHtml(url, attempt = 1) {
  const res = await fetch(url, { headers: FETCH_HEADERS });
  if (res.status === 429 && attempt <= 10) {
    const waitMs = attempt * 10000;
    console.log(`  429 on ${url}, wait ${waitMs / 1000}s (attempt ${attempt})`);
    await new Promise((r) => setTimeout(r, waitMs));
    return fetchHtml(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function discoverPageUrls(firstHtml, baseUrl) {
  const urls = new Set([baseUrl]);
  for (const m of firstHtml.matchAll(/pageit\('([^']+)'\)/g)) {
    const rel = m[1];
    if (rel.includes("offset=")) {
      urls.add(
        rel.startsWith("http")
          ? rel
          : `https://www.cruisetimetables.com/${rel.replace(/^\//, "")}`,
      );
    }
  }
  return [...urls];
}

async function cacheUrl(cacheDir, url) {
  const cachePath = path.join(cacheDir, cacheFileName(url));
  if (fs.existsSync(cachePath)) {
    console.log(`  skip (exists) ${cacheFileName(url)}`);
    return fs.readFileSync(cachePath, "utf8");
  }
  const html = await fetchHtml(url);
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(cachePath, html);
  console.log(`  saved ${cacheFileName(url)} (${html.length} bytes)`);
  return html;
}

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/warm-schedule-cache.mjs <port-slug> [delayMs]");
  process.exit(1);
}

const csvPath = path.join(SOURCES_DIR, `${slug}.csv`);
const cacheDir = path.join(ROOT, "data/schedule-cache", slug);
const monthUrls = parseCsv(csvPath);

console.log(`Warming cache for ${slug}: ${monthUrls.length} months, ${DELAY_MS}ms delay`);

for (const { monthLabel, url } of monthUrls) {
  console.log(`\n${monthLabel}`);
  try {
    const firstHtml = await cacheUrl(cacheDir, url);
    const extraUrls = discoverPageUrls(firstHtml, url).filter((u) => u !== url);
    for (const extraUrl of extraUrls) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
      await cacheUrl(cacheDir, extraUrl);
    }
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log("\nDone.");
