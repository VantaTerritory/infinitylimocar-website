import CardGrid from "@/components/sections/company/CardGrid";
import layout from "@/components/sections/company/layout.module.css";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/shared/PageHero";
import { THANK_YOU } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";

const PATH = "/thank-you";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow={THANK_YOU.eyebrow}
        title={page.h1}
        lead={
          <>
            {THANK_YOU.lead} For urgent trips call <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>.
          </>
        }
        actions={
          <>
            <Button href={`tel:${siteConfig.phone.tel}`}>{siteConfig.cta.call}</Button>
            <Button href="/fleet" variant="outline" tone="dark">
              Explore the fleet
            </Button>
          </>
        }
      />
      <CardGrid id="next-title" eyebrow="What happens next" title="From request to reservation" items={THANK_YOU.steps} numbered />
    </main>
  );
}
