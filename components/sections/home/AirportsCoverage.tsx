import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import { AIRPORTS, AIRPORT_EXTRAS, COVERAGE } from "@/lib/data/coverage";
import CoverageMap from "./CoverageMap";
import styles from "./AirportsCoverage.module.css";

/** Two panels side by side: airports (oxblood accent) + where we serve. */
export default function AirportsCoverage() {
  return (
    <div className={styles.row}>
      <Panel tone="oxblood" className={styles.airports} aria-labelledby="airports-title">
        {/* Decorative flight path: a plane flies the dotted arc over the title. */}
        <svg className={styles.flight} viewBox="0 0 200 130" aria-hidden="true">
          <path id="airports-arc" className={styles.arc} d="M8 124C50 64 120 22 192 12" />
          <circle className={styles.arcEnd} cx="8" cy="124" r="3" />
          <circle className={styles.arcEnd} cx="192" cy="12" r="3" />
          <g className={styles.plane}>
            <path d="M9 0 3-3.4V-7.6a1.1 1.1 0 0 0-2.2 0V-3.4L-5.2 0v1.1l6-1.9v3.2L-.7 3.7v1.1L1.9 4l2.6.8V3.7L3 2.4V-.8l6 1.9z" transform="rotate(90)" />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1">
              <mpath href="#airports-arc" />
            </animateMotion>
          </g>
        </svg>

        <p className={styles.boardHead}>
          <span className={styles.live} aria-hidden="true" />
          Arrivals · Flight tracking · Meet &amp; greet
        </p>
        <Heading level="h3" id="airports-title" as="h2" className={styles.title}>
          Airports — DCA, IAD &amp; BWI
        </Heading>
        <ul className={styles.airportList}>
          {AIRPORTS.map((a) => (
            <li key={a.code}>
              <Link href={a.href} className={styles.airport}>
                {/* Boarding-pass stub: code on the tear-off side of the ticket. */}
                <span className={styles.stub}>
                  <span className={styles.stubLabel}>Airport</span>
                  <span className={styles.code}>{a.code}</span>
                </span>
                <span className={styles.name}>
                  <strong>{a.name}</strong>
                  <span className={styles.desc}>{a.text}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.extras}>
          {AIRPORT_EXTRAS.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className={styles.airport}>
                <span className={styles.stub}>
                  <span className={styles.stubLabel}>{x.kicker}</span>
                  <span className={styles.code}>{x.code}</span>
                </span>
                <span className={styles.name}>
                  <strong>{x.name}</strong>
                  <span className={styles.desc}>{x.text}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel tone="paper" className={styles.coverage} aria-labelledby="coverage-title">
        <Heading level="h3" id="coverage-title" as="h2" className={styles.title}>
          Where we serve
        </Heading>
        <dl className={styles.regions}>
          {COVERAGE.map((c) => (
            <div key={c.region} className={styles.region}>
              <dt>
                <span className={styles.regionName}>{c.region}</span>
                <span className={styles.mode}>{c.mode}</span>
              </dt>
              <dd>{c.places}</dd>
            </div>
          ))}
        </dl>
        <CoverageMap />
      </Panel>
    </div>
  );
}
