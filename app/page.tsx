import AirportsCoverage from "@/components/sections/home/AirportsCoverage";
import Faq from "@/components/sections/shared/Faq";
import FleetOptions from "@/components/sections/home/FleetOptions";
import Hero from "@/components/sections/home/Hero";
import Itineraries from "@/components/sections/home/Itineraries";
import Memberships from "@/components/sections/home/Memberships";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import Standard from "@/components/sections/home/Standard";
import Stats from "@/components/sections/home/Stats";
import Testimonials from "@/components/sections/home/Testimonials";
import { HOME_FAQ } from "@/lib/data/faq";
import { pageMetadata } from "@/lib/seo/pages";
import styles from "./page.module.css";

export const metadata = pageMetadata("/");

/** Section order = Figma "Home · Wireframe Final". */
export default function HomePage() {
  return (
    <main className={`frame ${styles.stack}`}>
      <Hero />
      <Stats />
      <Memberships />
      <ServicesGrid />
      <Itineraries />
      <FleetOptions />
      <AirportsCoverage />
      <Standard />
      <Testimonials />
      <Faq items={HOME_FAQ} />
    </main>
  );
}
