'use client';

import React from 'react';
import { PaymentLogos } from './PaymentLogos';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ShieldCheck } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik heb een vraag over een abonnement. (ref: FOOTER)',
    { page: 'home', plan: 'general', ref: 'FOOTER' }
  );

  return (
    <footer className="bg-[#040608] border-t border-white/10 text-slate-400 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-block group">
              <img
                src="/logo.svg"
                alt="IPTV Koop 4K logo"
                className="h-[32px] md:h-[40px] w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </a>
            <p className="text-slate-300 max-w-sm leading-relaxed text-xs sm:text-sm">
              Van een spannende wedstrijd tot een avond vol films en series. Ontdek IPTV Koop 4K en kies het abonnement dat past bij jouw manier van kijken.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#00f576]" />
              <span>Erkend reseller</span>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 font-semibold mb-2">Ondersteunde betaalmethoden:</p>
              <PaymentLogos />
            </div>
          </div>

          {/* Column 2: Navigatie */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigatie
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="/iptv-abonnement/" className="hover:text-[#00f576] transition-colors">
                  Abonnementen
                </a>
              </li>
              <li>
                <a href="/zenderlijst/" className="hover:text-[#00f576] transition-colors">
                  Live Sport &amp; Zenderlijst
                </a>
              </li>
              <li>
                <a href="/iptv-vs-kabel/" className="hover:text-[#00f576] transition-colors">
                  IPTV vs kabel
                </a>
              </li>
              <li>
                <a href="/apparaten/" className="hover:text-[#00f576] transition-colors">
                  Apparaten &amp; Installatie
                </a>
              </li>
              <li>
                <a href="/hoe-bestellen/" className="hover:text-[#00f576] transition-colors">
                  Hoe bestellen
                </a>
              </li>
              <li>
                <a href="/over-ons/" className="hover:text-[#00f576] transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="/veelgestelde-vragen/" className="hover:text-[#00f576] transition-colors">
                  Veelgestelde vragen
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Apparaten */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Ondersteunde Spelers
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="/apparaten/smart-tv/" className="hover:text-[#00f576] transition-colors">
                  Samsung &amp; LG Smart TV
                </a>
              </li>
              <li>
                <a href="/apparaten/android-tv/" className="hover:text-[#00f576] transition-colors">
                  Android TV &amp; Google TV
                </a>
              </li>
              <li>
                <a href="/apparaten/firestick/" className="hover:text-[#00f576] transition-colors">
                  Amazon Fire TV Stick
                </a>
              </li>
              <li>
                <a href="/apparaten/mag-box/" className="hover:text-[#00f576] transition-colors">
                  MAG Box Stalker Portal
                </a>
              </li>
              <li>
                <a href="/apparaten/iphone-ipad/" className="hover:text-[#00f576] transition-colors">
                  Apple iPhone &amp; iPad
                </a>
              </li>
              <li>
                <a href="/apparaten/windows-pc/" className="hover:text-[#00f576] transition-colors">
                  Windows PC &amp; macOS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Klantenservice (NEVER show phone number, ONLY wa.me button!) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Klantenservice
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Heb je hulp nodig bij je bestelling of installatie? Neem direct contact op:
            </p>

            {/* Direct WhatsApp button without printing the phone number */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleWhatsAppClick(
                  'Hoi IPTV Koop 4K, ik heb een vraag over een abonnement. (ref: FOOTER)',
                  { page: 'home', plan: 'footer', ref: 'FOOTER' },
                  e
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs shadow-md shadow-[#25D366]/20 transition-all active:scale-95 group"
            >
              <WhatsAppIcon className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" />
              <span>Chat direct via WhatsApp</span>
            </a>

            <div className="pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
              <p>24/7 hulp in het Nederlands</p>
              <p>Snel aan de slag</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} IPTV Koop 4K. Alle rechten voorbehouden.</p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="/privacybeleid/" className="hover:text-[#00f576] transition-colors">
              Privacybeleid
            </a>
            <span>·</span>
            <a href="/cookiebeleid/" className="hover:text-[#00f576] transition-colors">
              Cookiebeleid
            </a>
            <span>·</span>
            <a href="/algemene-voorwaarden/" className="hover:text-[#00f576] transition-colors">
              Algemene voorwaarden
            </a>
            <span>·</span>
            <a href="/retourbeleid/" className="hover:text-[#00f576] transition-colors">
              Retourbeleid
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
