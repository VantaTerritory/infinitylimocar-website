import type { ReactNode } from "react";
import Media from "@/components/ui/Media";
import Panel, { isDarkTone, type PanelTone } from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { cn } from "@/lib/utils/cn";
import styles from "./StoryPanel.module.css";

/** Text column + real photo, side by side from 1000px. `reverse` puts the photo first. */
export default function StoryPanel({
  id,
  tone = "paper",
  eyebrow,
  title,
  paragraphs = [],
  image,
  imageAlt,
  reverse = false,
  children,
}: {
  id: string;
  tone?: PanelTone;
  eyebrow?: ReactNode;
  title: ReactNode;
  paragraphs?: readonly string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <Panel tone={tone} aria-labelledby={id} className={cn(styles.panel, reverse && styles.reverse)}>
      <div className={styles.text}>
        <SectionHead id={id} eyebrow={eyebrow} title={title} tone={isDarkTone(tone) ? "dark" : "light"} className={styles.head} />
        {paragraphs.map((p) => (
          <p key={p} className={styles.p}>
            {p}
          </p>
        ))}
        {children}
      </div>
      <Media src={image} alt={imageAlt} className={styles.photo} sizes="(min-width: 1000px) 45vw, 100vw" />
    </Panel>
  );
}
