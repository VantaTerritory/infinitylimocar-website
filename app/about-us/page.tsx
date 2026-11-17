import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import CardGrid from "@/components/sections/company/CardGrid";
import StoryPanel from "@/components/sections/company/StoryPanel";
import layout from "@/components/sections/company/layout.module.css";
import Stats from "@/components/sections/home/Stats";
import PageHero from "@/components/sections/shared/PageHero";
import { ABOUT } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PATH = "/about-us";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="About · Springfield, VA"
        title={page.h1}
        lead={ABOUT.lead}
        image="/images/photos/union-station-escalades.webp"
        imageAlt="Infinity Limo Car Cadillac Escalades outside Washington Union Station"
      />
      <Stats />
      <StoryPanel
        id="who-title"
        eyebrow="Who we are"
        title={ABOUT.who.title}
        paragraphs={ABOUT.who.paragraphs}
        image="/images/photos/chauffeurs-escalade-lineup.webp"
        imageAlt="Infinity Limo Car chauffeurs standing beside the Cadillac Escalade fleet"
      >
        <dl className={styles.facts}>
          <div>
            <dt>Company</dt>
            <dd>{siteConfig.legalName}</dd>
          </div>
          <div>
            <dt>Office</dt>
            <dd>
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </dd>
          </div>
          <div>
            <dt>Operating authority</dt>
            <dd>
              USDOT {siteConfig.credentials.usdot} · WMATC {siteConfig.credentials.wmatc}
            </dd>
          </div>
        </dl>
      </StoryPanel>
      <CardGrid id="mission-title" tone="onyx" eyebrow="What drives us" title="Mission, vision and goals" items={ABOUT.pillars} />
      <CardGrid
        id="services-title"
        tone="sand"
        eyebrow="What we do"
        title="Chauffeured transportation for every kind of trip"
        lead={ABOUT.reach}
        items={ABOUT.services}
        action={
          <Button href="/services" variant="outline" size="sm">
            All services →
          </Button>
        }
      />
      <CardGrid
        id="trust-title"
        eyebrow="Why clients trust us"
        title="Standards you can check"
        items={ABOUT.trust}
      >
        <ul className={styles.members} aria-label="Industry memberships">
          {siteConfig.memberships.map((m) => (
            <li key={m.short} title={m.label}>
              <Chip variant="filled">{m.short}</Chip>
            </li>
          ))}
        </ul>
      </CardGrid>
    </main>
  );
}
