import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPortBySlug, getAllPortSlugs } from "@/data/ports";
import { getPortAuthority } from "@/data/port-authority";
import { hasShipSchedule } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { SpecialistLocalGuide } from "@/components/SpecialistLocalGuide";
import { PortRelatedLinks } from "@/components/PortRelatedLinks";
import { PortAuthoritySections } from "@/components/PortAuthoritySections";
import { PortPlanningToolkit } from "@/components/PortPlanningToolkit";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { CruisePortInformationBox } from "@/components/CruisePortInformationBox";
import { getPortRelatedLinks } from "@/data/port-related";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import {
  augmentMetadataDescription,
  augmentMetadataTitle,
  getPortGuideHeroTitle,
  getPortGuideIntro,
} from "@/lib/cruise-port-display";

export function generateStaticParams() {
  return getAllPortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getPortBySlug(slug);
    const authority = getPortAuthority(slug);
    if (!port) return {};
    const baseTitle = authority?.seoTitle ?? `${port.name} Shore Excursions & Cruise Port Guide`;
    const baseDescription =
      authority?.seoDescription ?? `${port.overview.slice(0, 155)}...`;
    return buildMetadata({
      title: augmentMetadataTitle(baseTitle, port.name, slug),
      description: augmentMetadataDescription(baseDescription, slug, "port"),
      path: `/ports/${slug}`,
      keywords: [`${port.name} shore excursions`, `${port.name} cruise port`, port.country],
    });
  });
}

export default async function PortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const port = getPortBySlug(slug);
  const authority = getPortAuthority(slug);
  if (!port || !authority) notFound();

  const heroTitle = getPortGuideHeroTitle(slug, port.name);
  const heroIntro = getPortGuideIntro(slug) ?? port.tagline;
  const pageTitle = augmentMetadataTitle(
    authority.seoTitle,
    port.name,
    slug,
  );
  const pageDescription = augmentMetadataDescription(
    authority.seoDescription,
    slug,
    "port",
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Caribbean Ports", path: "/ports" },
    { name: port.name, path: `/ports/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(port.faqs),
          travelGuideSchema({
            title: pageTitle,
            description: pageDescription,
            path: `/ports/${slug}`,
          }),
        ]}
      />
      <PageHero title={heroTitle} subtitle={heroIntro} compact />
      <article className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />

          <CruisePortInformationBox portSlug={slug} />

          <PortPlanningToolkit port={port} />

          <PortAuthoritySections port={port} authority={authority} />

          <section className="mb-10">
            <h2 className="section-title text-xl sm:text-2xl mb-4">Nearby Attractions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {port.topAttractions.map((attr) => (
                <div key={attr.name} className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
                  <h3 className="font-semibold text-gray-900 text-sm">{attr.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{attr.description}</p>
                  <p className="mt-2 text-xs text-caribbean-700 font-medium">{attr.distance}</p>
                </div>
              ))}
            </div>
          </section>

          <SpecialistLocalGuide portSlug={slug} />

          <PortRelatedLinks links={getPortRelatedLinks(slug)} />

          <section className="mb-12 flex flex-wrap gap-4">
            {hasShipSchedule(port.slug) && (
              <Link href={`/ship-schedules/${port.slug}`} className="btn-secondary text-sm">
                {port.name} Ship Schedule
              </Link>
            )}
            <Link href="/excursion-types" className="btn-secondary text-sm">
              Excursion Types
            </Link>
            <Link href="/cruise-lines" className="btn-secondary text-sm">
              Cruise Lines
            </Link>
          </section>

          <FAQSection faqs={port.faqs} />

          <div className="mt-12">
            <AuthorityHubLinks current="ports" portSlug={slug} />
          </div>
        </div>
      </article>
    </>
  );
}
