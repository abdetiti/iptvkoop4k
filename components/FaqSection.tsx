'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FAQ_ITEMS } from '../data/faq';


export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const whatsappFaqUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik heb een vraag die niet in de FAQ staat. (ref: HOME-faq)',
    { page: 'home', plan: 'faq', ref: 'HOME-faq' }
  );

  return (
    <section id="faq" className="py-20 sm:py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#00f576]" />
            <span>Veelgestelde vragen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Antwoorden op al je vragen
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Duidelijkheid over bestellen, activatie, apparaten en de zenders.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d131a] border border-white/10 hover:border-[#00f576]/30 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#00f576] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00f576]/15' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 border-t border-white/5 leading-relaxed animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box at bottom of FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0d131a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-white">
              Staat je vraag er niet bij?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Geen probleem! Ons team beantwoordt al je vragen direct persoonlijk via WhatsApp.
            </p>
          </div>

          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleWhatsAppClick(
                'Hoi IPTV Koop 4K, ik heb een vraag die niet in de FAQ staat. (ref: HOME-faq)',
                { page: 'home', plan: 'faq', ref: 'HOME-faq' },
                e
              )
            }
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.35)] whitespace-nowrap active:scale-95 transition-all"
          >
            <WhatsAppIcon variant="white" className="w-4 h-4" />
            <span>Vraag via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
