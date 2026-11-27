import type { MetadataRoute } from "next";
import { categoryPages } from "@/data/categories";
import { airplanes } from "@/data/planes/airplanes";
import { scienceArticles } from "@/data/science/articles";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const withMeta = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
    modified: Date = lastModified,
  ) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: modified,
    changeFrequency,
    priority,
  });

  const staticRoutes = [
    "",
    "/paper-airplanes",
    "/folding-guides",
    "/challenges",
    "/challenges/distance",
    "/challenges/flight-time",
    "/challenges/accuracy",
    "/paper-airplane-science",
  ].map((path) => withMeta(path, "weekly", path === "" ? 1 : 0.8));

  const planeRoutes = airplanes.map((plane) =>
    withMeta(`/paper-airplanes/${plane.slug}`, "monthly", 0.9),
  );

  const categoryRoutes = categoryPages.map((category) =>
    withMeta(category.path, "weekly", 0.85),
  );

  const scienceRoutes = scienceArticles.map((article) =>
    withMeta(
      `/paper-airplane-science/${article.slug}`,
      "monthly",
      0.7,
      new Date(`${article.updatedAt}T08:00:00.000Z`),
    ),
  );

  return [...staticRoutes, ...planeRoutes, ...categoryRoutes, ...scienceRoutes];
}
