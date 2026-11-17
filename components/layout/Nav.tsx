"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { MAIN_NAV } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils/cn";
import styles from "./Nav.module.css";

/**
 * Header from the wireframe: ivory pill bar, segmented menu in the middle,
 * phone + "Get a quote" on the right. Each menu item is a link to its hub plus
 * a mega panel (hover on desktop, click/keyboard via the same button).
 * Mobile: mark + Call + burger, full-height sheet with the same tree.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelId = useId();

  // Close everything on route change (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const enter = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  const active = MAIN_NAV.find((item) => item.label === open && item.columns.length > 0);

  return (
    <header className={styles.header}>
      <div className="frame">
        <div className={styles.bar} onMouseLeave={leave}>
          <Link href="/" className={styles.brand} aria-label={`${siteConfig.name} — home`}>
            <Logo variant="legacy" priority className={styles.logoDesktop} />
            <Logo variant="mark" className={styles.logoMobile} />
          </Link>

          <nav aria-label="Main" className={styles.menu}>
            <ul className={styles.list}>
              {MAIN_NAV.map((item) => {
                const isOpen = open === item.label;
                const isCurrent = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.label} onMouseEnter={() => enter(item.label)}>
                    {item.columns.length > 0 ? (
                      <button
                        type="button"
                        className={cn(styles.item, (isOpen || isCurrent) && styles.itemActive)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : item.label)}
                      >
                        {item.label}
                        <span className={styles.caret} aria-hidden="true">
                          ▾
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(styles.item, isCurrent && styles.itemActive)}
                        aria-current={isCurrent ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={`tel:${siteConfig.phone.tel}`} className={styles.phone}>
              {siteConfig.phone.display}
            </a>
            <Button href="/get-a-quote" variant="dark" size="sm" arrow className={styles.cta}>
              {siteConfig.cta.quoteShort}
            </Button>
            <a href={`tel:${siteConfig.phone.tel}`} className={styles.roundBtn}>
              Call
            </a>
            <button
              type="button"
              className={cn(styles.roundBtn, styles.burger)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className={cn(styles.burgerLines, mobileOpen && styles.burgerOpen)} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          id={panelId}
          className={cn(styles.mega, active && styles.megaOpen)}
          onMouseEnter={() => active && enter(active.label)}
          onMouseLeave={leave}
          hidden={!active}
        >
          {active ? (
            <div className={cn(styles.megaGrid, active.columns.length === 1 && styles.megaSingle)}>
              {active.columns.map((col) => (
                <div key={col.title.label} className={styles.megaCol}>
                  <Link href={col.title.href} className={styles.megaTitle}>
                    {col.title.label}
                  </Link>
                  <ul className={styles.megaLinks}>
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* ─── Mobile sheet ─── */}
      <div className={cn(styles.sheet, mobileOpen && styles.sheetOpen)} hidden={!mobileOpen}>
        <nav aria-label="Mobile" className="frame">
          <ul className={styles.sheetList}>
            {MAIN_NAV.map((item) => {
              const expanded = mobileSection === item.label;
              return (
                <li key={item.label} className={styles.sheetItem}>
                  {item.columns.length > 0 ? (
                    <>
                      <button
                        type="button"
                        className={styles.sheetTrigger}
                        aria-expanded={expanded}
                        onClick={() => setMobileSection(expanded ? null : item.label)}
                      >
                        {item.label}
                        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                      </button>
                      {expanded ? (
                        <div className={styles.sheetSub}>
                          {item.columns.map((col) => (
                            <div key={col.title.label}>
                              <Link href={col.title.href} className={styles.sheetSubTitle}>
                                {col.title.label}
                              </Link>
                              <ul>
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <Link href={l.href}>{l.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link href={item.href} className={styles.sheetTrigger}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.sheetActions}>
            <Button href="/get-a-quote" variant="primary" size="lg" block>
              {siteConfig.cta.quote}
            </Button>
            <Button href={`tel:${siteConfig.phone.tel}`} variant="outline" size="lg" block>
              {siteConfig.cta.call}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
