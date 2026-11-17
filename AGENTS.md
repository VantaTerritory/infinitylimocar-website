# Repository Guidelines

## Project Structure

Next.js 16 App Router site in strict TypeScript, same layout as the other Terra Agency sites (relier-website, drkalsow-website).

- `app/` — one folder per route (WordPress slugs kept, see `docs/sitemap.md`), `layout.tsx`, `globals.css` (design tokens), `robots.ts`, `sitemap.ts`.
- `components/ui/` — design-system primitives: `Button`, `Heading`, `Eyebrow`, `SectionHead`, `Panel`, `Chip`, `LinkCard`, `ArrowDisc`, `Accordion`, `Media`, `Logo`, `JsonLd`.
- `components/layout/` — `Nav`, `Footer`, `PagePlaceholder`.
- `components/sections/<page>/` — page sections (home first).
- `components/booking/` — quote flow (`QuoteWidget`).
- `components/effects/` — `Reveal` (GSAP + IntersectionObserver).
- `lib/site-config.ts` — business facts (NAP, stats, memberships, socials). Single source of truth.
- `lib/seo/pages.ts` — page registry: path, label, H1, title, description, group. Nav, footer, sitemap and metadata read from it.
- `lib/navigation.ts` — header/footer menus built from the registry.
- `lib/data/` — section content (services, fleet, coverage, itineraries, FAQ, testimonials).
- `docs/` — design system and sitemap notes.

## Adding a page

1. Add an entry to `ENTRIES` in `lib/seo/pages.ts`.
2. Create `app/<slug>/page.tsx` with `export const metadata = pageMetadata(PATH)`.
3. If it belongs in a menu, check `lib/navigation.ts` (groups are pulled automatically).

## Design system rules

- Colors, type sizes, radii and spacing come from tokens in `app/globals.css`. Never hard-code them in a module.
- Titles always go through `<Heading level>`; buttons always through `<Button>`; sections are `<Panel tone>`.
- No inline `style`. CSS Modules beside each component.
- `"use client"` only when there is state or effects.
- Prohibited: shadcn, Radix, MUI, framer-motion, lottie. Motion = GSAP via `useGSAP`.

## Commands

- `npm run dev` — local server.
- `npm run build` — production build with webpack (the one Hostinger runs; Turbopack lives in `build:turbo`).
- `npm run lint` · `npm run typecheck`.

Never run `next build` with the dev server up (they share `.next`).

## Config

`next.config.mjs` stays `.mjs` (Hostinger's glibc 2.17 cannot transpile a TS config). `trailingSlash: true` keeps WordPress URLs identical.

## Commits

Scoped, imperative: `feat(home): ...`, `fix(nav): ...`, `copy(home): ...`. Never commit `.env*`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
