import type { Metadata } from "next";
import { Suspense } from "react";
import { PlaneExplorer } from "@/components/planes/PlaneExplorer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { airplanes } from "@/data/planes/airplanes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Paper Airplane Designs – Explore & Filter",
  description:
    "Browse 20 paper airplane designs. Search by name and filter by difficulty or flight type for distance, glide, speed, stunts, and beginners.",
  path: "/paper-airplanes",
});

function ExplorerFallback() {
  return (
    <div className="card-surface p-8 text-sm text-[var(--muted)]">
      Loading airplane explorer…
    </div>
  );
}

export default function PaperAirplanesPage() {
  return (
    <div className="container-page section-space">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Paper Airplanes" },
        ]}
      />
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold">
          Paper Airplane Designs
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Explore the full library. Filtering happens in your browser — no account
          required.
        </p>
      </div>
      <div className="mt-8">
        <Suspense fallback={<ExplorerFallback />}>
          <PlaneExplorer planes={airplanes} />
        </Suspense>
      </div>
    </div>
  );
}
