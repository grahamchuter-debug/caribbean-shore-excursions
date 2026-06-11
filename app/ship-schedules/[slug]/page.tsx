import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import {
  getSchedulePortBySlug,
  getScheduleForPort,
  getAllSchedulePortSlugs,
} from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScheduleTable } from "@/components/ScheduleTable";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllSchedulePortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getSchedulePortBySlug(slug);
    if (!port) return {};
    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule`,
      description: `View cruise ship schedules for ${port.name}, ${port.country}. See arrival and departure times for all ships visiting this Caribbean port.`,
      path: `/ship-schedules/${slug}`,
      keywords: [`${port.name} ship schedule`, `${port.name} cruise schedule`, "ships in port"],
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

  const schedule = getScheduleForPort(slug);
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
          travelGuideSchema({
            title: `${port.name} Cruise Ship Schedule`,
            description: port.description,
            path: `/ship-schedules/${slug}`,
          }),
        ]}
      />
      <PageHero
        title={`${port.name} Ship Schedule`}
        subtitle={port.description}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-6 flex flex-wrap gap-4">
            <Link href={`/ports/${slug}`} className="btn-secondary text-sm">
              {port.name} Port Guide
            </Link>
          </div>
          <ScheduleTable entries={schedule} portName={port.name} />
          <p className="mt-6 text-sm text-gray-500">
            Arrival and departure times are published for planning purposes and may change due to weather, tender conditions, or cruise line schedule adjustments. Always confirm final times with your ship before disembarking.
          </p>
        </div>
      </section>
    </>
  );
}
