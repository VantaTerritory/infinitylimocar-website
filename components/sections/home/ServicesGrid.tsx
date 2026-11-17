import LinkCard from "@/components/ui/LinkCard";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { SERVICE_CARDS } from "@/lib/data/services";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <Panel tone="paper" aria-labelledby="services-title">
      <SectionHead
        id="services-title"
        eyebrow="Start with your journey"
        title="Car Service, Airport Transfers & Group Transportation"
      />
      <ul className={styles.grid}>
        {SERVICE_CARDS.map((s) => (
          <li key={s.title}>
            <LinkCard
              href={s.href}
              title={s.title}
              tone={"featured" in s && s.featured ? "onyx" : "sand"}
              className={styles.card}
              text={
                <>
                  <span className={styles.long}>{s.text}</span>
                  <span className={styles.short}>{s.short}</span>
                </>
              }
            />
          </li>
        ))}
      </ul>
    </Panel>
  );
}
