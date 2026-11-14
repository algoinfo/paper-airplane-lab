import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { href: "/paper-airplanes", label: "All airplanes" },
      { href: "/easy-paper-airplane", label: "Easy planes" },
      { href: "/paper-glider", label: "Gliders" },
      { href: "/fast-paper-airplane", label: "Fast planes" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/folding-guides", label: "Folding guides" },
      { href: "/paper-airplane-science", label: "Science" },
      { href: "/challenges", label: "Challenges" },
      { href: "/paper-airplanes-for-kids", label: "For kids" },
    ],
  },
  {
    title: "Popular",
    links: [
      { href: "/paper-airplanes/classic-dart", label: "Classic Dart" },
      { href: "/paper-airplanes/nakamura-lock", label: "Nakamura Lock" },
      { href: "/paper-airplanes/beginner-plane", label: "Beginner Plane" },
      { href: "/longest-flying-paper-airplane", label: "Long flight time" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="no-print mt-auto border-t border-[var(--border)] bg-[#f3f0e8]">
      <div className="container-page section-space grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-display text-2xl font-semibold">Paper Airplane Lab</p>
          <p className="mt-2 max-w-sm text-[var(--muted)]">
            Fold. Fly. Experiment. A modern paper airplane tutorial and exploration
            platform for curious makers worldwide.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container-page flex flex-col gap-2 py-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Paper Airplane Lab</p>
          <p>Built for learning, folding, and flying — not for invented records.</p>
        </div>
      </div>
    </footer>
  );
}
