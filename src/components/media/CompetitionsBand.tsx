import React from 'react';

export const CompetitionsBand: React.FC = () => {
  // Eredivisie first as requested
  const competitions = [
    { src: '/images/sport-competitions/comp-eredivisie.webp', alt: 'Eredivisie' },
    { src: '/images/sport-competitions/comp-champions-league.webp', alt: 'UEFA Champions League' },
    { src: '/images/sport-competitions/comp-conference-league.webp', alt: 'UEFA Conference League' },
    { src: '/images/sport-competitions/comp-formule-1.webp', alt: 'Formula 1' },
    { src: '/images/sport-competitions/comp-premier-league.webp', alt: 'Premier League' },
    { src: '/images/sport-competitions/comp-la-liga.webp', alt: 'La Liga' },
    { src: '/images/sport-competitions/comp-serie-a.webp', alt: 'Serie A' },
    { src: '/images/sport-competitions/comp-bundesliga.webp', alt: 'Bundesliga' },
    { src: '/images/sport-competitions/comp-ligue-1.webp', alt: 'Ligue 1' },
  ];

  const duplicated = [...competitions, ...competitions, ...competitions];

  return (
    <div className="w-full overflow-hidden py-6 bg-[#F6F5F1] border-y border-slate-200">
      <div className="flex gap-8 sm:gap-12 shrink-0 animate-marquee hover:[animation-play-state:paused] items-center">
        {duplicated.map((comp, idx) => (
          <div
            key={idx}
            className="h-12 sm:h-14 shrink-0 flex items-center justify-center transition-transform duration-500 hover:scale-110"
          >
            <img
              src={comp.src}
              alt={comp.alt}
              loading="lazy"
              className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
