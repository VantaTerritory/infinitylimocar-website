import type { Metadata, Viewport } from "next";
import { Manrope, Urbanist } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import JsonLd from "@/components/ui/JsonLd";
import { getPage } from "@/lib/seo/pages";
import { organizationJsonLd } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Brandbook: Urbanist (display — Regular/Medium/Bold) + Manrope (text — Regular/Medium/SemiBold).
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const home = getPage("/");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: home.title, template: "%s" },
  description: home.description,
  applicationName: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: "#15120F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${urbanist.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
