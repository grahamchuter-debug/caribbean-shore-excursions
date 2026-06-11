import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPortBySlug, getAllPortSlugs } from "@/data/ports";
import { getPortAuthority } from "@/data/port-authority";
import { hasShipSchedule } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { SpecialistLink } from "@/components/SpecialistLink";
import { PortRelatedLinks } from "@/components/PortRelatedLinks";
import { PortAuthoritySections } from "@/components/PortAuthoritySections";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { getPortRelatedLinks } from "@/data/port-related";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getPortBySlug(slug);
    const authority = getPortAuthority(slug);
    if (!port) return {};
    return buildMetadata({
      title: authority?.seoTitle ?? `${port.name} Shore Excursions & Cruise Port Guide`,
      description:
        authority?.seoDescription ?? `${port.overview.slice(0, 155)}...`,
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
            title: authority.seoTitle,
            description: authority.seoDescription,
            path: `/ports/${slug}`,
          }),
        ]}
      />
      <PageHero
        title={`${port.name} Shore Excursions & Cruise Port Guide`}
        subtitle={port.tagline}
        compact
      />
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <PortAuthoritySections port={port} authority={authority} />

          <section className="mb-12">
            <h2 className="section-title text-2xl sm:text-3xl mb-6">Top Attractions</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {port.topAttractions.map((attr) => (
                <div key={attr.name} className="card-gradient">
                  <h3 className="font-semibold text-gray-900">{attr.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{attr.description}</p>
                  <p className="mt-2 text-xs text-caribbean-700 font-medium">{attr.distance}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <SpecialistLink url={port.specialistUrl} name={port.specialistName} portName={port.name} />
          </section>

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
