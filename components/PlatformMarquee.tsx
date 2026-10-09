import React from 'react';

// Bandeau des plateformes : tuiles de même taille qui défilent en continu.
// Logos officiels (Netflix en premier) puis images de plateformes du pack.
const PLATFORMS: { name: string; src: string; logo?: boolean }[] = [
  { name: 'Netflix', src: '/images/logos/plateformes/netflix-couleur.svg', logo: true },
  { name: 'HBO Max', src: '/images/plateformes/hbo-max.webp' },
  { name: 'Disney+', src: '/images/plateformes/disney-plus.webp' },
  { name: 'Prime Video', src: '/images/plateformes/prime-video.webp' },
  { name: 'Apple TV+', src: '/images/plateformes/apple-tv-plus.webp' },
  { name: 'Paramount+', src: '/images/plateformes/paramount-plus.webp' },
  { name: 'Peacock', src: '/images/plateformes/peacock.webp' },
  { name: 'Hulu', src: '/images/plateformes/hulu.webp' },
  { name: 'Pluto TV', src: '/images/plateformes/pluto-tv.webp' },
  { name: 'truTV', src: '/images/plateformes/trutv.webp' },
];

export const PlatformMarquee: React.FC = () => {
  const loop = [...PLATFORMS, ...PLATFORMS];
  return (
    <section id="films" aria-label="Streamingdiensten" className="relative py-10 sm:py-14 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#2BE07A]">Films, series &amp; meer</p>
          <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-1">Bekende namen, nieuwe verhalen</h2>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#05080B] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#05080B] to-transparent z-10" />
        <ul className="flex w-max animate-infinite-marquee group-hover:[animation-play-state:paused] [will-change:transform]">
          {loop.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              aria-hidden={i >= PLATFORMS.length}
              className="w-40 h-24 sm:w-52 sm:h-28 mr-4 sm:mr-5 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0B1117] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#2BE07A]/40"
            >
              {p.logo ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <img src={p.src} alt={p.name} loading="eager" className="h-12 sm:h-14 w-auto" />
                </div>
              ) : (
                <img src={p.src} alt={p.name} loading="eager" className="w-full h-full object-cover" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 text-[11px] text-slate-500">
        Afbeeldingen zijn ter illustratie; losse abonnementen op de getoonde streamingdiensten zijn niet inbegrepen.
      </p>
    </section>
  );
};
