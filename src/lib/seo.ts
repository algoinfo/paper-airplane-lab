import type { Metadata } from "next";
import { siteConfig } from "./site";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

type SocialImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  type = "website",
  images,
  publishedTime,
  modifiedTime,
  robots,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  images?: SocialImage[];
  publishedTime?: string;
  modifiedTime?: string;
  robots?: Metadata["robots"];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImages = images ?? [siteConfig.socialImage];
  const openGraph: Metadata["openGraph"] = {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    images: ogImages,
    ...(type === "article" && (publishedTime || modifiedTime)
      ? {
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : {}),
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(robots ? { robots } : {}),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((image) => image.url),
    },
  };
}