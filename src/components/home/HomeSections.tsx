import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Box, Flame, Laptop, MonitorSmartphone, Plus, Smartphone, Tv } from 'lucide-react';
import { Coverflow } from '../fx/Coverflow';
import { KineticLines, Reveal } from '../fx/Kinetic';
import { WhatsAppButton } from '../WhatsAppButton';
import { PaymentLogos } from '../PaymentLogos';

const NOTE = 'Afbeeldingen zijn ter illustratie; losse abonnementen op de getoonde streamingdiensten zijn niet inbegrepen.';

function Kicker({ children, color = 'var(--fx-accent)' }: { children: React.ReactNode; color?: string }) {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color }}>
        <span className="h-[2px] w-6 rounded-full" style={{ background: color }} />
        {children}
      </span>
    </Reveal>
  );
}

/* ---------- competitions band (right under the hero) ---------- */
const COMPS = ['eredivisie', 'premier-league', 'champions-league', 'la-liga', 'bundesliga', 'serie-a', 'ligue-1', 'conference-league', 'formule-1'];
const COMP_ALT: Record<string, string> = {
  eredivisie: 'Eredivisie', 'premier-league': 'Premier League', 'champions-league': 'UEFA Champions League', 'la-liga': 'LaLiga',
  bundesliga: 'Bundesliga', 'serie-a': 'Serie A', 'ligue-1': 'Ligue 1', 'conference-league': 'UEFA Conference League', 'formule-1': 'Formule 1',
};

export const CompetitionStrip: React.FC = () => (
  <div className="fx-mask-x overflow-hidden py-6" aria-label="Competities">
    <div className="fx-marquee gap-4" style={{ ['--fx-dur' as string]: '45s' }}>
      {[...COMPS, ...COMPS].map((c, i) => (
        <div key={i} className="fx-glass group h-[84px] w-[84px] shrink-0 overflow-hidden rounded-2xl p-1.5" aria-hidden={i >= COMPS.length}>
          <img
            src={`/images/sport-competitions/comp-${c}.webp`}
            alt={i < COMPS.length ? COMP_ALT[c] : ''}
            loading="lazy"
            className="h-full w-full rounded-xl object-cover grayscale transition duration-500 group-hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </div>
);

/* ---------- live sport coverflow ---------- */
const SPORT = [
  ['sport-oranje', 'Nederlands elftal live kijken'],
  ['sport-champions-league-sterren', 'Champions League sterren live'],
  ['sport-messi-ronaldo', 'Messi en Ronaldo live kijken'],
  ['sport-f1-coureurs', 'Formule 1 coureurs'],
  ['sport-f1-poster', 'Formule 1 live kijken'],
  ['sport-nba', 'NBA live kijken'],
];

const Poster: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="h-full w-full overflow-hidden rounded-[22px] bg-[#0b1220] shadow-[0_30px_60px_-30px_rgba(14,21,38,.6)] ring-1 ring-black/5">
    <img src={src} alt={alt} loading="lazy" decoding="async" draggable={false} className="h-full w-full object-cover" />
  </div>
);

export const LiveSport: React.FC = () => (
  <section className="relative py-16 sm:py-24">
    <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Kicker>Live sport</Kicker>
      <KineticLines
        className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
        lines={['Elke wedstrijd.', <span className="fx-shimmer">Live in je woonkamer.</span>]}
      />
    </div>
    <Coverflow
      label="Live sport"
      ratio={1.25}
      slideWidth={(w) => (w < 640 ? Math.min(w * 0.62, 260) : 300)}
      items={SPORT.map(([f, alt]) => <Poster key={f} src={`/images/sport-affiches/${f}.webp`} alt={alt} />)}
    />
  </section>
);

/* ---------- platforms + films ---------- */
const PLATFORMS: [string, string][] = [
  ['/images/logos/plateformes/netflix-couleur.svg', 'Netflix'],
  ['/images/plateformes/disney-plus.webp', 'Disney+'],
  ['/images/plateformes/prime-video.webp', 'Prime Video'],
  ['/images/plateformes/hbo-max.webp', 'HBO Max'],
  ['/images/plateformes/apple-tv-plus.webp', 'Apple TV+'],
  ['/images/plateformes/paramount-plus.webp', 'Paramount+'],
  ['/images/plateformes/peacock.webp', 'Peacock'],
  ['/images/plateformes/hulu.webp', 'Hulu'],
  ['/images/plateformes/pluto-tv.webp', 'Pluto TV'],
  ['/images/plateformes/trutv.webp', 'truTV'],
];
const FILMS: [string, string][] = [
  ['poster-outer-banks', 'Outer Banks'], ['poster-venom-the-last-dance', 'Venom: The Last Dance'],
  ['poster-spider-man-brand-new-day', 'Spider-Man: Brand New Day'], ['poster-the-odyssey', 'The Odyssey'],
  ['poster-the-mentalist', 'The Mentalist'], ['poster-paw-patrol', 'PAW Patrol'], ['poster-loki', 'Loki'],
  ['poster-champions-league', 'UEFA Champions League'], ['poster-wk-2026', 'FIFA World Cup 2026'],
  ['poster-uefa-euro', 'UEFA EURO'], ['poster-formule-1', 'Formule 1'],
];

export const FilmsAndPlatforms: React.FC = () => (
  <section className="relative overflow-hidden py-16 sm:py-24">
    <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-white/60 to-transparent" />
    <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Kicker color="#2E5BFF">Films &amp; series</Kicker>
      <KineticLines
        className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
        lines={['180.000+ films en series.', 'Je volgende avond is al klaar.']}
      />
    </div>

    <div className="fx-mask-x mb-12 overflow-hidden py-2">
      <div className="fx-marquee gap-4" style={{ ['--fx-dur' as string]: '50s' }}>
        {[...PLATFORMS, ...PLATFORMS].map(([src, alt], i) => (
          <div key={i} className="fx-glass grid h-[78px] w-[150px] shrink-0 place-items-center overflow-hidden rounded-2xl" aria-hidden={i >= PLATFORMS.length}>
            <img src={src} alt={i < PLATFORMS.length ? alt : ''} loading="lazy" className={src.endsWith('.svg') ? 'h-8 w-auto' : 'h-full w-full object-cover'} />
          </div>
        ))}
      </div>
    </div>

    <Coverflow
      label="Films en series"
      ratio={1.48}
      autoplay={3500}
      slideWidth={(w) => (w < 640 ? Math.min(w * 0.52, 220) : 250)}
      items={FILMS.map(([f, alt]) => <Poster key={f} src={`/images/films/${f}.webp`} alt={alt} />)}
    />
    <p className="mx-auto mt-6 max-w-2xl px-4 text-center text-[13px] text-[#5b6478]">{NOTE}</p>
  </section>
);

/* ---------- 4 steps with a line drawn by scroll ---------- */
const STEPS = [
  ['Kies je pakket', 'Standard of Premium, 3, 6 of 12 maanden en 1 tot 4 apparaten.'],
  ['Stuur een WhatsApp', 'Je bericht staat al klaar met je keuze. Laat ons weten op welk apparaat je kijkt.'],
  ['Betaal veilig', 'Je krijgt een betaallink voor iDEAL, PayPal, Visa, Mastercard of Apple Pay.'],
  ['Ontvang je gegevens', 'Je inloggegevens komen via WhatsApp. We helpen je bij de installatie.'],
];

export const Steps: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Kicker>Zo bestel je</Kicker>
        <KineticLines
          className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
          lines={['IPTV kopen', 'in vier stappen.']}
        />
        <div ref={ref} className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] rounded-full bg-[rgba(14,21,38,.08)] lg:block" />
          <motion.div style={{ scaleX }} className="absolute left-0 right-0 top-8 hidden h-[2px] origin-left rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#a99bff] to-[#2E5BFF] lg:block" />
          <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, p], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div role="listitem" className="fx-spot fx-glass relative h-full rounded-[26px] p-6">
                  <span className="font-display grid h-16 w-16 place-items-center rounded-2xl bg-[#0E1526] text-2xl font-bold text-white shadow-[0_14px_30px_-12px_rgba(14,21,38,.6)]">
                    {i + 1}
                  </span>
                  <h3 className="font-display mt-6 text-xl font-bold tracking-[-0.03em] text-[#0E1526]">{t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5b6478]">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- reviews coverflow (phone frames) ---------- */
const REVIEWS = [
  ['/images/reviews/review-whatsapp-1.webp', 'Vraag over films en series'],
  ['/images/reviews/review-whatsapp-2.webp', 'Hulp bij de installatie'],
  ['/images/reviews/review-whatsapp-3.webp', 'Afspeellijst toevoegen'],
  ['/images/reviews/review-whatsapp-4.webp', '“Werkt het?” – “Ja.”'],
];

export const Reviews: React.FC = () => (
  <section className="relative overflow-hidden py-16 sm:py-24">
    <div className="absolute inset-0 -z-10 bg-[#0E1526]" />
    <div className="absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(37,211,102,.25),transparent)]" />
    <div className="absolute -right-40 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(46,91,255,.3),transparent)]" />
    <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <Kicker color="#25D366">Uit de chat</Kicker>
      <KineticLines
        className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl"
        lines={['Echte gesprekken,', 'echte hulp.']}
      />
      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-xl text-[16px] text-white/65">Zo ziet het contact eruit na je bestelling: kort, persoonlijk en in het Nederlands.</p>
      </Reveal>
    </div>
    <Coverflow
      label="Klantgesprekken"
      ratio={2}
      visibleSide={1}
      tone="dark"
      slideWidth={(w) => (w < 640 ? Math.min(w * 0.66, 250) : 290)}
      items={REVIEWS.map(([src, cap]) => (
        <figure key={src} className="m-0 flex h-full w-full flex-col rounded-[34px] bg-[#1b2436] p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)] ring-1 ring-white/10">
          <img src={src} alt={`Klantgesprek via WhatsApp: ${cap}`} loading="lazy" decoding="async" draggable={false} className="min-h-0 flex-1 rounded-[26px] object-cover object-top" />
          <figcaption className="px-3 pb-1 pt-2.5 text-center text-[13px] text-white/70">{cap}</figcaption>
        </figure>
      ))}
    />
  </section>
);

/* ---------- devices ---------- */
const DEVICES = [
  { slug: 'smart-tv', name: 'Smart TV', sub: 'Samsung & LG', Icon: Tv },
  { slug: 'android-tv', name: 'Android TV', sub: 'en Google TV', Icon: MonitorSmartphone },
  { slug: 'firestick', name: 'Fire TV Stick', sub: 'Amazon', Icon: Flame },
  { slug: 'mag-box', name: 'MAG Box', sub: 'via portaladres', Icon: Box },
  { slug: 'iphone-ipad', name: 'iPhone & iPad', sub: 'iOS', Icon: Smartphone },
  { slug: 'windows-pc', name: 'Windows PC', sub: 'en laptop', Icon: Laptop },
];

export const Devices: React.FC = () => (
  <section className="py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Kicker color="#2E5BFF">Apparaten</Kicker>
          <KineticLines
            className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
            lines={['Jij kiest het scherm.', 'Wij helpen je op weg.']}
          />
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-[16px] text-[#5b6478]">Voor elk apparaat staat een handleiding klaar. Lukt het niet? We kijken via WhatsApp met je mee.</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
        {DEVICES.map(({ slug, name, sub, Icon }, i) => (
          <Reveal key={slug} delay={i * 0.05}>
            <Link
              to={`/apparaten/${slug}/`}
              className="fx-spot fx-glass fx-press group flex h-full flex-col justify-between gap-10 rounded-[24px] p-5 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0E1526] shadow-sm ring-1 ring-black/5 transition duration-500 group-hover:rotate-[-6deg] group-hover:bg-[#0E1526] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <span>
                <span className="font-display block text-[17px] font-bold tracking-[-0.02em] text-[#0E1526]">{name}</span>
                <span className="mt-0.5 flex items-center justify-between text-[13px] text-[#5b6478]">
                  {sub}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- FAQ ---------- */
const FAQ = [
  ['Hoe snel ontvang ik mijn toegang?', 'Je ontvangt je inloggegevens nadat je bestelling is bevestigd en verwerkt. Vraag bij het bestellen gerust naar de verwachte activatietijd.'],
  ['Welke betaalmethoden zijn er?', 'iDEAL, PayPal, Visa, Mastercard en Apple Pay, via een veilige betaallink die je in WhatsApp ontvangt.'],
  ['Wat is het verschil tussen Standard en Premium?', 'Premium draait op een krachtigere server dan Standard.'],
  ['Welke apparaten worden ondersteund?', 'Smart TV (Samsung, LG), Android TV, Google TV, Fire TV Stick, MAG, iPhone, iPad, Android-telefoons, Windows en Mac.'],
  ['Kan ik in HD en 4K kijken?', 'Ja, waar beschikbaar. De kwaliteit hangt af van de bron, je scherm, je speler en je internetverbinding.'],
  ['Kan ik op meerdere schermen tegelijk kijken?', 'Ja, met een abonnement voor 2, 3 of 4 apparaten.'],
];

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Kicker>Veelgestelde vragen</Kicker>
          <KineticLines
            className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
            lines={['Goed om', 'te weten.']}
          />
          <Reveal delay={0.1}>
            <Link to="/veelgestelde-vragen/" className="fx-press mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#0E1526] px-5 text-[15px] font-bold text-white">
              Alle vragen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          {FAQ.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.04}>
                <div className={`mb-3 overflow-hidden rounded-[22px] transition-colors duration-300 ${isOpen ? 'bg-white shadow-[0_20px_50px_-30px_rgba(14,21,38,.4)]' : 'fx-glass'}`}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="fx-press flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-bold text-[#0E1526] sm:px-6 sm:text-[17px]"
                  >
                    {q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? '#FF5A1F' : '#0E1526' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#5b6478] sm:px-6">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- final CTA ---------- */
export const FinalCta: React.FC = () => (
  <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
    <Reveal>
      <div className="fx-holo relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-white px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,31,.22),transparent)]" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(46,91,255,.18),transparent)]" />
        <KineticLines
          className="font-display relative text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
          lines={['Klaar om', <span className="fx-shimmer">IPTV te kopen?</span>]}
        />
        <p className="relative mx-auto mt-5 max-w-xl text-[16px] text-[#5b6478] sm:text-lg">
          Standard, 12 maanden, 1 apparaat: €58,99. Stuur ons een bericht en je bestelling staat al klaar.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen. (ref: HOME-cta)"
            context={{ page: 'home', ref: 'HOME-cta' }}
            variant="primary"
            className="min-h-[56px] w-full px-8 text-[17px] sm:w-auto"
          >
            Bestel via WhatsApp
          </WhatsAppButton>
          <a href="#prijzen" className="fx-press inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#0E1526] px-7 text-[16px] font-bold text-white sm:w-auto">
            Vergelijk de pakketten
          </a>
        </div>
        <PaymentLogos size="sm" className="relative mt-5" />
      </div>
    </Reveal>
  </section>
);
