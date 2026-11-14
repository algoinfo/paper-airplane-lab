import Link from "next/link";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqList } from "@/components/ui/FaqList";
import type { CategoryPage } from "@/data/categories";
import { getPlanesForCategory } from "@/data/categories";

export function CategoryPageView({ category }: { category: CategoryPage }) {
  const planes = getPlanesForCategory(category);

  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Paper Airplanes", href: "/paper-airplanes" },
          { name: category.title },
        ]}
      />
      <h1 className="font-display text-4xl font-semibold">{category.h1}</h1>
      <div className="prose-lab mt-4 max-w-3xl">
        {category.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">
          Recommended paper airplanes
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {planes.map((plane) => (
            <PlaneCard key={plane.slug} plane={plane} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">
          {category.comparisonTitle}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {category.comparisonPoints.map((point) => (
            <div key={point.label} className="card-surface p-5">
              <h3 className="font-semibold">{point.label}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{point.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Start folding</h2>
        <p className="mt-2 text-[var(--muted)]">
          Open any guide above, or browse the full library.
        </p>
        <Link href="/folding-guides" className="btn-primary mt-4 inline-flex">
          Browse folding guides
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">FAQ</h2>
        <div className="mt-5">
          <FaqList items={category.faq} withSchema />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Related pages</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {category.relatedPaths.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
