'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Chevron } from './Icons';
import { Wa } from './Wa';

const LINKS = [
  { href: '/iptv-abonnement/', label: 'Abonnementen', hint: 'Prijzen' },
  { href: '/zenderlijst/', label: 'Zenderlijst', hint: 'Wat kijk je' },
  { href: '/apparaten/', label: 'Apparaten', hint: 'Installeren' },
  { href: '/hoe-bestellen/', label: 'Hoe bestellen', hint: 'In 4 stappen' },
  { href: '/veelgestelde-vragen/', label: 'FAQ', hint: 'Vragen' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menu.current?.contains(t) && !btn.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, [open]);

  return (
    <>
      <header className={`k-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="k-wrap">
          <a href="/" className="k-brand k-a-fade" aria-label="IPTV Koop 4K – home">
            <span className="k-brand__mark" aria-hidden="true">LOGO</span>
            <span className="k-brand__name">IPTV Koop <em>4K</em></span>
          </a>

          <nav className="k-nav k-glass k-a-fade" aria-label="Hoofdmenu">
            <a href="/" aria-current="page" aria-label="Home">
              <svg viewBox="0 0 20 21" fill="none" aria-hidden="true"><path d="M2 8.4 10 2l8 6.4V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" stroke="#202940" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            </a>
            <a href="/iptv-abonnement/">Abonnementen</a>
            <a href="/zenderlijst/">Zenderlijst</a>
            <hr />
            <a href="/apparaten/">Apparaten</a>
            <a href="/hoe-bestellen/">Hoe bestellen</a>
            <a href="/veelgestelde-vragen/">FAQ</a>
          </nav>

          <div className="k-header__cta">
            <a href="/iptv-abonnement/" className="k-btn k-btn--dark k-a-fade">
              Bekijk abonnementen
              <span className="k-knob"><Chevron /></span>
            </a>
            <button
              ref={btn}
              type="button"
              className="k-burger k-glass k-a-fade"
              aria-label={open ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={open}
              aria-controls="k-menu"
              onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
            >
              <i /><i />
            </button>
          </div>
        </div>
      </header>

      <div id="k-menu" ref={menu} className="k-menu k-glass" data-open={open ? '' : undefined}>
        <nav aria-label="Mobiel menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="k-menu__link" onClick={() => setOpen(false)}>
              {l.label}
              <span>{l.hint}</span>
            </a>
          ))}
        </nav>
        <Wa
          message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen."
          refCode="KOOP-menu"
          className="k-btn k-btn--wa"
        >
          Bestel via WhatsApp
          <span className="k-knob"><Chevron /></span>
        </Wa>
      </div>
    </>
  );
}
