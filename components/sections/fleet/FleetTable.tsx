import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { FLEET } from "@/lib/data/fleet";
import { BEST_FOR } from "./content";
import { BagIcon, PassengerIcon } from "./FleetIcons";
import styles from "./FleetTable.module.css";

/** Side-by-side comparison. Under 640px each row stacks into a labeled block
 *  (no horizontal scroll on phones). */
export default function FleetTable() {
  return (
    <Panel tone="paper" aria-labelledby="compare-title">
      <SectionHead id="compare-title" eyebrow="At a glance" title="Compare the fleet" />
      <table className={styles.table}>
        <caption className="srOnly">Passengers, luggage and best use for each vehicle class</caption>
        <thead>
          <tr>
            <th scope="col">Vehicle</th>
            <th scope="col">
              <span className={styles.colIcon}>
                <PassengerIcon className={styles.icon} />
                Passengers
              </span>
            </th>
            <th scope="col">
              <span className={styles.colIcon}>
                <BagIcon className={styles.icon} />
                Bags
              </span>
            </th>
            <th scope="col">Best for</th>
          </tr>
        </thead>
        <tbody>
          {FLEET.map((v) => (
            <tr key={v.slug}>
              <th scope="row" className={styles.vehicle}>
                <a href={`#${v.slug}`}>{v.name}</a>
              </th>
              <td data-label="Passengers">{v.passengers}</td>
              <td data-label="Bags">{v.bags}</td>
              <td data-label="Best for" className={styles.best}>
                {BEST_FOR[v.slug] ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>
        Capacities are maximums for the class; the confirmed model and luggage fit depend on your itinerary.
      </p>
    </Panel>
  );
}
