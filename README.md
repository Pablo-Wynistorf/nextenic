# Nextenic GmbH — company website

Corporate umbrella site for Nextenic GmbH, Bern. It presents the company and links
out to the two products, which keep their own brands and their own homepages:

- **MailRift** — email hosting on your own domain · <https://mailrift.io>
- **Swiss Shipping Labels** — Swiss Post labels inside Shopify · <https://swiss-shipping-labels.ch>

All product copy is derived from those sites and from the Shopify App Store
listing. Every claim is recorded with its source URL in
[`docs/product-research.md`](docs/product-research.md). **If you edit product copy,
update that document too** — the whole point of it is that nothing on this site is
invented.

## Setup

Requires Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the built output
npm run lint
```

If your npm gates install scripts, approve the two that are needed for the build
toolchain to work:

```bash
npm install-scripts approve esbuild @tailwindcss/oxide
```

## Stack

React 19 + Vite 7, JavaScript only — no TypeScript, no `.ts`/`.tsx`, no `tsconfig`.
`jsconfig.json` exists solely to give the editor the `@/*` path alias.

Tailwind CSS v4, configured CSS-first in `src/styles/tokens.css`. Framer Motion
(the `motion` package) for layout and scroll animation, GSAP for the React Bits
components that need it, `ogl` for the two WebGL backdrops, `lucide-react` for
icons.

```
src/
  components/   UI primitives and the React Bits components
  sections/     Hero, Stats, Products, Marquee, About, Contact
  pages/        Home, Impressum, Datenschutz
  lib/          i18n, theme, products data, motion helpers, utils
  locales/      en, de, fr, it
  styles/       tokens.css — the entire design system
public/products/  Product logos and screenshots (see SOURCES.md)
```

## Design decisions

### Colour mode: dark by default, light available

Dark is the base theme and light is opt-in via a `.light` class on `<html>`.

The reasoning is the products themselves. MailRift's interface is dark on
near-black with an indigo accent; Swiss Shipping Labels is Swiss Post yellow on
white. An umbrella site has to sit next to screenshots of both without looking
like it belongs to either. A dark, near-neutral canvas lets both sets of
screenshots read as *theirs* — the light Shopify screenshots gain contrast against
it, and the dark MailRift screenshots sit in it naturally. A light site would have
made the MailRift screenshots look like holes punched in the page.

Both modes ship. The toggle resolves through three states — `system`, `dark`,
`light` — so a visitor who has never touched it follows their OS, and a visitor who
has touched it keeps their choice in `localStorage`. An inline script in
`index.html` applies the resolved class before first paint, so light-mode visitors
never see a dark flash. `src/lib/theme.js` must stay in agreement with that script.

The accent is a single vermilion, `#ff4a26`, borrowed from Swiss poster
typography. It steps down to `#bd2c0b` in light mode, because the brighter tone
only reaches 3.1:1 on the paper background and fails AA for text.

### Typography

- **Bricolage Grotesque** — display. A variable grotesk with an optical size axis
  and real character in the counters; it does not look like a default.
- **Inter Tight** — body. Narrower than Inter, which keeps the long product
  paragraphs compact without losing legibility at 15–17px.
- **JetBrains Mono** — the small uppercase labels, spec-table keys and numbering.
  Used sparingly, and it is what makes the page read as technical rather than
  decorative.

Loaded from Google Fonts with only the weights in use. See the note in
`legal.datenschutz.fontsNote` — if you would rather not have visitors' browsers
contact `fonts.gstatic.com`, self-host them and remove that disclosure.

### Layout

Twelve-column grid, asymmetric throughout: text columns of 4 + 7 with a gap,
product identity in a sticky 5 against screenshots in a 7, and the second product
mirrored so the page never shows the same silhouette twice. Feature columns are
staggered vertically on large screens. Nothing is centred except at the narrowest
widths, where one column is the only sensible arrangement.

Tested down to 360px. The mobile layout is its own design — a full-screen menu with
items at display size and staggered entrance, not the desktop bar collapsed.

## React Bits components

Installed from the `@react-bits` registry, always the **JS** variants (`JS-TW`),
never TypeScript. All of them were copied into `src/components/` by the shadcn CLI
and most needed local changes; each file carries a comment block naming its source
and listing exactly what was changed and why.

| Component | Where | Why this one |
| --- | --- | --- |
| **WebThreads** | Hero backdrop | The hero's one continuously moving element — a fan of glowing filaments drifting and bending toward the pointer. This is what is moving the instant the page loads. |
| **SplitText** | Hero headline | The headline arrives word by word, once. |
| **DecryptedText** | Hero eyebrow | The company line resolves out of noise. Used exactly once. |
| **Magnet** | Hero primary CTA | The main action leans toward the cursor. |
| **ShinyText** | Hero product index | A slow highlight passes across each product name on a long loop. |
| **AnimatedContent** | Everywhere (via `Reveal`) | Every scroll reveal on the site, so distance, duration and easing are decided in one place. |
| **ScrollFloat** | Section and product headings | Headings assemble character by character, scrubbed to scroll position. |
| **TiltedCard** | Product screenshots | Subtle 3D tilt with a pointer-tracked sheen, at 6° rather than the default 14°. |
| **GlareHover** | Product logo tiles | A band of light sweeps the mark on hover. |
| **CountUp** | Stats strip | The four real figures count into place. |
| **ScrollVelocity** | Marquee band | Two rows drifting in opposite directions, responding to scroll speed and direction. A graphic hinge between two dense sections. |
| **GradualBlur** | Under the fixed header | Five masked blur layers, so content dissolves under the header instead of hitting a hard frosted edge. The only component used unmodified. |
| **Topography** | About backdrop | Drifting contour lines. Contour lines are the visual language of Swiss topographic maps, which is a better reason than "it looked nice". |

The hero holds exactly one moving element. Everything else there plays once and
settles, so there is a single thing drawing the eye rather than several competing
for it.

### Components deliberately rejected

- **MagnetLines** was in the hero alongside WebThreads and was removed. Two
  cursor-reactive line systems in one hero competed, and at the size needed to be
  legible it read as stray dashes scattered over the filaments.
- **GridScan** imports `face-api.js` and runs webcam face detection. Not on a
  company landing page.
- **Beams** needs `three`, `@react-three/fiber` and `drei`; **LaserFlow** needs
  `three`. Roughly 600 kB for a backdrop. WebThreads gets a comparable result
  through `ogl`, which was already here.
- **StaggeredMenu** ships its own header, logo and toggle button, which would
  fight the existing header rather than slot into it.

### Motion and reduced motion

Every animated component has a `prefers-reduced-motion` branch, and they are real
branches, not just a CSS override: the two WebGL backdrops create no context and
start no render loop, ScrollVelocity renders static rows, SplitText and ScrollFloat
render unsplit text, CountUp writes its final value immediately. The CSS media
query in `tokens.css` is a second line of defence for anything that writes inline
styles.

This mattered more than expected. As shipped, `AnimatedContent` renders its wrapper
with Tailwind's `invisible` class and relies on GSAP to reveal it — so any visitor
whose animation never ran would have got permanently invisible content, and
`visibility: hidden` cannot be undone from a media query alone.

Both text-splitting components expose the intact string to screen readers via
`sr-only` and mark the split copy `aria-hidden`, so headlines are not announced as
disconnected fragments.

## Languages

English, German, French and Italian — the same four Swiss Shipping Labels itself
offers. English is the default and the fallback for any missing key.

Resolution order: `?lang=` in the URL, then a stored choice, then the browser's
`Accept-Language`, then English. The query parameter wins so a link can pin a
language, matching the `?lang=` convention the Swiss Shipping Labels site already
uses. The choice persists in `localStorage` and is reflected in the URL without
adding a history entry.

Translations live in `src/locales/`. `en.js` is the reference for structure; the
other three mirror its shape. `src/lib/products.js` holds only what is
language-neutral — URLs, image paths, brand colours, product names — so there is
one copy of it rather than four.

German uses Swiss orthography (`ss`, never `ß`). All four address the reader
formally. Brand names are never translated, and neither are the page titles
*Impressum* and *Datenschutz*, which are the terms Swiss visitors look for
regardless of the surrounding language.

Notes addressed to you rather than to visitors are prefixed `TO FILL` and stay in
English in every locale.

## Legal pages

`/impressum` and `/datenschutz` are scaffolded with the real company details —
Staufferstrasse 30, 3006 Bern, managing director Pablo Wynistorf — and state
plainly that the UID and VAT number are not yet assigned.

Everything still needed from you is wrapped in a `<Placeholder>`, which renders as
a highlighted mark so it cannot be missed. Search the locale files for `TO FILL`.
The privacy page already states what is verifiable from this codebase: no cookies,
no analytics, no contact form, preferences kept in `localStorage`.

## Contact address

`contact@nextenic.ch` or `contact@nextenic.com`, chosen at runtime from the
hostname (`src/lib/contact.js`), because both domains serve the same build. Anything
that cannot be resolved at runtime — the JSON-LD in `index.html` — uses the `.ch`
address, matching the canonical URL.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes to
GitHub Pages with `actions/deploy-pages`. It can also be run manually via
**workflow_dispatch**.

Before the first run, set **Settings → Pages → Build and deployment → Source** to
**GitHub Actions**.

### Custom domain

`public/CNAME` contains `nextenic.ch`. Change it to whichever domain you point at
the site, and add the DNS records GitHub asks for. Because the site is served from
the domain root, the Vite base path is `/`.

If you drop the custom domain and serve from `https://<user>.github.io/<repo>/`
instead, delete `public/CNAME` and set the base path when building:

```yaml
- name: Build
  run: npm run build
  env:
    BASE_PATH: /${{ github.event.repository.name }}/
```

Nothing else needs changing: asset paths go through `asset()` and the router reads
its basename from `import.meta.env.BASE_URL`.

### SPA routing

GitHub Pages has no server-side rewrite, so a hard load of `/impressum` would 404.
A small Vite plugin copies `dist/index.html` to `dist/404.html` at build time and
Pages serves that, letting the client router resolve the path.

## Performance notes

- Both WebGL backdrops are `React.lazy`, so `ogl` lands in its own chunk and never
  blocks first paint. Neither is fetched under reduced motion.
- Vendor chunks are split by package path. The object form of `manualChunks` matches
  resolved module IDs exactly, which caught `react-dom/index.js` but left the much
  larger `react-dom/client.js` in the app chunk — hence the function form.
- Screenshots are WebP at two widths (800 and 1600) served via `srcset`, with
  `width`/`height` always set so nothing shifts while decoding. Only the first
  screenshot of the first product loads eagerly.
- The originals behind those WebP files are not committed — `public/` ships
  wholesale to Pages and they totalled 3.4 MB. `public/products/SOURCES.md` records
  every source URL so they can be re-fetched.

## Verification status

`npm run build` and `npm run lint` both pass clean. Deep links, asset paths and the
404 fallback were checked against the built output with `npm run preview`.

Not yet verified: Lighthouse scores, and how the site actually looks in a browser
across breakpoints and in both colour modes. Those need a real browser — please run
Lighthouse against `npm run preview` output rather than the dev server, since the
dev server ships unminified modules and will score badly for reasons that do not
apply to production.
