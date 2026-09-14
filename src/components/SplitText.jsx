import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(GSAPSplitText, useGSAP);

/**
 * React Bits — SplitText (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/SplitText-JS-TW`
 *
 * Local changes:
 *   1. Reduced motion: returns the plain element with no split and no tween.
 *      GSAP's SplitText rewrites the DOM into per-word <div>s, so the only
 *      honest way to respect the preference is to not split at all.
 *   2. Dropped ScrollTrigger. This only ever runs on the hero headline, which
 *      is above the fold on every viewport, so a scroll trigger added a plugin
 *      and a scroll listener to animate something already on screen. It now
 *      plays once on mount, after fonts settle.
 *   3. Waits on document.fonts.ready before splitting (kept from the original,
 *      and load-bearing here): splitting before Bricolage Grotesque swaps in
 *      measures the fallback and leaves the words visibly misaligned.
 *   4. Accessibility: the split copy is aria-hidden and the untouched string is
 *      exposed to screen readers, so the headline is not read out as
 *      disconnected fragments.
 *   5. `tag` is rendered directly rather than through a render function, so the
 *      hero can pass "h1" and get a real <h1>.
 */
const SplitText = ({
  text,
  className = "",
  delay = 42,
  duration = 0.9,
  ease = "expo.out",
  splitType = "words",
  from = { opacity: 0, y: "0.4em" },
  to = { opacity: 1, y: "0em" },
  tag: Tag = "p",
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const doneRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [animate] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!animate) return;
    if (document.fonts?.status === "loaded") {
      setFontsLoaded(true);
      return;
    }
    let cancelled = false;
    const ready = () => {
      if (!cancelled) setFontsLoaded(true);
    };
    document.fonts?.ready.then(ready);
    /* Failsafe. The headline is held at opacity 0 until this flips, so if the
       webfont never arrives we must still reveal the text. */
    const timer = setTimeout(ready, 1200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [animate]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!animate || !el || !text || !fontsLoaded || doneRef.current) return;

      const split = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
      });

      const targets =
        (splitType.includes("chars") && split.chars?.length && split.chars) ||
        (splitType.includes("words") && split.words?.length && split.words) ||
        split.lines;

      const tween = gsap.fromTo(targets, from, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        force3D: true,
        onComplete: () => {
          doneRef.current = true;
          /* Hand the transform back so subpixel rendering settles and the
             browser can stop compositing the words separately. */
          gsap.set(targets, { clearProps: "transform,willChange" });
          onAnimationComplete?.();
        },
      });

      return () => {
        tween.kill();
        try {
          split.revert();
        } catch {
          /* Already reverted by a hot reload. */
        }
      };
    },
    { dependencies: [animate, fontsLoaded, text], scope: ref },
  );

  if (!animate) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {/* Screen readers get the sentence in one piece. */}
      <span className="sr-only">{text}</span>
      <span
        ref={ref}
        aria-hidden="true"
        data-motion="split"
        className="split-parent inline-block"
        style={{
          willChange: "transform, opacity",
          /* Held back until the display face has swapped in, otherwise the
             headline paints in the fallback, animates, and visibly reflows when
             the real font lands. */
          opacity: fontsLoaded ? undefined : 0,
        }}
      >
        {text}
      </span>
    </Tag>
  );
};

export default SplitText;
