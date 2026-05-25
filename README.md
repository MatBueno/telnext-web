# telnext-web

Landing page and developer portal for [Telnext](https://telnext.dev) — an intelligent routing layer for CAMARA / Open Gateway APIs.

> One API. Every network. No telco contracts.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styles | Tailwind CSS + CSS custom properties |
| Fonts | Syne · Instrument Sans · JetBrains Mono (via `next/font/google`) |
| Deploy | Vercel |

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Build for production
npm run build
```

## Project structure

```
telnext-web/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata
│   ├── page.tsx            # Landing page (all sections)
│   ├── pricing/page.tsx    # Pricing page
│   ├── docs/page.tsx       # Developer docs
│   ├── coverage/page.tsx   # Coverage map detail
│   └── api/
│       └── waitlist/route.ts  # POST /api/waitlist → data/waitlist.json
├── components/
│   ├── nav.tsx             # Sticky nav with brand lockup
│   ├── hero.tsx            # Hero section with stats
│   ├── code-window.tsx     # Tabbed code example (TS / Python / cURL)
│   ├── how-it-works.tsx    # 5-node routing flow diagram
│   ├── apis-section.tsx    # 4 API cards
│   ├── coverage-map.tsx    # Country × carrier grid
│   ├── sandbox-widget.tsx  # Interactive mock request builder
│   ├── pricing-section.tsx # 3-tier pricing cards
│   ├── waitlist.tsx        # Email capture form
│   └── footer.tsx          # Footer links
├── lib/
│   └── constants.ts        # Shared copy, API/coverage data
├── public/
│   └── logo/
│       ├── icon.svg             # Primary blue icon
│       ├── icon-mono-dark.svg   # White icon (dark backgrounds)
│       ├── icon-mono-light.svg  # Dark icon (light backgrounds)
│       └── favicon.svg          # Simplified favicon
├── data/
│   └── waitlist.json       # Dev-only email store (use a DB in prod)
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## Design system

All design tokens live in `app/globals.css` under `:root`. Font variables are injected at the `<html>` element by `next/font/google` and referenced via `var(--font-display)` etc.

| Token group | Prefix |
|---|---|
| Backgrounds | `--bg`, `--bg-elev-1` … `--bg-elev-3` |
| Borders | `--border-subtle`, `--border`, `--border-strong` |
| Text | `--ink`, `--ink-mute`, `--ink-dim`, `--ink-faint` |
| Accent | `--blue-300` … `--blue-700`, `--blue-glow` |
| Semantic | `--success`, `--warning`, `--danger` |
| Fonts | `--font-display`, `--font-body`, `--font-mono` |

## Waitlist persistence

In development, `POST /api/waitlist` appends to `data/waitlist.json`. On Vercel, the filesystem is ephemeral — replace the file I/O in `app/api/waitlist/route.ts` with a database call (Postgres, Supabase, Upstash, etc.) before going to production.

## Environment variables

None required for local development. For production:

```bash
# (optional) override API base URL in the sandbox widget
NEXT_PUBLIC_API_URL=https://api.telnext.dev
```

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to Vercel for automatic deploys on push.
