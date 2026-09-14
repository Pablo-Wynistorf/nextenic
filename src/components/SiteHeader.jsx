import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GradualBlur from "@/components/GradualBlur";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Wordmark from "@/components/Wordmark";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Fixed header.
 *
 * Notable details:
 *
 * 1. The blur band is React Bits' GradualBlur, stacked in five masked layers so
 *    content dissolves under the header instead of sliding under a hard-edged
 *    frosted bar. It fades in only once the page has scrolled.
 * 2. The active section is tracked with an IntersectionObserver rather than a
 *    scroll listener, and the underline is a real element, so nothing has to be
 *    measured in JS.
 * 3. The mobile panel animates its items in with a CSS stagger driven by a
 *    custom property index, disabled under reduced motion.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const onHome = pathname === "/";

  /* Product names are brand names, so they are not translated. */
  const nav = [
    { label: t("nav.products"), hash: "#products" },
    ...products.map((product) => ({
      label: product.name,
      hash: `#${product.id}`,
    })),
    { label: t("nav.about"), hash: "#about" },
  ];

  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }
    const nodes = ["products", ...products.map((p) => p.id), "about"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const navHref = (hash) => (onHome ? hash : `/${hash}`);
  const mobileItems = [...nav, { label: t("nav.contact"), hash: "#contact" }];

  return (
    <>
      <GradualBlur
        target="page"
        position="top"
        height="6.5rem"
        strength={2}
        divCount={5}
        curve="bezier"
        opacity={scrolled ? 1 : 0}
        animated
        duration="0.4s"
        zIndex={20}
      />

      <header className="fixed inset-x-0 top-0" style={{ zIndex: 200 }}>
        <div className="shell flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="rounded-sm"
            aria-label={t("nav.home")}
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav aria-label={t("nav.sections")} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isActive = active === item.hash;
                return (
                  <li key={item.hash}>
                    <a
                      href={navHref(item.hash)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-body-sm transition-colors duration-200",
                        isActive ? "text-primary" : "text-secondary hover:text-primary",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent",
                          "transition-transform duration-300 ease-out-expo",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={navHref("#contact")}
              className={cn(
                "hidden rounded-full border border-line-strong px-4 py-2 text-body-sm",
                "transition-colors duration-200 hover:border-primary hover:bg-surface-hover sm:inline-block",
              )}
            >
              {t("nav.contact")}
            </a>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex size-9 items-center justify-center rounded-full border border-line-strong lg:hidden"
            >
              <span className="sr-only">
                {open ? t("nav.closeMenu") : t("nav.openMenu")}
              </span>
              {open ? (
                <X aria-hidden="true" className="size-4" />
              ) : (
                <Menu aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel: full-bleed, left-aligned, one item per line at display
          size — a menu in its own right rather than the desktop bar stacked. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 bg-canvas lg:hidden"
        style={{ zIndex: 190 }}
      >
        <div className="shell flex h-full flex-col justify-between pb-12 pt-28">
          <nav aria-label={t("nav.sections")}>
            <ul className="flex flex-col">
              {mobileItems.map((item, i) => (
                <li key={item.hash} className="overflow-hidden border-b border-line">
                  <a
                    href={navHref(item.hash)}
                    onClick={() => setOpen(false)}
                    style={reduced ? undefined : { animationDelay: `${i * 55}ms` }}
                    className={cn(
                      "flex items-baseline gap-4 py-5 font-display text-h3",
                      !reduced && "motion-item",
                    )}
                  >
                    <span className="font-mono text-micro text-tertiary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="max-w-measure text-body-sm text-secondary">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </>
  );
}
