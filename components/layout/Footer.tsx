import Link from "next/link";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Logo from "@/components/ui/Logo";
import Panel from "@/components/ui/Panel";
import { FOOTER_NAV, LEGAL_NAV } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

/** Closing panel on every page: quote CTA band + sitemap columns. */
export default function Footer() {
  const { address, phone, email } = siteConfig;
  return (
    <footer className="frame">
      <Panel tone="onyx" as="div" className={styles.footer}>
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <Eyebrow tone="dark">Let us plan the journey</Eyebrow>
            <Heading level="h2" as="p">
              Request a <span className="strong">Quote</span>
            </Heading>
          </div>
          <div className={styles.ctaActions}>
            <Button href={`tel:${phone.tel}`} variant="outline" tone="dark">
              {siteConfig.cta.call}
            </Button>
            <Button href="/get-a-quote" variant="primary">
              {siteConfig.cta.quote} ↗
            </Button>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="legacy" onDark className={styles.logo} />
            <address className={styles.address}>
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </address>
          </div>

          {FOOTER_NAV.map((col) => (
            <nav key={col.title.label} aria-label={col.title.label} className={styles.col}>
              <p className={styles.colTitle}>{col.title.label}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.col}>
            <p className={styles.colTitle}>Contact</p>
            <ul>
              <li>
                <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </li>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <Link href="/get-a-quote">{siteConfig.cta.quoteShort}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul>
            {LEGAL_NAV.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </footer>
  );
}
