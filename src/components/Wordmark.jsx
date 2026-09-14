import { cn } from "@/lib/utils";

/**
 * Nextenic logomark: a solid N, drawn on a 32-unit grid.
 *
 * Two uprights in the text colour, one diagonal in the accent. The diagonal is
 * laid down first and the uprights sit on top of it, so the accent shows only in
 * the counters — the link between the two uprights, which is the whole idea of a
 * holding company with two separate products. Drawing it that way (rather than
 * three overlapping strokes) keeps the corners mitred and the joins clean, and
 * means the mark survives being scaled down to 16px in a browser tab.
 *
 * Geometry, for anyone editing it: uprights are 5 units wide at x=5 and x=22,
 * running the full cap height y=5..27. The diagonal is a parallelogram cut
 * horizontally, 6.4 units wide on the horizontal — which works out to 5.2 units
 * measured perpendicular, marginally heavier than the uprights, because a
 * diagonal of equal weight always reads thinner than a vertical.
 *
 * The same geometry is duplicated in public/favicon.svg and the generated icons.
 * If you change it here, regenerate those (see public/icons/README.md).
 */
export function Logomark({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
      className={cn("h-7 w-7", className)}
    >
      {/* Diagonal first: the uprights below overprint its ends. */}
      <path d="M5 5H11.4L27 27H20.6L5 5Z" fill="var(--accent)" />
      {/* Both uprights as a single path, so there is one fill to change. */}
      <path d="M5 5H10V27H5V5ZM22 5H27V27H22V5Z" fill="currentColor" />
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
