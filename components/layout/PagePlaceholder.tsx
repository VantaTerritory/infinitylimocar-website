import Panel from "@/components/ui/Panel";
import PageHero from "@/components/sections/shared/PageHero";
import { getPage } from "@/lib/seo/pages";
import styles from "./PagePlaceholder.module.css";

/** Temporary body for routes not built yet. Real H1/description from the registry. */
export default function PagePlaceholder({ path }: { path: string }) {
  const page = getPage(path);
  return (
    <main className={`frame ${styles.stack}`}>
      <PageHero title={page.h1} lead={page.description} />
      <Panel tone="paper">
        <p className={styles.note}>Content for this page is in progress.</p>
      </Panel>
    </main>
  );
}
