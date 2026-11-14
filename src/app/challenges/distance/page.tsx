import type { Metadata } from "next";
import Link from "next/link";
import { ScoreRecorder } from "@/components/challenges/ScoreRecorder";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Distance Challenge",
  description:
    "Rules and a local score sheet for a paper airplane distance challenge. Measure throws yourself and compare designs.",
  path: "/challenges/distance",
});

export default function DistanceChallengePage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Challenges", href: "/challenges" },
          { name: "Distance" },
        ]}
      />
      <h1 className="font-display text-4xl font-semibold">Distance Challenge</h1>
      <div className="prose-lab mt-4 max-w-3xl">
        <p>
          Throw from a marked start line and measure where the nose first touches
          the ground or a wall. Use the same thrower and similar effort when
          comparing planes.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Rules",
            text: "Three official throws per plane. Record the best legal throw. Restarts only if the plane hits you on release.",
          },
          {
            title: "How to test",
            text: "Use a tape measure, hallway marks, or cones. Note indoor vs outdoor conditions.",
          },
          {
            title: "Suggested planes",
            text: "Classic Dart, Nakamura Lock, Long Distance Dart, Bulldog Dart.",
          },
        ].map((item) => (
          <div key={item.title} className="card-surface p-5">
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </section>

      <div className="mt-8">
        <ScoreRecorder challenge="distance" />
      </div>

      <p className="mt-6 text-sm text-[var(--muted)]">
        Need a plane? Try the{" "}
        <Link href="/paper-airplanes/nakamura-lock" className="text-[var(--accent)]">
          Nakamura Lock
        </Link>{" "}
        or browse{" "}
        <Link href="/fast-paper-airplane" className="text-[var(--accent)]">
          fast / distance designs
        </Link>
        .
      </p>
    </div>
  );
}
