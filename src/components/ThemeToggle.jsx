import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Colour mode switch.
 *
 * A single icon button, matching the language button beside it in height, radius
 * and border. It replaced a sliding pill track, which was the wrong control here:
 * at 64px wide it dominated a header whose other controls are compact, and its
 * knob sat on top of the two icons it was meant to move between, so at a glance
 * it read as a stray white dot rather than a switch.
 *
 * The icon shown is the mode you will get, not the mode you are in, which matches
 * the accessible name. Both icons are always mounted and crossfade with a small
 * rotation, so nothing reflows on press.
 *
 * Two states on screen, three in storage: an untouched toggle follows the OS, and
 * the first press pins a choice that then persists.
 */
export default function ThemeToggle({ className }) {
  const { resolved, toggle } = useTheme();
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const isLight = resolved === "light";

  /* Pressed means "light is on", so the control has a meaningful on state for
     assistive technology without pretending to be a checkbox. */
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={isLight ? t("nav.themeToDark") : t("nav.themeToLight")}
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center rounded-full",
        "border border-line-strong text-secondary",
        "transition-colors duration-200 ease-out-quart",
        "hover:border-primary hover:text-primary",
        className,
      )}
    >
      <Moon
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn(
          "absolute size-4",
          !reduced && "transition-[opacity,transform] duration-300 ease-out-expo",
          isLight ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Sun
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn(
          "absolute size-4",
          !reduced && "transition-[opacity,transform] duration-300 ease-out-expo",
          isLight ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0",
        )}
      />
    </button>
  );
}
