import Link from "next/link";
import Panel from "@/components/ui/Panel";
import type { LegalDoc } from "@/lib/content/legal";
import { siteConfig } from "@/lib/site-config";
import styles from "./LegalDocument.module.css";

/** Readable legal layout: sticky contents on desktop, numbered sections, and
 *  the real contact block (from site-config) at the end. */
export default function LegalDocument({ doc, related }: { doc: LegalDoc; related: { href: string; label: string } }) {
  const { email, phone, address, legalName } = siteConfig;
  return (
    <Panel tone="paper" className={styles.panel} aria-label="Document">
      <nav className={styles.toc} aria-label="On this page">
        <p className={styles.tocTitle}>On this page</p>
        <ol>
          {doc.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ol>
      </nav>

      <div className={styles.body}>
        {doc.intro.map((p) => (
          <p key={p} className={styles.intro}>
            {p}
          </p>
        ))}
        <ol className={styles.sections}>
          {doc.sections.map((s) => (
            <li key={s.id} className={styles.section}>
              <h2 id={s.id} className={styles.h2}>
                {s.title}
              </h2>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.list ? (
                <ul className={styles.list}>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {s.after?.map((p) => <p key={p}>{p}</p>)}
            </li>
          ))}
          <li className={styles.section}>
            <h2 id="contact" className={styles.h2}>
              Contact us
            </h2>
            <p>Questions about this page? Contact {legalName}:</p>
            <address className={styles.address}>
              {address.street}, {address.city}, {address.region} {address.postalCode}
              <br />
              Email: <a href={`mailto:${email}`}>{email}</a>
              <br />
              Phone: <a href={`tel:${phone.tel}`}>{phone.display}</a>
            </address>
            <p>
              See also: <Link href={related.href}>{related.label}</Link>.
            </p>
          </li>
        </ol>
      </div>
    </Panel>
  );
}
