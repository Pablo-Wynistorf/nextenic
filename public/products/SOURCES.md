# Asset provenance

Every image in this directory was downloaded from the product's own site or its
Shopify App Store listing on 14 September 2026. Nothing here is generated, mocked
or redrawn.

Files were re-encoded to WebP and resized to the two widths the site actually
serves via `srcset`. The originals are not committed because `public/` ships
wholesale to GitHub Pages and the source files totalled 3.4 MB; they are
re-fetchable from the URLs below at any time.

## mailrift/

Source site: <https://mailrift.io>

| File | Original source URL | Original |
| --- | --- | --- |
| `logo-192.webp` | <https://mailrift.io/logo.png> | 1280×1280 PNG |
| `webmail-inbox-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/webmail-inbox.webp> | 2200×1375 |
| `webmail-compose-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/webmail-compose.webp> | 2200×1375 |
| `calendar-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/calendar.webp> | 2200×1375 |
| `domains-dns-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/domains-dns.webp> | 2200×1375 |
| `mailbox-settings-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/mailbox-settings.webp> | 2200×1375 |
| `api-credentials-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/api-credentials.webp> | 2200×1375 |
| `api-credential-new-1600.webp`, `-800.webp` | <https://mailrift.io/screenshots/api-credential-new.webp> | 2200×1375 |
| `mobile-inbox-560.webp` | <https://mailrift.io/screenshots/mobile-inbox.webp> | 900×1948 |

## swiss-shipping-labels/

Source site: <https://swiss-shipping-labels.ch> ·
Listing: <https://apps.shopify.com/swiss-shipping-labels>

| File | Original source URL | Original |
| --- | --- | --- |
| `app-icon-192.webp` | <https://cdn.shopify.com/app-store/listing_images/49a7da2f5f1af407d002b15b55189273/icon/CMmA8oXs6pUDEAE=.png> | 1200×1200 PNG |
| `screenshot-1-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/CI3n2pmuk5UDEAE=.jpeg> | 1600×900 |
| `screenshot-2-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/CIPzz5muk5UDEAE=.jpeg> | 1600×900 |
| `screenshot-3-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/CJfW8Zmuk5UDEAE=.jpeg> | 1600×900 |
| `screenshot-4-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/CMLGxJmuk5UDEAE=.jpeg> | 1600×900 |
| `screenshot-5-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/CNX85Zmuk5UDEAE=.jpeg> | 1600×900 |
| `screenshot-6-*.webp` | <https://cdn.shopify.com/app-store/listing_images/cd39e14ab39e1461f36a4011f201d615/desktop_screenshot/COOquZmuk5UDEAE=.jpeg> | 1600×900 |

The site's own `https://swiss-shipping-labels.ch/icon.jpg` was also downloaded but
is not used: it is served with a `.jpg` extension while the bytes are PNG, and the
App Store icon above is the higher-resolution version of the same mark.

## Re-fetching

```bash
# MailRift
curl -O https://mailrift.io/logo.png
curl -O https://mailrift.io/screenshots/webmail-inbox.webp

# Swiss Shipping Labels listing images are behind hashed CDN paths;
# re-read them from the listing HTML:
curl -sL https://apps.shopify.com/swiss-shipping-labels \
  | grep -oE 'https://cdn\.shopify\.com/app-store/listing_images/[^"]+desktop_screenshot/[^"?]+\.jpeg'
```
