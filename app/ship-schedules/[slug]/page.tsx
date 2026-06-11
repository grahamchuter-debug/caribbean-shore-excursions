import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getSchedulePortBySlug, getAllSchedulePortSlugs } from "@/data/schedules";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipSchedulePageView } from "@/components/ShipSchedulePageView";
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
      title: port.seoTitle,
      description: port.metaDescription,
      path: `/ship-schedules/${slug}`,
      keywords: [
        `${port.name} ship schedule`,
        `${port.name} cruise schedule 2026`,
        "ships in port",
        "cruise arrival times",
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
            title: port.seoTitle,
            description: port.metaDescription,
            path: `/ship-schedules/${slug}`,
          }),
          ...(port.faqs?.length ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero
        title={`${port.name} Cruise Ship Schedule 2026`}
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
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              All Ship Schedules
            </Link>
          </div>

          <ShipSchedulePageView port={port} />

          <p className="mt-8 text-sm text-gray-500">
            Arrival and departure times are published for planning purposes and may change due to
            weather, tender conditions, or cruise line schedule adjustments. Always confirm final
            times with your ship before disembarking.
          </p>
        </div>
      </section>
    </>
  );
}
