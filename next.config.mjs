// @ts-check

/**
 * Plain .mjs on purpose, not .ts (same rule as drkalsow-website / relier-website):
 * Hostinger's Node host runs glibc 2.17, the native SWC binary does not load
 * there and the WASM fallback cannot transpile a TypeScript config. For the same
 * reason `npm run build` uses `--webpack` (Turbopack has no WASM fallback).
 */

/**
 * Legacy URLs of the live WordPress site that this build does not reproduce.
 * Slugs that still exist here need no redirect (they were kept on purpose).
 * Pending: the 22 city pages and the blog posts, once those templates exist.
 */
const LEGACY_REDIRECTS = [
  { source: "/book-now", destination: "/get-a-quote/" },
  { source: "/booking", destination: "/get-a-quote/" },
  { source: "/request-a-quote-test", destination: "/get-a-quote/" },
  { source: "/fleet-2", destination: "/fleet/" },
];

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), usb=(), browsing-topics=()" },
];

const MEDIA_CACHE = {
  key: "Cache-Control",
  value: "public, max-age=2592000, stale-while-revalidate=604800",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // WordPress URLs end in "/" (relier-website precedent): keep them identical.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      // Media in /public has no hash in the filename: rename on replace.
      { source: "/images/:path*", headers: [MEDIA_CACHE] },
      { source: "/videos/:path*", headers: [MEDIA_CACHE] },
    ];
  },
  // Destinations carry the trailing slash: one 308 hop, not two.
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
