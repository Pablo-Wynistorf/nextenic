import { Suspense, lazy, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import ActionLink from "@/components/ActionLink";
import DecryptedText from "@/components/DecryptedText";
import Magnet from "@/components/Magnet";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";

/**
 * The hero shader is code-split so ogl stays out of the initial JS payload.
 * The headline, lead and buttons are plain DOM and paint immediately; the
 * filaments arrive a beat later, which also means the text is never waiting on
 * WebGL to become readable.
 */
const WebThreads = lazy(() => import("@/components/WebThreads"));

/**
 * Filament palettes.
 *
 * Change PALETTE below to switch. Each entry gives the three shader colours for
 * dark and for light: color1 is the outer thread, color2 the mid blend, color3
 * the bright core. The core is what sets the overall impression, since that is
 * where the brightest pixels land.
 *
 * "steel" is the default. The site already has exactly one accent, the vermilion
 * used on buttons, links and rules. Putting that same accent into a large
 * animated field made it the loudest thing on the page and gave the whole hero a
 * warm cast, which is what an accent is not supposed to do. A near-neutral field
 * lets the artwork read as light and structure while the accent keeps its job of
 * marking the things you can click.
 */
const PALETTES = {
  /* Neutral silver, faint cool tint. Nothing competes with the accent. */
  steel: {
    dark: { color1: "#39414f", color2: "#8e9aad", color3: "#eef2f7" },
    light: { color1: "#6b7482", color2: "#39414f", color3: "#12151a" },
  },
  /* Colder and more technical, a blue-white filament. */
  ice: {
    dark: { color1: "#2b3a4f", color2: "#6f9fd8", color3: "#dcecff" },
    light: { color1: "#5a6b80", color2: "#2f5f96", color3: "#101a26" },
  },
  /* Warm brass, nods to the Swiss Post yellow without quoting it. */
  brass: {
    dark: { color1: "#3d3728", color2: "#b8923f", color3: "#f6e2b0" },
    light: { color1: "#6d5f3c", color2: "#8a6a1f", color3: "#1a150a" },
  },
  /* The previous look: the brand vermilion, at full strength. */
  vermilion: {
    dark: { color1: "#333a44", color2: "#ff4a26", color3: "#ff7d5c" },
    light: { color1: "#5b6472", color2: "#c9330f", color3: "#12151a" },
  },
};

const PALETTE = "steel";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Hero.
 *
 * The headline states what the two products are for in plain terms — mail out,
 * parcels out — because that is the only thing the two have in common and it is
 * the honest description of the company.
 *
 * Composition is deliberately off-centre: the type column occupies the left
 * seven of twelve, the line field bleeds off the right edge, and the product
 * index sits on a baseline at the bottom. Nothing is centred except at the
 * narrowest widths, where a single column is the only sensible arrangement.
 *
 * Four React Bits components appear here, sequenced rather than layered at
 * random: filaments drift continuously behind everything (WebThreads), the
 * eyebrow resolves out of noise (DecryptedText), the headline arrives word by
 * word (SplitText), and the primary call to action leans toward the cursor
 * (Magnet).
 *
 * Only the filaments keep moving. Everything else plays once and settles, so
 * there is a single thing drawing the eye rather than several competing for it.
 */
export default function Hero() {
  const { t, lang } = useI18n();
  const { resolved } = useTheme();
  const reduced = useReducedMotion();
  const isLight = resolved === "light";
  const threads = (PALETTES[PALETTE] ?? PALETTES.steel)[isLight ? "light" : "dark"];
  /* Everything after the headline waits for it, so the hero resolves as one
     movement rather than several things arriving at once. */
  const [headlineDone, setHeadlineDone] = useState(false);
  const show = reduced || headlineDone;

  const after = (delay) =>
    reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE_OUT_EXPO };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-section-sm pt-36 sm:pt-44 lg:min-h-[92svh] lg:pt-52"
    >
      {/* --- Backdrop -------------------------------------------------------
          Exactly one moving element, plus two static layers.

          1. WebThreads: a fan of glowing filaments, drifting continuously and
             bending toward the pointer. It fans in from the right so the
             filaments converge behind the headline rather than across it.
          2. A hairline measuring grid, which the threads pass behind. Static.
          3. Film grain, to stop the large dark area banding. Static.

          The MagnetLines field that used to sit on the right was removed: two
          reactive line systems in one hero competed with each other, and at the
          size it needed to be legible it read as stray dashes scattered over the
          filaments. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {!reduced && (
          <div
            className={cn(
              "absolute inset-y-0 right-0 w-full sm:w-[78%]",
              isLight ? "opacity-100" : "opacity-90",
            )}
            style={{
              /* The light branch outputs an opaque fill, so the mask is what
                 blends it into the page. It ramps a little later than dark to keep
                 the strokes off the text column, but not so late that the artwork
                 is cropped down to a corner. */
              maskImage: isLight
                ? "linear-gradient(to right, transparent 0%, black 44%, black 100%)"
                : "linear-gradient(to right, transparent 0%, black 34%, black 100%)",
            }}
          >
            <Suspense fallback={null}>
              <WebThreads
                /* Remounted on theme change. The component builds its shader
                   program once and reads lightMode as a uniform, but the two
                   branches need different colour inputs entirely, so a clean
                   rebuild is more predictable than pushing new uniforms into a
                   program set up for the other mode. */
                key={resolved}
                /* The shader has two entirely different output paths, and they
                   want opposite inputs.
                
                   On dark it adds light: the accumulated glow is the final colour,
                   so modest brightness already reads as bright filaments.
                
                   On light it converts that same glow into ink coverage over a
                   background colour:
                
                     mapped   = 1 - exp(-col * 1.3)
                     energy   = max(mapped) * opacity
                     coverage = smoothstep(0.18, 0.72, energy) squared
                
                   Coverage is the only thing that makes a stroke visible, the
                   smoothstep discards anything under 0.18, and squaring crushes
                   the midtones. Dialling brightness and opacity down, which is the
                   instinct on a pale canvas, pushes energy below the knee and the
                   filaments vanish into hairlines. Light mode therefore needs more
                   energy than dark, not less; the tone map saturates, so pushing
                   brightness past 1 compresses rather than clips.
                
                   Restraint comes from the ink colours and the mask instead. */
                lightMode={isLight}
                backgroundColor={isLight ? "#fbfaf8" : "#08090b"}
                /* See PALETTES at the top of this file to change the colourway. */
                color1={threads.color1}
                color2={threads.color2}
                color3={threads.color3}
                fanMode="right"
                /* Fewer, calmer arcs. Seven threads at frequency 4.2 filled the
                   whole right half with crossing loops; six at 3.4 leaves space
                   between them, which is what makes individual strokes readable
                   rather than a mass of light. */
                threadCount={6}
                /* Roughly half the previous rate. The motion should be noticed
                   only after a second or two of looking, not compete with the
                   headline arriving. */
                speed={0.12}
                frequency={3.4}
                spread={0.24}
                taper={1.0}
                position={0.52}
                /* Definition comes from these three together: a tighter glow
                   radius, a steeper falloff, and a thinner core. The previous
                   values bloomed until neighbouring filaments merged and the
                   bright areas clipped to flat white. */
                glow={isLight ? 0.03 : 0.022}
                falloff={isLight ? 0.68 : 0.78}
                thickness={isLight ? 1.05 : 0.8}
                brightness={isLight ? 1.3 : 0.62}
                opacity={1}
                mirror={false}
                /* Shimmer added a second, unrelated oscillation on top of the
                   drift, which read as flicker once the lines got crisper. */
                shimmer={false}
                grain={false}
                /* The shader mixes the fan's pinch point toward the cursor by
                   mouseStrength * active, and lifts brightness near it. 0.45 makes
                   the bend clearly readable without the whole composition
                   lurching when the pointer crosses the hero. */
                mouseInteraction
                mouseStrength={0.45}
              />
            </Suspense>
          </div>
        )}

        {/* Scrim. The filaments sweep far enough left at wide viewports to cross
            the headline; this keeps the type column sitting on clean canvas
            without having to shrink the artwork. */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[62%]"
          style={{
            background:
              "linear-gradient(to right, var(--canvas) 0%, var(--canvas) 34%, color-mix(in oklab, var(--canvas) 72%, transparent) 62%, transparent 100%)",
          }}
        />

        <div
          className="grid-rule absolute inset-0 opacity-70"
          style={{
            maskImage:
              "radial-gradient(120% 100% at 20% 0%, black 20%, transparent 75%)",
          }}
        />

        <div className="grain-layer absolute inset-0 opacity-[0.16]" />
      </div>

      <div className="shell">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-3"
            >
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-line-strong" />
              {/* Resolves from scrambled characters on load — a nod to the
                  technical register, used exactly once. */}
              <DecryptedText
                key={lang}
                text={t("hero.eyebrow")}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={22}
                maxIterations={8}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·"
                parentClassName="font-mono text-micro uppercase tracking-[0.14em]"
                className="text-tertiary"
                encryptedClassName="text-graphite-600"
              />
            </motion.div>

            <SplitText
              key={`headline-${lang}`}
              tag="h1"
              text={t("hero.headline")}
              splitType="words"
              delay={46}
              duration={0.95}
              from={{ opacity: 0, y: "0.42em" }}
              to={{ opacity: 1, y: "0em" }}
              onAnimationComplete={() => setHeadlineDone(true)}
              className="mt-8 max-w-[19ch] font-display text-h1 font-semibold text-primary"
            />

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0 } : undefined}
              transition={after(0)}
              className="mt-8 max-w-[46ch] text-lead text-secondary"
            >
              {t("hero.lead")}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0 } : undefined}
              transition={after(0.08)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {/* Magnet gives the primary action a slight pull toward the
                  cursor. Disabled under reduced motion. */}
              <Magnet padding={70} magnetStrength={9} disabled={reduced}>
                <ActionLink href="#products" variant="primary">
                  {t("hero.ctaPrimary")}
                </ActionLink>
              </Magnet>
              <ActionLink href="#contact" variant="secondary">
                {t("hero.ctaSecondary")}
              </ActionLink>
            </motion.div>
          </div>
        </div>

        {/* --- Product index -------------------------------------------------
            The two products, named at the bottom of the hero so the page's
            subject is established before any scrolling happens. */}
        <motion.ul
          initial={reduced ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={after(0.16)}
          className="mt-section-sm grid gap-px border-t border-line sm:grid-cols-2 lg:mt-24"
        >
          {products.map((product, i) => (
            <li key={product.id} className="relative">
              <a
                href={`#${product.id}`}
                className="group flex h-full flex-col gap-2 py-6 pr-6 sm:py-7"
              >
                <span className="flex items-center gap-3 font-mono text-micro uppercase text-tertiary">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: product.accent }}
                  />
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* ShinyText passes a slow highlight across the product name,
                    once, on a long loop — enough to catch the eye, not enough to
                    become a strobe. */}
                <ShinyText
                  text={product.name}
                  disabled={reduced}
                  speed={7}
                  delay={i * 1.2}
                  color="var(--text-primary)"
                  shineColor="var(--accent)"
                  spread={90}
                  className="text-h4 font-medium"
                />
                <span className="text-body-sm text-secondary">
                  {t(`products.${product.id}.tagline`)}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 h-px w-0 bg-accent transition-[width] duration-500 ease-out-expo group-hover:w-16"
                />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Scroll affordance. Static under reduced motion. */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={after(0.24)}
          className="mt-10 flex items-center gap-2 font-mono text-micro uppercase text-tertiary"
        >
          <ArrowDown
            aria-hidden="true"
            className={cnHint(reduced)}
          />
          {t("hero.scrollHint")}
        </motion.p>
      </div>
    </section>
  );
}

/* Small helper kept out of the component body for readability. */
function cnHint(reduced) {
  return reduced ? "size-3.5" : "size-3.5 animate-hint";
}
