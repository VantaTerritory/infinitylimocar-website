/**
 * The ↗ used in every arrow disc. An SVG instead of the "↗" glyph: the glyph
 * sits off-center inside a circle (font metrics differ per typeface), this one
 * is geometrically centered in its 16px box.
 */
export default function ArrowIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}
