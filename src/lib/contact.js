import { siteTld } from "@/lib/host";

/**
 * Company contact address.
 *
 * Nextenic runs on two domains, nextenic.ch and nextenic.com, and the contact
 * address follows whichever one the visitor is actually on. A .com visitor should
 * not be asked to write to a .ch address and wonder whether they have the right
 * company.
 *
 * Host detection lives in lib/host.js and matches subdomains, so www.nextenic.com
 * resolves the same way as the apex.
 *
 * Anything that cannot be resolved at runtime, such as the JSON-LD block in
 * index.html, uses the .ch address, which matches the canonical URL.
 */

const LOCAL_PART = "contact";

/** The full address, for example "contact@nextenic.ch". */
export function contactEmail() {
  return `${LOCAL_PART}@nextenic.${siteTld()}`;
}

/** Ready made mailto href. */
export function contactMailto() {
  return `mailto:${contactEmail()}`;
}
