"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/explore", label: "Explore" },
  { href: "/paper-airplanes", label: "Paper Airplanes" },
  { href: "/folding-guides", label: "Folding Guides" },
  { href: "/challenges", label: "Challenges" },
  { href: "/paper-airplane-science", label: "Science" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(251,250,246,0.9)] backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white">
            PAL
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Paper Airplane Lab
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((value) => !value)}
            className="hidden rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--muted)] sm:inline-flex"
          >
            Search
          </button>
          <Link href="/paper-airplanes" className="btn-primary hidden text-sm sm:inline-flex">
            Explore Airplanes
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-[var(--border)] bg-white">
          <form
            action="/paper-airplanes"
            className="container-page flex gap-2 py-3"
            onSubmit={() => setSearchOpen(false)}
          >
            <input
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search paper airplanes…"
              className="w-full rounded-full border border-[var(--border)] px-4 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
            <button type="submit" className="btn-primary text-sm">
              Search
            </button>
          </form>
        </div>
      ) : null}

      {open ? (
        <div className="border-t border-[var(--border)] bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/paper-airplanes"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-center text-sm"
            >
              Explore Airplanes
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
