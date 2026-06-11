import type { ScheduleEntry } from "@/data/types";

export function ScheduleTable({
  entries,
  portName,
}: {
  entries: ScheduleEntry[];
  portName?: string;
}) {
  if (entries.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-caribbean-50 p-8 text-center">
        <p className="text-gray-700 font-medium">No scheduled ship calls listed for {portName ?? "this port"}.</p>
        <p className="mt-2 text-sm text-gray-600">
          Check back closer to your cruise date for updated arrival and departure times.
        </p>
      </div>
    );
  }

  const shipCount = entries.length;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-caribbean-700 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Ship</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Cruise Line</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Arrival</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Departure</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Passengers</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {entries.map((entry, i) => (
            <tr key={`${entry.date}-${entry.ship}-${i}`} className="hover:bg-caribbean-50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{entry.date}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">{entry.ship}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{entry.cruiseLine}</td>
              <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{entry.arrival}</td>
              <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{entry.departure}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{entry.passengers}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
        {shipCount} ship{shipCount !== 1 ? "s" : ""} scheduled — arrivals and departures are subject to change by cruise lines and port authorities.
      </p>
    </div>
  );
}
