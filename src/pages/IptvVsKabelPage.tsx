import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PaymentLogos } from '../components/PaymentLogos';
import { Check, X, ArrowRight } from 'lucide-react';

export const IptvVsKabelPage: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Vergelijking
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            IPTV vs kabel: wat past bij jou?
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Ontdek de praktische en financiële verschillen tussen een flexibel IPTV abonnement en een traditioneel kabel- of glasvezelcontract.
          </p>
        </div>

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* IPTV Koop 4K */}
          <div className="p-8 rounded-3xl bg-white border-2 border-[#FF5A1F] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-[#FFE9DF] text-[#FF5A1F] inline-block mb-3">
                IPTV Koop 4K
              </span>
              <h2 className="text-2xl font-bold text-[#0E1526] font-display mb-4">
                Televisie via internet
              </h2>

              <ul className="space-y-3.5 text-[15px] text-slate-700 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>32.000+ zenders:</strong> Inclusief Nederlandse omroepen, buitenlandse zenders en uitgebreide live sport.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>Geen provider-decoder nodig:</strong> Werkt direct in jouw favoriete mediaspeler op Smart TV, Firestick of mobiel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>Vaste tarieven:</strong> 12 maanden Standard voor €58,99 (of 3 en 6 maanden).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>Meerdere schermen:</strong> Optie voor 1 tot 4 schermen tegelijk binnen één abonnement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>Klantenservice via WhatsApp:</strong> Direct contact in het Nederlands.</span>
                </li>
              </ul>
            </div>

            <div>
              <WhatsAppButton
                message="Hoi IPTV Koop 4K, ik wil graag overstappen naar IPTV. (ref: KABEL-iptv)"
                context={{ page: '/iptv-vs-kabel/', ref: 'KABEL-iptv' }}
                variant="primary"
                fullWidth
              >
                Kies voor IPTV via WhatsApp
              </WhatsAppButton>
              <PaymentLogos size="sm" />
            </div>
          </div>

          {/* Traditionele Kabel */}
          <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-slate-200 text-slate-700 inline-block mb-3">
                Traditionele Kabel &amp; Glasvezel
              </span>
              <h2 className="text-2xl font-bold text-[#0E1526] font-display mb-4">
                Klassieke tv-aansluiting
              </h2>

              <ul className="space-y-3.5 text-[15px] text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">•</span>
                  <span><strong>Beperkt basispakket:</strong> Vaak 70 tot 80 zenders; extra pakketten (buitenlands, extra sport) kosten flink meer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">•</span>
                  <span><strong>Verplichte ontvanger:</strong> Huurkosten voor aparte tv-ontvangers per televisietoestel in huis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">•</span>
                  <span><strong>Hogere jaarkosten:</strong> Vaak gekoppeld aan verplichte internetpakketten met vaste maandelijkse kosten.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">•</span>
                  <span><strong>Beperkt kijken buitenshuis:</strong> Apps van providers werken niet altijd soepel in het buitenland.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500">
              Prijzen van kabel- en glasvezelaanbieders zijn actieprijzen voor internet + tv, gecontroleerd in oktober 2026 en kunnen wijzigen. Bronnen: Selectra en iPhoned.
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-16">
          <div className="p-6 bg-[#F6F5F1] border-b border-slate-200">
            <h3 className="text-xl font-bold text-[#0E1526] font-display">
              De verschillen in een handig overzicht
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-500">
                  <th className="p-4">Onderdeel</th>
                  <th className="p-4 text-[#FF5A1F]">IPTV Koop 4K</th>
                  <th className="p-4">Traditionele Kabel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold">Aantal zenders</td>
                  <td className="p-4 font-extrabold text-[#0E1526]">32.000+ zenders &amp; VOD</td>
                  <td className="p-4 text-slate-500">Ca. 70 - 90 zenders</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Hardware &amp; Kabels</td>
                  <td className="p-4 text-[#0E1526]">Geen aparte kabels nodig; werkt via app</td>
                  <td className="p-4 text-slate-500">Coaxkabel &amp; verplichte provider decoder</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Kijken op mobiel</td>
                  <td className="p-4 text-[#0E1526]">Direct via ondersteunde spelers</td>
                  <td className="p-4 text-slate-500">Vaak beperkt tot eigen provider netwerk</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Supportkanaal</td>
                  <td className="p-4 text-[#0E1526]">Direct via WhatsApp in het Nederlands</td>
                  <td className="p-4 text-slate-500">Telefonische wachtrijen of chatbots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
