# Paper Airplane Lab

Fold. Fly. Experiment. — a paper airplane tutorial and exploration site.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Static-first content with local JSON/TS plane data
- Deployed to Cloudflare Workers via OpenNext

## Scripts

```bash
npm run dev      # local development
npm run build    # Next.js production build
npm run deploy   # OpenNext build + Cloudflare Workers deploy
```

## Live

- Production: https://paper-airplane-lab.algoinf.workers.dev

Set `NEXT_PUBLIC_SITE_URL` when using a custom domain.
