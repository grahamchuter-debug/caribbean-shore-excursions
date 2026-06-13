import { Suspense } from "react";
import { CruiseDayPlanPrintClient } from "@/components/CruiseDayPlanPageClient";

export default function CruiseDayPlanPrintPage() {
  return (
    <main className="min-h-screen bg-white print:min-h-0">
      <Suspense
        fallback={
          <p className="p-8 text-center text-sm text-gray-600">Preparing print layout…</p>
        }
      >
        <div className="container-wide max-w-3xl py-8 print:max-w-none print:py-0 print:px-0">
          <CruiseDayPlanPrintClient />
        </div>
      </Suspense>
    </main>
  );
}
