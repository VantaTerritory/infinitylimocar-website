/**
 * "Popular itineraries" — the eight trip patterns of the client's redesign
 * (kinsta home), split into origin/destination + the details to share.
 * `service` is the quote form's service_type, so "Plan this trip" lands with
 * it preselected.
 */
export type PlaceIcon =
  | "plane"
  | "hotel"
  | "office"
  | "briefcase"
  | "ship"
  | "jet"
  | "rings"
  | "podium"
  | "dinner"
  | "monument";

export interface Itinerary {
  from: string;
  to: string;
  fromIcon: PlaceIcon;
  toIcon: PlaceIcon;
  category: "Airport" | "Business" | "Private";
  summary: string;
  share: string[];
  service: "Airport Transfer" | "Point-to-Point" | "Hourly / As Directed" | "Meetings & Events" | "Tours / Custom";
  href: string;
}

export const ITINERARIES: Itinerary[] = [
  {
    from: "Airport",
    to: "Hotel",
    fromIcon: "plane",
    toIcon: "hotel",
    category: "Airport",
    summary: "A clear arrival pickup, with room for the whole party and the luggage.",
    share: ["Flight number and airline", "Hotel and entrance", "Party size and luggage", "A mobile contact for late arrivals"],
    service: "Airport Transfer",
    href: "/airport-pick-and-drop-in-washington-dc",
  },
  {
    from: "Hotel",
    to: "Meeting",
    fromIcon: "hotel",
    toIcon: "briefcase",
    category: "Business",
    summary: "Pickup timed to the meeting start, the building entrance and real traffic.",
    share: ["Meeting start time", "Building entrance", "Other offices or waiting time", "A contact for schedule changes"],
    service: "Point-to-Point",
    href: "/corporate-travel-services-in-washington-dc",
  },
  {
    from: "IAD",
    to: "Executive Meeting",
    fromIcon: "plane",
    toIcon: "office",
    category: "Business",
    summary: "Straight from Dulles to the boardroom — or keep the chauffeur for the rest of the day.",
    share: ["Flight details", "Meeting location and time", "Whether luggage stays in the vehicle", "Separate arrivals for multiple executives"],
    service: "Airport Transfer",
    href: "/iad-airport-limo-car-service",
  },
  {
    from: "BWI",
    to: "Cruise Port",
    fromIcon: "plane",
    toIcon: "ship",
    category: "Airport",
    summary: "From BWI arrivals to the Port of Baltimore, with space for every suitcase.",
    share: ["Flight and luggage count", "Cruise terminal", "Embarkation window", "Return and onward-flight details"],
    service: "Airport Transfer",
    href: "/bwi-airport-limo-car-service",
  },
  {
    from: "FBO",
    to: "Office",
    fromIcon: "jet",
    toIcon: "office",
    category: "Business",
    summary: "Planeside or FBO pickups coordinated around the aircraft, not the clock.",
    share: ["Exact FBO", "Aircraft arrival and tail number", "Passenger contact", "Onward address"],
    service: "Airport Transfer",
    href: "/private-aviation-fbo-transportation",
  },
  {
    from: "Hotel",
    to: "Wedding",
    fromIcon: "hotel",
    toIcon: "rings",
    category: "Private",
    summary: "The couple, the wedding party and the guests — each on their own schedule.",
    share: ["Hotel, ceremony and reception", "Separate schedules per group", "Guest headcount for shuttles", "Accessibility needs"],
    service: "Meetings & Events",
    href: "/wedding-transportation-in-washington-dc",
  },
  {
    from: "Conference",
    to: "Dinner",
    fromIcon: "podium",
    toIcon: "dinner",
    category: "Business",
    summary: "Teams and clients moved together after the last session, on time for the table.",
    share: ["Conference exit", "Restaurant arrival time", "Guest count", "An on-site contact"],
    service: "Meetings & Events",
    href: "/meetings-conferences-transportation",
  },
  {
    from: "Hotel",
    to: "Private Tour",
    fromIcon: "hotel",
    toIcon: "monument",
    category: "Private",
    summary: "Memorials, museums and neighborhoods at your pace, with a chauffeur who knows the city.",
    share: ["Sites that matter most", "Preferred pace and walking needs", "Timed entries", "Meal stops"],
    service: "Tours / Custom",
    href: "/washingtondc-city-tour-private",
  },
];
