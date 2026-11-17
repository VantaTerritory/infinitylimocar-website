import { siteConfig } from "@/lib/site-config";

export const BUSINESS_ID = `${siteConfig.url}/#organization`;

/** Site-wide entity, emitted once by the root layout. */
export function organizationJsonLd() {
  const { address } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo-light.png`,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: ["Washington, DC", "Virginia", "Maryland"],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
