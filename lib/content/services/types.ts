/**
 * Content model for the service / corporate / group / airport / area /
 * nationwide pages. One object per route; `components/sections/service/
 * ServicePage` renders every block that is present, in a fixed order, so the
 * 31 pages share one template and stay light.
 *
 * Copy sources: the client's redesign (kinsta) for structure and facts, the
 * live site for FAQs. Rewritten tighter; nothing here is a price, a license
 * or a capacity that is not in lib/data or lib/site-config.
 */

/** A titled card. With `href` it renders as a LinkCard. */
export interface Item {
  title: string;
  text: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceContent {
  /** Hero lead (1–2 sentences). The H1 always comes from lib/seo/pages.ts. */
  lead: string;
  /** Hero eyebrow; defaults to siteConfig.serviceArea. */
  eyebrow?: string;
  image?: { src: string; alt: string };

  /** Lead paragraph(s) + 3–4 key points beside them. */
  intro: {
    eyebrow: string;
    title: string;
    body: readonly string[];
    points: readonly Item[];
  };

  /** Hubs: the child pages, as LinkCards (title = registry label). */
  children?: {
    eyebrow: string;
    title: string;
    lead?: string;
    links: readonly { href: string; text: string }[];
  };

  /** Use cases / what's included, as a card grid. */
  useCases?: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: readonly Item[];
  };

  /** "How it works", numbered 01–04 on an onyx panel. */
  steps?: {
    title: string;
    items: readonly Item[];
    /** The page's single availability / scope note, if it needs one. */
    note?: string;
  };

  /** Vehicles that fit, by FLEET slug (lib/data/fleet.ts). */
  vehicles?: {
    title: string;
    lead?: string;
    slugs: readonly string[];
  };

  /** Related routes (registered paths). Title + line come from the registry. */
  related: readonly string[];

  faqTitle?: string;
  faq: readonly FaqItem[];
}
