"use client";

import { useState } from "react";
import type { FoldStep } from "@/data/planes/types";
import { FoldDiagram } from "./FoldDiagram";

export function FoldingGuide({
  planeName,
  steps,
}: {
  planeName: string;
  steps: FoldStep[];
}) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const progress = ((index + 1) / steps.length) * 100;

  return (
    <section id="folding-guide" className="card-surface overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">
              Step {index + 1} of {steps.length}
            </p>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              How to Fold a {planeName} Paper Airplane
            </h2>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-secondary text-sm"
              onClick={() => setIndex(0)}
            >
              Restart Guide
            </button>
            <button
              type="button"
              className="btn-primary text-sm"
              onClick={() => window.print()}
            >
              Print Guide
            </button>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--accent-soft)]">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
        <FoldDiagram variant={step.diagram} title={step.title} />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
            Step {index + 1}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
            {step.instruction}
          </p>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-secondary"
              disabled={index === 0}
              onClick={() => setIndex((value) => Math.max(0, value - 1))}
            >
              Previous Step
            </button>
            <button
              type="button"
              className="btn-primary"
              disabled={index === steps.length - 1}
              onClick={() =>
                setIndex((value) => Math.min(steps.length - 1, value + 1))
              }
            >
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className="print-only border-t border-[var(--border)] p-5">
        <h3 className="font-display text-xl font-semibold">All folding steps</h3>
        <ol className="mt-4 space-y-6">
          {steps.map((item, stepIndex) => (
            <li key={item.title} className="grid gap-3 sm:grid-cols-[180px_1fr]">
              <FoldDiagram variant={item.diagram} title={`Step ${stepIndex + 1}`} />
              <div>
                <p className="font-semibold">
                  Step {stepIndex + 1}: {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.instruction}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
