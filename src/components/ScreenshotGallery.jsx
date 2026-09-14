import { useId, useRef, useState } from "react";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import TiltedCard from "@/components/TiltedCard";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Screenshot viewer for a product section.
 *
 * Implemented as a real tab set: arrow keys move between captions, Home/End
 * jump to the ends, and each panel is associated with its tab. A row of
 * unlabelled dots would have been less code and less use to anyone.
 *
 * All panels stay mounted so switching tabs never re-decodes an image, but only
 * the first is eager-loaded.
 */
export default function ScreenshotGallery({
  screenshots,
  domainLabel,
  priority = false,
}) {
  const [index, setIndex] = useState(0);
  const baseId = useId();
  const tabsRef = useRef([]);
  const { t } = useI18n();

  const focusTab = (next) => {
    const clamped = (next + screenshots.length) % screenshots.length;
    setIndex(clamped);
    tabsRef.current[clamped]?.focus();
  };

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(screenshots.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <TiltedCard className="rounded-lg">
        {screenshots.map((shot, i) => (
          <div
            key={shot.id}
            role="tabpanel"
            id={`${baseId}-panel-${i}`}
            aria-labelledby={`${baseId}-tab-${i}`}
            hidden={i !== index}
          >
            <ScreenshotFrame
              base={shot.base}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              label={domainLabel}
              priority={priority && i === 0}
            />
          </div>
        ))}
      </TiltedCard>

      {/* Captions double as the tab list. Horizontally scrollable on narrow
          screens rather than wrapping into a ragged block. */}
      <div
        role="tablist"
        aria-label={t("productsSection.screenshotsLabel")}
        onKeyDown={onKeyDown}
        className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {screenshots.map((shot, i) => {
          const selected = i === index;
          return (
            <button
              key={shot.id}
              ref={(node) => {
                tabsRef.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-caption whitespace-nowrap",
                "transition-colors duration-200 ease-out-quart",
                selected
                  ? "border-primary bg-primary text-canvas"
                  : "border-line text-secondary hover:border-line-strong hover:text-primary",
              )}
            >
              {shot.caption}
            </button>
          );
        })}
      </div>
    </div>
  );
}
