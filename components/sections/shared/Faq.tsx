import Accordion from "@/components/ui/Accordion";
import Heading from "@/components/ui/Heading";
import JsonLd from "@/components/ui/JsonLd";
import Panel from "@/components/ui/Panel";
import { faqJsonLd } from "@/lib/seo/schema";
import styles from "./Faq.module.css";

/** FAQ block, reusable on any page: visible Q&A + matching FAQPage schema. */
export default function Faq({
  title = "Questions Before You Travel",
  items,
}: {
  title?: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <Panel tone="paper" aria-labelledby="faq-title">
      <JsonLd data={faqJsonLd([...items])} />
      <Heading level="h3" as="h2" id="faq-title" className={styles.title}>
        {title}
      </Heading>
      <div className={styles.grid}>
        {items.map((f) => (
          <Accordion key={f.question} summary={f.question} name="faq">
            {f.answer}
          </Accordion>
        ))}
      </div>
    </Panel>
  );
}
