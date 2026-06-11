import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllPortSlugs } from "@/data/ports";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllExcursionTypeSlugs } from "@/data/excursion-types";
import { getAllCruiseLineSlugs, getAllCruiseLinePageSlugs } from "@/data/cruise-lines";
import { getAllSchedulePortSlugs } from "@/data/schedules";
import { getAllRegionSlugs } from "@/data/regions";
import { getAllBestGuideSlugs } from "@/data/best-guides";
import { getAllItineraryPlannerSlugs } from "@/data/itinerary-planners";
import { getAllRegionalCruisePlannerSlugs } from "@/data/regional-cruise-planners";
import { portExcursionAuthority } from "@/data/port-excursion-authority";

export const dynamic = "force-static";

function sitemapEntry(
  path: string,
  now: Date,
  changeFrequency: "weekly" | "monthly" | "daily",
  priority: number,
) {
  return {
    url: absoluteUrl(SITE.url, path),
    lastModified: now,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/ports", priority: 0.8 },
    { path: "/cruise-planner", priority: 0.8 },
    { path: "/ship-schedules", priority: 0.8 },
    { path: "/cruise-lines", priority: 0.8 },
    { path: "/excursion-types", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ].map(({ path, priority }) => sitemapEntry(path, now, "weekly", priority));

  const portPages = getAllPortSlugs().map((slug) =>
    sitemapEntry(`/ports/${slug}`, now, "weekly", 0.9),
  );

  const comparePages = getAllComparisonSlugs().map((slug) =>
    sitemapEntry(`/compare/${slug}`, now, "monthly", 0.7),
  );

  const excursionPages = getAllExcursionTypeSlugs().map((slug) =>
    sitemapEntry(`/excursion-types/${slug}`, now, "monthly", 0.7),
  );

  const cruiseLinePages = getAllCruiseLineSlugs().map((slug) =>
    sitemapEntry(`/cruise-lines/${slug}`, now, "monthly", 0.7),
  );

  const cruiseLineGuidePages = getAllCruiseLinePageSlugs().map((slug) =>
    sitemapEntry(`/${slug}`, now, "weekly", 0.88),
  );

  const schedulePages = getAllSchedulePortSlugs().map((slug) =>
    sitemapEntry(`/ship-schedules/${slug}`, now, "daily", 0.6),
  );

  const regionPages = getAllRegionSlugs().map((slug) =>
    sitemapEntry(`/${slug}`, now, "weekly", 0.85),
  );

  const bestGuidePages = getAllBestGuideSlugs().map((slug) =>
    sitemapEntry(`/${slug}`, now, "weekly", 0.9),
  );

  const itineraryPages = getAllItineraryPlannerSlugs().map((slug) =>
    sitemapEntry(`/${slug}`, now, "weekly", 0.88),
  );

  const regionalPlannerPages = getAllRegionalCruisePlannerSlugs().map((slug) =>
    sitemapEntry(`/${slug}`, now, "weekly", 0.88),
  );

  const flagshipAuthorityPage = sitemapEntry(
    `/${portExcursionAuthority.slug}`,
    now,
    "weekly",
    0.95,
  );

  return [
    flagshipAuthorityPage,
    ...staticPages,
    ...bestGuidePages,
    ...cruiseLineGuidePages,
    ...itineraryPages,
    ...regionalPlannerPages,
    ...regionPages,
    ...portPages,
    ...comparePages,
    ...excursionPages,
    ...cruiseLinePages,
    ...schedulePages,
  ];
}
