import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import ArrowIcon from "./ArrowIcon";
import styles from "./Button.module.css";

/**
 * The only button on the site. Hierarchy from the wireframe:
 *  - primary   gold fill (main action: Request a Quote)
 *  - dark      onyx fill (Continue, Get a quote in the nav)
 *  - outline   1px border in the current text color (Call, Fleet overview)
 * `tone` only matters for outline: on dark surfaces it switches to ivory.
 * `arrow` adds the gold ↗ disc of the nav CTA.
 */
type Variant = "primary" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  tone?: "light" | "dark";
  arrow?: boolean;
  block?: boolean;
  children: ReactNode;
  className?: string;
}

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = AsButton | AsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    tone = "light",
    arrow = false,
    block = false,
    children,
    className,
    ...rest
  } = props;

  const classes = cn(
    styles.btn,
    styles[variant],
    styles[size],
    tone === "dark" && styles.onDark,
    arrow && styles.withArrow,
    block && styles.block,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          <ArrowIcon size={13} />
        </span>
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsLink;
    const isNative = /^(https?:|tel:|mailto:|#)/.test(href);
    if (isNative) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as AsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
