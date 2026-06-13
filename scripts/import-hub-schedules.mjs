#!/usr/bin/env node
/**
 * Import all schedule hub ports that have CSV sources.
 * Usage: node scripts/import-hub-schedules.mjs [--delay-ms 12000] [--max-fetches 30]
 */

import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const HUB_PORTS = [
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "st-maarten",
  "puerto-plata",
  "costa-maya",
  "puerto-limon",
  "st-thomas",
  "ocho-rios",
  "tortola",
  "st-kitts",
];

const args = process.argv.slice(2);
const delayIdx = args.indexOf("--delay-ms");
const fetchIdx = args.indexOf("--max-fetches");
const delayMs = delayIdx >= 0 ? args[delayIdx + 1] : "12000";
const maxFetches = fetchIdx >= 0 ? args[fetchIdx + 1] : "30";

function run(cmd, cmdArgs) {
  const result = spawnSync(cmd, cmdArgs, { cwd: ROOT, stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${cmd} ${cmdArgs.join(" ")} failed with ${result.status}`);
  }
}

for (const slug of HUB_PORTS) {
  const csv = path.join(ROOT, "data/schedule-sources", `${slug}.csv`);
  if (!fs.existsSync(csv)) {
    console.log(`\nSkip ${slug} (no CSV)`);
    continue;
  }

  console.log(`\n========== ${slug} ==========`);
  try {
    run("node", [
      "scripts/import-schedules-slow.mjs",
      slug,
      "--max-fetches",
      maxFetches,
      "--delay-ms",
      delayMs,
      "--force",
    ]);
    run("node", ["scripts/import-schedules.mjs", slug]);
  } catch (err) {
    console.error(`Stopped at ${slug}: ${err.message}`);
    process.exit(1);
  }
}

console.log("\nHub import queue complete.");
