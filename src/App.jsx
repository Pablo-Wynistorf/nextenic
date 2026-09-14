import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Home from "@/pages/Home";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import { useI18n } from "@/lib/i18n";
import { initAnalytics, trackPageView } from "@/lib/analytics";
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

/**
 * Loads gtag.js once and records a page view on every client-side navigation.
 *
 * The measurement ID is picked from the hostname, because .ch and .com are
 * separate GA4 streams. See src/lib/analytics.js.
 *
 * The page view fires in a separate effect from the loader and depends on the
 * path, so the initial view and every subsequent route change are both counted
 * exactly once. Titles are set by DocumentMeta and LegalPage, so this runs after
 * them in effect order and reports the title the visitor actually sees.
 */
function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

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
      <Analytics />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Both pages answer to their German and their English name. The German
            paths are canonical because that is what Swiss visitors look for and
            what the products already link to; the English paths redirect rather
            than duplicating, so the two do not compete as separate URLs. */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/imprint" element={<Navigate to="/impressum" replace />} />
        <Route path="/legal-notice" element={<Navigate to="/impressum" replace />} />

        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/privacy" element={<Navigate to="/datenschutz" replace />} />
        <Route
          path="/privacy-policy"
          element={<Navigate to="/datenschutz" replace />}
        />

        {/* Unknown paths show the home page rather than a dead end. */}
        <Route path="*" element={<Home />} />
      </Routes>

      <SiteFooter />
    </>
  );
}
