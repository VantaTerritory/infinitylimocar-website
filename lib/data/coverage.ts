export const AIRPORTS = [
  { code: "DCA", name: "Washington National", text: "Downtown hotels, Capitol Hill, Arlington, Alexandria and close-in Northern Virginia.", href: "/dca-airport-limousine-car-service" },
  { code: "IAD", name: "Washington Dulles", text: "Washington DC, Tysons, Reston, Loudoun County and Maryland.", href: "/iad-airport-limo-car-service" },
  { code: "BWI", name: "Baltimore/Washington", text: "Baltimore, Annapolis, Washington DC, cruise departures and event venues.", href: "/bwi-airport-limo-car-service" },
] as const;

export const AIRPORT_EXTRAS = [
  {
    label: "Private Aviation / FBO",
    kicker: "Private",
    code: "FBO",
    name: "Private Aviation",
    text: "Landside pickups at FBOs for private aircraft passengers and crews.",
    href: "/private-aviation-fbo-transportation",
  },
  {
    label: "Union Station",
    kicker: "Rail",
    code: "WAS",
    name: "Union Station",
    text: "Rail arrivals and departures, connected to hotels, offices and airports.",
    href: "/washington-union-station-car-service",
  },
] as const;

export const COVERAGE = [
  {
    region: "DC · Virginia · Maryland",
    mode: "Direct service",
    places:
      "Washington DC, Arlington, Alexandria, Springfield, Fairfax, Tysons, Reston, Loudoun County, Bethesda, Montgomery County, National Harbor, Annapolis, Baltimore",
  },
  {
    region: "United States · Canada",
    mode: "Vetted affiliates",
    places:
      "New York, Boston, Philadelphia, Atlanta, Miami, Chicago, Dallas, Houston, Los Angeles, San Francisco, Toronto, Montréal, Vancouver, Calgary",
  },
  {
    region: "Worldwide",
    mode: "Vetted affiliates",
    places: "Europe, Middle East, Asia-Pacific",
  },
] as const;
