import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Colour mode switch.
 *
 * Two states on screen, three in storage: an untouched toggle follows the OS,
 * and the first click pins a choice that then persists. The knob is the one
 * place on the site that uses a spring curve — a control that follows your
 * finger should overshoot slightly; content should not.
 */
export default function ThemeToggle({ className }) {
  const { resolved, toggle } = useTheme();
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const isLight = resolved === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? t("nav.themeToDark") : t("nav.themeToLight")}
      className={cn(
        "group relative inline-flex h-9 w-16 shrink-0 items-center rounded-full",
        "border border-line-strong bg-surface",
        "transition-colors duration-200 ease-out-quart hover:border-primary",
        className,
      )}
    >
      {/* Both icons stay put; only the knob travels. */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5">
        <Moon
          aria-hidden="true"
          strokeWidth={1.75}
          className={cn(
            "size-4 transition-opacity duration-200",
            isLight ? "opacity-35" : "opacity-100",
          )}
        />
        <Sun
          aria-hidden="true"
          strokeWidth={1.75}
          className={cn(
            "size-4 transition-opacity duration-200",
            isLight ? "opacity-100" : "opacity-35",
          )}
        />
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none relative z-10 ml-1 size-7 rounded-full",
          "bg-primary shadow-lift",
          reduced
            ? "transition-none"
            : "transition-transform duration-[420ms] ease-spring",
          isLight ? "translate-x-7" : "translate-x-0",
        )}
      />
    </button>
  );
}
