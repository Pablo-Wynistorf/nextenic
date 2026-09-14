import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * React Bits — AnimatedContent (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/AnimatedContent-JS-TW`
 *
 * Local changes:
 *   1. Reduced motion. The original always renders its wrapper with Tailwind's
 *      `invisible` class and relies on GSAP to reveal it. That means any visitor
 *      whose animation never runs — reduced-motion, or a ScrollTrigger that
 *      fails to fire — gets permanently hidden content. `visibility: hidden`
 *      also cannot be undone from the CSS media query alone. Now the class is
 *      only applied when the animation is actually going to run.
 *   2. Dropped the `disappearAfter` / `onDisappearanceComplete` reverse
 *      animation. Nothing here animates content back out, and keeping it meant
 *      a timeline callback chain that never executed.
 *   3. Removed the implicit `#snap-main-container` scroller lookup, which
 *      belongs to the React Bits demo site, not this page.
 *   4. `data-motion` on the wrapper so the reduced-motion CSS in tokens.css can
 *      also neutralise it as a backstop.
 */
const AnimatedContent = ({
  children,
  distance = 22,
  direction = "vertical",
  reverse = false,
  duration = 0.62,
  ease = "expo.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.15,
  delay = 0,
  onComplete,
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  /* Decided once on mount: the wrapper must not start hidden if we are never
     going to animate it. */
  const [animate] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el || !animate) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: "visible",
    });

    const tl = gsap.timeline({ paused: true, delay, onComplete });
    tl.to(el, { [axis]: 0, scale: 1, opacity: 1, duration, ease });

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tl.play(),
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [
    animate,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return (
    <div
      ref={ref}
      data-motion={animate ? "reveal" : undefined}
      className={`${animate ? "invisible" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
