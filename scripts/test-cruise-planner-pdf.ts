import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildCombinedCruisePlannerFromFinderContext } from "../lib/cruise-day-plan";
import {
  buildCombinedCruisePlannerPdfBlob,
  buildCruiseDayPlanPdfBlob,
} from "../lib/cruise-day-plan-pdf";

async function main(): Promise<void> {
  const combined = buildCombinedCruisePlannerFromFinderContext({
    portSlugs: ["cozumel", "roatan", "nassau"],
    travellerTypes: ["beach-lovers", "snorkellers"],
    fitnessLevel: "moderate",
    sailingMonth: "March",
    sailingYear: 2027,
    cruiseLineName: "MSC Cruises",
    shipName: "MSC World America",
  });

  if (!combined) {
    console.error("Failed to build combined planner input");
    process.exit(1);
  }

  const combinedBlob = buildCombinedCruisePlannerPdfBlob(combined);
  const singleBlob = buildCruiseDayPlanPdfBlob(combined.portPlans[0]);

  const combinedBuffer = Buffer.from(await combinedBlob.arrayBuffer());
  const singleBuffer = Buffer.from(await singleBlob.arrayBuffer());

  const combinedPath = join(tmpdir(), "caribbean-cruise-planner-test.pdf");
  const singlePath = join(tmpdir(), "cruise-day-plan-test.pdf");

  writeFileSync(combinedPath, combinedBuffer);
  writeFileSync(singlePath, singleBuffer);

  if (combinedBuffer.byteLength < 5000 || singleBuffer.byteLength < 2000) {
    console.error("PDF output smaller than expected", {
      combinedSize: combinedBuffer.byteLength,
      singleSize: singleBuffer.byteLength,
    });
    process.exit(1);
  }

  console.log("PDF smoke test passed");
  console.log(
    `  Combined planner: ${combinedPath} (${combinedBuffer.byteLength} bytes, ${combined.portPlans.length} ports)`,
  );
  console.log(`  Single port: ${singlePath} (${singleBuffer.byteLength} bytes)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
