import React from 'react';
import { Tv, Trophy, Clapperboard, Globe, Smile, Newspaper, ArrowUpRight } from 'lucide-react';
import { DEVICES } from '../../data/devices';
import { DeviceIcon } from '../DeviceIcon';
import { FAQ_ITEMS } from '../../data/faq';
import { Chevron, WaIcon } from './Icons';
import { Wa } from './Wa';

/* ---------- 02 · Wat kijk je ---------- */
const CATS = [
  { icon: Tv, t: 'Nederlandse zenders', p: 'De zenders die je kent, live en met een programmagids (EPG).' },
  { icon: Trophy, t: 'Live sport', p: 'Voetbal, autosport en meer, live op je eigen scherm.' },
  { icon: Clapperboard, t: 'Films & series', p: 'Meer dan 180.000 films en series om uit te kiezen.' },
  { icon: Globe, t: 'Internationale tv', p: 'Zenders uit andere landen, ook in je eigen taal.' },
  { icon: Smile, t: 'Familie & kinderen', p: 'Tekenfilms en programma’s voor jong en oud.' },
  { icon: Newspaper, t: 'Nieuws', p: 'Nieuwszenders uit binnen- en buitenland.' },
];

export function Categories() {
  return (
    <section className="k-section k-section--tight" id="aanbod" aria-labelledby="k-aanbod">
      <div className="k-wrap">
        <div className="k-head">
          <div className="k-reveal">
            <p className="k-kicker"><span>02</span>Wat je kijkt</p>
            <h2 className="k-h2" id="k-aanbod">Eén abonnement, <em>alles</em> op één plek.</h2>
          </div>
          <p className="k-lead k-reveal" style={{ ['--d' as string]: '.1s' }}>
            32.000+ live tv-kanalen en 180.000+ films en series. Van het journaal tot de finale.
          </p>
        </div>
        <div className="k-cats">
          {CATS.map((c, i) => (
            <article key={c.t} className="k-cat k-reveal" style={{ ['--d' as string]: `${0.05 * i}s` }}>
              <span className="k-cat__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="k-cat__icon"><c.icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </article>
          ))}
        </div>
        <p className="k-cats-note k-reveal">
          Het aanbod kan per pakket verschillen. Zoek je een bepaalde zender? <a href="/zenderlijst/" style={{ borderBottom: '1px solid var(--k-line-2)', color: 'var(--k-ink-2)' }}>Bekijk de zenderlijst</a> of vraag het ons.
        </p>
      </div>
    </section>
  );
}

/* ---------- 03 · Apparaten ---------- */
export function Devices() {
  return (
    <section className="k-section k-section--tight" id="apparaten" aria-labelledby="k-app">
      <div className="k-wrap">
        <div className="k-head">
          <div className="k-reveal">
            <p className="k-kicker"><span>03</span>Apparaten</p>
            <h2 className="k-h2" id="k-app">Kijk op het scherm dat <em>jij</em> kiest.</h2>
          </div>
          <p className="k-lead k-reveal" style={{ ['--d' as string]: '.1s' }}>
            Installeer een geschikte speler, vul je gegevens in en je kijkt. Voor elk apparaat staat er een handleiding klaar.
          </p>
        </div>
        <div className="k-devs">
          {DEVICES.map((d, i) => (
            <a key={d.slug} href={`/apparaten/${d.slug}/`} className="k-dev k-reveal" style={{ ['--d' as string]: `${0.05 * i}s` }}>
              <DeviceIcon icon={d.icon} />
              <div>
                <b>{d.name}</b>
                <span>Handleiding <ArrowUpRight size={15} aria-hidden="true" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 · Zo bestel je ---------- */
const STEPS = [
  { t: 'Kies je pakket', p: 'Standard of Premium, 3, 6 of 12 maanden en 1 tot 4 apparaten.' },
  { t: 'Stuur een WhatsApp', p: 'Laat ons weten welk pakket je wilt en op welk apparaat je kijkt.' },
  { t: 'Betaal veilig', p: 'Je krijgt een betaallink voor iDEAL, PayPal, je creditcard of Apple Pay.' },
  { t: 'Ontvang je gegevens', p: 'Je inloggegevens komen via WhatsApp. Hulp bij de installatie krijg je erbij.' },
];

export function Steps() {
  return (
    <section className="k-section" id="bestellen" aria-labelledby="k-best">
      <div className="k-wrap">
        <div className="k-head">
          <div className="k-reveal">
            <p className="k-kicker"><span>04</span>Zo bestel je</p>
            <h2 className="k-h2" id="k-best">IPTV kopen in <em>vier</em> stappen.</h2>
          </div>
          <a href="/hoe-bestellen/" className="k-btn k-btn--glass k-glass k-reveal">
            Alles over bestellen
            <span className="k-knob"><Chevron /></span>
          </a>
        </div>
        <ol className="k-steps k-reveal" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.t} className="k-step">
              <span className="k-step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 05 · Gesprekken ---------- */
const REVIEWS = [
  { src: '/images/reviews/review-whatsapp-1.webp', cap: 'Vraag over films en series' },
  { src: '/images/reviews/review-whatsapp-2.webp', cap: 'Hulp bij de installatie' },
  { src: '/images/reviews/review-whatsapp-3.webp', cap: 'Afspeellijst toevoegen' },
  { src: '/images/reviews/review-whatsapp-4.webp', cap: '“Werkt het?” – “Ja.”' },
];

export function Reviews() {
  return (
    <section className="k-section" id="ervaringen" aria-labelledby="k-erv">
      <div className="k-wrap">
        <div className="k-head">
          <div className="k-reveal">
            <p className="k-kicker"><span>05</span>Uit de chat</p>
            <h2 className="k-h2" id="k-erv">Echte gesprekken, <em>echte</em> hulp.</h2>
          </div>
          <p className="k-lead k-reveal" style={{ ['--d' as string]: '.1s' }}>
            Zo ziet het contact eruit na je bestelling: korte lijnen, in het Nederlands, via WhatsApp.
          </p>
        </div>
        <div className="k-reviews">
          {REVIEWS.map((r, i) => (
            <figure key={r.src} className="k-phone k-reveal" style={{ ['--d' as string]: `${0.07 * i}s`, margin: 0 }}>
              <img src={r.src} alt={`Klantgesprek via WhatsApp: ${r.cap}`} loading="lazy" width={360} height={720} />
              <figcaption>{r.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 · Waarom ---------- */
const WHY = [
  { t: 'Je weet vooraf wat je betaalt', p: 'Per pakket, looptijd en aantal schermen staat de prijs er gewoon bij.' },
  { t: 'Hulp bij het installeren', p: 'Een handleiding per apparaat, en lukt het niet, dan kijken we via WhatsApp met je mee.' },
  { t: 'Jij bepaalt de vorm', p: 'Standard of Premium, 3, 6 of 12 maanden, op 1 tot 4 apparaten.' },
  { t: 'Contact in het Nederlands', p: 'Een vraag stel je via WhatsApp, 24/7.' },
];

export function Why() {
  return (
    <section className="k-section k-section--tight" id="waarom" aria-labelledby="k-why">
      <div className="k-wrap k-why">
        <div className="k-reveal">
          <p className="k-kicker"><span>06</span>Waarom bij ons</p>
          <h2 className="k-h2" id="k-why">Rustig kijken begint bij <em>duidelijkheid</em>.</h2>
        </div>
        <div className="k-why__list">
          {WHY.map((w, i) => (
            <div key={w.t} className="k-why__item k-reveal" style={{ ['--d' as string]: `${0.06 * i}s` }}>
              <i>{String(i + 1).padStart(2, '0')}</i>
              <div><h3>{w.t}</h3><p>{w.p}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 · FAQ ---------- */
export function Faq() {
  return (
    <section className="k-section" id="faq" aria-labelledby="k-faq">
      <div className="k-wrap k-faq">
        <div className="k-reveal">
          <p className="k-kicker"><span>07</span>Veelgestelde vragen</p>
          <h2 className="k-h2" id="k-faq">Goed om te <em>weten</em>.</h2>
          <p className="k-lead">Staat je vraag er niet bij? <a href="/veelgestelde-vragen/" style={{ color: 'var(--k-ink-2)', borderBottom: '1px solid var(--k-line-2)' }}>Bekijk alle vragen</a> of stuur ons een bericht.</p>
        </div>
        <div className="k-reveal" style={{ ['--d' as string]: '.1s' }}>
          {FAQ_ITEMS.map((f, i) => (
            <details key={f.q} className="k-qa" open={i === 0}>
              <summary>{f.q}<span className="k-qa__plus" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
export function FinalCta() {
  return (
    <section className="k-section k-section--tight" aria-labelledby="k-final">
      <div className="k-wrap">
        <div className="k-final k-reveal">
          <p className="k-kicker" style={{ color: '#ffb48a' }}>Klaar om te kijken?</p>
          <h2 className="k-h2" id="k-final">IPTV kopen voor <em>€4,92</em> per maand.</h2>
          <p className="k-lead">Standard, 12 maanden, 1 apparaat: €58,99 voor het hele jaar. Meer schermen of Premium? Je ziet de prijs meteen.</p>
          <div className="k-final__ctas">
            <Wa message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen." refCode="KOOP-cta" className="k-btn k-btn--wa">
              <WaIcon className="k-wa-ico" />
              Bestel via WhatsApp
              <span className="k-knob"><Chevron /></span>
            </Wa>
            <a href="#abonnementen" className="k-btn k-btn--glass">
              Vergelijk de pakketten
              <span className="k-knob"><Chevron /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="k-footer">
      <div className="k-wrap">
        <div className="k-footer__grid">
          <div>
            <a href="/" className="k-brand">
              <span className="k-brand__mark" aria-hidden="true">LOGO</span>
              <span className="k-brand__name">IPTV Koop <em>4K</em></span>
            </a>
            <p className="k-footer__note">IPTV kopen voor live tv, sport, films en series. Bestellen en hulp via WhatsApp.</p>
          </div>
          <div>
            <h4>Kijken</h4>
            <ul>
              <li><a href="/iptv-abonnement/">Abonnementen</a></li>
              <li><a href="/zenderlijst/">Zenderlijst</a></li>
              <li><a href="/iptv-vs-kabel/">IPTV vs kabel</a></li>
            </ul>
          </div>
          <div>
            <h4>Hulp</h4>
            <ul>
              <li><a href="/apparaten/">Apparaten</a></li>
              <li><a href="/hoe-bestellen/">Hoe bestellen</a></li>
              <li><a href="/veelgestelde-vragen/">Veelgestelde vragen</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Juridisch</h4>
            <ul>
              <li><a href="/algemene-voorwaarden/">Algemene voorwaarden</a></li>
              <li><a href="/privacybeleid/">Privacybeleid</a></li>
              <li><a href="/cookiebeleid/">Cookiebeleid</a></li>
              <li><a href="/retourbeleid/">Retourbeleid</a></li>
            </ul>
          </div>
        </div>
        <div className="k-footer__bottom">
          <span>© {new Date().getFullYear()} IPTV Koop 4K</span>
          <span>Bestellen gaat via WhatsApp · betalen via een veilige betaallink</span>
        </div>
      </div>
    </footer>
  );
}
