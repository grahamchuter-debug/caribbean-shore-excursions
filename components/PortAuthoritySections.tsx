import type { Port } from "@/data/types";
import type { PortAuthorityContent } from "@/data/types";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function CardGrid({
  items,
  titleKey,
  descriptionKey,
}: {
  items: Record<string, string>[];
  titleKey: string;
  descriptionKey: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item[titleKey]} className="card-gradient">
          <h3 className="font-semibold text-gray-900">{item[titleKey]}</h3>
          <p className="mt-1 text-sm text-gray-600">{item[descriptionKey]}</p>
        </div>
      ))}
    </div>
  );
}

export function PortAuthoritySections({
  port,
  authority,
}: {
  port: Port;
  authority: PortAuthorityContent;
}) {
  return (
    <>
      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Destination Overview</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{port.overview}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {port.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-caribbean-100 px-3 py-1 text-sm text-caribbean-800 font-medium"
            >
              {h}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Why Cruise Passengers Visit</h2>
        <BulletList items={authority.whyVisit} />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Shore Excursions</h2>
        <div className="space-y-4">
          {port.bestExcursions.map((exc) => (
            <div key={exc.name} className="card">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{exc.name}</h3>
                  <p className="mt-1 text-gray-600">{exc.description}</p>
                </div>
                <div className="flex shrink-0 gap-3 text-sm">
                  {exc.rating && (
                    <span className="text-tropical-mango font-semibold">★ {exc.rating}</span>
                  )}
                  <span className="text-gray-500">{exc.duration}</span>
                  <span className="rounded bg-caribbean-50 px-2 py-0.5 text-caribbean-700">
                    {exc.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Beaches</h2>
        <CardGrid
          items={authority.bestBeaches.map((b) => ({ name: b.name, description: b.description }))}
          titleKey="name"
          descriptionKey="description"
        />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Best for Families</h2>
        <BulletList items={authority.bestForFamilies} />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Best for Couples</h2>
        <BulletList items={authority.bestForCouples} />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Snorkelling Opportunities</h2>
        <CardGrid
          items={authority.snorkelling.map((s) => ({ site: s.site, description: s.description }))}
          titleKey="site"
          descriptionKey="description"
        />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Private Tour Options</h2>
        <CardGrid
          items={authority.privateTours.map((t) => ({ name: t.name, description: t.description }))}
          titleKey="name"
          descriptionKey="description"
        />
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Terminal Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Dock Type", value: port.portInfo.dockType },
            { label: "Walking Distance", value: port.portInfo.walkingDistance },
            { label: "Tender Required", value: port.portInfo.tenderRequired ? "Yes" : "No" },
            { label: "Currency", value: port.portInfo.currency },
            { label: "Language", value: port.portInfo.language },
            { label: "Time Zone", value: port.portInfo.timeZone },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
              <dd className="mt-1 text-gray-900">{item.value}</dd>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600 bg-tropical-sand/40 rounded-lg p-4">
          <strong>Safety:</strong> {port.portInfo.safetyNotes}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="section-title text-2xl sm:text-3xl mb-6">Cruise Passenger Tips</h2>
        <BulletList items={port.passengerTips} />
      </section>
    </>
  );
}
