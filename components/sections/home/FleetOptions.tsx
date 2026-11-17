import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import FleetCarousel from "./FleetCarousel";

export default function FleetOptions() {
  return (
    <Panel tone="paper" aria-labelledby="fleet-title">
      <SectionHead
        id="fleet-title"
        eyebrow="Our fleet"
        title="Luxury Car Service & Group Vehicle Options"
        action={
          <Button href="/fleet" variant="outline" size="sm">
            Fleet overview →
          </Button>
        }
      />
      <FleetCarousel />
    </Panel>
  );
}
