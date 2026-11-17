/* ============================================================
   PAGE REGISTRY — every route of the site, its SEO copy and where it
   shows up (nav groups / footer columns / sitemap).
   Nav, footer, sitemap and per-page metadata all read from here, so adding
   a page = one entry + one app/<slug>/page.tsx.
   ============================================================ */

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export type PageGroup =
  | "core"
  | "services"
  | "corporate"
  | "group"
  | "airports"
  | "locations"
  | "worldwide"
  | "fleet"
  | "about"
  | "legal";

export interface SitePage {
  path: string;
  /** Short label for nav/footer. */
  label: string;
  title: string;
  description: string;
  h1: string;
  group: PageGroup;
  noindex?: boolean;
  inSitemap?: boolean;
}

const brand = siteConfig.name;

/**
 * Slugs: kept from the live WordPress site (infinitylimocar.com) wherever the
 * page already exists there, so indexed URLs keep working with no redirect.
 * New pages take the slug the unreleased redesign (kinsta staging) already
 * used. Only the main pages are registered for now; city pages, fleet details
 * and the nationwide/worldwide catalogue come later.
 */
type Entry = [path: string, label: string, h1: string, description: string, group: PageGroup, extra?: Partial<SitePage>];

const ENTRIES: Entry[] = [
  // ─── Core ───
  ["/", "Home", "Luxury Car Service & Chauffeur Service",
    "Luxury car service, airport transfers and group transportation in Washington DC, Virginia and Maryland — nationwide and worldwide through vetted affiliates.", "core",
    { title: `Luxury Car Service & Chauffeur Service in Washington DC | ${brand}` }],
  ["/get-a-quote", "Get a Quote", "Request a Quote",
    "Request a quote for airport transfers, hourly chauffeur service, corporate and group transportation.", "core"],
  ["/thank-you", "Thank You", "Thank you for your quote request",
    "We received your quote request.", "core", { noindex: true, inSitemap: false }],

  // ─── Services ───
  ["/services", "Services", "Chauffeured Transportation Services",
    "Point-to-point, hourly, corporate, group and special-occasion chauffeured transportation in the DC region.", "services"],
  ["/point-to-point-transportation", "Point-to-Point", "Point-to-Point Car Service",
    "Door-to-door chauffeured transfers across Washington DC, Virginia and Maryland.", "services"],
  ["/hourly-as-directed-chauffeur-service", "Hourly / As Directed", "Hourly & As-Directed Chauffeur Service",
    "A chauffeur and vehicle at your disposal by the hour, for meetings, errands and multi-stop days.", "services"],
  ["/charter-bus-service-washington-dc", "Charter Bus", "Charter Bus Service in Washington DC",
    "Charter buses and motor coaches for groups, events and corporate programs.", "services"],
  ["/washingtondc-city-tour-private", "Private Tours", "Private Tours of Washington DC",
    "Private chauffeured tours of Washington DC monuments, museums and neighborhoods.", "services"],
  ["/wedding-transportation-in-washington-dc", "Weddings", "Wedding Transportation in Washington DC",
    "Wedding limousines and guest shuttles for the couple, the bridal party and guests.", "services"],
  ["/prom-services-in-washington-dc", "Prom", "Prom Limo Service in Washington DC",
    "Safe, licensed prom limousine and party vehicle service.", "services"],
  ["/wine-tour-services-in-washington-dc", "Wine Tours", "Wine Tours from Washington DC",
    "Chauffeured wine tours to Virginia and Maryland wineries.", "services"],
  ["/arlington-cemetery-professional-funeral-transportation-in-washington-dc", "Funeral & Memorial", "Funeral & Memorial Transportation",
    "Respectful funeral and memorial transportation, including Arlington National Cemetery.", "services"],

  // ─── Corporate ───
  ["/corporate-travel-services-in-washington-dc", "Corporate", "Corporate Transportation in Washington DC",
    "Executive car service, corporate accounts, roadshows, meetings and conventions.", "corporate"],
  ["/executive-car-service-washington-dc", "Executive", "Executive Car Service",
    "Discreet executive car service for leaders and their visitors.", "corporate"],
  ["/corporate-transportation-accounts", "Corporate Accounts", "Corporate Transportation Accounts",
    "Centralized booking, billing and reporting for company travel.", "corporate"],
  ["/corporate-roadshow-transportation", "Roadshows", "Corporate Roadshow Transportation",
    "Tight multi-meeting roadshow schedules handled by one coordinator.", "corporate"],
  ["/employee-transportation-services", "Employee Transportation", "Employee Transportation Services",
    "Recurring employee shuttles and commuter programs.", "corporate"],
  ["/meetings-conferences-transportation", "Meetings", "Meetings & Conference Transportation",
    "Ground transportation for meetings, offsites and conferences.", "corporate"],
  ["/convention-transportation-washington-dc", "Conventions", "Convention Transportation in Washington DC",
    "Shuttles and multi-vehicle programs for conventions and large events.", "corporate"],

  // ─── Group ───
  ["/group-transportation-in-washington-dc", "Group", "Group Transportation in Washington DC",
    "Sprinter vans, minibuses and motor coaches for groups of every size.", "group"],
  ["/hotel-event-shuttle-service", "Hotel & Event Shuttles", "Hotel & Event Shuttle Service",
    "Scheduled shuttle loops for hotels, events and venues.", "group"],
  ["/shuttle-service-and-contract-services-in-washington-dc", "Shuttle & Contract Service", "Shuttle & Contract Service",
    "Long-term contract shuttle service for campuses, companies and institutions.", "group"],

  // ─── Airports ───
  ["/airport-pick-and-drop-in-washington-dc", "Airport", "Airport Car Service — DCA, IAD & BWI",
    "Airport car service to and from Reagan National, Dulles and BWI, plus FBOs and Union Station.", "airports"],
  ["/dca-airport-limousine-car-service", "DCA — Washington National", "DCA Airport Limo & Car Service",
    "Chauffeured transfers to and from Ronald Reagan Washington National Airport (DCA).", "airports"],
  ["/iad-airport-limo-car-service", "IAD — Washington Dulles", "IAD Airport Limo & Car Service",
    "Chauffeured transfers to and from Washington Dulles International Airport (IAD).", "airports"],
  ["/bwi-airport-limo-car-service", "BWI — Baltimore/Washington", "BWI Airport Limo & Car Service",
    "Chauffeured transfers to and from Baltimore/Washington International Airport (BWI).", "airports"],
  ["/private-aviation-fbo-transportation", "Private Aviation / FBO", "Private Aviation & FBO Transportation",
    "Planeside and FBO transfers for private aviation across the DC region.", "airports"],
  ["/washington-union-station-car-service", "Union Station", "Washington Union Station Car Service",
    "Chauffeured pickups and drop-offs at Washington Union Station.", "airports"],

  // ─── Locations ───
  ["/areas", "Areas", "Areas We Serve",
    "Car and limousine service across Washington DC, Northern Virginia and Maryland.", "locations"],
  ["/areas/limousine-and-car-services-in-washington-dc", "Washington DC", "Limousine & Car Service in Washington DC",
    "Car service and limousine service across Washington DC.", "locations"],
  ["/areas/limousine-and-car-service-in-virginia", "Virginia", "Limousine & Car Service in Virginia",
    "Car service across Arlington, Alexandria, Fairfax, Tysons, Reston and Northern Virginia.", "locations"],
  ["/areas/limousine-and-car-services-in-baltimore", "Baltimore", "Limousine & Car Service in Baltimore",
    "Car and limousine service across Baltimore, BWI and the Inner Harbor.", "locations"],
  ["/maryland-chauffeured-transportation", "Maryland", "Maryland Chauffeured Transportation",
    "Car service across Bethesda, Annapolis, Baltimore and Maryland.", "locations"],

  // ─── Nationwide & Worldwide ───
  ["/nationwide-worldwide-chauffeured-transportation", "Nationwide & Worldwide", "Nationwide & Worldwide Chauffeured Transportation",
    "Chauffeured service across the US, Canada, Europe, the Middle East and Asia-Pacific through vetted affiliates.", "worldwide"],

  // ─── Fleet ───
  ["/fleet", "Fleet", "Our Fleet",
    "Executive sedans, S-Class, SUVs, Cadillac Escalade IQ, Sprinters, limousines, minibuses and motor coaches.", "fleet",
    { title: `Our Fleet — Sedans, SUVs, Sprinters & Coaches | ${brand}` }],

  // ─── About ───
  ["/about-us", "About", "About Infinity Limo Car",
    "Over a decade of chauffeured transportation in the Washington DC region.", "about"],
  ["/safety-professional-chauffeurs", "Safety & Chauffeurs", "Safety & Professional Chauffeurs",
    "How we vet, train and support our professional chauffeurs.", "about"],
  ["/memberships-affiliations", "Memberships", "Memberships & Affiliations",
    "Industry associations, chambers and credentials.", "about"],
  ["/affiliate-program", "Affiliate Program", "Affiliate & Partner Program",
    "Partner with Infinity Limo Car: affiliate operators, travel advisors and planners.", "about"],
  ["/testimonials", "Testimonials", "Testimonials",
    "What our clients say about Infinity Limo Car.", "about"],
  ["/contact", "Contact", "Contact Us",
    "Call, email or visit Infinity Limo Car in Springfield, VA.", "about"],

  // ─── Legal ───
  ["/privacy-and-policy", "Privacy Policy", "Privacy Policy",
    "How Infinity Limo Car collects and uses personal information.", "legal"],
  ["/terms-and-conditions", "Terms & Conditions", "Terms & Conditions",
    "Terms and conditions of service.", "legal"],
];

export const SITE_PAGES: SitePage[] = ENTRIES.map(([path, label, h1, description, group, extra]) => ({
  path,
  label,
  h1,
  description,
  group,
  title: `${h1} | ${brand}`,
  ...extra,
}));

export function getPage(path: string): SitePage {
  const page = SITE_PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`Page not registered in lib/seo/pages.ts: ${path}`);
  return page;
}

export function pagesInGroup(group: PageGroup): SitePage[] {
  return SITE_PAGES.filter((p) => p.group === group);
}

export function pageUrl(page: SitePage): string {
  return `${siteConfig.url}${canonicalPath(page.path)}`;
}

/** trailingSlash is on (WordPress URL continuity). */
export const canonicalPath = (path: string) => (path === "/" ? "/" : `${path}/`);

/** Metadata for a registered route: `export const metadata = pageMetadata("/fleet")`. */
export function pageMetadata(path: string): Metadata {
  const page = getPage(path);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: canonicalPath(page.path) },
    robots: page.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalPath(page.path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}
