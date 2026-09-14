import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Language menu.
 *
 * A disclosure button plus a list, not a <select>: the native control cannot be
 * styled to match and, more importantly, cannot show the current language as a
 * two-letter code in the header while listing full endonyms in the menu.
 *
 * Each language is listed in its own language — Deutsch, Français, Italiano —
 * because someone looking for French cannot be assumed to read the English word
 * "French". Roving focus, Escape to close, click-away to dismiss.
 */
export default function LanguageSwitcher({ className }) {
  const { lang, setLang, languages, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const itemsRef = useRef([]);

  const current = languages.find((item) => item.code === lang);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /* Move focus into the menu when it opens, onto the active language. */
  useEffect(() => {
    if (!open) return;
    const index = languages.findIndex((item) => item.code === lang);
    itemsRef.current[Math.max(index, 0)]?.focus();
  }, [open, lang, languages]);

  const onItemKeyDown = (event, index) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next =
      (index + (event.key === "ArrowDown" ? 1 : -1) + languages.length) %
      languages.length;
    itemsRef.current[next]?.focus();
  };

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-3",
          "font-mono text-micro text-secondary",
          "transition-colors duration-200 hover:border-primary hover:text-primary",
        )}
      >
        <Languages aria-hidden="true" className="size-3.5" />
        <span className="sr-only">{t("nav.language")}: </span>
        {current?.short ?? lang.toUpperCase()}
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t("nav.language")}
          className={cn(
            "absolute right-0 top-11 min-w-40 overflow-hidden rounded-md border border-line-strong",
            "bg-canvas-raised py-1 shadow-panel",
          )}
        >
          {languages.map((item, index) => {
            const active = item.code === lang;
            return (
              <li key={item.code} role="none">
                <button
                  ref={(node) => {
                    itemsRef.current[index] = node;
                  }}
                  type="button"
                  role="menuitem"
                  lang={item.htmlLang}
                  onKeyDown={(event) => onItemKeyDown(event, index)}
                  onClick={() => {
                    setLang(item.code);
                    setOpen(false);
                    buttonRef.current?.focus();
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-body-sm",
                    "transition-colors duration-150",
                    active
                      ? "text-primary"
                      : "text-secondary hover:bg-surface-hover hover:text-primary",
                  )}
                >
                  {item.label}
                  {active && (
                    <Check aria-hidden="true" className="size-3.5 text-accent" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
