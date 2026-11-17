"use client";

import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { QUOTE_SERVICES, prefillQuery, type QuoteServiceType } from "@/lib/data/quote";
import { cn } from "@/lib/utils/cn";
import styles from "./QuoteWidget.module.css";

/**
 * Step 1 of the quote flow (trip details), docked at the bottom of the hero.
 * Desktop: service tabs + one row of fields. Mobile: a card with a service
 * select and stacked fields (wireframe mobile).
 * "Continue" carries these essentials (Fluent field names) into /get-a-quote/,
 * where QuoteForm resumes at step 1 prefilled and adds the conditional fields
 * (airport, stops, return trip…) plus steps 2–4.
 */
/** Local "today" as YYYY-MM-DD, applied as the date input's minimum. */
function setMinToday(e: { currentTarget: HTMLInputElement }) {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  e.currentTarget.min = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function QuoteWidget() {
  const router = useRouter();
  const uid = useId();
  const [service, setService] = useState<QuoteServiceType>(QUOTE_SERVICES[0].value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const query = prefillQuery({
      service_type: service,
      pickup: get("pickup"),
      dropoff: get("dropoff"),
      pickup_date: get("pickup_date"),
      pickup_time: get("pickup_time"),
    });
    router.push(`/get-a-quote/?${query}`);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.tabs} role="group" aria-label="Service type">
        {QUOTE_SERVICES.map(({ value, tab }) => (
          <button
            key={value}
            type="button"
            aria-pressed={service === value}
            className={cn(styles.tab, service === value && styles.tabActive)}
            onClick={() => setService(value)}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className={styles.card} onSubmit={onSubmit} aria-label="Request a quote">
        <div className={styles.mobileHead}>
          <p className={styles.mobileTitle}>Request a Quote</p>
          <p className={styles.step}>Step 1 of 4</p>
        </div>

        <label className={styles.mobileSelect}>
          <span className="srOnly">Service type</span>
          <select value={service} onChange={(e) => setService(e.target.value as QuoteServiceType)}>
            {QUOTE_SERVICES.map(({ value }) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>

        <div className={styles.fields}>
          <label className={cn(styles.field, styles.wide)} htmlFor={`${uid}-pickup`}>
            <span className={styles.label}>Pickup location</span>
            <input
              id={`${uid}-pickup`}
              name="pickup"
              placeholder="Address, airport, hotel"
              autoComplete="off"
              required
            />
          </label>
          <label className={cn(styles.field, styles.wide)} htmlFor={`${uid}-dropoff`}>
            <span className={styles.label}>Drop-off location</span>
            <input
              id={`${uid}-dropoff`}
              name="dropoff"
              placeholder="Address, airport, hotel"
              autoComplete="off"
              required
            />
          </label>
          <label className={styles.field} htmlFor={`${uid}-date`}>
            <span className={styles.label}>Pickup date</span>
            <input
              id={`${uid}-date`}
              name="pickup_date"
              type="date"
              required
              // No past dates. Set on interaction (not at render) so server and
              // client markup match.
              onFocus={setMinToday}
              onPointerDown={setMinToday}
            />
          </label>
          <label className={styles.field} htmlFor={`${uid}-time`}>
            <span className={styles.label}>Pickup time</span>
            <input id={`${uid}-time`} name="pickup_time" type="time" required />
          </label>
          <Button type="submit" variant="dark" size="lg" className={styles.submit}>
            Continue
          </Button>
        </div>

        <div className={styles.meta}>
          <p>Step 1 of 4 · Trip details → Select vehicle → Passenger &amp; contact → Review</p>
          <p>A quote request is not a confirmed reservation.</p>
        </div>
      </form>
    </div>
  );
}
