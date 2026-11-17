import Image from "next/image";
import QuoteWidget from "@/components/booking/QuoteWidget";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import { siteConfig } from "@/lib/site-config";
import styles from "./Hero.module.css";

/**
 * Home hero. Photo: the fleet at dusk over the DC skyline (client's redesign
 * asset). Swap for the background video (fleet through DC, 15–20 s loop,
 * muted, vertical cut on mobile) when delivered; this image becomes its poster.
 */
export default function Hero() {
  return (
    <Panel tone="onyx" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/photos/hero-fleet-dc-dusk.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 1230px, 100vw"
          className={styles.photo}
        />
      </div>

      <div className={styles.content}>
        <Eyebrow tone="dark">
          <span className={styles.areaLong}>Washington DC • Nationwide • Worldwide</span>
          <span className={styles.areaShort}>DC • Nationwide • Worldwide</span>
        </Eyebrow>
        <Heading level="display" id="hero-title" className={styles.title}>
          Luxury Car Service &amp; <span className="strong">Chauffeur Service</span>
        </Heading>
        <p className={styles.tagline}>Thoughtful · Precise · Personal</p>
        <p className={styles.lead}>
          Airport transfers, corporate and executive travel, hourly and point-to-point service, private
          occasions and group transportation across Washington DC, Northern Virginia and Maryland.
        </p>
        <div className={styles.actions}>
          <Button href="/get-a-quote">{siteConfig.cta.quote}</Button>
          <Button href={`tel:${siteConfig.phone.tel}`} variant="outline" tone="dark">
            {siteConfig.cta.call}
          </Button>
        </div>
      </div>

      <div className={styles.widget}>
        <QuoteWidget />
      </div>
    </Panel>
  );
}
