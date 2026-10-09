import React from 'react';

export const FilmsPostersRow: React.FC = () => {
  // Positions 1 to 11 exactly as specified
  const films = [
    { src: '/images/films/poster-champions-league.webp', title: 'Champions League' },
    { src: '/images/films/poster-formule-1.webp', title: 'Formule 1' },
    { src: '/images/films/poster-loki.webp', title: 'Loki' },
    { src: '/images/films/poster-outer-banks.webp', title: 'Outer Banks' },
    { src: '/images/films/poster-paw-patrol.webp', title: 'Paw Patrol' },
    { src: '/images/films/poster-spider-man-brand-new-day.webp', title: 'Spider-Man' },
    { src: '/images/films/poster-the-mentalist.webp', title: 'The Mentalist' },
    { src: '/images/films/poster-the-odyssey.webp', title: 'The Odyssey' },
    { src: '/images/films/poster-uefa-euro.webp', title: 'UEFA Euro' },
    { src: '/images/films/poster-venom-the-last-dance.webp', title: 'Venom: The Last Dance' },
    { src: '/images/films/poster-wk-2026.webp', title: 'WK 2026' },
  ];

  return (
    <div className="w-full py-6">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory">
        {films.map((item, idx) => (
          <div
            key={idx}
            className="w-[140px] sm:w-[170px] aspect-[2/3] shrink-0 rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200 snap-center transition-transform hover:scale-105 duration-300 relative group"
          >
            <div className="absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-[#0E1526]/80 backdrop-blur-sm text-white font-bold text-xs flex items-center justify-center font-display">
              {idx + 1}
            </div>
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 mt-2 px-4">
        Afbeeldingen zijn ter illustratie; losse abonnementen op de getoonde streamingdiensten zijn niet inbegrepen.
      </p>
    </div>
  );
};
