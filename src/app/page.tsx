import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { FaqList } from "@/components/ui/FaqList";
import { getFeaturedAirplanes } from "@/data/planes/airplanes";
import { homeFaqs } from "@/data/home-faq";
import { scienceArticles } from "@/data/science/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "How to Make Paper Airplanes – Step-by-Step Folding Guides",
  description:
    "Learn how to fold paper airplanes with illustrated guides for distance, long flight time, easy designs, gliders, and stunts. Free step-by-step instructions for kids and beginners.",
  path: "/",
});

const categories = [
  {
    href: "/fast-paper-airplane",
    title: "Long Distance",
    text: "Darts and locked-nose designs for farther throws.",
  },
  {
    href: "/longest-flying-paper-airplane",
    title: "Long Flight Time",
    text: "Gliders that reward soft launches and calm air.",
  },
  {
    href: "/easy-paper-airplane",
    title: "Easy to Fold",
    text: "Short sequences for first-time folders.",
  },
  {
    href: "/stunt-paper-airplane",
    title: "Stunt Planes",
    text: "Loops, curves, and experimental return paths.",
  },
  {
    href: "/paper-glider",
    title: "Paper Gliders",
    text: "Wide wings for floaty indoor flights.",
  },
];

const challenges = [
  {
    href: "/challenges/distance",
    title: "Distance Challenge",
    text: "Measure your own throws and log results locally.",
  },
  {
    href: "/challenges/flight-time",
    title: "Flight Time Challenge",
    text: "Time aloft with a stopwatch and compare designs.",
  },
  {
    href: "/challenges/accuracy",
    title: "Accuracy Challenge",
    text: "Aim for targets and track your own accuracy scores.",
  },
];

const scienceTopics = [
  { slug: "what-is-lift", label: "Lift" },
  { slug: "how-do-paper-airplanes-fly", label: "Drag" },
  { slug: "how-gravity-affects-paper-airplanes", label: "Gravity" },
  { slug: "how-to-balance-a-paper-airplane", label: "Center of Gravity" },
  { slug: "how-wing-shape-changes-flight", label: "Wing Design" },
];

export default function HomePage() {
  const featured = getFeaturedAirplanes(6);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteConfig.url}/#organization`,
              name: siteConfig.name,
              url: siteConfig.url,
            },
            {
              "@type": "WebSite",
              "@id": `${siteConfig.url}/#website`,
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              publisher: { "@id": `${siteConfig.url}/#organization` },
              inLanguage: "en",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteConfig.url}/paper-airplanes?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }}
      />

      <section className="container-page section-space">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Discover the Best Paper Airplanes
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Explore paper airplane designs, follow easy folding instructions, and
              find the perfect plane for distance, speed, and tricks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/paper-airplanes" className="btn-primary">
                Explore Paper Airplanes
              </Link>
              <Link href="/folding-guides" className="btn-secondary">
                Learn How to Fold
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                "Easy Step-by-Step Instructions",
                "Designs for Every Skill Level",
                "Printable Folding Guides",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-float relative overflow-hidden rounded-[28px] border border-[var(--border)] shadow-[var(--shadow)]">
            <Image
              src="/images/hero/hero-paper-airplane.svg"
              alt="A white paper airplane flying through soft indoor light"
              width={1200}
              height={675}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Explore Popular Paper Airplanes
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Find your next paper airplane and discover how it flies.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((plane) => (
              <PlaneCard key={plane.slug} plane={plane} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            What Kind of Paper Airplane Do You Want to Make?
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="card-surface block p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{category.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-space bg-[#f3f0e8]/70">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Learn How to Fold a Paper Airplane
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Choose Your Paper",
                text: "Use A4 or Letter printer paper for predictable creases and trim.",
              },
              {
                step: "2",
                title: "Follow the Folding Steps",
                text: "Move through illustrated steps one at a time and keep both sides matched.",
              },
              {
                step: "3",
                title: "Launch Your Paper Airplane",
                text: "Start with a level throw, then adjust elevators based on what you see.",
              },
            ].map((item) => (
              <div key={item.step} className="card-surface p-6">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  Step {item.step}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <Link href="/folding-guides" className="btn-primary mt-8 inline-flex">
            Browse All Folding Guides
          </Link>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready for a Paper Airplane Challenge?
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {challenges.map((challenge) => (
            <Link
              key={challenge.href}
              href={challenge.href}
              className="card-surface block p-6 transition hover:border-[var(--accent)]"
            >
              <h3 className="font-display text-2xl font-semibold">
                {challenge.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{challenge.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-space bg-white/60">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Discover the Science Behind Paper Airplanes
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {scienceTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/paper-airplane-science/${topic.slug}`}
                className="card-surface block p-5 text-center font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {topic.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Start with{" "}
            <Link
              href={`/paper-airplane-science/${scienceArticles[0].slug}`}
              className="font-medium text-[var(--accent)] hover:underline"
            >
              {scienceArticles[0].title}
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-8">
          <FaqList items={homeFaqs} withSchema />
        </div>
      </section>
    </>
  );
}
