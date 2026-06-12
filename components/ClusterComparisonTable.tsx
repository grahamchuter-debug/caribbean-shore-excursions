import Link from "next/link";
import type { ClusterComparisonRow } from "@/data/types";

export function ClusterComparisonTable({ rows }: { rows: ClusterComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-caribbean-700 text-white">
          <tr>
            <th className="px-3 py-3 text-left font-semibold">Port</th>
            <th className="px-3 py-3 text-left font-semibold">Best for</th>
            <th className="px-3 py-3 text-left font-semibold">Best excursion</th>
            <th className="px-3 py-3 text-left font-semibold">Beach quality</th>
            <th className="px-3 py-3 text-left font-semibold">Snorkelling</th>
            <th className="px-3 py-3 text-left font-semibold">Families</th>
            <th className="px-3 py-3 text-left font-semibold">Private tours</th>
            <th className="px-3 py-3 text-left font-semibold">Ease from ship</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {rows.map((row) => (
            <tr key={row.portSlug} className="hover:bg-caribbean-50/50">
              <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
                <Link href={`/ports/${row.portSlug}`} className="text-caribbean-700 hover:underline">
                  {row.portName}
                </Link>
              </td>
              <td className="px-3 py-3 text-gray-700">{row.bestFor}</td>
              <td className="px-3 py-3 text-gray-700">{row.bestExcursion}</td>
              <td className="px-3 py-3 text-gray-700">{row.beachQuality}</td>
              <td className="px-3 py-3 text-gray-700">{row.snorkelling}</td>
              <td className="px-3 py-3 text-gray-700">{row.families}</td>
              <td className="px-3 py-3 text-gray-700">{row.privateTours}</td>
              <td className="px-3 py-3 text-gray-700">{row.easeFromShip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
