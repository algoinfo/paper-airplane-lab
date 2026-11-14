import { JsonLd } from "@/components/seo/JsonLd";

export function FaqList({
  items,
  withSchema = false,
}: {
  items: Array<{ question: string; answer: string }>;
  withSchema?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="space-y-3">
      {withSchema ? <JsonLd data={schema} /> : null}
      {items.map((item) => (
        <details
          key={item.question}
          className="card-surface group px-5 py-4 open:bg-white"
        >
          <summary className="cursor-pointer list-none font-semibold marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="text-[var(--accent)] transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
