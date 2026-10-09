'use client';

import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear only after scrolling past the hero section (~550px)
      setShowBar(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-mobile-sticky)',
    { page: 'home', plan: 'general', ref: 'HOME-mobile-sticky' }
  );

  if (!showBar) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            handleWhatsAppClick(
              'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-mobile-sticky)',
              { page: 'home', plan: 'general', ref: 'HOME-mobile-sticky' },
              e
            )
          }
          className="flex items-center justify-center gap-2.5 w-full py-3 px-5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all duration-200 rounded-2xl shadow-[0_4px_25px_rgba(37,211,102,0.5)] border border-white/20"
          aria-label="Bestel direct via WhatsApp"
        >
          <WhatsAppIcon variant="white" className="w-5 h-5" />
          <span>Bestel via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
