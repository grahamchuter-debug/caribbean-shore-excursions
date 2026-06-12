import Link from "next/link";
import type { ShipSchedulePort } from "@/data/types";
import { getScheduleForPort } from "@/data/schedules";
import { getPortBySlug } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { ScheduleHub } from "@/components/ScheduleHub";
import { SpecialistLocalGuide } from "@/components/SpecialistLocalGuide";
import { FAQSection } from "@/components/FAQSection";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { SCHEDULE_PLANNING_TIPS } from "@/data/schedule-content";

export function ShipSchedulePageView({ port }: { port: ShipSchedulePort }) {
  const schedule = getScheduleForPort(port.slug);
  const authorityPort = getPortBySlug(port.slug);
  const planningTips = port.planningTips ?? SCHEDULE_PLANNING_TIPS;
  const faqs = port.faqs ?? [];

  const relatedPorts = port.relatedPortSlugs
    .map((slug) => getPortBySlug(slug))
    .filter(Boolean);

  const excursions = port.excursionTypeSlugs
    .map((slug) => excursionTypes.find((e) => e.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">How This Schedule Helps You Plan</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{port.intro}</p>
        {port.usesTender && (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Tender port:</strong> {port.name} uses ship-to-shore tender boats. Published
            schedules may change with weather. Allow extra time when planning excursions.
          </p>
        )}
      </section>

      <ScheduleHub
        entries={schedule}
        portName={port.name}
        scheduleOverview={port.scheduleOverview}
      />

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Planning Tips</h2>
        <ul className="space-y-3">
          {planningTips.map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                ✓
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 rounded-xl border-2 border-caribbean-200 bg-gradient-to-br from-caribbean-50 to-white p-6 sm:p-8">
        <h2 className="section-title text-2xl sm:text-3xl mb-3">Plan Your Excursion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Once you know your ship&apos;s arrival and departure time, compare shore excursions for{" "}
          {port.name}. Start with our authority port guide, then browse specialist local operators
          with pier-aware pickup and return guarantees.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={`/ports/${port.slug}`} className="btn-primary text-sm">
            {port.name} port guide &amp; excursions
          </Link>
          {authorityPort && (
            <a
              href={authorityPort.specialistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              {authorityPort.specialistName}
            </a>
          )}
          <Link href="/excursion-types" className="btn-secondary text-sm">
            Excursion types
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Related Links</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Authority port page</h3>
            <Link href={`/ports/${port.slug}`} className="card-gradient block hover:border-caribbean-300">
              <span className="font-medium text-gray-900">{port.name} shore excursions guide</span>
              <span className="block text-sm text-gray-600 mt-1">
                Excursions, beaches, port logistics, and passenger tips
              </span>
            </Link>
          </div>
          {authorityPort && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Specialist local website</h3>
              <a
                href={authorityPort.specialistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient block hover:border-caribbean-300"
              >
                <span className="font-medium text-gray-900">{authorityPort.specialistName}</span>
                <span className="block text-sm text-gray-600 mt-1">
                  Live tour listings, local pricing, and pier pickup details
                </span>
              </a>
            </div>
          )}
        </div>

        {excursions.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Excursion types for {port.name}</h3>
            <div className="flex flex-wrap gap-2">
              {excursions.map(
                (type) =>
                  type && (
                    <Link
                      key={type.slug}
                      href={`/excursion-types/${type.slug}`}
                      className="rounded-full bg-caribbean-50 px-4 py-2 text-sm font-medium text-caribbean-700 hover:bg-caribbean-100"
                    >
                      {type.name}
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}

        {relatedPorts.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Nearby cruise ports</h3>
            <div className="flex flex-wrap gap-2">
              {relatedPorts.map(
                (related) =>
                  related && (
                    <Link
                      key={related.slug}
                      href={`/ports/${related.slug}`}
                      className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-200 hover:border-caribbean-200"
                    >
                      {related.name}
                    </Link>
                  ),
              )}
              {relatedPorts.map(
                (related) =>
                  related && (
                    <Link
                      key={`sched-${related.slug}`}
                      href={`/ship-schedules/${related.slug}`}
                      className="rounded-full bg-caribbean-50 px-3 py-1.5 text-xs font-medium text-caribbean-700 hover:bg-caribbean-100"
                    >
                      {related.name} schedule
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}
      </section>

      {authorityPort && (
        <div className="mb-12">
          <SpecialistLocalGuide portSlug={port.slug} />
        </div>
      )}

      {faqs.length > 0 && <FAQSection faqs={faqs} />}

      <div className="mt-10">
        <AuthorityHubLinks current="schedules" portSlug={port.slug} />
      </div>
    </>
  );
}
