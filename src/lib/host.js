/**
 * Which of the two Nextenic domains is currently being served.
 *
 * The site runs on nextenic.ch and nextenic.com from a single GitHub Pages
 * deployment, so anything that differs per domain has to be resolved at runtime
 * from the hostname. Two things do: the contact address and the Google Analytics
 * measurement ID.
 *
 * Matching is on the registrable domain, not an exact string, so every form works
 * without a separate case: nextenic.com, www.nextenic.com, and any other
 * subdomain all resolve to "com".
 *
 * Anything unrecognised, which includes localhost, 127.0.0.1 and *.github.io
 * preview builds, falls back to "ch" to match the canonical URL.
 */

const DEFAULT_TLD = "ch";

export function siteTld() {
  if (typeof window === "undefined") return DEFAULT_TLD;
  const host = window.location.hostname.toLowerCase();
  return /(^|\.)nextenic\.com$/.test(host) ? "com" : DEFAULT_TLD;
}

/** True only on a real nextenic.ch / nextenic.com host, www or apex. */
export function isProductionHost() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname.toLowerCase();
  return /(^|\.)nextenic\.(ch|com)$/.test(host);
}
