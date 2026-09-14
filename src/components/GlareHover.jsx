import { useRef } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

/**
 * React Bits — GlareHover (JS-TW), adapted.
 * Source: https://reactbits.dev  ·  added via `shadcn add @react-bits/GlareHover-JS-TW`
 *
 * Sweeps a band of light across a surface on hover. Used on the product logo
 * tiles.
 *
 * Local changes:
 *   1. Defaults changed from a fixed 500x500 black box to filling its container,
 *      transparent, inheriting radius and border — the original defaults are for
 *      the demo tile on reactbits.dev, not for wrapping real content.
 *   2. Dropped `cursor-pointer` from the wrapper. It is a div, not a control,
 *      and showing a hand cursor on something unclickable is a lie.
 *   3. Reduced motion renders the children with no overlay and no listeners.
 */
const GlareHover = ({
  width = '100%',
  height = '100%',
  background = 'transparent',
  borderRadius = 'inherit',
  borderColor = 'transparent',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = 'none';
      el.style.backgroundPosition = '-100% -100%, 0 0';
    } else {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = '-100% -100%, 0 0';
    }
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none'
  };

  const wrapperStyle = {
    width,
    height,
    background,
    borderRadius,
    borderColor,
    ...style
  };

  if (prefersReducedMotion()) {
    return (
      <div
        className={`relative grid place-items-center overflow-hidden ${className}`}
        style={wrapperStyle}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${className}`}
      style={wrapperStyle}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}>
      <div ref={overlayRef} data-motion="glare" style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
