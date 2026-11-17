import type { ReactNode } from "react";
import Panel, { isDarkTone, type PanelTone } from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import type { Membership } from "@/lib/content/company";
import { cn } from "@/lib/utils/cn";
import styles from "./MembershipGrid.module.css";

/**
 * Text badges for memberships and credentials (logos pending from the client):
 * the acronym set large in the display face, full name, one line, and a link to
 * the public profile when one exists so clients can verify it.
 */
export default function MembershipGrid({
  id,
  tone = "paper",
  eyebrow,
  title,
  lead,
  items,
  compact = false,
}: {
  id: string;
  tone?: PanelTone;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  items: readonly Membership[];
  /** Name-only cards (chambers, tourism listings). */
  compact?: boolean;
}) {
  const dark = isDarkTone(tone);
  return (
    <Panel tone={tone} aria-labelledby={id}>
      <SectionHead id={id} eyebrow={eyebrow} title={title} lead={lead} tone={dark ? "dark" : "light"} />
      <ul className={cn(styles.grid, compact && styles.compact)}>
        {items.map((m) => (
          <li key={m.name} className={styles.card}>
            {m.short ? (
              <p className={styles.badge} aria-hidden="true">
                {m.short}
              </p>
            ) : null}
            <h3 className={styles.name}>{m.name}</h3>
            <p className={styles.text}>{m.text}</p>
            {m.href ? (
              <a href={m.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                View public profile <span aria-hidden="true">↗</span>
                <span className="srOnly"> (opens in a new tab)</span>
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
