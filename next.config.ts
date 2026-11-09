import type { NextConfig } from 'next'

// Fully static export for Cloudflare Pages: `next build` writes plain HTML/CSS/JS
// to ./out. No Node.js runtime, no server features (headers()/rewrites() are not
// used — Cloudflare reads response headers from public/_headers instead).
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // Photos are pre-optimised to responsive WebP at build-asset time (see README).
  images: { unoptimized: true },
}

export default nextConfig
