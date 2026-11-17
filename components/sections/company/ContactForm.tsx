"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils/cn";
import { submitContact, type ContactValues } from "./submitContact";
import styles from "./ContactForm.module.css";

type Field = keyof ContactValues;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const EMPTY: ContactValues = { name: "", email: "", phone: "", message: "" };
const ORDER: Field[] = ["name", "email", "phone", "message"];

function validate(v: ContactValues): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email, like name@company.com.";
  if (v.phone.trim() && v.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number or leave it empty.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

/** General contact form (not trips: those go to /get-a-quote/). */
export default function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const id = (f: Field) => `${uid}-${f}`;
  const set = (f: Field) => (e: { target: { value: string } }) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [f]: value }));
    // Clear a field's error as soon as it is fixed; never add errors while typing.
    if (errors[f]) setErrors((prev) => ({ ...prev, [f]: validate({ ...values, [f]: value })[f] }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const found = validate(values);
    setErrors(found);
    const first = ORDER.find((f) => found[f]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(first))}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await submitContact(values);
      if (res.ok) {
        setStatus("sent");
        requestAnimationFrame(() => doneRef.current?.focus());
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div ref={doneRef} tabIndex={-1} className={styles.done} role="status">
        <p className={styles.doneTitle}>Thank you, {values.name.trim().split(" ")[0]}.</p>
        <p>
          Your message was sent and we&apos;ll reply shortly. For an urgent trip call{" "}
          <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setValues(EMPTY);
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const control = (f: Field) => ({
    id: id(f),
    name: f,
    value: values[f],
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${id(f)}-error` : undefined,
  });

  const wrap = (f: Field, label: string, input: ReactNode, optional = false) => (
    <div className={cn(styles.field, errors[f] && styles.invalid)}>
      <label htmlFor={id(f)} className={styles.label}>
        {label} {optional ? <span className={styles.optional}>(optional)</span> : null}
      </label>
      {input}
      {errors[f] ? (
        <p id={`${id(f)}-error`} className={styles.error}>
          {errors[f]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className={styles.title}>
        Send us a message
      </h2>
      <div className={styles.row}>
        {wrap("name", "Name", <input {...control("name")} onChange={set("name")} className={styles.control} type="text" autoComplete="name" required />)}
        {wrap(
          "email",
          "Email",
          <input {...control("email")} onChange={set("email")} className={styles.control} type="email" autoComplete="email" inputMode="email" required />
        )}
      </div>
      {wrap(
        "phone",
        "Phone",
        <input {...control("phone")} onChange={set("phone")} className={styles.control} type="tel" autoComplete="tel" inputMode="tel" />,
        true
      )}
      {wrap(
        "message",
        "Message",
        <textarea {...control("message")} onChange={set("message")} rows={5} className={cn(styles.control, styles.textarea)} required />
      )}
      <div className={styles.footer}>
        <Button type="submit" variant="dark" disabled={status === "sending"} aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p className={styles.hint}>
          Planning a trip? <Link href="/get-a-quote">Request a quote</Link> — it asks for everything dispatch needs.
        </p>
      </div>
      <div aria-live="polite">
        {status === "failed" ? (
          <p className={styles.failed}>
            We couldn&apos;t send your message. Please try again, or email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}
