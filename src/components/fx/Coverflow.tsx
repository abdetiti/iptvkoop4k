import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Smooth 3D coverflow carousel.
 * - Slides only move with transform/opacity (GPU), never width/left/margin.
 * - Every slide has the same fixed size, so nothing jumps.
 * - Infinite loop: a slide that wraps around does it while invisible, without transition.
 * - Drag / swipe with snap, auto-advance, pause on hover or touch, dots and arrows.
 */
interface CoverflowProps {
  items: React.ReactNode[];
  /** slide width for a given container width (px) */
  slideWidth: (containerWidth: number) => number;
  /** height / width ratio of a slide */
  ratio: number;
  autoplay?: number;
  visibleSide?: number;
  label: string;
  tone?: 'light' | 'dark';
}

const mod = (a: number, n: number) => ((a % n) + n) % n;

export const Coverflow: React.FC<CoverflowProps> = ({
  items,
  slideWidth,
  ratio,
  autoplay = 4000,
  visibleSide = 2,
  label,
  tone = 'light',
}) => {
  const n = items.length;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1000);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const prevRel = useRef<number[]>([]);
  const drag = useRef({ x: 0, t: 0, dx: 0, active: false, moved: false });

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const w = slideWidth(width);
  const h = Math.round(w * ratio);
  const gap = Math.min(width * 0.3, w * 0.74);

  const go = useCallback((step: number) => setIndex((i) => i + step), []);

  // autoplay (pauses on hover, touch, drag, hidden tab, reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay || paused || dragging || reduce) return;
    const id = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, paused, dragging, go]);

  const setDragVar = (px: number) => wrapRef.current?.style.setProperty('--drag', `${px}px`);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, t: performance.now(), dx: 0, active: true, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setPaused(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;
    d.dx = e.clientX - d.x;
    if (!d.moved && Math.abs(d.dx) > 6) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) setDragVar(d.dx);
  };
  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    if (d.moved) {
      const dt = performance.now() - d.t;
      let steps = Math.round(-d.dx / gap);
      if (steps === 0 && Math.abs(d.dx) > 30 && dt < 300) steps = d.dx < 0 ? 1 : -1;
      steps = Math.max(-visibleSide, Math.min(visibleSide, steps));
      setDragging(false);
      setDragVar(0);
      if (steps) go(steps);
    }
    window.setTimeout(() => setPaused(false), 1200);
  };

  const active = mod(index, n);
  const rels = items.map((_, i) => {
    let r = mod(i - index, n);
    if (r > n / 2) r -= n;
    if (n % 2 === 0 && r === n / 2) r = -n / 2;
    return r;
  });
  const jumps = rels.map((r, i) => prevRel.current[i] !== undefined && Math.abs(r - prevRel.current[i]) > visibleSide);
  useEffect(() => {
    prevRel.current = rels;
  });

  return (
    <div className="w-full">
      <div
        ref={wrapRef}
        className="fx-cf mx-auto"
        style={{ height: h + 24, perspective: '1400px' } as React.CSSProperties}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => !drag.current.active && setPaused(false)}
      >
        {items.map((item, i) => {
          const r = rels[i];
          const a = Math.abs(r);
          const hidden = a > visibleSide;
          const transition = dragging
            ? 'none'
            : jumps[i]
              ? 'opacity 500ms cubic-bezier(.16,1,.3,1)'
              : 'transform 700ms cubic-bezier(.16,1,.3,1), opacity 500ms cubic-bezier(.16,1,.3,1), filter 500ms';
          return (
            <div
              key={i}
              className="fx-cf__slide"
              aria-hidden={r !== 0}
              onClick={() => {
                if (!drag.current.moved && r !== 0) go(r);
              }}
              style={{
                width: w,
                height: h,
                marginLeft: -w / 2,
                zIndex: 20 - a,
                opacity: hidden ? 0 : 1 - a * 0.22,
                filter: a === 0 ? 'none' : `saturate(${1 - a * 0.25})`,
                pointerEvents: hidden ? 'none' : 'auto',
                transform: `translate3d(calc(${r * gap}px + var(--drag, 0px)), ${a * 10}px, ${-a * 120}px) rotateY(${r * -16}deg) scale(${1 - a * 0.1})`,
                transition,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className={`fx-press w-12 h-12 rounded-full grid place-items-center ${tone === 'dark' ? 'bg-white/10 text-white' : 'fx-glass text-[#0E1526]'}`}
          aria-label="Vorige"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label={`${label} positie`}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Ga naar ${i + 1}`}
              onClick={() => {
                let d = i - active;
                if (d > n / 2) d -= n;
                if (d < -n / 2) d += n;
                go(d);
              }}
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 28 : 8,
                background: i === active ? 'var(--fx-accent)' : tone === 'dark' ? 'rgba(255,255,255,.3)' : 'rgba(14,21,38,.18)',
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className={`fx-press w-12 h-12 rounded-full grid place-items-center ${tone === 'dark' ? 'bg-white/10 text-white' : 'fx-glass text-[#0E1526]'}`}
          aria-label="Volgende"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
