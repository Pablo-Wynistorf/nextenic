import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Home from "@/pages/Home";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import { useI18n } from "@/lib/i18n";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Restores a sensible scroll position on navigation.
 *
 * React Router does not do this for you. Two cases matter here: following a
 * "/#products" link from a legal page has to land on the section, and plain
 * navigation between pages has to start at the top rather than keeping the
 * previous page's offset.
 */
function ScrollBehaviour() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

/**
 * Keeps the document title and meta description in step with the active
 * language. index.html ships the English versions for crawlers and for the
 * no-JS case; this updates them once a different language is resolved.
 */
function DocumentMeta() {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;
    document.title = t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("meta.description"));
  }, [t, lang, pathname]);

  return null;
}

export default function App() {
  const { t } = useI18n();

  return (
    <>
      {/* First tab stop on every page. */}
      <a
        href="#main"
        className="sr-only-focusable z-[300] m-4 rounded-full bg-accent px-5 py-2.5 text-body-sm font-medium text-accent-contrast"
      >
        {t("nav.skipToContent")}
      </a>

      <ScrollBehaviour />
      <DocumentMeta />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        {/* Unknown paths show the home page rather than a dead end. */}
        <Route path="*" element={<Home />} />
      </Routes>

      <SiteFooter />
    </>
  );
}
