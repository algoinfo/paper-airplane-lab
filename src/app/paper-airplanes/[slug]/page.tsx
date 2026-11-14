import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FoldingGuide } from "@/components/planes/FoldingGuide";
import { PlaneCard } from "@/components/planes/PlaneCard";
import { FoldDiagram } from "@/components/planes/FoldDiagram";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqList } from "@/components/ui/FaqList";
import {
  airplanes,
  getAirplaneBySlug,
  getRelatedAirplanes,
} from "@/data/planes/airplanes";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return airplanes.map((plane) => ({ slug: plane.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plane = getAirplaneBySlug(slug);
  if (!plane) return {};

  return createMetadata({
    title: `${plane.name} Paper Airplane – Folding Instructions`,
    description: plane.description,
    path: `/paper-airplanes/${plane.slug}`,
  });
}

export default async function PlaneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plane = getAirplaneBySlug(slug);
  if (!plane) notFound();

  const related = getRelatedAirplanes(plane);
  const finished = plane.steps[plane.steps.length - 1];

  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Paper Airplanes", href: "/paper-airplanes" },
          { name: plane.name },
        ]}
      />

      <section className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <FoldDiagram
          variant={finished.diagram}
          title={`${plane.name} finished shape`}
          className="animate-rise"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Folding guide
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            {plane.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            {plane.longDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="badge">Difficulty: {plane.difficulty}</span>
            <span className="badge">Time: {plane.estimatedTime}</span>
            {plane.flightType.map((type) => (
              <span key={type} className="badge">
                {type}
              </span>
            ))}
          </div>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a href="#folding-guide" className="btn-primary">
              Start Folding
            </a>
            <Link href="/paper-airplanes" className="btn-secondary">
              Browse more planes
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <FoldingGuide planeName={plane.name} steps={plane.steps} />
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="font-display text-2xl font-semibold">Flying Tips</h2>
          <ul className="mt-4 space-y-3">
            {plane.tips.map((tip) => (
              <li key={tip} className="text-sm leading-relaxed text-[var(--muted)]">
                {tip}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface p-6">
          <h2 className="font-display text-2xl font-semibold">
            Paper Airplane Specifications
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-[var(--border)] py-2">
              <dt className="text-[var(--muted)]">Difficulty</dt>
              <dd className="font-medium">{plane.difficulty}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--border)] py-2">
              <dt className="text-[var(--muted)]">Folding time</dt>
              <dd className="font-medium">{plane.estimatedTime}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--border)] py-2">
              <dt className="text-[var(--muted)]">Paper size</dt>
              <dd className="font-medium">{plane.paperSize}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--border)] py-2">
              <dt className="text-[var(--muted)]">Best for</dt>
              <dd className="max-w-[60%] text-right font-medium">
                {plane.specifications.bestFor}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--border)] py-2">
              <dt className="text-[var(--muted)]">Flight style</dt>
              <dd className="max-w-[60%] text-right font-medium">
                {plane.specifications.flightStyle}
              </dd>
            </div>
            <div className="pt-2">
              <dt className="text-[var(--muted)]">Notes</dt>
              <dd className="mt-1 font-medium">{plane.specifications.notes}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-semibold">
          Related Paper Airplanes
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <PlaneCard key={item.slug} plane={item} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-semibold">
          {plane.name} FAQ
        </h2>
        <div className="mt-6">
          <FaqList items={plane.faq} withSchema />
        </div>
      </section>
    </div>
  );
}
