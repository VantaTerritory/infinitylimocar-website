import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Accordion.module.css";

/** Native <details> disclosure: FAQ rows, itinerary pills. No JS needed. */
export default function Accordion({
  summary,
  children,
  tone = "sand",
  size = "md",
  className,
  name,
}: {
  summary: ReactNode;
  children: ReactNode;
  tone?: "sand" | "paper";
  size?: "sm" | "md";
  className?: string;
  /** Same name = exclusive group (only one open at a time). */
  name?: string;
}) {
  return (
    <details className={cn(styles.item, styles[tone], styles[size], className)} name={name}>
      <summary className={styles.summary}>
        <span>{summary}</span>
        <span className={styles.icon} aria-hidden="true" />
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
