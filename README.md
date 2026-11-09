# Tiffny — landing site

The public marketing site for Tiffny. A standalone, fully static Next.js app
(static export), separate from the product app in `../Tiffny/tiffin-next`, so it
can be deployed to Cloudflare Pages without touching the production app.

- **Stack:** Next.js 16 (App Router, `output: 'export'`), React 19, Tailwind CSS 4, lucide-react
- **Fonts:** Plus Jakarta Sans + Fraunces (italic accents), self-hosted at build time via `next/font`
- **No backend, no database, no auth, no runtime secrets.**

## Routes

| Route | What |
|---|---|
| `/` | Landing page (anchors: `#how-it-works`, `#customers`, `#vendors`, `#platform`, `#about`) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/credits` | Photo credits (required by the CC licences) |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Generated at build |
| `404.html` | Not-found page (Cloudflare Pages serves it automatically) |

CTAs link into the existing app: `/login`, `/signup` (customer) and
`/vendor-auth/signup` (vendor) on `NEXT_PUBLIC_APP_URL`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3002
npm run build      # static output in ./out
npm run preview    # serve ./out locally
```

## Deploy to Cloudflare Pages

This is a **Pages** project serving plain static files. It is **not** a Worker:
there is no `wrangler.jsonc`, no OpenNext adapter and no `wrangler deploy` step.

> **Pitfall:** In the Cloudflare dashboard, *Workers & Pages → Create* defaults to
> creating a **Worker**. If you import this repo there, Workers Builds detects
> Next.js, installs `@opennextjs/cloudflare`, writes a `wrangler.jsonc` and runs
> `npx wrangler deploy`, which fails on a static export
> (`.next/standalone/.next/server/pages-manifest.json` not found). Always pick the
> **Pages** tab ("Import an existing Git repository" under Pages).

1. Cloudflare dashboard → **Workers & Pages → Create → Pages tab → Import an existing Git repository**
   → select `Vikramsinghpanwar/Tiffny-Page`.
2. Build settings:
   - Production branch: `main`
   - Framework preset: **Next.js (Static HTML Export)** (or **None**)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: *(leave empty)*
3. Environment variables (Production), all optional — see `.env.example`:
   `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`.
   Node.js 22 is picked up from `.node-version` (a `NODE_VERSION` variable also works).
4. **Save and Deploy.** Every push to `main` redeploys automatically.
5. **Custom domains → Set up a custom domain** → `www.tiffny.online`.
   Leave `tiffny.online` (the app) and `api.tiffny.online` (the API) untouched.

No SPA fallback or `_redirects` file is needed: every route is a real HTML file.
Security and caching headers live in `public/_headers`.

## Content rules

Copy describes only features that exist in the app today (verified against
`tiffin-next` pages and the backend). There are no customer counts, ratings,
testimonials or partner logos. The device previews in `components/Mockups.tsx`
are coded recreations of real screens filled with sample data, and are labelled
as such on the page.

## Images

Photos are from Wikimedia Commons (CC BY / CC BY-SA), cropped and encoded to
responsive WebP variants in `public/images` (`<name>-<width>.webp`). Attribution
lives in `lib/photos.ts` and renders on `/credits`. To replace a photo, add new
variants with the same naming and update `lib/photos.ts`.
