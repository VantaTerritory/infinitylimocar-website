/**
 * Fleet page copy that is page-level, not vehicle data (vehicle facts stay in
 * lib/data/fleet.ts). "Best for" condenses each vehicle's use cases from the
 * client's redesign (/fleet/ and /our-fleet/* on kinsta).
 */
export const BEST_FOR: Record<string, string> = {
  sedan: "Airport transfers, business meetings, solo travelers",
  "mercedes-benz-s-class": "Executives, VIP guests, special occasions",
  "suv-and-luxury-suv": "Airport runs with luggage, families, executive parties",
  "cadillac-escalade-iql": "Executive and airport travel in an all-electric SUV",
  "mercedes-sprinter": "Small groups, airport and event transfers",
  "luxury-executive-sprinter-van": "Corporate teams, roadshows, VIP groups",
  "limo-sprinter": "Weddings, celebrations, nights out",
  "stretch-limo": "Weddings, prom, special occasions",
  "mini-bus": "Mid-size groups, shuttles, event programs",
  coach: "Conventions, charters, large group moves",
};

export const FLEET_INTRO =
  "From an executive sedan to a 55-passenger motor coach, every vehicle is chauffeur-driven and assigned around your passengers, luggage and itinerary. Specific models are confirmed for your date.";

export const CHOOSE_STEPS = [
  {
    title: "Passengers",
    text: "Start with the head count. Groups split across flights or pickup points may need more than one vehicle.",
  },
  {
    title: "Luggage",
    text: "Tell us checked bags, carry-ons and oversized items separately. For bag-heavy groups we can add a luggage van.",
  },
  {
    title: "Itinerary",
    text: "Route, stops, timing and return trip decide whether point-to-point, hourly or a coordinated multi-vehicle plan fits best.",
  },
  {
    title: "Occasion",
    text: "A standard Sprinter moves people efficiently; a Luxury Sprinter suits executives; a Limo Sprinter or stretch is for celebrating.",
  },
] as const;

export const FLEET_FAQ = [
  {
    question: "Can I request a specific vehicle model?",
    answer: "Yes. Add your preferred model or category to the quote request — S-Class, Luxury SUV or the Cadillac Escalade IQL, for example — and we confirm what is available for your date.",
  },
  {
    question: "When should a group choose a Sprinter, minibus or motor coach?",
    answer: "Sprinters carry up to 14 passengers with luggage. Above that, a minibus (24–38 passengers) or a full-size motor coach (up to 55) moves the group in one vehicle. We can also combine vehicles for split arrivals.",
  },
  {
    question: "How should we plan for checked bags and carry-ons?",
    answer: "Give us separate counts for passengers, checked bags, carry-ons and oversized items. Minibus and coach luggage space depends on configuration and head count, so we confirm the fit before the trip.",
  },
  {
    question: "Which stretch limousines can I ask for?",
    answer: "The Lincoln MKT Stretch, the Cadillac Escalade Stretch and the Escalade Jet Door limousine. Share the group size and event schedule and we confirm the available model.",
  },
  {
    question: "What should I include when requesting a quote?",
    answer: "Date, pickup time, route and stops, passenger count and preferred vehicle. For airport or group travel add flight details and luggage counts, plus the return schedule and any special requirements.",
  },
];
