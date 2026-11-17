import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import styles from "./not-found.module.css";

export const metadata: Metadata = { title: "Page not found | Infinity Limo Car" };

export default function NotFound() {
  return (
    <main className="frame">
      <Panel tone="paper" className={styles.panel}>
        <Heading level="h1">Page not found</Heading>
        <p className={styles.text}>The page you are looking for has moved or no longer exists.</p>
        <div className={styles.actions}>
          <Button href="/" variant="dark">
            Back to home
          </Button>
          <Button href="/get-a-quote">Request a Quote</Button>
        </div>
      </Panel>
    </main>
  );
}
