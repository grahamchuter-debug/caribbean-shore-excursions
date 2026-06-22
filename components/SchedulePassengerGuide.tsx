import Link from "next/link";
import { getPortBySlug } from "@/data/ports";
import { excursionTypes } from "@/data/excursion-types";
import { getShipCallCountForPortYear } from "@/data/schedules";
import { getSignatureExcursionForPort } from "@/lib/schedule-signature-excursion";
import { portYearPath } from "@/lib/schedule-utils";
import type { ScheduleYear } from "@/lib/schedule-utils";

interface SchedulePassengerGuideProps {
  portSlug: string;
  year?: ScheduleYear;
  excursionTypeSlugs?: string[];
}

export function SchedulePassengerGuide({
  portSlug,
  year,
  excursionTypeSlugs = [],
}: SchedulePassengerGuideProps) {
  const port = getPortBySlug(portSlug);
  if (!port) return null;

  const signature = getSignatureExcursionForPort(portSlug);
  const calls2027 = getShipCallCountForPortYear(portSlug, 2027);
  const calls2026 = getShipCallCountForPortYear(portSlug, 2026);
  const show2027Promo = year !== 2027 && calls2027 > 0;

  const excursionTypesForPort = excursionTypeSlugs
    .map((slug) => excursionTypes.find((type) => type.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="mb-12 rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Cruise Passenger Information</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Use this schedule alongside practical port-day details below. Knowing where your ship docks,
          whether tenders are required, and how long you are ashore helps you book excursions with a safe
          return buffer.
        </p>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Docking</dt>
            <dd className="mt-1 text-sm text-gray-800">{port.portInfo.dockType}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              From ship to town
            </dt>
            <dd className="mt-1 text-sm text-gray-800">{port.portInfo.walkingDistance}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Tender required</dt>
            <dd className="mt-1 text-sm text-gray-800">
              {port.portInfo.tenderRequired ? "Yes — allow extra return time" : "No — ships dock at pier"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Currency</dt>
            <dd className="mt-1 text-sm text-gray-800">{port.portInfo.currency}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Language</dt>
            <dd className="mt-1 text-sm text-gray-800">{port.portInfo.language}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Time zone</dt>
            <dd className="mt-1 text-sm text-gray-800">{port.portInfo.timeZone}</dd>
          </div>
        </dl>
        {port.passengerTips.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Passenger tips for {port.name}</h3>
            <ul className="space-y-2">
              {port.passengerTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 text-caribbean-700" aria-hidden="true">
                    •
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-4 text-sm text-gray-600">{port.portInfo.safetyNotes}</p>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">What to Do in {port.name} on a Cruise Day</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {port.bestFor} — {port.tagline}. Once you know your arrival and departure window from the schedule
          above, these are the experiences cruise passengers book most often.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {port.topAttractions.map((attraction) => (
            <div key={attraction.name} className="card">
              <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{attraction.description}</p>
              <p className="mt-2 text-xs font-medium text-caribbean-700">{attraction.distance}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href={`/ports/${portSlug}`} className="btn-secondary text-sm">
            Full {port.name} port guide
          </Link>
        </div>
      </section>

      <section className="mb-12 rounded-xl border-2 border-caribbean-200 bg-gradient-to-br from-caribbean-50 to-white p-6 sm:p-8">
        <h2 className="section-title text-2xl sm:text-3xl mb-3">Recommended Shore Excursions</h2>
        {signature && (
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Signature pick:</strong> {signature.bestExcursion} — {signature.whyRecommended}
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {port.bestExcursions.slice(0, 4).map((excursion) => (
            <div key={excursion.name} className="rounded-xl border border-caribbean-100 bg-white p-4">
              <h3 className="font-semibold text-gray-900">{excursion.name}</h3>
              <p className="mt-1 text-xs font-medium text-caribbean-700">
                {excursion.type} · {excursion.duration}
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{excursion.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/ports/${portSlug}`} className="btn-primary text-sm">
            Compare excursions in port guide
          </Link>
          <Link href="/best-shore-excursion-every-caribbean-port" className="btn-secondary text-sm">
            Best excursion at every port
          </Link>
          <a
            href={port.specialistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            Book at {port.specialistName}
          </a>
        </div>
        {excursionTypesForPort.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Browse by excursion type</h3>
            <div className="flex flex-wrap gap-2">
              {excursionTypesForPort.map(
                (type) =>
                  type && (
                    <Link
                      key={type.slug}
                      href={`/excursion-types/${type.slug}`}
                      className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-caribbean-700 border border-caribbean-200 hover:bg-caribbean-50"
                    >
                      {type.name}
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}
      </section>

      {show2027Promo && (
        <section className="mb-12 rounded-xl border border-caribbean-200 bg-caribbean-50/50 p-6">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-2">
            Also sailing in 2027?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {port.name} has {calls2027.toLocaleString()} verified ship call
            {calls2027 !== 1 ? "s" : ""} listed for 2027
            {calls2026 > 0 ? ` and ${calls2026.toLocaleString()} for 2026` : ""}. Compare both years if
            your itinerary spans seasons or you are choosing between sail dates.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={portYearPath(portSlug, 2027)} className="btn-primary text-sm">
              View {port.name} 2027 schedule
            </Link>
            {calls2026 > 0 && (
              <Link href={portYearPath(portSlug, 2026)} className="btn-secondary text-sm">
                View 2026 schedule
              </Link>
            )}
            <Link href="/ship-schedules/2027" className="btn-secondary text-sm">
              All 2027 Caribbean schedules
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
