import layout from "@/components/sections/company/layout.module.css";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import PageHero from "@/components/sections/shared/PageHero";
import { PRIVACY } from "@/lib/content/legal";
import { getPage, pageMetadata } from "@/lib/seo/pages";

const PATH = "/privacy-and-policy";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero eyebrow="Legal" title={page.h1} lead={page.description} actions={null} />
      <LegalDocument doc={PRIVACY} related={{ href: "/terms-and-conditions", label: "Terms & Conditions" }} />
    </main>
  );
}
