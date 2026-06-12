import Link from "next/link";
import type { Port } from "@/data/types";
import {
  getPortPlanningSnapshot,
  getTypicalCruiseDay,
  getCruiseLinesForPort,
  getPortPlanningCards,
  getPortPopularityStats,
  getSimilarPorts,
} from "@/data/port-planning";
import { hasShipSchedule } from "@/lib/routes";

const cardToneClasses: Record<string, string> = {
  sand: "from-amber-50 to-orange-50 border-amber-200",
  reef: "from-cyan-50 to-teal-50 border-cyan-200",
  family: "from-sky-50 to-indigo-50 border-sky-200",
  wildlife: "from-emerald-50 to-green-50 border-emerald-200",
  private: "from-violet-50 to-purple-50 border-violet-200",
};

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/80 px-3 py-3 border border-white shadow-sm">
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-gray-900">{value}</dd>
    </div>
  );
}

export function PortPlanningToolkit({ port }: { port: Port }) {
  const snapshot = getPortPlanningSnapshot(port.slug);
  const typicalDay = getTypicalCruiseDay(port.slug);
  const cruiseLines = getCruiseLinesForPort(port.slug);
  const planningCards = getPortPlanningCards(port.slug);
  const popularity = getPortPopularityStats(port.slug);
  const similarPorts = getSimilarPorts(port.slug);

  if (!snapshot) return null;

  return (
    <div className="space-y-10 mb-12">
      <section className="rounded-2xl border-2 border-caribbean-200 bg-gradient-to-br from-caribbean-50 via-white to-tropical-sand/30 p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">Cruise Passenger Snapshot</h2>
        <p className="text-sm text-gray-600 mb-5">Quick planning signals for your {port.name} port day.</p>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SnapshotItem label="Time in Port" value={snapshot.timeInPort} />
          <SnapshotItem label="Best For" value={snapshot.bestFor} />
          <SnapshotItem label="Walking Required" value={snapshot.walkingRequired} />
          <SnapshotItem label="Family Friendly" value={snapshot.familyFriendly} />
          <SnapshotItem label="Private Tour Friendly" value={snapshot.privateTourFriendly} />
          <SnapshotItem label="Return to Ship Confidence" value={snapshot.returnToShipConfidence} />
        </dl>
      </section>

      <section>
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Plan by Excursion Type</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {planningCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className={`rounded-xl border bg-gradient-to-br p-4 transition-shadow hover:shadow-md ${cardToneClasses[card.tone]}`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900">{card.label}</h3>
                <span className="text-xs font-medium text-caribbean-700">Guide →</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{card.teaser}</p>
              <span className="mt-3 inline-block text-xs font-medium text-caribbean-800">
                Best {card.label.toLowerCase()} picks
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="section-title text-2xl sm:text-3xl">Port Popularity</h2>
          {hasShipSchedule(port.slug) && (
            <Link href={`/ship-schedules/${port.slug}`} className="text-sm font-medium text-caribbean-700 hover:underline">
              View ship schedules →
            </Link>
          )}
        </div>
        {popularity.hasVerifiedData ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-caribbean-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase text-gray-500">2026 ship calls</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{popularity.calls2026}</p>
            </div>
            <div className="rounded-lg bg-caribbean-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase text-gray-500">2027 ship calls</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{popularity.calls2027}</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase text-gray-500">Peak months</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {popularity.peakMonths.length > 0 ? popularity.peakMonths.join(" · ") : "Import in progress"}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Verified schedule import pending for {port.name}. Use the{" "}
            <Link href={`/ship-schedules/${port.slug}`} className="text-caribbean-700 hover:underline">
              schedule hub
            </Link>{" "}
            for monthly placeholders until data is added.
          </p>
        )}
        <p className="mt-3 text-xs text-gray-500">{popularity.note}</p>
      </section>

      {typicalDay.length > 0 && (
        <section>
          <h2 className="section-title text-2xl sm:text-3xl mb-4">Typical Cruise Day</h2>
          <p className="text-sm text-gray-600 mb-4">
            Example timeline for a first-time visitor with one signature excursion booked.
          </p>
          <ol className="relative border-l-2 border-caribbean-200 pl-6 space-y-4">
            {typicalDay.map((step) => (
              <li key={`${step.time}-${step.activity}`} className="relative">
                <span className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full bg-caribbean-600" />
                <p className="text-sm font-semibold text-caribbean-800">{step.time}</p>
                <p className="text-sm text-gray-700">{step.activity}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {similarPorts.length > 0 && (
        <section>
          <h2 className="section-title text-2xl sm:text-3xl mb-4">Similar Ports</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {similarPorts.map(
              (similar) =>
                similar && (
                  <Link
                    key={similar.slug}
                    href={`/ports/${similar.slug}`}
                    className="card-gradient block hover:border-caribbean-300"
                  >
                    <h3 className="font-semibold text-gray-900">{similar.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{similar.region}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{similar.bestFor}</p>
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      {cruiseLines.length > 0 && (
        <section>
          <h2 className="section-title text-2xl sm:text-3xl mb-4">Cruise Lines Visiting</h2>
          <div className="flex flex-wrap gap-2">
            {cruiseLines.map((line) => (
              <Link
                key={line.slug}
                href={`/cruise-lines/${line.slug}`}
                className="rounded-full border border-caribbean-200 bg-white px-4 py-2 text-sm font-medium text-caribbean-800 hover:bg-caribbean-50"
              >
                {line.name}
              </Link>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Lines with {port.name} on popular Caribbean itineraries. Open each guide for route and booking tips.
          </p>
        </section>
      )}
    </div>
  );
}
