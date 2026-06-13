import Image from "next/image";
import Link from "next/link";
import type { ExcursionType } from "@/data/types";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { ExcursionCardCTAs } from "@/components/ExcursionCardCTAs";
import { evaluatePortConfidence } from "@/lib/cruise-confidence";
import { CruiseConfidenceBadge } from "@/components/CruiseConfidenceBadge";
import { CruiseConfidenceLabels } from "@/components/CruiseConfidenceLabels";
import { getPortBySlug } from "@/data/ports";
import { excursionTypeImageTheme } from "@/lib/port-themes";
import { PremiumEditorialCard } from "@/components/PremiumEditorialCard";

function CategoryImagePlaceholder({ type }: { type: ExcursionType }) {
  const alt = type.categoryImage?.alt ?? `${type.name} category image`;
  return (
    <div className="relative mb-10 overflow-hidden rounded-2xl border border-caribbean-100 bg-card-gradient shadow-sm">
      {type.categoryImage?.src ? (
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={type.categoryImage.src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-caribbean-900/50 via-caribbean-800/25 to-transparent"
            aria-hidden
          />
        </div>
      ) : (
        <div className="flex aspect-[21/9] w-full items-center justify-center bg-hero-gradient px-6 text-center">
          <p className="max-w-lg text-sm font-medium text-caribbean-50">{alt}</p>
        </div>
      )}
      <p className="border-t border-caribbean-100 bg-white/90 px-4 py-2 text-xs text-gray-500">
        Category imagery placeholder — replace with dedicated {type.name.toLowerCase()} photography when available.
      </p>
    </div>
  );
}

export function ExcursionTypePageView({
  type,
  breadcrumbs,
}: {
  type: ExcursionType;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <>
      <PageHero title={type.name} subtitle={type.tagline} compact />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <CategoryImagePlaceholder type={type} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{type.overview}</p>
          </section>

          {type.recommendedByPort && type.recommendedByPort.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-2">Recommended Excursions By Port</h2>
              <p className="section-subtitle mb-6">
                Signature {type.name.toLowerCase()} at top cruise ports — with direct routes to book through local specialists.
              </p>
              <div className="grid gap-5 lg:grid-cols-2">
                {type.recommendedByPort.map((port) => {
                  const confidence = evaluatePortConfidence(port.portSlug);
                  const portData = getPortBySlug(port.portSlug);
                  const imageTheme =
                    portData?.imageTheme ?? excursionTypeImageTheme(type.name);
                  return (
                    <article
                      key={port.portSlug}
                      className="flex h-full flex-col overflow-hidden rounded-2xl border border-caribbean-100/80 bg-white shadow-md"
                    >
                      <PremiumEditorialCard
                        eyebrow={port.portName}
                        title={port.excursions[0] ?? type.name}
                        subtitle={
                          port.excursions.length > 1
                            ? `+ ${port.excursions.length - 1} more signature pick${port.excursions.length > 2 ? "s" : ""}`
                            : `${type.name} at ${port.portName}`
                        }
                        imageTheme={imageTheme}
                        imageLabel={`${type.name} at ${port.portName}`}
                        portSlug={port.portSlug}
                        details={[
                          {
                            label: "Signature picks",
                            value: port.excursions.join(" · "),
                          },
                          {
                            label: "Cruise confidence",
                            value: confidence.title,
                          },
                        ]}
                        className="flex-1 rounded-none border-0 shadow-none"
                      />
                      <div className="border-t border-gray-100 bg-gradient-to-b from-caribbean-50/30 to-white px-4 py-4 sm:px-5">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <CruiseConfidenceBadge level={confidence.level} />
                          <CruiseConfidenceLabels labels={confidence.supportingLabels} compact />
                        </div>
                        <ExcursionCardCTAs
                          portSlug={port.portSlug}
                          excursionTypeSlug={type.slug}
                          text={port.excursions.join(" ")}
                          className="mt-0"
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {type.authorityLinks && type.authoritySectionTitle && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">{type.authoritySectionTitle}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {type.authorityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="card block hover:border-caribbean-200"
                  >
                    <h3 className="font-semibold text-gray-900">{link.label}</h3>
                    {link.description && (
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {type.specialistSites && type.specialistSectionTitle && (
            <section className="mb-12">
              <h2 className="section-title text-2xl sm:text-3xl mb-6">{type.specialistSectionTitle}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {type.specialistSites.map((site) => (
                  <a
                    key={site.portSlug}
                    href={site.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block hover:border-caribbean-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-caribbean-600">
                      {site.portName}
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">{site.siteLabel}</p>
                    <p className="mt-2 text-sm text-caribbean-700">View excursion options →</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {type.bookingPathways && type.bookingPathways.length > 0 && (
            <section className="mb-12 rounded-2xl border border-caribbean-200 bg-caribbean-50/40 p-6">
              <h2 className="section-title text-2xl sm:text-3xl mb-2">Continue Your Booking Journey</h2>
              <p className="text-sm text-gray-600 mb-5">
                Plan your port day, compare authority guides, and reach vetted operators.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {type.bookingPathways.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex h-full flex-col rounded-xl border border-caribbean-100 bg-white px-4 py-3 text-sm hover:border-caribbean-300"
                    >
                      <span className="font-semibold text-caribbean-800">{link.label}</span>
                      {link.description && (
                        <span className="mt-1 text-gray-600">{link.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">What to Expect</h2>
            <ul className="space-y-3">
              {type.whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Best Ports</h2>
            <div className="space-y-4">
              {type.bestPorts.map((port) => (
                <Link key={port.slug} href={`/ports/${port.slug}`} className="card block hover:border-caribbean-200">
                  <h3 className="font-semibold text-gray-900">{port.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{port.reason}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Tips</h2>
            <ul className="space-y-3">
              {type.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tropical-mango text-white text-xs">
                    ★
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <FAQSection faqs={type.faqs} />
        </div>
      </article>
    </>
  );
}
