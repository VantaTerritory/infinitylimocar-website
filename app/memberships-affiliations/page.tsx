import MembershipGrid from "@/components/sections/company/MembershipGrid";
import layout from "@/components/sections/company/layout.module.css";
import Faq from "@/components/sections/shared/Faq";
import PageHero from "@/components/sections/shared/PageHero";
import { MEMBERSHIPS } from "@/lib/content/company";
import { getPage, pageMetadata } from "@/lib/seo/pages";

const PATH = "/memberships-affiliations";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="Credentials · Associations · Community"
        title={page.h1}
        lead={MEMBERSHIPS.lead}
        image="/images/photos/corporate-cadillac-capitol.webp"
        imageAlt="Black Cadillac sedan in front of the U.S. Capitol"
      />
      <MembershipGrid
        id="credentials-title"
        tone="onyx"
        eyebrow="Operating credentials"
        title="Identifiers you can verify"
        lead="Regulatory numbers and public ratings are operating information, not endorsements."
        items={MEMBERSHIPS.credentials}
      />
      <MembershipGrid
        id="associations-title"
        eyebrow="Chauffeured transportation"
        title="Industry associations"
        lead="The operator communities where we exchange practices with other chauffeured transportation companies."
        items={MEMBERSHIPS.associations}
      />
      <MembershipGrid
        id="travel-title"
        tone="sand"
        eyebrow="Business travel & meetings"
        title="Where travel managers and planners meet"
        items={MEMBERSHIPS.travel}
      />
      <MembershipGrid
        id="local-title"
        eyebrow="Chambers, hospitality & tourism"
        title="Rooted in the DC region"
        lead="Listings and memberships show participation, not a recommendation by these organizations."
        items={MEMBERSHIPS.local}
        compact
      />
      <Faq title="Credentials & Memberships FAQ" items={MEMBERSHIPS.faq} />
    </main>
  );
}
