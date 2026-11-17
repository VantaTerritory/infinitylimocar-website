import { COVERAGE } from "@/lib/data/coverage";
import { STEPS_TRIP } from "./shared";
import type { ServiceContent } from "./types";

const AREA_STEPS = {
  title: "From route details to a confirmed ride",
  items: STEPS_TRIP,
};

const AREA_VEHICLES = ["mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter", "mini-bus"] as const;

/** Areas hub, DC, Virginia, Baltimore, Maryland and nationwide/worldwide. */
export const AREAS_CONTENT: Record<string, ServiceContent> = {
  "/areas": {
    lead:
      "Direct car and limousine service across Washington DC, Northern Virginia and Maryland — and coordinated service nationwide and worldwide.",
    image: {
      src: "/images/photos/hero-fleet-dc-dusk.webp",
      alt: "Infinity Limo Car fleet at dusk with the Washington skyline behind",
    },
    intro: {
      eyebrow: "Service areas",
      title: "Transportation across the Washington region",
      body: [
        "We operate directly throughout Washington DC, Northern Virginia and Maryland, with DCA, IAD and BWI as the three core airport connections. Trips that cross jurisdictions are planned as one route.",
        "Beyond the region, service is coordinated through vetted affiliate providers with the same single point of contact.",
      ],
      points: [
        { title: "Washington DC", text: "Downtown, Capitol Hill, Georgetown, Dupont Circle, The Wharf, Navy Yard." },
        { title: "Northern Virginia", text: "Arlington, Alexandria, Springfield, Fairfax, Tysons, Reston, Loudoun." },
        { title: "Maryland", text: "Bethesda, Montgomery County, National Harbor, Annapolis, Baltimore." },
        { title: "Three airports", text: "Reagan National (DCA), Dulles (IAD) and BWI." },
      ],
    },
    children: {
      eyebrow: "Where we serve",
      title: "Find your starting point",
      links: [
        { href: "/areas/limousine-and-car-services-in-washington-dc", text: "Hotels, offices, residences and venues across the District." },
        { href: "/areas/limousine-and-car-service-in-virginia", text: "Arlington to Loudoun County, and the Dulles corridor." },
        { href: "/maryland-chauffeured-transportation", text: "Bethesda, Montgomery County, National Harbor and Annapolis." },
        { href: "/areas/limousine-and-car-services-in-baltimore", text: "BWI, the Inner Harbor and the Baltimore–Washington corridor." },
        { href: "/nationwide-worldwide-chauffeured-transportation", text: "U.S., Canada and worldwide through vetted affiliates." },
      ],
    },
    steps: AREA_STEPS,
    vehicles: { title: "Vehicles for local and regional trips", slugs: AREA_VEHICLES },
    related: ["/airport-pick-and-drop-in-washington-dc", "/point-to-point-transportation", "/hourly-as-directed-chauffeur-service"],
    faqTitle: "Service Area Questions",
    faq: [
      { question: "Do you provide service throughout the DC region?", answer: "Yes. We operate directly across Washington DC, Northern Virginia and Maryland." },
      { question: "Which airports are included?", answer: "Reagan National (DCA), Washington Dulles (IAD) and Baltimore/Washington (BWI), plus private aviation FBOs and Union Station." },
      { question: "Can a trip include several cities or stops?", answer: "Yes. Multi-stop itineraries usually fit hourly service; a simple two-address trip fits point-to-point." },
      { question: "Do you serve areas outside the DMV?", answer: "Yes. Nationwide and worldwide trips are coordinated through vetted affiliate providers." },
    ],
  },

  "/areas/limousine-and-car-services-in-washington-dc": {
    lead:
      "Car service, black car service and limousine service across Washington DC — hotels, offices, residences, venues and the region's airports.",
    image: {
      src: "/images/photos/corporate-cadillac-capitol.webp",
      alt: "Black Cadillac with a chauffeur near the U.S. Capitol in Washington DC",
    },
    intro: {
      eyebrow: "Washington DC",
      title: "Car and limo service in the capital",
      body: [
        "Washington travel brings together tight schedules, security-related street changes, airport arrivals, Union Station and venues with their own access rules. We plan each trip around the route, timing and destination instructions.",
        "Individual travelers, executives, families, planners and groups — within the District or connecting with Virginia and Maryland.",
      ],
      points: [
        { title: "Schedule coordination", text: "Pickups set against meetings, events and flights." },
        { title: "Vehicle planning", text: "Sedans and SUVs to Sprinters and coaches." },
        { title: "Airport connections", text: "DCA, IAD and BWI, plus Union Station." },
        { title: "Local conditions", text: "Traffic, events and venue access built into the plan." },
      ],
    },
    useCases: {
      eyebrow: "Neighborhoods",
      title: "Where DC trips go",
      items: [
        { title: "Downtown & Dupont Circle", text: "Hotels, offices, dining and appointments in central Washington." },
        { title: "Capitol Hill", text: "Business, institutional and residential destinations." },
        { title: "Georgetown", text: "Hotels, dining, residences and the waterfront." },
        { title: "Foggy Bottom & Embassy Row", text: "Offices, universities and diplomatic addresses." },
        { title: "The Wharf & Navy Yard", text: "Waterfront venues, stadiums and new offices." },
        { title: "Convention Center area", text: "Hotels and the Walter E. Washington Convention Center.", href: "/convention-transportation-washington-dc" },
      ],
    },
    steps: AREA_STEPS,
    vehicles: { title: "Vehicles for DC travel", slugs: AREA_VEHICLES },
    related: ["/washington-union-station-car-service", "/dca-airport-limousine-car-service", "/washingtondc-city-tour-private"],
    faqTitle: "Washington DC Car Service Questions",
    faq: [
      { question: "Which Washington DC trips can you handle?", answer: "Airport transfers, point-to-point trips, hourly service, executive and corporate travel, meetings, events, private tours and group transportation." },
      { question: "Which airports serve Washington DC travelers?", answer: "Reagan National (DCA) is closest; Dulles (IAD) and BWI are also served, along with Union Station." },
      { question: "Can a DC trip include several stops?", answer: "Yes. For several appointments or changing timing, hourly service usually fits better than one point-to-point booking." },
      { question: "Can you continue into Virginia or Maryland?", answer: "Yes. Share every stop and its timing, and the route is planned as one trip." },
    ],
  },

  "/areas/limousine-and-car-service-in-virginia": {
    lead:
      "Car service, black car service and limousine service across Northern Virginia — from Arlington and Alexandria to Tysons, Reston and Loudoun County.",
    intro: {
      eyebrow: "Northern Virginia",
      title: "Limo and car service planned around your route",
      body: [
        "Northern Virginia travel rarely stops at one city line: an Arlington pickup continues to Dulles, a meeting day moves between Tysons, Reston and DC. We plan around the actual addresses, timing, passengers and luggage.",
        "Infinity Limo Car is based in Springfield, Virginia.",
      ],
      points: [
        { title: "DCA & IAD transfers", text: "The two airports most Northern Virginia trips start or end at." },
        { title: "Business & government travel", text: "Offices, hotels and meetings across the business corridors." },
        { title: "Events & groups", text: "Weddings, conferences and private events." },
        { title: "Local base", text: "Headquartered in Springfield, VA." },
      ],
    },
    useCases: {
      eyebrow: "Communities",
      title: "From Arlington to Loudoun County",
      items: [
        { title: "Arlington & Alexandria", text: "Close-in neighborhoods, Old Town and Crystal City." },
        { title: "Springfield & Fairfax", text: "Fairfax County residences, offices and venues." },
        { title: "Tysons, McLean & Vienna", text: "Corporate offices, hotels and the Tysons business district." },
        { title: "Reston, Herndon & Chantilly", text: "The Dulles corridor and technology campuses." },
        { title: "Ashburn, Sterling & Leesburg", text: "Loudoun County business and residential travel." },
        { title: "Middleburg & Hunt Country", text: "Wineries, estates and equestrian events.", href: "/wine-tour-services-in-washington-dc" },
        { title: "Centreville & Manassas", text: "Western Fairfax and Prince William County." },
        { title: "Woodbridge & the I-95 corridor", text: "Southern Northern Virginia, toward Quantico." },
        { title: "Falls Church", text: "Close-in residential and business pickups." },
      ],
    },
    steps: AREA_STEPS,
    vehicles: { title: "Vehicles for Northern Virginia", slugs: AREA_VEHICLES },
    related: ["/iad-airport-limo-car-service", "/dca-airport-limousine-car-service", "/corporate-travel-services-in-washington-dc"],
    faqTitle: "Northern Virginia Questions",
    faq: [
      { question: "Which Northern Virginia communities do you serve?", answer: "Arlington, Alexandria, Springfield, Fairfax, McLean, Tysons, Vienna, Reston, Herndon, Chantilly, Ashburn, Sterling, Leesburg, Centreville, Manassas, Woodbridge and surrounding communities." },
      { question: "Can you coordinate trips into Washington DC or Maryland?", answer: "Yes. Include every pickup, stop and destination and the trip is planned as one route." },
      { question: "How do I choose the right vehicle?", answer: "Start with passengers, luggage, route and service style; we recommend a category and confirm the vehicle for your date." },
      { question: "Which airport is best from Northern Virginia?", answer: "DCA for close-in areas like Arlington and Alexandria; IAD for Tysons, Reston and Loudoun County." },
    ],
  },

  "/areas/limousine-and-car-services-in-baltimore": {
    lead:
      "Car and limousine service in Baltimore — BWI arrivals, Inner Harbor hotels, downtown offices and trips along the Baltimore–Washington corridor.",
    intro: {
      eyebrow: "Baltimore",
      title: "Transportation built around Baltimore travel",
      body: [
        "Baltimore trips connect BWI, downtown hotels and offices, universities, medical campuses, the Convention Center and events — and often continue to Washington. We plan point-to-point, hourly, corporate and group service around the full itinerary.",
        "Baltimore–Washington trips are planned with realistic timing for the corridor.",
      ],
      points: [
        { title: "BWI connections", text: "Arrivals and departures with flight tracking." },
        { title: "Corporate travel", text: "Executives, roadshows and multi-day programs." },
        { title: "Events & groups", text: "Conferences, weddings and sports outings." },
        { title: "Corridor trips", text: "Baltimore to DC, Annapolis and Northern Virginia." },
      ],
    },
    useCases: {
      eyebrow: "Baltimore trips",
      title: "Where Baltimore trips go",
      items: [
        { title: "Inner Harbor & downtown", text: "Hotels, offices and dining." },
        { title: "Baltimore Convention Center", text: "Attendee and exhibitor movements.", href: "/convention-transportation-washington-dc" },
        { title: "Universities & medical campuses", text: "Visits, speakers and appointments." },
        { title: "Baltimore cruise terminal", text: "Hotel or airport to the ship, with luggage planned." },
        { title: "Annapolis", text: "The waterfront, hotels and events.", href: "/maryland-chauffeured-transportation" },
        { title: "Harford County & Bel Air", text: "Pickups north of the city." },
      ],
    },
    steps: AREA_STEPS,
    vehicles: { title: "Vehicles for Baltimore trips", slugs: AREA_VEHICLES },
    related: ["/bwi-airport-limo-car-service", "/maryland-chauffeured-transportation", "/group-transportation-in-washington-dc"],
    faqTitle: "Baltimore Car Service Questions",
    faq: [
      { question: "Can transportation connect Baltimore with Washington DC?", answer: "Yes. Point-to-point or hourly service can be booked for Baltimore–Washington itineraries." },
      { question: "Can you arrange BWI transportation for a group?", answer: "Yes. Share flight groupings, passengers and luggage, and onward destinations." },
      { question: "Do you support Baltimore meetings and events?", answer: "Yes. Executives, speakers, attendees and larger groups can be planned under one program." },
      { question: "Can you take us to a cruise departure?", answer: "Yes. Share the ship, terminal and sailing time so luggage and timing are planned." },
    ],
  },

  "/maryland-chauffeured-transportation": {
    lead:
      "Car service, black car service and limousine service across Maryland — Bethesda, Montgomery County, National Harbor, Annapolis and Baltimore.",
    intro: {
      eyebrow: "Maryland",
      title: "Maryland travel, planned around your itinerary",
      body: [
        "Maryland trips connect local addresses with Washington DC, Northern Virginia and the region's three airports. Share the complete itinerary so routing, pickup and vehicle can be planned together.",
        "Montgomery and Prince George's counties, Annapolis and Baltimore are all served directly.",
      ],
      points: [
        { title: "Airport transfers", text: "BWI, DCA and IAD from any Maryland address." },
        { title: "Business travel", text: "Bethesda, Rockville and the I-270 corridor." },
        { title: "Events & venues", text: "National Harbor, Annapolis and Baltimore." },
        { title: "Into DC", text: "Daily commutes, meetings and evenings in the city." },
      ],
    },
    useCases: {
      eyebrow: "Communities",
      title: "Maryland service areas",
      items: [
        { title: "Bethesda", text: "Offices, medical campuses and residences." },
        { title: "Rockville, Gaithersburg & North Potomac", text: "Montgomery County and the I-270 corridor." },
        { title: "Silver Spring & Kensington", text: "Close-in neighborhoods north of the District." },
        { title: "National Harbor", text: "Gaylord National and waterfront events." },
        { title: "Hyattsville, College Park, Bowie & Laurel", text: "Prince George's County and the BWI side." },
        { title: "Annapolis & Crofton", text: "Maryland's capital, the waterfront and Anne Arundel County." },
        { title: "Baltimore", text: "BWI, the Inner Harbor and downtown.", href: "/areas/limousine-and-car-services-in-baltimore" },
      ],
    },
    steps: AREA_STEPS,
    vehicles: { title: "Vehicles for Maryland trips", slugs: AREA_VEHICLES },
    related: ["/bwi-airport-limo-car-service", "/areas/limousine-and-car-services-in-baltimore", "/areas/limousine-and-car-services-in-washington-dc"],
    faqTitle: "Maryland Questions",
    faq: [
      { question: "Which Maryland communities do you serve?", answer: "Bethesda, Rockville, Gaithersburg, North Potomac, Silver Spring, Kensington, Hyattsville, College Park, Bowie, Laurel, Crofton, Clinton, National Harbor, Annapolis and Baltimore, among others." },
      { question: "Which airport is best from Maryland?", answer: "BWI is closest for Baltimore, Annapolis and Laurel; DCA often suits Bethesda, Silver Spring and National Harbor." },
      { question: "Can a Maryland trip continue into DC or Virginia?", answer: "Yes. List every stop and its timing and the trip is planned as one route." },
      { question: "Do you serve events at National Harbor?", answer: "Yes. Share the venue entrance, passenger groups and return times." },
    ],
  },

  "/nationwide-worldwide-chauffeured-transportation": {
    lead:
      "Direct service in the Washington region; coordinated chauffeured service across the U.S., Canada and worldwide through vetted affiliates — with one point of contact.",
    intro: {
      eyebrow: "Nationwide & worldwide",
      title: "One request for the whole itinerary",
      body: [
        "In Washington DC, Northern Virginia and Maryland we operate our own service. Beyond the region, we coordinate each city with vetted local providers, so travelers and assistants deal with one team instead of a new company in every market.",
        "Send the full itinerary — cities, dates, flights, passengers and preferred vehicles — and we confirm each segment before travel.",
      ],
      points: [
        { title: "Multi-city business travel", text: "Airport transfers, meetings and evenings across cities." },
        { title: "Events & group movements", text: "Conferences, roadshows and family programs." },
        { title: "Airport continuity", text: "Commercial and private aviation arrivals, coordinated." },
        { title: "One point of contact", text: "Changes and confirmations through our team." },
      ],
    },
    useCases: {
      eyebrow: "Coverage",
      title: "Where we coordinate service",
      items: COVERAGE.map((c) => ({ title: `${c.region} · ${c.mode}`, text: c.places })),
    },
    steps: {
      title: "How coordinated service works",
      items: [
        { title: "Share the full itinerary", text: "Cities, dates, flight or rail details, passengers, luggage and vehicle preferences." },
        { title: "We review each market", text: "Every segment is matched with an appropriate vetted provider." },
        { title: "Confirm and stay connected", text: "We confirm each segment and handle changes as one contact." },
      ],
      note: "Outside the DC region, vehicles are operated by vetted affiliate providers; each segment is confirmed before travel.",
    },
    related: ["/corporate-transportation-accounts", "/corporate-roadshow-transportation", "/affiliate-program"],
    faqTitle: "Nationwide & Worldwide Questions",
    faq: [
      { question: "Does Infinity operate its own fleet everywhere?", answer: "No. We operate directly in the Washington region and coordinate service elsewhere through vetted affiliate providers." },
      { question: "Can one request include several cities?", answer: "Yes. Send the complete itinerary so every segment is reviewed and confirmed together." },
      { question: "Will the same vehicle model be available in every city?", answer: "Not necessarily. Vehicles are matched per segment by class and capacity; specific models are confirmed city by city." },
      { question: "Can transportation companies join your affiliate network?", answer: "Operators can apply through our Affiliate Program; submission doesn't guarantee acceptance or volume." },
    ],
  },
};
