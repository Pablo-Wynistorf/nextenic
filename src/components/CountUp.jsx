import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

/**
 * React Bits — CountUp (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/CountUp-JS-TW`
 *
 * Local change: under reduced motion the final value is written immediately and
 * no spring is started. The original always animates, and a number ticking up is
 * exactly the kind of motion the preference is asking us not to produce.
 */
export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(latest => {
    const hasDecimals = maxDecimals > 0;

    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0
    };

    const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  }, [maxDecimals, separator]);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    /* Reduced motion: land on the final value without counting. */
    if (prefersReducedMotion()) {
      if (ref.current) {
        ref.current.textContent = formatValue(direction === 'down' ? from : to);
      }
      return;
    }

    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === 'function') onEnd();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration, formatValue]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
