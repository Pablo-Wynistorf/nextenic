import ScrollVelocity from "@/components/ScrollVelocity";
import { useI18n } from "@/lib/i18n";

/**
 * Scrolling band between the products and the About section.
 *
 * React Bits' ScrollVelocity: two rows drifting in opposite directions, whose
 * speed and direction respond to how fast and which way you are scrolling. It
 * acts as a hinge between two dense sections — the page stops presenting
 * information for a moment.
 *
 * The rows are set in the display face at display size, outlined rather than
 * filled, so a band of very large type reads as a graphic device instead of
 * shouting a slogan. The strings are short factual phrases, not marketing.
 *
 * Under reduced motion the component renders the two rows static and clipped
 * (see the adapted fallback in ScrollVelocity.jsx).
 */
export default function Marquee() {
  const { t } = useI18n();

  return (
    <div
      aria-hidden="true"
      className="select-none overflow-hidden border-y border-line bg-canvas-sunken py-12 sm:py-16"
    >
      <ScrollVelocity
        texts={[t("marquee.line1"), t("marquee.line2")]}
        velocity={38}
        numCopies={5}
        damping={40}
        stiffness={320}
        className="pr-8"
        scrollerClassName="font-display text-[clamp(2rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_var(--line-strong)]"
      />
    </div>
  );
}
