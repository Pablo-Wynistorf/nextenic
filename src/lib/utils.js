/**
 * Joins class names, dropping falsy values.
 *
 * Deliberately not clsx + tailwind-merge: nothing in this project passes
 * conflicting utility classes down through props, so the extra 8 kB would buy
 * nothing.
 */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Resolves a path inside /public against the configured Vite base.
 *
 * Needed because the site can be served from "/" (custom domain) or from
 * "/<repo>/" (GitHub Pages project path). Always pass a path without a leading
 * slash, e.g. asset("products/mailrift/logo-192.webp").
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path}`.replace(/([^:]\/)\/+/g, "$1");
}

/**
 * Builds a srcset/src pair for the two widths committed for each screenshot.
 *
 * `base` is the path without the width suffix, e.g.
 * "products/mailrift/webmail-inbox" resolves to -800.webp and -1600.webp.
 */
export function screenshotSources(base) {
  return {
    src: asset(`${base}-1600.webp`),
    srcSet: `${asset(`${base}-800.webp`)} 800w, ${asset(`${base}-1600.webp`)} 1600w`,
  };
}

/** Formats a section index as a two-digit ordinal, e.g. 1 -> "01". */
export function ordinal(index) {
  return String(index).padStart(2, "0");
}
