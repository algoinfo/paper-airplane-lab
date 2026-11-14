import type { Metadata } from "next";
import Link from "next/link";
import { ScoreRecorder } from "@/components/challenges/ScoreRecorder";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Flight Time Challenge",
  description:
    "Time-aloft challenge rules for paper airplanes, plus a browser-local score log for your own stopwatch results.",
  path: "/challenges/flight-time",
});

export default function FlightTimeChallengePage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Challenges", href: "/challenges" },
          { name: "Flight Time" },
        ]}
      />
      <h1 className="font-display text-4xl font-semibold">
        Flight Time Challenge
      </h1>
      <div className="prose-lab mt-4 max-w-3xl">
        <p>
          Start a stopwatch when the plane leaves your hand and stop when it
          first touches the floor. Soft launches and calm air usually help gliders.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Rules",
            text: "No catching mid-air. Ceiling hits count as the end of the flight. Record best of three.",
          },
          {
            title: "How to test",
            text: "One person throws, one times. Repeat with the same release height when possible.",
          },
          {
            title: "Suggested planes",
            text: "Wide Wing Glider, The Condor, The Glider, Stable Glider.",
          },
        ].map((item) => (
          <div key={item.title} className="card-surface p-5">
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </section>

      <div className="mt-8">
        <ScoreRecorder challenge="flight-time" />
      </div>

      <p className="mt-6 text-sm text-[var(--muted)]">
        Compare designs on the{" "}
        <Link
          href="/longest-flying-paper-airplane"
          className="text-[var(--accent)]"
        >
          long flight time
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
