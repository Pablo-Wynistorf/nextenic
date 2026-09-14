import { cn } from "@/lib/utils";
import { screenshotSources } from "@/lib/utils";

/**
 * A screenshot presented as a device-less window.
 *
 * The frame is a hairline border, a thin bar carrying the product's own domain
 * in monospace, and the image. Deliberately not the three-coloured-dots macOS
 * chrome: that is decoration pretending to be a browser, and it dates a page
 * instantly.
 *
 * width/height are always passed through to the <img> so the aspect ratio is
 * reserved before decode and the section never shifts.
 */
export default function ScreenshotFrame({
  base,
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  className,
  imageClassName,
}) {
  const sources = base ? screenshotSources(base) : { src };

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-line-strong bg-canvas-raised shadow-screenshot",
        className,
      )}
    >
      {label && (
        <div className="flex items-center gap-2 border-b border-line px-3.5 py-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          <span className="truncate font-mono text-micro tracking-[0.1em] text-tertiary">
            {label}
          </span>
        </div>
      )}
      <img
        {...sources}
        sizes="(min-width: 1024px) 62vw, 100vw"
        alt={alt}
        width={width}
        height={height}
        /* The first screenshot of the first product is the largest thing near
           the fold, so it loads eagerly and gets fetch priority. Everything
           else waits. */
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={cn("h-auto w-full", imageClassName)}
      />
    </figure>
  );
}
