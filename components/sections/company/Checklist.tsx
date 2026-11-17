import { cn } from "@/lib/utils/cn";
import styles from "./Checklist.module.css";

/** Ruled list with a gold tick: screening steps, planning items, expectations. */
export default function Checklist({
  items,
  columns = 1,
  className,
}: {
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul className={cn(styles.list, columns === 2 && styles.two, className)}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
