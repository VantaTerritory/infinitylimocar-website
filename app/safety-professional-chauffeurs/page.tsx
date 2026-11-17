import CardGrid from "@/components/sections/company/CardGrid";
import Checklist from "@/components/sections/company/Checklist";
import StoryPanel from "@/components/sections/company/StoryPanel";
import layout from "@/components/sections/company/layout.module.css";
import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import PageHero from "@/components/sections/shared/PageHero";
import { SAFETY } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PATH = "/safety-professional-chauffeurs";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  const { usdot, wmatc } = siteConfig.credentials;
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="Safety · Chauffeurs · Operations"
        title={page.h1}
        lead={SAFETY.lead}
        image="/images/photos/suburban-library-of-congress.webp"
        imageAlt="Infinity Limo Car Chevrolet Suburban outside the Library of Congress"
      />
      <StoryPanel
        id="chauffeurs-title"
        eyebrow="Chauffeur standards"
        title="Screened, trained and accountable"
        paragraphs={[SAFETY.chauffeurIntro]}
        image="/images/photos/chauffeurs-escalade-lineup.webp"
        imageAlt="Infinity Limo Car chauffeurs in suits beside the Cadillac Escalade fleet"
        reverse
      >
        <Checklist items={SAFETY.chauffeurChecks} />
      </StoryPanel>
      <CardGrid
        id="operations-title"
        tone="onyx"
        eyebrow="Fleet & operations"
        title="Behind every trip"
        items={SAFETY.operations}
        columns={4}
      />
      <Panel tone="sand" aria-labelledby="changes-title" className={styles.split}>
        <div className={styles.col}>
          <SectionHead id="changes-title" eyebrow="Dispatch" title={SAFETY.changes.title} />
          {SAFETY.changes.paragraphs.map((p) => (
            <p key={p} className={styles.p}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{SAFETY.groupChecklist.title}</h3>
          <p className={styles.p}>{SAFETY.groupChecklist.intro}</p>
          <Checklist items={SAFETY.groupChecklist.items} />
        </div>
      </Panel>
      <Panel tone="paper" pad="compact" aria-label="Operating credentials" className={styles.credentials}>
        <p className={styles.credText}>
          <strong>USDOT {usdot}</strong> · <strong>WMATC {wmatc}</strong> · Fully licensed and insured
        </p>
        <div className={styles.credActions}>
          <Button href="/memberships-affiliations" variant="outline" size="sm">
            Credentials & memberships →
          </Button>
          <Button href="/contact" variant="dark" size="sm">
            Request a COI
          </Button>
        </div>
      </Panel>
    </main>
  );
}
