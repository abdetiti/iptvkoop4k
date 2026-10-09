import React, { useState } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PlatformsBand } from '../components/media/PlatformsBand';
import { FilmsPostersRow } from '../components/media/FilmsPostersRow';
import { Search, Tv, Globe, Film, Trophy, Check } from 'lucide-react';

export const ZenderlijstPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Alle categorieën' },
    { id: 'nl', label: 'Nederlands', icon: Tv },
    { id: 'sport', label: 'Live Sport', icon: Trophy },
    { id: 'vod', label: 'Films & Series', icon: Film },
    { id: 'int', label: 'Internationaal', icon: Globe },
  ];

  const channelSamples = [
    { cat: 'nl', name: 'NPO 1, 2, 3 HD / 4K', desc: 'Publieke omroep met journaals en Nederlandse programma’s.' },
    { cat: 'nl', name: 'RTL 4, 5, 7, 8 HD', desc: 'Commercieel entertainment, talkshows en nieuws.' },
    { cat: 'nl', name: 'SBS6, Veronica, Net5 HD', desc: 'Nederlandse reality, actualiteiten en films.' },
    { cat: 'sport', name: 'ESPN 1 t/m 4 HD', desc: 'Eredivisie, KNVB Beker en Amerikaans sportaanbod.' },
    { cat: 'sport', name: 'Ziggo Sport & Totaal HD', desc: 'Formule 1, UEFA competities, golf en tennis.' },
    { cat: 'sport', name: 'Viaplay Sport Select', desc: 'Motorsport, Premier League en darts.' },
    { cat: 'sport', name: 'Internationale Sportkanalen', desc: 'Sky Sports, TNT Sports, beIN Sports en DAZN.' },
    { cat: 'vod', name: '180.000+ Films & Series', desc: 'Constante updates van recente bioscoopfilms en hitseries.' },
    { cat: 'int', name: 'België & VRT / VTM', desc: 'Vlaamse publieke en commerciële omroepen.' },
    { cat: 'int', name: 'Verenigd Koninkrijk & BBC', desc: 'BBC One, Two, ITV, Channel 4 en Sky zenders.' },
    { cat: 'int', name: 'Duitsland (ARD, ZDF, RTL)', desc: 'Volledig Duits zenderpakket in HD.' },
    { cat: 'int', name: 'Internationaal (FR, ES, TR, AR)', desc: 'Uitgebreid zenderaanbod uit Europa, het Midden-Oosten en Noord-Afrika.' },
  ];

  const filteredChannels = channelSamples.filter((c) => {
    const matchesCat = activeCategory === 'all' || c.cat === activeCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Zenderaanbod
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            IPTV zenderlijst — 32.000+ zenders
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Bekijk een greep uit ons zenderaanbod met Nederlandse zenders, live sport, internationale zenders en een uitgebreide bibliotheek met films en series on demand.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-[#F6F5F1] p-5 rounded-2xl border border-slate-200 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Zoek zenders of categorieën..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0E1526] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredChannels.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:border-[#FF5A1F] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
                  <h3 className="font-bold text-[16px] text-[#0E1526] font-display">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Inclusief EPG gids</span>
                <span>HD / 4K</span>
              </div>
            </div>
          ))}
        </div>

        {/* Media Band */}
        <div className="mb-12">
          <PlatformsBand />
          <FilmsPostersRow />
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Staat jouw favoriete zender of competitie ertussen?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Vraag direct via WhatsApp of jouw specifieke zender beschikbaar is in ons pakket.
          </p>
          <WhatsAppButton
            message="Hoi IPTV Koop 4K, zit mijn zender of competitie in jullie pakket? (ref: ZENDERS-vraag)"
            context={{ page: '/zenderlijst/', ref: 'ZENDERS-vraag' }}
            variant="primary"
          >
            Vraag zender via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
