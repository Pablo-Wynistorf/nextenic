# Product research — Nextenic GmbH website

Research collected on 14 September 2026 for building the Nextenic umbrella site.

**Ground rule for this document:** every statement below appears on a source listed under it.
Nothing is inferred, rounded or embellished. Where sources disagree, the disagreement is
recorded rather than resolved silently. Anything unclear is listed under
"Deliberately excluded" at the end instead of being guessed.

---

## 1. MailRift

### Name and spelling

The product spells itself **MailRift**, with a capital R, in the `<title>`, the
`author` meta tag, the JSON-LD `Organization.name` and the in-app header.
The brief referred to it as "Mailrift"; the site's own spelling is used on the website.

Source: `https://mailrift.io/` (HTML head, JSON-LD), in-app screenshot `webmail-inbox.webp`.

### Tagline and positioning

- Title tag / primary tagline: **"MailRift — Email Hosting on Your Own Domain"**
- Positioning sentence (`<noscript>` body copy): "MailRift puts real mailboxes on a domain
  you already own, with a full webmail client, calendar, contacts, forwarding and inbound
  routing. One subscription covers one domain and every mailbox on it, so the bill does not
  move when you add a colleague."
- JSON-LD `Organization.description`: "Email hosting on your own domain, priced per domain
  rather than per user."
- FAQ positioning: "It replaces the mail side of Google Workspace or Microsoft 365, and it
  is priced per domain instead of per person."

The per-domain-not-per-seat pricing model is the single most repeated claim on the page. It
is the product's actual differentiator and should lead the section copy.

Source: `https://mailrift.io/` (meta description, `<noscript>` block, JSON-LD `FAQPage`).

### Hosting location — AWS Frankfurt, confirmed on the second pass

**Update.** The first pass only had the marketing page, which says "Germany" and
"first-class cloud infrastructure" without naming a provider. The imprint and privacy
pages, fetched later, name it explicitly:

- `https://mailrift.io/imprint`, "Platform Development & Operation": "MailRift is developed
  and operated from Switzerland. Customer data is hosted with Amazon Web Services in the EU
  (Frankfurt, Germany; region eu-central-1)."
- `https://mailrift.io/privacy`, §4 "Data Hosting & Storage Location": "Your account data,
  emails, attachments, and associated metadata are stored and processed on Amazon Web
  Services infrastructure located in the European Union (Frankfurt, Germany; region
  eu-central-1). Switzerland recognises the EU/EEA as providing adequate data protection, so
  storage within the EU does not require additional transfer safeguards under the FADP."
- §8 names AWS as a subprocessor; Stripe processes payments.
- §10: personal data and emails are deleted within 30 days of account deletion.

So the brief's "hosted on AWS" is correct and now sourced. The marketing sections of the
website still say "hosted in Germany" — the plain-language version — and the Impressum names
AWS Frankfurt, matching the products' own imprint. Nothing describes it as Swiss-hosted.

The original marketing-page wording, for reference:

- meta description: "Hosted entirely in Germany, GDPR compliant."
- JSON-LD: "Hosted entirely in Germany and GDPR compliant."
- FAQ "Where is my email data stored?": "On first-class cloud infrastructure in Germany.
  Mail bodies, attachments, contacts and calendar entries are encrypted at rest with AES-256
  and in transit with TLS. Nothing is replicated outside the EU and nothing is scanned for
  advertising."

This is consistent with the brief's intent (not Swiss-hosted) and with AWS `eu-central-1`
being in Frankfurt, but the website will say **"hosted in Germany"** because that is what the
source says. It will not say "AWS", since the product site does not name the provider.

Source: `https://mailrift.io/` (meta description, JSON-LD `SoftwareApplication.description`,
JSON-LD `FAQPage`).

### Feature list (as described on the site)

Taken from the JSON-LD `featureList` and the `<noscript>` feature list. Both agree.

| Feature | Detail as stated |
| --- | --- |
| Webmail client | Threaded reading, rich composing, folders, search, read state |
| Custom domain setup | Guided MX, SPF, DKIM and DMARC verification |
| Domain Connect | One-click DNS on supported registrars |
| Real mailboxes per domain | Each with its own login, storage and settings |
| Plus-aliases | Unlimited, `you+anything@yourdomain.com`, no configuration |
| Calendar and contacts | Per mailbox |
| Mobile apps | iOS and Android, push notifications for new mail |
| Inbound routing rules | Sort, file, tag and forward on arrival |
| Email forwarding | To verified external addresses, still sending from your own domain |
| Team sharing | Access grants per mailbox or per domain, revocable |
| Deliverability | SPF, DKIM and DMARC configured for you |
| Send quotas | Four rolling windows per domain — minute, hour, day, month, enforced atomically, counted in recipients rather than messages |
| Signed inbound webhooks | HMAC-signed, from the Plus plan upward |
| MCP server | For AI agents such as Claude, Cursor and Windsurf, from Plus upward |
| REST API | Scoped bearer credentials, from Pro upward |
| SDK | Typed JavaScript and TypeScript SDK, `@mailrift/sdk` on npm |
| Account-scoped API keys | Provision domains and mailboxes, from Pro |
| Tracking | Opt-in open tracking from Plus, link tracking from Pro |
| Hosted attachments | Expiring download links, from Pro |
| Sign-in | Passwordless via Google, no passwords stored |
| Encryption | AES-256 at rest, TLS in transit |
| Compliance | GDPR / DSGVO compliant, all data stored in Germany |
| Privacy stance | No ads, no tracking cookies, no data sold |
| SMTP and IMAPS | Enterprise only |
| Free trial | On a test subdomain, no credit card required |

Trial detail from the FAQ: "MailRift creates a test subdomain under a domain you own and
gives you one mailbox, 1 MB of storage and three outbound emails."

Source: `https://mailrift.io/` (JSON-LD `SoftwareApplication.featureList`, `<noscript>` list,
JSON-LD `FAQPage`).

### Target audience

Not stated as a demographic anywhere. What the site does state:

- It replaces "the mail side of Google Workspace or Microsoft 365" (FAQ).
- Pricing is per domain "so adding a colleague costs nothing extra" (FAQ) — the benefit
  accrues to small teams.
- The Starter tier is described in the plans API as an "Entry tier for a single small domain."
- Developer-facing surfaces (REST API, MCP server, SDK, webhooks) sit on the upper tiers.

The website will characterise the audience only in those terms: teams and businesses running
mail on a domain they own, plus developers who want programmatic access. No invented segments.

Source: `https://mailrift.io/` (JSON-LD `FAQPage`), `https://mailrift.io/api/plans`.

### Pricing — sources disagree, live API used

`https://mailrift.io/api/plans` is the live pricing endpoint. An HTML comment in the page
source states the API is authoritative: "The live source of truth is `src/lambda/api/lib/plans/`,
surfaced at `GET /api/plans`, which is what the rendered page reads."

**Live API values (used):**

| Plan | Monthly | Yearly | Per month billed yearly | Mailboxes | Storage | Sends/month |
| --- | --- | --- | --- | --- | --- | --- |
| Starter | CHF 4.90 | CHF 49.00 | CHF 4.08 | 5 | 5 GB | 300 |
| Plus | CHF 14.90 | CHF 149.00 | CHF 12.42 | 20 | 20 GB | 1,000 |
| Pro | CHF 49.00 | CHF 490.00 | CHF 40.83 | 100 | 100 GB | 10,000 |
| Enterprise | contact sales | — | — | 1,000 | 1 TB | 100,000 |

All tiers are priced **per domain per month**. Annual billing saves 16 % (`annualSavingPercent: 16`).

Capability gates from the API `limits` object:

- Starter: no webhooks, no MCP, no REST API, no tracking. 3 routing rules and 1 forwarding
  address per mailbox, shareable with 3 people.
- Plus: MCP access, open tracking, 1 webhook per mailbox, 10 routing rules, 3 forwarding
  addresses, shareable with 10 people.
- Pro: adds REST API, account API, link tracking, hosted attachments, 3 webhooks per mailbox.
- Enterprise: flagged `contactSales: true`, and its own API description says "Values are
  provisional placeholders" — so no Enterprise numbers are published on the website.

**Stale values found elsewhere on the same page (not used):** the JSON-LD `offers` block and
the `<noscript>` block both list Plus at CHF 9.90 and Pro at CHF 29.00. These contradict the
live API. Because the rendered page reads the API, the API values are authoritative and the
older figures are ignored.

**Decision for the website:** the Nextenic site quotes only **"from CHF 4.90 per month per
domain"** — the one figure every source agrees on — and links to `mailrift.io/#pricing` for the
full table. An umbrella site that reprints a full price table becomes wrong the moment the
product changes price, and here the sources already disagree. Enterprise is described as
"quoted individually" with no numbers.

Enterprise scope, as listed in the `<noscript>` block: a dedicated tenant, unlimited domains,
SMTP and IMAPS access, company SSO, customer-managed encryption keys, custom data residency,
advanced audit logging and a custom SLA.

Source: `https://mailrift.io/api/plans`, `https://mailrift.io/` (HTML comment, JSON-LD,
`<noscript>`).

### Official links

| Purpose | URL |
| --- | --- |
| Homepage | `https://mailrift.io` |
| Alternate domain | `https://mailrift.ch` (returns HTTP 200 independently, does not redirect to `.io`) |
| Pricing | `https://mailrift.io/#pricing` |
| Features | `https://mailrift.io/features` |
| Docs | `https://mailrift.io/docs/overview` |
| REST API docs | `https://mailrift.io/docs/rest-overview` |
| MCP docs | `https://mailrift.io/docs/mcp-overview` |
| API explorer | `https://mailrift.io/api-explorer` |
| Login / signup | `https://mailrift.io/login` |
| Webmail app | `https://mailrift.io/app` |
| Imprint | `https://mailrift.io/imprint` |
| Privacy | `https://mailrift.io/privacy` |
| Terms | `https://mailrift.io/terms` |
| Support email | `support@mailrift.io` |

Routes were read from the client bundle's router table
(`https://mailrift.io/assets/index-BdHqywva.js`); support email from JSON-LD `contactPoint`.
No Shopify or app-store listing exists for MailRift.

### Assets downloaded

Stored in `/public/products/mailrift/`, source URLs recorded in
`/public/products/SOURCES.md` and in code comments where used.

| File | Source URL | Notes |
| --- | --- | --- |
| `logo.png` | `https://mailrift.io/logo.png` | 1280×1280 PNG, alpha. Byte-identical to `favicon.png` on the source site. |
| `webmail-inbox.webp` | `https://mailrift.io/screenshots/webmail-inbox.webp` | 2200×1375 |
| `webmail-compose.webp` | `https://mailrift.io/screenshots/webmail-compose.webp` | 2200×1375 |
| `calendar.webp` | `https://mailrift.io/screenshots/calendar.webp` | 2200×1375 |
| `domains-dns.webp` | `https://mailrift.io/screenshots/domains-dns.webp` | 2200×1375 |
| `mailbox-settings.webp` | `https://mailrift.io/screenshots/mailbox-settings.webp` | 2200×1375 |
| `mobile-inbox.webp` | `https://mailrift.io/screenshots/mobile-inbox.webp` | 900×1948, portrait |
| `api-credentials.webp` | `https://mailrift.io/screenshots/api-credentials.webp` | 2200×1375 |
| `api-credential-new.webp` | `https://mailrift.io/screenshots/api-credential-new.webp` | 2200×1375 |

Observed visual identity, for palette coordination: dark UI on near-black
(`theme-color` is `#0b0b14`), indigo/violet primary action colour, coloured avatar chips.

---

## 2. Swiss Shipping Labels

### Name, tagline and positioning

- Shopify App Store title: **"Swiss Shipping Labels — Shipping labels for Swiss Post — quick & easy"**
- Listing subtitle: "Generate Swiss Post labels per order or in Bulk. Tracking, delivery
  notifications, and return labels"
- In-app header (visible in listing screenshots): "SWISS SHIPPING LABELS — Create Shipping
  Labels using the Swiss Post E-Commerce API"
- Own site H1 (German): "Versandlabels der Schweizerischen Post in Shopify erstellen"
- Own site positioning (German): the Shopify app for creating and printing Swiss Post shipping
  labels and stamps directly from orders, via the official Swiss Post interface, including
  address checking, customs documents and automatic tracking.

Full listing description: "Swiss Shipping Labels connects your store to the Swiss Post Barcode
and Label API. It lets you create shipping labels for orders directly from your admin panel.
You can choose from multiple delivery methods including PostPac Economy, PostPac Priority,
Swiss-Express, and VinoLog. The app supports return labels, configurable notification services,
shipment tracking, and label printing or downloading as PDF. Labels are generated using your
own Swiss Post franking license and API credentials."

Note the two API names used by the two sources: the App Store listing says "Swiss Post Barcode
and Label API", the in-app header says "Swiss Post E-Commerce API". Both are quoted as-is where
relevant; the website uses the neutral phrasing "the official Swiss Post API" plus the specific
"Barcode and Label API" from the listing.

Sources: `https://apps.shopify.com/swiss-shipping-labels`,
`https://swiss-shipping-labels.ch/`, listing screenshot `screenshot-2.jpeg`.

### The franking-licence detail

The single most important qualifier on the listing: **"Labels are generated using your own
Swiss Post franking license and API credentials."** The merchant brings their own Swiss Post
contract. This belongs on the website because it sets the setup expectation, and it is the kind
of detail a generic marketing page would drop.

Source: `https://apps.shopify.com/swiss-shipping-labels`.

### Feature list

Listing bullet points (verbatim):

1. Create Swiss Post shipping labels directly from your order admin panel
2. Choose from PostPac Economy, Priority, Swiss-Express, VinoLog, and more
3. Generate return labels for customers with one click
4. Print labels or download as PDF with shipment tracking links
5. Configure label language, print size, and notification services

Shopify listing feature taxonomy: *Labels and packaging* — label creation, label customization,
bulk printing, address validation, return labels, delivery date. *Managing shipments* —
real-time tracking, branded tracking page, email notifications, order updates.

The product's own site adds (German, translated for the website):

- Fast label creation — Swiss Post labels straight from Shopify orders, singly or bundled
- Digital stamps — frank letters and small parcels digitally, without going to a post office
- Bulk processing — many orders at once, for high order volume
- Customs documents included — CN22 and CN23 forms generated automatically for international shipments
- Real-time address checking — delivery addresses checked and corrected by Swiss Post
- Shipment tracking — tracking codes saved automatically and passed to customers
- Official Swiss Post interface — connected to the official API

Sources: `https://apps.shopify.com/swiss-shipping-labels`, `https://swiss-shipping-labels.ch/`.

### Target audience

Stated facts only: it is a Shopify app in the **Shipping** category that works with **Shopify
Admin**, available in **English, German, French and Italian**, and the listing carries a
"Based in Switzerland" badge. Bulk processing is described as suited to high order volume.

So: Shopify merchants shipping with Swiss Post from Switzerland. Nothing further is claimed.

Source: `https://apps.shopify.com/swiss-shipping-labels`.

### Pricing

- Shopify App Store pricing section: **Free**
- Own site FAQ (German): you can start free and grow flexibly; the app is cancellable monthly.

The site's phrasing implies paid tiers may exist beyond the free entry point, but no paid
prices are published on either source, so the website says "Free to install" and links to the
listing. No invented tiers.

Sources: `https://apps.shopify.com/swiss-shipping-labels`, `https://swiss-shipping-labels.ch/`.

### Listing metadata

| Field | Value |
| --- | --- |
| Rating | 5.0 out of 5, from 5 reviews (100 % five-star) |
| Launched | 13 April 2026 |
| Developer | Appengine |
| Support | "App support provided by Appengine." |
| Category | Shipping |
| Works with | Shopify Admin |
| Languages | English, German, French, Italian |
| Badge | Based in Switzerland |

The review count is 5. That is a small number and the website will **not** display it as social
proof — quoting "5.0 stars" while hiding that it rests on five reviews would be misleading. The
site links to the listing and lets the reader see both numbers together.

Source: `https://apps.shopify.com/swiss-shipping-labels`.

### Required disclaimer

The product site carries this notice, and the Nextenic site reproduces it in the same section:

> "Dieses Produkt ist ein unabhängiges Angebot und wird nicht von der Schweizerischen Post AG
> betrieben oder unterstützt."

English on the Nextenic site: "This product is an independent offering and is not operated or
endorsed by Swiss Post (Schweizerische Post AG)."

Source: `https://swiss-shipping-labels.ch/`.

### Official links

| Purpose | URL |
| --- | --- |
| Homepage | `https://swiss-shipping-labels.ch` |
| Shopify App Store listing | `https://apps.shopify.com/swiss-shipping-labels` |
| Guide / docs ("Anleitung") | `https://swiss-shipping-labels.ch/docs` |
| Privacy | `https://swiss-shipping-labels.ch/privacy` |
| Imprint | `https://swiss-shipping-labels.ch/impressum` |
| Language variants | `?lang=de`, `?lang=en`, `?lang=fr`, `?lang=it` |

There is no separate login URL: the app is installed and used inside Shopify Admin. The
homepage CTA is "Gratis loslegen" (start free) and leads to installation.

Source: `https://swiss-shipping-labels.ch/` (link targets), client bundle
`https://swiss-shipping-labels.ch/assets/index-CkXCPmoK.js` (Shopify listing URL).

### Assets downloaded

Stored in `/public/products/swiss-shipping-labels/`.

| File | Source URL | Notes |
| --- | --- | --- |
| `app-icon-192.webp` | `https://swiss-shipping-labels.ch/icon.jpg` | 771×774. Served with a `.jpg` extension but the bytes are PNG. **This is the current logo.** |
| ~~App Store listing icon~~ | `https://cdn.shopify.com/app-store/listing_images/49a7da2f5f1af407d002b15b55189273/icon/CMmA8oXs6pUDEAE=.png` | 1200×1200. **Not used: superseded logo.** The listing still carries an older dark crescent mark, not the yellow barcode-label icon the product uses today. Higher resolution, wrong artwork. |
| `screenshot-1.jpeg` … `screenshot-6.jpeg` | `https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/*.jpeg?height=900&quality=90&width=1600` | 6 listing screenshots, 1600×900 each |

Observed visual identity: Swiss Post yellow (`#FFD800`-range) with black type on light
backgrounds, high-contrast and flat.

---

## 3. Company-level facts

| Fact | Status |
| --- | --- |
| Nextenic GmbH, Swiss company, based in Bern | From the brief. Not independently verifiable on either product site. |
| Owns and operates MailRift and Swiss Shipping Labels | From the brief. |
| Contact address `contact@nextenic.ch` / `contact@nextenic.com` | Corrected by the client after the first draft, which used `contact@appengine.ch` from the original brief. The site now picks the TLD from the domain the visitor is on — see `src/lib/contact.js`. |

The Shopify listing names **Appengine** as the app's developer and support provider, which is
the only external corroboration of an operating entity found during research. That name is
still used on the site where it is factually correct — Swiss Shipping Labels support does go
to Appengine per the listing — but company contact now runs through the Nextenic domains.

No Nextenic GmbH commercial-register entry, founding date, headcount or address was verified,
so the website states none of those.

---

## 3a. Legal text, consolidated from the products' own imprints

The Nextenic Impressum and Datenschutz pages are built from the legal text the company
already publishes, not drafted from scratch. Sources and what each supplied:

### `https://swiss-shipping-labels.ch/impressum`

Client-rendered; the values are held in the page bundle, with the operator fields stored as
character-code arrays that decode to:

| Field | Value |
| --- | --- |
| Operator | Pablo Wynistorf |
| Street | Staufferstrasse 30 |
| City | 3006 Bern |
| Country | Switzerland |
| Contact | `contact@swiss-shipping-labels.ch` |

- Applicable law, published in all four languages: "Swiss law applies. Place of jurisdiction
  is Bern, Switzerland." / "Es gilt Schweizer Recht. Gerichtsstand ist Bern, Schweiz." / "Le
  droit suisse est applicable. Le for juridique est Berne, Suisse." / "Si applica il diritto
  svizzero. Il foro competente è Berna, Svizzera."
- Swiss Post disclaimer, also in four languages. The fuller version on
  `/privacy` adds: "All Swiss Post trademarks and logos are the property of their respective
  owner. This app merely provides a service that integrates with the Swiss Post API."
- The page sets `robots: noindex, nofollow`.
- Privacy policy last updated 27 July 2026.

### `https://mailrift.io/imprint`

- Headed "Impressum / Legal Notice (gemäss Art. 3 Abs. 1 lit. s UWG)".
- **Legal form and registration**, verbatim: "Legal form: sole proprietorship
  (Einzelunternehmen), operated under the owner's own name" · "Not entered in the Swiss
  Commercial Register (Handelsregister)" · "No enterprise identification number (UID) and no
  VAT/MWST registration at this time".
- **Representative in the EU (Art. 27 GDPR)**: the page carries `[TO BE APPOINTED]`,
  `[ADDRESS IN AN EU MEMBER STATE]` and `[EU REP CONTACT EMAIL]`, with the note "This
  representative must be appointed before serving EU/EEA users."
- Liability for Content, Liability for Links and Copyright clauses, reproduced in substance.
- Data protection contact: `support@mailrift.io`, citing FADP and, where applicable, GDPR.

### `https://mailrift.io/privacy`

Section list: Overview & Applicable Law · Data Controller · Representative in the EU ·
Data Hosting & Storage Location · Data We Collect · Purpose of Processing · Legal Basis
(GDPR) & FADP Principles · Subprocessors & Data Sharing · reCAPTCHA · Data Retention · Your
Rights · Right to Lodge a Complaint · Data Breach Notification · Intended for Consumers ·
Cookies & Local Storage · Changes to This Policy · Contact.

The rights list on the Nextenic privacy page uses the same article pairings this page cites:
access (Art. 15 GDPR / Art. 25 FADP), rectification (16/32), erasure (17/32), restriction
(18), portability (20/28), objection (21).

### Conflict to resolve: "GmbH" versus the published legal form

The brief and the site chrome call the company **Nextenic GmbH**. Both product imprints
describe a **sole proprietorship, not entered in the commercial register, with no UID and no
VAT registration**, operated by Pablo Wynistorf at the same Bern address.

These cannot both be true: a Swiss GmbH comes into existence only on registration in the
commercial register, and would have a UID. The Impressum therefore reproduces the published
legal form rather than asserting a GmbH that the register does not show, and flags the
question. Either the GmbH is in formation — in which case the suffix should not be used
publicly until registration — or the imprints on both products are out of date.

Also worth noting: each product publishes its own contact address
(`contact@swiss-shipping-labels.ch`, `support@mailrift.io`), distinct from the company address
`contact@nextenic.ch` / `.com` used on this site.

## 4. Deliberately excluded

Things left off the website because they could not be verified, or would mislead:

- **Any customer count, revenue, uptime figure or "trusted by" claim.** Neither site publishes any.
- **MailRift's cloud provider by name.** The brief says AWS; the site says only "first-class
  cloud infrastructure in Germany".
- **MailRift Plus/Pro/Enterprise prices on the Nextenic site.** Sources disagree (see above);
  only the agreed "from CHF 4.90" is used.
- **Swiss Shipping Labels paid tiers.** Implied by "start free and grow" but never priced.
- **The 5.0 rating as a standalone badge.** Real, but resting on five reviews.
- **Nextenic's founding year, team size, street address, phone number.** Not supplied, not invented.
- **Any integration list beyond what is named.** MailRift names Google sign-in, Domain Connect,
  Claude/Cursor/Windsurf via MCP, npm SDK. Swiss Shipping Labels names Swiss Post and Shopify
  Admin. Nothing else is added.
- **MailRift as "Swiss-hosted".** Explicitly excluded per the brief and per the source.
