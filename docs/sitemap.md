# Sitemap & URL decisions

Two sources: the live site (`infinitylimocar.com`, WordPress + Elementor, 57 URLs) and the unreleased redesign (`infinitylimocarnewwebsite.kinsta.cloud`, 314 URLs, noindex). The Figma wireframe follows the redesign's navigation.

## Rule

Keep the live slug whenever the page already exists there (no redirect, no ranking loss). New pages take the redesign's slug. `trailingSlash: true`.

## Built now (placeholders except home)

See `lib/seo/pages.ts` — 41 routes: core, 9 services, 6 corporate, 3 group, 6 airports, areas + DC/VA/MD hubs, nationwide/worldwide hub, fleet, about set, legal.

## Redirects in `next.config.mjs`

`/book-now`, `/booking`, `/request-a-quote-test` → `/get-a-quote/` · `/fleet-2` → `/fleet/`

## Later

- 22 live city pages (`/limo-and-black-car-service-in-{city}-{state}/`) — template + keep slugs.
- Fleet detail pages (`/our-fleet/*`, 10).
- Blog: 9 live posts (root-level slugs) + categories.
- Redesign extras: ~17 more services, ~60 airports, ~200 nationwide/worldwide pages — **business decision pending** (scope beyond DMV).
- Quote form backend: live uses Fluent Forms (4 steps, Google Places autocomplete). Decide: own form (API route + email/CRM) vs. Limo Anywhere (the redesign loads its LQC script but never uses it).

## Discrepancies to confirm with the client

- Fleet capacities differ between sites and within the live site.
- Membership list: live shows SWaM / US Small Business Chamber / Ride Responsibly / PAX; redesign adds VLA, MLA, MPI, PCMA, SGMP, chambers, USDOT, WMATC.
- Live schema declares `admin@limo.show` as email (wrong).
