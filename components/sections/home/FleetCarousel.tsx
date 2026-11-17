"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BagIcon, PassengerIcon } from "@/components/sections/fleet/FleetIcons";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { FEATURED_FEATURES, FEATURED_VEHICLES, MORE_VEHICLES } from "@/lib/data/fleet";
import styles from "./FleetCarousel.module.css";

/**
 * Home fleet: the six featured vehicles + a closing "More vehicles" card that
 * sends to /fleet. Native horizontal scroll with snap (touch/trackpad work for
 * free); the arrows scroll by one card. No library.
 */
export default function FleetCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <ul ref={trackRef} className={styles.track} aria-label="Featured vehicles">
        {FEATURED_VEHICLES.map((v) => (
          <li key={v.name} className={styles.slide}>
            <Link href={v.href} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 80vw"
                  className={styles.img}
                />
              </div>
              <h3 className={styles.name}>{v.name}</h3>
              <ul className={styles.specs}>
                <li title="Passengers">
                  <PassengerIcon className={styles.icon} />
                  {v.passengers}
                  <span className="srOnly"> passengers</span>
                </li>
                <li title="Bags">
                  <BagIcon className={styles.icon} />
                  {v.bags}
                  <span className="srOnly"> bags</span>
                </li>
                {FEATURED_FEATURES.map((f) => (
                  <li key={f} className={styles.feature}>
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
        <li className={styles.slide}>
          <Link href="/fleet" className={`${styles.card} ${styles.more}`}>
            <span className={styles.moreKicker}>+4 vehicle classes</span>
            <span className={styles.moreTitle}>More vehicles</span>
            <ul className={styles.moreList}>
              {MORE_VEHICLES.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <span className={styles.moreCta}>
              <span className={styles.moreCtaLabel}>See the full fleet</span>
              <span className={styles.moreCtaDisc} aria-hidden="true">
                <ArrowIcon size={14} />
              </span>
            </span>
          </Link>
        </li>
      </ul>

      <div className={styles.controls}>
        <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label="Previous vehicles">
          ←
        </button>
        <button type="button" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label="Next vehicles">
          →
        </button>
      </div>
    </div>
  );
}
