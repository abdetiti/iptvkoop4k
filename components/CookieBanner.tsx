'use client';

import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try { consent = localStorage.getItem('koop4k_cookie_consent'); } catch {}
    if (!consent) {
      // Delay showing banner slightly for clean initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    try { localStorage.setItem('koop4k_cookie_consent', 'accepted'); } catch {}
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
    setIsVisible(false);
  };

  const acceptEssential = () => {
    try { localStorage.setItem('koop4k_cookie_consent', 'essential'); } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 md:bottom-5 left-3 right-3 md:left-auto md:right-5 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0c131a]/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/80 text-white text-xs space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm text-[#00f576]">
          <Shield className="w-4 h-4" />
          <span>Privacy &amp; Cookievoorkeuren</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-xs">
          Wij gebruiken cookies om de website te analyseren en onze advertenties te meten. Je kiest zelf of je dit toestaat. Lees meer in ons <a href="/cookiebeleid/" className="underline hover:text-white">cookiebeleid</a>.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 py-2 px-3 text-center font-bold text-black bg-[#00f576] hover:bg-[#00d667] rounded-lg transition-colors"
          >
            Accepteren
          </button>
          <button
            type="button"
            onClick={acceptEssential}
            className="flex-1 py-2 px-3 text-center font-medium text-slate-300 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-colors"
          >
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
};
