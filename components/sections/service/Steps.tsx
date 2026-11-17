import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import type { Item } from "@/lib/content/services/types";
import styles from "./Steps.module.css";

/** "How it works": numbered steps on onyx (same pillar cards as the home Standard). */
export default function Steps({
  title,
  items,
  note,
}: {
  title: string;
  items: readonly Item[];
  note?: string;
}) {
  return (
    <Panel tone="onyx" aria-labelledby="steps-title">
      <header className={styles.head}>
        <Eyebrow tone="dark">How it works</Eyebrow>
        <Heading level="h2" id="steps-title">
          {title}
        </Heading>
      </header>
      <ol className={styles.list}>
        {items.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.text}>{s.text}</p>
          </li>
        ))}
      </ol>
      {note ? <p className={styles.note}>{note}</p> : null}
    </Panel>
  );
}
