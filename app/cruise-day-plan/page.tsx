import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CruiseDayPlanPageClient } from "@/components/CruiseDayPlanPageClient";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Day Plan | Printable Port Day Planner",
  description:
    "Build a personalised Caribbean cruise day plan with excursion picks, port snapshot, ship schedule context, and return-to-ship advice. Download a print-ready PDF.",
  path: "/cruise-day-plan",
  keywords: [
    "cruise day plan",
    "Caribbean port day planner",
    "printable cruise planner",
    "shore excursion plan",
  ],
});

export default function CruiseDayPlanPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Cruise Day Plan", path: "/cruise-day-plan" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          travelGuideSchema({
            title: "Caribbean Cruise Day Plan",
            description:
              "Personalised printable cruise day plans for Caribbean port calls with excursions, logistics, and ship-day context.",
            path: "/cruise-day-plan",
          }),
        ]}
      />
      <div className="print:hidden">
        <PageHero
          title="Caribbean Cruise Day Plan"
          subtitle="Personalise one port day — excursions, port snapshot, schedule context, and return-to-ship advice — then print or save as PDF."
          compact
        />
      </div>
      <section className="section-padding print:py-4">
        <div className="container-wide max-w-4xl print:max-w-none print:px-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <CruiseDayPlanPageClient />
          <aside className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-600 print:hidden">
            <p className="font-semibold text-gray-900">Planning tip</p>
            <p className="mt-2">
              Prefill from a port guide with{" "}
              <code className="rounded bg-white px-1.5 py-0.5 text-xs">?port=st-thomas</code> or add your cruise date with{" "}
              <code className="rounded bg-white px-1.5 py-0.5 text-xs">?port=cozumel&amp;date=2027-03-15</code>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
