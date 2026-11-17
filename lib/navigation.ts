/* Header and footer menus. Labels and URLs come from the page registry so a
   renamed page updates everywhere. */

import { getPage } from "@/lib/seo/pages";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  title: NavLink;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  columns: NavColumn[];
}

const link = (path: string): NavLink => {
  const p = getPage(path);
  return { label: p.label, href: p.path };
};


/**
 * Header menu = the mega menu of the client's redesign
 * (infinitylimocarnewwebsite.kinsta.cloud), same items, groups and URLs.
 * Many destinations are not built yet (city/airport/worldwide/fleet detail
 * pages): they 404 until their templates exist — see docs/sitemap.md.
 */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/", columns: [] },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: { label: "Services Overview", href: "/services" },
        links: [
          { label: "Point-to-Point", href: "/point-to-point-transportation" },
          { label: "Hourly / As Directed", href: "/hourly-as-directed-chauffeur-service" },
          { label: "Charter Bus", href: "/charter-bus-service-washington-dc" },
          { label: "Private Tours", href: "/washingtondc-city-tour-private" },
          { label: "Weddings", href: "/wedding-transportation-in-washington-dc" },
          { label: "Prom", href: "/prom-services-in-washington-dc" },
          { label: "Wine Tours", href: "/wine-tour-services-in-washington-dc" },
        ],
      },
      {
        title: { label: "Corporate Transportation", href: "/corporate-travel-services-in-washington-dc" },
        links: [
          { label: "Executive Transportation", href: "/executive-car-service-washington-dc" },
          { label: "Corporate Accounts", href: "/corporate-transportation-accounts" },
          { label: "Roadshows", href: "/corporate-roadshow-transportation" },
          { label: "Employee Transportation", href: "/employee-transportation-services" },
          { label: "Meetings", href: "/meetings-conferences-transportation" },
          { label: "Conventions", href: "/convention-transportation-washington-dc" },
        ],
      },
      {
        title: { label: "Group Transportation", href: "/group-transportation-in-washington-dc" },
        links: [
          { label: "Hotel & Event Shuttles", href: "/hotel-event-shuttle-service" },
          { label: "Shuttle & Contract Service", href: "/shuttle-service-and-contract-services-in-washington-dc" },
        ],
      },
    ],
  },
  {
    label: "Airports",
    href: "/airport-pick-and-drop-in-washington-dc",
    columns: [
      {
        title: { label: "Washington DC Airports", href: "/airport-pick-and-drop-in-washington-dc" },
        links: [
          { label: "DCA / Reagan National", href: "/dca-airport-limousine-car-service" },
          { label: "IAD / Dulles", href: "/iad-airport-limo-car-service" },
          { label: "BWI", href: "/bwi-airport-limo-car-service" },
          { label: "Private Aviation / FBO", href: "/private-aviation-fbo-transportation" },
          { label: "Union Station", href: "/washington-union-station-car-service" },
        ],
      },
      {
        title: { label: "U.S. Airports", href: "/nationwide-worldwide-chauffeured-transportation#us-locations" },
        links: [
          { label: "New York JFK", href: "/jfk-airport-car-limo-service" },
          { label: "LaGuardia (LGA)", href: "/lga-airport-car-limo-service" },
          { label: "Newark (EWR)", href: "/ewr-airport-car-limo-service" },
          { label: "Boston Logan (BOS)", href: "/bos-airport-car-limo-service" },
          { label: "Chicago O’Hare (ORD)", href: "/ord-airport-car-limo-service" },
          { label: "Los Angeles (LAX)", href: "/lax-airport-car-limo-service" },
          { label: "San Francisco (SFO)", href: "/sfo-airport-car-limo-service" },
          { label: "Miami (MIA)", href: "/mia-airport-car-limo-service" },
        ],
      },
      {
        title: { label: "Canada Airports", href: "/canada-chauffeured-transportation" },
        links: [
          { label: "Toronto Pearson (YYZ)", href: "/yyz-airport-car-limo-service" },
          { label: "Montréal (YUL)", href: "/yul-airport-car-limo-service" },
          { label: "Vancouver (YVR)", href: "/yvr-airport-car-limo-service" },
          { label: "Calgary (YYC)", href: "/yyc-airport-car-limo-service" },
        ],
      },
      {
        title: { label: "Worldwide Airports", href: "/nationwide-worldwide-chauffeured-transportation#worldwide-locations" },
        links: [
          { label: "London Heathrow (LHR)", href: "/lhr-airport-chauffeur-transfer" },
          { label: "Paris CDG", href: "/cdg-airport-private-transfer" },
          { label: "Frankfurt (FRA)", href: "/fra-airport-private-transfer" },
          { label: "Geneva (GVA)", href: "/gva-airport-private-transfer" },
          { label: "Zurich (ZRH)", href: "/zrh-airport-private-transfer" },
          { label: "Dubai (DXB)", href: "/dxb-airport-private-transfer" },
          { label: "Tokyo Haneda (HND)", href: "/hnd-airport-private-transfer" },
          { label: "Hong Kong (HKG)", href: "/hkg-airport-private-transfer" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/areas",
    columns: [
      {
        title: { label: "Washington DC & DMV", href: "/areas" },
        links: [
          { label: "Washington DC", href: "/areas/limousine-and-car-services-in-washington-dc" },
          { label: "Northern Virginia", href: "/areas/limousine-and-car-service-in-virginia" },
          { label: "Maryland", href: "/maryland-chauffeured-transportation" },
          { label: "Baltimore", href: "/areas/limousine-and-car-services-in-baltimore" },
        ],
      },
      {
        title: { label: "United States", href: "/nationwide-worldwide-chauffeured-transportation#us-locations" },
        links: [
          { label: "New York City", href: "/new-york-city-car-limo-service" },
          { label: "Boston", href: "/boston-car-limo-service" },
          { label: "Philadelphia", href: "/philadelphia-car-limo-service" },
          { label: "Atlanta", href: "/atlanta-car-limo-service" },
          { label: "Miami / South Florida", href: "/miami-car-limo-service" },
          { label: "Chicago", href: "/chicago-car-limo-service" },
          { label: "Dallas", href: "/dallas-car-limo-service" },
          { label: "Houston", href: "/houston-car-limo-service" },
          { label: "Los Angeles", href: "/los-angeles-car-limo-service" },
          { label: "San Francisco", href: "/san-francisco-car-limo-service" },
        ],
      },
      {
        title: { label: "Canada", href: "/canada-chauffeured-transportation" },
        links: [
          { label: "Toronto", href: "/toronto-gta-car-limo-service" },
          { label: "Montréal", href: "/montreal-car-limo-service" },
          { label: "Vancouver", href: "/vancouver-car-limo-service" },
          { label: "Calgary", href: "/calgary-car-limo-service" },
        ],
      },
    ],
  },
  {
    label: "Worldwide",
    href: "/nationwide-worldwide-chauffeured-transportation",
    columns: [
      {
        title: { label: "Europe", href: "/europe-private-driver-chauffeur-planning" },
        links: [
          { label: "United Kingdom", href: "/uk-chauffeur-car-service" },
          { label: "Germany", href: "/germany-chauffeur-car-service" },
          { label: "Italy", href: "/italy-private-driver-chauffeur-service" },
          { label: "Switzerland", href: "/switzerland-chauffeur-car-service" },
          { label: "Paris", href: "/paris-chauffeur-car-service" },
          { label: "Nice / Cannes", href: "/nice-cannes-french-riviera-chauffeur-service" },
          { label: "Madrid", href: "/madrid-chauffeur-car-service" },
          { label: "Barcelona", href: "/barcelona-chauffeur-car-service" },
          { label: "Amsterdam", href: "/amsterdam-chauffeur-private-car-service" },
          { label: "Istanbul", href: "/istanbul-chauffeur-private-car-service" },
        ],
      },
      {
        title: { label: "Middle East", href: "/nationwide-worldwide-chauffeured-transportation#worldwide-locations" },
        links: [
          { label: "UAE", href: "/uae-chauffeur-car-service" },
          { label: "Doha / Qatar", href: "/doha-chauffeur-car-service" },
        ],
      },
      {
        title: { label: "Asia-Pacific", href: "/nationwide-worldwide-chauffeured-transportation#worldwide-locations" },
        links: [
          { label: "Japan", href: "/japan-private-driver-chauffeur-service" },
          { label: "Singapore", href: "/singapore-chauffeur-limousine-service" },
          { label: "Australia", href: "/australia-chauffeur-private-car-service" },
          { label: "Seoul", href: "/seoul-private-car-chauffeur-service" },
          { label: "Hong Kong", href: "/hong-kong-chauffeur-private-car-service" },
        ],
      },
    ],
  },
  {
    label: "Fleet",
    href: "/fleet",
    columns: [
      {
        title: { label: "Fleet Overview", href: "/fleet" },
        links: [
          { label: "Executive Sedan", href: "/fleet#sedan" },
          { label: "Mercedes-Benz S-Class", href: "/fleet#mercedes-benz-s-class" },
          { label: "SUV & Luxury SUV", href: "/fleet#suv-and-luxury-suv" },
          { label: "Cadillac Escalade IQL", href: "/fleet#cadillac-escalade-iql" },
          { label: "Mercedes Sprinter", href: "/fleet#mercedes-sprinter" },
          { label: "Luxury Sprinter", href: "/fleet#luxury-executive-sprinter-van" },
          { label: "Limo Sprinter", href: "/fleet#limo-sprinter" },
          { label: "Stretch Limousine", href: "/fleet#stretch-limo" },
          { label: "Minibus", href: "/fleet#mini-bus" },
          { label: "Motor Coach", href: "/fleet#coach" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    columns: [
      {
        title: { label: "About", href: "/about-us" },
        links: [
          { label: "About Infinity Limo Car", href: "/about-us" },
          { label: "Safety & Professional Chauffeurs", href: "/safety-professional-chauffeurs" },
          { label: "Memberships & Credentials", href: "/memberships-affiliations" },
          { label: "Affiliate & Partner Program", href: "/affiliate-program" },
          { label: "Client Testimonials", href: "/testimonials" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export const FOOTER_NAV: NavColumn[] = [
  {
    title: { label: "Company", href: "/about-us" },
    links: ["/about-us", "/safety-professional-chauffeurs", "/testimonials", "/contact"].map(link),
  },
  {
    title: { label: "Services", href: "/services" },
    links: [
      { label: "Airport", href: "/airport-pick-and-drop-in-washington-dc" },
      { label: "Corporate", href: "/corporate-travel-services-in-washington-dc" },
      { label: "Group", href: "/group-transportation-in-washington-dc" },
      { label: "Hourly", href: "/hourly-as-directed-chauffeur-service" },
      { label: "Fleet", href: "/fleet" },
    ],
  },
  {
    title: { label: "Locations", href: "/areas" },
    links: [
      link("/areas/limousine-and-car-services-in-washington-dc"),
      link("/areas/limousine-and-car-service-in-virginia"),
      link("/maryland-chauffeured-transportation"),
      { label: "Nationwide", href: "/nationwide-worldwide-chauffeured-transportation" },
      { label: "Worldwide", href: "/nationwide-worldwide-chauffeured-transportation" },
    ],
  },
];

export const LEGAL_NAV: NavLink[] = ["/privacy-and-policy", "/terms-and-conditions"].map(link);
