import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Challenges",
  description:
    "Try distance, flight time, and accuracy paper airplane challenges. Record your own scores locally in the browser.",
  path: "/challenges",
});

const challenges = [
  {
    href: "/challenges/distance",
    title: "Distance Challenge",
    text: "Measure how far your plane travels with a tape measure or marked hallway.",
  },
  {
    href: "/challenges/flight-time",
    title: "Flight Time Challenge",
    text: "Use a stopwatch from release to landing and compare glider designs.",
  },
  {
    href: "/challenges/accuracy",
    title: "Accuracy Challenge",
    text: "Aim at a target zone and score hits yourself — no automatic sensors.",
  },
];

export default function ChallengesPage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Challenges" }]} />
      <h1 className="font-display text-4xl font-semibold">
        Paper Airplane Challenges
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        First-version challenges explain the rules and let you store scores in
        localStorage. They do not measure physics automatically and do not create
        global rankings.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {challenges.map((challenge) => (
          <Link
            key={challenge.href}
            href={challenge.href}
            className="card-surface block p-6 hover:border-[var(--accent)]"
          >
            <h2 className="font-display text-2xl font-semibold">
              {challenge.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{challenge.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
