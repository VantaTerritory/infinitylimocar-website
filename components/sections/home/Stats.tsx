import Panel from "@/components/ui/Panel";
import { siteConfig } from "@/lib/site-config";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <Panel tone="onyx" className={styles.panel} aria-label="Infinity Limo Car in numbers">
      <dl className={styles.grid}>
        {siteConfig.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt className={styles.label}>{s.label}</dt>
            <dd className={styles.value}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
