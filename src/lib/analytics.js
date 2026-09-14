import { isProductionHost, siteTld } from "@/lib/host";

/**
 * Google Analytics 4.
 *
 * There are two GA4 data streams, one per domain, so the measurement ID is chosen
 * from the hostname exactly as the contact address is. Sending nextenic.com
 * traffic to the .ch stream would silently merge two properties that were
 * deliberately set up apart.
 *
 *   nextenic.ch  / www.nextenic.ch   stream 15777174809
 *   nextenic.com / www.nextenic.com  stream 15777184974
 *
 * Loaded from JS rather than pasted into index.html, for two reasons: the ID is
 * not known until the hostname is, and a hardcoded tag would also fire on
 * localhost and on *.github.io preview builds, polluting the property with
 * development traffic. `isProductionHost()` gates that.
 *
 * The tag is injected after mount rather than in <head>, so it never competes
 * with the hero for the first paint.
 */

const MEASUREMENT_IDS = {
  ch: "G-0BX61VLTJ4",
  com: "G-QDM0RXR00H",
};

let loaded = false;

export function measurementId() {
  return MEASUREMENT_IDS[siteTld()] ?? MEASUREMENT_IDS.ch;
}

/** True when analytics should run at all. */
export function analyticsEnabled() {
  return isProductionHost() && Boolean(measurementId());
}

/**
 * Injects gtag.js once and configures the stream for this domain.
 *
 * `send_page_view` is switched off here and page views are sent manually from
 * trackPageView instead. This is a single-page app: gtag would record the landing
 * page and then never fire again as the visitor moves between the home page and
 * the legal pages.
 */
export function initAnalytics() {
  if (loaded || !analyticsEnabled()) return;
  loaded = true;

  const id = measurementId();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", id, { send_page_view: false });
}

/** Records a page view for a client-side route. */
export function trackPageView(path, title) {
  if (!analyticsEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}
