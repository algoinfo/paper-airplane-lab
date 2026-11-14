import type { Metadata } from "next";
import Link from "next/link";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { airplanes } from "@/data/planes/airplanes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Folding Guides",
  description:
    "Browse step-by-step paper airplane folding guides for beginners through advanced designs. Printable instructions included on every plane page.",
  path: "/folding-guides",
});

export default function FoldingGuidesPage() {
  const easy = airplanes.filter((plane) => plane.difficulty === "Easy");
  const medium = airplanes.filter((plane) => plane.difficulty === "Medium");
  const advanced = airplanes.filter((plane) => plane.difficulty === "Advanced");

  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Folding Guides" }]}
      />
      <h1 className="font-display text-4xl font-semibold">
        Paper Airplane Folding Guides
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Every guide includes illustrated steps, progress controls, flying tips, and
        a print view. Start easy, then move up when your creases feel consistent.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Choose Your Paper",
            text: "A4 or Letter printer paper (about 70–90 gsm) folds cleanly and trims well.",
          },
          {
            title: "Follow the Folding Steps",
            text: "Use Next Step on each guide. Match both sides before you move on.",
          },
          {
            title: "Launch and Trim",
            text: "Throw level first. Adjust elevators only after you watch a few flights.",
          },
        ].map((item) => (
          <div key={item.title} className="card-surface p-5">
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </div>

      {[
        { title: "Easy guides", planes: easy },
        { title: "Medium guides", planes: medium },
        { title: "Advanced guides", planes: advanced },
      ].map((group) => (
        <section key={group.title} className="mt-12">
          <div className="flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold">{group.title}</h2>
            <Link
              href="/paper-airplanes"
              className="text-sm font-semibold text-[var(--accent)]"
            >
              Filter all
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.planes.map((plane) => (
              <PlaneCard key={plane.slug} plane={plane} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
