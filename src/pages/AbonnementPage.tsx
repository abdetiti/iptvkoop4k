/**
 * Subscription Pricing Page (/iptv-abonnement/)
 * - Full pricing matrix for Standard and Premium
 * - 3, 6, 12 months
 * - 1 to 4 devices (10%, 20%, 30% discounts)
 * - 12 months shown first and highlighted
 * - Real total prices ONLY (no monthly calculation)
 * - Payment logos under every order button
 */

import React from 'react';
import { PricingStudio } from '../components/home/PricingStudio';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AbonnementPage: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
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

      </div>

      {/* Sélecteur de prix : même composant que l'accueil */}
      <PricingStudio source="abonnement" showHeading={false} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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
