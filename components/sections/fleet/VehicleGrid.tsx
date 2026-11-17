import Image from "next/image";
import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { FLEET } from "@/lib/data/fleet";
import { prefillQuery } from "@/lib/data/quote";
import { BagIcon, PassengerIcon } from "./FleetIcons";
import styles from "./VehicleGrid.module.css";

/**
 * The ten vehicle classes. Background-removed studio shots sit on the
 * ivory "vehicle stage" (--vehicle-stage) with object-fit: contain. Each card carries the vehicle slug
 * as its id (/fleet/#sedan) until /our-fleet/<slug> detail pages exist.
 */
export default function VehicleGrid() {
  return (
    <Panel tone="sand" aria-labelledby="vehicles-title">
      <SectionHead
        id="vehicles-title"
        eyebrow="Vehicle options"
        title={
          <>
            Ten vehicle classes, <span className="strong">one standard</span>
          </>
        }
        lead="Compare passengers and luggage, then tell us your preference. We confirm the exact model for your trip."
      />
      <ul className={styles.grid}>
        {FLEET.map((v, i) => (
          <li key={v.slug}>
            <article id={v.slug} className={styles.card} aria-labelledby={`${v.slug}-name`}>
              <div className={styles.media}>
                <Image
                  src={v.image}
                  alt={`${v.name} — ${v.models}`}
                  fill
                  sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className={styles.img}
                />
                <span className={styles.index} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.body}>
                <h3 id={`${v.slug}-name`} className={styles.name}>
                  {v.name}
                </h3>
                <p className={styles.models}>{v.models}</p>
                <ul className={styles.specs} aria-label="Capacity">
                  <li title="Passengers">
                    <PassengerIcon className={styles.icon} />
                    {v.passengers}
                    <span className="srOnly"> passengers</span>
                  </li>
                  <li title="Bags">
                    <BagIcon className={styles.icon} />
                    {v.bags}
                    <span className="srOnly">{v.bags === "1" ? " bag" : " bags"}</span>
                  </li>
                </ul>
                <p className={styles.text}>{v.text}</p>
                <Button
                  href={`/get-a-quote?${prefillQuery({ vehicle_category: v.quoteCategory })}`}
                  variant="outline"
                  size="sm"
                  className={styles.cta}
                >
                  Request this vehicle<span className="srOnly">: {v.name}</span>
                </Button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
