import { Suspense, lazy } from "react";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ScrollFloat from "@/components/ScrollFloat";
import { useI18n } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/motion";

/**
 * React Bits' Topography, loaded on demand.
 *
 * It pulls in ogl (~50 kB) for its WebGL context, which has no business being in
 * the initial bundle for a backdrop the visitor may never scroll to. Vite emits
 * it as a separate chunk, fetched when this section first renders and skipped
 * entirely under reduced motion.
 */
const Topography = lazy(() => import("@/components/Topography"));

/**
 * About.
 *
 * Says only what is true and checkable: a Swiss company in Bern, two products in
 * operation, each with its own brand. No founding year, headcount, customer count
 * or origin story, because none of that was available to verify.
 *
 * The three statements are numbered rather than boxed. A row of three cards
 * reading "Fast / Secure / Scalable" is the single clearest tell of a template,
 * and these are positions the company can actually be held to.
 *
 * The contour-line backdrop is the one WebGL element on the page. Contour lines
 * are the visual language of Swiss topographic maps, which is a better reason to
 * put moving graphics behind a paragraph about a Bernese company than "it looked
 * nice", and it is drawn in graphite rather than the component's default purple.
 */
export default function About() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const positions = t("about.positions");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-line py-section"
    >
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28]"
          style={{
            maskImage:
              "radial-gradient(80% 60% at 78% 40%, black 10%, transparent 72%)",
          }}
        >
          <Suspense fallback={null}>
            <Topography
              lowColor="#12151a"
              midColor="#4a525e"
              highColor="#ff4a26"
              speed={0.16}
              morphSpeed={0.03}
              bands={2.4}
              thickness={0.008}
              scale={1.25}
              glow={0.22}
              contrast={2.2}
              brightness={0.9}
              grain
              grainIntensity={0.04}
              mouseInteraction
              mouseRadius={0.28}
              mouseStrength={0.3}
            />
          </Suspense>
        </div>
      )}

      <div className="shell">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            </Reveal>
            <ScrollFloat
              tag="h2"
              id="about-heading"
              containerClassName="mt-7 font-display text-h2 font-semibold text-primary"
              stagger={0.014}
              animationDuration={0.9}
            >
              {t("about.heading")}
            </ScrollFloat>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.06}>
              <p className="max-w-prose text-body-lg text-primary">{t("about.p1")}</p>
              <p className="mt-6 max-w-prose text-body text-secondary">
                {t("about.p2")}
              </p>
              <p className="mt-6 max-w-prose text-body text-secondary">
                {t("about.p3")}
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-section-sm grid gap-x-10 gap-y-12 md:grid-cols-3">
          {(Array.isArray(positions) ? positions : []).map((position, i) => (
            /* Reveal renders a div, so it lives inside the li rather than
               replacing it — a div is not valid as a direct child of ol. */
            <li key={position.title} className="border-t border-line pt-6">
              <Reveal index={i}>
                <span className="font-mono text-micro text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-h4 font-medium tracking-[-0.01em]">
                  {position.title}
                </h3>
                <p className="mt-3 text-body-sm text-secondary">{position.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
