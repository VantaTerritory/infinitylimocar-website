import type { PlaceIcon } from "@/lib/data/itineraries";

/** Line icons for itinerary endpoints (24px grid, 1.5 stroke, currentColor). */
const PATHS: Record<PlaceIcon, React.ReactNode> = {
  plane: <path d="M21 14.5 13 10V4.5a1.5 1.5 0 0 0-3 0V10l-8 4.5V16l8-2.5v4.25L8 19.5V21l3.5-1 3.5 1v-1.5l-2-1.75V13.5l8 2.5z" />,
  hotel: (
    <>
      <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V21" />
      <path d="M16 10h2.5A1.5 1.5 0 0 1 20 11.5V21M2.5 21h19" />
      <path d="M7.5 8h1.5M11 8h1.5M7.5 11.5h1.5M11 11.5h1.5M7.5 15h1.5M11 15h1.5M9 21v-2.5h2V21" />
    </>
  ),
  office: (
    <>
      <path d="M3 21h18M5 21V4h10v17M15 9h4v12" />
      <path d="M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M17 12.5h.01M17 16h.01" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18M11 12.5v2h2v-2" />
    </>
  ),
  ship: (
    <>
      <path d="M4 15.5 5.5 20h13l1.5-4.5L12 13z" />
      <path d="M6.5 14.2V9.5h11v4.7M9 9.5V6.5h6v3M12 4v2.5" />
      <path d="M2.5 21.5c1.5 0 1.5-.8 3-.8s1.5.8 3 .8 1.5-.8 3-.8 1.5.8 3 .8 1.5-.8 3-.8 1.5.8 3 .8" />
    </>
  ),
  // Same upright silhouette as `plane` (consistent orientation), with a
  // smaller private-jet body: narrower wings, rear engines.
  jet: (
    <>
      <path d="M12 2.5c.9 0 1.5.9 1.5 2.2v5.1l6 3.6v1.6l-6-1.8v4.3l2 1.6v1.4l-3.5-1-3.5 1v-1.4l2-1.6v-4.3l-6 1.8v-1.6l6-3.6V4.7c0-1.3.6-2.2 1.5-2.2z" />
      <path d="M9.6 15.2h-.9M15.3 15.2h-.9" />
    </>
  ),
  rings: (
    <>
      <circle cx="9" cy="14" r="5.5" />
      <circle cx="15" cy="14" r="5.5" />
      <path d="m10.5 4.5 1.5-2 1.5 2-1.5 2z" />
    </>
  ),
  podium: (
    <>
      <path d="M7 21h10M9.5 21l1-8h3l1 8M6 13h12" />
      <rect x="10" y="3" width="4" height="6" rx="2" />
      <path d="M8 8a4 4 0 0 0 8 0" />
    </>
  ),
  dinner: (
    <>
      <path d="M6 3v7a2 2 0 0 0 2 2v9M10 3v7a2 2 0 0 1-2 2M8 3v5" />
      <path d="M16.5 21V3c2 1 3 3.5 3 6.5V13h-3" />
    </>
  ),
  monument: (
    <>
      <path d="M12 2.5 10.5 6v15h3V6z" />
      <path d="M7 21h10M4 21h16" />
      <path d="M10.5 9h3" />
    </>
  ),
};

export default function PlaceIconSvg({ name, className }: { name: PlaceIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
