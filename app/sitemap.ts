import type { MetadataRoute } from "next";
import { SITE_PAGES, pageUrl } from "@/lib/seo/pages";

/** Only final, indexable, self-canonical URLs from the page registry. */
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.filter((p) => p.inSitemap !== false && !p.noindex).map((p) => ({
    url: pageUrl(p),
    changeFrequency: "monthly",
    priority: p.path === "/" ? 1 : p.group === "core" ? 0.9 : 0.7,
  }));
}
