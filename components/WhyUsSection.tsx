import React from 'react';
import { Tag, HelpCircle, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      icon: Tag,
      title: 'Duidelijke prijzen vooraf',
      description:
        'Prijzen, looptijd en apparaatkeuze zijn duidelijk voordat je bestelt. Externe appkosten staan los van het abonnement.',
    },
    {
      icon: HelpCircle,
      title: 'Installatiehulp per apparaat',
      description:
        'Of je nu een Smart TV, Firestick of TiviMate gebruikt: wij sturen stap-voor-stap handleidingen en helpen je tot het werkt.',
    },
    {
      icon: MessageCircle,
      title: 'Support via WhatsApp in het Nederlands',
      description:
        'Bij vragen over installatie, activatie of je account neem je direct contact met ons op via WhatsApp, in het Nederlands.',
    },
    {
      icon: ShieldCheck,
      title: 'Erkend reseller',
      description:
        'IPTV Koop 4K is een erkend reseller. Duidelijke informatie vooraf, zodat je weet wat je kiest.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0f16]/60 border-t border-white/5 relative overflow-hidden">
      {/* Background with bg-zendermuur.webp + dark scrim */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/fonds/bg-zendermuur.webp"
          alt="Kijkers voor een muur vol tv-zenders"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-[0.14] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080B] via-[#05080B]/90 to-[#05080B]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00f576]" />
            <span>Onze Belofte</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Waarom kiezen voor IPTV Koop 4K?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Overzicht, betrouwbaarheid en persoonlijke hulp wanneer je die nodig hebt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d131a] border border-white/10 hover:border-[#00f576]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/30"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00f576]/10 border border-[#00f576]/30 flex items-center justify-center text-[#00f576] mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00f576] transition-colors leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
