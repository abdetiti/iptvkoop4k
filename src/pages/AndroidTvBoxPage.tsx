import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight, MessageCircle, Package, Star, Truck, Tv } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

// ── Réglages de l'offre box (changer ici seulement) ─────────────────────
const BOX = {
  price: 200, // prix payé
  oldPrice: 280 as number | null, // prix barré (null = pas de prix barré)
  months: 12, // mois d'abonnement Premium offerts
  deliveryDays: 3,
  rating: '4,8',
  customers: '1.200+',
};

const IMG = '/images/android-tv-box';
const IMAGES = [
  { src: `${IMG}/box-en-afstandsbediening.webp`, thumb: `${IMG}/box-en-afstandsbediening-thumb.webp`, alt: 'Android 14 TV Box met afstandsbediening' },
  { src: `${IMG}/aansluitingen-achterkant.webp`, thumb: `${IMG}/aansluitingen-achterkant-thumb.webp`, alt: 'Aansluitingen van de Android 14 TV Box: HDMI, USB, ethernet en voeding' },
  { src: `${IMG}/zijkant.webp`, thumb: `${IMG}/zijkant-thumb.webp`, alt: 'Android 14 TV Box van de zijkant' },
  { src: `${IMG}/afstandsbediening.webp`, thumb: `${IMG}/afstandsbediening-thumb.webp`, alt: 'Afstandsbediening van de Android 14 TV Box' },
];

const FEATURES = ['4K Ultra HD + HDR10', 'Android 14', '80.000+ zenders inbegrepen', '200.000+ films en series'];

const STEPS = [
  { icon: MessageCircle, title: 'Bestel via WhatsApp', text: 'Druk op de knop: je bericht staat al klaar. We bevestigen je bestelling en de betaling in het gesprek.' },
  { icon: Package, title: 'Box thuisbezorgd', text: `Je Android 14 TV Box is binnen ${BOX.deliveryDays} dagen bij je thuis.` },
  { icon: Tv, title: 'Aansluiten en kijken', text: 'Sluit de box aan op je tv en internet, en geniet van je zenders, films en series.' },
];

const FAQ = [
  { q: 'Wat zit er in de prijs?', a: `De Android 14 TV Box en ${BOX.months} maanden IPTV Koop 4K Premium. Je betaalt één keer €${BOX.price}.` },
  { q: 'Hoe bestel ik de box?', a: 'Via WhatsApp. Druk op de knop, stuur het bericht en wij regelen de bestelling en de betaling met je in het gesprek.' },
  { q: 'Wanneer wordt de box geleverd?', a: `Binnen ${BOX.deliveryDays} dagen na je bestelling is de box bij je thuis in Nederland.` },
  { q: 'Heb ik de box nodig om IPTV te kijken?', a: 'Nee. Je kunt ook kijken op je Smart TV, Fire TV Stick, telefoon of computer. De box is handig als je alles kant-en-klaar wilt.' },
];

const MESSAGE = `Hoi IPTV Koop 4K, ik wil graag de Android 14 TV Box met ${BOX.months} maanden abonnement bestellen (€${BOX.price}).`;

const Gift: React.FC = () => (
  <span className="inline-block rounded-lg bg-[#FF5A1F] px-2.5 py-0.5 font-extrabold text-white">cadeau</span>
);

/** Date de livraison : aujourd'hui + N jours, jamais un dimanche. */
function useDeliveryDate(days: number) {
  const [txt, setTxt] = useState<string | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    setTxt(d.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' }));
  }, [days]);
  return txt ? `Vandaag besteld = geleverd op ${txt}` : 'Vandaag besteld = snel in huis';
}

export const AndroidTvBoxPage: React.FC = () => {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + IMAGES.length) % IMAGES.length);
  const delivery = useDeliveryDate(BOX.deliveryDays);

  useEffect(() => {
    document.title = 'Android 14 TV Box + 12 maanden IPTV cadeau – IPTV Koop 4K';
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute('content');
    meta?.setAttribute('content', `Kant-en-klare 4K Android 14 TV Box met ${BOX.months} maanden IPTV Koop 4K Premium cadeau. 80.000+ zenders en 200.000+ films en series. Binnen ${BOX.deliveryDays} dagen in huis, bestel via WhatsApp.`);
    return () => { if (prev) meta?.setAttribute('content', prev); };
  }, []);

  return (
    <div className="w-full py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Kruimelpad" className="mb-5 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#FF5A1F]">Home</Link> <span aria-hidden="true">›</span>{' '}
          <Link to="/apparaten/" className="hover:text-[#FF5A1F]">Apparaten</Link> <span aria-hidden="true">›</span>{' '}
          <span className="text-slate-700">Android 14 TV Box</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Galerie */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[28px] bg-[#0E1526]">
              <img src={IMAGES[i].src} alt={IMAGES[i].alt} width={1200} height={1200} className="absolute inset-0 w-full h-full object-cover" />
              <button type="button" onClick={() => go(-1)} aria-label="Vorige foto" className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/85 text-[#0E1526] hover:bg-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Volgende foto" className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/85 text-[#0E1526] hover:bg-white">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FF5A1F] px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-extrabold uppercase tracking-wider text-white">
                {BOX.months} mnd abonnement cadeau
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {IMAGES.map((im, k) => (
                <button
                  key={im.src}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`Foto ${k + 1}: ${im.alt}`}
                  aria-current={k === i}
                  className={`overflow-hidden rounded-2xl border-2 transition-colors ${k === i ? 'border-[#FF5A1F]' : 'border-transparent hover:border-slate-300'}`}
                >
                  <img src={im.thumb} alt="" width={300} height={300} loading="lazy" className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Infos */}
          <div>
            <span className="inline-block rounded-full border border-[#FF5A1F]/40 bg-[#FFE9DF] px-3.5 py-1 text-xs font-extrabold tracking-[0.14em] text-[#FF5A1F]">NIEUW</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E1526] leading-[1.05]">Android 14 TV Box</h1>
            <p className="mt-3 text-lg sm:text-xl font-bold text-[#FF5A1F]">+ {BOX.months} maanden IPTV Koop 4K abonnement <Gift /></p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((k) => <Star key={k} className="w-[18px] h-[18px] fill-[#FFB020] text-[#FFB020]" />)}
              </span>
              <b className="text-[#0E1526]">{BOX.rating}</b>
              <span>· {BOX.customers} tevreden klanten</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-slate-200 pb-6">
              {BOX.oldPrice && <s className="font-display text-2xl sm:text-3xl font-bold text-slate-400">€{BOX.oldPrice}</s>}
              <span className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-[#0E1526] leading-none">€{BOX.price}</span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-extrabold tracking-[0.14em] text-[#FF5A1F]">EENMALIG</span>
                <span className="text-sm text-slate-600">{BOX.months} mnd abonnement <Gift /></span>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              Ontvang een kant-en-klare 4K Android 14 TV Box en krijg {BOX.months} maanden IPTV Koop 4K Premium <Gift />. Aansluiten en genieten van 80.000+ zenders en 200.000+ films en series in 4K Ultra HD met HDR10.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-3xl border border-[#FF5A1F]/30 bg-[#FFF4EE] p-4 sm:p-5">
              <span className="grid place-items-center flex-none w-12 h-12 rounded-full bg-[#FF5A1F] text-white"><Truck className="w-6 h-6" /></span>
              <div>
                <p className="font-bold text-[#0E1526]">Binnen {BOX.deliveryDays} dagen in huis</p>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF5A1F]">{delivery}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 font-bold text-[#0E1526]">
                  <span className="grid place-items-center flex-none w-6 h-6 rounded-full bg-[#FF5A1F] text-white"><Check className="w-4 h-4" /></span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton message={MESSAGE} context={{ page: '/android-tv-box/', plan: 'box', ref: 'BOX-hero' }} variant="primary" fullWidth className="sm:flex-1 min-h-[56px]">
                Bestel via WhatsApp
              </WhatsAppButton>
              <Link to="/iptv-abonnement/" className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 font-bold text-[#0E1526] hover:border-[#0E1526]">
                Alle pakketten
              </Link>
            </div>
            <p className="mt-3 text-sm text-slate-500">Je bestelt en betaalt in WhatsApp. Je abonnement wordt direct na je betaling geactiveerd.</p>
          </div>
        </div>

        {/* Zo werkt het */}
        <section className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0E1526] mb-6">Zo werkt het</h2>
          <ol className="grid md:grid-cols-3 gap-4">
            {STEPS.map(({ icon: Icon, title, text }, k) => (
              <li key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F]"><Icon className="w-5 h-5" /></span>
                <h3 className="mt-4 text-lg font-bold text-[#0E1526]">{k + 1}. {title}</h3>
                <p className="mt-1.5 text-slate-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0E1526] mb-6">Veelgestelde vragen over de TV Box</h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-bold text-[#0E1526] flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#FF5A1F] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-[28px] bg-[#0E1526] p-7 sm:p-12 text-center text-white">
          <h2 className="font-display text-2xl sm:text-4xl font-bold">Kant-en-klaar kijken?</h2>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">De box + {BOX.months} maanden Premium voor €{BOX.price}. Je bericht staat al klaar in WhatsApp.</p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton message={MESSAGE} context={{ page: '/android-tv-box/', plan: 'box', ref: 'BOX-cta' }} variant="primary">
              Bestel via WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};
