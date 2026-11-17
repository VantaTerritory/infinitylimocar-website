import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand marks from the brandbook. PNG for now (exported from Figma); swap for
 * the official SVGs when the client sends them, same API.
 *  - mark : the ribbon alone (nav, favicon contexts)
 *  - full : stacked lockup; `onDark` picks the reversed version
 *  - legacy: the gold lockup of the live site (infinitylimocar.com header),
 *            background removed. Desktop header, per Nico, until the new
 *            identity rolls out. `onDark` = same lockup with white INFINITY (footer).
 */
export default function Logo({
  variant = "mark",
  onDark = false,
  className,
  priority,
}: {
  variant?: "mark" | "full" | "legacy";
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}) {
  if (variant === "legacy") {
    return (
      <Image
        src={onDark ? "/images/brand/logo-gold-on-dark.png" : "/images/brand/logo-header.png"}
        alt={siteConfig.name}
        width={onDark ? 534 : 78}
        height={onDark ? 361 : 52}
        className={className}
        priority={priority}
      />
    );
  }
  if (variant === "mark") {
    return (
      <Image
        src="/images/brand/mark.png"
        alt={siteConfig.name}
        width={76}
        height={29}
        className={className}
        priority={priority}
      />
    );
  }
  return (
    <Image
      src={onDark ? "/images/brand/logo-dark.png" : "/images/brand/logo-light.png"}
      alt={siteConfig.name}
      width={560}
      height={380}
      className={className}
      priority={priority}
    />
  );
}
