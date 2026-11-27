import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  alternates: { canonical: null },
  robots: null,
};

export default function NotFound() {
  return (
    <div className="container-page section-space text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold">
        This page flew out of range
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
        The link may be outdated, or the plane you wanted has a different slug.
        Head back to the hangar and pick another design.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/paper-airplanes" className="btn-secondary">
          Explore airplanes
        </Link>
      </div>
    </div>
  );
}
