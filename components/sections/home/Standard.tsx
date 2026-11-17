import Heading from "@/components/ui/Heading";
import Media from "@/components/ui/Media";
import Panel from "@/components/ui/Panel";
import Eyebrow from "@/components/ui/Eyebrow";
import Link from "next/link";
import { STANDARD_INTRO, STANDARD_PILLARS } from "@/lib/data/standard";
import { cn } from "@/lib/utils/cn";
import styles from "./Standard.module.css";

export default function Standard() {
  return (
    <Panel tone="onyx" aria-labelledby="standard-title">
      <header className={styles.head}>
        <Eyebrow tone="dark">The Infinity Standard</Eyebrow>
        <Heading level="h2" id="standard-title">
          Professional Car Service, Limo Service &amp; <span className="strong">Chauffeur Service</span>
        </Heading>
        <p className={styles.intro}>{STANDARD_INTRO}</p>
      </header>
      <div className={styles.grid}>
        <Media
          tone="dark"
          src="/images/photos/chauffeurs-escalade-lineup.webp"
          alt="Infinity Limo Car chauffeurs standing beside the Cadillac Escalade fleet"
          className={styles.photo}
          sizes="(min-width: 1000px) 33vw, 100vw"
        />
        <ul className={styles.pillars}>
          {STANDARD_PILLARS.map((p) => (
            <li key={p.title} className={cn(styles.pillar, "highlight" in p && p.highlight && styles.highlight)}>
              <h3 className={styles.pillarTitle}>
                {"href" in p ? <Link href={p.href}>{p.title} ↗</Link> : p.title}
              </h3>
              <p className={styles.pillarText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
