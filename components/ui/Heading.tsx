import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Heading.module.css";

/**
 * Every title on the site goes through here, so the type scale lives in one
 * place. `level` is the visual size (brandbook hierarchy), `as` the semantic tag.
 * Example: a card title that must be an <h3> but look like the h3 token →
 *   <Heading level="h3">…</Heading>
 */
export type HeadingLevel = "display" | "h1" | "h2" | "h3";

const defaultTag: Record<HeadingLevel, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

export default function Heading({
  level = "h2",
  as,
  children,
  className,
  id,
}: {
  level?: HeadingLevel;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const Tag = as ?? defaultTag[level];
  return (
    <Tag id={id} className={cn(styles.heading, styles[level], className)}>
      {children}
    </Tag>
  );
}
