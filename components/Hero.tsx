'use client';

import React from 'react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { PaymentLogos } from './PaymentLogos';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AnimatedCounter } from './AnimatedCounter';
import { CheckCircle2, ArrowRight, Sparkles, Tv, Film, MonitorPlay, Headphones, Trophy, Clapperboard, Globe2, Baby, Newspaper, Smartphone, Laptop, Tablet } from 'lucide-react';

const HERO_MESSAGE = 'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-hero)';
const HERO_PARAMS = { page: 'home', plan: 'general', ref: 'HOME-hero' };

const STATS = [
  { icon: Tv, label: 'Live kanalen', value: <AnimatedCounter end={32000} duration={2200} />, sub: 'tv-kanalen' },
  { icon: Film, label: 'Films & series', value: <AnimatedCounter end={180000} duration={2400} />, sub: 'on demand' },
  { icon: MonitorPlay, label: 'Beeldkwaliteit', value: 'Tot 4K', sub: 'waar beschikbaar', accent: true },
  { icon: Headphones, label: 'Klantenservice', value: '24/7', sub: 'hulp in het Nederlands' },
];

const CATEGORIES = [
  { icon: Tv, label: 'Live tv' },
  { icon: Trophy, label: 'Sport' },
  { icon: Clapperboard, label: 'Films & series' },
  { icon: Globe2, label: 'Internationaal' },
  { icon: Baby, label: 'Kids' },
  { icon: Newspaper, label: 'Nieuws' },
];

const SPORT_ROW = ['sport-oranje', 'sport-champions-league-sterren', 'sport-f1-poster', 'sport-messi-ronaldo', 'sport-nba'];
const FILM_ROW = ['poster-outer-banks', 'poster-venom-the-last-dance', 'poster-loki', 'poster-the-odyssey', 'poster-paw-patrol', 'poster-the-mentalist'];

/** Interface d'appli IPTV dessinée en code, dans un cadre de téléviseur. */
const TvMockup: React.FC = () => (
  <div className="relative w-full max-w-[620px] mx-auto hero-float">
    <div className="absolute -inset-x-10 -bottom-10 h-24 rounded-[50%] bg-[#2BE07A]/25 blur-3xl" />

    <div className="relative rounded-[22px] p-[10px] bg-gradient-to-b from-[#1b232c] to-[#0b1016] border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(43,224,122,0.08)]">
      <div className="relative rounded-[14px] overflow-hidden bg-[#070B10] aspect-[16/10]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,transparent_35%)] z-20" />

        <div className="absolute inset-0 flex">
          <aside className="w-[27%] border-r border-white/[0.06] bg-white/[0.02] p-[3.5%] flex flex-col gap-[6%]">
            <div className="flex items-center gap-1.5 mb-[4%]">
              <span className="grid place-items-center rounded-md bg-[#2BE07A] text-[#05080B] font-black text-[clamp(7px,1.3vw,11px)] px-1 leading-tight">8K</span>
              <span className="font-outfit font-extrabold text-white text-[clamp(8px,1.4vw,12px)] tracking-tight">IPTV</span>
            </div>
            {CATEGORIES.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 rounded-md px-[6%] py-[4%] text-[clamp(7px,1.15vw,10.5px)] font-semibold ${
                  i === 1 ? 'bg-[#2BE07A]/15 text-[#2BE07A] ring-1 ring-[#2BE07A]/30' : 'text-slate-400'
                }`}
              >
                <Icon className="w-[1.1em] h-[1.1em] shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </aside>

          <div className="flex-1 p-[3.5%] flex flex-col gap-[3%] min-w-0">
            <div className="relative rounded-lg overflow-hidden h-[27%] shrink-0 bg-gradient-to-r from-[#0f3d2a] via-[#0b2a33] to-[#0b1220]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(43,224,122,0.45),transparent_55%)]" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_2px,transparent_2px_14px)] [mask-image:linear-gradient(to_left,black,transparent)]" />
              <div className="relative h-full flex flex-col justify-end p-[4%]">
                <span className="text-[clamp(6px,0.95vw,9px)] font-bold uppercase tracking-widest text-[#2BE07A]">Live sport</span>
                <span className="font-outfit font-extrabold text-white text-[clamp(10px,2vw,18px)] leading-tight">Elk moment, op elk scherm</span>
                <div className="mt-[3%] flex gap-1.5">
                  <span className="rounded-md bg-white text-[#05080B] font-bold text-[clamp(6px,0.95vw,9px)] px-2 py-[2px]">Kijken</span>
                  <span className="rounded-md bg-white/10 text-white font-semibold text-[clamp(6px,0.95vw,9px)] px-2 py-[2px] ring-1 ring-white/15">4K</span>
                </div>
              </div>
            </div>

            <div className="min-h-0">
              <p className="text-[clamp(6px,1vw,9.5px)] font-bold text-slate-300 mb-[2%]">Sport</p>
              <div className="grid grid-cols-5 gap-[2.5%]">
                {SPORT_ROW.map((k, i) => (
                  <div key={k} className={`relative aspect-[4/5] rounded-md overflow-hidden ${i === 0 ? 'ring-2 ring-[#2BE07A] shadow-[0_0_18px_rgba(43,224,122,0.45)]' : 'ring-1 ring-white/10'}`}>
                    <img src={`/images/sport-affiches/${k}.webp`} alt="" loading="eager" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-0">
              <p className="text-[clamp(6px,1vw,9.5px)] font-bold text-slate-300 mb-[2%]">Films &amp; series</p>
              <div className="grid grid-cols-6 gap-[2.5%]">
                {FILM_ROW.map((k) => (
                  <div key={k} className="aspect-[3/4] rounded-md overflow-hidden ring-1 ring-white/10">
                    <img src={`/images/films/${k}.webp`} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto w-[28%] h-3 rounded-b-xl bg-gradient-to-b from-[#1b232c] to-[#0b1016] border-x border-b border-white/10" />

    <div className="absolute -top-4 right-4 sm:right-8 hero-chip inline-flex" style={{ animationDelay: '0.3s' }}>
      <MonitorPlay className="w-4 h-4 text-[#2BE07A]" /> Tot 4K
    </div>
    <div className="absolute -bottom-5 left-6 hero-chip hidden sm:inline-flex" style={{ animationDelay: '0.6s' }}>
      <span className="flex items-center gap-1 text-slate-300">
        <Tv className="w-3.5 h-3.5" /><Smartphone className="w-3.5 h-3.5" /><Tablet className="w-3.5 h-3.5" /><Laptop className="w-3.5 h-3.5" />
      </span>
      1–4 apparaten
    </div>

    <div className="absolute -bottom-8 -right-2 sm:right-[-28px] w-[34%] max-w-[190px] hero-float-slow">
      <div className="rounded-[20px] p-[5px] bg-[#0f151b] border border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]">
        <div className="rounded-[16px] overflow-hidden bg-[#0B141A]">
          <div className="flex items-center gap-1.5 bg-[#1F2C34] px-2 py-1.5">
            <span className="grid place-items-center w-4 h-4 rounded-full bg-[#2BE07A] text-[#05080B] text-[6px] font-black">8K</span>
            <span className="text-[clamp(6px,0.95vw,9px)] font-semibold text-white truncate">IPTV Koop 4K</span>
          </div>
          <div className="p-2 space-y-1.5 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:8px_8px]">
            <div className="ml-auto max-w-[92%] rounded-lg rounded-tr-none bg-[#005C4B] px-2 py-1.5 text-[clamp(6px,0.9vw,8.5px)] leading-snug text-white">
              Hoi IPTV Koop 4K, ik wil graag een abonnement.
            </div>
            <div className="max-w-[92%] rounded-lg rounded-tl-none bg-[#1F2C34] px-2 py-1.5 text-[clamp(6px,0.9vw,8.5px)] leading-snug text-slate-200">
              Hallo! Hier is je veilige betaallink. Na betaling sturen we je inloggegevens.
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#25D366] py-1.5 text-[clamp(6px,0.95vw,9px)] font-bold text-white">
            <WhatsAppIcon variant="white" className="w-3 h-3" /> WhatsApp
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(HERO_MESSAGE, HERO_PARAMS);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[#05080B]" />
        <div className="hero-aurora absolute -top-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[120%]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] hero-floor" />
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2BE07A]/30 to-transparent hero-beam" />
        <div className="absolute right-[14%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#18B6C9]/25 to-transparent hero-beam" style={{ animationDelay: '2.5s' }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05080B] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#2BE07A]/35 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2BE07A] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="sm:hidden">Sport &amp; entertainment</span>
              <span className="hidden sm:inline">Jouw wereld van sport &amp; entertainment</span>
            </div>

            <h1 className="font-outfit text-[2.55rem] leading-[1.02] sm:text-6xl lg:text-[4.3rem] font-extrabold tracking-tight text-white text-balance">
              IPTV Nederland — grote momenten, gewoon bij{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BE07A] via-[#5CF3A0] to-[#18B6C9]">
                jou thuis
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Van live sport tot je volgende favoriete serie. Ontdek 32.000+ live tv-kanalen en 180.000+ films en
              series, met beeldkwaliteit tot 4K en hulp in het Nederlands.
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-sm text-slate-400">Vanaf</span>
              <span className="font-outfit text-3xl font-extrabold text-white">€4,92</span>
              <span className="text-sm text-slate-400">per maand</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(HERO_MESSAGE, HERO_PARAMS, e)}
                className="wa-pulse whitespace-nowrap inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-colors rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
              >
                <WhatsAppIcon variant="white" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Bestel via WhatsApp</span>
              </a>
              <a
                href="#abonnementen"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#2BE07A] border border-[#2BE07A]/60 hover:bg-[#2BE07A]/10 hover:border-[#2BE07A] transition-colors rounded-2xl"
              >
                <span>Bekijk abonnementen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              {['Snel aan de slag', 'Hulp bij installatie', 'Werkt op al je apparaten'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2BE07A] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs text-slate-400">Veilig betalen:</span>
              <PaymentLogos />
            </div>
          </div>

          <div className="relative pb-10 lg:pb-0 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <TvMockup />
          </div>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map(({ icon: Icon, label, value, sub, accent }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl px-4 py-4 sm:px-5 sm:py-5 hover:border-[#2BE07A]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Icon className="w-4 h-4 text-[#2BE07A]" />
                <span>{label}</span>
              </div>
              <div className={`mt-1.5 font-outfit text-3xl sm:text-4xl font-extrabold tabular-nums ${accent ? 'text-[#2BE07A]' : 'text-white'}`}>
                {value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 mt-4">
          Beschikbare zenders en resolutie verschillen per abonnement, apparaat en internetverbinding.
        </p>
      </div>
    </section>
  );
};
