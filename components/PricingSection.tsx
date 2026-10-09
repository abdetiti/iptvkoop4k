'use client';

import React, { useState } from 'react';
import { Check, Crown, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PaymentLogos } from './PaymentLogos';

import { PRICES, PREMIUM_EXTRAS, type PackageType, type DeviceCount, type Months } from '../data/prices';

const euro = (n: number) => n.toFixed(2).replace('.', ',');

export const PricingSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('Standard');
  const [selectedDevices, setSelectedDevices] = useState<DeviceCount>(1);

  const isPremium = selectedPackage === 'Premium';

  const plans = [
    // 12 maanden eerst en uitgelicht (beste prijs per maand), daarna 6 en 3
    { months: 12, label: '12 maanden', isFeatured: true, tag: 'Beste prijs' },
    { months: 6, label: '6 maanden', isFeatured: false, tag: 'Halfjaar' },
    { months: 3, label: '3 maanden', isFeatured: false, tag: 'Om te proberen' },
  ];

  return (
    <section
      id="abonnementen"
      className={`py-20 sm:py-28 relative overflow-hidden transition-colors duration-700 ${
        isPremium ? 'bg-amber-500/[0.04]' : 'bg-transparent'
      }`}
    >
      {/* Dynamic ambient glow: Golden for Premium, Green for Standard */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] blur-[160px] pointer-events-none -z-10 transition-all duration-700 ${
          isPremium ? 'bg-amber-500/15' : 'bg-emerald-500/10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with dynamic accent */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border transition-all duration-500 mb-3 ${
              isPremium
                ? 'bg-amber-500/10 border-amber-400/40 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]'
                : 'bg-emerald-500/10 border-emerald-500/30 text-[#00f576]'
            }`}
          >
            {isPremium ? (
              <>
                <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Premium abonnement</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#00f576]" />
                <span>Prijzen &amp; Abonnementen</span>
              </>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Kies het abonnement dat bij jou past
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Kies je pakket, het aantal apparaten en je looptijd. Je ziet meteen wat je betaalt.
          </p>
        </div>

        {/* Dual Selectors: Standard vs Premium + Device count */}
        <div className="flex flex-col items-center gap-5 mb-14">
          {/* 1. Standard / Premium Selector with animated atmosphere change */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0c131a] border border-white/15 shadow-xl">
            <button
              type="button"
              onClick={() => setSelectedPackage('Standard')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 ${
                !isPremium
                  ? 'bg-white/10 text-white shadow-md border border-white/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setSelectedPackage('Premium')}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 ${
                isPremium
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-[0_0_25px_rgba(251,191,36,0.45)]'
                  : 'text-amber-400/80 hover:text-amber-300'
              }`}
            >
              <Crown className={`w-4 h-4 ${isPremium ? 'fill-black' : ''}`} />
              <span>Premium</span>
            </button>
          </div>

          {/* 2. Device count selector: 1 · 2 · 3 · 4 apparaten */}
          {/* Différence Standard / Premium, visible avant de choisir */}
          <p className={`text-xs sm:text-sm text-center transition-colors ${isPremium ? 'text-amber-300' : 'text-slate-400'}`}>
            {isPremium ? (
              <>Premium: een krachtigere server dan Standard, gemaakt voor drukke live-momenten zoals sport.</>
            ) : (
              <>Kies <button type="button" onClick={() => setSelectedPackage('Premium')} className="font-semibold text-amber-300 underline underline-offset-4">Premium</button> voor een krachtigere server, gemaakt voor live sport.</>
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Aantal apparaten:</span>
            <div className="inline-flex items-center p-1 rounded-xl bg-[#0c131a] border border-white/10">
              {([1, 2, 3, 4] as DeviceCount[]).map((count) => {
                const isSelected = selectedDevices === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setSelectedDevices(count)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                      isSelected
                        ? isPremium
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/60 shadow-[0_0_10px_rgba(251,191,36,0.25)]'
                          : 'bg-[#00f576]/20 text-[#00f576] border border-[#00f576]/50'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {count} {count === 1 ? 'apparaat' : 'apparaten'}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 cartes : 12 mois (mise en avant), 6, 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const total = PRICES[selectedPackage][selectedDevices][plan.months as Months];
            const formattedTotal = total !== null ? euro(total) : null;
            const formattedMonthly = total !== null ? euro(total / plan.months) : null;
            const appLabel = `${selectedDevices} ${selectedDevices === 1 ? 'apparaat' : 'apparaten'}`;
            const refCode = `HOME-${selectedPackage.toLowerCase().slice(0, 3)}${plan.months}-${selectedDevices}app`;

            const whatsappMessage = total !== null
              ? `Hoi, ik wil graag het ${selectedPackage}-abonnement van ${plan.months} maanden voor ${appLabel}. (ref: ${refCode})`
              : `Hoi, wat kost het ${selectedPackage}-abonnement van ${plan.months} maanden voor ${appLabel}? (ref: ${refCode})`;

            const whatsappUrl = getWhatsAppLink(whatsappMessage, {
              page: 'home',
              plan: `${selectedPackage}-${plan.months}m-${selectedDevices}app`,
              ref: refCode,
            });

            return (
              <div
                key={plan.months}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-500 hover:scale-[1.02] ${
                  plan.isFeatured
                    ? isPremium
                      ? 'bg-gradient-to-b from-[#1a1711] via-[#12110c] to-[#0c0d0c] border-2 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.3)] md:-translate-y-2'
                      : 'bg-gradient-to-b from-[#0f1d24] to-[#0b131a] border-2 border-[#00f576] shadow-[0_0_35px_rgba(0,245,118,0.25)] md:-translate-y-2'
                    : isPremium
                    ? 'bg-[#10110e] border border-amber-400/20 hover:border-amber-400/50'
                    : 'bg-[#0d131a] border border-white/10 hover:border-[#00f576]/40'
                }`}
              >
                {/* Highlight Badge */}
                {plan.isFeatured ? (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 ${
                      isPremium
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.6)]'
                        : 'bg-[#00f576] text-black shadow-[0_0_15px_rgba(0,245,118,0.5)]'
                    }`}
                  >
                    {isPremium && <Crown className="w-3 h-3 fill-black" />}
                    <span>{plan.tag}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {plan.tag}
                    </span>
                    {isPremium && (<span className="text-[10px] font-bold text-amber-300 uppercase px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">Premium</span>)}
                  </div>
                )}

                <div>
                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-white mt-1">
                    {plan.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedPackage} · {selectedDevices} {selectedDevices === 1 ? 'apparaat' : 'apparaten'}
                  </p>

                  {/* Total price & animated monthly */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    {formattedTotal !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-300">€</span>
                      <span
                        key={`${selectedPackage}-${selectedDevices}-${plan.months}`}
                        className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums font-outfit animate-fade-in-up"
                      >
                        {formattedTotal}
                      </span>
                      <span className="text-sm text-slate-400 ml-1">totaal</span>
                    </div>
                    ) : (
                    <div key={`${selectedPackage}-${selectedDevices}-${plan.months}`} className="text-2xl sm:text-3xl font-black text-white font-outfit animate-fade-in-up">
                      Prijs op aanvraag
                    </div>
                    )}

                    <div
                      className={`text-xs sm:text-sm font-semibold mt-1.5 flex items-center gap-1.5 transition-colors duration-300 ${
                        isPremium ? 'text-amber-300' : 'text-[#00f576]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{formattedMonthly !== null ? `gemiddeld €${formattedMonthly} per maand` : 'Vraag de prijs via WhatsApp'}</span>
                    </div>
                  </div>

                  {/* Features list strictly from contenu-site.md */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Jouw mix van live tv, sport en verhalen</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>De {selectedPackage}-selectie</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Kijkplezier voor {plan.months} maanden</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Beeldkwaliteit van SD tot 4K</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Afgestemd op {appLabel}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Installatiehulp in het Nederlands via WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPremium ? 'text-amber-300' : 'text-[#00f576]'
                        }`}
                      />
                      <span>Snel aan de slag</span>
                    </li>
                  </ul>

                  {isPremium && PREMIUM_EXTRAS.length > 0 && (
                    <ul className="mb-6 p-3 rounded-xl bg-amber-400/[0.08] border border-amber-400/30 text-xs text-amber-200 space-y-1.5">
                      {PREMIUM_EXTRAS.map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <Crown className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* WhatsApp Button: ALWAYS SOLID GREEN (Reserved exclusively for WhatsApp) */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      handleWhatsAppClick(
                        whatsappMessage,
                        {
                          page: 'home',
                          plan: `${selectedPackage}-${plan.months}m-${selectedDevices}app`,
                          ref: refCode,
                        },
                        e
                      )
                    }
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
                  >
                    <WhatsAppIcon variant="white" className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>Bestel via WhatsApp</span>
                  </a>
                  <div className="mt-3 flex justify-center">
                    <PaymentLogos />
                  </div>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Direct contact met onze Nederlandse support
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outline link button under pricing */}
        <div className="mt-12 text-center">
          <a
            href="/hoe-bestellen/"
            className={`inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 ${
              isPremium
                ? 'border-amber-400/60 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400'
                : 'border-[#00f576]/60 text-[#00f576] hover:bg-[#00f576]/10 hover:border-[#00f576]'
            }`}
          >
            <span>Hoe werkt het bestelproces? Bekijk de 3 eenvoudige stappen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
