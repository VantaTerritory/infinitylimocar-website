import ReviewWall from "@/components/sections/company/ReviewWall";
import layout from "@/components/sections/company/layout.module.css";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/shared/PageHero";
import { REVIEWS, REVIEW_SUMMARY } from "@/lib/data/testimonials";
import { getPage, pageMetadata } from "@/lib/seo/pages";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PATH = "/testimonials";

export const metadata = pageMetadata(PATH);

export default function Page() {
  const page = getPage(PATH);
  return (
    <main className={`frame ${layout.stack}`}>
      <PageHero
        eyebrow="Client reviews"
        title={page.h1}
        lead="What travelers, assistants and planners say after riding with Infinity Limo Car — published on Google, where you can read every review."
        image="/images/photos/wedding-capitol-sunset.webp"
        imageAlt="Couple arriving at their wedding in a black stretch limousine by the U.S. Capitol"
        actions={
          <>
            <Button href={siteConfig.reviews.google} target="_blank" rel="noopener noreferrer">
              Read on Google ↗<span className="srOnly"> (opens in a new tab)</span>
            </Button>
            <Button href={siteConfig.reviews.yelp} variant="outline" tone="dark" target="_blank" rel="noopener noreferrer">
              Read on Yelp ↗<span className="srOnly"> (opens in a new tab)</span>
            </Button>
          </>
        }
      >
        <p className={styles.summary}>
          <span className={styles.rating}>{REVIEW_SUMMARY.rating}</span>
          <span className="srOnly"> out of 5 stars, </span>
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          <span>
            {REVIEW_SUMMARY.count} reviews on {REVIEW_SUMMARY.source}
          </span>
        </p>
      </PageHero>
      <ReviewWall reviews={REVIEWS} />
    </main>
  );
}
