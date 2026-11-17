"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import {
  ADDRESS_PLACEHOLDER,
  AIRLINES,
  AIRPORT_DIRECTIONS,
  AVIATION_TYPES,
  CHILD_SEATS,
  CONTACT_CONSENT_TEXT,
  MEETING_PREFERENCES,
  MEETING_PREFERENCE_HELP,
  QUOTE_FIELDS,
  QUOTE_SERVICE_TYPES,
  QUOTE_STEPS,
  QUOTE_VEHICLES,
  ROUND_TRIP,
  STOP_COUNTS,
  emptyQuote,
  isRequired,
  isVisible,
  toPayload,
  validateStep,
  type QuoteErrors,
  type QuoteField,
  type QuoteValues,
} from "@/lib/data/quote";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils/cn";
import {
  AddressField,
  CheckboxField,
  CounterField,
  SegmentedField,
  SelectField,
  TextAreaField,
  TextField,
  VehicleField,
  type FieldBinding,
} from "./QuoteFields";
import QuoteReview from "./QuoteReview";
import { submitQuote } from "./submitQuote";
import styles from "./QuoteForm.module.css";

const FIELD_ORDER = Object.keys(QUOTE_FIELDS) as QuoteField[];
const LAST = QUOTE_STEPS.length - 1;

type Status = "idle" | "submitting" | "error";

/**
 * The quote flow (4 steps), same fields/options/conditionals as the client's
 * Fluent form #34. Values for hidden fields stay in state (so toggling a
 * condition back restores them) but are never validated or submitted.
 */
export default function QuoteForm({ initialValues }: { initialValues?: QuoteValues }) {
  const router = useRouter();
  const uid = useId();
  const [values, setValues] = useState<QuoteValues>(() => initialValues ?? emptyQuote());
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const stepHeadRef = useRef<HTMLDivElement>(null);
  const stepChanged = useRef(false);

  // Move focus to the new step's heading (not on first render).
  useEffect(() => {
    if (!stepChanged.current) return;
    stepChanged.current = false;
    stepHeadRef.current?.focus();
    stepHeadRef.current?.scrollIntoView({ block: "start" });
  }, [step]);

  const idOf = (name: QuoteField) => `${uid}-${name}`;

  const bind = (name: QuoteField): FieldBinding => ({
    id: idOf(name),
    name,
    label: QUOTE_FIELDS[name].label,
    value: values[name],
    required: isRequired(name, values),
    error: errors[name],
    onValue: (value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        if (!(name in prev)) return prev;
        const next = { ...prev };
        delete next[name];
        return next;
      });
    },
  });
  const show = (name: QuoteField) => isVisible(name, values);

  const goTo = (target: number) => {
    setErrors({});
    stepChanged.current = true;
    setStep(target);
  };

  /** Shows errors and focuses the first invalid field. Returns true if valid. */
  const check = (target: number): boolean => {
    const found = validateStep(target, values);
    const names = FIELD_ORDER.filter((n) => found[n]);
    if (!names.length) return true;
    if (target !== step) {
      stepChanged.current = false;
      setStep(target);
    }
    setErrors(found);
    // Fields are already mounted (errors only add text); focus after paint.
    requestAnimationFrame(() => document.getElementById(idOf(names[0]))?.focus());
    return false;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (step < LAST) {
      if (check(step)) goTo(step + 1);
      return;
    }
    for (let s = 0; s <= LAST; s++) if (!check(s)) return;
    setStatus("submitting");
    try {
      const result = await submitQuote(toPayload(values));
      if (!result.ok) {
        setStatus("error");
        return;
      }
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  };

  const errorCount = Object.keys(errors).length;
  const current = QUOTE_STEPS[step];

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <ol className={styles.progress} aria-label="Form steps">
        {QUOTE_STEPS.map((s, i) => (
          <li
            key={s.title}
            className={cn(styles.progressItem, i === step && styles.progressCurrent, i < step && styles.progressDone)}
            aria-current={i === step ? "step" : undefined}
          >
            {i < step ? (
              <button type="button" className={styles.progressBtn} onClick={() => goTo(i)}>
                <span className={styles.progressNum} aria-hidden="true">
                  {i + 1}
                </span>
                <span>
                  {s.title}
                  <span className="srOnly"> (completed, edit)</span>
                </span>
              </button>
            ) : (
              <span className={styles.progressBtn}>
                <span className={styles.progressNum} aria-hidden="true">
                  {i + 1}
                </span>
                <span>{s.title}</span>
              </span>
            )}
          </li>
        ))}
      </ol>

      <div ref={stepHeadRef} className={styles.stepHead} tabIndex={-1} aria-labelledby={`${uid}-count ${uid}-title`}>
        <p id={`${uid}-count`} className={styles.stepCount}>
          Step {step + 1} of {QUOTE_STEPS.length} · {current.title}
        </p>
        <Heading level="h3" as="h2" id={`${uid}-title`}>
          {current.heading}
        </Heading>
        {"lead" in current ? <p className={styles.lead}>{current.lead}</p> : null}
      </div>

      <div className={styles.summarySlot} aria-live="assertive">
        {errorCount ? (
          <div className={styles.summary} role="alert">
            <p>
              Please correct {errorCount} highlighted {errorCount === 1 ? "field" : "fields"} before continuing.
            </p>
            <ul>
              {FIELD_ORDER.filter((n) => errors[n]).map((n) => (
                <li key={n}>
                  <a
                    href={`#${idOf(n)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(idOf(n))?.focus();
                    }}
                  >
                    {errors[n]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {step === 0 ? (
        <div className={styles.grid}>
          <SelectField f={bind("service_type")} options={QUOTE_SERVICE_TYPES} wide />
          {show("airport_direction") ? <SegmentedField f={bind("airport_direction")} options={AIRPORT_DIRECTIONS} wide /> : null}
          <TextField f={bind("pickup_date")} type="date" />
          <TextField f={bind("pickup_time")} type="time" />
          <AddressField f={bind("pickup")} placeholder={ADDRESS_PLACEHOLDER} />
          <AddressField f={bind("dropoff")} placeholder={ADDRESS_PLACEHOLDER} />

          {show("aviation_type") ? (
            <Group title="Airport details">
              <SegmentedField f={bind("aviation_type")} options={AVIATION_TYPES} wide />
              {show("airline") ? <SelectField f={bind("airline")} options={AIRLINES} /> : null}
              {show("flight_number") ? (
                <TextField f={bind("flight_number")} placeholder="e.g. AA123" autoComplete="off" />
              ) : null}
              {show("other_airline") ? <TextField f={bind("other_airline")} wide /> : null}
              {show("fbo_name") ? <TextField f={bind("fbo_name")} /> : null}
              {show("tail_number") ? <TextField f={bind("tail_number")} autoComplete="off" /> : null}
              {show("meeting_preference") ? (
                <SelectField f={bind("meeting_preference")} options={MEETING_PREFERENCES} help={MEETING_PREFERENCE_HELP} wide />
              ) : null}
              <TextAreaField f={bind("airport_instructions")} rows={2} />
            </Group>
          ) : null}

          <Group title="Passengers & luggage" cols={3}>
            <CounterField f={bind("passengers")} min={1} />
            <CounterField f={bind("checked_bags")} min={0} />
            <CounterField f={bind("carry_on_bags")} min={0} />
          </Group>

          <SelectField f={bind("stop_count")} options={STOP_COUNTS} />
          {show("round_trip") ? <SegmentedField f={bind("round_trip")} options={ROUND_TRIP} /> : null}
          {(["stop_1", "stop_2", "stop_3"] as const).map((n) =>
            show(n) ? <AddressField key={n} f={bind(n)} placeholder={ADDRESS_PLACEHOLDER} /> : null
          )}

          {show("return_date") ? (
            <Group title="Return trip">
              <TextField f={bind("return_date")} type="date" />
              <TextField f={bind("return_time")} type="time" />
              <AddressField f={bind("return_pickup")} placeholder={ADDRESS_PLACEHOLDER} />
              <AddressField f={bind("return_dropoff")} placeholder={ADDRESS_PLACEHOLDER} />
            </Group>
          ) : null}

          {show("hourly_duration") ? (
            <TextField f={bind("hourly_duration")} type="number" inputMode="numeric" min={1} />
          ) : null}
          {show("event_details") ? <TextAreaField f={bind("event_details")} /> : null}
          {show("tour_itinerary") ? <TextAreaField f={bind("tour_itinerary")} /> : null}
          {show("group_requirements") ? <TextAreaField f={bind("group_requirements")} /> : null}
        </div>
      ) : null}

      {step === 1 ? (
        <div className={styles.grid}>
          <VehicleField f={bind("vehicle_category")} vehicles={QUOTE_VEHICLES} />
        </div>
      ) : null}

      {step === 2 ? (
        <div className={styles.grid}>
          <TextField f={bind("first_name")} autoComplete="given-name" />
          <TextField f={bind("last_name")} autoComplete="family-name" />
          <TextField f={bind("email")} type="email" placeholder="Email Address" autoComplete="email" inputMode="email" />
          <TextField f={bind("phone")} type="tel" placeholder="Mobile Number" autoComplete="tel" inputMode="tel" />
          <CheckboxField f={bind("different_passenger")} legend="Passenger" text={QUOTE_FIELDS.different_passenger.label} />
          {show("passenger_name") ? <TextField f={bind("passenger_name")} autoComplete="off" /> : null}
          {show("passenger_mobile") ? (
            <TextField f={bind("passenger_mobile")} type="tel" placeholder="Passenger mobile (optional)" inputMode="tel" autoComplete="off" />
          ) : null}
          <TextField f={bind("name_sign")} autoComplete="off" />
          <SelectField f={bind("child_seats")} options={CHILD_SEATS} />
          <TextAreaField f={bind("special_instructions")} />
        </div>
      ) : null}

      {step === LAST ? (
        <div className={styles.grid}>
          <QuoteReview values={values} onEdit={goTo} />
          <CheckboxField f={bind("contact_consent")} legend="Contact consent" text={CONTACT_CONSENT_TEXT} />
        </div>
      ) : null}

      {status === "error" ? (
        <p className={styles.submitError} role="alert">
          We could not confirm your request was sent. Please try again, or call{" "}
          <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>.
        </p>
      ) : null}

      <div className={styles.actions}>
        {step > 0 ? (
          <Button variant="outline" size="lg" onClick={() => goTo(step - 1)} disabled={status === "submitting"}>
            Back
          </Button>
        ) : null}
        <Button
          type="submit"
          variant={step === LAST ? "primary" : "dark"}
          size="lg"
          className={styles.next}
          disabled={status === "submitting"}
          aria-busy={status === "submitting" || undefined}
        >
          {step < LAST ? "Continue" : status === "submitting" ? "Sending…" : "Submit Quote Request"}
        </Button>
      </div>
    </form>
  );
}

function Group({ title, cols = 2, children }: { title: string; cols?: 2 | 3; children: ReactNode }) {
  return (
    <div className={cn(styles.group, cols === 3 && styles.group3)} role="group" aria-label={title}>
      <p className={styles.groupTitle} aria-hidden="true">
        {title}
      </p>
      {children}
    </div>
  );
}
