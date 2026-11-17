import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Media from "@/components/ui/Media";
import Panel from "@/components/ui/Panel";
import { siteConfig } from "@/lib/site-config";
import { CHOOSE_STEPS } from "./content";
import styles from "./HowWeChoose.module.css";

/** Onyx panel in the home's "Infinity Standard" layout: real photo + four criteria. */
export default function HowWeChoose() {
  return (
    <Panel tone="onyx" aria-labelledby="choose-title">
      <header className={styles.head}>
        <Eyebrow tone="dark">How we choose the vehicle</Eyebrow>
        <Heading level="h2" id="choose-title">
          The right vehicle starts with <span className="strong">your itinerary</span>
        </Heading>
        <p className={styles.intro}>
          Tell us four things and dispatch matches the vehicle — or the combination of vehicles — to the trip.
        </p>
      </header>
      <div className={styles.grid}>
        <Media
          src="/images/photos/sprinters-dc-street.webp"
          alt="Infinity Limo Car Mercedes Sprinter vans parked on a Washington DC street"
          tone="dark"
          className={styles.photo}
          sizes="(min-width: 1000px) 33vw, 100vw"
        />
        <ol className={styles.steps}>
          {CHOOSE_STEPS.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.index} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.actions}>
        <Button href="/get-a-quote">{siteConfig.cta.quote}</Button>
        <Button href="/group-transportation-in-washington-dc" variant="outline" tone="dark">
          Plan group transportation
        </Button>
      </div>
    </Panel>
  );
}
