import CardGrid from "@/components/sections/company/CardGrid";
import Checklist from "@/components/sections/company/Checklist";
import StoryPanel from "@/components/sections/company/StoryPanel";
import layout from "@/components/sections/company/layout.module.css";
import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import Faq from "@/components/sections/shared/Faq";
import PageHero from "@/components/sections/shared/PageHero";
import { AFFILIATE } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";

const PATH = "/affiliate-program";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  const actions = (
    <>
      <Button href="/contact">Contact partnerships</Button>
      <Button href={`tel:${siteConfig.phone.tel}`} variant="outline" tone="dark">
        {siteConfig.cta.call}
      </Button>
    </>
  );
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="Affiliate & partner program"
        title={page.h1}
        lead={AFFILIATE.lead}
        image="/images/photos/motorcoach-van-hool.webp"
        imageAlt="Van Hool motor coach used for Infinity Limo Car group programs"
        actions={actions}
      />
      <StoryPanel
        id="coordination-title"
        eyebrow="Operator to operator"
        title="Built for responsible coordination"
        paragraphs={AFFILIATE.intro}
        image="/images/photos/sprinters-dc-street.webp"
        imageAlt="Mercedes Sprinter vans on a Washington DC street"
      />
      <CardGrid
        id="share-title"
        tone="sand"
        eyebrow="What to share"
        title="Information for a meaningful review"
        items={AFFILIATE.share}
      />
      <CardGrid id="process-title" tone="onyx" eyebrow="The process" title="How the introduction works" items={AFFILIATE.steps} numbered />
      <Panel tone="paper" aria-labelledby="expectations-title">
        <SectionHead
          id="expectations-title"
          eyebrow="Client care"
          title="What we expect from partners"
          lead="Within the DMV, trips are served directly or through partners depending on the confirmed itinerary; beyond it, suitable trips go to reviewed operators."
        />
        <Checklist items={AFFILIATE.expectations} columns={2} />
      </Panel>
      <Faq title="Affiliate Program FAQ" items={AFFILIATE.faq} />
    </main>
  );
}
