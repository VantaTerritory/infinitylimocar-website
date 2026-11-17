/**
 * Fleet — single source for the home cards, the fleet page and the quote form.
 * Names, models and capacities from the client's redesign (/fleet/, kinsta),
 * which is the most complete table. The live site disagrees on several
 * capacities: confirm with the client before launch (docs/sitemap.md).
 * Images: studio renders from the redesign, background removed (transparent
 * cutouts) so the black vehicles read on light surfaces.
 */
export interface Vehicle {
  slug: string;
  name: string;
  models: string;
  passengers: string;
  bags: string;
  text: string;
  image: string;
  /** Matching `vehicle_category` value of the quote form (lib/data/quote.ts). */
  quoteCategory: string;
}

export const FLEET: Vehicle[] = [
  {
    slug: "sedan",
    name: "Executive Sedan",
    models: "Volvo S90 or similar",
    passengers: "2–3",
    bags: "2",
    text: "Professional chauffeured sedan for airport, business and private itineraries.",
    image: "/images/fleet/volvo-s90-sedan-cutout.webp",
    quoteCategory: "Sedan",
  },
  {
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    models: "Mercedes-Benz S-Class",
    passengers: "2–3",
    bags: "2",
    text: "For occasions where the vehicle experience is part of the brief.",
    image: "/images/fleet/mercedes-s-class-cutout.webp",
    quoteCategory: "Mercedes S-Class",
  },
  {
    slug: "suv-and-luxury-suv",
    name: "SUV & Luxury SUV",
    models: "Suburban, Expedition MAX, Yukon XL, Escalade ESV, Navigator L",
    passengers: "2–6",
    bags: "5",
    text: "Room for airport luggage, families and executive parties.",
    image: "/images/fleet/cadillac-escalade-iq-cutout.webp",
    quoteCategory: "SUV",
  },
  {
    slug: "cadillac-escalade-iql",
    name: "Cadillac Escalade IQL",
    models: "2026 Cadillac Escalade IQL (electric)",
    passengers: "2–6",
    bags: "5",
    text: "The all-electric, extended-length Escalade — quiet and spacious.",
    image: "/images/fleet/cadillac-escalade-iql-cutout.webp",
    quoteCategory: "Luxury SUV",
  },
  {
    slug: "mercedes-sprinter",
    name: "Mercedes Sprinter",
    models: "Mercedes-Benz Sprinter passenger van",
    passengers: "2–14",
    bags: "12",
    text: "Smaller groups and coordinated arrivals, with room for luggage.",
    image: "/images/fleet/mercedes-sprinter-van-cutout.webp",
    quoteCategory: "Sprinter Van",
  },
  {
    slug: "luxury-executive-sprinter-van",
    name: "Luxury Sprinter",
    models: "Executive-configured Mercedes-Benz Sprinter",
    passengers: "2–14",
    bags: "12",
    text: "Executive seating for teams, roadshows and VIP groups.",
    image: "/images/fleet/mercedes-sprinter-limo-cutout.webp",
    quoteCategory: "Luxury Sprinter",
  },
  {
    slug: "limo-sprinter",
    name: "Limo Sprinter",
    models: "Mercedes-Benz Sprinter limo",
    passengers: "2–10",
    bags: "1",
    text: "Limousine-style lounge seating for celebrations and nights out.",
    image: "/images/fleet/mercedes-sprinter-limo-cutout.webp",
    quoteCategory: "Sprinter Limo",
  },
  {
    slug: "stretch-limo",
    name: "Stretch Limousine",
    models: "Lincoln MKT Stretch, Cadillac Escalade Stretch, Escalade Jet Door",
    passengers: "2–14",
    bags: "1",
    text: "Classic stretch limousines for weddings, prom and special occasions.",
    image: "/images/fleet/stretch-limo-lincoln-cutout.webp",
    quoteCategory: "Stretch Limo",
  },
  {
    slug: "mini-bus",
    name: "Minibus",
    models: "24–38 passenger configurations",
    passengers: "24–38",
    bags: "30",
    text: "Larger parties, shuttles and event programs.",
    image: "/images/fleet/minibus-ford-shuttle-cutout.webp",
    quoteCategory: "Minibus",
  },
  {
    slug: "coach",
    name: "Motor Coach",
    models: "Full-size motor coach",
    passengers: "Up to 55",
    bags: "55",
    text: "Conventions, charters and multi-vehicle programs.",
    image: "/images/fleet/motorcoach-white-cutout.webp",
    quoteCategory: "Motorcoach",
  },
];

/**
 * Home carousel: the six featured vehicles of the live site's "Our Fleet"
 * section, with its capacities and features. The live server lost the
 * files; the `*-live.webp` ones were recovered from the Wayback Machine
 * (same photos, background removed). `placeholder: true` = still a stand-in
 * until the client sends the original.
 */
export interface FeaturedVehicle {
  name: string;
  passengers: string;
  bags: string;
  image: string;
  href: string;
  placeholder?: boolean;
}

export const FEATURED_VEHICLES: FeaturedVehicle[] = [
  { name: "Lincoln Continental", passengers: "2–4", bags: "5", image: "/images/fleet/lincoln-continental-live.webp", href: "/fleet#sedan" },
  { name: "Cadillac XTS", passengers: "2–4", bags: "5", image: "/images/fleet/cadillac-xts-live.webp", href: "/fleet#sedan" },
  { name: "Cadillac XT6 2022", passengers: "2–4", bags: "5", image: "/images/fleet/cadillac-escalade-iq-cutout.webp", href: "/fleet#suv-and-luxury-suv", placeholder: true },
  { name: "Escalade Limo", passengers: "2–14", bags: "5+", image: "/images/fleet/escalade-limo-live.webp", href: "/fleet#stretch-limo" },
  { name: "Cadillac IQL Electric", passengers: "2–6", bags: "5", image: "/images/fleet/cadillac-escalade-iql-cutout.webp", href: "/fleet#cadillac-escalade-iql", placeholder: true },
  { name: "Mercedes-Benz S-Class", passengers: "2–4", bags: "5", image: "/images/fleet/mercedes-s-class-live.webp", href: "/fleet#mercedes-benz-s-class" },
];

/** Shown on every featured card (live site copy). */
export const FEATURED_FEATURES = ["Smooth & Quiet Ride", "Friendly Chauffeur"] as const;

/** Classes listed on the closing "More vehicles" card of the carousel. */
export const MORE_VEHICLES = ["Sprinter vans", "Limo Sprinter", "Minibus", "Motor coach"] as const;
