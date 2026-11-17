/**
 * Legal pages. Privacy: the redesign's (kinsta) notice, which matches what this
 * site actually collects (quote and contact inquiries, no online payment), plus
 * the live site's "we do not sell" and children's clauses. Terms: the live
 * site's terms (the ones currently published), with the unfilled placeholders
 * removed ("[insert hours]") and the contact block pointed at the real NAP.
 * Neither source carries a date, so no "Last updated" line is shown.
 */

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraph after the list. */
  after?: string[];
}

export interface LegalDoc {
  intro: string[];
  sections: LegalSection[];
}

export const PRIVACY: LegalDoc = {
  intro: [
    "This notice describes how Infinity LLC, doing business as Infinity Limo Car (“we”, “us”), handles information provided through infinitylimocar.com and related quote or contact inquiries.",
  ],
  sections: [
    {
      id: "information-you-provide",
      title: "Information you provide",
      paragraphs: [
        "When you request a quote or contact us, you may provide your name, email address, phone number and transportation details. Depending on the inquiry, those details may include:",
      ],
      list: [
        "Travel dates and pickup times",
        "Pickup and destination addresses",
        "Flight information",
        "Passenger and luggage counts",
        "Vehicle preferences and a message",
      ],
      after: ["Please share only information relevant to your inquiry and avoid sending unnecessary sensitive information."],
    },
    {
      id: "how-we-use-it",
      title: "How we use it",
      paragraphs: [
        "We use the information you submit to respond to your inquiry, discuss transportation options and coordinate the arrangements you request. If you provide details for other travelers, share only what is appropriate for that purpose.",
        "We do not sell your personal information.",
      ],
    },
    {
      id: "technical-information",
      title: "Website and technical information",
      paragraphs: [
        "The website and its hosting providers may process technical information such as IP address, browser and device details, pages requested and time of access. This supports website operation, troubleshooting, security and usage measurement.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and third-party features",
      paragraphs: [
        "The website may use cookies or similar technologies. Where analytics, embedded content (such as maps) or other third-party features are enabled, those providers process information under their own privacy notices. You can manage cookies in your browser settings; restricting them may affect some features.",
      ],
    },
    {
      id: "service-providers",
      title: "Service providers and external websites",
      paragraphs: [
        "Hosting, form-processing and communication providers may process information to support the website or handle an inquiry. Coordinating a trip may involve sharing relevant trip details with the chauffeurs or partner operators involved. We may also disclose information when required by law. External websites linked from this site have their own practices.",
      ],
    },
    {
      id: "security",
      title: "Data security",
      paragraphs: [
        "We use reasonable measures to protect the information you provide. No method of transmission over the internet is completely secure.",
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      paragraphs: [
        "You can contact us to ask about the information associated with your inquiry, or to request access, correction or deletion. Please identify the inquiry without including unnecessary sensitive details. Our response may depend on the information involved and applicable requirements.",
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      paragraphs: ["Our website and services are not directed to individuals under 18 years of age."],
    },
    {
      id: "changes",
      title: "Changes to this notice",
      paragraphs: ["We may update this notice from time to time. Changes are posted on this page."],
    },
  ],
};

export const TERMS: LegalDoc = {
  intro: [
    "By accessing infinitylimocar.com or using the services of Infinity LLC, doing business as Infinity Limo Car, you agree to these Terms and Conditions.",
  ],
  sections: [
    {
      id: "services",
      title: "Services",
      paragraphs: [
        "Infinity Limo Car provides chauffeured transportation in Washington DC and the surrounding areas. Service descriptions and vehicle information on this website are general; your vehicle, itinerary and price are confirmed by our team for each trip.",
      ],
    },
    {
      id: "booking-payment",
      title: "Booking and payment",
      list: [
        "All reservations must be made in advance. A quote request is not a confirmed reservation.",
        "Prices are subject to change without notice.",
        "Full or partial payment may be required at booking.",
        "Additional charges may apply for overtime, waiting time, tolls or damages.",
      ],
    },
    {
      id: "cancellations",
      title: "Cancellations and refunds",
      list: [
        "Late cancellations may be subject to fees.",
        "No-shows are non-refundable.",
      ],
    },
    {
      id: "passenger-responsibilities",
      title: "Passenger responsibilities",
      paragraphs: ["Passengers agree to:"],
      list: [
        "Provide accurate booking details",
        "Treat vehicles and chauffeurs with respect",
        "Not engage in illegal activities inside the vehicle",
        "Pay for any damage caused",
      ],
    },
    {
      id: "chauffeur-rights",
      title: "Chauffeur rights",
      paragraphs: ["Chauffeurs reserve the right to:"],
      list: ["Refuse service to intoxicated or unsafe passengers", "End a trip if safety is compromised"],
    },
    {
      id: "alcohol-smoking",
      title: "Alcohol and smoking",
      list: ["Alcohol consumption must comply with local laws.", "Smoking may be prohibited in vehicles."],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: ["Infinity Limo Car is not liable for:"],
      list: [
        "Delays caused by traffic, weather or other circumstances beyond our control",
        "Lost or damaged personal belongings",
        "Indirect or consequential damages",
      ],
    },
    {
      id: "website-use",
      title: "Website use",
      paragraphs: ["You agree not to:"],
      list: [
        "Use the website for unlawful purposes",
        "Attempt to disrupt the website or gain unauthorized access",
        "Copy or distribute content without permission",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      paragraphs: [
        "Content on this website is owned by Infinity Limo Car or its respective owners and is protected by applicable copyright laws. External websites linked from this site are governed by their own terms.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      paragraphs: ["These Terms are governed by the laws of the District of Columbia, United States."],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      paragraphs: [
        "We may update these Terms at any time. Continued use of the website or our services constitutes acceptance of the changes. See our Privacy Policy for how we handle website and inquiry data.",
      ],
    },
  ],
};
