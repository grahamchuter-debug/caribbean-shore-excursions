import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getScheduleYearHubContent } from "@/data/schedule-year-hubs";
import { getSchedulePageContent } from "@/data/schedule-page-content";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleMasterYearHub } from "@/components/ShipScheduleMasterYearHub";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getScheduleYearHubFaqs } from "@/data/schedule-hub-faqs";
import { yearHubPath } from "@/lib/schedule-utils";

const YEAR = 2028 as const;
const content = getScheduleYearHubContent(YEAR);
const pageContent = getSchedulePageContent("year-2028");

export const metadata = buildMetadata({
  title: content.title,
  description: content.metaDescription,
  path: yearHubPath(YEAR),
  keywords: [
    "cruise ship schedule 2028",
    "ship schedule 2028",
    "Caribbean cruise schedule 2028",
    "Caribbean port schedule",
    "ships in port 2028",
  ],
});

export default function ShipSchedules2028Page() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ship Schedules", path: "/ship-schedules" },
    { name: "2028 Schedules", path: yearHubPath(YEAR) },
  ];

  const yearHubFaqs = getScheduleYearHubFaqs(YEAR);

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
          ...(yearHubFaqs?.length ? [faqSchema(yearHubFaqs)] : []),
        ]}
      />
      <PageHero
        title={content.title}
        subtitle={pageContent.heroSubtitle ?? content.heroSubtitle}
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-8 flex flex-wrap gap-3">
            <Link href="/ship-schedules" className="btn-secondary text-sm">
              Ship Schedules Home
            </Link>
            <Link href="/ship-schedules/2026" className="btn-secondary text-sm">
              View 2026 Schedules
            </Link>
            <Link href="/busiest-caribbean-cruise-ports-2028" className="btn-secondary text-sm">
              Busiest Ports 2028
            </Link>
            <Link href="/caribbean-cruise-calendar-2028" className="btn-secondary text-sm">
              Cruise Calendar 2028
            </Link>
          </div>
          <ShipScheduleMasterYearHub year={YEAR} />
        </div>
      </section>
    </>
  );
}
