import FleetTable from "@/components/sections/fleet/FleetTable";
import HowWeChoose from "@/components/sections/fleet/HowWeChoose";
import VehicleGrid from "@/components/sections/fleet/VehicleGrid";
import { FLEET_FAQ, FLEET_INTRO } from "@/components/sections/fleet/content";
import layout from "@/components/sections/company/layout.module.css";
import Faq from "@/components/sections/shared/Faq";
import PageHero from "@/components/sections/shared/PageHero";
import { getPage, pageMetadata } from "@/lib/seo/pages";

const PATH = "/fleet";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="Fleet · Sedans to motor coaches"
        title={page.h1}
        lead={FLEET_INTRO}
        image="/images/photos/escalade-iq-real.webp"
        imageAlt="Black Cadillac Escalade IQ from the Infinity fleet at a building entrance"
      />
      <VehicleGrid />
      <FleetTable />
      <HowWeChoose />
      <Faq title="Choosing the Right Vehicle" items={FLEET_FAQ} />
    </main>
  );
}
