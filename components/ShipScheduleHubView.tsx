import Link from "next/link";
import type { ShipSchedulePort } from "@/data/types";
import { ScheduleYearLinks } from "@/components/ScheduleYearLinks";
import { FAQSection } from "@/components/FAQSection";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";

export function ShipScheduleHubView({ port }: { port: ShipSchedulePort }) {
  const faqs = port.faqs ?? [];

  return (
    <>
      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Choose a Schedule Year</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">{port.intro}</p>
        {port.usesTender && (
          <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Tender port:</strong> {port.name} uses ship-to-shore tender boats. Published
            schedules may change with weather. Allow extra time when planning excursions.
          </p>
        )}
        <ScheduleYearLinks portSlug={port.slug} portName={port.name} />
      </section>

      <section className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">2027 Cruise Planning Tools</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Compare call volumes across the Caribbean and review seasonal sailing patterns before you
          pick excursions for {port.name}.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/busiest-caribbean-cruise-ports-2027" className="card-gradient block hover:border-caribbean-300">
            <h3 className="font-semibold text-gray-900">Busiest Caribbean Cruise Ports 2027</h3>
            <p className="mt-2 text-sm text-gray-600">
              Verified ship call rankings, passenger estimates, and multi-port planning insights.
            </p>
          </Link>
          <Link href="/caribbean-cruise-calendar-2027" className="card-gradient block hover:border-caribbean-300">
            <h3 className="font-semibold text-gray-900">Caribbean Cruise Calendar 2027</h3>
            <p className="mt-2 text-sm text-gray-600">
              Peak months, regional seasonality, and when to book excursions by itinerary type.
            </p>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Port Overview</h2>
        <p className="text-gray-700 leading-relaxed">{port.scheduleOverview}</p>
      </section>

      {faqs.length > 0 && <FAQSection faqs={faqs} />}

      <div className="mt-10">
        <AuthorityHubLinks current="schedules" portSlug={port.slug} />
      </div>
    </>
  );
}
