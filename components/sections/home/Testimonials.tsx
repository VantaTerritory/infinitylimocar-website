import Link from "next/link";
import GoogleIcon from "@/components/ui/GoogleIcon";
import Heading from "@/components/ui/Heading";
import Media from "@/components/ui/Media";
import Panel from "@/components/ui/Panel";
import { FEATURED_REVIEWS, REVIEW_SUMMARY } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import ReviewSlider from "./ReviewSlider";
import styles from "./Testimonials.module.css";

/** Real Google reviews (from the live site's widget) + wedding photo. */
export default function Testimonials() {
  return (
    <div className={styles.row}>
      <Panel tone="paper" aria-labelledby="reviews-title" className={styles.panel}>
        <div className={styles.head}>
          <Heading level="h3" as="h2" id="reviews-title">
            Customer Experiences
          </Heading>
          <a href={siteConfig.reviews.google} className={styles.badge} target="_blank" rel="noopener noreferrer">
            <GoogleIcon size={16} />
            <span className={styles.badgeStars} aria-hidden="true">
              ★★★★★
            </span>{" "}
            {REVIEW_SUMMARY.count} reviews on {REVIEW_SUMMARY.source}
          </a>
        </div>
        <ReviewSlider reviews={FEATURED_REVIEWS} />
        <Link href="/testimonials" className={styles.more}>
          Read all client testimonials →
        </Link>
      </Panel>
      {/* Real wedding photo, animated with AI (Higgsfield · Seedance 2.5) from
          the same frame. One continuous take: the chauffeur opens the door and the couple gets in; loops from the start.
          The photo underneath is the poster and the reduced-motion fallback. */}
      <div className={styles.photo}>
        <Media
          src="/images/photos/testimonials-wedding-poster.webp"
          alt="Bride and groom stepping into their black stretch limousine by the U.S. Capitol at sunset"
          className={styles.poster}
          sizes="(min-width: 1000px) 40vw, 100vw"
        />
        <video
          className={styles.video}
          src="/videos/testimonials-wedding-arrival.mp4"
          poster="/images/photos/testimonials-wedding-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
