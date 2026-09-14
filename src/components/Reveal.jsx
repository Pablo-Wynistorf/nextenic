import AnimatedContent from "@/components/AnimatedContent";

/**
 * Single entry point for scroll-triggered reveals, wrapping the React Bits
 * AnimatedContent component.
 *
 * Exists so that distance, duration, easing and threshold are decided in one
 * place. Reveals across the page then read as one system: an 18–24px rise over
 * roughly 600ms on an expo-out curve, staggered by index where several elements
 * share a row.
 *
 * `index` is a convenience for staggering siblings without hand-writing delays.
 */
export default function Reveal({
  children,
  index = 0,
  step = 0.075,
  delay = 0,
  distance = 22,
  duration = 0.62,
  className,
  ...props
}) {
  return (
    <AnimatedContent
      distance={distance}
      duration={duration}
      delay={delay + index * step}
      ease="expo.out"
      threshold={0.15}
      className={className}
      {...props}
    >
      {children}
    </AnimatedContent>
  );
}
