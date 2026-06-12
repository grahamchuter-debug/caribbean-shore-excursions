import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getSchedulePortBySlug, getAllSchedulePortSlugs } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllSchedulePortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getSchedulePortBySlug(slug);
    if (!port) return {};
    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule`,
      description: `${port.name} cruise ship schedules for 2026 and 2027. Choose a year to view monthly arrival and departure times and plan shore excursions.`,
      path: `/ship-schedules/${slug}`,
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
  const port = getSchedulePortBySlug(slug);
  if (!port) notFound();

  const title = `${port.name} Cruise Ship Schedule`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: port.name, path: `/ship-schedules/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title,
            description: `${port.name} cruise ship schedule hub with 2026 and 2027 monthly tables.`,
            path: `/ship-schedules/${slug}`,
          }),
          ...(port.faqs?.length ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero title={title} subtitle={port.description} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-6 flex flex-wrap gap-4">
            <Link href={`/ports/${slug}`} className="btn-secondary text-sm">
              {port.name} Port Guide
            </Link>
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              All Ship Schedules
            </Link>
            <Link href="/busiest-caribbean-cruise-ports-2027" className="btn-secondary text-sm">
              Busiest Ports 2027
            </Link>
            <Link href="/caribbean-cruise-calendar-2027" className="btn-secondary text-sm">
              Cruise Calendar 2027
            </Link>
          </div>

          <ShipScheduleHubView port={port} />
        </div>
      </section>
    </>
  );
}
