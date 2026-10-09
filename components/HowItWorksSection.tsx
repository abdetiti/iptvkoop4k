'use client';

import React from 'react';
import { Layers, MessageSquare, Tv2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { PaymentLogos } from './PaymentLogos';

export const HowItWorksSection: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik wil graag bestellen in 3 stappen. (ref: HOME-stappen)',
    { page: 'home', plan: 'general', ref: 'HOME-stappen' }
  );

  const steps = [
    {
      step: '01',
      title: 'Kies je pakket en aantal apparaten',
      description:
        'Kies tussen Standard of Premium, je gewenste looptijd (3, 6 of 12 maanden) en het aantal apparaten waarop je gelijktijdig wilt kijken.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Stuur ons een WhatsApp-bericht en betaal veilig',
      description:
        'Stuur ons een kort bericht via de knop. Je ontvangt een veilige betaallink voor iDEAL, PayPal, kaart of Apple Pay.',
      icon: MessageSquare,
    },
    {
      step: '03',
      title: 'Ontvang je gegevens en begin met kijken',
      description:
        'Na bevestiging ontvang je je inloggegevens. Wij helpen je persoonlijk stap voor stap bij de installatie op je tv of speler.',
      icon: Tv2,
    },
  ];

  return (
    <section id="hoe-het-werkt" className="py-20 sm:py-28 bg-white/[0.02] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
                <span>Eenvoudig &amp; Transparant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Zo werkt het in 3 eenvoudige stappen
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Geen ingewikkelde procedures: kies je pakket, stuur een bericht en wij helpen je verder.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#0d131a] border border-white/10 hover:border-[#00f576]/40 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00f576]/10 border border-[#00f576]/30 flex items-center justify-center text-[#00f576] group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-[11px] font-mono text-[#00f576] font-bold mt-1.5">
                        {item.step}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f576] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outline Button: Le vert plein est réservé aux boutons WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/veelgestelde-vragen/"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#00f576] border border-[#00f576]/60 hover:border-[#00f576] hover:bg-[#00f576]/10 rounded-xl transition-colors"
              >
                <span>Veelgestelde vragen bekijken</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Veilig betalen:</span>
                <PaymentLogos />
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with WhatsApp conversation */}
          <div className="lg:col-span-5">
            {/* Phone container mockup */}
            <div className="relative mx-auto max-w-[320px] rounded-[40px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600 shadow-2xl shadow-black/80">
              {/* Inner screen */}
              <div className="rounded-[32px] overflow-hidden bg-[#0b141a] text-white flex flex-col h-[520px] border border-white/10">
                {/* Phone Top Notch */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#00f576]/20 border border-[#00f576]/50 flex items-center justify-center text-xs font-bold text-[#00f576]">
                      8K
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">IPTV Koop 4K</p>
                      <p className="text-[10px] text-[#25D366] leading-tight mt-0.5">Online • Direct antwoord</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#00f576]" />
                </div>

                {/* Conversation Body */}
                <div className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px]">
                  {/* Message 1 (Customer) */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#005c4b] text-white rounded-2xl rounded-tr-none px-3.5 py-2 shadow-sm space-y-1">
                      <p className="text-[11px]">
                        Hoi IPTV Koop 4K, ik wil graag het 6 maanden abonnement voor 1 apparaat. (ref: HOME-std6)
                      </p>
                      <span className="text-[9px] text-white/60 block text-right">14:02 ✓✓</span>
                    </div>
                  </div>

                  {/* Message 2 (Support) */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-[#202c33] text-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2 shadow-sm space-y-1">
                      <p className="text-[11px]">
                        Hallo! Bedankt voor je bericht. Hier is je veilige betaallink. Na betaling sturen we je inloggegevens.
                      </p>
                      <span className="text-[9px] text-slate-400 block text-right">14:03</span>
                    </div>
                  </div>

                  {/* Message 3 (Customer) */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#005c4b] text-white rounded-2xl rounded-tr-none px-3.5 py-2 shadow-sm space-y-1">
                      <p className="text-[11px]">Betaald via iDEAL!</p>
                      <span className="text-[9px] text-white/60 block text-right">14:05 ✓✓</span>
                    </div>
                  </div>

                  {/* Message 4 (Support with credentials) */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-[#202c33] text-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2 shadow-sm space-y-1 border border-[#00f576]/30">
                      <div className="text-[10px] text-[#00f576] font-bold">✓ Account Geactiveerd</div>
                      <p className="text-[11px]">
                        Je gegevens staan klaar. Op welk apparaat wil je nu installeren? We sturen de instructies direct door!
                      </p>
                      <span className="text-[9px] text-slate-400 block text-right">14:06</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Input Bar */}
                <div className="bg-[#1f2c34] p-2.5 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs text-slate-400 pl-2">Typ een bericht...</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      handleWhatsAppClick(
                        'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-mockup)',
                        { page: 'home', plan: 'general', ref: 'HOME-mockup' },
                        e
                      )
                    }
                    className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black shadow-md hover:scale-105 transition-transform"
                    aria-label="Direct starten via WhatsApp"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* TODO: Maquette téléphone avec conversation WhatsApp selon MEDIA.md */}
              {/* Note: MEDIA.md mentions 'Maquette téléphone avec conversation WhatsApp' à créer. Ce composant stylisé sert d'aperçu haute fidélité. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
