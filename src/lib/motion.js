import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Synchronous read, for code paths that run before the first paint (GSAP setup
 * inside the React Bits components, for instance).
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Reactive version. Returns true when the visitor has asked for reduced motion,
 * and updates if they change the setting while the page is open.
 *
 * Everything animated on this site is gated on this hook or on the
 * prefersReducedMotion() check above — the CSS media query in tokens.css is a
 * second line of defence, not the only one, because the animation libraries
 * write inline styles that CSS alone cannot always undo.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const onChange = (event) => setReduced(event.matches);
    mql.addEventListener("change", onChange);
    setReduced(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * True for pointer devices that can hover. Tilt and cursor-reactive effects are
 * pointless on touch and can make a tap feel broken, so they are skipped there.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (event) => setFine(event.matches);
    mql.addEventListener("change", onChange);
    setFine(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return fine;
}

/* --------------------------------------------------------------------------
   Shared motion vocabulary
   --------------------------------------------------------------------------
   Two rules keep the page feeling like one object rather than a pile of
   effects:

   1. Everything travels a short distance (12–28px). Long slides read as
      "template with animations bolted on".
   2. Everything uses the same decelerating curve, matching --ease-out-expo in
      tokens.css. No ease-in-out, no linear, no bounce except on the one
      deliberate spring (the theme toggle knob).
   -------------------------------------------------------------------------- */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: EASE_OUT_EXPO },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_QUART } },
};

/** Parent variant that walks its children in sequence. */
export function stagger(step = 0.07, delay = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step, delayChildren: delay },
    },
  };
}

/** Viewport config used by every scroll-reveal, so thresholds stay consistent. */
export const revealViewport = { once: true, amount: 0.25, margin: "0px 0px -80px 0px" };
