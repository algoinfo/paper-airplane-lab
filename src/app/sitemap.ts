import type { MetadataRoute } from "next";
import { categoryPages } from "@/data/categories";
import { airplanes } from "@/data/planes/airplanes";
import { scienceArticles } from "@/data/science/articles";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/explore",
    "/paper-airplanes",
    "/folding-guides",
    "/challenges",
    "/challenges/distance",
    "/challenges/flight-time",
    "/challenges/accuracy",
    "/paper-airplane-science",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const planeRoutes = airplanes.map((plane) => ({
    url: `${siteConfig.url}/paper-airplanes/${plane.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryRoutes = categoryPages.map((category) => ({
    url: `${siteConfig.url}${category.path}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const scienceRoutes = scienceArticles.map((article) => ({
    url: `${siteConfig.url}/paper-airplane-science/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...planeRoutes, ...categoryRoutes, ...scienceRoutes];
}
