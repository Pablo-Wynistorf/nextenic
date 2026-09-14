/**
 * Company contact address.
 *
 * Nextenic runs on two domains, nextenic.ch and nextenic.com, and the contact
 * address follows whichever one the visitor is actually on — a .com visitor
 * should not be asked to write to a .ch address and wonder whether they have the
 * right company.
 *
 * The TLD is read from the hostname at runtime rather than baked in at build
 * time, because both domains are served from the same GitHub Pages deployment
 * and therefore the same bundle.
 *
 * Anything that cannot be resolved at runtime — the JSON-LD block in index.html,
 * for instance — uses the .ch address, which matches the canonical URL.
 */

const LOCAL_PART = "contact";
const DEFAULT_TLD = "ch";

/** Returns "ch" or "com" based on the domain currently being served. */
export function contactTld() {
  if (typeof window === "undefined") return DEFAULT_TLD;
  const host = window.location.hostname.toLowerCase();
  /* Match the apex or any subdomain of nextenic.com. Anything else, including
     localhost and *.github.io preview builds, falls back to .ch. */
  return /(^|\.)nextenic\.com$/.test(host) ? "com" : DEFAULT_TLD;
}

/** The full address, e.g. "contact@nextenic.ch". */
export function contactEmail() {
  return `${LOCAL_PART}@nextenic.${contactTld()}`;
}

/** Ready-made mailto href. */
export function contactMailto() {
  return `mailto:${contactEmail()}`;
}
