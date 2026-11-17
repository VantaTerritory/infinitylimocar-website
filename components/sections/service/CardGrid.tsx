import LinkCard from "@/components/ui/LinkCard";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import type { Item } from "@/lib/content/services/types";
import styles from "./CardGrid.module.css";

/** Use cases / what's included. Cards with an href become LinkCards. */
export default function CardGrid({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: readonly Item[];
}) {
  return (
    <Panel tone="sand" aria-labelledby="uses-title">
      <SectionHead id="uses-title" eyebrow={eyebrow} title={title} lead={lead} />
      <ul className={styles.grid}>
        {items.map((it) => (
          <li key={it.title}>
            {it.href ? (
              <LinkCard href={it.href} title={it.title} text={it.text} tone="paper" className={styles.card} />
            ) : (
              <div className={styles.card}>
                <h3 className={styles.title}>{it.title}</h3>
                <p className={styles.text}>{it.text}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
