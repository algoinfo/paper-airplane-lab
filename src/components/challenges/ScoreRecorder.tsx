"use client";

import { useEffect, useState, type FormEvent } from "react";

export interface ChallengeScore {
  id: string;
  planeName: string;
  distance: string;
  flightTime: string;
  accuracyScore: string;
  testDate: string;
  challenge: string;
}

const STORAGE_KEY = "paper-airplane-lab-scores";

function readScores(): ChallengeScore[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChallengeScore[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function ScoreRecorder({ challenge }: { challenge: string }) {
  const [scores, setScores] = useState<ChallengeScore[]>([]);
  const [planeName, setPlaneName] = useState("");
  const [distance, setDistance] = useState("");
  const [flightTime, setFlightTime] = useState("");
  const [accuracyScore, setAccuracyScore] = useState("");
  const [testDate, setTestDate] = useState("");

  useEffect(() => {
    setScores(readScores().filter((score) => score.challenge === challenge));
    setTestDate(new Date().toISOString().slice(0, 10));
  }, [challenge]);

  function saveScore(event: FormEvent) {
    event.preventDefault();
    const entry: ChallengeScore = {
      id: crypto.randomUUID(),
      planeName: planeName.trim() || "Untitled plane",
      distance,
      flightTime,
      accuracyScore,
      testDate: testDate || new Date().toISOString().slice(0, 10),
      challenge,
    };
    const all = readScores().filter((score) => score.challenge !== challenge);
    const nextForChallenge = [entry, ...scores];
    const nextAll = [...all, ...nextForChallenge];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAll));
    setScores(nextForChallenge);
    setPlaneName("");
    setDistance("");
    setFlightTime("");
    setAccuracyScore("");
  }

  function clearScores() {
    const remaining = readScores().filter((score) => score.challenge !== challenge);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
    setScores([]);
  }

  return (
    <section className="card-surface p-5 sm:p-6">
      <h2 className="font-display text-2xl font-semibold">Record your test</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        These scores are saved only in your browser with localStorage. They are
        not measured automatically and are not a global leaderboard.
      </p>

      <form onSubmit={saveScore} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm sm:col-span-2">
          <span className="mb-1 block font-medium">Plane name</span>
          <input
            value={planeName}
            onChange={(event) => setPlaneName(event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] px-3 py-2"
            placeholder="Classic Dart"
            required
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium">Distance</span>
          <input
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] px-3 py-2"
            placeholder="e.g. 12 m"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium">Flight time</span>
          <input
            value={flightTime}
            onChange={(event) => setFlightTime(event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] px-3 py-2"
            placeholder="e.g. 4.2 s"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium">Accuracy score</span>
          <input
            value={accuracyScore}
            onChange={(event) => setAccuracyScore(event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] px-3 py-2"
            placeholder="e.g. 8/10"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium">Test date</span>
          <input
            type="date"
            value={testDate}
            onChange={(event) => setTestDate(event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] px-3 py-2"
          />
        </label>
        <div className="flex items-end gap-3 sm:col-span-2">
          <button type="submit" className="btn-primary">
            Save score
          </button>
          <button type="button" className="btn-secondary" onClick={clearScores}>
            Clear local scores
          </button>
        </div>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] text-[var(--muted)]">
              <th className="py-2 pr-3 font-medium">Plane</th>
              <th className="py-2 pr-3 font-medium">Distance</th>
              <th className="py-2 pr-3 font-medium">Flight time</th>
              <th className="py-2 pr-3 font-medium">Accuracy</th>
              <th className="py-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-4 text-[var(--muted)]">
                  No local scores yet for this challenge.
                </td>
              </tr>
            ) : (
              scores.map((score) => (
                <tr key={score.id} className="border-b border-[var(--border)]">
                  <td className="py-2 pr-3">{score.planeName}</td>
                  <td className="py-2 pr-3">{score.distance || "—"}</td>
                  <td className="py-2 pr-3">{score.flightTime || "—"}</td>
                  <td className="py-2 pr-3">{score.accuracyScore || "—"}</td>
                  <td className="py-2">{score.testDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
