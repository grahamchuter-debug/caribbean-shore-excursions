import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    "",
    "/ports",
    "/cruise-planner",
    "/ship-schedules",
    "/cruise-lines",
    "/excursion-types",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const portPages = getAllPortSlugs().map((slug) => ({
    url: `${base}/ports/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const comparePages = getAllComparisonSlugs().map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const excursionPages = getAllExcursionTypeSlugs().map((slug) => ({
    url: `${base}/excursion-types/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cruiseLinePages = getAllCruiseLineSlugs().map((slug) => ({
    url: `${base}/cruise-lines/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cruiseLineGuidePages = getAllCruiseLinePageSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const schedulePages = getAllSchedulePortSlugs().map((slug) => ({
    url: `${base}/ship-schedules/${slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  const regionPages = getAllRegionSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const bestGuidePages = getAllBestGuideSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const itineraryPages = getAllItineraryPlannerSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const regionalPlannerPages = getAllRegionalCruisePlannerSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const flagshipAuthorityPage = {
    url: `${base}/${portExcursionAuthority.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  };

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
