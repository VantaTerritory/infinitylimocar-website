import { STEPS_GROUP, STEPS_TRIP } from "./shared";
import type { ServiceContent } from "./types";

/** Services group: hub, private, occasions and tours. */
export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  "/services": {
    lead:
      "Airport transfers, business travel, private journeys and group transportation across Washington DC, Northern Virginia and Maryland — with nationwide and worldwide coordination when the trip goes further.",
    image: {
      src: "/images/photos/hero-fleet-dc-dusk.webp",
      alt: "Infinity Limo Car sedans, SUVs and a Sprinter lined up at dusk with the Washington skyline behind",
    },
    intro: {
      eyebrow: "Start with the journey",
      title: "The right service depends on the itinerary",
      body: [
        "A single airport transfer and a three-day conference do not need the same plan. Start with the kind of trip you are arranging, or send us the whole itinerary when it crosses several categories.",
        "Every reservation is planned around the passengers, schedule, luggage and destination — not just the distance between two addresses.",
      ],
      points: [
        { title: "Airport travel", text: "DCA, IAD and BWI, plus private aviation FBOs and Union Station." },
        { title: "Business & executive", text: "Executives, teams, roadshows, meetings and corporate accounts." },
        { title: "Private transportation", text: "Point-to-point when the route is set; hourly when the day has stops." },
        { title: "Groups & events", text: "Sprinters, minibuses, coaches and shuttles for weddings, meetings and programs." },
      ],
    },
    children: {
      eyebrow: "Our services",
      title: "Choose your service",
      links: [
        { href: "/airport-pick-and-drop-in-washington-dc", text: "Between DCA, IAD or BWI and homes, hotels, offices and venues, planned around the flight." },
        { href: "/corporate-travel-services-in-washington-dc", text: "Executive car service, corporate accounts, roadshows, meetings and conventions." },
        { href: "/point-to-point-transportation", text: "A direct, prearranged transfer between two addresses at a set time." },
        { href: "/hourly-as-directed-chauffeur-service", text: "A chauffeur and vehicle by the hour for meetings, errands and multi-stop days." },
        { href: "/group-transportation-in-washington-dc", text: "One plan for every passenger, vehicle and stop — from a Sprinter to a coach program." },
        { href: "/charter-bus-service-washington-dc", text: "Minibuses and motor coaches for groups, events and corporate programs." },
        { href: "/wedding-transportation-in-washington-dc", text: "The couple, the wedding party and guests, timed to the ceremony and reception." },
        { href: "/washingtondc-city-tour-private", text: "Monuments, museums and neighborhoods on your own schedule." },
        { href: "/wine-tour-services-in-washington-dc", text: "Loudoun and Virginia wine country with a planned, comfortable return." },
        { href: "/prom-services-in-washington-dc", text: "A clear pickup, photo-stop and return plan for prom night." },
        { href: "/arlington-cemetery-professional-funeral-transportation-in-washington-dc", text: "Family and guest transportation handled with care, including Arlington National Cemetery." },
        { href: "/nationwide-worldwide-chauffeured-transportation", text: "Beyond the DC region through vetted affiliates, with one point of contact." },
      ],
    },
    useCases: {
      eyebrow: "One journey, several services",
      title: "Itineraries we plan end to end",
      lead: "A useful plan covers the whole sequence: timing, stops, luggage and the purpose of the trip.",
      items: [
        { title: "Airport → Hotel → Meeting", text: "Arrival, check-in and the first appointment in one reservation.", href: "/airport-pick-and-drop-in-washington-dc" },
        { title: "FBO → Meeting → Dinner", text: "A private aviation arrival, a meeting and an evening reservation.", href: "/private-aviation-fbo-transportation" },
        { title: "Hotel → Convention → Reception", text: "Attendee movements across the day's venues and timing.", href: "/meetings-conferences-transportation" },
        { title: "Airport → Wedding hotel → Venue", text: "Out-of-town guests connected with the hotel block and the celebration.", href: "/wedding-transportation-in-washington-dc" },
        { title: "IAD → Middleburg → Winery", text: "A regional transfer with time built in for the stops.", href: "/wine-tour-services-in-washington-dc" },
        { title: "Union Station → Office", text: "A rail arrival met and taken straight to the first meeting.", href: "/washington-union-station-car-service" },
      ],
    },
    vehicles: {
      title: "The vehicle should fit the journey",
      lead: "Passenger count, luggage and the purpose of the trip shape the recommendation.",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter", "coach"],
    },
    related: ["/fleet", "/areas", "/get-a-quote"],
    faqTitle: "Service Questions",
    faq: [
      { question: "What transportation services does Infinity Limo Car provide?", answer: "Airport transfers, corporate and executive travel, point-to-point and hourly service, meetings and conferences, group transportation, weddings, prom, private tours, wine tours and funeral transportation across Washington DC, Northern Virginia and Maryland." },
      { question: "Do I need point-to-point or hourly service?", answer: "Point-to-point suits a defined pickup and destination. Hourly (as-directed) service is better when the day includes several stops, waiting time or a schedule that may change." },
      { question: "Can you coordinate transportation for a large group?", answer: "Yes. Groups are planned around headcount, luggage, pickup points and schedule, and may combine Sprinters, minibuses, motor coaches or several vehicles under one plan." },
      { question: "Can I travel outside Washington DC?", answer: "Yes. We serve Northern Virginia and Maryland directly, and coordinate nationwide and worldwide service through vetted affiliate providers." },
      { question: "What should I include in a quote request?", answer: "Date, pickup time, pickup and destination addresses, passenger count, luggage and any stops. For events or complex itineraries, add flight, hotel, venue and schedule details." },
    ],
  },

  "/point-to-point-transportation": {
    lead:
      "Door-to-door private car service between a set pickup and destination — residences, offices, hotels, restaurants and venues across the DC region.",
    image: {
      src: "/images/photos/fleet-lineup-studio.webp",
      alt: "Infinity Limo Car sedans, SUVs and a Sprinter van in a studio lineup",
    },
    intro: {
      eyebrow: "Direct, prearranged service",
      title: "One route, one schedule, no detours",
      body: [
        "Point-to-point service is built around a defined origin, destination and pickup time. Tell us where the trip starts, where it ends, when you need to travel and how many people and bags are moving — we match the vehicle and confirm the plan.",
        "When an airport is the main origin or destination, use our airport service, which adds flight tracking and terminal pickup planning.",
      ],
      points: [
        { title: "Scheduled pickup", text: "Arranged in advance around your requested time and route." },
        { title: "Vehicle planning", text: "Passengers, luggage and trip purpose set the vehicle." },
        { title: "Regional routes", text: "Residences, offices, hotels, restaurants and venues across DC, Virginia and Maryland." },
        { title: "Direct communication", text: "A reachable trip contact keeps pickup and arrival on track." },
      ],
    },
    useCases: {
      eyebrow: "Common routes",
      title: "Everyday and planned travel",
      items: [
        { title: "Residence ↔ Office", text: "Scheduled rides between home and the workplace or a business destination." },
        { title: "Hotel ↔ Meeting venue", text: "Direct movement between lodging and a conference, appointment or event." },
        { title: "Office ↔ Restaurant", text: "Business meals, hosted guests and executive evenings." },
        { title: "Residence ↔ Event venue", text: "Weddings, dinners, performances and special events." },
        { title: "Union Station ↔ Hotel", text: "A rail arrival taken straight to the hotel or office.", href: "/washington-union-station-car-service" },
        { title: "Shared route for a party", text: "One suitable group vehicle, or several, for passengers traveling together." },
      ],
    },
    steps: { title: "Plan the route in four steps", items: STEPS_TRIP },
    vehicles: {
      title: "Select the vehicle around the trip",
      slugs: ["sedan", "mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter"],
    },
    related: ["/hourly-as-directed-chauffeur-service", "/airport-pick-and-drop-in-washington-dc", "/group-transportation-in-washington-dc"],
    faqTitle: "Point-to-Point Questions",
    faq: [
      { question: "What is point-to-point transportation?", answer: "Prearranged chauffeured service between a defined pickup location and destination at a scheduled time." },
      { question: "When should I choose hourly service instead?", answer: "When you need multiple stops, standby time between appointments, or the flexibility to change the itinerary during service." },
      { question: "Can a point-to-point trip include a stop?", answer: "Mention it in your request. A short stop can often be added; several stops or long waits usually fit hourly service better." },
      { question: "Can I book the return trip too?", answer: "Yes. The return is planned as its own journey, with its own pickup time and location." },
      { question: "Can point-to-point service work for groups?", answer: "Yes. The vehicle is chosen from the confirmed passenger count, luggage and route. Larger or multi-vehicle movements are handled as group transportation." },
    ],
  },

  "/hourly-as-directed-chauffeur-service": {
    lead:
      "A chauffeur and vehicle reserved by the hour, available between meetings, meals and stops while your schedule takes shape.",
    image: {
      src: "/images/photos/chauffeurs-escalade-lineup.webp",
      alt: "Infinity Limo Car chauffeurs standing beside the Cadillac Escalade fleet",
    },
    intro: {
      eyebrow: "Flexible, prearranged transportation",
      title: "A vehicle and chauffeur around your schedule",
      body: [
        "Hourly, or as-directed, service is for days that cannot be reduced to one pickup and one destination. The vehicle stays with you through the reserved window — waiting between appointments, adding stops and adjusting as plans change.",
        "Share the service window, starting point, known stops and expected finish so we can recommend the right vehicle.",
      ],
      points: [
        { title: "3-hour minimum", text: "Hourly reservations start at three hours." },
        { title: "Flexible routing", text: "Add or change stops through your trip contact as the day develops." },
        { title: "Standby time", text: "The vehicle waits between meetings, meals and events within the window." },
        { title: "One itinerary", text: "A full day under one plan instead of separate transfers." },
      ],
    },
    useCases: {
      eyebrow: "Who books hourly",
      title: "Business days, events and multi-stop plans",
      items: [
        { title: "Executive day use", text: "Offices, hotels, meetings, restaurants and appointments in one day." },
        { title: "Roadshows", text: "Back-to-back meetings with a schedule that can shift.", href: "/corporate-roadshow-transportation" },
        { title: "Evenings out", text: "Dinner followed by a show, a reception or several stops." },
        { title: "Private sightseeing", text: "Monuments, museums and neighborhoods at your own pace.", href: "/washingtondc-city-tour-private" },
        { title: "Shopping and errands", text: "Several stops with the vehicle waiting at each." },
        { title: "Golf and club days", text: "Equipment, tee time, post-round stops and the ride home." },
      ],
    },
    steps: {
      title: "Define hours, stops and finish",
      items: [
        { title: "Set the service window", text: "Start time, expected duration and finish location." },
        { title: "Share known stops", text: "Addresses and approximate times, even if they may change." },
        { title: "Confirm passengers and vehicle", text: "Headcount, luggage and preferred vehicle class." },
        { title: "Name a trip contact", text: "One reachable person to direct changes during service." },
      ],
      note: "Parking, tolls and extended time beyond the reserved window are confirmed in your quote.",
    },
    vehicles: {
      title: "Vehicles for hourly service",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "cadillac-escalade-iql", "luxury-executive-sprinter-van"],
    },
    related: ["/point-to-point-transportation", "/executive-car-service-washington-dc", "/washingtondc-city-tour-private"],
    faqTitle: "Hourly Service Questions",
    faq: [
      { question: "What does as-directed service mean?", answer: "The chauffeur and vehicle are reserved for a period of time and follow your directions within that window, instead of one fixed transfer." },
      { question: "Is there a minimum booking?", answer: "Yes. Hourly service has a 3-hour minimum." },
      { question: "Can I change the itinerary during service?", answer: "Yes. Your designated trip contact can add or change stops within the reserved window." },
      { question: "Can hourly service start at an airport?", answer: "Yes. Share the flight details and the stops that follow, and the window starts from the scheduled pickup." },
      { question: "Is hourly service worth it for one direct trip?", answer: "Usually not. A single pickup and destination is better handled as point-to-point service." },
    ],
  },

  "/charter-bus-service-washington-dc": {
    lead:
      "Minibuses and full-size motor coaches with professional drivers for corporate groups, conventions, weddings, tours and regional group travel.",
    image: {
      src: "/images/photos/motorcoach-van-hool.webp",
      alt: "Infinity Limo Car Van Hool motor coach parked on a tree-lined street",
    },
    intro: {
      eyebrow: "Group charter",
      title: "Plan the coach around the group and the itinerary",
      body: [
        "A charter is chauffeured group transportation — never self-drive. We plan the vehicle mix from the headcount, luggage, pickup points and schedule, from a single minibus to several coaches running in waves.",
        "Share each movement and its timing so we can match the right vehicles and confirm one plan for the whole group.",
      ],
      points: [
        { title: "Minibus", text: "24–38 passenger configurations for mid-size groups and shuttles." },
        { title: "Motor coach", text: "Up to 55 passengers for conventions, charters and large programs." },
        { title: "Multi-vehicle plans", text: "Several vehicles coordinated across pickup points and waves." },
        { title: "Professional drivers", text: "Every charter includes a driver and dispatch support." },
      ],
    },
    useCases: {
      eyebrow: "Charter use cases",
      title: "Where charter buses fit",
      items: [
        { title: "Corporate groups", text: "Offsites, team outings, site visits and client events." },
        { title: "Meetings & conventions", text: "Hotel-to-venue loops, arrival waves and off-site dinners.", href: "/convention-transportation-washington-dc" },
        { title: "Airport groups", text: "Coordinated DCA, IAD and BWI arrivals and departures." },
        { title: "Weddings & private events", text: "Guest shuttles between hotel blocks, ceremony and reception.", href: "/wedding-transportation-in-washington-dc" },
        { title: "Tours & custom itineraries", text: "Sightseeing, wine country and multi-stop days." },
        { title: "Regional group travel", text: "Multi-day and out-of-town trips planned as one program." },
      ],
    },
    steps: { title: "From headcount to departure", items: STEPS_GROUP },
    vehicles: {
      title: "Group vehicles",
      slugs: ["mercedes-sprinter", "luxury-executive-sprinter-van", "mini-bus", "coach"],
    },
    related: ["/group-transportation-in-washington-dc", "/hotel-event-shuttle-service", "/convention-transportation-washington-dc"],
    faqTitle: "Charter Bus Questions",
    faq: [
      { question: "Is this a self-drive bus rental?", answer: "No. Every charter includes a professional driver." },
      { question: "Should we choose a minibus or a motor coach?", answer: "It depends on the confirmed headcount, luggage and route. Minibuses suit mid-size groups; motor coaches carry up to 55 passengers." },
      { question: "Can several vehicles be coordinated?", answer: "Yes. Multiple vehicles can run together or in waves, with one plan covering every pickup and destination." },
      { question: "Can a charter include sightseeing or several stops?", answer: "Yes. List each stop and its timing so the route and service window can be planned." },
      { question: "What do you need for a charter quote?", answer: "Dates, headcount, luggage, every pickup and destination with times, and an on-site contact." },
    ],
  },

  "/washingtondc-city-tour-private": {
    lead:
      "Private, chauffeured sightseeing through Washington's monuments, museums and neighborhoods — on your schedule, at your pace.",
    image: {
      src: "/images/photos/suburban-library-of-congress.webp",
      alt: "Black Chevrolet Suburban parked in front of the Library of Congress in Washington DC",
    },
    intro: {
      eyebrow: "Private tours",
      title: "Your route, your stops, your vehicle",
      body: [
        "Choose the monuments, museums, neighborhoods and restaurants you want to see, and we plan an efficient route with pickup at your hotel, residence or the airport.",
        "Daytime highlights or the monuments lit up after dark — couples, families, corporate guests and groups all travel privately.",
      ],
      points: [
        { title: "Private vehicle", text: "Sedan, SUV or Sprinter, matched to the size of your party." },
        { title: "Flexible itinerary", text: "Stop for photos, a meal or a museum and stay as long as you like." },
        { title: "Evening monuments", text: "The Lincoln Memorial, Washington Monument and Capitol illuminated." },
        { title: "Door-to-door", text: "Pickup and drop-off at hotels, residences, offices or airports." },
      ],
    },
    useCases: {
      eyebrow: "Where to go",
      title: "Popular stops",
      items: [
        { title: "The National Mall", text: "Lincoln, Jefferson, WWII, Vietnam Veterans and MLK Jr. memorials and the Washington Monument." },
        { title: "Capitol Hill", text: "The U.S. Capitol, Library of Congress and Supreme Court." },
        { title: "Smithsonian museums", text: "Drop-off and pickup timed around the museums you choose." },
        { title: "Georgetown", text: "Historic streets, the waterfront and dining." },
        { title: "Embassy Row & the Cathedral", text: "Massachusetts Avenue and Washington National Cathedral." },
        { title: "The Wharf", text: "Waterfront dining to close the day." },
      ],
    },
    steps: {
      title: "Build a realistic tour",
      items: [
        { title: "Choose priorities", text: "The sights that matter most to your party." },
        { title: "Set the schedule", text: "Start time, duration and any timed entries or reservations." },
        { title: "Select the vehicle", text: "Based on passengers and comfort." },
        { title: "Confirm pickup", text: "Hotel, residence or airport, plus a reachable contact." },
      ],
      note: "We provide transportation; attraction admission and timed-entry tickets are booked separately. A dedicated guide can be requested when you reserve.",
    },
    vehicles: {
      title: "Vehicles for private tours",
      slugs: ["mercedes-benz-s-class", "suv-and-luxury-suv", "mercedes-sprinter", "stretch-limo"],
    },
    related: ["/hourly-as-directed-chauffeur-service", "/wine-tour-services-in-washington-dc", "/group-transportation-in-washington-dc"],
    faqTitle: "Private Tour Questions",
    faq: [
      { question: "Which landmarks can we visit?", answer: "The White House area, U.S. Capitol, Lincoln Memorial, Washington Monument, Jefferson Memorial, MLK Jr. Memorial, WWII and Vietnam Veterans memorials, the Smithsonian museums, Georgetown, Capitol Hill, The Wharf and more." },
      { question: "Can we customize the itinerary?", answer: "Yes. Every tour is built around your interests, schedule, group size and pickup location." },
      { question: "How long should we book?", answer: "A shorter tour covers the major monuments; a longer booking leaves time for museums, meals and neighborhoods. Tell us what you want to see and we'll suggest a duration." },
      { question: "Do you offer evening monument tours?", answer: "Yes. Many guests prefer seeing the memorials and the Capitol illuminated at night." },
      { question: "Does the chauffeur narrate the tour?", answer: "Chauffeurs handle timing and routing. If you want a dedicated guide or historical narration, ask when you reserve." },
      { question: "Are attraction tickets included?", answer: "No. Admission and timed-entry tickets are booked separately; share the times so transportation fits around them." },
    ],
  },

  "/wedding-transportation-in-washington-dc": {
    lead:
      "Transportation for the couple, the wedding party, family and guests — planned around your ceremony, reception and the ride home.",
    image: {
      src: "/images/photos/wedding-capitol-sunset.webp",
      alt: "Bride and groom beside a black stretch limousine with the U.S. Capitol at sunset",
    },
    intro: {
      eyebrow: "Weddings",
      title: "Planned around the wedding timeline",
      body: [
        "A wedding day moves several groups through several places on a tight schedule. We map each location, separate the passenger groups and build in buffers so the couple arrives on time and guests get home safely.",
        "From a single limousine for the couple to guest shuttles between hotel blocks and the venue, one plan covers the whole day.",
      ],
      points: [
        { title: "Timeline-based planning", text: "Pickups set against the ceremony, photos and reception." },
        { title: "Right-sized vehicles", text: "Limousines, SUVs, Sprinters and shuttles for each group." },
        { title: "Multiple groups", text: "Couple, wedding party, family and guests on separate schedules." },
        { title: "Final departures", text: "Return trips planned before the night begins." },
      ],
    },
    useCases: {
      eyebrow: "Who we move",
      title: "Every part of the wedding party",
      items: [
        { title: "The couple", text: "Arrival, photo stops and a getaway car at the end of the night." },
        { title: "Wedding party", text: "Bridesmaids and groomsmen moved together, on time." },
        { title: "Family", text: "Parents and grandparents with door-to-door care." },
        { title: "Guest shuttles", text: "Loops between hotel blocks, ceremony and reception.", href: "/hotel-event-shuttle-service" },
        { title: "Out-of-town arrivals", text: "DCA, IAD and BWI pickups for guests flying in.", href: "/airport-pick-and-drop-in-washington-dc" },
        { title: "Rehearsal & after-party", text: "The evenings around the wedding day." },
      ],
    },
    steps: {
      title: "Map the day in four steps",
      items: [
        { title: "Map every location", text: "Hotels, ceremony, photo stops, reception and return addresses." },
        { title: "Separate the groups", text: "Who rides together, and when each group must arrive." },
        { title: "Build time buffers", text: "Room for photos, traffic and venue access." },
        { title: "Confirm contacts", text: "A day-of contact, often the planner, for every vehicle." },
      ],
    },
    vehicles: {
      title: "Wedding vehicles",
      slugs: ["stretch-limo", "limo-sprinter", "suv-and-luxury-suv", "mini-bus"],
    },
    related: ["/hotel-event-shuttle-service", "/group-transportation-in-washington-dc", "/charter-bus-service-washington-dc"],
    faqTitle: "Wedding Transportation Questions",
    faq: [
      { question: "What wedding transportation do you provide?", answer: "Transportation for the couple, wedding party, family and guests — from the hotel to the ceremony, reception and home — plus guest shuttles and airport arrivals." },
      { question: "Can we use different vehicles for different groups?", answer: "Yes. A limousine for the couple, an SUV for family and a Sprinter or minibus for guests can run under one plan." },
      { question: "Can you handle separate ceremony and reception venues?", answer: "Yes. We plan routing and timing across every venue and build in buffers for photos and traffic." },
      { question: "How early should we book?", answer: "As soon as your date and venues are set, especially for peak wedding season, so your preferred vehicles are available." },
      { question: "What affects the price?", answer: "The vehicles, the number of stops, the hours of service and the distances between venues." },
    ],
  },

  "/prom-services-in-washington-dc": {
    lead:
      "A clear plan for prom night: pickups at home, photo stops, the dance and a safe ride back — with parents kept in the loop.",
    intro: {
      eyebrow: "Prom & school dances",
      title: "A clear transportation plan for prom night",
      body: [
        "Families and organizers share the pickup addresses, photo stops, venue and return plan in advance. The chauffeur follows that confirmed itinerary, and a responsible adult is the contact for any change.",
        "Couples, groups of friends and several households traveling together are all planned door to door.",
      ],
      points: [
        { title: "Prearranged itinerary", text: "Every pickup, stop and return confirmed before the night." },
        { title: "Parent contact", text: "A responsible adult approves changes and receives updates." },
        { title: "Door-to-door", text: "No parking, no driving, no guessing where everyone is." },
        { title: "Registered carrier", text: "USDOT 3071239 · WMATC No. 2932." },
      ],
    },
    useCases: {
      eyebrow: "Prom night examples",
      title: "Practical prom journeys",
      items: [
        { title: "A couple with dinner", text: "Home pickup, dinner reservation, the dance and home." },
        { title: "Friends from several homes", text: "Sequential pickups planned in order, with realistic timing." },
        { title: "Pre-prom photos", text: "A scenic stop — such as the Lincoln Memorial — before the venue." },
        { title: "After-prom", text: "A safe ride from the dance to the after-party and home again." },
        { title: "Several couples together", text: "One larger vehicle instead of many cars." },
        { title: "Homecoming & other dances", text: "The same planning for any school event." },
      ],
    },
    steps: {
      title: "Confirm the night in four steps",
      items: [
        { title: "Confirm the event", text: "School, venue address and event times." },
        { title: "List the route", text: "Every pickup, photo stop, dinner and return address." },
        { title: "Verify the party", text: "Final headcount and who rides in which vehicle." },
        { title: "Name the contacts", text: "A parent or organizer reachable all night." },
      ],
      note: "Chauffeurs provide transportation only; supervision stays with parents, schools and chaperones.",
    },
    vehicles: {
      title: "Prom vehicles",
      slugs: ["stretch-limo", "limo-sprinter", "suv-and-luxury-suv", "mercedes-sprinter"],
    },
    related: ["/wedding-transportation-in-washington-dc", "/group-transportation-in-washington-dc", "/hourly-as-directed-chauffeur-service"],
    faqTitle: "Prom Transportation Questions",
    faq: [
      { question: "What does prom transportation include?", answer: "Door-to-door pickup at home, stops for pre-prom photos, transportation to and from the venue and, if you add it, after-party transportation." },
      { question: "Can dinner and photo stops be included?", answer: "Yes. Add each stop and its timing to the itinerary when you book." },
      { question: "Can there be several pickup and return addresses?", answer: "Yes. List every address in order so timing can be planned realistically." },
      { question: "Is Infinity Limo Car a registered carrier?", answer: "Yes. Infinity operates under USDOT 3071239 and WMATC No. 2932, and has served DC-area families for more than a decade." },
      { question: "How far ahead should we book?", answer: "As early as possible — prom season books quickly, especially for limousines and Sprinters." },
      { question: "What should parents or organizers send?", answer: "Prom date, school and venue, every pickup and return address, headcount, photo or dinner stops, and a responsible adult's phone number." },
    ],
  },

  "/wine-tour-services-in-washington-dc": {
    lead:
      "A chauffeured day in Virginia and Maryland wine country — Loudoun, Middleburg and beyond — with every stop planned and a comfortable ride home.",
    intro: {
      eyebrow: "Wine country",
      title: "A wine-country day you plan, we drive",
      body: [
        "Pick the wineries, breweries or distilleries, make your tasting reservations, and we build the route and timing around them — from a DC hotel or a Northern Virginia home.",
        "Couples, friends, celebrations and corporate outings travel together in one vehicle and come back without anyone needing to drive.",
      ],
      points: [
        { title: "Custom itinerary", text: "Your wineries, your order, your pace." },
        { title: "Hourly service window", text: "The vehicle waits at each stop for the reserved time." },
        { title: "Meal stops", text: "Lunch or dinner built into the route." },
        { title: "A responsible return", text: "Everyone home safely at the end of the day." },
      ],
    },
    useCases: {
      eyebrow: "Destinations",
      title: "Where wine days go",
      items: [
        { title: "Loudoun County", text: "Leesburg, Purcellville, Bluemont and Aldie wineries." },
        { title: "Middleburg & Hunt Country", text: "Wineries, estates, dining and the village." },
        { title: "Fauquier County", text: "Farther-west vineyards for a full-day itinerary." },
        { title: "Breweries & distilleries", text: "The same planning for craft beer and spirits." },
        { title: "Corporate outings", text: "Team days and client hospitality with one vehicle plan." },
        { title: "Celebrations", text: "Birthdays, anniversaries and days out with friends." },
      ],
    },
    steps: {
      title: "Plan the day in four steps",
      items: [
        { title: "Choose destinations", text: "Two or three stops make a relaxed day." },
        { title: "Book your tastings", text: "Reserve directly with each venue." },
        { title: "Set the service window", text: "Pickup time, stop times and return." },
        { title: "Confirm the party", text: "Headcount and the pickup address." },
      ],
      note: "Tastings and winery reservations are booked separately; no winery partnership is implied.",
    },
    vehicles: {
      title: "Vehicles for wine tours",
      slugs: ["suv-and-luxury-suv", "mercedes-sprinter", "limo-sprinter", "stretch-limo"],
    },
    related: ["/hourly-as-directed-chauffeur-service", "/washingtondc-city-tour-private", "/group-transportation-in-washington-dc"],
    faqTitle: "Wine Tour Questions",
    faq: [
      { question: "Can we travel from Washington DC to Virginia wine country?", answer: "Yes. Pickup can be at a DC hotel, a residence or anywhere in Northern Virginia or Maryland." },
      { question: "Can the itinerary include more than one winery?", answer: "Yes. Most days include two or three stops plus a meal; list them in order with reservation times." },
      { question: "Are tastings included?", answer: "No. Tastings and reservations are booked directly with each venue." },
      { question: "Is hourly service the right format?", answer: "Usually yes. A wine day is a multi-stop itinerary, so the vehicle is reserved for a service window and waits at each stop." },
      { question: "Can you handle a larger group?", answer: "Yes. Sprinters and limo Sprinters suit most groups; larger parties can use a minibus or several vehicles." },
    ],
  },

  "/arlington-cemetery-professional-funeral-transportation-in-washington-dc": {
    lead:
      "Dignified, punctual transportation for families and guests attending funerals and memorial services, including Arlington National Cemetery.",
    intro: {
      eyebrow: "Funeral & memorial",
      title: "Transportation handled with care and restraint",
      body: [
        "On a difficult day, the family should not have to think about logistics. We coordinate timing and routes so everyone arrives together, with chauffeurs who understand the discretion these services call for.",
        "Immediate family, relatives and out-of-town guests can be moved between homes, hotels, the service, the cemetery and a reception.",
      ],
      points: [
        { title: "Respectful communication", text: "One contact for the family, with no unnecessary calls." },
        { title: "Schedule coordination", text: "Vehicles timed to the service and cemetery instructions." },
        { title: "Appropriate vehicles", text: "Limousines, SUVs and Sprinters for family and guests." },
        { title: "Arlington National Cemetery", text: "Arrival planned around official timing and access guidance." },
      ],
    },
    useCases: {
      eyebrow: "Who we transport",
      title: "Family, relatives and guests",
      items: [
        { title: "Immediate family", text: "From home or hotel to the service and back, together." },
        { title: "Relatives & guests", text: "Larger vehicles or several cars coordinated as one group." },
        { title: "Multi-location services", text: "Church or funeral home, cemetery and reception in sequence." },
        { title: "Out-of-town family", text: "Airport and hotel pickups so everyone reaches the service.", href: "/airport-pick-and-drop-in-washington-dc" },
      ],
    },
    steps: {
      title: "Coordinated in four steps",
      items: [
        { title: "Share confirmed times", text: "Service, committal and reception times as provided." },
        { title: "Identify passenger groups", text: "Who rides together and from where." },
        { title: "Confirm locations", text: "Addresses and any cemetery or venue instructions." },
        { title: "Keep one contact", text: "A single family representative for any changes." },
      ],
      note: "Infinity Limo Car is an independent provider and does not represent Arlington National Cemetery. Follow the cemetery's official guidance for access and arrival times.",
    },
    vehicles: {
      title: "Vehicles for family and guests",
      slugs: ["stretch-limo", "suv-and-luxury-suv", "mercedes-sprinter", "mercedes-benz-s-class"],
    },
    related: ["/airport-pick-and-drop-in-washington-dc", "/group-transportation-in-washington-dc", "/hourly-as-directed-chauffeur-service"],
    faqTitle: "Funeral Transportation Questions",
    faq: [
      { question: "What transportation do you provide for Arlington National Cemetery services?", answer: "Transportation for families and guests attending services at Arlington National Cemetery, with coordinated timing and routes so everyone arrives together." },
      { question: "Can you accommodate small families and larger gatherings?", answer: "Yes. From one limousine for immediate family to Sprinters and several vehicles for relatives and guests." },
      { question: "Can several service locations be included?", answer: "Yes. Church or funeral home, cemetery and reception can be planned in sequence." },
      { question: "How far in advance should we book?", answer: "Arrangements often come together quickly; contact us as soon as service times are confirmed and we will do our best to accommodate your timeline." },
      { question: "Does Infinity represent Arlington National Cemetery?", answer: "No. We are an independent transportation provider. Access and arrival requirements come from the cemetery's official guidance." },
    ],
  },
};

