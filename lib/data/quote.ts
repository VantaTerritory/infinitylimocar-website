/* ============================================================
   QUOTE FORM — data, conditional logic and validation.
   Mirrors the client's WordPress form (Fluent Forms #34, "ilc-quote-v2"):
   same field names, labels, options and conditionals, so a backend can map
   the payload 1:1 later. Hidden technical fields (place_id, time zones,
   UTC datetimes, tokens) are intentionally left out.
   ============================================================ */

// ─── Options ─────────────────────────────────────────────────

/** service_type. `tab` is the short label of the home hero tabs. */
export const QUOTE_SERVICES = [
  { value: "Airport Transfer", tab: "Airport Transfer" },
  { value: "Point-to-Point", tab: "Point-to-Point" },
  { value: "Hourly / As Directed", tab: "Hourly / As Directed" },
  { value: "Meetings & Events", tab: "Meetings & Events" },
  { value: "Tours / Custom", tab: "Tours / Custom" },
  { value: "Group Transportation", tab: "Group" },
] as const;

export const QUOTE_SERVICE_TYPES = QUOTE_SERVICES.map((s) => s.value);
export type QuoteServiceType = (typeof QUOTE_SERVICES)[number]["value"];

export const AIRPORT_DIRECTIONS = ["From Airport", "To Airport"] as const;
export const AVIATION_TYPES = ["Commercial", "Private / FBO"] as const;

/** airline: value = IATA code (Fluent stores the code), label = "Name — CODE". */
export const AIRLINES = [
  { value: "AA", label: "American Airlines — AA" },
  { value: "DL", label: "Delta Air Lines — DL" },
  { value: "UA", label: "United Airlines — UA" },
  { value: "WN", label: "Southwest Airlines — WN" },
  { value: "AS", label: "Alaska Airlines — AS" },
  { value: "B6", label: "JetBlue — B6" },
  { value: "AC", label: "Air Canada — AC" },
  { value: "BA", label: "British Airways — BA" },
  { value: "LH", label: "Lufthansa — LH" },
  { value: "AF", label: "Air France — AF" },
  { value: "KL", label: "KLM — KL" },
  { value: "EK", label: "Emirates — EK" },
  { value: "QR", label: "Qatar Airways — QR" },
  { value: "TK", label: "Turkish Airlines — TK" },
  { value: "EY", label: "Etihad Airways — EY" },
  { value: "SQ", label: "Singapore Airlines — SQ" },
  { value: "NK", label: "Spirit Airlines — NK" },
  { value: "F9", label: "Frontier Airlines — F9" },
  { value: "OTHER", label: "Other airline" },
] as const;

export const MEETING_PREFERENCES = [
  "Curbside Pickup",
  "Baggage Claim Meet & Greet",
  "Customs Exit Meet & Greet",
] as const;
export const MEETING_PREFERENCE_HELP =
  "Inside-terminal meeting is subject to airport access rules. Customs-exit service requires confirmed international-arrival eligibility and airport permission.";

export const STOP_COUNTS = ["0", "1", "2", "3"] as const;
export const ROUND_TRIP = ["No", "Yes"] as const;
export const CHILD_SEATS = ["None", "1", "2", "3", "More — describe below"] as const;

/** vehicle_category with the capacity copy of the client's form script. */
export const QUOTE_VEHICLES = [
  { value: "Sedan", models: "Continental · Nautilus · S90 · XT6", passengers: "2 passengers", bags: "1 checked + 1 carry-on" },
  { value: "SUV", models: "Suburban · Yukon XL · Expedition MAX", passengers: "5 passengers", bags: "3 checked + 3 carry-on" },
  { value: "Mercedes S-Class", models: "Mercedes-Benz S-Class", passengers: "2 passengers", bags: "1 checked + 1 carry-on" },
  { value: "Luxury SUV", models: "Escalade · Navigator L", passengers: "5 passengers", bags: "3 checked + 3 carry-on" },
  { value: "Sprinter Van", models: "", passengers: "14 passengers", bags: "Up to 14 bags total" },
  { value: "Sprinter Limo", models: "", passengers: "12 passengers", bags: "Up to 6 bags total" },
  { value: "Luxury Sprinter", models: "", passengers: "14 passengers", bags: "Up to 12 bags total" },
  { value: "Stretch Limo", models: "", passengers: "8–14 passengers", bags: "Configuration dependent" },
  { value: "Minibus", models: "", passengers: "24 / 28 / 32 / 38 passengers", bags: "Luggage depends on configuration" },
  { value: "Motorcoach", models: "", passengers: "55 passengers", bags: "Up to 55 standard suitcases" },
] as const;

// ─── Steps ───────────────────────────────────────────────────

export const QUOTE_STEPS = [
  { title: "Trip Details", heading: "Trip details" },
  { title: "Select Vehicle", heading: "Select your vehicle", lead: "Your preferred category. Availability and luggage fit are confirmed by dispatch." },
  { title: "Passenger & Contact", heading: "Passenger & Contact" },
  { title: "Review", heading: "Review your request", lead: "A quote request is not a confirmed reservation. No payment is collected." },
] as const;

export const ADDRESS_PLACEHOLDER = "Search airport, hotel, address or landmark";
export const CONTACT_CONSENT_TEXT = "I agree that Infinity Limo Car may contact me about this request.";

// ─── Fields ──────────────────────────────────────────────────

/** Every user-facing field, by Fluent name, in form order, with its step. */
export const QUOTE_FIELDS = {
  // Step 1 · Trip Details
  service_type: { step: 0, label: "Service" },
  airport_direction: { step: 0, label: "Airport transfer" },
  pickup_date: { step: 0, label: "Pickup Date" },
  pickup_time: { step: 0, label: "Pickup Time" },
  pickup: { step: 0, label: "Pickup location", address: true },
  dropoff: { step: 0, label: "Drop-off location", address: true },
  aviation_type: { step: 0, label: "Aviation" },
  airline: { step: 0, label: "Airline" },
  other_airline: { step: 0, label: "Other airline name and IATA code" },
  flight_number: { step: 0, label: "Flight number" },
  fbo_name: { step: 0, label: "FBO / private terminal name" },
  tail_number: { step: 0, label: "Aircraft tail number (optional)" },
  meeting_preference: { step: 0, label: "Airport meeting preference" },
  airport_instructions: { step: 0, label: "Terminal / airport instructions" },
  passengers: { step: 0, label: "Passengers" },
  checked_bags: { step: 0, label: "Checked bags" },
  carry_on_bags: { step: 0, label: "Carry-on bags" },
  stop_count: { step: 0, label: "Additional stops" },
  stop_1: { step: 0, label: "Stop 1", address: true },
  stop_2: { step: 0, label: "Stop 2", address: true },
  stop_3: { step: 0, label: "Stop 3", address: true },
  round_trip: { step: 0, label: "Round trip" },
  return_date: { step: 0, label: "Return Date" },
  return_time: { step: 0, label: "Return Time" },
  return_pickup: { step: 0, label: "Return pickup", address: true },
  return_dropoff: { step: 0, label: "Return drop-off", address: true },
  hourly_duration: { step: 0, label: "Number of hours" },
  event_details: { step: 0, label: "Meeting / event details" },
  tour_itinerary: { step: 0, label: "Tour itinerary" },
  group_requirements: { step: 0, label: "Group / shuttle requirements" },
  // Step 2 · Select Vehicle
  vehicle_category: { step: 1, label: "Vehicle" },
  // Step 3 · Passenger & Contact
  first_name: { step: 2, label: "First name" },
  last_name: { step: 2, label: "Last name" },
  email: { step: 2, label: "Email" },
  phone: { step: 2, label: "International telephone" },
  different_passenger: { step: 2, label: "Passenger is different from booking contact" },
  passenger_name: { step: 2, label: "Passenger name" },
  passenger_mobile: { step: 2, label: "Passenger Mobile Number" },
  name_sign: { step: 2, label: "Name sign (optional)" },
  child_seats: { step: 2, label: "Child seats" },
  special_instructions: { step: 2, label: "Special instructions" },
  // Step 4 · Review
  contact_consent: { step: 3, label: "Contact consent" },
} as const satisfies Record<string, { step: number; label: string; address?: boolean }>;

export type QuoteField = keyof typeof QUOTE_FIELDS;
/** Form state: every value is a string; checkboxes are "Yes" or "". */
export type QuoteValues = Record<QuoteField, string>;
export type QuoteErrors = Partial<Record<QuoteField, string>>;

const FIELD_NAMES = Object.keys(QUOTE_FIELDS) as QuoteField[];

export function emptyQuote(): QuoteValues {
  const values = Object.fromEntries(FIELD_NAMES.map((n) => [n, ""])) as QuoteValues;
  // Fluent defaults
  values.passengers = "1";
  values.checked_bags = "0";
  values.carry_on_bags = "0";
  values.stop_count = "0";
  values.round_trip = "No";
  return values;
}

// ─── Conditional logic (Fluent "conditionals") ───────────────

const DETAIL_BY_SERVICE: Partial<Record<QuoteServiceType, QuoteField>> = {
  "Hourly / As Directed": "hourly_duration",
  "Meetings & Events": "event_details",
  "Tours / Custom": "tour_itinerary",
  "Group Transportation": "group_requirements",
};

export function isVisible(name: QuoteField, v: QuoteValues): boolean {
  const airport = v.service_type === "Airport Transfer";
  const commercial = airport && v.aviation_type === "Commercial";
  const fbo = airport && v.aviation_type === "Private / FBO";
  const stops = Number(v.stop_count) || 0;
  const roundTripAllowed = airport || v.service_type === "Point-to-Point";
  switch (name) {
    case "airport_direction":
    case "aviation_type":
    case "airport_instructions":
      return airport;
    case "airline":
    case "flight_number":
      return commercial;
    case "other_airline":
      return commercial && v.airline === "OTHER";
    case "fbo_name":
    case "tail_number":
      return fbo;
    case "meeting_preference":
      return airport && v.airport_direction === "From Airport";
    case "stop_1":
      return stops >= 1;
    case "stop_2":
      return stops >= 2;
    case "stop_3":
      return stops >= 3;
    case "round_trip":
      return roundTripAllowed;
    case "return_date":
    case "return_time":
    case "return_pickup":
    case "return_dropoff":
      return roundTripAllowed && v.round_trip === "Yes";
    case "hourly_duration":
    case "event_details":
    case "tour_itinerary":
    case "group_requirements":
      return DETAIL_BY_SERVICE[v.service_type as QuoteServiceType] === name;
    case "passenger_name":
    case "passenger_mobile":
      return v.different_passenger === "Yes";
    default:
      return true;
  }
}

/** Fluent "required" rules; conditionals apply on top (hidden = not required). */
const REQUIRED = new Set<QuoteField>([
  "service_type",
  "airport_direction",
  "pickup_date",
  "pickup_time",
  "pickup",
  "dropoff",
  "aviation_type",
  "airline",
  "other_airline",
  "flight_number",
  "fbo_name",
  "meeting_preference",
  "passengers",
  "checked_bags",
  "carry_on_bags",
  "stop_1",
  "stop_2",
  "stop_3",
  "return_date",
  "return_time",
  "return_pickup",
  "return_dropoff",
  "hourly_duration",
  "event_details",
  "tour_itinerary",
  "group_requirements",
  "vehicle_category",
  "first_name",
  "last_name",
  "email",
  "phone",
  "passenger_name",
  "contact_consent",
]);

export const isRequired = (name: QuoteField, v: QuoteValues) => REQUIRED.has(name) && isVisible(name, v);

// ─── Validation ──────────────────────────────────────────────

/** Messages reuse the client's copy where it had one. */
const REQUIRED_MESSAGE: Partial<Record<QuoteField, string>> = {
  pickup_date: "Choose the pickup date.",
  pickup_time: "Choose the pickup time.",
  pickup: "Enter the pickup location.",
  dropoff: "Enter the drop-off location.",
  stop_1: "Enter stop 1.",
  stop_2: "Enter stop 2.",
  stop_3: "Enter stop 3.",
  return_pickup: "Enter the return pickup location.",
  return_dropoff: "Enter the return drop-off location.",
  airport_direction: "Select the airport transfer direction.",
  aviation_type: "Select commercial or private aviation.",
  meeting_preference: "Select an available arrival meeting preference.",
  airline: "Select an airline.",
  flight_number: "Enter the flight number.",
  other_airline: "Enter the airline name and IATA code.",
  fbo_name: "Enter the FBO or private terminal name.",
  return_date: "Choose the return date.",
  return_time: "Choose the return time.",
  hourly_duration: "Please complete the service details.",
  event_details: "Please complete the service details.",
  tour_itinerary: "Please complete the service details.",
  group_requirements: "Please complete the service details.",
  vehicle_category: "Select a vehicle category.",
  passenger_name: "Enter the passenger name.",
  contact_consent: "Please agree so we can contact you about this request.",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const digits = (s: string) => s.replace(/\D/g, "").length;
const validPhone = (s: string) => /^\+?[\d\s().-]+$/.test(s) && digits(s) >= 7 && digits(s) <= 15;

/** Same check as the client's form: "AA123" or "123", prefix must match the airline. */
function flightError(v: QuoteValues): string | undefined {
  const flight = v.flight_number.toUpperCase().replace(/\s+/g, "");
  if (!flight || /^[0-9]{1,4}[A-Z]?$/.test(flight)) return undefined;
  const m = flight.match(/^([A-Z0-9]{2})([0-9]{1,4}[A-Z]?)$/);
  if (!m) return "Enter a flight number such as AA123 or 123.";
  if (v.airline && v.airline !== "OTHER" && m[1] !== v.airline) return "The flight prefix must match the selected airline.";
  return undefined;
}

/** Local wall-clock timestamp of a date + time pair (browser time). */
const stamp = (date: string, time: string) => (date && time ? Date.parse(`${date}T${time}`) : NaN);

/** Errors for the visible fields of one step, in form order. */
export function validateStep(step: number, v: QuoteValues, now = Date.now()): QuoteErrors {
  const errors: QuoteErrors = {};
  for (const name of FIELD_NAMES) {
    if (QUOTE_FIELDS[name].step !== step || !isVisible(name, v)) continue;
    const value = v[name].trim();
    if (isRequired(name, v) && !value) {
      errors[name] = REQUIRED_MESSAGE[name] ?? `${QUOTE_FIELDS[name].label}: please complete this field.`;
    }
  }
  if (step === 0) {
    const pickupAt = stamp(v.pickup_date, v.pickup_time);
    if (!errors.pickup_time && Number.isFinite(pickupAt) && pickupAt <= now) {
      errors.pickup_time = "Pickup must be in the future.";
    }
    const returnAt = stamp(v.return_date, v.return_time);
    if (isVisible("return_time", v) && !errors.return_time && Number.isFinite(returnAt) && Number.isFinite(pickupAt) && returnAt <= pickupAt) {
      errors.return_time = "Return must be after pickup.";
    }
    if (isVisible("flight_number", v) && !errors.flight_number) {
      const msg = flightError(v);
      if (msg) errors.flight_number = msg;
    }
    if (isVisible("passengers", v) && v.passengers && !(Number(v.passengers) >= 1)) errors.passengers = "Enter at least 1 passenger.";
    for (const n of ["checked_bags", "carry_on_bags"] as const) {
      if (v[n] && !(Number(v[n]) >= 0)) errors[n] = "Enter 0 or more.";
    }
    if (isVisible("hourly_duration", v) && v.hourly_duration && !(Number(v.hourly_duration) > 0)) {
      errors.hourly_duration = "Enter the number of hours.";
    }
  }
  if (step === 2) {
    if (v.email && !errors.email && !EMAIL_RE.test(v.email.trim())) errors.email = "Enter a valid email address.";
    if (v.phone && !errors.phone && !validPhone(v.phone.trim())) errors.phone = "Enter a valid phone number, e.g. +1 703 310 6160.";
    if (isVisible("passenger_mobile", v) && v.passenger_mobile && !validPhone(v.passenger_mobile.trim())) {
      errors.passenger_mobile = "Enter a valid phone number or leave it empty.";
    }
  }
  return errors;
}

// ─── Prefill (home widget → /get-a-quote/) ───────────────────

/** Step-1 essentials the home widget carries in the query string. */
export const PREFILL_FIELDS = [
  "service_type",
  "pickup",
  "dropoff",
  "pickup_date",
  "pickup_time",
  "vehicle_category",
] as const;
/** Older/short keys still accepted (first version of the widget). */
const PREFILL_ALIASES: Partial<Record<QuoteField, string>> = { service_type: "service", pickup_date: "date", pickup_time: "time" };

export function prefillQuery(values: Partial<Record<(typeof PREFILL_FIELDS)[number], string>>): string {
  const params = new URLSearchParams();
  for (const key of PREFILL_FIELDS) {
    const value = values[key]?.trim();
    if (value) params.set(key, value);
  }
  return params.toString();
}

export function parsePrefill(params: { get(key: string): string | null } | null): QuoteValues {
  const values = emptyQuote();
  if (!params) return values;
  const read = (key: QuoteField) => {
    const alias = PREFILL_ALIASES[key];
    return params.get(key) ?? (alias ? params.get(alias) : null);
  };
  for (const key of PREFILL_FIELDS) {
    const raw = read(key)?.trim().slice(0, 200);
    if (!raw) continue;
    if (key === "service_type") {
      if ((QUOTE_SERVICE_TYPES as readonly string[]).includes(raw)) values.service_type = raw;
      else if (raw === "Group") values.service_type = "Group Transportation";
    } else if (key === "pickup_date") {
      if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) values.pickup_date = raw;
    } else if (key === "vehicle_category") {
      if (QUOTE_VEHICLES.some((v) => v.value === raw)) values.vehicle_category = raw;
    } else if (key === "pickup_time") {
      if (/^\d{2}:\d{2}$/.test(raw)) values.pickup_time = raw;
    } else {
      values[key] = raw;
    }
  }
  return values;
}

// ─── Payload ─────────────────────────────────────────────────

export type QuoteAddress = { address_line_1: string };
/** Submitted shape: Fluent names, only visible fields. Addresses keep Fluent's
 *  `pickup[address_line_1]` structure; checkboxes are "Yes" when ticked. */
export type QuotePayload = Partial<Record<QuoteField, string | QuoteAddress>>;

export function toPayload(v: QuoteValues): QuotePayload {
  const payload: QuotePayload = {};
  for (const name of FIELD_NAMES) {
    if (!isVisible(name, v)) continue;
    let value = v[name].trim();
    if (!value) continue;
    // Same normalization the validator applies ("ua 456" → "UA456").
    if (name === "flight_number") value = value.toUpperCase().replace(/\s+/g, "");
    payload[name] = "address" in QUOTE_FIELDS[name] ? { address_line_1: value } : value;
  }
  return payload;
}
