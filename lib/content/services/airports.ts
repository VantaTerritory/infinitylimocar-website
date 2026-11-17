import { STEPS_AIRPORT } from "./shared";
import type { ServiceContent } from "./types";

const AIRPORT_VEHICLES = ["sedan", "mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter"] as const;

/** Airports: hub + DCA, IAD, BWI, private aviation and Union Station. */
export const AIRPORTS_CONTENT: Record<string, ServiceContent> = {
  "/airport-pick-and-drop-in-washington-dc": {
    lead:
      "Private airport car service to and from Reagan National, Dulles and BWI — with flight tracking, meet & greet on request and the right vehicle for your luggage.",
    image: {
      src: "/images/photos/airport-departures-chauffeur.webp",
      alt: "Chauffeur helping a traveler with luggage beside a black SUV at an airport departures curb",
    },
    intro: {
      eyebrow: "Airport transportation",
      title: "One airport plan across the Washington region",
      body: [
        "Choose the airport, share the flight and destination, and we plan the pickup. Flights are tracked so the chauffeur is there when you land — early, late or on time.",
        "Every transfer is private, door to door, from one traveler to a coordinated group arrival.",
      ],
      points: [
        { title: "Flight tracking", text: "Pickup time follows the actual arrival." },
        { title: "Curbside or meet & greet", text: "Inside greeting for executives, families and first-time visitors." },
        { title: "Luggage-aware vehicles", text: "Sedans, SUVs and Sprinters matched to bags and party size." },
        { title: "24/7", text: "Early departures and late-night arrivals." },
      ],
    },
    children: {
      eyebrow: "Airports & stations",
      title: "Choose your airport",
      links: [
        { href: "/dca-airport-limousine-car-service", text: "Closest to downtown, Capitol Hill, Arlington and Alexandria." },
        { href: "/iad-airport-limo-car-service", text: "International gateway for Tysons, Reston, Loudoun and DC." },
        { href: "/bwi-airport-limo-car-service", text: "Baltimore, Annapolis, Maryland and DC connections." },
        { href: "/private-aviation-fbo-transportation", text: "Landside pickups at FBOs for private aircraft passengers and crews." },
        { href: "/washington-union-station-car-service", text: "Rail arrivals and departures, connected to hotels, offices and airports." },
      ],
    },
    useCases: {
      eyebrow: "Who we serve",
      title: "From one traveler to an airport program",
      items: [
        { title: "Individual transfers", text: "Home, hotel or office to the terminal and back." },
        { title: "Corporate & executive", text: "Meet & greet and straight to the first meeting.", href: "/executive-car-service-washington-dc" },
        { title: "Families", text: "SUVs and Sprinters with room for luggage and car seats on request." },
        { title: "Group arrivals", text: "Coordinated pickups for teams and attendees.", href: "/group-transportation-in-washington-dc" },
        { title: "Airport to airport", text: "Transfers between DCA, IAD and BWI." },
        { title: "Meetings & events", text: "Arrival waves for conferences and weddings.", href: "/meetings-conferences-transportation" },
      ],
    },
    steps: { title: "Four steps from flight to destination", items: STEPS_AIRPORT },
    vehicles: { title: "Vehicles for airport transfers", slugs: AIRPORT_VEHICLES },
    related: ["/point-to-point-transportation", "/corporate-travel-services-in-washington-dc", "/fleet"],
    faqTitle: "Airport Transportation Questions",
    faq: [
      { question: "Which airports do you serve?", answer: "Reagan National (DCA), Washington Dulles (IAD) and Baltimore/Washington (BWI), plus private aviation FBOs and Washington Union Station." },
      { question: "Do you track my flight if it's delayed or early?", answer: "Yes. Flights are tracked in real time and the pickup adjusts to the actual arrival." },
      { question: "Can you handle both drop-off and pickup?", answer: "Yes. We get you to the terminal with time to spare and meet you when you land." },
      { question: "How far in advance should I book?", answer: "As soon as your travel dates are confirmed, especially for holidays and busy weekends. Same-day requests are accommodated when a vehicle is available." },
      { question: "What affects the price of an airport ride?", answer: "The vehicle, the airport, the distance to your pickup or drop-off, and any stops or wait time." },
    ],
  },

  "/dca-airport-limousine-car-service": {
    lead:
      "Private car service to and from Ronald Reagan Washington National Airport — minutes from downtown, Capitol Hill, Arlington and Alexandria.",
    intro: {
      eyebrow: "Ronald Reagan Washington National · DCA",
      title: "DCA car service planned around the flight",
      body: [
        "Reagan National is the closest airport to downtown Washington, which makes timing everything. We track the flight, confirm the meeting plan and match the vehicle to your passengers and bags.",
        "Common trips connect DCA with downtown hotels, Capitol Hill, Arlington, Alexandria, corporate offices and destinations across Northern Virginia and Maryland.",
      ],
      points: [
        { title: "Flight-aware pickups", text: "Timing adjusts when the arrival changes." },
        { title: "Meeting plan", text: "Curbside pickup, or meet & greet inside on request." },
        { title: "Close-in destinations", text: "Downtown, Capitol Hill, Arlington, Alexandria." },
        { title: "24/7 service", text: "First flights out and last flights in." },
      ],
    },
    useCases: {
      eyebrow: "DCA use cases",
      title: "From one traveler to a coordinated arrival",
      items: [
        { title: "Individual transfers", text: "DCA to a hotel, residence, office or meeting." },
        { title: "Corporate & executive", text: "Executives, clients and roadshow days.", href: "/executive-car-service-washington-dc" },
        { title: "Meetings & conferences", text: "Arrivals coordinated with hotels and venues.", href: "/meetings-conferences-transportation" },
        { title: "Group arrivals", text: "Sprinters or several vehicles for teams and attendees.", href: "/group-transportation-in-washington-dc" },
        { title: "Families", text: "Room for luggage, with car seats on request." },
        { title: "Hotels & events", text: "Straight to a wedding hotel, venue or reception." },
      ],
    },
    steps: { title: "From flight to destination", items: STEPS_AIRPORT },
    vehicles: { title: "Vehicles for DCA transfers", slugs: AIRPORT_VEHICLES },
    related: ["/iad-airport-limo-car-service", "/bwi-airport-limo-car-service", "/areas/limousine-and-car-services-in-washington-dc"],
    faqTitle: "DCA Airport Questions",
    faq: [
      { question: "What areas do you serve from DCA?", answer: "Washington DC, Northern Virginia and Maryland — including Arlington, Alexandria, Fairfax, McLean, Reston, Bethesda, Silver Spring and Annapolis." },
      { question: "Are early-morning and late-night DCA pickups available?", answer: "Yes. Service runs 24/7." },
      { question: "Do you track my flight?", answer: "Yes. The pickup time follows the actual arrival, early or delayed." },
      { question: "What vehicles are available at DCA?", answer: "Sedans, the Mercedes-Benz S-Class, luxury SUVs including the 2026 Cadillac Escalade IQL, Sprinters and larger group vehicles." },
      { question: "What affects the price of a DCA ride?", answer: "The vehicle, the distance to your pickup or drop-off, and any stops or wait time." },
    ],
  },

  "/iad-airport-limo-car-service": {
    lead:
      "Private car service at Washington Dulles International — domestic and international arrivals connected with Tysons, Reston, Loudoun County and Washington DC.",
    image: {
      src: "/images/photos/airport-iad-chauffeur.webp",
      alt: "Chauffeur with a black SUV at the Washington Dulles International Airport terminal",
    },
    intro: {
      eyebrow: "Washington Dulles International · IAD",
      title: "Dulles car service planned around your trip",
      body: [
        "Dulles itineraries range from a solo executive to a family with luggage or a group landing on different flights. Complete flight, passenger and destination details let us plan the right meeting point and vehicle.",
        "International arrivals can request an inside meet & greet so the traveler is welcomed after customs.",
      ],
      points: [
        { title: "Domestic & international", text: "Timing set for customs, baggage and the walk out." },
        { title: "Inside meet & greet", text: "On request, for executives, families and first-time visitors." },
        { title: "Northern Virginia hub", text: "Tysons, Reston, Herndon, Ashburn and Loudoun County." },
        { title: "Into DC", text: "Downtown hotels, offices and residences." },
      ],
    },
    useCases: {
      eyebrow: "IAD use cases",
      title: "Business travel, families, meetings and groups",
      items: [
        { title: "Corporate arrivals", text: "Executives, clients and visiting teams.", href: "/executive-car-service-washington-dc" },
        { title: "International travelers", text: "Arrival planning with a confirmed meeting approach." },
        { title: "Families & private parties", text: "SUVs or Sprinters when a sedan isn't enough." },
        { title: "Meetings & conferences", text: "Scheduled arrivals and departures for programs.", href: "/meetings-conferences-transportation" },
        { title: "Group transfers", text: "Sprinters, minibuses or several vehicles.", href: "/group-transportation-in-washington-dc" },
        { title: "IAD departures", text: "Pickup planned back from your airline schedule." },
      ],
    },
    steps: { title: "From flight to destination", items: STEPS_AIRPORT },
    vehicles: { title: "Vehicles for Dulles passengers", slugs: AIRPORT_VEHICLES },
    related: ["/dca-airport-limousine-car-service", "/private-aviation-fbo-transportation", "/areas/limousine-and-car-service-in-virginia"],
    faqTitle: "Dulles Airport Questions",
    faq: [
      { question: "Do you offer meet & greet at Dulles?", answer: "Yes. An inside greeting can be requested, especially useful for international arrivals and visiting executives." },
      { question: "Do you track international flights?", answer: "Yes. Arrival timing is followed and the pickup accounts for customs and baggage." },
      { question: "Where do you take travelers from IAD?", answer: "Anywhere in the region — Tysons, Reston, Herndon, Ashburn, Loudoun County, Washington DC and Maryland." },
      { question: "Can a group arriving on different flights be coordinated?", answer: "Yes. Share each flight and we group pickups or assign separate vehicles." },
      { question: "How early should my IAD departure pickup be?", answer: "We plan backward from your flight time, origin and preferred airport arrival window, allowing for traffic." },
    ],
  },

  "/bwi-airport-limo-car-service": {
    lead:
      "Private car service at Baltimore/Washington International Thurgood Marshall Airport, connecting BWI with Baltimore, Annapolis, Maryland, Washington DC and Northern Virginia.",
    intro: {
      eyebrow: "Baltimore/Washington International · BWI",
      title: "BWI car service for the wider region",
      body: [
        "BWI trips often run longer across the region, so the plan accounts for the flight, the party and the timing at the other end — a downtown DC meeting, an Annapolis hotel or a Northern Virginia home.",
        "Curbside pickup or meet & greet, with flight tracking on every arrival.",
      ],
      points: [
        { title: "Flight monitoring", text: "Pickup time adjusts automatically to the arrival." },
        { title: "Meet & greet", text: "A personal welcome and help with luggage." },
        { title: "Maryland & Baltimore", text: "Baltimore, Annapolis, Columbia and the I-95 corridor." },
        { title: "DC & Virginia", text: "Longer regional trips planned with realistic timing." },
      ],
    },
    useCases: {
      eyebrow: "BWI use cases",
      title: "Business trips, private travel and groups",
      items: [
        { title: "Washington DC connections", text: "Hotels, offices, venues and residences in the city." },
        { title: "Northern Virginia travel", text: "Arlington, Alexandria, Fairfax and beyond." },
        { title: "Maryland destinations", text: "Baltimore, Annapolis and Maryland hotels and offices.", href: "/maryland-chauffeured-transportation" },
        { title: "Corporate transportation", text: "Executives, employees and visiting teams.", href: "/corporate-travel-services-in-washington-dc" },
        { title: "Meeting & group arrivals", text: "Attendees, conventions and private groups.", href: "/meetings-conferences-transportation" },
        { title: "BWI departures", text: "Pickup planned back from the flight schedule." },
      ],
    },
    steps: { title: "From flight to destination", items: STEPS_AIRPORT },
    vehicles: { title: "Vehicles for BWI passengers", slugs: AIRPORT_VEHICLES },
    related: ["/areas/limousine-and-car-services-in-baltimore", "/dca-airport-limousine-car-service", "/iad-airport-limo-car-service"],
    faqTitle: "BWI Airport Questions",
    faq: [
      { question: "What areas do you serve from BWI?", answer: "Baltimore, Annapolis and Maryland, plus Washington DC and Northern Virginia." },
      { question: "Do you provide meet & greet at BWI?", answer: "Yes. A chauffeur can meet you inside, help with luggage and walk you to the vehicle." },
      { question: "Do you track my flight?", answer: "Yes. Pickup time adjusts to early, delayed or on-time arrivals." },
      { question: "Can you handle both pickups and drop-offs?", answer: "Yes. Departures are timed from your flight; arrivals follow the flight." },
      { question: "What affects the price of a BWI ride?", answer: "The vehicle, the distance between BWI and your address, and any stops or wait time." },
    ],
  },

  "/private-aviation-fbo-transportation": {
    lead:
      "Landside transportation for private aircraft passengers and crews at FBOs serving DCA, IAD, BWI and regional general aviation airports.",
    intro: {
      eyebrow: "Private aviation",
      title: "Ground transportation planned around the actual FBO",
      body: [
        "Private aviation needs more than an airport code. Share the airport, the FBO or operator, the aircraft schedule (and tail number if available), passengers, luggage and destination, and we coordinate the vehicle around the facility's pickup instructions.",
        "From the FBO to a hotel, office, meeting or another airport — and back for the departure.",
      ],
      points: [
        { title: "Facility-specific plans", text: "Pickup follows each FBO's current instructions." },
        { title: "Passengers & crews", text: "Executives, families, pilots and flight attendants." },
        { title: "Multiple aircraft", text: "Separate arrivals coordinated with separate vehicles." },
        { title: "Onward itineraries", text: "Straight to meetings, roadshows or hotels." },
      ],
    },
    useCases: {
      eyebrow: "Gateways",
      title: "Where private aviation pickups happen",
      items: [
        { title: "IAD", text: "Dulles-area FBOs such as Signature Aviation and Atlantic Aviation." },
        { title: "DCA", text: "Reagan National's general aviation terminal." },
        { title: "BWI", text: "BWI-area private aviation facilities." },
        { title: "Regional airports", text: "Manassas, Leesburg, Montgomery County Airpark, Frederick and others on request." },
        { title: "FBO to FBO", text: "Transfers between facilities or to a commercial terminal." },
        { title: "Crew movements", text: "FBO to hotel and back for pilots and crew." },
      ],
    },
    steps: {
      title: "Send the details before wheels-down",
      items: [
        { title: "Airport and FBO", text: "The exact facility and its meeting instructions." },
        { title: "Aircraft schedule", text: "Date, scheduled time and tail number if available." },
        { title: "Party and luggage", text: "Passengers, crew, bags and equipment." },
        { title: "Onward route", text: "Destination, stops and a reachable contact." },
      ],
      note: "Ramp or tarmac access is controlled by each airport and FBO; unless confirmed, plan for the landside meeting point the facility designates. Naming an FBO does not imply a partnership.",
    },
    vehicles: {
      title: "Vehicles for private aviation",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "cadillac-escalade-iql", "luxury-executive-sprinter-van"],
    },
    related: ["/executive-car-service-washington-dc", "/corporate-roadshow-transportation", "/nationwide-worldwide-chauffeured-transportation"],
    faqTitle: "Private Aviation Questions",
    faq: [
      { question: "What information do you need for an FBO pickup?", answer: "Airport, confirmed FBO, scheduled arrival date and time, tail number if available, passengers and luggage, destination and a reachable contact." },
      { question: "Do you guarantee ramp or tarmac pickup?", answer: "No. Access is governed by the airport and FBO; we follow the facility's designated meeting point unless planeside access is confirmed." },
      { question: "Can you coordinate separate arrivals or multiple aircraft?", answer: "Yes. Send each aircraft schedule, FBO, passenger group and destination." },
      { question: "Can you transport pilots and crew?", answer: "Yes. Crew movements between the FBO, hotel and other destinations can be scheduled, including returns." },
      { question: "Do you serve FBOs beyond DCA, IAD and BWI?", answer: "Yes. Share the regional airport and FBO along with the full route." },
    ],
  },

  "/washington-union-station-car-service": {
    lead:
      "Chauffeured pickups and drop-offs at Washington Union Station, connected to hotels, offices, residences and the region's airports.",
    image: {
      src: "/images/photos/union-station-escalades.webp",
      alt: "Three black Cadillac Escalades parked in front of Washington Union Station",
    },
    intro: {
      eyebrow: "Rail arrivals & departures",
      title: "Rail travel has its own timing",
      body: [
        "A train arrival isn't curbside readiness: passengers need time to leave the platform and collect bags. Share the train, party and destination, and we confirm a meeting point and timing that fit.",
        "For departures, the pickup is set from your boarding needs, not just the departure time.",
      ],
      points: [
        { title: "Arriving in Washington", text: "To downtown hotels, Capitol Hill, offices and residences." },
        { title: "Departing by train", text: "Time built in for traffic, unloading and station entry." },
        { title: "Airport connections", text: "Union Station to DCA, IAD or BWI." },
        { title: "Luggage-aware vehicles", text: "Sedans, SUVs or Sprinters by party and bags." },
      ],
    },
    steps: {
      title: "A simple Union Station plan",
      items: [
        { title: "Send the rail details", text: "Date, train, scheduled time, passengers, bags and destination." },
        { title: "Confirm the meeting point", text: "Use the pickup instructions in your confirmation." },
        { title: "Share changes", text: "If the train or party changes, let us know and we'll reconfirm." },
      ],
      note: "Infinity Limo Car is an independent provider, not affiliated with Union Station or Amtrak.",
    },
    vehicles: {
      title: "Vehicles for station transfers",
      slugs: ["sedan", "mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter"],
    },
    related: ["/point-to-point-transportation", "/airport-pick-and-drop-in-washington-dc", "/areas/limousine-and-car-services-in-washington-dc"],
    faqTitle: "Union Station Questions",
    faq: [
      { question: "Can you guarantee pickup the moment the train arrives?", answer: "Arrival and readiness differ. Follow the confirmed meeting plan and contact the chauffeur once you've left the platform with your bags." },
      { question: "Can Union Station service connect to an airport?", answer: "Yes. Share the train and flight details so the transfer window is realistic." },
      { question: "Should I book point-to-point or hourly?", answer: "Point-to-point for a direct transfer; hourly if the day continues with meetings or several stops." },
      { question: "Can a larger party be accommodated?", answer: "Yes. Tell us passengers and bags so we can assign an SUV, Sprinter or several vehicles." },
    ],
  },
};
