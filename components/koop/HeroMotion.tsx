'use client';

import { useEffect } from 'react';

/** Script inline placé avant le hero : cache les éléments animés avant le premier rendu. */
export const PRE_SCRIPT = `(function(){var d=document.documentElement;
if(!('animate' in Element.prototype))return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('k-pre');setTimeout(function(){d.classList.remove('k-pre')},4000);})();`;

const EXPO = 'cubic-bezier(.16,1,.3,1)';
const SOFT = 'cubic-bezier(.22,.7,.25,1)';
const GLASS = 'cubic-bezier(.2,.75,.28,1)';

function formatNl(n: number) {
  return n.toLocaleString('nl-NL');
}

export function HeroMotion() {
  // Entrance timeline (runs once)
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains('k-pre')) return;
    const s = window.matchMedia('(max-width: 640px)').matches ? 0.86 : 1;
    const running: Animation[] = [];
    const q = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));
    const go = (els: HTMLElement[], frames: Keyframe[], dur: number, delay: number, easing: string) =>
      els.forEach((el, i) =>
        running.push(el.animate(frames, { duration: dur * s, delay: (delay + i * 70) * s, easing, fill: 'both' })),
      );
    const lift = (sel: string, delay: number, dist = '.7em', dur = 560) =>
      go(q(sel), [{ opacity: 0, translate: `0 ${dist}` }, { opacity: 1, translate: '0 0' }], dur, delay, SOFT);
    const settle = (sel: string, delay: number, dur = 760, from = 0.985, dist = '1.1em') =>
      go(q(sel), [{ opacity: 0, scale: from, translate: `0 ${dist}` }, { opacity: 1, scale: 1, translate: '0 0' }], dur, delay, GLASS);
    const rise = (els: HTMLElement[], delay: number, dur = 980) =>
      go(els, [{ clipPath: 'inset(100% 0 -14% 0)', translate: '0 .16em' }, { clipPath: 'inset(-18% 0 -14% 0)', translate: '0 0' }], dur, delay, EXPO);

    lift('.k-brand', 60, '.55em', 600);
    settle('.k-nav', 150, 700, 0.99, '.5em');
    settle('.k-header__cta .k-btn', 200, 700, 0.985, '.5em');
    settle('.k-burger', 150, 700, 0.9, '.4em');
    go(q('.k-screen'), [{ opacity: 0, translate: '40px 20px', filter: 'blur(12px)' }, { opacity: 1, translate: '0 0', filter: 'blur(0)' }], 1600, 100, EXPO);
    lift('.k-eyebrow', 300, '.8em', 520);
    rise(q('.k-h1 .k-line > span'), 380);
    settle('.k-chip4k', 760, 640, 0.88, '.3em');
    lift('.k-tag', 800);
    lift('.k-hero__ctas', 880);
    settle('.k-panel', 820, 880, 0.982, '1.4em');
    go(q('.k-meter__track i'), [{ scale: '0 1' }, { scale: '1 1' }], 820, 1120, EXPO);
    rise(q('.k-num'), 920, 860);
    lift('.k-lbl', 1030, '.6em', 520);
    go(q('.k-slash'), [{ scale: '1 0' }, { scale: '1 1' }], 700, 1010, EXPO);
    lift('.k-pay', 1100, '.5em', 520);
    settle('.k-meet', 1140, 820, 0.985, '1.2em');

    // Count-up on the two big numbers
    q('.k-num[data-to]').forEach((el, i) => {
      const to = Number(el.dataset.to);
      const start = performance.now() + (920 + i * 70) * s;
      const dur = 1300 * s;
      const tick = (now: number) => {
        const t = Math.min(1, Math.max(0, (now - start) / dur));
        const e = 1 - Math.pow(1 - t, 4);
        el.textContent = `${formatNl(Math.round(to * e))}+`;
        if (t < 1) requestAnimationFrame(tick);
      };
      el.textContent = '0+';
      requestAnimationFrame(tick);
    });

    Promise.all(running.map((a) => a.finished.catch(() => undefined))).then(() => {
      html.classList.remove('k-pre');
      running.forEach((a) => a.cancel());
    });
  }, []);

  // Pointer parallax on the glass screen (desktop only)
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const screen = document.querySelector<HTMLElement>('.k-screen');
    const hero = document.querySelector<HTMLElement>('.k-hero');
    if (!fine || calm || !screen || !hero) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        screen.style.setProperty('--tx', `${(x * 16).toFixed(1)}px`);
        screen.style.setProperty('--ty', `${(y * 12).toFixed(1)}px`);
        screen.style.setProperty('--ry', `${(-18 + x * 6).toFixed(2)}deg`);
        screen.style.setProperty('--rx', `${(6 - y * 4).toFixed(2)}deg`);
      });
    };
    hero.addEventListener('pointermove', onMove);
    return () => { hero.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return null;
}
