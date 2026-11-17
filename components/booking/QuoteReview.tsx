import Heading from "@/components/ui/Heading";
import { AIRLINES, isVisible, type QuoteValues } from "@/lib/data/quote";
import styles from "./QuoteForm.module.css";

type Row = [label: string, value: string];
interface Section {
  title: string;
  step: number;
  rows: Row[];
}

function displayDate(iso: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

function displayTime(hhmm: string): string {
  const m = hhmm.match(/^(\d{2}):(\d{2})/);
  if (!m) return hhmm;
  const h = Number(m[1]);
  return `${((h + 11) % 12) + 1}:${m[2]} ${h < 12 ? "AM" : "PM"}`;
}

const when = (date: string, time: string) => [date && displayDate(date), time && displayTime(time)].filter(Boolean).join(" · ");

/** Same grouping as the client's review step (Trip · Airport / Aviation · Passengers & Vehicle · Contact). */
function buildSections(v: QuoteValues): Section[] {
  const vis = (name: Parameters<typeof isVisible>[0]) => (isVisible(name, v) ? v[name].trim() : "");
  const airline = AIRLINES.find((a) => a.value === v.airline);
  const airlineName = v.airline === "OTHER" ? vis("other_airline") : airline ? airline.label : "";

  const trip: Row[] = [
    ["Service", v.service_type],
    ["Pickup", v.pickup],
    ["Drop-off", v.dropoff],
    ["Pickup date & time", when(v.pickup_date, v.pickup_time)],
    ["Stop 1", vis("stop_1")],
    ["Stop 2", vis("stop_2")],
    ["Stop 3", vis("stop_3")],
    ["Round trip", vis("round_trip")],
    ["Return date & time", isVisible("return_date", v) ? when(v.return_date, v.return_time) : ""],
    ["Return pickup", vis("return_pickup")],
    ["Return drop-off", vis("return_dropoff")],
    ["Hours", vis("hourly_duration")],
    ["Event details", vis("event_details")],
    ["Tour itinerary", vis("tour_itinerary")],
    ["Group requirements", vis("group_requirements")],
  ];

  const airport: Row[] = isVisible("aviation_type", v)
    ? [
        ["Direction", vis("airport_direction")],
        ["Aviation", vis("aviation_type")],
        ["Airline / flight", isVisible("airline", v) ? [airlineName, v.flight_number.toUpperCase().replace(/\s+/g, "")].filter(Boolean).join(" · ") : ""],
        ["Flight status", isVisible("flight_number", v) ? "Provisional — dispatch verification required" : ""],
        ["FBO", vis("fbo_name")],
        ["Tail number", vis("tail_number")],
        ["Meeting preference", vis("meeting_preference")],
        ["Airport instructions", vis("airport_instructions")],
      ]
    : [];

  const passengers: Row[] = [
    ["Passengers", v.passengers],
    ["Checked bags", v.checked_bags],
    ["Carry-on bags", v.carry_on_bags],
  ];
  const vehicle: Row[] = [["Vehicle", v.vehicle_category]];

  const contact: Row[] = [
    ["Contact", [v.first_name, v.last_name].map((s) => s.trim()).filter(Boolean).join(" ")],
    ["Email", v.email],
    ["Telephone", v.phone],
    ["Passenger name", vis("passenger_name")],
    ["Passenger mobile", vis("passenger_mobile")],
    ["Name sign", v.name_sign],
    ["Child seats", v.child_seats],
    ["Special instructions", v.special_instructions],
  ];

  return [
    { title: "Trip", step: 0, rows: trip },
    { title: "Airport / Aviation", step: 0, rows: airport },
    { title: "Passengers & Luggage", step: 0, rows: passengers },
    { title: "Vehicle", step: 1, rows: vehicle },
    { title: "Contact", step: 2, rows: contact },
  ]
    .map((s) => ({ ...s, rows: s.rows.filter(([, value]) => value.trim()) }))
    .filter((s) => s.rows.length);
}

export default function QuoteReview({ values, onEdit }: { values: QuoteValues; onEdit: (step: number) => void }) {
  return (
    <div className={styles.review}>
      {buildSections(values).map((section) => (
        <section key={section.title} className={styles.reviewSection} aria-label={section.title}>
          <div className={styles.reviewHead}>
            <Heading level="h3">{section.title}</Heading>
            <button type="button" className={styles.editBtn} onClick={() => onEdit(section.step)}>
              Edit<span className="srOnly"> {section.title.toLowerCase()}</span>
            </button>
          </div>
          <dl className={styles.reviewList}>
            {section.rows.map(([label, value]) => (
              <div key={label} className={styles.reviewRow}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
