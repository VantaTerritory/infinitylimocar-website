import Link from "next/link";
import type { ReactNode } from "react";
import ArrowDisc from "@/components/ui/ArrowDisc";
import Panel, { isDarkTone, type PanelTone } from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import type { InfoItem } from "@/lib/content/company";
import { cn } from "@/lib/utils/cn";
import styles from "./CardGrid.module.css";

/**
 * Section = SectionHead + a grid of short cards (title + one line). Cards with
 * `href` become whole-card links with the ↗ disc; `numbered` adds 01/02/03 for
 * process steps. Card color follows the panel tone (sand cards on paper, etc.).
 */
export default function CardGrid({
  id,
  tone = "paper",
  eyebrow,
  title,
  lead,
  action,
  items,
  numbered = false,
  columns = 3,
  children,
}: {
  id: string;
  tone?: PanelTone;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  items: readonly InfoItem[];
  numbered?: boolean;
  columns?: 2 | 3 | 4;
  children?: ReactNode;
}) {
  const dark = isDarkTone(tone);
  const List = numbered ? "ol" : "ul";
  return (
    <Panel tone={tone} aria-labelledby={id}>
      <SectionHead id={id} eyebrow={eyebrow} title={title} lead={lead} action={action} tone={dark ? "dark" : "light"} />
      <List className={cn(styles.grid, styles[`cols${columns}`])}>
        {items.map((item, i) => {
          const body = (
            <>
              <span className={styles.head}>
                {numbered ? (
                  <span className={styles.index} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <h3 className={styles.title}>{item.title}</h3>
                {item.href ? <ArrowDisc tone={dark ? "gold" : "paper"} className={styles.disc} /> : null}
              </span>
              <p className={styles.text}>{item.text}</p>
            </>
          );
          return (
            <li key={item.title}>
              {item.href ? (
                <Link href={item.href} className={cn(styles.card, styles.link)}>
                  {body}
                </Link>
              ) : (
                <div className={styles.card}>{body}</div>
              )}
            </li>
          );
        })}
      </List>
      {children}
    </Panel>
  );
}
