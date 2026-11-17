import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Chip.module.css";

/** Pill tag: fleet models, "Private Aviation / FBO", membership badges. */
export default function Chip({
  children,
  href,
  tone = "light",
  variant = "outline",
  className,
}: {
  children: ReactNode;
  href?: string;
  tone?: "light" | "dark" | "gold";
  variant?: "outline" | "filled";
  className?: string;
}) {
  const classes = cn(styles.chip, styles[variant], styles[tone], href && styles.link, className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <span className={classes}>{children}</span>;
}
