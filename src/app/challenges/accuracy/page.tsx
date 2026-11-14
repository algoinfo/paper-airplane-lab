import type { Metadata } from "next";
import Link from "next/link";
import { ScoreRecorder } from "@/components/challenges/ScoreRecorder";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Accuracy Challenge",
  description:
    "Set up a target zone accuracy challenge for paper airplanes and log your own scores in the browser.",
  path: "/challenges/accuracy",
});

export default function AccuracyChallengePage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Challenges", href: "/challenges" },
          { name: "Accuracy" },
        ]}
      />
      <h1 className="font-display text-4xl font-semibold">Accuracy Challenge</h1>
      <div className="prose-lab mt-4 max-w-3xl">
        <p>
          Place a hoop, taped square, or marked landing zone at a fixed distance.
          Score hits yourself. This page does not detect targets automatically.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Rules",
            text: "Ten throws per round. Award points for landing in the zone or passing through a hoop.",
          },
          {
            title: "How to test",
            text: "Keep the launch line fixed. Note whether you score first contact or resting position.",
          },
          {
            title: "Suggested planes",
            text: "Classic Dart, The Arrow, Fast Dart — designs that track straight.",
          },
        ].map((item) => (
          <div key={item.title} className="card-surface p-5">
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </section>

      <div className="mt-8">
        <ScoreRecorder challenge="accuracy" />
      </div>

      <p className="mt-6 text-sm text-[var(--muted)]">
        Learn why planes veer in{" "}
        <Link
          href="/paper-airplane-science/why-do-paper-airplanes-turn"
          className="text-[var(--accent)]"
        >
          Why Do Paper Airplanes Turn?
        </Link>
      </p>
    </div>
  );
}
