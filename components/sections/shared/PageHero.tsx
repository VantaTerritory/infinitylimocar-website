import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils/cn";
import styles from "./PageHero.module.css";

/**
 * Hero for every inner page: onyx panel, eyebrow, H1 (h1 token), lead and the
 * two standard CTAs. With `image` the photo fills the right side (desktop) or
 * sits behind a scrim (mobile).
 */
export default function PageHero({
  eyebrow = siteConfig.serviceArea,
  title,
  lead,
  image,
  imageAlt = "",
  actions,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  /** Replace the default Quote + Call buttons. Pass null to hide them. */
  actions?: ReactNode | null;
  children?: ReactNode;
}) {
  return (
    <Panel tone="onyx" className={cn(styles.hero, image && styles.withImage)} aria-labelledby="page-title">
      {image ? (
        <div className={styles.media}>
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1000px) 55vw, 100vw" className={styles.img} />
        </div>
      ) : null}
      <div className={styles.content}>
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <Heading level="h1" id="page-title">
          {title}
        </Heading>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
        {actions === null ? null : (
          <div className={styles.actions}>
            {actions ?? (
              <>
                <Button href="/get-a-quote">{siteConfig.cta.quote}</Button>
                <Button href={`tel:${siteConfig.phone.tel}`} variant="outline" tone="dark">
                  {siteConfig.cta.call}
                </Button>
              </>
            )}
          </div>
        )}
        {children}
      </div>
    </Panel>
  );
}
