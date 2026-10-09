import React from 'react';
import { Link } from 'react-router-dom';
import { DEVICE_GUIDES } from '../data/devices';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Tv, Smartphone, Laptop, Zap, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

export const ApparatenPage: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'smart-tv': Tv,
    'android-tv': Zap,
    'firestick': Layers,
    'mag-box': ShieldCheck,
    'iphone-ipad': Smartphone,
    'windows-pc': Laptop,
  };

  const guides = Object.values(DEVICE_GUIDES);

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#2E5BFF] block mb-2">
            Ondersteunde Apparaten
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            IPTV installeren op jouw apparaat
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            IPTV Koop 4K werkt op vrijwel elk modern scherm via compatibele mediaspelers met ondersteuning voor Xtream Codes API of M3U. Kies hieronder jouw apparaat voor de volledige installatiehandleiding.
          </p>
        </div>

        {/* 6 Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.map((guide) => {
            const Icon = iconMap[guide.slug] || Tv;
            return (
              <div
                key={guide.slug}
                className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:border-[#FF5A1F] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-[#F6F5F1] px-2.5 py-1 rounded-md">
                      {guide.loginMethod}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0E1526] font-display mb-2 group-hover:text-[#FF5A1F] transition-colors">
                    {guide.shortTitle}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {guide.intro}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                    <span className="font-bold text-slate-700 block">Ondersteunde apps:</span>
                    <p>{guide.apps.join(' · ')}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/apparaten/${guide.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5A1F] group-hover:underline"
                  >
                    <span>Bekijk handleiding</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Lukt het niet op jouw apparaat?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Stuur ons je model en de naam van je speler via WhatsApp. Onze klantenservice helpt je stap voor stap.
          </p>
          <WhatsAppButton
            message="Hoi IPTV Koop 4K, ik heb hulp nodig bij de installatie op mijn apparaat. (ref: APPARATEN-hulp)"
            context={{ page: '/apparaten/', ref: 'APPARATEN-hulp' }}
            variant="primary"
          >
            Vraag installatiehulp via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
