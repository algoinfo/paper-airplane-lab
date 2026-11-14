import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAirplaneBySlug } from "@/data/planes/airplanes";
import {
  getScienceArticle,
  scienceArticles,
} from "@/data/science/articles";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return scienceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getScienceArticle(slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/paper-airplane-science/${article.slug}`,
    type: "article",
  });
}

export default async function ScienceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getScienceArticle(slug);
  if (!article) notFound();

  const relatedPlanes = article.relatedPlaneSlugs
    .map((planeSlug) => getAirplaneBySlug(planeSlug))
    .filter((plane): plane is NonNullable<typeof plane> => Boolean(plane));

  const relatedArticles = article.relatedArticleSlugs
    .map((articleSlug) => getScienceArticle(articleSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="container-page section-space">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
          mainEntityOfPage: absoluteUrl(
            `/paper-airplane-science/${article.slug}`,
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Science", href: "/paper-airplane-science" },
          { name: article.title },
        ]}
      />
      <p className="text-sm text-[var(--muted)]">{article.readingTime} read</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">{article.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">{article.summary}</p>

      <div className="mt-8 space-y-8">
        {article.sections.map((section) => (
          <section key={section.heading} className="card-surface p-6">
            <h2 className="font-display text-2xl font-semibold">
              {section.heading}
            </h2>
            <div className="prose-lab mt-3">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {relatedPlanes.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Planes to try with this idea
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPlanes.map((plane) => (
              <PlaneCard key={plane.slug} plane={plane} />
            ))}
          </div>
        </section>
      ) : null}

      {relatedArticles.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Keep reading</h2>
          <ul className="mt-4 space-y-2">
            {relatedArticles.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/paper-airplane-science/${item.slug}`}
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
