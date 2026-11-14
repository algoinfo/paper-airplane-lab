import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { scienceArticles } from "@/data/science/articles";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Science",
  description:
    "Learn how paper airplanes fly with clear articles on lift, gravity, balance, wing shape, and turning.",
  path: "/paper-airplane-science",
});

export default function ScienceIndexPage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Science" }]}
      />
      <h1 className="font-display text-4xl font-semibold">
        Paper Airplane Science
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Short, practical explanations you can test with real folds — not keyword
        filler articles.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {scienceArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/paper-airplane-science/${article.slug}`}
            className="card-surface block p-6 hover:border-[var(--accent)]"
          >
            <p className="text-sm text-[var(--muted)]">{article.readingTime} read</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">
              {article.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
