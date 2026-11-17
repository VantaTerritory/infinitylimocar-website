"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";
import SectionHead from "@/components/ui/SectionHead";
import { ITINERARIES } from "@/lib/data/itineraries";
import { prefillQuery } from "@/lib/data/quote";
import { cn } from "@/lib/utils/cn";
import PlaceIconSvg from "./PlaceIcons";
import styles from "./Itineraries.module.css";

/**
 * "Route board": the eight itineraries as boarding-pass tabs + one large route
 * card. Auto-advances: the active tab's progress bar is a CSS animation and its
 * `animationend` moves to the next route — so hover pauses it (CSS), reduced
 * motion disables it (no animation, no end event), and the first manual pick
 * stops it for good. No timers.
 */
export default function Itineraries() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const tabsRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const total = ITINERARIES.length;

  // Mobile: the tabs are a horizontal row — keep the active one in view.
  // Scrolls the row only (scrollLeft), never the page.
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.querySelectorAll<HTMLElement>("[role=tab]")[active];
    if (!row || !tab || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.offsetWidth / 2, behavior: "smooth" });
  }, [active]);

  const pick = (i: number, focus = false) => {
    setAuto(false);
    setActive(i);
    if (focus) tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[i]?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      e.preventDefault();
      pick((active + keys[e.key] + total) % total, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      pick(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      pick(total - 1, true);
    }
  };

  return (
    <Panel tone="onyx" className={styles.panel} aria-labelledby="itineraries-title">
      <SectionHead
        id="itineraries-title"
        tone="dark"
        eyebrow="Popular itineraries"
        title="Airport, Business & Private Transfer Itineraries"
        lead="Familiar trip patterns across the capital region. Pick one to see what we plan around — then send us yours."
      />

      <div className={styles.board}>
        <div ref={tabsRef} className={styles.tabs} role="tablist" aria-label="Itineraries" aria-orientation="vertical" onKeyDown={onKey}>
          {ITINERARIES.map((r, i) => {
            const selected = i === active;
            return (
              <button
                key={`${r.from}-${r.to}`}
                type="button"
                role="tab"
                id={`${uid}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${uid}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                className={cn(styles.tab, selected && styles.tabActive)}
                onClick={() => pick(i)}
              >
                <PlaceIconSvg name={r.fromIcon} className={styles.tabIcon} />
                <span className={styles.tabRoute}>
                  {r.from} <span className={styles.tabArrow}>→</span> {r.to}
                </span>
                <span className={styles.tabTag}>{r.category}</span>
                {selected && auto ? (
                  <span
                    className={styles.progress}
                    onAnimationEnd={() => setActive((active + 1) % total)}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* All cards share one grid cell: the stage always takes the height of
            the tallest route, so switching never resizes the section. Only the
            active card is visible; the rest are inert and hidden from AT. */}
        <div className={styles.stage}>
          {ITINERARIES.map((r, i) => {
            const isActive = i === active;
            return (
              <div
                key={`${r.from}-${r.to}`}
                id={`${uid}-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`${uid}-tab-${i}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className={cn(styles.card, isActive && styles.cardActive)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.badge}>{r.category}</span>
                  <span className={styles.count}>
                    Route {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.route} aria-hidden="true">
                  <div className={styles.stop}>
                    <span className={styles.stopIcon}>
                      <PlaceIconSvg name={r.fromIcon} />
                    </span>
                    <span className={styles.stopLabel}>{r.from}</span>
                  </div>
                  <div className={styles.line}>{isActive ? <span className={styles.car} /> : null}</div>
                  <div className={styles.stop}>
                    <span className={cn(styles.stopIcon, styles.stopIconTo)}>
                      <PlaceIconSvg name={r.toIcon} />
                    </span>
                    <span className={styles.stopLabel}>{r.to}</span>
                  </div>
                </div>

                <h3 className={styles.title}>
                  {r.from} → {r.to}
                </h3>
                <p className={styles.summary}>{r.summary}</p>

                <p className={styles.shareLabel}>Share with your request</p>
                <ul className={styles.share}>
                  {r.share.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className={styles.cardFoot}>
                  <p className={styles.service}>
                    Suggested service <strong>{r.service}</strong>
                  </p>
                  <div className={styles.actions}>
                    <Link href={r.href} className={styles.more}>
                      Learn more ↗
                    </Link>
                    <Button href={`/get-a-quote?${prefillQuery({ service_type: r.service })}`}>Plan this trip</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
