const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://paper-airplane-lab.pages.dev"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Paper Airplane Lab",
  tagline: "Fold. Fly. Experiment.",
  description:
    "Learn how to fold paper airplanes with illustrated guides for distance, flight time, easy designs, gliders, and stunts. Free step-by-step instructions for kids and beginners.",
  url: siteUrl,
  locale: "en_US",
  socialImage: {
    url: `${siteUrl}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: "Paper Airplane Lab – step-by-step folding guides and designs",
  },
};
