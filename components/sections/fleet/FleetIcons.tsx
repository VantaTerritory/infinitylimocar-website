/** Small line icons for the vehicle specs. Decorative: the text carries the value. */
export function PassengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" className={className} aria-hidden="true" focusable="false">
      <circle cx="8" cy="5" r="2.75" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.75 14c0-2.9 2.35-4.75 5.25-4.75s5.25 1.85 5.25 4.75" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" className={className} aria-hidden="true" focusable="false">
      <rect x="2.5" y="5" width="11" height="8.5" rx="1.75" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 5V3.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1V5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
