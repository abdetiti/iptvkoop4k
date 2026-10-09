'use client';

import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../images';
import { ChevronLeft, ChevronRight, Trophy, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';

export const SportSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Les 6 affiches verticales de sport-affiches/ dans l'ordre strict de MEDIAS.md
  const sportPosters = [
    {
      key: 'sport-affiches/sport-oranje.webp',
      title: 'Nederlands elftal',
    },
    {
      key: 'sport-affiches/sport-champions-league-sterren.webp',
      title: 'Champions League',
    },
    {
      key: 'sport-affiches/sport-messi-ronaldo.webp',
      title: 'Messi & Ronaldo',
    },
    {
      key: 'sport-affiches/sport-f1-coureurs.webp',
      title: 'Formule 1 coureurs',
    },
    {
      key: 'sport-affiches/sport-f1-poster.webp',
      title: 'Formule 1 Grand Prix',
    },
    {
      key: 'sport-affiches/sport-nba.webp',
      title: 'NBA',
    },
  ];

  // 2. Bandeau compétitions (sous la rangée Live sport, défilement continu) : les 9 images, Eredivisie en premier
  const competitions = [
    { key: 'sport-competitions/comp-eredivisie.webp', name: 'Eredivisie' },
    { key: 'sport-competitions/comp-champions-league.webp', name: 'UEFA Champions League' },
    { key: 'sport-competitions/comp-premier-league.webp', name: 'Premier League' },
    { key: 'sport-competitions/comp-la-liga.webp', name: 'LaLiga' },
    { key: 'sport-competitions/comp-serie-a.webp', name: 'Serie A' },
    { key: 'sport-competitions/comp-bundesliga.webp', name: 'Bundesliga' },
    { key: 'sport-competitions/comp-conference-league.webp', name: 'UEFA Conference League' },
    { key: 'sport-competitions/comp-ligue-1.webp', name: 'Ligue 1' },
    { key: 'sport-competitions/comp-formule-1.webp', name: 'Formule 1' },
  ];

  const doubleCompetitions = [...competitions, ...competitions];

  // Auto-scroll carousel posters
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const bgStadion = IMAGES['hero/hero-stadion.webp'];

  return (
    <section id="sport" className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      {/* Background with hero-stadion.webp + dark scrim (voile sombre) */}
      <div className="absolute inset-0 -z-20">
        <img
          src={bgStadion.url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-[0.6] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080B] via-[#05080B]/60 to-[#05080B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#00f576]" />
              <span>Voor de spanning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Live Sport Kijken in Haarscherpe Kwaliteit
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Van het eerste fluitsignaal tot de laatste ronde. Premier League, Eredivisie,
              Champions League, Formule 1 en meer.
            </p>
          </div>

          {/* Action controls */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/447577339206?text=Hoi%20IPTV%208K%20Nederland%2C%20zit%20mijn%20zender%20of%20competitie%20in%20jullie%20pakket%3F%20(ref%3A%20HOME-sport-zenders)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick('Hoi IPTV Koop 4K, zit mijn zender of competitie in jullie pakket? (ref: HOME-sport-zenders)', { page: 'home', plan: 'sport', ref: 'HOME-sport-zenders' }, e)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#00f576] border border-[#00f576]/70 hover:border-[#00f576] hover:bg-[#00f576]/10 rounded-xl transition-all whitespace-nowrap"
            >
              <span>Vraag naar jouw zender</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                aria-label="Vorige sport"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                aria-label="Volgende sport"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel of 6 Vertical Sport Posters with auto-scroll and hover pause */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sportPosters.map((item, idx) => {
            const imgData = IMAGES[item.key];
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-60 sm:w-72 rounded-2xl overflow-hidden bg-[#0d131a] border border-white/10 hover:border-[#00f576]/60 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,245,118,0.25)] transition-all duration-300 group snap-start relative flex flex-col shadow-xl shadow-black/60"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src={imgData?.url}
                    alt={imgData?.alt || item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-white text-base group-hover:text-[#00f576] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bandeau compétitions (défilement continu sous la rangée Live sport) */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Topcompetities inbegrepen:
          </p>
          <div className="overflow-hidden relative group py-2">
            <div className="absolute left-0 inset-y-0 w-10 sm:w-20 bg-gradient-to-r from-[#05080B] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-10 sm:w-20 bg-gradient-to-l from-[#05080B] to-transparent z-10 pointer-events-none" />

            {/* Largeurs fixes + marge à droite de chaque élément : la boucle à -50 % est exacte, sans saut */}
            <ul className="flex w-max animate-comp-marquee group-hover:[animation-play-state:paused]">
              {doubleCompetitions.map((comp, idx) => {
                const imgData = IMAGES[comp.key];
                return (
                  <li key={idx} className="shrink-0 w-[104px] sm:w-[124px] pr-3 sm:pr-4" aria-hidden={idx >= competitions.length} title={comp.name}>
                    <div className="h-[92px] sm:h-[108px] rounded-2xl bg-white ring-1 ring-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] grid place-items-center p-2 transition-transform duration-300 hover:-translate-y-1">
                      <img src={imgData.url} alt={imgData.alt} width={400} height={400} loading="eager" decoding="async" className="w-full h-full object-contain" />
                    </div>
                    <p className="mt-2 text-[10px] sm:text-[11px] text-slate-400 text-center truncate">{comp.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
