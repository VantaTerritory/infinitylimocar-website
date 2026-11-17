import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import ArrowDisc from "./ArrowDisc";
import styles from "./LinkCard.module.css";

/** Whole-card link with title, one line of text and the ↗ disc.
 *  tone "onyx" = featured card (first of a grid). */
export default function LinkCard({
  href,
  title,
  text,
  tone = "sand",
  className,
  children,
}: {
  href: string;
  title: ReactNode;
  text?: ReactNode;
  tone?: "sand" | "paper" | "onyx" | "oxblood";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className={cn(styles.card, styles[tone], className)}>
      <span className={styles.head}>
        <span className={styles.title}>{title}</span>
        <ArrowDisc tone={tone === "onyx" ? "gold" : "paper"} className={styles.disc} />
      </span>
      {text ? <span className={styles.text}>{text}</span> : null}
      {children}
    </Link>
  );
}
