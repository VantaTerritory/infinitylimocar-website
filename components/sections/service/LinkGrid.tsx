import LinkCard from "@/components/ui/LinkCard";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { getPage } from "@/lib/seo/pages";
import { cn } from "@/lib/utils/cn";
import styles from "./LinkGrid.module.css";

/**
 * Grid of LinkCards to registered routes: hub children and related services.
 * Title = registry label; line = the given text or the registry description.
 * `featured` makes the first card onyx, like the home services grid.
 */
export default function LinkGrid({
  id,
  eyebrow,
  title,
  lead,
  links,
  featured = false,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  links: readonly { href: string; text?: string }[];
  featured?: boolean;
  tone?: "paper" | "sand";
}) {
  const cardTone = tone === "paper" ? "sand" : "paper";
  return (
    <Panel tone={tone} aria-labelledby={id}>
      <SectionHead id={id} eyebrow={eyebrow} title={title} lead={lead} />
      <ul className={cn(styles.grid, links.length === 4 && styles.four)}>
        {links.map((l, i) => {
          const page = getPage(l.href);
          return (
            <li key={l.href}>
              <LinkCard
                href={l.href}
                title={page.label}
                text={l.text ?? page.description}
                tone={featured && i === 0 ? "onyx" : cardTone}
                className={styles.card}
              />
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
