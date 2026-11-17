import { STEPS_GROUP, STEPS_PROGRAM } from "./shared";
import type { ServiceContent } from "./types";

/** Corporate group: hub + executive, accounts, roadshows, employees, meetings, conventions. */
export const CORPORATE_CONTENT: Record<string, ServiceContent> = {
  "/corporate-travel-services-in-washington-dc": {
    lead:
      "Ground transportation for executives, teams, clients and events — from a single airport pickup to a multi-day program with several vehicles.",
    image: {
      src: "/images/photos/corporate-cadillac-capitol.webp",
      alt: "Chauffeur opening the door of a black Cadillac for business travelers near the U.S. Capitol",
    },
    intro: {
      eyebrow: "Corporate travel",
      title: "Business travel planned around people, timing and purpose",
      body: [
        "Business transportation can be one executive's airport transfer or a program that moves travelers between airports, hotels, offices, meetings and events for several days. We plan around the actual schedule, not a template.",
        "Executive assistants and travel managers get one team for reservations, changes and billing.",
      ],
      points: [
        { title: "Executive & team travel", text: "Sedans and SUVs for leaders, larger vehicles for teams." },
        { title: "Multiple arrivals", text: "Travelers landing at different times and airports, coordinated." },
        { title: "Business itineraries", text: "Hotel → office → dinner, with hourly service when plans shift." },
        { title: "Accounts & billing", text: "Centralized booking and invoicing for recurring travel." },
      ],
    },
    children: {
      eyebrow: "Corporate services",
      title: "Transportation for the way organizations move",
      links: [
        { href: "/executive-car-service-washington-dc", text: "Discreet car service for leaders, board members and visiting executives." },
        { href: "/corporate-transportation-accounts", text: "Centralized booking, billing and reporting for recurring company travel." },
        { href: "/corporate-roadshow-transportation", text: "Multi-meeting days handled as one itinerary, with standby between stops." },
        { href: "/employee-transportation-services", text: "Recurring commutes, shift transportation and workforce programs." },
        { href: "/meetings-conferences-transportation", text: "Speakers, executives and attendees across airports, hotels and venues." },
        { href: "/convention-transportation-washington-dc", text: "Arrival waves, hotel loops and departures for large events." },
      ],
    },
    useCases: {
      eyebrow: "Connected journeys",
      title: "Examples of corporate itineraries",
      items: [
        { title: "DCA → Office → Hotel", text: "A visiting executive met at arrival and taken through the day." },
        { title: "Hotel → Roadshow → Airport", text: "Back-to-back meetings ending at the departure terminal." },
        { title: "FBO → Board meeting", text: "Private aviation arrivals straight to the boardroom.", href: "/private-aviation-fbo-transportation" },
        { title: "Training week", text: "Daily hotel-to-office shuttles for a cohort of employees." },
        { title: "Client dinner", text: "Hosted guests picked up at their hotels and returned after." },
        { title: "Conference program", text: "Speakers in sedans, attendees on scheduled shuttles." },
      ],
    },
    steps: {
      title: "From schedule to coordinated transportation",
      items: [
        { title: "Share the schedule", text: "Travelers, flights, hotels, meetings and events." },
        { title: "Match the service", text: "Point-to-point, hourly or group movements for each part." },
        { title: "Confirm the movement plan", text: "Vehicles, timing and contacts for every traveler." },
      ],
    },
    vehicles: {
      title: "Vehicles for business travel",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "cadillac-escalade-iql", "luxury-executive-sprinter-van"],
    },
    related: ["/airport-pick-and-drop-in-washington-dc", "/hourly-as-directed-chauffeur-service", "/nationwide-worldwide-chauffeured-transportation"],
    faqTitle: "Corporate Travel Questions",
    faq: [
      { question: "Which airports do you serve for corporate transfers?", answer: "Reagan National (DCA), Washington Dulles (IAD) and Baltimore/Washington (BWI), plus private aviation FBOs and Union Station. Flight arrivals are tracked so pickups adjust to delays or early landings." },
      { question: "Do you offer meet-and-greet for executive pickups?", answer: "Yes. A chauffeur can meet the traveler inside the terminal, assist with luggage and walk them to the vehicle." },
      { question: "Can you coordinate travelers arriving at different times?", answer: "Yes. Each arrival is planned individually, and groups can be combined where flights and destinations line up." },
      { question: "Do you offer corporate accounts?", answer: "Yes. Corporate accounts centralize booking, billing and reservation details for recurring travel." },
      { question: "Can large corporate events use several vehicles?", answer: "Yes. Sprinters, minibuses and motor coaches can be coordinated under one plan for conferences, annual meetings and events." },
    ],
  },

  "/executive-car-service-washington-dc": {
    lead:
      "Discreet, punctual car service for executives, board members and visiting leaders — airport to office, meeting to dinner.",
    image: {
      src: "/images/photos/escalade-iq-real.webp",
      alt: "Black Cadillac Escalade IQ parked at a passenger pickup area",
    },
    intro: {
      eyebrow: "Executive car service",
      title: "A focused car service for business schedules",
      body: [
        "Executive travel is about timing and discretion. We plan the full day — arrival, meetings, a working lunch, dinner and the return flight — and keep the vehicle and chauffeur aligned with every change.",
        "Executive assistants can book for travelers they are not riding with, and receive confirmations and updates directly.",
      ],
      points: [
        { title: "Airport-to-business", text: "DCA, IAD, BWI and FBO arrivals straight to the first meeting." },
        { title: "Schedule-aware planning", text: "Pickups set against meeting times, not just addresses." },
        { title: "Private vehicle selection", text: "S-Class, luxury SUVs and the 2026 Cadillac Escalade IQL." },
        { title: "Assistant support", text: "Bookings, changes and confirmations through one contact." },
      ],
    },
    useCases: {
      eyebrow: "Executive journeys",
      title: "How executive car service is used",
      items: [
        { title: "Leadership & board travel", text: "Board meetings, investor visits and leadership offsites." },
        { title: "Visiting executives", text: "Clients and partners met at arrival and hosted through the visit." },
        { title: "Airport arrivals & departures", text: "Meet & greet on arrival, timed drop-off for the return flight.", href: "/airport-pick-and-drop-in-washington-dc" },
        { title: "Multi-stop meeting days", text: "Hourly service between offices, lunches and appointments.", href: "/corporate-roadshow-transportation" },
        { title: "Business dinners", text: "Evening pickups and returns for hosts and guests." },
        { title: "Leaders within a larger program", text: "Separate vehicles for executives inside a group event.", href: "/meetings-conferences-transportation" },
      ],
    },
    steps: {
      title: "How executive transportation is arranged",
      items: [
        { title: "Share the traveler and schedule", text: "Name, contact, flights and the day's appointments." },
        { title: "Confirm the service structure", text: "Point-to-point transfers or an hourly window." },
        { title: "Coordinate each movement", text: "Pickups, waiting time and changes through one contact." },
      ],
    },
    vehicles: {
      title: "Vehicles for executive travel",
      slugs: ["mercedes-benz-s-class", "sedan", "suv-and-luxury-suv", "cadillac-escalade-iql"],
    },
    related: ["/corporate-transportation-accounts", "/hourly-as-directed-chauffeur-service", "/private-aviation-fbo-transportation"],
    faqTitle: "Executive Car Service Questions",
    faq: [
      { question: "Is executive car service the same as corporate transportation?", answer: "Executive car service focuses on individual leaders and small parties. Corporate transportation also covers teams, accounts, meetings and events." },
      { question: "Can I book for an executive who is not traveling with me?", answer: "Yes. Provide the traveler's name and mobile number, and confirmations can go to both of you." },
      { question: "When should I choose hourly service?", answer: "When the day has several meetings or uncertain timing. The vehicle waits between stops within the reserved window." },
      { question: "Can a multi-day leadership itinerary be arranged?", answer: "Yes. Share every day's schedule and we plan vehicles and pickups across the visit." },
      { question: "Can you arrange travel beyond the Washington region?", answer: "Yes, through vetted affiliate providers coordinated by our team." },
    ],
  },

  "/corporate-transportation-accounts": {
    lead:
      "One account for your company's ground travel: centralized reservations, consistent billing and a team that knows your travelers.",
    intro: {
      eyebrow: "Corporate accounts",
      title: "A clearer way to manage repeated company travel",
      body: [
        "When the same organization books transportation every week, an account keeps traveler profiles, booking authority and billing requirements in one place, so each reservation starts with what we already know.",
        "Accounts fit executive assistants, travel managers and event teams who arrange travel for others.",
      ],
      points: [
        { title: "Centralized reservations", text: "One team for executives, employees and guests." },
        { title: "Billing requirements", text: "Invoicing, cost centers and reference fields agreed up front." },
        { title: "Booking authority", text: "Defined coordinators who can book and change trips." },
        { title: "Every service", text: "Airport, hourly, group and nationwide travel on one account." },
      ],
    },
    useCases: {
      eyebrow: "When an account fits",
      title: "Who uses a corporate account",
      items: [
        { title: "Recurring executive travel", text: "Leaders who travel the same routes every month." },
        { title: "Multiple travelers", text: "Several employees or guests booked by one coordinator." },
        { title: "Executive assistants", text: "Bookings for travelers they don't ride with." },
        { title: "Travel managers", text: "Consistent reservation details and billing review." },
        { title: "Meetings & events", text: "Group programs on the same account.", href: "/meetings-conferences-transportation" },
        { title: "Nationwide & worldwide", text: "Trips beyond DC coordinated through vetted affiliates.", href: "/nationwide-worldwide-chauffeured-transportation" },
      ],
    },
    steps: { title: "How account setup works", items: STEPS_PROGRAM },
    vehicles: {
      title: "Vehicles across company travel",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "luxury-executive-sprinter-van", "mini-bus"],
    },
    related: ["/executive-car-service-washington-dc", "/employee-transportation-services", "/corporate-roadshow-transportation"],
    faqTitle: "Corporate Account Questions",
    faq: [
      { question: "Do we need an account to book?", answer: "No. Any company can book individual trips; an account makes sense when travel is recurring or several people book." },
      { question: "Can an executive assistant book for several travelers?", answer: "Yes. Authorized coordinators can book, change and track trips for others." },
      { question: "How are billing requirements handled?", answer: "Invoicing preferences, reference fields and approval contacts are agreed during setup." },
      { question: "Does an account include fixed or discounted rates?", answer: "Rates are discussed during setup based on your travel volume and services; nothing is assumed until agreed in writing." },
      { question: "Can the account cover travel outside Washington DC?", answer: "Yes. Nationwide and worldwide trips are coordinated through vetted affiliates on the same account." },
    ],
  },

  "/corporate-roadshow-transportation": {
    lead:
      "Investor meetings, client visits and site tours in one tightly timed day — one vehicle, one chauffeur, one coordinator.",
    intro: {
      eyebrow: "Roadshows",
      title: "Keep a multi-stop business day organized",
      body: [
        "A roadshow moves through a sequence of appointments where each delay affects the next. We plan the stops in order, keep the vehicle on standby between meetings and adjust routing as the schedule shifts.",
        "Multi-day and multi-city roadshows can be planned as one itinerary, with affiliates covering cities outside the DC region.",
      ],
      points: [
        { title: "Sequential stop planning", text: "Realistic drive times between each appointment." },
        { title: "Standby between meetings", text: "Hourly service keeps the vehicle at the curb." },
        { title: "Dispatcher coordination", text: "One contact for changes during the day." },
        { title: "Separate travelers", text: "Mixed vehicles when executives split up." },
      ],
    },
    useCases: {
      eyebrow: "Roadshow use cases",
      title: "What a roadshow day includes",
      items: [
        { title: "Investor & client meetings", text: "Back-to-back appointments across DC and Northern Virginia." },
        { title: "Airport arrival + first meeting", text: "Met at DCA, IAD or BWI and taken straight to the first stop." },
        { title: "Property & site visits", text: "Projects, campuses and facilities across the region." },
        { title: "Hotel, office & boardroom", text: "Every stop in one service window." },
        { title: "Multi-day schedules", text: "Consistent vehicles and chauffeurs across several days." },
        { title: "Schedule updates", text: "Changes routed through the dispatcher in real time." },
      ],
    },
    steps: {
      title: "How a roadshow is coordinated",
      items: [
        { title: "Share the full itinerary", text: "Every meeting, address and target arrival time." },
        { title: "Review timing and routing", text: "Buffers between stops based on real drive times." },
        { title: "Keep an update channel", text: "The traveler or assistant reaches dispatch directly." },
      ],
    },
    vehicles: {
      title: "Vehicles for roadshow teams",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "cadillac-escalade-iql", "luxury-executive-sprinter-van"],
    },
    related: ["/hourly-as-directed-chauffeur-service", "/executive-car-service-washington-dc", "/nationwide-worldwide-chauffeured-transportation"],
    faqTitle: "Roadshow Questions",
    faq: [
      { question: "How is a roadshow different from point-to-point service?", answer: "A roadshow is a sequence of stops with waiting in between, so it runs as hourly service instead of separate transfers." },
      { question: "Can the itinerary change during the day?", answer: "Yes. Changes go through the dispatcher and the chauffeur re-routes within the reserved window." },
      { question: "Can a roadshow begin at DCA, IAD or BWI?", answer: "Yes. Share the flight and the first appointment, and the day starts at arrival." },
      { question: "When is more than one vehicle useful?", answer: "When executives follow separate schedules, or the team plus materials won't fit one vehicle comfortably." },
      { question: "Can a roadshow span several days or cities?", answer: "Yes. Send the full itinerary; cities outside the DC region are coordinated through vetted affiliates." },
    ],
  },

  "/employee-transportation-services": {
    lead:
      "Recurring commutes, shift transportation and workforce shuttles planned around your schedule, sites and ridership.",
    intro: {
      eyebrow: "Employee transportation",
      title: "Built around the work schedule",
      body: [
        "Employee programs run on repetition: the same routes, the same times, a ridership that changes. We size vehicles to the actual headcount and adjust as the program grows or shifts.",
        "This is private transportation for your organization, not public transit — routes, pickup points and timing are set with you.",
      ],
      points: [
        { title: "Recurring schedules", text: "Daily, weekly or project-based routes." },
        { title: "Scalable vehicles", text: "From a Sprinter to a motor coach as ridership changes." },
        { title: "Multiple pickup points", text: "Offices, hotels, parking areas and transit hubs." },
        { title: "Program contact", text: "One coordinator for changes and reporting." },
      ],
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Employee transportation programs",
      items: [
        { title: "Office commutes", text: "Scheduled routes between hubs and the workplace." },
        { title: "Shift transportation", text: "Pickups timed to shift changes and departure waves." },
        { title: "Temporary workforce", text: "Project teams and seasonal staff moved for a set period." },
        { title: "Hotel-to-worksite", text: "Visiting teams moved daily from lodging to site." },
        { title: "Training & orientation", text: "Cohorts moved between hotels, offices and venues." },
        { title: "Company events", text: "Dinners, offsites and celebrations for staff.", href: "/meetings-conferences-transportation" },
      ],
    },
    steps: { title: "How a program is planned", items: STEPS_PROGRAM },
    vehicles: {
      title: "Vehicles for workforce transportation",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/shuttle-service-and-contract-services-in-washington-dc", "/corporate-transportation-accounts", "/group-transportation-in-washington-dc"],
    faqTitle: "Employee Transportation Questions",
    faq: [
      { question: "Is employee transportation public transit?", answer: "No. It is private, prearranged transportation for your organization's employees." },
      { question: "Can service run on a recurring schedule?", answer: "Yes. Routes can run daily, weekly or for the length of a project." },
      { question: "Can a program include several pickup points?", answer: "Yes. List each pickup point with its ridership and times." },
      { question: "Can different shifts or departure waves be covered?", answer: "Yes. Each wave is scheduled with the right vehicle for its headcount." },
      { question: "Can employees be picked up at DCA, IAD or BWI?", answer: "Yes. Arriving teams can be met at the airport and taken to hotels or the worksite." },
    ],
  },

  "/meetings-conferences-transportation": {
    lead:
      "Speakers, executives and attendees moved between airports, hotels, venues and off-site dinners — one plan for the whole meeting.",
    image: {
      src: "/images/photos/sprinters-dc-street.webp",
      alt: "Mercedes-Benz Sprinter vans lined up on a Washington DC street",
    },
    intro: {
      eyebrow: "Meetings & conferences",
      title: "Transportation built around the meeting schedule",
      body: [
        "A meeting program has several transportation roles: VIPs in sedans, attendees on shuttles, arrival waves from three airports and an evening off-site event. We build the movement plan from your agenda and manifest.",
        "Multi-day programs keep the same coordinator and adjust as registrations and flights change.",
      ],
      points: [
        { title: "Arrival & departure waves", text: "DCA, IAD and BWI arrivals grouped by time and hotel." },
        { title: "Hotel-to-venue shuttles", text: "Scheduled loops between hotels and the venue." },
        { title: "Speakers & executives", text: "Separate vehicles and timing for VIPs." },
        { title: "Multi-day coordination", text: "One plan from first arrival to last departure." },
      ],
    },
    useCases: {
      eyebrow: "Roles within a program",
      title: "What meeting transportation covers",
      items: [
        { title: "Executive & speaker transfers", text: "Private cars timed to sessions and keynotes.", href: "/executive-car-service-washington-dc" },
        { title: "Attendee airport transfers", text: "Grouped arrivals with signage or greeters on request." },
        { title: "Hotel & venue shuttles", text: "Repeated loops on a published schedule.", href: "/hotel-event-shuttle-service" },
        { title: "Dinners & off-site events", text: "Evening movements to restaurants and receptions." },
        { title: "Team & department movements", text: "Breakouts, site visits and training sessions." },
        { title: "Planning support", text: "Manifests, contacts and change handling with your team." },
      ],
    },
    steps: { title: "How meeting transportation comes together", items: STEPS_GROUP },
    vehicles: {
      title: "Vehicles for meetings and conferences",
      slugs: ["mercedes-benz-s-class", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/convention-transportation-washington-dc", "/hotel-event-shuttle-service", "/corporate-transportation-accounts"],
    faqTitle: "Meeting Transportation Questions",
    faq: [
      { question: "How early should planning begin?", answer: "As soon as dates, hotels and an estimated headcount are known; details can be refined as registrations come in." },
      { question: "Can travelers arriving at different airports be coordinated?", answer: "Yes. Arrivals at DCA, IAD and BWI are grouped by time and destination." },
      { question: "Can speakers travel separately from attendees?", answer: "Yes. VIPs can have private vehicles while attendees use scheduled shuttles." },
      { question: "Can you provide signage or greeters?", answer: "Airport meet & greet and signage can be requested as part of the plan." },
      { question: "Is this the same as convention transportation?", answer: "Conventions are larger and usually involve several hotels and shuttle loops; we plan both, sized to the event." },
    ],
  },

  "/convention-transportation-washington-dc": {
    lead:
      "Arrival waves, hotel-to-venue loops, off-site events and final departures for conventions across Washington DC and National Harbor.",
    image: {
      src: "/images/photos/motorcoach-van-hool.webp",
      alt: "Infinity Limo Car motor coach ready for a group departure",
    },
    intro: {
      eyebrow: "Conventions",
      title: "Convention transportation as a system",
      body: [
        "Conventions multiply every variable: several hotel blocks, thousands of trips, tight session times. We design the movement plan — loops, frequencies, vehicle mix and staffing — and run it with your event team.",
        "Common venues include the Walter E. Washington Convention Center and Gaylord National at National Harbor.",
      ],
      points: [
        { title: "Airport arrival waves", text: "Peak arrival days planned by flight bank." },
        { title: "Hotel loops", text: "Scheduled shuttles from each hotel block." },
        { title: "Off-site events", text: "Dinners and receptions on the event calendar." },
        { title: "Final departures", text: "Checkout-day movements back to the airports." },
      ],
    },
    useCases: {
      eyebrow: "Convention use cases",
      title: "Every movement of the event",
      items: [
        { title: "Large group transfers", text: "Motor coaches and minibuses for headline sessions." },
        { title: "Hotel-to-venue schedules", text: "Published frequencies by hotel and time of day." },
        { title: "Executive & speaker service", text: "Private cars for keynotes and VIPs.", href: "/executive-car-service-washington-dc" },
        { title: "Exhibitor movements", text: "Early setup and late teardown schedules." },
        { title: "Off-site dinners", text: "Evening programs at restaurants and venues." },
        { title: "Departure day", text: "Waves to DCA, IAD and BWI by flight time." },
      ],
    },
    steps: {
      title: "How the service is planned",
      items: [
        { title: "Establish scope", text: "Dates, hotels, venues, sessions and estimated ridership." },
        { title: "Design the movement plan", text: "Loops, frequencies, vehicle mix and staging." },
        { title: "Confirm final details", text: "Manifests, signage, contacts and day-of changes." },
      ],
      note: "We provide passenger transportation only; venue access and loading zones follow the convention center's rules.",
    },
    vehicles: {
      title: "Group vehicles for conventions",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/meetings-conferences-transportation", "/hotel-event-shuttle-service", "/charter-bus-service-washington-dc"],
    faqTitle: "Convention Transportation Questions",
    faq: [
      { question: "How is convention transportation different from meeting transportation?", answer: "Conventions usually involve several hotels, larger crowds and continuous shuttle loops; meetings are smaller and more scheduled." },
      { question: "Can multiple hotels be included?", answer: "Yes. Each hotel block gets its own loop and frequency based on ridership." },
      { question: "Which vehicles support convention groups?", answer: "Sprinters, minibuses and motor coaches of up to 55 passengers, often combined." },
      { question: "Can airport arrivals be coordinated?", answer: "Yes. Arrival days are planned by flight bank across DCA, IAD and BWI." },
      { question: "Do you have special convention-center access?", answer: "No. Pickup and drop-off follow each venue's designated zones and rules." },
    ],
  },
};

