import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import type { Review } from "@/lib/data/testimonials";
import styles from "./ReviewWall.module.css";

/** Every review, server-rendered in CSS columns (masonry without JS). */
export default function ReviewWall({ reviews }: { reviews: readonly Review[] }) {
  return (
    <Panel tone="sand" aria-labelledby="wall-title">
      <SectionHead
        id="wall-title"
        eyebrow="In their words"
        title={`${reviews.length} reviews from our clients`}
        lead="Five-star Google reviews from travelers, executive assistants, planners and families."
      />
      <ul className={styles.wall}>
        {reviews.map((r, i) => (
          <li key={`${r.author}-${i}`} className={styles.item}>
            <figure className={styles.card}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <blockquote className={styles.quote}>
                <p>{r.text}</p>
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.name}>{r.author}</span>
                <span className={styles.source}>Google review · 5 stars</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
