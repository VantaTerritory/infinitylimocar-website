import Link from "next/link";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { FLEET } from "@/lib/data/fleet";
import styles from "./VehicleFit.module.css";

/** Vehicles that suit the service, from the fleet data (studio renders). */
export default function VehicleFit({
  title,
  lead,
  slugs,
}: {
  title: string;
  lead?: string;
  slugs: readonly string[];
}) {
  const vehicles = slugs
    .map((s) => FLEET.find((v) => v.slug === s))
    .filter((v): v is (typeof FLEET)[number] => Boolean(v));

  return (
    <Panel tone="paper" aria-labelledby="vehicles-title">
      <SectionHead
        id="vehicles-title"
        eyebrow="Vehicles that fit"
        title={title}
        lead={lead}
        action={
          <Button href="/fleet" variant="outline" size="sm">
            Fleet overview →
          </Button>
        }
      />
      <ul className={styles.grid}>
        {vehicles.map((v) => (
          <li key={v.slug}>
            <Link href="/fleet" className={styles.card}>
              <Media
                src={v.image}
                alt={v.name}
                className={styles.media}
                sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <h3 className={styles.title}>{v.name}</h3>
              <p className={styles.capacity}>
                {v.passengers} passengers · {v.bags} bags
              </p>
              <p className={styles.text}>{v.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
