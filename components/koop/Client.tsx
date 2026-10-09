'use client';

import { useEffect, useState } from 'react';
import { Chevron, WaIcon } from './Icons';
import { Wa } from './Wa';

/** Fait apparaître les éléments .k-reveal une seule fois quand ils entrent à l'écran. */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.k-reveal'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}

/** Barre WhatsApp fixe sur mobile : glisse en place après l'animation d'entrée, puis reste visible. */
export function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`k-sticky${show ? ' is-visible' : ''}`}>
      <Wa message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen." refCode="KOOP-mobile-sticky" className="k-btn k-btn--wa">
        <WaIcon className="k-wa-ico" />
        Bestel via WhatsApp
        <span className="k-knob"><Chevron /></span>
      </Wa>
    </div>
  );
}
