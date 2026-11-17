import Image from "next/image";
import Panel from "@/components/ui/Panel";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/site-config";
import styles from "./Memberships.module.css";

/**
 * "Member of" — infinite logo marquee, original colors.
 * Pure CSS: the list is rendered twice and the track slides by exactly one
 * copy (-50%), so the loop has no seam. The second copy is aria-hidden.
 * Pauses on hover/focus; with reduced motion it becomes a static, wrapping row.
 */
export default function Memberships() {
  const logos = siteConfig.memberships;
  const renderList = (hidden: boolean) => (
    <ul className={styles.list} aria-hidden={hidden || undefined}>
      {logos.map((m) => (
        <li key={m.short} className={styles.item}>
          <Image
            src={m.logo}
            alt={hidden ? "" : m.label}
            title={m.label}
            width={m.width}
            height={m.height}
            className={cn(styles.logo, m.width / m.height < 1.2 && styles.seal)}
            sizes="200px"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Panel tone="paper" pad="compact" className={styles.panel} aria-label="Industry memberships">
      <p className={styles.label}>Member of</p>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {renderList(false)}
          {renderList(true)}
        </div>
      </div>
    </Panel>
  );
}
