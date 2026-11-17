import type { Item } from "./types";

/** Step sets reused across pages (kinsta "How it works" blocks, condensed). */

export const STEPS_TRIP: Item[] = [
  { title: "Share the route", text: "Complete pickup and drop-off addresses, plus any stop you already know about." },
  { title: "Confirm the schedule", text: "Pickup date and time, and the meeting, dinner or event you need to reach." },
  { title: "Describe the party", text: "Passenger count, luggage and the vehicle you prefer." },
  { title: "Review the plan", text: "We confirm the vehicle, timing and a reachable contact before service." },
];

export const STEPS_AIRPORT: Item[] = [
  { title: "Send the flight", text: "Airport, airline, flight number, date, passengers, luggage and destination." },
  { title: "Choose the meeting plan", text: "Curbside pickup, or an inside meet & greet when a personal welcome helps." },
  { title: "We follow the flight", text: "Arrival timing is tracked, so the pickup moves with an early or late landing." },
  { title: "Straight to the destination", text: "A private ride to the hotel, office, residence or venue you confirmed." },
];

export const STEPS_GROUP: Item[] = [
  { title: "Share the itinerary", text: "Dates, every pickup and destination, headcount, luggage and event times." },
  { title: "Build the vehicle plan", text: "One vehicle or a mix of Sprinters, minibuses and coaches, sized to the group." },
  { title: "Confirm manifest and contacts", text: "Pickup waves, passenger lists and an on-site contact for each movement." },
  { title: "Coordinate the day", text: "Dispatch keeps vehicles, timing and changes aligned with your coordinator." },
];

export const STEPS_PROGRAM: Item[] = [
  { title: "Discuss requirements", text: "Travelers, routes, frequency, who books and how billing should work." },
  { title: "Set up the program", text: "Contacts, booking authority, reservation details and invoicing preferences." },
  { title: "Book and adjust", text: "Reservations run through one team, with changes handled as the schedule evolves." },
];

/** Shared lines, so the same fact reads the same everywhere. */
export const AIRPORTS_LINE = "Reagan National (DCA), Washington Dulles (IAD) and Baltimore/Washington (BWI)";
