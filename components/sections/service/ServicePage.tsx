import Faq from "@/components/sections/shared/Faq";
import PageHero from "@/components/sections/shared/PageHero";
import { getServiceContent } from "@/lib/content/services";
import { getPage } from "@/lib/seo/pages";
import CardGrid from "./CardGrid";
import LinkGrid from "./LinkGrid";
import ServiceIntro from "./ServiceIntro";
import Steps from "./Steps";
import VehicleFit from "./VehicleFit";
import styles from "./ServicePage.module.css";

/**
 * Shared template for every service, corporate, group, airport, area and
 * nationwide route. Blocks render only when the page's content defines them.
 * Order: hero → intro → children (hubs) → use cases → steps → vehicles →
 * related → FAQ. The quote band lives in the global footer.
 */
export default function ServicePage({ path }: { path: string }) {
  const page = getPage(path);
  const c = getServiceContent(path);

  return (
    <main className={`frame ${styles.stack}`}>
      <PageHero
        eyebrow={c.eyebrow}
        title={page.h1}
        lead={c.lead}
        image={c.image?.src}
        imageAlt={c.image?.alt}
      />
      <ServiceIntro {...c.intro} />
      {c.children ? (
        <LinkGrid
          id="children-title"
          eyebrow={c.children.eyebrow}
          title={c.children.title}
          lead={c.children.lead}
          links={c.children.links}
          featured
        />
      ) : null}
      {c.useCases ? <CardGrid {...c.useCases} /> : null}
      {c.steps ? <Steps {...c.steps} /> : null}
      {c.vehicles ? <VehicleFit {...c.vehicles} /> : null}
      {c.related.length ? (
        <LinkGrid
          id="related-title"
          eyebrow="Related services"
          title="Continue planning"
          links={c.related.map((href) => ({ href }))}
          tone="sand"
        />
      ) : null}
      {c.faq.length ? <Faq title={c.faqTitle} items={c.faq} /> : null}
    </main>
  );
}
