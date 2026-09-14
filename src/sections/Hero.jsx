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
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

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
  const reduced = useReducedMotion();
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
            className="absolute inset-y-0 right-0 w-full opacity-90 sm:w-[78%]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 34%, black 100%)",
            }}
          >
            <Suspense fallback={null}>
              <WebThreads
                /* Graphite core, vermilion mid, warm white highlight — the
                   brand's two colours and nothing else. */
                color1="#3a4150"
                color2="#ff4a26"
                color3="#ffd9cf"
                fanMode="right"
                threadCount={7}
                speed={0.26}
                frequency={4.2}
                spread={0.3}
                taper={1.0}
                position={0.52}
                glow={0.045}
                falloff={0.55}
                thickness={1.0}
                brightness={0.85}
                opacity={0.95}
                mirror={false}
                shimmer
                grain={false}
                mouseInteraction
                mouseStrength={0.4}
              />
            </Suspense>
          </div>
        )}

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
