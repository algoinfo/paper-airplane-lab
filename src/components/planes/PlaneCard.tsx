import Link from "next/link";
import type { PaperAirplane } from "@/data/planes/types";
import { FoldDiagram } from "./FoldDiagram";

export function PlaneCard({ plane }: { plane: PaperAirplane }) {
  const preview = plane.steps[plane.steps.length - 1];

  return (
    <article className="card-surface flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
      <div className="border-b border-[var(--border)] bg-[#fbf9f5] p-3">
        <FoldDiagram
          variant={preview.diagram}
          title={plane.name}
          className="border-0 shadow-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl font-semibold">
            <Link href={`/paper-airplanes/${plane.slug}`} className="hover:text-[var(--accent)]">
              {plane.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {plane.description}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <span className="badge">{plane.difficulty}</span>
          {plane.flightType.map((type) => (
            <span key={type} className="badge">
              {type}
            </span>
          ))}
        </div>
        <Link
          href={`/paper-airplanes/${plane.slug}`}
          className="text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          View Folding Guide
        </Link>
      </div>
    </article>
  );
}
