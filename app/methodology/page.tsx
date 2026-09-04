import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Methodology & Data Sources",
  description:
    "How Caribbean Shore Excursion Planner sources and maintains cruise ship schedule data, reviews it, and selects shore excursion recommendations — with honest limitations.",
  path: "/methodology",
  keywords: [
    "cruise schedule data sources",
    "cruise schedule methodology",
    "how we rank cruise ports",
    "shore excursion recommendations",
  ],
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Methodology & Data Sources", path: "/methodology" },
          ]),
          webPageSchema({
            title: "Methodology & Data Sources",
            description:
              "How we source, maintain, and review Caribbean cruise ship schedules, and how we select shore excursion recommendations.",
            path: "/methodology",
          }),
        ]}
      />
      <PageHero
        title="Methodology & Data Sources"
        subtitle="How we compile our cruise ship schedules, how often we review them, and how we choose the shore excursions we recommend. We aim to be useful and honest about what our data can and cannot tell you."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Methodology & Data Sources", path: "/methodology" },
            ]}
          />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg leading-relaxed">
              {SITE.name} is an independent Caribbean cruise planning resource. To help passengers plan realistic port days, we compile ship schedules and excursion guidance from public sources and structure them into port-by-port and month-by-month tables. This page explains exactly where that information comes from, how we keep it current, and where its limits are.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Where our ship schedule data comes from</h2>
            <p>
              Our cruise ship schedules are compiled from published cruise line and port schedule data — the arrival and departure information that cruise lines and port authorities make available for planning purposes. We draw on publicly available cruise itinerary sources and port-published call times, then organise them by port, year, and month so you can see which vessels are expected at a given pier on a given day.
            </p>
            <p>
              We do not receive a private feed from any cruise line, and we are not a booking or ticketing system. The schedules you see here are a planning reference assembled from information that has already been published, not a live operational timetable.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">How our schedules are maintained</h2>
            <p>
              Published schedule data is imported into our system, parsed into a consistent format, and cross-checked for obvious inconsistencies — duplicate calls, impossible turnarounds, or times that fall outside a port&apos;s normal operating window. Once a port&apos;s monthly data has been processed, its arrival and departure tables go live.
            </p>
            <p>
              Coverage is built up port by port and month by month. Where a port or a specific month has not yet been processed, we mark it clearly as pending — showing a &quot;Schedule data being updated&quot; placeholder rather than displaying incomplete rows. We would rather show you an honest gap than an unreliable listing.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">How often we review the data</h2>
            <p>
              Cruise schedules are reviewed and refreshed periodically as new published schedules become available and as cruise lines revise their deployment. Itineraries can be adjusted many months ahead of sailing, so we treat our tables as a living reference: when a port&apos;s published data changes materially, we re-import and update the affected months rather than leaving stale figures in place.
            </p>
            <p>
              Because refreshes happen in batches by port and month, some sections will always be more current than others. The pending markers are there to tell you which is which.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Limitations of cruise schedules</h2>
            <p>
              Published schedules are planning guides, not guarantees. Even accurate, up-to-date times can change for reasons entirely outside our control:
            </p>
            <ul className="space-y-3">
              {[
                "Weather and sea conditions can delay, shorten, or cancel a call — tender ports are especially sensitive to swell.",
                "Cruise lines revise itineraries for operational, commercial, or scheduling reasons, sometimes at short notice.",
                "Ships may be reassigned between piers within a port, which affects taxi times and pickup points.",
                "Arrival and departure times shift with tides, port congestion, and berthing priorities.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">!</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              For that reason, you should always confirm your own ship&apos;s times with your cruise line before booking any independent shore excursion. Use our tables to plan and compare, not as a substitute for your official cruise documents.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">How we select excursion recommendations</h2>
            <p>
              Our shore excursion guidance is built around one question: what actually works on a typical 6–8 hour Caribbean port day? When we recommend or highlight an experience, we weigh factors such as:
            </p>
            <ul className="space-y-3">
              {[
                "Experience quality — whether the tour delivers something genuinely worth your limited hours ashore.",
                "Transfer and return-to-ship timing — how much of your port window the travel eats, and whether there is a safe buffer before all-aboard.",
                "Value on a short port day — whether the cost and time are justified against alternatives at the same port.",
                "Operator standards — safety, reliability, and cruise-passenger-friendly policies such as sensible cancellation and clear return-timing policies.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Recommendations are never based on paid placement. We do not sell ranking positions, and an operator cannot buy its way into a guide.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">Why itineraries can change</h2>
            <p>
              It is worth stating plainly why the &quot;expected&quot; picture and the &quot;actual&quot; day can differ. Cruise lines alter published itineraries for weather (hurricane-season routing is the most common cause), mechanical or technical issues, port congestion when too many ships want the same berth, and broader operational decisions such as fuel, staffing, or regional logistics. Any of these can add, drop, or re-time a port call after schedules are published.
            </p>
            <p>
              Planning with this in mind — a realistic headline experience, a sensible time buffer, and a confirmation of your own ship&apos;s times — is the single best way to protect your port day.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mt-10">How we recommend</h2>
            <AffiliateDisclosure variant="card" className="mt-2" />

            <p className="mt-8">
              Questions about our data or a correction to a specific port? We welcome it — see our{" "}
              <Link href="/contact" className="text-caribbean-700 hover:underline">contact page</Link>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/ship-schedules" className="btn-primary">Browse ship schedules</Link>
            <Link href="/about" className="btn-secondary">About us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
