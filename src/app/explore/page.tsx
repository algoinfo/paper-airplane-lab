import type { Metadata } from "next";
import Link from "next/link";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { categoryPages } from "@/data/categories";
import { getFeaturedAirplanes } from "@/data/planes/airplanes";
import { scienceArticles } from "@/data/science/articles";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Explore Paper Airplanes, Guides & Challenges",
  description:
    "Explore paper airplane categories, popular designs, folding guides, challenges, and flight science from Paper Airplane Lab.",
  path: "/explore",
  robots: { index: false, follow: true },
});

export default function ExplorePage() {
  const featured = getFeaturedAirplanes(6);

  return (
    <div className="container-page section-space">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Explore" }]} />
      <h1 className="font-display text-4xl font-semibold">Explore</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Start with a goal — distance, glide, stunts, or learning — then open a
        folding guide and test your own flights.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Browse by goal</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryPages.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="card-surface block p-5 hover:border-[var(--accent)]"
            >
              <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                {category.intro[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold">Popular designs</h2>
          <Link href="/paper-airplanes" className="text-sm font-semibold text-[var(--accent)]">
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((plane) => (
            <PlaneCard key={plane.slug} plane={plane} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <Link href="/folding-guides" className="card-surface block p-6 hover:border-[var(--accent)]">
          <h2 className="font-display text-2xl font-semibold">Folding Guides</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Step-by-step instructions with printable views.
          </p>
        </Link>
        <Link href="/challenges" className="card-surface block p-6 hover:border-[var(--accent)]">
          <h2 className="font-display text-2xl font-semibold">Challenges</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Distance, flight time, and accuracy tests with local score logging.
          </p>
        </Link>
        <Link
          href="/paper-airplane-science"
          className="card-surface block p-6 hover:border-[var(--accent)] md:col-span-2"
        >
          <h2 className="font-display text-2xl font-semibold">Science library</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {scienceArticles.length} articles on lift, gravity, balance, wings, and turns.
          </p>
        </Link>
      </section>
    </div>
  );
}
