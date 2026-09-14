/**
 * English, the reference dictionary.
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
      "Nextenic GmbH, software for the mail you send and the parcels you ship",
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
    home: "Nextenic, home",
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
    carriers: "carrier integrated: Swiss Post, via its official API",
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
            "Unlimited plus-aliases, so you+anything@yourdomain.com works with no setup",
          ],
        },
        {
          title: "Domains and delivery",
          items: [
            "Guided MX, SPF, DKIM and DMARC verification when you add a domain",
            "Domain Connect applies the whole record set in one click on supported registrars",
            "Inbound routing rules that sort, file, tag and forward on arrival",
            "Send quotas across four rolling windows: minute, hour, day and month",
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
        body: "The Starter tier is described as an entry tier for a single small domain. The programmable surfaces (REST API, MCP server, SDK and webhooks) sit on the upper plans, for developers who want mail as infrastructure.",
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
          caption: "Webmail: threaded reading, folders, search",
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
    p2: "They look unrelated and they are, technically: one is email hosting, the other is a Shopify app for printing Swiss Post labels. What they have in common is the kind of problem they solve, the administrative work that sits between a business and its customers, done properly and priced so that the bill does not surprise anyone.",
    p3: "MailRift runs on AWS in Frankfurt, Germany, and is GDPR compliant. Swiss Shipping Labels talks to the official Swiss Post API and uses each merchant’s own franking licence. Neither product is a reseller arrangement.",
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
    impressum: "Imprint",
    datenschutz: "Privacy",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels is an independent offering and is not operated or endorsed by Swiss Post (Schweizerische Post AG). Shopify is a trademark of Shopify Inc.",
  },

  /**
   * Legal pages.
   *
   * Consolidated from the legal text the company already publishes on its own
   * products, which is the authoritative source:
   *   https://mailrift.io/imprint · /privacy · /terms
   *   https://swiss-shipping-labels.ch/impressum · /privacy
   *
   * The liability, link and copyright clauses and the legal-form statement are
   * MailRift's. The applicable-law clause is Swiss Shipping Labels', which already
   * publishes it in all four of these languages. The rights list carries the same
   * GDPR/FADP article references the products cite.
   *
   * Two items are genuinely pending rather than unwritten, and say so: the EU
   * Art. 27 representative (MailRift's own imprint marks it "[TO BE APPOINTED]")
   * and the commercial register entry.
   */
  legal: {
    back: "Back to nextenic",
    impressum: {
      /* Titled in the reader's language, with the German name kept as the
         standfirst because that is the term Swiss visitors scan for. */
      title: "Imprint",
      subtitle: "Impressum",
      uwgNote: "Legal notice pursuant to Art. 3 para. 1 lit. s UCA (UWG).",
      operator: "Operator",
      operatorIntro:
        "This website and the Nextenic products are operated from Switzerland by:",
      legalForm: "Legal form and registration",
      legalFormItems: [
        "Legal form: sole proprietorship (Einzelunternehmen), operated under the owner's own name",
        "Not entered in the Swiss Commercial Register (Handelsregister)",
        "No enterprise identification number (UID) and no VAT/MWST registration at this time",
      ],
      contact: "Contact",
      responsible: "Responsible for content",
      responsibleBody: "Pablo Wynistorf, at the address above.",
      dataProtection: "Data protection contact",
      dataProtectionBody:
        "For all data protection matters, and to exercise your rights under the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR), use the contact address above.",
      euRep: "Representative in the European Union (Art. 27 GDPR)",
      euRepBody:
        "The operator is established in Switzerland, outside the EU/EEA. Where our products are offered to consumers in the EU/EEA, a representative in the Union pursuant to Art. 27 GDPR applies.",
      euRepPending:
        "Not yet appointed. Until a representative is designated, EU data subjects and authorities may contact the operator directly using the details above.",
      law: "Applicable law",
      lawText: "Swiss law applies. Place of jurisdiction is Bern, Switzerland.",
      liabilityContent: "Liability for content",
      liabilityContentBody:
        "We prepare the content of this website with care. However, we assume no liability for the accuracy, completeness or timeliness of the content provided. As the operator, we are responsible for our own content in accordance with general law. We are not obliged to monitor third-party information transmitted or stored through our services, nor to investigate circumstances indicating illegal activity, without prejudice to our obligation to remove or block access to information once we obtain knowledge of a specific infringement.",
      liabilityLinks: "Liability for links",
      liabilityLinksBody:
        "This website contains links to external third-party websites over whose content we have no influence. We therefore accept no liability for that external content. The respective provider or operator of the linked pages is always responsible for their content.",
      copyright: "Copyright",
      copyrightBody:
        "The content and works on these pages are protected by copyright. Any reproduction, processing, distribution or exploitation outside the limits of copyright law requires the prior written consent of the respective rights holder.",
      ourProducts: "Products we operate",
      ourProductsBody:
        "Each product publishes its own imprint and privacy policy, which govern the use of that product.",
      hosting: "Development and operation",
      hostingBody:
        "Our products are developed and operated from Switzerland. MailRift customer data is hosted with Amazon Web Services in the European Union (Frankfurt, Germany; region eu-central-1). Swiss Shipping Labels runs as a Shopify app and connects to the official Swiss Post API using each merchant's own franking licence.",
      swissPostNote:
        "Swiss Shipping Labels is an independent third-party service and is in no way affiliated with, endorsed by or associated with Swiss Post (Die Schweizerische Post AG). All Swiss Post trademarks and logos are the property of their respective owner.",
    },
    datenschutz: {
      title: "Privacy Policy",
      subtitle: "Datenschutz",
      scopeNote:
        "This policy covers this website, nextenic.ch and nextenic.com. Our two products process personal data as part of their own operation and publish their own policies. See the section at the end.",
      controller: "Controller",
      controllerBody:
        "Pablo Wynistorf, Staufferstrasse 30, 3006 Bern, Switzerland, operating the Nextenic products.",
      seeImpressum: "Further details are on the Impressum page.",
      representative: "Representative in the EU (Art. 27 GDPR)",
      representativeBody:
        "The operator is established in Switzerland. A representative in the Union pursuant to Art. 27 GDPR has not yet been appointed. Until then, EU data subjects and authorities may contact the operator directly.",
      thisSite: "This website",
      thisSiteBody:
        "This is a static website with no login and no user accounts. Your language and colour mode preferences are stored locally in your own browser, in localStorage, and are never transmitted to us.",
      analytics: "Analytics",
      analyticsBody:
        "We use Google Analytics 4, provided by Google Ireland Limited, to see which pages are read and how visitors reach them. It sets cookies in your browser and processes your IP address, along with technical data such as device type, browser, approximate location derived from the IP address, and the pages you open. IP addresses are shortened by Google before storage. We run a separate data stream for each domain, so nextenic.ch and nextenic.com are measured apart.",
      analyticsTransfer:
        "Data may be transferred to Google LLC in the United States. Google relies on the EU Standard Contractual Clauses together with the Swiss addendum recognised by the FDPIC, and on the EU/Swiss adequacy decisions for certified recipients. Analytics does not run on local development or preview builds.",
      analyticsConsentNote:
        "TO FILL: decide the consent approach. Google Analytics sets cookies and is generally treated as requiring prior opt in consent for visitors in the EU/EEA, which means a consent banner and suppressing the tag until consent is given. Confirm this with the lawyer reviewing the page, and state the legal basis here once decided.",
      contactForm: "Contact form",
      contactFormNote:
        "TO FILL: a contact form is planned but not yet live. When it ships, document the fields collected, the purpose, the legal basis, where the submissions are sent and how long they are kept.",
      hosting: "Hosting",
      hostingBody:
        "This website is served by GitHub Pages (GitHub, Inc.). Like any web server, it processes technical connection data including your IP address, the requested file, the time of the request and your browser's user agent, in order to deliver the page and maintain its security and stability. The legal basis is our legitimate interest in operating a secure website (Art. 6 para. 1 lit. f GDPR; Art. 31 FADP).",
      fonts: "Web fonts",
      fontsBody:
        "The typefaces are loaded from Google Fonts, so your browser contacts fonts.gstatic.com and that request carries your IP address. The legal basis is our legitimate interest in consistent presentation.",
      fontsNote:
        "TO FILL: decide whether to keep Google Fonts or self-host them. Self-hosting removes this third-party request and this disclosure entirely.",
      email: "Email correspondence",
      emailBody:
        "If you write to us, we process your email address, your name if you give it and the content of your message in order to answer you. The legal basis is our legitimate interest in responding to enquiries, or the performance of a contract where your message concerns one.",
      emailNote:
        "TO FILL: state how long enquiry correspondence is retained before deletion.",
      rights: "Your rights",
      rightsBody:
        "Depending on which law applies to you, you have the following rights, which we honour for all visitors regardless of location:",
      rightsItems: [
        "Access to your personal data (Art. 15 GDPR / Art. 25 FADP)",
        "Rectification of inaccurate data (Art. 16 GDPR / Art. 32 FADP)",
        "Erasure of your data (Art. 17 GDPR / Art. 32 FADP)",
        "Restriction of processing (Art. 18 GDPR)",
        "Data portability (Art. 20 GDPR / Art. 28 FADP)",
        "Objection to processing based on legitimate interests (Art. 21 GDPR)",
      ],
      rightsContact:
        "To exercise any of these, write to the contact address in the Impressum.",
      complaint: "Right to lodge a complaint",
      complaintBody:
        "In Switzerland you may lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC). In the EU/EEA you may lodge a complaint with the supervisory authority of your country of residence.",
      ourProducts: "Our products",
      ourProductsBody:
        "MailRift and Swiss Shipping Labels each process personal data as part of their own operation and publish their own privacy policies:",
      mailriftPolicy: "MailRift privacy policy",
      sslPolicy: "Swiss Shipping Labels privacy policy",
      changes: "Changes to this policy",
      changesBody:
        "We may update this policy as the website changes. The current version is always the one published here.",
    },
  },
};
