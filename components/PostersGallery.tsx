'use client';

import React, { useRef, useEffect, useState } from 'react';
import { IMAGES } from '../images';
import { ChevronLeft, ChevronRight, Clapperboard } from 'lucide-react';

export const PostersGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Les 11 affiches de films/ dans l'ordre strict 1 à 11 de MEDIAS.md
  const posters = [
    { key: 'films/poster-outer-banks.webp', title: 'Outer Banks' },
    { key: 'films/poster-venom-the-last-dance.webp', title: 'Venom: The Last Dance' },
    { key: 'films/poster-spider-man-brand-new-day.webp', title: 'Spider-Man: Brand New Day' },
    { key: 'films/poster-the-odyssey.webp', title: 'The Odyssey' },
    { key: 'films/poster-the-mentalist.webp', title: 'The Mentalist' },
    { key: 'films/poster-paw-patrol.webp', title: 'PAW Patrol' },
    { key: 'films/poster-loki.webp', title: 'Loki' },
    { key: 'films/poster-champions-league.webp', title: 'UEFA Champions League' },
    { key: 'films/poster-wk-2026.webp', title: 'FIFA World Cup 2026' },
    { key: 'films/poster-uefa-euro.webp', title: 'UEFA EURO' },
    { key: 'films/poster-formule-1.webp', title: 'Formule 1' },
  ];

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const bgBioscoop = IMAGES['fonds/bg-bioscoop.webp'];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-transparent">
      {/* Background with bg-bioscoop.webp + dark scrim (voile très sombre) */}
      <div className="absolute inset-0 -z-20">
        <img
          src={bgBioscoop.url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080B] via-[#05080B]/65 to-[#05080B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-1.5">
              <Clapperboard className="w-3.5 h-3.5 text-[#00f576]" />
              <span>Een verhaal voor jou</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Populaire Titels &amp; Highlights
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
              aria-label="Vorige affiche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
              aria-label="Volgende affiche"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Posters with auto-scroll and hover pause */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posters.map((item, idx) => {
            const imgData = IMAGES[item.key];
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-44 sm:w-52 group snap-start flex flex-col"
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-[#0d131a] border border-white/10 group-hover:border-[#00f576]/70 group-hover:scale-[1.04] group-hover:shadow-[0_0_25px_rgba(0,245,118,0.3)] transition-all duration-300 shadow-xl shadow-black/50">
                  <img
                    src={imgData.url}
                    alt={imgData.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Titre sous chaque affiche (pas de genres inventés) */}
                <div className="mt-3 px-1 text-center sm:text-left">
                  <h3 className="font-bold text-white text-sm truncate group-hover:text-[#00f576] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
