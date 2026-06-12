import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getScheduleYearHubContent } from "@/data/schedule-year-hubs";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleMasterYearHub } from "@/components/ShipScheduleMasterYearHub";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { yearHubPath } from "@/lib/schedule-utils";

const YEAR = 2026 as const;
const content = getScheduleYearHubContent(YEAR);

export const metadata = buildMetadata({
  title: content.title,
  description: content.metaDescription,
  path: yearHubPath(YEAR),
  keywords: [
    "cruise ship schedule 2026",
    "Caribbean cruise schedule 2026",
    "ships in port 2026",
    "Caribbean port schedule",
  ],
});

export default function ShipSchedules2026Page() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: "2026 Schedules", path: yearHubPath(YEAR) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: content.title,
            description: content.metaDescription,
            path: yearHubPath(YEAR),
          }),
        ]}
      />
      <PageHero title={content.title} subtitle={content.heroSubtitle} />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-8 flex flex-wrap gap-3">
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
            <Link href="/ship-schedules/2027" className="btn-secondary text-sm">
              View 2027 Schedules
            </Link>
          </div>
          <ShipScheduleMasterYearHub year={YEAR} />
        </div>
      </section>
    </>
  );
}
