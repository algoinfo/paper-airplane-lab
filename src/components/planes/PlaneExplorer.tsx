"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Difficulty, FlightType, PaperAirplane } from "@/data/planes/types";
import { DIFFICULTY_ORDER } from "@/data/planes/types";
import { PlaneCard } from "./PlaneCard";

const difficulties: Array<Difficulty | "All"> = ["All", "Easy", "Medium", "Advanced"];
const flightTypes: Array<FlightType | "All"> = [
  "All",
  "Distance",
  "Glider",
  "Stunt",
  "Speed",
  "Beginner",
];

type SortKey = "name" | "difficulty";

export function PlaneExplorer({ planes }: { planes: PaperAirplane[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [flightType, setFlightType] = useState<FlightType | "All">("All");
  const [sortBy, setSortBy] = useState<SortKey>("name");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const trimmed = query.trim();
      const current = searchParams.get("q") ?? "";
      if (trimmed === current) return;
      const params = new URLSearchParams(searchParams.toString());
      if (trimmed) params.set("q", trimmed);
      else params.delete("q");
      const next = params.toString();
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [query, pathname, router, searchParams]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const next = planes.filter((plane) => {
      const matchesQuery =
        !normalized ||
        plane.name.toLowerCase().includes(normalized) ||
        plane.description.toLowerCase().includes(normalized);
      const matchesDifficulty =
        difficulty === "All" || plane.difficulty === difficulty;
      const matchesFlight =
        flightType === "All" || plane.flightType.includes(flightType);
      return matchesQuery && matchesDifficulty && matchesFlight;
    });

    return next.sort((a, b) => {
      if (sortBy === "difficulty") {
        return DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
      }
      return a.name.localeCompare(b.name);
    });
  }, [planes, query, difficulty, flightType, sortBy]);

  return (
    <div>
      <div className="card-surface grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Search by name</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Classic Dart…"
            className="w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Difficulty</span>
          <select
            value={difficulty}
            onChange={(event) =>
              setDifficulty(event.target.value as Difficulty | "All")
            }
            className="w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
          >
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Flight type</span>
          <select
            value={flightType}
            onChange={(event) =>
              setFlightType(event.target.value as FlightType | "All")
            }
            className="w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
          >
            {flightTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortKey)}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
          >
            <option value="name">Name</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]">
        Showing {filtered.length} of {planes.length} paper airplanes. Filters run
        in your browser.
      </p>

      {filtered.length === 0 ? (
        <div className="card-surface mt-6 p-8 text-center">
          <p className="font-display text-xl font-semibold">No airplanes matched</p>
          <p className="mt-2 text-[var(--muted)]">
            Try clearing search or choosing a broader difficulty and flight type.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plane) => (
            <PlaneCard key={plane.slug} plane={plane} />
          ))}
        </div>
      )}
    </div>
  );
}
