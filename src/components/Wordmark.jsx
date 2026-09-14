import { cn } from "@/lib/utils";

/**
 * Nextenic wordmark.
 *
 * The mark is an N built from two uprights and a diagonal, drawn on a 4px grid.
 * The diagonal is the only element carrying the accent colour: it reads as the
 * link between the two uprights, which is the whole idea of an umbrella company
 * holding two separate products. Stroke weights match the display typeface at
 * text-h4, so the mark and the word sit on the same optical line.
 */
export function Logomark({ className }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M5 23V5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        d="M23 23V5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        d="M5 5L23 23"
        stroke="var(--accent)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Wordmark({ className, showText = true }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Logomark />
      {showText && (
        <span className="font-display text-h4 font-semibold tracking-[-0.02em] text-primary">
          Nextenic
        </span>
      )}
    </span>
  );
}
