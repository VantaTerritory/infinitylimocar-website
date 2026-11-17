import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Eyebrow.module.css";

/** Kicker above a section title: short gold rule + uppercase label. */
export default function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return <p className={cn(styles.eyebrow, tone === "dark" && styles.onDark, className)}>{children}</p>;
}
