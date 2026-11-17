import { Suspense } from "react";
import QuoteForm from "@/components/booking/QuoteForm";
import QuoteFormFromParams from "@/components/booking/QuoteFormFromParams";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Panel from "@/components/ui/Panel";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PATH = "/get-a-quote";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className="frame">
      <div className={styles.layout}>
        <Panel tone="onyx" className={styles.intro} aria-labelledby="page-title">
          <Eyebrow tone="dark">{siteConfig.serviceArea}</Eyebrow>
          <Heading level="h1" id="page-title">
            {page.h1}
          </Heading>
          <p className={styles.tagline}>Thoughtful. Precise. Personal.</p>
          <ul className={styles.notes}>
            <li>A quote request is not a confirmed reservation. No payment is collected.</li>
            <li>Dispatch confirms vehicle availability, luggage fit and flight details with you.</li>
            <li>
              Prefer to talk? Call <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a> ·{" "}
              {siteConfig.hours}.
            </li>
          </ul>
        </Panel>

        <Panel tone="paper" className={styles.formPanel} aria-label="Quote request form">
          {/* The fallback is the same form without prefill; the client render
              with the query string replaces it. */}
          <Suspense fallback={<QuoteForm />}>
            <QuoteFormFromParams />
          </Suspense>
        </Panel>
      </div>
    </main>
  );
}
