import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import type { Item } from "@/lib/content/services/types";
import styles from "./ServiceIntro.module.css";

/** Lead paragraph(s) on the left, 3–4 key points on the right. */
export default function ServiceIntro({
  eyebrow,
  title,
  body,
  points,
}: {
  eyebrow: string;
  title: string;
  body: readonly string[];
  points: readonly Item[];
}) {
  return (
    <Panel tone="paper" aria-labelledby="intro-title">
      <div className={styles.grid}>
        <div className={styles.text}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="h2" id="intro-title">
            {title}
          </Heading>
          {body.map((p) => (
            <p key={p.slice(0, 32)} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
        <ul className={styles.points}>
          {points.map((p) => (
            <li key={p.title} className={styles.point}>
              <h3 className={styles.pointTitle}>{p.title}</h3>
              <p className={styles.pointText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
