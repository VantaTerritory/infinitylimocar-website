import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import styles from "./Media.module.css";

/**
 * Photo slot. With `src` it renders next/image (cover); without it, a striped
 * placeholder that names the shot we still need, so missing assets are visible
 * in review and never shipped silently.
 */
export default function Media({
  src,
  alt = "",
  placeholder,
  tone = "light",
  sizes = "(min-width: 1100px) 33vw, 100vw",
  priority,
  className,
}: {
  src?: string;
  alt?: string;
  placeholder?: string;
  tone?: "light" | "dark";
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(styles.media, !src && styles[tone], className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.img} />
      ) : placeholder ? (
        <span className={styles.label}>{placeholder}</span>
      ) : null}
    </div>
  );
}
