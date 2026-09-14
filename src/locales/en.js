/**
 * English — reference dictionary.
 *
 * This file is the source of truth for structure. The other three locales mirror
 * its shape; a missing key anywhere falls back to the value here.
 *
 * Product copy is derived from the products' own sites, recorded with source
 * URLs in docs/product-research.md. Do not add claims here that are not in that
 * document.
 */
export default {
  meta: {
    title:
      "Nextenic GmbH — software for the mail you send and the parcels you ship",
    description:
      "Nextenic GmbH is a software company in Bern, Switzerland. We build and run two products: MailRift, email hosting on your own domain, and Swiss Shipping Labels, Swiss Post labels inside Shopify.",
  },

  nav: {
    sections: "Sections",
    products: "Products",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Nextenic — home",
    language: "Language",
    skipToContent: "Skip to content",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
  },

  hero: {
    eyebrow: "Nextenic GmbH · Bern, Switzerland",
    headline: "The mail you send. The parcels you ship.",
    lead: "Nextenic is a software company in Bern. We build and run two products: email hosting on your own domain, and Swiss Post shipping labels inside Shopify.",
    ctaPrimary: "See both products",
    ctaSecondary: "Contact us",
    scrollHint: "Scroll",
  },

  stats: {
    heading: "In numbers",
    products: "products, built and operated in-house",
    languages: "languages across our products",
    fromPrice: "CHF per month, per domain, for MailRift",
    carriers: "carrier integrated — Swiss Post, via its official API",
  },

  marquee: {
    // Shown in the scrolling band between sections. Short, factual phrases.
    line1: "Email hosting · Shipping labels · Bern, Switzerland",
    line2: "Priced per domain · Free to install · Built and run in-house",
  },

  productsSection: {
    eyebrow: "Products",
    lead: "Two products, each with its own brand, pricing and support. They share an engineering team and nothing else.",
    body: "Both solve an unglamorous, specific problem for people running a business: getting mail onto a domain you own, and getting a parcel out the door with the right label on it.",
    ordinal: "Product {n}",
    whoItIsFor: "Who it is for",
    screenshotsLabel: "Screenshots",
    alsoAt: "Also at",
    linkLabels: {
      pricing: "Pricing",
      features: "Features",
      docs: "Docs",
      signIn: "Sign in",
      guide: "Guide",
      shopify: "Shopify App Store",
    },
  },

  products: {
    mailrift: {
      tagline: "Email hosting on your own domain",
      summary:
        "Real mailboxes on a domain you already own, with a full webmail client, calendar, contacts, forwarding and inbound routing. One subscription covers the domain and every mailbox on it.",
      angle: {
        label: "Priced per domain, not per person",
        body: "Adding a colleague costs nothing until you reach the plan's mailbox limit. It replaces the mail side of Google Workspace or Microsoft 365 without the per-seat bill.",
      },
      facts: [
        { key: "Type", value: "Email hosting" },
        { key: "Pricing", value: "From CHF 4.90 / month per domain" },
        { key: "Hosting", value: "Germany, GDPR compliant" },
        { key: "Clients", value: "Webmail, iOS, Android" },
        { key: "For developers", value: "REST API, MCP server, webhooks" },
      ],
      featureGroups: [
        {
          title: "Mail that behaves like mail",
          items: [
            "Full webmail client with threaded reading, rich composing, folders and search",
            "Calendar and contacts on every mailbox",
            "iOS and Android apps with push notifications for new mail",
            "Unlimited plus-aliases — you+anything@yourdomain.com needs no setup",
          ],
        },
        {
          title: "Domains and delivery",
          items: [
            "Guided MX, SPF, DKIM and DMARC verification when you add a domain",
            "Domain Connect applies the whole record set in one click on supported registrars",
            "Inbound routing rules that sort, file, tag and forward on arrival",
            "Send quotas across four rolling windows — minute, hour, day and month",
          ],
        },
        {
          title: "Programmable",
          items: [
            "MCP server so agents like Claude, Cursor and Windsurf can read and send mail",
            "REST API with scoped bearer credentials, plus the typed @mailrift/sdk on npm",
            "HMAC-signed inbound webhooks",
            "Account-scoped API keys to provision domains and mailboxes",
          ],
        },
      ],
      audience: {
        lead: "Teams and businesses running mail on a domain they own",
        body: "The Starter tier is described as an entry tier for a single small domain. The programmable surfaces — REST API, MCP server, SDK and webhooks — sit on the upper plans, for developers who want mail as infrastructure.",
      },
      trial:
        "One free trial per account on a test subdomain: one mailbox, 1 MB of storage, three outbound emails, no credit card.",
      mobile: {
        title: "iOS and Android, with push",
        body: "Native apps for both platforms, with push notifications when new mail arrives.",
        alt: "MailRift inbox on a phone screen",
      },
      logoAlt: "MailRift logo",
      screenshots: {
        inbox: {
          caption: "Webmail — threaded reading, folders, search",
          alt: "MailRift webmail inbox showing a threaded conversation, folder tree and message list",
        },
        compose: {
          caption: "Composing with attachments",
          alt: "MailRift compose window with rich text formatting and attachments",
        },
        dns: {
          caption: "Guided DNS verification",
          alt: "MailRift domain setup screen listing the MX, SPF, DKIM and DMARC records to add",
        },
        calendar: {
          caption: "Calendar per mailbox",
          alt: "MailRift calendar view with scheduled events across a week",
        },
        api: {
          caption: "Scoped API credentials",
          alt: "MailRift API credentials screen listing scoped bearer tokens",
        },
      },
    },

    "swiss-shipping-labels": {
      tagline: "Shipping labels for Swiss Post, inside Shopify",
      summary:
        "A Shopify app that connects your store to the Swiss Post Barcode and Label API. Create and print Swiss Post labels and digital stamps straight from your orders, single or in bulk, with address checking, customs documents and tracking.",
      angle: {
        label: "Your own Swiss Post franking licence",
        body: "Labels are generated with your own Swiss Post franking licence and API credentials, so the postage contract and the rates stay yours.",
      },
      facts: [
        { key: "Type", value: "Shopify app" },
        { key: "Pricing", value: "Free to install" },
        { key: "Carrier", value: "Swiss Post (Barcode and Label API)" },
        { key: "Works with", value: "Shopify Admin" },
        { key: "Languages", value: "English, German, French, Italian" },
      ],
      featureGroups: [
        {
          title: "Labels and stamps",
          items: [
            "Create Swiss Post labels directly from your order admin panel",
            "PostPac Economy, PostPac Priority, Swiss-Express, VinoLog and more",
            "Frank letters and small parcels digitally, without a trip to the counter",
            "Print labels or download them as PDF",
          ],
        },
        {
          title: "Volume and paperwork",
          items: [
            "Bulk processing for many orders at once",
            "CN22 and CN23 customs forms generated automatically for international shipments",
            "Return labels for customers in one click",
            "Configurable label language, print size and notification services",
          ],
        },
        {
          title: "After it ships",
          items: [
            "Addresses checked and corrected against Swiss Post in real time",
            "Tracking codes saved automatically and passed on to your customer",
            "Real-time tracking with a branded tracking page",
            "Email notifications and order updates",
          ],
        },
      ],
      audience: {
        lead: "Shopify merchants shipping with Swiss Post",
        body: "Listed in the Shipping category, working inside Shopify Admin, in English, German, French and Italian. Bulk processing is aimed at stores with high order volume.",
      },
      disclaimer:
        "This product is an independent offering and is not operated or endorsed by Swiss Post (Schweizerische Post AG).",
      logoAlt: "Swiss Shipping Labels app icon",
      screenshots: {
        labels: {
          caption: "Every label, searchable and filterable",
          alt: "Swiss Shipping Labels label overview with filters for status, service, date and country, and a table of generated labels with tracking numbers",
        },
        dashboard: {
          caption: "Inside Shopify Admin",
          alt: "Swiss Shipping Labels dashboard inside Shopify Admin",
        },
        create: {
          caption: "Label creation per order",
          alt: "Creating a Swiss Post shipping label for an order, with service selection",
        },
        stamps: {
          caption: "Digital stamps",
          alt: "Digital stamp purchase screen for letters and small parcels",
        },
        settings: {
          caption: "Label and notification settings",
          alt: "Swiss Shipping Labels settings for label language, print size and notification services",
        },
      },
    },
  },

  about: {
    eyebrow: "About",
    heading: "A small Swiss software company",
    p1: "Nextenic GmbH is a software company based in Bern, Switzerland. We own and operate two products, both sold directly to the businesses that use them.",
    p2: "They look unrelated and they are, technically: one is email hosting, the other is a Shopify app for printing Swiss Post labels. What they have in common is the kind of problem they solve — the administrative work that sits between a business and its customers, done properly and priced so that the bill does not surprise anyone.",
    p3: "MailRift runs on cloud infrastructure in Germany and is GDPR compliant. Swiss Shipping Labels talks to the official Swiss Post API and uses each merchant’s own franking licence. Neither product is a reseller arrangement.",
    positions: [
      {
        title: "We run what we build",
        body: "Both products are operated by the same team that writes them. Support for Swiss Shipping Labels goes to Appengine, the developer named on its Shopify listing; MailRift support goes to support@mailrift.io. There is no layer in between.",
      },
      {
        title: "The products keep their own brands",
        body: "MailRift and Swiss Shipping Labels have separate names, separate sites, separate pricing and separate documentation. This page links out to them rather than absorbing them, because a merchant looking for Swiss Post labels should not have to learn our company name first.",
      },
      {
        title: "Pricing you can read in one line",
        body: "MailRift costs from CHF 4.90 a month per domain, and one subscription covers every mailbox on that domain. Swiss Shipping Labels is free to install and works with your own Swiss Post franking licence. Both are cancellable monthly.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch",
    lead: "For partnerships, press, invoicing or anything about the company itself, email us. We read everything that arrives here.",
    copyAddress: "Copy address",
    copied: "Copied",
    copiedAnnouncement: "{email} copied to clipboard",
    supportHeading: "Product support",
    supportViaShopify: "Support via the Shopify listing",
    note: "Nextenic GmbH is registered in Switzerland, at Staufferstrasse 30, 3006 Bern. Full details are on the Impressum page.",
  },

  footer: {
    tagline:
      "Nextenic GmbH builds and operates software products from Bern, Switzerland.",
    products: "Products",
    legal: "Legal",
    contact: "Contact",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels is an independent offering and is not operated or endorsed by Swiss Post (Schweizerische Post AG). Shopify is a trademark of Shopify Inc.",
  },

  legal: {
    back: "Back to nextenic",
    /* The bracketed notes are instructions to the site owner, not visitor copy,
       so they stay in English in every locale. */
    toFill: "still to be supplied",
    impressum: {
      title: "Impressum",
      subtitle: "Legal notice",
      company: "Company",
      contact: "Contact",
      register: "Commercial register",
      registeredOffice: "Registered office: Bern, Switzerland",
      registerPending:
        "Commercial register number (UID) and VAT number: not yet available. They will be published here once assigned.",
      management: "Management",
      managingDirector: "Managing director: Pablo Wynistorf",
      responsible: "Responsible for content",
      responsibleBody: "Pablo Wynistorf, at the address above.",
      ourProducts: "Products operated by Nextenic GmbH",
      ourProductsBody:
        "Each product publishes its own imprint and privacy policy, which apply to the use of that product.",
      disclaimer: "Disclaimer",
      disclaimerNote:
        "TO FILL: liability and link disclaimer, copyright notice, applicable law and place of jurisdiction.",
      swissPostNote:
        "Swiss Shipping Labels is an independent offering and is not operated or endorsed by Swiss Post (Schweizerische Post AG).",
    },
    datenschutz: {
      title: "Datenschutz",
      subtitle: "Privacy policy",
      controller: "Controller",
      controllerBody: "Nextenic GmbH, Staufferstrasse 30, 3006 Bern, Switzerland.",
      seeImpressum: "Further company details are on the Impressum page.",
      representative:
        "TO FILL or remove: data protection representative in the EU, if required.",
      thisSite: "This website",
      thisSiteBody:
        "This site is a static website. It sets no cookies, embeds no analytics or tracking scripts, and has no contact form — the contact address is a plain mailto link. Your language and colour-mode preferences are stored locally in your own browser and are never transmitted.",
      fontsBody:
        "Web fonts are loaded from Google Fonts, which means your browser contacts fonts.gstatic.com and that request carries your IP address.",
      fontsNote:
        "TO FILL: confirm this arrangement, or self-host the fonts to remove the third-party request entirely.",
      hostingNote:
        "TO FILL: GitHub Pages (GitHub, Inc.) serves this site and processes server log data including IP addresses — describe and give the legal basis.",
      email: "Email correspondence",
      emailNote:
        "TO FILL: what happens to a message sent to our contact address — purpose, legal basis, retention period.",
      ourProducts: "Our products",
      ourProductsBody:
        "This policy covers this website only. MailRift and Swiss Shipping Labels each process personal data as part of their own operation and publish their own privacy policies:",
      mailriftPolicy: "MailRift privacy policy",
      sslPolicy: "Swiss Shipping Labels privacy policy",
      rights: "Your rights",
      rightsNote:
        "TO FILL: rights of access, rectification, erasure, restriction, objection and data portability, how to exercise them, and the competent supervisory authority.",
      changes: "Changes",
      changesNote: "TO FILL: how changes to this policy are published.",
    },
  },
};
