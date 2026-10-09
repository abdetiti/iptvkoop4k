'use client';

import React from 'react';
import { Tv, Monitor, Smartphone, Laptop, Box, Flame, HelpCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';

export const DevicesSection: React.FC = () => {
  const devices = [
    {
      title: 'Smart TV',
      subtitle: 'Samsung & LG webOS',
      description: 'IPTV Smarters, IBO Player of Smart IPTV via de tv app store.',
      icon: Tv,
      ref: 'smart-tv',
    },
    {
      title: 'Android TV',
      subtitle: 'Google TV & Nvidia Shield',
      description: 'TiviMate, IPTV Smarters Pro of OTT Navigator met Xtream Codes.',
      icon: Monitor,
      ref: 'android-tv',
    },
    {
      title: 'Amazon Fire TV',
      subtitle: 'Firestick 4K & Max',
      description: 'Installeren via de Amazon Appstore of Downloader.',
      icon: Flame,
      ref: 'firestick',
    },
    {
      title: 'MAG Box',
      subtitle: 'MAG 254 / 322 / 421 / 524',
      description: 'Direct koppelen via Stalker portal URL en jouw MAC-adres.',
      icon: Box,
      ref: 'mag-box',
    },
    {
      title: 'iPhone & iPad',
      subtitle: 'iOS & iPadOS',
      description: 'Smarters Player Lite of GSE Smart IPTV direct via de App Store.',
      icon: Smartphone,
      ref: 'iphone-ipad',
    },
    {
      title: 'Windows PC & Mac',
      subtitle: 'Laptop & Desktop',
      description: 'Kodi, VLC media player of desktop IPTV app voor Windows & macOS.',
      icon: Laptop,
      ref: 'windows-pc',
    },
  ];

  const helpUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik heb hulp nodig bij de installatie op mijn apparaat. (ref: HOME-apparaten)',
    { page: 'home', plan: 'support', ref: 'HOME-apparaten' }
  );

  return (
    <section id="apparaten" className="py-16 sm:py-24 bg-white/[0.02] border-t border-white/5 relative overflow-hidden">
      {/* Background with bg-smart-tv.webp + dark scrim */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/fonds/bg-smart-tv.webp"
          alt="Smart TV met streaming-apps in de woonkamer"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-[0.14] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080B] via-[#05080B]/90 to-[#05080B]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
            <Monitor className="w-3.5 h-3.5 text-[#00f576]" />
            <span>Jij kiest het scherm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Wij helpen je op weg op elk apparaat
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Installeer een geschikte IPTV-speler, vul je gegevens in en begin met kijken.
            Lukt het niet? We helpen je stap voor stap via WhatsApp.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d131a] border border-white/10 hover:border-[#00f576]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/30"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00f576]/10 border border-[#00f576]/30 flex items-center justify-center text-[#00f576] mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="text-xs font-semibold text-[#00f576]/90 uppercase tracking-wider">
                    {device.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-[#00f576] transition-colors">
                    {device.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {device.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a href={`/apparaten/${device.ref}/`} className="text-xs font-semibold text-[#2BE07A] underline underline-offset-4 hover:text-white">Bekijk handleiding</a>
                  <a
                    href={helpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      handleWhatsAppClick(
                        `Hoi IPTV Koop 4K, ik wil hulp bij installatie op ${device.title}. (ref: HOME-app-${device.ref})`,
                        { page: 'home', plan: 'support', ref: `HOME-app-${device.ref}` },
                        e
                      )
                    }
                    className="text-xs font-semibold text-[#00f576] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Vraag hulp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00f576]/10 flex items-center justify-center text-[#00f576] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Weet je niet zeker welke IPTV-app geschikt is voor jouw televisie?
              </p>
              <p className="text-xs text-slate-400">
                Stuur ons het merk of model van je tv via WhatsApp en we sturen direct de juiste instructies.
              </p>
            </div>
          </div>
          <a
            href={helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleWhatsAppClick(
                'Hoi IPTV Koop 4K, ik wil advies over mijn tv model. (ref: HOME-tv-advies)',
                { page: 'home', plan: 'support', ref: 'HOME-tv-advies' },
                e
              )
            }
            className="px-4 py-2 text-xs font-semibold text-[#00f576] border border-[#00f576]/60 hover:border-[#00f576] hover:bg-[#00f576]/10 rounded-lg transition-colors whitespace-nowrap"
          >
            Stel je vraag via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
