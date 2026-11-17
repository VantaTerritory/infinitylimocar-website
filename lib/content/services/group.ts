import { STEPS_GROUP, STEPS_PROGRAM } from "./shared";
import type { ServiceContent } from "./types";

/** Group: hub + hotel/event shuttles + shuttle & contract service. */
export const GROUP_CONTENT: Record<string, ServiceContent> = {
  "/group-transportation-in-washington-dc": {
    lead:
      "Sprinter vans, minibuses and motor coaches for teams, attendees and guests — one plan for every passenger, vehicle and stop.",
    image: {
      src: "/images/photos/fleet-capitol-group.webp",
      alt: "Infinity Limo Car SUVs and Sprinter vans loading a group on a street facing the U.S. Capitol",
    },
    intro: {
      eyebrow: "Group transportation",
      title: "One plan for every passenger, vehicle and stop",
      body: [
        "Group travel gets complex as headcount, pickup points and destinations grow. Instead of treating each passenger as a separate ride, we coordinate the whole movement: who travels when, in which vehicle, from where.",
        "From a single Sprinter for a family arrival to several coaches for a convention, the plan is built from your itinerary and manifest.",
      ],
      points: [
        { title: "Professional chauffeurs", text: "Experienced with group timing, loading and venue access." },
        { title: "Right-sized fleet", text: "Sprinters, minibuses and motor coaches up to 55 passengers." },
        { title: "Multi-vehicle planning", text: "Several vehicles running together or in waves." },
        { title: "DMV & beyond", text: "Regional trips and out-of-town programs." },
      ],
    },
    children: {
      eyebrow: "Group services",
      title: "Choose the group format",
      links: [
        { href: "/charter-bus-service-washington-dc", text: "Minibuses and motor coaches for groups, events and corporate programs." },
        { href: "/hotel-event-shuttle-service", text: "Scheduled loops between hotels, venues and receptions." },
        { href: "/shuttle-service-and-contract-services-in-washington-dc", text: "Ongoing contract shuttles for companies, hotels and institutions." },
        { href: "/convention-transportation-washington-dc", text: "Arrival waves, hotel loops and departures for large events." },
      ],
    },
    useCases: {
      eyebrow: "Who travels with us",
      title: "Teams, attendees, guests and organizations",
      items: [
        { title: "Corporate groups", text: "Offsites, team events and employee movements.", href: "/corporate-travel-services-in-washington-dc" },
        { title: "Meetings & conferences", text: "Attendees between airports, hotels and venues.", href: "/meetings-conferences-transportation" },
        { title: "Airport groups", text: "Coordinated DCA, IAD and BWI arrivals and departures." },
        { title: "Weddings", text: "Guest shuttles and wedding-party vehicles.", href: "/wedding-transportation-in-washington-dc" },
        { title: "Tours & wine days", text: "Sightseeing and wine country for groups.", href: "/wine-tour-services-in-washington-dc" },
        { title: "Universities & teams", text: "Campus visits, sports teams and student groups." },
      ],
    },
    steps: { title: "From headcount to departure", items: STEPS_GROUP },
    vehicles: {
      title: "Group vehicles",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/charter-bus-service-washington-dc", "/meetings-conferences-transportation", "/fleet"],
    faqTitle: "Group Transportation Questions",
    faq: [
      { question: "How large a group can you accommodate?", answer: "From a few passengers in a Sprinter to motor coaches of up to 55, and several vehicles together for larger programs." },
      { question: "Which vehicles are available for groups?", answer: "Mercedes-Benz Sprinters (including executive and limo configurations), minibuses and motor coaches." },
      { question: "Can you serve multiple pickup locations?", answer: "Yes. List each pickup with its headcount and time, and we plan the sequence or separate vehicles." },
      { question: "Are you available early mornings, late nights and on recurring schedules?", answer: "Yes. Reservations are taken 24/7, and recurring programs can run as shuttle or contract service." },
      { question: "What affects the price of group transportation?", answer: "The vehicles needed, headcount, distance and duration, and whether it's a one-time event or an ongoing arrangement." },
    ],
  },

  "/hotel-event-shuttle-service": {
    lead:
      "Scheduled shuttle loops between hotels, venues and receptions, with clear departure times and pickup points for every guest.",
    image: {
      src: "/images/photos/sprinters-dc-street.webp",
      alt: "Mercedes-Benz Sprinter vans lined up on a Washington DC street",
    },
    intro: {
      eyebrow: "Hotel & event shuttles",
      title: "Repeated movements that guests can rely on",
      body: [
        "Shuttles work when guests know exactly when and where to board. We set the loop, frequency and pickup points with you, size vehicles to the expected ridership and keep the schedule running through the event.",
        "Weddings, conferences, galas and multi-day events all use the same approach.",
      ],
      points: [
        { title: "Departure windows", text: "Published times guests can plan around." },
        { title: "Pickup points", text: "Defined hotel entrances and venue drop zones." },
        { title: "Ridership-based sizing", text: "Sprinters, minibuses or coaches by the hour." },
        { title: "Guest communication", text: "Schedules you can share with guests in advance." },
      ],
    },
    useCases: {
      eyebrow: "Where shuttles run",
      title: "Shuttle programs",
      items: [
        { title: "Wedding hotel blocks", text: "Hotel to ceremony, reception and back.", href: "/wedding-transportation-in-washington-dc" },
        { title: "Conference hotels", text: "Morning and evening loops to the venue.", href: "/meetings-conferences-transportation" },
        { title: "Galas & fundraisers", text: "Arrivals and late-night returns." },
        { title: "Sports & entertainment", text: "Hotel to stadium or arena and back." },
        { title: "Airport shuttles for events", text: "Scheduled runs to DCA, IAD and BWI." },
        { title: "Multi-day events", text: "Daily schedules adjusted as attendance changes." },
      ],
    },
    steps: { title: "From guest list to shuttle schedule", items: STEPS_GROUP },
    vehicles: {
      title: "Shuttle vehicles",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/shuttle-service-and-contract-services-in-washington-dc", "/wedding-transportation-in-washington-dc", "/convention-transportation-washington-dc"],
    faqTitle: "Shuttle Questions",
    faq: [
      { question: "How is a shuttle different from a charter?", answer: "A shuttle repeats a loop on a schedule; a charter moves a group along one itinerary." },
      { question: "Can the shuttle serve several hotels?", answer: "Yes. Each hotel gets a defined pickup point and time, either on one loop or separate vehicles." },
      { question: "How do you size the vehicles?", answer: "From expected ridership at each departure time, with larger vehicles for peak runs." },
      { question: "What should we send for a quote?", answer: "Dates, hotels and venues, expected guests per run, event times and an on-site contact." },
    ],
  },

  "/shuttle-service-and-contract-services-in-washington-dc": {
    lead:
      "Ongoing shuttle and contract transportation for companies, hotels, campuses and organizations that need reliable service on a recurring schedule.",
    intro: {
      eyebrow: "Shuttle & contract service",
      title: "Recurring transportation, not one-time rides",
      body: [
        "Contract service is an ongoing arrangement built around your routes, frequency and vehicle needs, with dedicated support instead of booking trip by trip.",
        "It suits employee shuttles, hotel guest transfers, campus routes and recurring airport runs for staff and clients.",
      ],
      points: [
        { title: "Flexible scheduling", text: "Routes and times set around your operation." },
        { title: "Dedicated support", text: "One team that knows your program." },
        { title: "Consistent chauffeurs", text: "Punctuality that matters every trip, not just once." },
        { title: "Scalable vehicles", text: "Sprinters to motor coaches as needs change." },
      ],
    },
    useCases: {
      eyebrow: "Who uses contract service",
      title: "Programs we run",
      items: [
        { title: "Corporate offices", text: "Employee shuttles between hubs and offices.", href: "/employee-transportation-services" },
        { title: "Hotels", text: "Guest transfers to airports, stations and venues." },
        { title: "Campuses & institutions", text: "Routes between buildings, sites and transit." },
        { title: "Recurring airport runs", text: "Scheduled DCA, IAD and BWI trips for staff and clients." },
        { title: "Event organizers", text: "Repeated shuttles across a season of events.", href: "/hotel-event-shuttle-service" },
      ],
    },
    steps: { title: "Setting up a contract", items: STEPS_PROGRAM },
    vehicles: {
      title: "Contract shuttle vehicles",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/employee-transportation-services", "/hotel-event-shuttle-service", "/corporate-transportation-accounts"],
    faqTitle: "Shuttle & Contract Questions",
    faq: [
      { question: "How is contract service different from a one-time ride?", answer: "It is an ongoing arrangement with set routes, schedules and dedicated support, rather than individual bookings." },
      { question: "Who typically uses shuttle and contract service?", answer: "Businesses, corporate offices, hotels, institutions and event organizers that need recurring transportation." },
      { question: "Can the service be customized to our schedule?", answer: "Yes. Routes, timing and vehicles are designed around your operation." },
      { question: "How far in advance should we set it up?", answer: "As soon as you know your needs, so scheduling, vehicles and support are in place before routes start." },
      { question: "What affects the cost?", answer: "Vehicle type, route length and frequency, and the overall scope of the arrangement." },
    ],
  },
};
