/**
 * Subscription Pricing Page (/iptv-abonnement/)
 * - Full pricing matrix for Standard and Premium
 * - 3, 6, 12 months
 * - 1 to 4 devices (10%, 20%, 30% discounts)
 * - 12 months shown first and highlighted
 * - Real total prices ONLY (no monthly calculation)
 * - Payment logos under every order button
 */

import React, { useState } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PaymentLogos } from '../components/PaymentLogos';
import {
  calculatePrice,
  formatPrice,
  DEVICE_DISCOUNT_PERCENTAGES,
} from '../data/prices';
import { buildOrderMessage } from '../utils/whatsapp';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AbonnementPage: React.FC = () => {
  const [tier, setTier] = useState<'Standard' | 'Premium'>('Standard');
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Abonnementen &amp; Prijzen
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            Kies jouw IPTV abonnement
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Duidelijke vaste tarieven voor de volledige periode. Kies het gewenste aantal apparaten en bestel direct via WhatsApp.
          </p>
        </div>

        {/* Server Tier Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#F6F5F1] p-4 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold uppercase text-slate-500">Pakketkeuze:</span>
            <div className="p-1 bg-white rounded-xl border border-slate-200 flex">
              <button
                type="button"
                onClick={() => setTier('Standard')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  tier === 'Standard'
                    ? 'bg-[#0E1526] text-white shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setTier('Premium')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 ${
                  tier === 'Premium'
                    ? 'bg-[#FF5A1F] text-white shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                <span>Premium</span>
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-600">
            {tier === 'Premium' ? (
              <span><strong>Premium:</strong> Een krachtigere server dan Standard.</span>
            ) : (
              <span><strong>Standard:</strong> Toegang tot Nederlandse en internationale zenders en video on demand.</span>
            )}
          </div>
        </div>

        {/* Device Selector */}
        <div className="mb-12 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-600">
              Kies het aantal schermen:
            </span>
            <span className="text-xs font-bold text-[#2E5BFF]">
              {devices === 1 ? '1 apparaat (basistarief)' : `${devices} apparaten (${DEVICE_DISCOUNT_PERCENTAGES[devices]}% korting)`}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {([1, 2, 3, 4] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDevices(d)}
                className={`p-4 rounded-xl font-bold text-sm transition-all flex flex-col items-center justify-center border ${
                  devices === d
                    ? 'bg-[#0E1526] text-white border-[#0E1526] shadow-sm'
                    : 'bg-[#F6F5F1] text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="text-base">{d} {d === 1 ? 'apparaat' : 'apparaten'}</span>
                <span className={`text-[11px] font-medium mt-0.5 ${devices === d ? 'text-slate-300' : 'text-slate-500'}`}>
                  {d === 1 ? 'Standaard' : `${DEVICE_DISCOUNT_PERCENTAGES[d]}% korting`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Cards (12 Months First & Highlighted) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* 12 Months Plan */}
          <div className="bg-white rounded-3xl border-2 border-[#FF5A1F] p-8 flex flex-col justify-between relative shadow-xl shadow-[#FF5A1F]/10 order-1">
            <div className="absolute -top-3.5 left-7 bg-[#FF5A1F] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 12 Maanden Voordeel
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <h3 className="text-2xl font-bold text-[#0E1526] font-display">12 Maanden</h3>
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#FFE9DF] text-[#FF5A1F]">
                  Voordeeltarief
                </span>
              </div>

              <div className="bg-[#F6F5F1] p-5 rounded-2xl border border-slate-200 mb-6">
                <div className="text-xs text-slate-500 mb-1">Vast totaalbedrag voor 12 maanden:</div>
                <div className="text-4xl sm:text-5xl font-black text-[#0E1526] font-display">
                  {formatPrice(calculatePrice(tier, devices, 12))}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Voor {devices} {devices === 1 ? 'apparaat' : 'apparaten'}
                </div>
              </div>

              <ul className="space-y-3 text-[15px] text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF5A1F] stroke-[3]" />
                  <span>{devices} {devices === 1 ? 'actief apparaat' : 'actieve apparaten'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF5A1F] stroke-[3]" />
                  <span>32.000+ zenders &amp; VOD</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF5A1F] stroke-[3]" />
                  <span>HD en 4K beeldkwaliteit waar beschikbaar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF5A1F] stroke-[3]" />
                  <span>Nederlandstalige support via WhatsApp</span>
                </li>
              </ul>
            </div>

            <div>
              <WhatsAppButton
                message={buildOrderMessage(tier, 12, devices, `ABO-12m-${tier.toLowerCase()}`)}
                context={{ page: '/iptv-abonnement/', plan: `${tier}-12m`, ref: `ABO-12m-${tier.toLowerCase()}` }}
                variant="primary"
                fullWidth
              >
                Bestel 12 maanden – {formatPrice(calculatePrice(tier, devices, 12))}
              </WhatsAppButton>
              <PaymentLogos size="sm" />
            </div>
          </div>

          {/* 6 Months Plan */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm order-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#0E1526] font-display">6 Maanden</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Halfjaar
                </span>
              </div>

              <div className="bg-[#F6F5F1] p-5 rounded-2xl border border-slate-200 mb-6">
                <div className="text-xs text-slate-500 mb-1">Vast totaalbedrag voor 6 maanden:</div>
                <div className="text-4xl font-black text-[#0E1526] font-display">
                  {formatPrice(calculatePrice(tier, devices, 6))}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Voor {devices} {devices === 1 ? 'apparaat' : 'apparaten'}
                </div>
              </div>

              <ul className="space-y-3 text-[15px] text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>{devices} {devices === 1 ? 'apparaat' : 'apparaten'} actief</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>32.000+ zenders &amp; VOD</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>HD en 4K kwaliteit waar beschikbaar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>WhatsApp activatiehulp</span>
                </li>
              </ul>
            </div>

            <div>
              <WhatsAppButton
                message={buildOrderMessage(tier, 6, devices, `ABO-6m-${tier.toLowerCase()}`)}
                context={{ page: '/iptv-abonnement/', plan: `${tier}-6m`, ref: `ABO-6m-${tier.toLowerCase()}` }}
                variant="compact"
                fullWidth
              >
                Bestel 6 maanden – {formatPrice(calculatePrice(tier, devices, 6))}
              </WhatsAppButton>
              <PaymentLogos size="sm" />
            </div>
          </div>

          {/* 3 Months Plan */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm order-3">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#0E1526] font-display">3 Maanden</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Kwartaal
                </span>
              </div>

              <div className="bg-[#F6F5F1] p-5 rounded-2xl border border-slate-200 mb-6">
                <div className="text-xs text-slate-500 mb-1">Vast totaalbedrag voor 3 maanden:</div>
                <div className="text-4xl font-black text-[#0E1526] font-display">
                  {formatPrice(calculatePrice(tier, devices, 3))}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Voor {devices} {devices === 1 ? 'apparaat' : 'apparaten'}
                </div>
              </div>

              <ul className="space-y-3 text-[15px] text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>{devices} {devices === 1 ? 'apparaat' : 'apparaten'} actief</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>32.000+ zenders &amp; VOD</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>HD en 4K kwaliteit</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-slate-600 stroke-[3]" />
                  <span>WhatsApp helpdesk</span>
                </li>
              </ul>
            </div>

            <div>
              <WhatsAppButton
                message={buildOrderMessage(tier, 3, devices, `ABO-3m-${tier.toLowerCase()}`)}
                context={{ page: '/iptv-abonnement/', plan: `${tier}-3m`, ref: `ABO-3m-${tier.toLowerCase()}` }}
                variant="compact"
                fullWidth
              >
                Bestel 3 maanden – {formatPrice(calculatePrice(tier, devices, 3))}
              </WhatsAppButton>
              <PaymentLogos size="sm" />
            </div>
          </div>
        </div>

        {/* Ordering Notice */}
        <div className="p-6 rounded-2xl bg-[#F6F5F1] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#2E5BFF] shrink-0" />
            <span className="text-[15px] text-slate-700">
              Vragen over welk pakket het beste bij jouw situatie past?
            </span>
          </div>
          <Link
            to="/contact/"
            className="text-sm font-bold text-[#FF5A1F] hover:underline"
          >
            Neem contact op via onze WhatsApp adviseur &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
