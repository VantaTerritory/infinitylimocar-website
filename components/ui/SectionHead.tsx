import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import styles from "./SectionHead.module.css";

/** Eyebrow + h2 (+ optional lead) and an optional action on the right
 *  ("Fleet overview →"). Used by every section of every page. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
  action,
  tone = "light",
  id,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  return (
    <header className={cn(styles.head, tone === "dark" && styles.onDark, className)}>
      <div className={styles.text}>
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <Heading level="h2" id={id}>
          {title}
        </Heading>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </header>
  );
}
