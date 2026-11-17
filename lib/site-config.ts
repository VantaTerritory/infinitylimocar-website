/* ============================================================
   SINGLE SOURCE OF TRUTH — business facts & shared copy.
   Edit here; the whole site reads from this file.
   Page-level SEO (titles/descriptions) lives in lib/seo/pages.ts.
   ============================================================ */

export const siteConfig = {
  name: "Infinity Limo Car",
  legalName: "Infinity LLC dba Infinity Limo Car",
  tagline: "Thoughtful · Precise · Personal",
  url: "https://infinitylimocar.com",
  locale: "en_US",

  phone: {
    display: "703-310-6160",
    tel: "+17033106160",
  },
  tollFree: { display: "866-844-5333", tel: "+18668445333" },
  email: "admin@infinitylimocar.com",
  hours: "24/7",
  address: {
    street: "7830 Backlick Rd, Suite B2B",
    city: "Springfield",
    region: "VA",
    postalCode: "22150",
    country: "US",
  },

  serviceArea: "Washington DC · Nationwide · Worldwide",

  cta: {
    quote: "Request a Quote",
    quoteShort: "Get a quote",
    call: "Call 703-310-6160",
  },

  // Home stats (wireframe). Confirm figures with the client before launch.
  stats: [
    { value: "13+", label: "Years Experience" },
    { value: "23+", label: "Premium Vehicles in Fleet" },
    { value: "325+", label: "Online Reviews" },
    { value: "200+", label: "Corporate Partners" },
  ],

  // Logo strip on the home ("Member of"). Same set the live site showed as
  // "Our Partners"; its files are gone from the server, so these are the
  // official logos (redesign uploads + each organization's site).
  // Pending from the client: SWaM certified logo (only downloadable from
  // their SBSD account).
  memberships: [
    { short: "NLA", label: "National Limousine Association · Ride Responsibly", logo: "/images/memberships/nla-ride-responsibly.webp", width: 444, height: 200 },
    { short: "GBTA", label: "Global Business Travel Association", logo: "/images/memberships/gbta.webp", width: 814, height: 200 },
    { short: "CTANJ", label: "Chauffeured Transportation Association of New Jersey", logo: "/images/memberships/ctanj.webp", width: 400, height: 200 },
    { short: "VLA", label: "Virginia Limousine Association", logo: "/images/memberships/vla.webp", width: 202, height: 200 },
    { short: "MLA", label: "Maryland Livery Association", logo: "/images/memberships/mla.webp", width: 206, height: 200 },
    { short: "PAX", label: "PAX Chauffeur Training", logo: "/images/memberships/pax.svg", width: 221, height: 221 },
    { short: "US Small Business Chamber", label: "US Small Business Chamber of Commerce", logo: "/images/memberships/us-small-business-chamber.webp", width: 120, height: 117 },
  ],

  credentials: { usdot: "3071239", wmatc: "2932" },

  social: {
    facebook: "https://www.facebook.com/infinitylimocar",
    instagram: "https://www.instagram.com/infinitylimocar",
    pinterest: "https://www.pinterest.com/infinitylimocar",
    x: "https://x.com/infinitylimocar",
  },

  reviews: {
    google: "https://www.google.com/maps/place/Infinity+Limo+Car/data=!4m2!3m1!1s0x0:0xdf2ba726ad0c5f1d",
    yelp: "https://www.yelp.com/biz/infinity-limo-car-springfield-4",
  },
} as const;

export type SiteConfig = typeof siteConfig;
