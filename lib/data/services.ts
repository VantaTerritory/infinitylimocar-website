/** Service entry points shown on the home ("Start with your journey").
 *  `short` is the mobile copy (wireframe mobile). */
export const SERVICE_CARDS = [
  {
    title: "Airport Car Service",
    text: "Between DCA, IAD or BWI and homes, hotels, offices or venues, planned around your flight and luggage.",
    short: "DCA, IAD or BWI",
    href: "/airport-pick-and-drop-in-washington-dc",
    featured: true,
  },
  {
    title: "Corporate & Executive",
    text: "Airports, offices and meetings for leaders, clients and teams, with corporate accounts for recurring travel.",
    short: "Offices, meetings, accounts",
    href: "/corporate-travel-services-in-washington-dc",
  },
  {
    title: "Point-to-Point & Hourly",
    text: "A direct transfer when the route is set, or a chauffeur by the hour for meetings, stops and changing plans.",
    short: "Direct or as directed",
    href: "/hourly-as-directed-chauffeur-service",
  },
  {
    title: "Group & Charter",
    text: "Sprinter vans, minibuses, motor coaches and shuttles for airports, hotels and venues.",
    short: "Sprinters, minibuses, coaches",
    href: "/group-transportation-in-washington-dc",
  },
  {
    title: "Limo & Private",
    text: "Limousines and chauffeurs for weddings, special occasions, private tours and FBO transfers.",
    short: "Weddings, tours, occasions",
    href: "/wedding-transportation-in-washington-dc",
  },
  {
    title: "Nationwide & Worldwide",
    text: "Beyond the DC region, coordinated through vetted affiliate providers with one point of contact.",
    short: "Through vetted affiliates",
    href: "/nationwide-worldwide-chauffeured-transportation",
  },
] as const;

/** Quote service types live with the quote form data. */
export { QUOTE_SERVICE_TYPES, type QuoteServiceType } from "./quote";
