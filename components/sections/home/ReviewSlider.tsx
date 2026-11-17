"use client";

import { useState } from "react";
import type { Review } from "@/lib/data/testimonials";
import GoogleIcon from "@/components/ui/GoogleIcon";
import { cn } from "@/lib/utils/cn";
import styles from "./ReviewSlider.module.css";

/** One review at a time with prev/next and dots (wireframe: quote + dots). */
export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const count = reviews.length;
  const go = (i: number) => setIndex((i + count) % count);
  if (count === 0) return null;

  return (
    <div className={styles.slider} aria-roledescription="carousel" aria-label="Client reviews">
      {/* Every review sits in the same grid cell: the longest one sets the
          height, so the card never grows or shrinks between slides. */}
      <div className={styles.stage} aria-live="polite">
        {reviews.map((r, i) => (
          <figure
            key={r.author}
            className={cn(styles.quote, i === index && styles.quoteActive)}
            aria-hidden={i !== index}
          >
            <p className={styles.stars} aria-label="5 out of 5 stars">
              ★★★★★
            </p>
            <blockquote>“{r.text}”</blockquote>
            <figcaption>
              {r.author}
              <span className={styles.source}>
                <GoogleIcon size={14} /> Google review
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.controls}>
        <div className={styles.dots}>
          {reviews.map((r, i) => (
            <button
              key={r.author}
              type="button"
              className={cn(styles.dot, i === index && styles.dotActive)}
              aria-label={`Show review ${i + 1} of ${count}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous review">
            ←
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next review">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
