import React from 'react';

export const PlatformsBand: React.FC = () => {
  // Netflix first as specified, then platforms
  const platforms = [
    { src: '/images/logos/plateformes/netflix-couleur.svg', alt: 'Netflix' },
    { src: '/images/plateformes/disney-plus.webp', alt: 'Disney+' },
    { src: '/images/plateformes/prime-video.webp', alt: 'Prime Video' },
    { src: '/images/plateformes/hbo-max.webp', alt: 'HBO Max' },
    { src: '/images/plateformes/apple-tv-plus.webp', alt: 'Apple TV+' },
    { src: '/images/plateformes/paramount-plus.webp', alt: 'Paramount+' },
    { src: '/images/plateformes/peacock.webp', alt: 'Peacock' },
    { src: '/images/plateformes/hulu.webp', alt: 'Hulu' },
    { src: '/images/plateformes/pluto-tv.webp', alt: 'Pluto TV' },
  ];

  const duplicated = [...platforms, ...platforms];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="text-xs font-black uppercase tracking-wider text-slate-400">
          Films, Series &amp; On-Demand Entertainment
        </span>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-10 sm:gap-14 items-center shrink-0 animate-marquee hover:[animation-play-state:paused] py-2">
          {duplicated.map((plat, idx) => (
            <div
              key={idx}
              className="h-9 sm:h-11 shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity"
            >
              <img
                src={plat.src}
                alt={plat.alt}
                loading="lazy"
                className="h-8 sm:h-10 w-auto object-contain select-none pointer-events-none"
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
