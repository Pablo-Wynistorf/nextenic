/**
 * Product structure: identity, assets and links only.
 *
 * All prose lives in src/locales/*.js under `products.<id>`, because the site
 * ships in English, German, French and Italian. Anything language-neutral —
 * URLs, image paths, brand colours, product names — stays here so there is one
 * copy of it rather than four.
 *
 * Facts and links are traceable to docs/product-research.md, which records the
 * source URL for each. Do not add a feature, number or integration that is not
 * on the product's own site.
 */

export const products = [
  {
    id: "mailrift",
    /* Spelled with a capital R, as the product spells itself. Brand names are
       not translated. */
    name: "MailRift",
    accent: "var(--color-mailrift)",
    logo: {
      src: "products/mailrift/logo-192.webp",
      width: 192,
      height: 192,
    },
    /* Icon names resolve against the map in FeatureGroups.jsx. */
    featureIcons: ["Inbox", "Globe", "Terminal"],
    screenshots: [
      { id: "inbox", base: "products/mailrift/webmail-inbox", width: 1600, height: 1000 },
      { id: "compose", base: "products/mailrift/webmail-compose", width: 1600, height: 1000 },
      { id: "dns", base: "products/mailrift/domains-dns", width: 1600, height: 1000 },
      { id: "calendar", base: "products/mailrift/calendar", width: 1600, height: 1000 },
      { id: "api", base: "products/mailrift/api-credentials", width: 1600, height: 1000 },
    ],
    phoneScreenshot: {
      src: "products/mailrift/mobile-inbox-560.webp",
      width: 560,
      height: 1212,
    },
    links: {
      primary: { label: "mailrift.io", href: "https://mailrift.io" },
      secondary: [
        { key: "pricing", href: "https://mailrift.io/#pricing" },
        { key: "features", href: "https://mailrift.io/features" },
        { key: "docs", href: "https://mailrift.io/docs/overview" },
        { key: "signIn", href: "https://mailrift.io/login" },
      ],
      alternate: { label: "mailrift.ch", href: "https://mailrift.ch" },
    },
  },

  {
    id: "swiss-shipping-labels",
    name: "Swiss Shipping Labels",
    accent: "var(--color-swisspost)",
    logo: {
      src: "products/swiss-shipping-labels/app-icon-192.webp",
      width: 192,
      height: 192,
    },
    featureIcons: ["Tags", "Layers", "Truck"],
    screenshots: [
      { id: "labels", base: "products/swiss-shipping-labels/screenshot-2", width: 1600, height: 900 },
      { id: "dashboard", base: "products/swiss-shipping-labels/screenshot-1", width: 1600, height: 900 },
      { id: "create", base: "products/swiss-shipping-labels/screenshot-3", width: 1600, height: 900 },
      { id: "stamps", base: "products/swiss-shipping-labels/screenshot-4", width: 1600, height: 900 },
      { id: "settings", base: "products/swiss-shipping-labels/screenshot-5", width: 1600, height: 900 },
    ],
    links: {
      primary: {
        label: "swiss-shipping-labels.ch",
        href: "https://swiss-shipping-labels.ch",
      },
      shopify: {
        key: "shopify",
        href: "https://apps.shopify.com/swiss-shipping-labels",
      },
      secondary: [{ key: "guide", href: "https://swiss-shipping-labels.ch/docs" }],
    },
  },
];

export const getProduct = (id) => products.find((product) => product.id === id);
