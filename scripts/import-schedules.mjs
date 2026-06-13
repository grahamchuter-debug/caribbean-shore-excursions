#!/usr/bin/env node
/**
 * Import verified cruise ship schedules from monthly CSV source URLs.
 * Usage: node scripts/import-schedules.mjs [port-slug]
 * Example: node scripts/import-schedules.mjs st-thomas
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCES_DIR = path.join(ROOT, "data/schedule-sources");
const OUTPUT_DIR = path.join(ROOT, "data/imported-schedules");
const CAPACITY_PATH = path.join(ROOT, "data/ship-capacities.json");

const MONTH_MAP = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

const PORT_CONFIG = {
  "st-thomas": {
    name: "St. Thomas",
    itineraryPortRegex:
      /St\.?\s*Thomas,\s*US Virgin Islands\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "ocho-rios": {
    name: "Ocho Rios",
    itineraryPortRegex:
      /Ocho Rios,\s*Jamaica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  tortola: {
    name: "Tortola",
    itineraryPortRegex:
      /Tortola,\s*British Virgin Islands\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
};

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
};

function normalizeUrl(raw) {
  let url = raw.trim();
  if (!url.startsWith("http")) {
    url = `https://${url.replace(/^\/\//, "")}`;
  }
  if (!url.startsWith("https://www.")) {
    url = url.replace("https://", "https://www.");
  }
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
    const url = normalizeUrl(rawUrl);
    urls.push({ monthLabel, url });
  }
  return urls;
}

function normalizeShipKey(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

function formatPassengerCapacity(min, max) {
  const fmt = (n) => n.toLocaleString("en-US");
  return min === max ? fmt(min) : `${fmt(min)} to ${fmt(max)}`;
}

function loadCapacityLookup() {
  if (!fs.existsSync(CAPACITY_PATH)) return null;
  const data = JSON.parse(fs.readFileSync(CAPACITY_PATH, "utf8"));
  const map = new Map();
  for (const ship of data.ships) {
    map.set(normalizeShipKey(ship.name), ship);
  }
  return map;
}

function lookupCapacity(map, shipName) {
  if (!map) return null;
  const key = normalizeShipKey(shipName);
  if (map.has(key)) return map.get(key);
  for (const [storedKey, record] of map) {
    if (storedKey.includes(key) || key.includes(storedKey)) return record;
  }
  return null;
}

function inferCruiseLine(ship) {
  const s = ship.trim();
  if (/^Norwegian\b/i.test(s)) return "Norwegian Cruise Line";
  if (/^Carnival\b/i.test(s)) return "Carnival Cruise Line";
  if (/^Disney\b/i.test(s)) return "Disney Cruise Line";
  if (/^Celebrity\b/i.test(s)) return "Celebrity Cruises";
  if (/^MSC\b/i.test(s)) return "MSC Cruises";
  if (/\bPrincess\b/i.test(s)) return "Princess Cruises";
  if (/\bOf The Seas\b/i.test(s)) return "Royal Caribbean";
  if (/^Star Of The Seas|^Icon Of The Seas|^Wonder Of The Seas|^Harmony Of The Seas/i.test(s)) {
    return "Royal Caribbean";
  }
  if (/^Grandeur Of The Seas|^Rhapsody Of The Seas|^Enchantment Of The Seas/i.test(s)) {
    return "Royal Caribbean";
  }
  if (/^Azamara\b/i.test(s)) return "Azamara";
  if (/^Holland America|^Nieuw Statendam|^Koningsdam/i.test(s)) return "Holland America Line";
  if (/^Viking\b/i.test(s)) return "Viking Ocean Cruises";
  if (/^Seabourn\b/i.test(s)) return "Seabourn";
  if (/^Oceania\b/i.test(s)) return "Oceania Cruises";
  if (/^Regent\b/i.test(s)) return "Regent Seven Seas";
  if (/^Marella\b/i.test(s)) return "Marella Cruises";
  if (/^Silver\b/i.test(s)) return "Silversea";
  if (/^Wind Star|^Star Pride/i.test(s)) return "Windstar Cruises";
  return "Verify with cruise line";
}

function formatTime(hhmm) {
  if (!hhmm || hhmm.length < 4) return hhmm;
  return `${hhmm.slice(0, 2)}:${hhmm.slice(2, 4)}`;
}

function parseMonthDay(monthDay, year) {
  const [dayStr, monStr] = monthDay.trim().split(/\s+/);
  const month = MONTH_MAP[monStr.toLowerCase().slice(0, 3)];
  if (!month) return null;
  const day = String(dayStr).padStart(2, "0");
  return `${year}-${String(month).padStart(2, "0")}-${day}`;
}

function minutesFromTime(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function calcTimeInPort(arrival, departure) {
  const a = minutesFromTime(arrival);
  const d = minutesFromTime(departure);
  if (Number.isNaN(a) || Number.isNaN(d) || d <= a) return "-";
  const diff = d - a;
  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseEntriesFromText(text, config) {
  const plain = text.includes("<") ? stripHtml(text) : text;
  const entries = [];
  const blockRe =
    /Arriving\s+(?:\w+\s+)?(\d{1,2})\s+(\w{3})\s+(\d{4})[\s\S]*?Ship\s+(.+?)\s+More details[\s\S]*?Cruise Itinerary\s*:\s*([\s\S]*?)(?:port loads|ChangeMonth|©CruiseTimetables)/gi;

  let match;
  while ((match = blockRe.exec(plain))) {
    const year = match[3];
    const ship = match[4].trim().replace(/\s+/g, " ");
    const itinerary = match[5];
    const portMatch = itinerary.match(config.itineraryPortRegex);
    if (!portMatch) continue;

    const arrivalRaw = portMatch[2];
    const departureRaw = portMatch[3];
    const isoDate = parseMonthDay(portMatch[1], year);
    if (!isoDate) continue;

    const arrival = formatTime(arrivalRaw);
    const departure = formatTime(departureRaw);

    entries.push({
      date: isoDate,
      ship,
      cruiseLine: inferCruiseLine(ship),
      arrival,
      departure,
      timeInPort: calcTimeInPort(arrival, departure),
    });
  }

  return entries;
}

function parseEntriesFromHtml(html, config) {
  return parseEntriesFromText(html, config);
}

function cacheFileName(url) {
  const match = url.match(/-([a-z]{3}\d{4})\.html/i);
  return match ? `${match[1]}.txt` : `${Buffer.from(url).toString("base64url")}.txt`;
}

function readCachedPage(cacheDir, url) {
  const cachePath = path.join(cacheDir, cacheFileName(url));
  if (!fs.existsSync(cachePath)) return null;
  return fs.readFileSync(cachePath, "utf8");
}

function writeCachedPage(cacheDir, url, content) {
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(path.join(cacheDir, cacheFileName(url)), content);
}

async function fetchHtml(url, attempt = 1) {
  const res = await fetch(url, { headers: FETCH_HEADERS });
  if (res.status === 429 && attempt <= 8) {
    const waitMs = attempt * 5000;
    process.stdout.write(`429, retry in ${waitMs / 1000}s... `);
    await new Promise((r) => setTimeout(r, waitMs));
    return fetchHtml(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function fetchAllPagesForMonth(url, config, cacheDir) {
  let firstHtml = readCachedPage(cacheDir, url);
  if (!firstHtml) {
    firstHtml = await fetchHtml(url);
    writeCachedPage(cacheDir, url, firstHtml);
  }

  const pageUrls = new Set([url]);

  const offsetMatches = firstHtml.matchAll(/pageit\('([^']+)'\)/g);
  for (const m of offsetMatches) {
    const rel = m[1];
    if (rel.includes("offset=")) {
      pageUrls.add(
        rel.startsWith("http")
          ? rel
          : `https://www.cruisetimetables.com/${rel.replace(/^\//, "")}`,
      );
    }
  }

  const allEntries = [];
  const seen = new Set();

  for (const pageUrl of pageUrls) {
    let html = pageUrl === url ? firstHtml : readCachedPage(cacheDir, pageUrl);
    if (!html) {
      html = await fetchHtml(pageUrl);
      writeCachedPage(cacheDir, pageUrl, html);
    }
    for (const entry of parseEntriesFromText(html, config)) {
      const key = `${entry.date}|${entry.ship}|${entry.arrival}|${entry.departure}`;
      if (!seen.has(key)) {
        seen.add(key);
        allEntries.push(entry);
      }
    }
  }

  return allEntries;
}

const slug = process.argv[2] || "st-thomas";
const config = PORT_CONFIG[slug];
if (!PORT_CONFIG[slug]) {
  console.error(`Unknown port slug: ${slug}. Add config to PORT_CONFIG.`);
  process.exit(1);
}

const csvPath = path.join(SOURCES_DIR, `${slug}.csv`);
if (!fs.existsSync(csvPath)) {
  console.error(`Missing CSV: ${csvPath}`);
  process.exit(1);
}

const monthUrls = parseCsv(csvPath);
const cacheDir = path.join(ROOT, "data/schedule-cache", slug);
console.log(`Importing ${slug} from ${monthUrls.length} monthly URLs...`);

const allEntries = [];
const seen = new Set();
const capacityLookup = loadCapacityLookup();
const failedMonths = [];

for (const { monthLabel, url } of monthUrls) {
  process.stdout.write(`  ${monthLabel}... `);
  try {
    const cached = readCachedPage(cacheDir, url);
    if (cached) process.stdout.write("(cache) ");
    const entries = await fetchAllPagesForMonth(url, config, cacheDir);
    let added = 0;
    for (const entry of entries) {
      const key = `${entry.date}|${entry.ship}|${entry.arrival}|${entry.departure}`;
      if (!seen.has(key)) {
        seen.add(key);
        allEntries.push(entry);
        added++;
      }
    }
    console.log(`${added} ships`);
  } catch (err) {
    failedMonths.push(monthLabel);
    console.log(`FAILED: ${err.message}`);
  }
  if (!readCachedPage(cacheDir, url)) {
    await new Promise((r) => setTimeout(r, 3500));
  }
}

if (capacityLookup) {
  let enriched = 0;
  for (const entry of allEntries) {
    const capacity = lookupCapacity(capacityLookup, entry.ship);
    if (capacity) {
      entry.passengers = formatPassengerCapacity(capacity.min, capacity.max);
      enriched++;
    }
  }
  console.log(`Passenger capacities applied to ${enriched}/${allEntries.length} entries`);
} else {
  console.warn("No ship-capacities.json found, run: node scripts/import-ship-capacities.mjs");
}

allEntries.sort((a, b) => a.date.localeCompare(b.date) || a.arrival.localeCompare(b.arrival));

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = path.join(OUTPUT_DIR, `${slug}.json`);
fs.writeFileSync(outPath, JSON.stringify(allEntries, null, 2) + "\n");
console.log(`\nWrote ${allEntries.length} entries to ${outPath}`);
if (failedMonths.length) {
  console.log(`Failed months (${failedMonths.length}): ${failedMonths.join(", ")}`);
}
