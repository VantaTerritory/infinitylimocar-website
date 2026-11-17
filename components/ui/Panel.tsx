import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Panel.module.css";

/**
 * The building block of every page: a rounded panel on the linen frame.
 * tone: paper (default light) · sand (muted light) · onyx · oxblood · gold.
 * Text color and the `data-tone` used by children (Button tone, Eyebrow) follow
 * the tone, so a section only picks a tone, never colors.
 */
export type PanelTone = "paper" | "sand" | "onyx" | "oxblood" | "gold";

export default function Panel({
  tone = "paper",
  as: Tag = "section",
  pad = "default",
  children,
  className,
  id,
  ...aria
}: {
  tone?: PanelTone;
  as?: ElementType;
  pad?: "default" | "compact" | "none";
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}) {
  return (
    <Tag
      id={id}
      data-tone={tone}
      className={cn(styles.panel, styles[tone], pad !== "default" && styles[pad], className)}
      {...aria}
    >
      {children}
    </Tag>
  );
}

export const isDarkTone = (tone: PanelTone) => tone === "onyx" || tone === "oxblood";
