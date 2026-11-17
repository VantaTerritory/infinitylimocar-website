/**
 * Company pages copy: about, safety, memberships, affiliate program, contact,
 * thank-you. Sources: the client's redesign (kinsta) for facts and structure,
 * the live site for mission/vision/goals and the thank-you message. Over-hedged
 * sentences were tightened; no fact was added.
 * NAP, phones, credentials and review links stay in lib/site-config.ts.
 */

export interface InfoItem {
  title: string;
  text: string;
  href?: string;
}

// ─── About ───────────────────────────────────────────────────

export const ABOUT = {
  lead: "Professional chauffeured transportation for Washington DC, Northern Virginia and Maryland — airport transfers, corporate travel, groups, meetings, events and personal itineraries.",
  who: {
    title: "Transportation with a personal plan",
    paragraphs: [
      "Infinity LLC, doing business as Infinity Limo Car, is a family-owned chauffeured transportation company based in Springfield, Virginia. For over a decade we have driven individual travelers, corporate teams and groups across the DC region.",
      "Every itinerary is different. We bring together pickup and destination, timing, passengers, luggage and the right vehicle into one clear plan — so travelers and organizers know exactly what to expect.",
    ],
  },
  pillars: [
    {
      title: "Our mission",
      text: "Exceptional chauffeured service that combines comfort, professionalism and safety — with meticulous attention to detail and personal service on every journey.",
    },
    {
      title: "Our vision",
      text: "To be recognized as the leading chauffeured transportation company in Washington DC, Northern Virginia and Maryland, known for reliability, excellence and an elevated experience.",
    },
    {
      title: "Our goals",
      text: "Exceed expectations with personal, punctual and reliable service; maintain a premium fleet; and keep improving to meet our clients' evolving needs.",
    },
  ] satisfies InfoItem[],
  services: [
    {
      title: "Airport transportation",
      text: "Coordinated pickups and departures for individuals and groups through DCA, IAD and BWI.",
      href: "/airport-pick-and-drop-in-washington-dc",
    },
    {
      title: "Corporate & executive travel",
      text: "Chauffeured travel for business appointments, executive schedules and client visits.",
      href: "/corporate-travel-services-in-washington-dc",
    },
    {
      title: "Group transportation",
      text: "Vehicles and itineraries planned around the people traveling together.",
      href: "/group-transportation-in-washington-dc",
    },
    {
      title: "Meetings & events",
      text: "Coordination between airports, hotels, venues and scheduled activities.",
      href: "/meetings-conferences-transportation",
    },
    {
      title: "Tours & special occasions",
      text: "Private sightseeing, weddings and celebrations on a personal itinerary.",
      href: "/washingtondc-city-tour-private",
    },
  ] satisfies InfoItem[],
  reach:
    "We serve Washington DC, Northern Virginia and Maryland directly, and coordinate nationwide and worldwide transportation through vetted affiliate operators.",
  trust: [
    {
      title: "Safety & chauffeurs",
      text: "How we screen, train and support our chauffeurs.",
      href: "/safety-professional-chauffeurs",
    },
    {
      title: "Memberships & credentials",
      text: "USDOT, WMATC, BBB and the associations we belong to.",
      href: "/memberships-affiliations",
    },
    {
      title: "Client testimonials",
      text: "Real Google reviews from travelers, assistants and planners.",
      href: "/testimonials",
    },
  ] satisfies InfoItem[],
};

// ─── Safety & professional chauffeurs ────────────────────────

export const SAFETY = {
  lead: "Dependable transportation takes more than a vehicle: qualified chauffeurs, a maintained fleet, clear trip information and dispatch that communicates when plans change.",
  chauffeurIntro:
    "Every Infinity chauffeur goes through qualification and onboarding before their first assignment, and is expected to keep professional conduct, communication and appearance on every trip.",
  chauffeurChecks: [
    "Valid driver's license verification",
    "Motor Vehicle Record and driving-history review",
    "Criminal background screening",
    "Drug and alcohol testing",
    "Review of previous professional driving or chauffeur experience",
    "Company orientation and training",
  ],
  operations: [
    {
      title: "Vehicle maintenance",
      text: "We use Fleetio fleet-management software to track maintenance schedules and fleet documentation for every vehicle.",
    },
    {
      title: "Licensed & insured",
      text: "Infinity Limo Car is fully licensed and insured. Corporate, event and venue clients can request a Certificate of Insurance; special endorsements or additional-insured requests are reviewed case by case.",
      href: "/contact",
    },
    {
      title: "Vetted affiliate operators",
      text: "When a trip needs more vehicles or goes beyond our direct service area, we only work with providers that have the right vehicle, the required licensing and operating credentials, and current insurance.",
      href: "/affiliate-program",
    },
    {
      title: "The right vehicle for the job",
      text: "Passenger count, luggage, itinerary and service type are reviewed together before a vehicle is assigned. Multi-vehicle moves are planned for timing, routing and loading.",
      href: "/fleet",
    },
  ] satisfies InfoItem[],
  changes: {
    title: "When plans change",
    paragraphs: [
      "Weather, traffic, road closures, flight delays or diversions and schedule changes can affect any trip. When they do, our dispatch team assesses the options, adjusts pickup, timing, routing or vehicle assignments where possible, and keeps the client, chauffeur and partners informed.",
      "Alternatives depend on the situation and can't be guaranteed in every case — what we guarantee is a practical response and clear communication.",
    ],
  },
  groupChecklist: {
    title: "Corporate & group planning",
    intro: "For meetings, conferences and group movements we review, before service is confirmed:",
    items: [
      "Group size and how passengers are distributed",
      "Single- or multi-vehicle requirements",
      "Pickup, destination and itinerary timing",
      "Airport, hotel and venue logistics",
      "Luggage per passenger",
      "Planner and onsite contacts",
      "Documentation requests (COI)",
      "How changes are communicated on the day",
    ],
  },
};

// ─── Memberships & affiliations ──────────────────────────────

export interface Membership {
  short?: string;
  name: string;
  text: string;
  href?: string;
}

export const MEMBERSHIPS = {
  lead: "The associations, business communities and regulators behind our operation — with public profiles and identifiers you can verify yourself.",
  credentials: [
    {
      short: "USDOT",
      name: "USDOT #3071239",
      text: "Federal carrier identifier for Infinity LLC / Infinity Limo Car. Check the FMCSA carrier snapshot.",
      href: "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3071239&query_type=queryCarrierSnapshot",
    },
    {
      short: "WMATC",
      name: "WMATC #2932",
      text: "Our Washington Metropolitan Area Transit Commission number. WMATC is the regional regulator, not an association.",
    },
    {
      short: "BBB A+",
      name: "BBB A+ rating",
      text: "Our public BBB profile shows an A+ rating. Infinity is not BBB Accredited — rating and accreditation are separate.",
      href: "https://www.bbb.org/us/va/springfield/profile/limo-service/infinity-limo-car-0241-236068934",
    },
    {
      short: "PAX",
      name: "PAX Chauffeur Training",
      text: "Industry chauffeur-training relationship that supports our onboarding and professional development.",
    },
  ] satisfies Membership[],
  associations: [
    {
      short: "NLA",
      name: "National Limousine Association",
      text: "The national forum for chauffeured operators. Infinity has a public member profile.",
      href: "https://nlaride.com/company/42718498/infinity-limo-car",
    },
    {
      short: "VLA",
      name: "Virginia Limousine Association",
      text: "Operator community in Virginia, one of our core markets.",
      href: "https://virginialimousineassociation.org/members/",
    },
    {
      short: "MLA",
      name: "Maryland Livery Association",
      text: "Maryland livery operators — relevant to every cross-region itinerary.",
      href: "https://marylandliveryassociation.org/members-operators/",
    },
    {
      short: "CTANJ",
      name: "Chauffeured Transportation Association of New Jersey",
      text: "Regional association with a public Infinity member listing.",
      href: "https://chauffeuredtransportationassociationofnewjersey.growthzoneapp.com/member-directory/Details/ctanj-members-info-4742960",
    },
  ] satisfies Membership[],
  travel: [
    {
      short: "GBTA",
      name: "Global Business Travel Association",
      text: "The business travel community where corporate travel managers meet their suppliers.",
    },
    {
      short: "MPI",
      name: "Meeting Professionals International",
      text: "Infinity holds an MPI Preferred Supplier Membership.",
      href: "https://www.mpi.org/membership/member-directory",
    },
    {
      short: "PCMA",
      name: "PCMA Capital Chapter",
      text: "The local business events community in the DC region.",
    },
    {
      short: "SGMP",
      name: "SGMP National Capital Chapter",
      text: "Government meetings professionals; Infinity has a directory profile.",
      href: "https://sgmp.memberclicks.net/index.php?option=com_community&view=profile&userid=2019533605&module=view-all&uuid=bfa0be81-14fb-4937-bf5a-431e785505f7&current_page=0&directory_search_id=2005912#/profile",
    },
  ] satisfies Membership[],
  local: [
    {
      name: "DC Chamber of Commerce",
      text: "The District's business community.",
      href: "https://members.dcchamber.org/atlas/directory/results?PageSize=20&PageNumber=1&Keywords=infinity",
    },
    {
      name: "Arlington Chamber of Commerce",
      text: "Northern Virginia business network, including travel and tourism.",
      href: "https://web.arlingtonchamber.org/Travel-and-Tourism/Infinity-Limo-Car-14284",
    },
    {
      name: "Alexandria Chamber of Commerce",
      text: "Alexandria's business and events community.",
      href: "https://web.alexchamber.com/atlas/directory/category/event-services-&-meeting-planning/Infinity-Limo-Car-13865",
    },
    {
      name: "Hotel Association of Washington, DC",
      text: "Listed as an Allied Member under Transportation.",
      href: "https://hawdc.com/about-us/allied-members/",
    },
    {
      name: "Virginia Tourism",
      text: "Business listing on Virginia.org.",
      href: "https://www.virginia.org/listing/infinity-limo-car/41638/",
    },
    {
      name: "Visit Fairfax",
      text: "Listed in the Fairfax County destination directory.",
      href: "https://www.fxva.com/listing/infinity-limo-car/6227/",
    },
    {
      name: "StayArlington",
      text: "Listed in Arlington's visitor directory.",
      href: "https://www.stayarlington.com/directory/infinity-limo-car/",
    },
  ] satisfies Membership[],
  faq: [
    {
      question: "Which transportation associations is Infinity a member of?",
      answer: "The National Limousine Association (NLA), Virginia Limousine Association (VLA), Maryland Livery Association (MLA) and the Chauffeured Transportation Association of New Jersey (CTANJ). Public directory links are listed on this page.",
    },
    {
      question: "Does Infinity take part in business travel and meetings organizations?",
      answer: "Yes: GBTA, MPI (Preferred Supplier Membership), PCMA Capital Chapter and SGMP National Capital Chapter.",
    },
    {
      question: "What are Infinity's USDOT and WMATC numbers?",
      answer: "USDOT #3071239 — check the official FMCSA carrier snapshot — and WMATC #2932. WMATC is a regional transportation regulator, not a membership association.",
    },
    {
      question: "Is Infinity Limo Car BBB Accredited?",
      answer: "No. Our public BBB profile shows an A+ rating, but Infinity is not BBB Accredited. Rating and accreditation are separate BBB distinctions.",
    },
    {
      question: "Do memberships guarantee service quality?",
      answer: "No. Memberships and listings show where we participate and give you identifiers to verify independently; they are not endorsements. The best way to evaluate us is to talk through your itinerary.",
    },
  ],
};

// ─── Affiliate & partner program ─────────────────────────────

export const AFFILIATE = {
  lead: "An introduction path for established chauffeured transportation operators interested in coordinated service with Infinity Limo Car beyond the DMV.",
  intro: [
    "We serve Washington DC, Northern Virginia, Maryland and the surrounding DMV region directly. When a client itinerary goes further, we coordinate it through vetted partner operators. This program is how established companies introduce themselves for review.",
    "An introduction does not guarantee acceptance, trip assignments, exclusivity or volume. Every relationship and every request is reviewed for operational fit.",
  ],
  share: [
    {
      title: "Service area & operations",
      text: "The cities, airports and regions you routinely serve, dispatch coverage, operating hours and your best operational contact.",
    },
    {
      title: "Fleet & capabilities",
      text: "Current vehicle categories, approximate fleet size, group capabilities and any limitations — represented accurately.",
    },
    {
      title: "Business credentials",
      text: "Operating authority, licensing, insurance and company references. Requirements vary by market and service type.",
    },
  ] satisfies InfoItem[],
  steps: [
    {
      title: "Introduce your company",
      text: "Share your service area, fleet, credentials and contact details.",
    },
    {
      title: "We review the fit",
      text: "We may ask for additional documents or clarifications.",
    },
    {
      title: "Trip-specific confirmation",
      text: "When an opportunity arises, scope, vehicle, timing, pricing and communication are confirmed per trip. A review is not an assignment.",
    },
  ] satisfies InfoItem[],
  expectations: [
    "Communicate promptly with clear dispatch contacts",
    "Protect customer and itinerary information",
    "Represent vehicles and capabilities accurately",
    "Follow the confirmed service instructions for each trip",
    "Give timely notice when circumstances change",
  ],
  faq: [
    {
      question: "Who should submit an introduction?",
      answer: "Established chauffeured transportation companies with a defined service area, current operational contacts and verifiable business credentials.",
    },
    {
      question: "Does submitting guarantee acceptance or work?",
      answer: "No. It is an introduction only — it does not guarantee acceptance, assignments, revenue, exclusivity or a continuing relationship.",
    },
    {
      question: "What happens when a service opportunity comes up?",
      answer: "Both parties confirm the trip-specific scope, vehicle, timing, communication, pricing and service expectations before an assignment is accepted.",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────

export const CONTACT = {
  lead: "Questions about airport transportation, corporate travel, a group movement or an existing trip? Call, email or send us a message — we answer 24/7.",
  tips: [
    "New trip: travel date, pickup time, pickup and destination, passenger count and any stops. For airport or group travel, add flight details and luggage.",
    "Existing trip: include the trip date and reference details so we can find your itinerary.",
  ],
  mapQuery: "7830 Backlick Rd Suite B2B, Springfield, VA 22150",
};

// ─── Thank you ───────────────────────────────────────────────

export const THANK_YOU = {
  eyebrow: "Request received",
  lead: "Thank you for your quote request. Our team will review your trip details and reply shortly. This is not a confirmed reservation.",
  steps: [
    {
      title: "We review your trip",
      text: "Dispatch checks the route, timing, passengers and luggage you sent.",
    },
    {
      title: "We confirm the details",
      text: "We contact you to confirm vehicle availability, luggage fit, flight details and your quote.",
    },
    {
      title: "Your reservation is confirmed",
      text: "Your trip is reserved only once you approve the quote and we confirm it.",
    },
  ] satisfies InfoItem[],
};
