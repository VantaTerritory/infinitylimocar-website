import { cn } from "@/lib/utils/cn";
import ArrowIcon from "./ArrowIcon";
import styles from "./ArrowDisc.module.css";

/** The round ↗ used on link cards. Decorative: the card itself is the link. */
export default function ArrowDisc({
  tone = "paper",
  className,
}: {
  tone?: "paper" | "gold" | "onyx";
  className?: string;
}) {
  return (
    <span className={cn(styles.disc, styles[tone], className)} aria-hidden="true">
      <ArrowIcon size={14} />
    </span>
  );
}
