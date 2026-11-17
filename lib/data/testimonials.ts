import ALL_REVIEWS from "./reviews.json";

/**
 * Google reviews (5★) pulled from the live site's Endorsal widgets — 101
 * after removing one that was about another company. Full list in
 * reviews.json (testimonials page); FEATURED is the home selection.
 * Avatars are not stored (third-party CDN).
 */
export interface Review {
  author: string;
  text: string;
}

export const REVIEWS: Review[] = ALL_REVIEWS;

export const REVIEW_SUMMARY = { rating: "5.0", count: "325+", source: "Google" };

// Home slider: short/medium reviews only (≤ ~380 chars). The slider height
// is set by the longest one, so a long review inflates the whole section.
const FEATURED_AUTHORS = [
  "Marie Arana",
  "Jessica Teel",
  "Larry Furrer",
  "Dee Tatum",
  "Amber Littleton",
  "Marvin Boguslawski",
  "Symone Koduah",
  "Ferne Rothstein",
];

export const FEATURED_REVIEWS: Review[] = FEATURED_AUTHORS.map((name) =>
  REVIEWS.find((r) => r.author === name)
).filter((r): r is Review => Boolean(r));
