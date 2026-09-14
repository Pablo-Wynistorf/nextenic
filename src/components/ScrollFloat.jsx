import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * React Bits — ScrollFloat (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/ScrollFloat-JS-TW`
 *
 * Section headings assemble character by character as they scroll into view,
 * scrubbed to scroll position rather than played on a timer, so the heading
 * responds to how fast you are moving.
 *
 * Local changes:
 *   1. **Word-safe wrapping.** The original splits the string into one
 *      inline-block <span> per character, which makes every character its own
 *      line-break opportunity — so a heading could wrap as "A small Swiss so /
 *      ftware company". Characters are now grouped into per-word wrappers marked
 *      `whitespace-nowrap`, with real breakable spaces between them. Words break
 *      where words break; letters never do.
 *   2. Reduced motion: renders the heading as plain text, unsplit.
 *   3. Accessibility. Per-character spans are announced letter by letter by some
 *      screen readers, so the split copy is aria-hidden and the intact string is
 *      exposed via sr-only.
 *   4. The tag is configurable. The original hardcodes <h2>, so it could not be
 *      used for an <h1> or produce a valid document outline elsewhere.
 *   5. Removed the baked-in `my-5` margin and clamp() font size, which overrode
 *      the type scale in tokens.css.
 *   6. Added ScrollTrigger cleanup — the original leaks a trigger per mount,
 *      which accumulates across client-side navigations.
 *   7. Eased with expo.out rather than back.inOut(2), whose overshoot on every
 *      character reads as wobble across a long heading.
 */
const ScrollFloat = ({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "expo.out",
  scrollStart = "center bottom-=10%",
  scrollEnd = "center center+=15%",
  stagger = 0.025,
  tag: Tag = "h2",
  id,
}) => {
  const containerRef = useRef(null);
  const [animate] = useState(() => !prefersReducedMotion());
  const text = typeof children === "string" ? children : "";

  /* Split on whitespace but keep the separators, so the spaces between words
     stay in the output as ordinary breakable text. */
  const words = useMemo(() => {
    return text.split(/(\s+)/).map((token, tokenIndex) => {
      if (/^\s+$/.test(token) || token === "") {
        return { type: "space", token, key: `s-${tokenIndex}` };
      }
      return {
        type: "word",
        key: `w-${tokenIndex}`,
        chars: Array.from(token),
      };
    });
  }, [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !animate) return;

    const chars = el.querySelectorAll(".sf-char");
    if (!chars.length) return;

    const tween = gsap.fromTo(
      chars,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 110,
        scaleY: 1.6,
        scaleX: 0.86,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [animate, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  if (!animate) {
    return (
      <Tag id={id} className={cn(containerClassName, textClassName)}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={cn(containerClassName)}>
      <span className="sr-only">{text}</span>
      {/* overflow-hidden lives on the inner span, not the heading, so the
          per-character rise is clipped without clipping descenders. */}
      <span
        ref={containerRef}
        aria-hidden="true"
        data-motion="scroll-float"
        className={cn("inline-block", textClassName)}
      >
        {words.map((entry) =>
          entry.type === "space" ? (
            <span key={entry.key}> </span>
          ) : (
            <span key={entry.key} className="inline-block whitespace-nowrap">
              {entry.chars.map((char, i) => (
                <span key={`${entry.key}-${i}`} className="sf-char inline-block">
                  {char}
                </span>
              ))}
            </span>
          ),
        )}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
