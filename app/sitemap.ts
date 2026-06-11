import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPortSlugs } from "@/data/ports";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllExcursionTypeSlugs } from "@/data/excursion-types";
import { getAllCruiseLineSlugs } from "@/data/cruise-lines";
import { getAllSchedulePortSlugs } from "@/data/schedules";

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

  const schedulePages = getAllSchedulePortSlugs().map((slug) => ({
    url: `${base}/ship-schedules/${slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...portPages,
    ...comparePages,
    ...excursionPages,
    ...cruiseLinePages,
    ...schedulePages,
  ];
}
