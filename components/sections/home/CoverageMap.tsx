import { WORLD_MAP, project } from "@/lib/data/world-dots";
import styles from "./AirportsCoverage.module.css";

/**
 * "Where we serve" as a dotted world map: Washington DC is the hub, routes fly
 * out to the cities served through affiliates. Tier = group (`data-tier`), so
 * hovering a region row in the list lights its routes (CSS :has()).
 * Decorative: the list next to it carries the content.
 */
const HUB = project(-77.04, 38.9);

const ROUTES = [
  { tier: 2, name: "New York", lon: -74, lat: 40.7, label: false },
  { tier: 2, name: "Boston", lon: -71.06, lat: 42.36, label: false },
  { tier: 2, name: "Toronto", lon: -79.4, lat: 43.7, label: false },
  { tier: 2, name: "Chicago", lon: -87.6, lat: 41.9, label: false },
  { tier: 2, name: "Atlanta", lon: -84.4, lat: 33.7, label: false },
  { tier: 2, name: "Miami", lon: -80.2, lat: 25.8, label: false },
  { tier: 2, name: "Dallas", lon: -96.8, lat: 32.8, label: false },
  { tier: 2, name: "Los Angeles", lon: -118.2, lat: 34.05, label: false },
  { tier: 2, name: "Vancouver", lon: -123.1, lat: 49.3, label: false },
  { tier: 3, name: "Europe", lon: -0.13, lat: 51.5, label: true },
  { tier: 3, name: "Middle East", lon: 55.3, lat: 25.2, label: true },
  { tier: 3, name: "Asia-Pacific", lon: 139.7, lat: 35.7, label: true },
] as const;

/** Quadratic arc from the hub, lifted in proportion to its length. */
function arc(x: number, y: number) {
  const mx = (HUB.x + x) / 2;
  const my = (HUB.y + y) / 2;
  const lift = Math.min(70, Math.hypot(x - HUB.x, y - HUB.y) * 0.32);
  return `M${HUB.x.toFixed(1)} ${HUB.y.toFixed(1)}Q${mx.toFixed(1)} ${(my - lift).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
}

export default function CoverageMap() {
  return (
    <svg className={styles.map} viewBox={`0 0 ${WORLD_MAP.width} ${WORLD_MAP.height}`} aria-hidden="true">
      <path className={styles.land} d={WORLD_MAP.dots} />
      {ROUTES.map((r) => {
        const p = project(r.lon, r.lat);
        const d = arc(p.x, p.y);
        const right = r.lon > -77 && r.lon < 120; // far-east labels sit left of the dot
        return (
          <g key={r.name} className={styles.route} data-tier={r.tier}>
            <path className={styles.routeLine} d={d} />
            <path className={styles.routeFlight} d={d} pathLength={100} />
            <circle className={styles.city} cx={p.x} cy={p.y} r="3" />
            {r.label ? (
              <text
                className={styles.cityLabel}
                x={p.x + (right ? 6 : -6)}
                y={p.y + 4}
                textAnchor={right ? "start" : "end"}
              >
                {r.name}
              </text>
            ) : null}
          </g>
        );
      })}
      <g className={styles.hubGroup} data-tier="1">
        <circle className={styles.hubPulse} cx={HUB.x} cy={HUB.y} r="6" />
        <circle className={styles.hub} cx={HUB.x} cy={HUB.y} r="5" />
        <text className={styles.hubLabel} x={HUB.x + 4} y={HUB.y + 22} textAnchor="middle">
          Washington DC
        </text>
      </g>
    </svg>
  );
}
