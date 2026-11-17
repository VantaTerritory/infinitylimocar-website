import ContactForm from "@/components/sections/company/ContactForm";
import layout from "@/components/sections/company/layout.module.css";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import PageHero from "@/components/sections/shared/PageHero";
import { CONTACT } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PATH = "/contact";

export const metadata = pageMetadata(PATH);

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`;

export default function Page() {
  const page = getPage(PATH);
  const { phone, tollFree, email, address, hours, legalName } = siteConfig;
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow={`Contact · ${hours}`}
        title={page.h1}
        lead={CONTACT.lead}
        image="/images/photos/hero-fleet-dc-dusk.webp"
        imageAlt="Infinity Limo Car fleet in Washington DC at dusk"
      />

      <div className={styles.row}>
        <Panel tone="onyx" aria-labelledby="reach-title" className={styles.details}>
          <Eyebrow tone="dark">Speak with our team</Eyebrow>
          <Heading level="h3" as="h2" id="reach-title">
            Available {hours}
          </Heading>
          <dl className={styles.list}>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </dd>
            </div>
            <div>
              <dt>Toll-free</dt>
              <dd>
                <a href={`tel:${tollFree.tel}`}>{tollFree.display}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>
                <address className={styles.address}>
                  {legalName}
                  <br />
                  {address.street}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </address>
              </dd>
            </div>
          </dl>
          <div className={styles.quote}>
            <p className={styles.quoteText}>Booking a trip? The quote form asks for everything dispatch needs.</p>
            <Button href="/get-a-quote" size="sm">
              {siteConfig.cta.quote}
            </Button>
          </div>
        </Panel>

        <Panel tone="paper" aria-label="Contact form" className={styles.formPanel}>
          <ContactForm />
          <ul className={styles.tips}>
            {CONTACT.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel tone="paper" pad="none" aria-labelledby="map-title" className={styles.mapPanel}>
        <div className={styles.mapHead}>
          <Heading level="h3" as="h2" id="map-title">
            Find our Springfield office
          </Heading>
          <a href={MAP_LINK} className={styles.mapLink} target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗<span className="srOnly"> (opens in a new tab)</span>
          </a>
        </div>
        <iframe
          src={MAP_SRC}
          title={`Map: ${siteConfig.name}, ${address.street}, ${address.city}, ${address.region}`}
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Panel>
    </main>
  );
}
