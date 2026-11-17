# Design system

Source: Figma `Infinity` → page **Brandbook** (logo, typography, palette, imagery) and **Home · Wireframe Final** (layout, components).

## Tokens (`app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--color-onyx` | `#15120F` | dark panels, primary text |
| `--color-gold` | `#EACE70` | primary button, accents on dark |
| `--color-gold-deep` | `#8A6D1F` | gold on light (eyebrows, links) — AA |
| `--color-oxblood` | `#501C22` | accent panel (airports) |
| `--color-stone` | `#9A9083` | accent, dashed borders |
| `--color-ivory` | `#F3EEE4` | text on dark |
| `--color-paper` | `#FBF9F4` | light panel |
| `--color-sand` | `#F0EBE1` | muted panel / card on paper |
| `--color-linen` | `#E9E3D7` | page frame |
| `--color-line` | `#D9D1C2` | dividers, muted text on dark |
| `--color-ink-muted` | `#6E665B` | secondary text on light |

## Type

Urbanist (display: 400/500/700) + Manrope (text: 400/500/600), via `next/font`.

Brandbook hierarchy (1920 canvas): Display 104 / H1 72 / H2 52 / H3 38 / Text 28 / Caption 24. On the web the same ratios sit on a 16px body:

| Level | Token | Desktop → mobile | Tracking |
|---|---|---|---|
| Display (home hero) | `--type-display` | 64 → 32 | −3% |
| H1 (inner hero) | `--type-h1` | 48 → 34 | −3% |
| H2 (section) | `--type-h2` | 36 → 28 | −2% |
| H3 (card/block) | `--type-h3` | 24 → 20 | −2% |
| Lead | `--type-lead` | 20 → 17 | 0 |
| Body / small / caption | 16 / 14 / 13 | | 0 |
| Eyebrow | 12, 600, uppercase | | 0.14em |

Use `<Heading level="h2" as="h3">` to decouple size from semantics.

## Components (`components/ui`)

- **Panel** `tone`: paper · sand · onyx · oxblood · gold. Every section is one.
- **Button** `variant`: primary (gold) · dark (onyx) · outline; `size` sm/md/lg; `tone="dark"` for outline on dark; `arrow` for the ↗ disc.
- **Heading**, **Eyebrow**, **SectionHead** (eyebrow + h2 + lead + action).
- **LinkCard** (title, line, ↗) · **ArrowDisc** · **Chip** (outline/filled) · **Accordion** (`<details>`) · **Media** (image or labeled placeholder) · **Logo** (mark / full, light/dark).

## Layout

Framed stack: rounded panels (24px) on a linen page, `--frame-gutter` around and `--frame-gap` between. Cards 16px radius, fields 12px, pills 999px.

## Pending from the client

- Official logo in SVG (only PNG exists).
- Hero video (fleet in DC, 15–20 s loop) + vertical cut for mobile.
- Photos: chauffeurs with the fleet, wedding arrival, fleet studio shots (the kinsta site has a usable set).
- Membership logos (NLA, VLA, MLA, GBTA, CTANJ exist on kinsta).
