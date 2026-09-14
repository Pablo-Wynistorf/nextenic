import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useFinePointer, useReducedMotion } from "@/lib/motion";

const spring = { damping: 26, stiffness: 130, mass: 0.9 };

/**
 * React Bits — TiltedCard (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/TiltedCard-JS-TW`
 *
 * Wraps arbitrary children in a pointer-tracked 3D tilt. Used for the product
 * screenshots.
 *
 * Local changes:
 *   1. Takes `children` instead of an `imageSrc`. The original renders a single
 *      fixed-size <img>; the screenshots here sit in a framed container with a
 *      caption bar, and need srcset and lazy loading, so the image has to be
 *      composed from outside.
 *   2. Removed the hard-coded containerHeight/imageWidth pixel props. Sizing now
 *      comes from CSS, which is what makes it work down to 360px.
 *   3. Removed the "This effect is not optimized for mobile. Check on desktop."
 *      banner that the original renders into the page on small screens, and the
 *      floating cursor tooltip. Shipping a developer note to visitors is not an
 *      option, and the tooltip duplicated the caption.
 *   4. Tilt is disabled entirely without a fine pointer or under reduced motion,
 *      in which case this renders a plain div and attaches no listeners.
 *   5. Amplitude defaults to 6 degrees rather than 14. At 14 a large screenshot
 *      distorts enough to look like a gimmick; 6 reads as the panel having
 *      physical depth.
 *   6. Added a light sheen layer whose position follows the pointer, so the tilt
 *      is legible as a surface catching light rather than just a skew.
 */
export default function TiltedCard({
  children,
  className = "",
  rotateAmplitude = 6,
  scaleOnHover = 1.012,
  sheen = true,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = !reduced && finePointer;

  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(1, spring);
  const sheenX = useSpring(50, { damping: 30, stiffness: 90, mass: 1 });
  const sheenOpacity = useSpring(0, { damping: 30, stiffness: 120, mass: 1 });

  const sheenBackground = useTransform(
    sheenX,
    (value) =>
      `radial-gradient(60% 120% at ${value}% -10%, rgb(255 255 255 / 0.18), transparent 70%)`,
  );

  function handlePointerMove(event) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    sheenX.set(((event.clientX - rect.left) / rect.width) * 100);
  }

  function handlePointerEnter() {
    scale.set(scaleOnHover);
    sheenOpacity.set(1);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    sheenOpacity.set(0);
  }

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: "1400px" }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        data-motion="tilt"
        className="relative h-full w-full"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
        {sheen && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
            style={{ background: sheenBackground, opacity: sheenOpacity }}
          />
        )}
      </motion.div>
    </div>
  );
}
