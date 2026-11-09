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

1. Push this folder to its own Git repository (GitHub/GitLab).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings:
   - Framework preset: **None** (or Next.js (Static HTML Export))
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (or this folder, if it lives inside a monorepo)
4. Environment variables (Production), all optional — see `.env.example`:
   - `NODE_VERSION` = `20` (Next 16 needs Node ≥ 20.9)
   - `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`
5. **Save and Deploy.**
6. **Custom domains → Set up a custom domain** → `www.tiffny.online` (or whichever host you
   chose for `NEXT_PUBLIC_SITE_URL`). Keep the app on `tiffny.online`: the app's root URL
   redirects signed-out visitors to `/login`, and the Android app is pinned to that host.

Direct upload alternative (no Git): `npm run build && npx wrangler pages deploy out --project-name tiffny-landing`.

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
