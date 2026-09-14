import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';
import { prefersReducedMotion } from '@/lib/motion';

/**
 * React Bits — ScrollVelocity (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/ScrollVelocity-JS-TW`
 *
 * Local changes: a static fallback under reduced motion, and the hardcoded
 * typography classes removed so the type scale in tokens.css governs the size.
 * See the inline comments further down.
 */

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(<span
        className={`flex-shrink-0 ${className}`}
        key={i}
        ref={i === 0 ? copyRef : null}>
        {children}&nbsp;
      </span>);
    }

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}>
        {/* Typography is deliberately not set here — the original hardcoded
            text-4xl / md:text-[5rem] / font-bold / drop-shadow, which fought the
            type scale in tokens.css. Callers pass scrollerClassName instead. */}
        <motion.div
          data-motion="marquee"
          className={`flex whitespace-nowrap ${scrollerClassName ?? ''}`}
          style={{ x, ...scrollerStyle }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  /* Reduced motion: a continuously drifting marquee is precisely what the
     preference rules out, and useAnimationFrame would keep running regardless.
     Render the strings once, static and clipped. */
  if (prefersReducedMotion()) {
    return (
      <section>
        {texts.map((text, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${parallaxClassName ?? ''}`}
            style={parallaxStyle}
          >
            <div
              className={`flex whitespace-nowrap ${scrollerClassName ?? ''}`}
              style={scrollerStyle}
            >
              <span className={`flex-shrink-0 ${className}`}>{text}</span>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}>
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
