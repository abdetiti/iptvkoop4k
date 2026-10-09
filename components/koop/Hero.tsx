import React from 'react';
import { Chevron, TvIcon, WaIcon } from './Icons';
import { Wa } from './Wa';
import { HeroMotion } from './HeroMotion';

const PAY = [
  { src: '/images/logos/paiement/ideal.svg', alt: 'iDEAL' },
  { src: '/images/logos/paiement/paypal.svg', alt: 'PayPal' },
  { src: '/images/logos/paiement/visa.svg', alt: 'Visa' },
  { src: '/images/logos/paiement/mastercard.svg', alt: 'Mastercard' },
  { src: '/images/logos/paiement/apple-pay.svg', alt: 'Apple Pay' },
];

export function PayLogos() {
  return (
    <div className="k-pay" aria-label="Betaalmethoden">
      {PAY.map((p) => (
        <span key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" width={40} height={15} /></span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="k-hero" id="top" aria-labelledby="k-h1">
      <div className="k-plate" aria-hidden="true">
        <div className="k-plate__sky" />
        <div className="k-plate__polder" />
        <div className="k-plate__horizon" />
        <div className="k-screen"><span className="k-screen__sweep" /></div>
      </div>

      <div className="k-wrap k-hero__body">
        <div>
          <p className="k-eyebrow k-a-fade">Live tv, sport, films en series</p>
          <h1 className="k-h1" id="k-h1">
            <span className="k-line"><span><strong>IPTV kopen</strong></span></span>
            <span className="k-line"><span>voor de grote</span></span>
            <span className="k-line"><span>momenten <em>thuis</em>.</span></span>
          </h1>
          <div className="k-tagrow">
            <span className="k-chip4k k-a-fade" aria-hidden="true">4K</span>
            <p className="k-tag k-a-fade">Beeld tot 4K, op 1 tot 4 apparaten tegelijk.</p>
          </div>
          <div className="k-hero__ctas k-a-fade">
            <a href="#abonnementen" className="k-btn k-btn--dark">
              Kies je abonnement
              <span className="k-knob"><Chevron /></span>
            </a>
            <a href="#bestellen" className="k-btn k-btn--glass k-glass k-btn--plain">Zo werkt bestellen</a>
          </div>
        </div>

        <a href="#abonnementen" className="k-panel k-a-fade" aria-label="Standard, 12 maanden: €4,92 per maand. Bekijk alle prijzen">
          <span className="k-panel__k">Standard · 12 maanden</span>
          <span className="k-panel__price"><b>€4,92</b><span>/mnd</span></span>
          <span className="k-panel__note"><i />
            <span>Meest gekozen<small>€58,99 voor het hele jaar</small></span>
          </span>
          <span className="k-panel__tv"><TvIcon /></span>
          <span className="k-meter">
            <span className="k-meter__scale"><b>1</b><span>2</span><span>3</span><span>4</span></span>
            <span className="k-meter__track"><i /></span>
            <span className="k-meter__cap"><span>aantal apparaten</span><span>Alle prijzen →</span></span>
          </span>
        </a>
      </div>

      <div className="k-wrap k-hero__foot">
        <div>
          <div className="k-stats">
            <div className="k-stat">
              <span className="k-num-wrap"><span className="k-num" data-to="32000">32.000+</span></span>
              <span className="k-lbl k-a-fade">live tv-<br />kanalen</span>
            </div>
            <span className="k-slash" aria-hidden="true" />
            <div className="k-stat">
              <span className="k-num-wrap"><span className="k-num" data-to="180000">180.000+</span></span>
              <span className="k-lbl k-a-fade">films &amp;<br />series</span>
            </div>
          </div>
          <PayLogos />
        </div>

        <Wa message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen." refCode="KOOP-hero-pill" className="k-meet k-glass k-a-fade">
          <span className="k-meet__thumb"><WaIcon /></span>
          <b>Bestel via WhatsApp<small>Hulp in het Nederlands, 24/7</small></b>
          <span className="k-knob"><Chevron /></span>
        </Wa>
      </div>

      <HeroMotion />
    </section>
  );
}
