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
import { ScheduleHub } from "@/components/ScheduleHub";
import { SpecialistLocalGuide } from "@/components/SpecialistLocalGuide";
import { getPortBySlug } from "@/data/ports";
import { AuthorityHubLinks } from "@/components/AuthorityHubLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

const HUB_PORT_SLUGS = new Set([
  "st-thomas",
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
]);

export function generateStaticParams() {
  return getAllSchedulePortSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const port = getSchedulePortBySlug(slug);
    if (!port) return {};
    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule 2026–2027`,
      description: `2026 and 2027 cruise ship schedules for ${port.name}, ${port.country}. View arrival times, cruise lines visiting, and monthly ship calls for excursion planning.`,
      path: `/ship-schedules/${slug}`,
      keywords: [
        `${port.name} ship schedule`,
        `${port.name} cruise schedule`,
        "ships in port",
        "2026 cruise schedule",
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

  const schedule = getScheduleForPort(slug);
  const isHubPort = HUB_PORT_SLUGS.has(slug);
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
            title: `${port.name} Cruise Ship Schedule 2026–2027`,
            description: port.scheduleOverview ?? port.description,
            path: `/ship-schedules/${slug}`,
          }),
        ]}
      />
      <PageHero
        title={`${port.name} Cruise Ship Schedule`}
        subtitle={`${port.years ?? "2026–2027"} ship calls — ${port.description}`}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-6 flex flex-wrap gap-4">
            <Link href={`/ports/${slug}`} className="btn-secondary text-sm">
              {port.name} Port Guide
            </Link>
            <Link href="/cruise-lines" className="btn-secondary text-sm">
              Cruise Lines
            </Link>
            <Link href="/excursion-types" className="btn-secondary text-sm">
              Excursion Types
            </Link>
          </div>

          <ScheduleHub
            entries={schedule}
            portName={port.name}
            scheduleOverview={port.scheduleOverview ?? port.description}
            isHubPort={isHubPort}
          />

          <p className="mt-6 text-sm text-gray-500">
            Arrival and departure times are published for planning purposes and may change due to
            weather, tender conditions, or cruise line schedule adjustments. Always confirm final
            times with your ship before disembarking.
          </p>

          {getPortBySlug(slug) && (
            <div className="mt-10">
              <SpecialistLocalGuide portSlug={slug} />
            </div>
          )}

          <div className="mt-10">
            <AuthorityHubLinks current="schedules" portSlug={slug} />
          </div>
        </div>
      </section>
    </>
  );
}
