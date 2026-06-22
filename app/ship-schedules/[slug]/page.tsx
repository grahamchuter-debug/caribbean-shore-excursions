import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getSchedulePortBySlug, getAllSchedulePortSlugs } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { isScheduleYearSlug, portHubPath, yearHubPath } from "@/lib/schedule-utils";
import {
  augmentMetadataDescription,
  augmentMetadataTitle,
  getScheduleHubHeroTitle,
  getScheduleIntro,
} from "@/lib/cruise-port-display";

export function generateStaticParams() {
  return getAllSchedulePortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    if (isScheduleYearSlug(slug)) return {};
    const port = getSchedulePortBySlug(slug);
    if (!port) return {};
    const baseTitle = port.seoTitle ?? `${port.name} Cruise Ship Schedule`;
    const baseDescription =
      port.metaDescription ??
      `${port.name} cruise ship schedule hub. View the 2026 schedule or 2027 schedule with monthly arrival and departure times to plan shore excursions.`;
    return buildMetadata({
      title: augmentMetadataTitle(baseTitle, port.name, slug),
      description: augmentMetadataDescription(baseDescription, slug, "schedule"),
      path: portHubPath(slug),
      keywords: [
        `${port.name} ship schedule`,
        `${port.name} cruise schedule 2026`,
        `${port.name} cruise schedule 2027`,
        "ships in port",
      ],
    });
  });
}

export default async function ShipSchedulePortPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (isScheduleYearSlug(slug)) notFound();

  const port = getSchedulePortBySlug(slug);
  if (!port) notFound();

  const title = getScheduleHubHeroTitle(slug, port.name);
  const subtitle = getScheduleIntro(slug) ?? port.description;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: port.name, path: portHubPath(slug) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title,
            description: `${port.name} schedule hub with dedicated 2026 and 2027 monthly tables.`,
            path: portHubPath(slug),
          }),
          ...(port.faqs?.length ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero title={title} subtitle={subtitle} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-6 flex flex-wrap gap-4">
            <Link href={yearHubPath(2026)} className="btn-secondary text-sm">
              2026 Caribbean Schedules
            </Link>
            <Link href={yearHubPath(2027)} className="btn-secondary text-sm">
              2027 Caribbean Schedules
            </Link>
            <Link href={`/ports/${slug}`} className="btn-secondary text-sm">
              {port.name} Port Guide
            </Link>
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
          </div>

          <ShipScheduleHubView port={port} />
        </div>
      </section>
    </>
  );
}
