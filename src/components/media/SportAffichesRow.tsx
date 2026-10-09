import React from 'react';

export const SportAffichesRow: React.FC = () => {
  // Oranje first, then champions league, f1, messi-ronaldo, nba, etc.
  const affiches = [
    { src: '/images/sport-affiches/sport-oranje.webp', alt: 'Oranje Nederlands Elftal' },
    { src: '/images/sport-affiches/sport-champions-league-sterren.webp', alt: 'UEFA Champions League' },
    { src: '/images/sport-affiches/sport-f1-poster.webp', alt: 'Formule 1 Grand Prix' },
    { src: '/images/sport-affiches/sport-messi-ronaldo.webp', alt: 'Topvoetbal Internationaal' },
    { src: '/images/sport-affiches/sport-f1-coureurs.webp', alt: 'Motorsport & Coureurs' },
    { src: '/images/sport-affiches/sport-nba.webp', alt: 'NBA Basketball' },
    { src: '/images/sport-affiches/sport-f1-paysage.webp', alt: 'Race Circuit Live' },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedAffiches = [...affiches, ...affiches];

  return (
    <div className="w-full overflow-hidden py-4 group">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-hidden no-scrollbar scroll-smooth snap-x snap-mandatory py-2">
        <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedAffiches.map((affiche, idx) => (
            <div
              key={idx}
              className="w-[180px] sm:w-[220px] aspect-[2/3] shrink-0 rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/80 snap-center transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={affiche.src}
                alt={affiche.alt}
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-slate-500 mt-4 px-4">
        Afbeeldingen zijn ter illustratie; losse abonnementen op de getoonde streamingdiensten zijn niet inbegrepen.
      </p>
    </div>
  );
};
