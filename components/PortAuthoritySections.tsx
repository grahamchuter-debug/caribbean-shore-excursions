import type { Port } from "@/data/types";
import type { PortAuthorityContent } from "@/data/types";

function CompactGrid({
  title,
  items,
  titleKey,
  descriptionKey,
}: {
  title: string;
  items: Record<string, string>[];
  titleKey: string;
  descriptionKey: string;
}) {
  return (
    <section className="mb-10">
      <h2 className="section-title text-xl sm:text-2xl mb-4">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.slice(0, 4).map((item) => (
          <div key={item[titleKey]} className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
            <h3 className="font-semibold text-gray-900 text-sm">{item[titleKey]}</h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item[descriptionKey]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PortAuthoritySections({
  port,
  authority,
}: {
  port: Port;
  authority: PortAuthorityContent;
}) {
  const overviewLead = port.overview.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <>
      <section className="mb-10">
        <h2 className="section-title text-2xl sm:text-3xl mb-3">At a Glance</h2>
        <p className="text-gray-700 leading-relaxed">{overviewLead}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {port.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-caribbean-100 px-3 py-1 text-xs text-caribbean-800 font-medium"
            >
              {h}
            </span>
          ))}
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {authority.whyVisit.slice(0, 4).map((item) => (
            <li key={item} className="text-sm text-gray-700 flex gap-2">
              <span className="text-caribbean-600 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="section-title text-2xl sm:text-3xl mb-4">Top Shore Excursions</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {port.bestExcursions.slice(0, 4).map((exc) => (
            <div key={exc.name} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900">{exc.name}</h3>
                {exc.rating && (
                  <span className="text-xs text-tropical-mango font-semibold shrink-0">★ {exc.rating}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">{exc.description}</p>
              <div className="mt-2 flex gap-2 text-xs text-gray-500">
                <span>{exc.duration}</span>
                <span>·</span>
                <span>{exc.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CompactGrid
        title="Beach Picks"
        items={authority.bestBeaches.map((b) => ({ name: b.name, description: b.description }))}
        titleKey="name"
        descriptionKey="description"
      />

      <CompactGrid
        title="Snorkel Sites"
        items={authority.snorkelling.map((s) => ({ site: s.site, description: s.description }))}
        titleKey="site"
        descriptionKey="description"
      />

      <section className="mb-10">
        <h2 className="section-title text-xl sm:text-2xl mb-4">Families &amp; Couples</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Families</h3>
            <ul className="space-y-2">
              {authority.bestForFamilies.slice(0, 3).map((item) => (
                <li key={item} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Couples</h3>
            <ul className="space-y-2">
              {authority.bestForCouples.slice(0, 3).map((item) => (
                <li key={item} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CompactGrid
        title="Private Tour Ideas"
        items={authority.privateTours.map((t) => ({ name: t.name, description: t.description }))}
        titleKey="name"
        descriptionKey="description"
      />

      <section className="mb-10">
        <h2 className="section-title text-xl sm:text-2xl mb-4">Terminal Quick Facts</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Dock", value: port.portInfo.dockType },
            { label: "Walking", value: port.portInfo.walkingDistance },
            { label: "Tender", value: port.portInfo.tenderRequired ? "Yes" : "No" },
            { label: "Currency", value: port.portInfo.currency },
            { label: "Language", value: port.portInfo.language },
            { label: "Time Zone", value: port.portInfo.timeZone },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-gray-100 bg-white p-3">
              <dt className="text-xs font-medium text-gray-500">{item.label}</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.value}</dd>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-600">
          <strong>Safety:</strong> {port.portInfo.safetyNotes}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="section-title text-xl sm:text-2xl mb-4">Passenger Tips</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {port.passengerTips.slice(0, 4).map((tip) => (
            <li key={tip} className="text-sm text-gray-700 flex gap-2">
              <span className="text-caribbean-600 shrink-0">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
