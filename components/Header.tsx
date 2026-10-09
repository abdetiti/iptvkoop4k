'use client';

import React, { useState, useEffect } from 'react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappHeroUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-nav)',
    { page: 'home', plan: 'general', ref: 'HOME-nav' }
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05080B]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#05080B]/40 backdrop-blur-md border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with the new SVG logo */}
          <a
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            <img
              src="/logo.svg"
              alt="IPTV Koop 4K logo"
              className="h-[32px] md:h-[40px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                // Fallback to text if file is pending
                const target = e.currentTarget;
                target.style.display = 'none';
                const fb = target.nextElementSibling as HTMLElement;
                if (fb) fb.style.display = 'flex';
              }}
            />
            {/* Fallback branded text */}
            <div className="hidden items-center gap-1.5 font-black text-xl tracking-tight text-white">
              <span>IPTV</span>
              <span className="text-[#00f576]">8K</span>
              <span className="text-slate-400 text-xs font-semibold tracking-wider">NEDERLAND</span>
            </div>
          </a>

          {/* Mobile : prix toujours visible au centre de la barre */}
          <a
            href="/iptv-abonnement/"
            className="lg:hidden mx-2 max-[389px]:mx-1 max-[389px]:px-2.5 inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#2BE07A]/35 bg-[#2BE07A]/[0.08] px-3 py-1.5 text-[11px] font-semibold text-slate-300 whitespace-nowrap"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2BE07A] opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2BE07A]" />
            </span>
            <span className="max-[389px]:hidden">Vanaf</span> <span className="font-outfit text-[13px] font-extrabold text-white">€4,92</span>/mnd
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300 whitespace-nowrap">
            <a
              href="/iptv-abonnement/"
              className="hover:text-[#00f576] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
            >
              Abonnementen
            </a>
            <a
              href="/zenderlijst/"
              className="hover:text-[#00f576] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
            >
              Zenderlijst
            </a>
            <a
              href="/apparaten/"
              className="hover:text-[#00f576] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
            >
              Apparaten
            </a>
            <a
              href="/hoe-bestellen/"
              className="hover:text-[#00f576] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
            >
              Hoe bestellen
            </a>
            <a
              href="/veelgestelde-vragen/"
              className="hover:text-[#00f576] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
            >
              FAQ
            </a>
          </nav>

          {/* WhatsApp Primary CTA button with OFFICIAL WhatsApp SVG logo */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleWhatsAppClick(
                  'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-nav)',
                  { page: 'home', plan: 'general', ref: 'HOME-nav' },
                  e
                )
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all duration-200 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
            >
              <WhatsAppIcon variant="white" className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Bestel via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleWhatsAppClick(
                  'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-nav-mobile-icon)',
                  { page: 'home', plan: 'general', ref: 'HOME-nav-mobile-icon' },
                  e
                )
              }
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-md shadow-[#25D366]/30"
              aria-label="Bestel via WhatsApp"
            >
              <WhatsAppIcon variant="white" className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu openen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f16] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-3 text-base font-semibold text-slate-200 pt-2">
            <a
              href="/iptv-abonnement/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Abonnementen
            </a>
            <a
              href="/zenderlijst/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Zenderlijst
            </a>
            <a
              href="/iptv-vs-kabel/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              IPTV vs kabel
            </a>
            <a
              href="/apparaten/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Apparaten
            </a>
            <a
              href="/hoe-bestellen/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Hoe bestellen
            </a>
            <a
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Contact
            </a>
            <a
              href="/veelgestelde-vragen/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#00f576] transition-colors"
            >
              Veelgestelde vragen
            </a>

            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick(
                    'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-nav-mobile)',
                    { page: 'home', plan: 'general', ref: 'HOME-nav-mobile' },
                    e
                  );
                }}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              >
                <WhatsAppIcon variant="white" className="w-5 h-5" />
                <span>Bestel via WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
