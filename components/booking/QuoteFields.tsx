import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./QuoteForm.module.css";

/**
 * Field primitives of the quote form. Each one renders its own label (or
 * fieldset/legend for groups), help text and inline error, and wires
 * aria-invalid / aria-describedby. State lives in QuoteForm; these are pure.
 */
export interface FieldBinding {
  id: string;
  name: string;
  label: string;
  value: string;
  required: boolean;
  error?: string;
  onValue: (value: string) => void;
}

type Option = string | { value: string; label: string };
const optValue = (o: Option) => (typeof o === "string" ? o : o.value);
const optLabel = (o: Option) => (typeof o === "string" ? o : o.label);

function describedBy(f: FieldBinding, help?: ReactNode) {
  return cn(help ? `${f.id}-help` : null, f.error ? `${f.id}-error` : null) || undefined;
}

function Label({ f, className }: { f: FieldBinding; className?: string }) {
  return (
    <label htmlFor={f.id} className={cn(styles.label, className)}>
      {f.label}
      {f.required ? (
        <span className={styles.req} aria-hidden="true">
          {" *"}
        </span>
      ) : null}
    </label>
  );
}

function Extras({ f, help }: { f: FieldBinding; help?: ReactNode }) {
  return (
    <>
      {help ? (
        <p id={`${f.id}-help`} className={styles.help}>
          {help}
        </p>
      ) : null}
      {f.error ? (
        <p id={`${f.id}-error`} className={styles.error}>
          {f.error}
        </p>
      ) : null}
    </>
  );
}

const controlProps = (f: FieldBinding, help?: ReactNode) => ({
  id: f.id,
  name: f.name,
  required: f.required,
  "aria-invalid": f.error ? true : undefined,
  "aria-describedby": describedBy(f, help),
});

export function TextField({
  f,
  type = "text",
  help,
  wide,
  placeholder,
  autoComplete,
  inputMode,
  min,
}: {
  f: FieldBinding;
  type?: "text" | "email" | "tel" | "date" | "time" | "number";
  help?: ReactNode;
  wide?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  min?: string | number;
}) {
  return (
    <div className={cn(styles.field, wide && styles.wide, f.error && styles.invalid)}>
      <Label f={f} />
      <input
        {...controlProps(f, help)}
        className={styles.control}
        type={type}
        value={f.value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        onChange={(e) => f.onValue(e.target.value)}
      />
      <Extras f={f} help={help} />
    </div>
  );
}

/**
 * Address input. Plain text for now.
 * TODO(places): attach Google Places Autocomplete to the input carrying
 * `data-places`; on place select, set the formatted address through `onValue`
 * and keep `place_id` / components in QuoteForm state (Fluent's hidden
 * `<name>_place_id`, `<name>_place_name` fields) so the backend can use them.
 */
export function AddressField({ f, placeholder }: { f: FieldBinding; placeholder: string }) {
  return (
    <div className={cn(styles.field, styles.wide, f.error && styles.invalid)}>
      <Label f={f} />
      <input
        {...controlProps(f)}
        className={styles.control}
        type="text"
        value={f.value}
        placeholder={placeholder}
        autoComplete="off"
        data-places={f.name}
        onChange={(e) => f.onValue(e.target.value)}
      />
      <Extras f={f} />
    </div>
  );
}

export function TextAreaField({ f, help, rows = 3 }: { f: FieldBinding; help?: ReactNode; rows?: number }) {
  return (
    <div className={cn(styles.field, styles.wide, f.error && styles.invalid)}>
      <Label f={f} />
      <textarea
        {...controlProps(f, help)}
        className={cn(styles.control, styles.textarea)}
        rows={rows}
        value={f.value}
        onChange={(e) => f.onValue(e.target.value)}
      />
      <Extras f={f} help={help} />
    </div>
  );
}

export function SelectField({
  f,
  options,
  help,
  wide,
}: {
  f: FieldBinding;
  options: readonly Option[];
  help?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={cn(styles.field, wide && styles.wide, f.error && styles.invalid)}>
      <Label f={f} />
      <select
        {...controlProps(f, help)}
        className={cn(styles.control, styles.select)}
        value={f.value}
        onChange={(e) => f.onValue(e.target.value)}
      >
        <option value="">- Select -</option>
        {options.map((o) => (
          <option key={optValue(o)} value={optValue(o)}>
            {optLabel(o)}
          </option>
        ))}
      </select>
      <Extras f={f} help={help} />
    </div>
  );
}

/** Radio group as a segmented pill control (fieldset + legend). */
export function SegmentedField({ f, options, wide }: { f: FieldBinding; options: readonly string[]; wide?: boolean }) {
  return (
    <fieldset
      className={cn(styles.field, styles.fieldset, wide && styles.wide, f.error && styles.invalid)}
      aria-describedby={describedBy(f)}
    >
      <legend className={styles.label}>
        {f.label}
        {f.required ? (
          <span className={styles.req} aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </legend>
      <div className={styles.segmented}>
        {options.map((o, i) => (
          <label key={o} className={styles.segment}>
            <input
              id={i === 0 ? f.id : undefined}
              type="radio"
              name={f.name}
              value={o}
              checked={f.value === o}
              required={f.required}
              aria-describedby={f.error ? `${f.id}-error` : undefined}
              onChange={() => f.onValue(o)}
            />
            <span>{o}</span>
          </label>
        ))}
      </div>
      <Extras f={f} />
    </fieldset>
  );
}

/** Number with −/+ buttons (the client's form adds the same steppers). */
export function CounterField({ f, min }: { f: FieldBinding; min: number }) {
  const n = Number.parseInt(f.value, 10);
  const current = Number.isFinite(n) ? n : min;
  const label = f.label.toLowerCase();
  return (
    <div className={cn(styles.field, f.error && styles.invalid)}>
      <Label f={f} />
      <div className={styles.counter}>
        <button
          type="button"
          className={styles.counterBtn}
          aria-label={`Decrease ${label}`}
          disabled={current <= min}
          onClick={() => f.onValue(String(Math.max(min, current - 1)))}
        >
          −
        </button>
        <input
          {...controlProps(f)}
          className={cn(styles.control, styles.counterInput)}
          type="number"
          inputMode="numeric"
          min={min}
          step={1}
          value={f.value}
          onChange={(e) => f.onValue(e.target.value)}
        />
        <button
          type="button"
          className={styles.counterBtn}
          aria-label={`Increase ${label}`}
          onClick={() => f.onValue(String(current + 1))}
        >
          +
        </button>
      </div>
      <Extras f={f} />
    </div>
  );
}

export function CheckboxField({ f, legend, text }: { f: FieldBinding; legend: string; text: ReactNode }) {
  return (
    <fieldset className={cn(styles.field, styles.fieldset, styles.wide, f.error && styles.invalid)}>
      <legend className={styles.label}>
        {legend}
        {f.required ? (
          <span className={styles.req} aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </legend>
      <label className={styles.check}>
        <input
          {...controlProps(f)}
          type="checkbox"
          value="Yes"
          checked={f.value === "Yes"}
          onChange={(e) => f.onValue(e.target.checked ? "Yes" : "")}
        />
        <span>{text}</span>
      </label>
      <Extras f={f} />
    </fieldset>
  );
}

export interface VehicleOption {
  value: string;
  models: string;
  passengers: string;
  bags: string;
}

/** vehicle_category as selectable cards (radio inputs inside labels). */
export function VehicleField({ f, vehicles, lead }: { f: FieldBinding; vehicles: readonly VehicleOption[]; lead?: string }) {
  return (
    <fieldset
      className={cn(styles.field, styles.fieldset, styles.wide, f.error && styles.invalid)}
      aria-describedby={describedBy(f, lead)}
    >
      <legend className={styles.label}>
        {f.label}
        {f.required ? (
          <span className={styles.req} aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </legend>
      {lead ? (
        <p id={`${f.id}-help`} className={styles.help}>
          {lead}
        </p>
      ) : null}
      <div className={styles.vehicles}>
        {vehicles.map((v, i) => (
          <label key={v.value} className={styles.vehicle}>
            <input
              id={i === 0 ? f.id : undefined}
              type="radio"
              name={f.name}
              value={v.value}
              checked={f.value === v.value}
              required={f.required}
              aria-describedby={f.error ? `${f.id}-error` : undefined}
              onChange={() => f.onValue(v.value)}
            />
            <span className={styles.vehicleBody}>
              <span className={styles.vehicleName}>{v.value}</span>
              {v.models ? <span className={styles.vehicleModels}>{v.models}</span> : null}
              <span className={styles.vehicleMeta}>
                <span>{v.passengers}</span>
                <span>{v.bags}</span>
              </span>
            </span>
          </label>
        ))}
      </div>
      {f.error ? (
        <p id={`${f.id}-error`} className={styles.error}>
          {f.error}
        </p>
      ) : null}
    </fieldset>
  );
}
