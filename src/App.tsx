/**
 * Main Application router for IPTV Koop 4K (www.iptvkoop4k.nl)
 * - Brand: IPTV Koop 4K
 * - Full route support with BrowserRouter
 * - Solid sticky header (never overlaps content)
 * - Fixed bottom WhatsApp bar on mobile
 * - Compact non-intrusive cookie banner
 * - Total prices ONLY (no monthly calculation)
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Aurora } from './components/fx/Aurora';
import { useGlobalPress } from './components/fx/useGlobalPress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AbonnementPage } from './pages/AbonnementPage';
import { ZenderlijstPage } from './pages/ZenderlijstPage';
import { ApparatenPage } from './pages/ApparatenPage';
import { DeviceDetailPage } from './pages/DeviceDetailPage';
import { HoeBestellenPage } from './pages/HoeBestellenPage';
import { IptvVsKabelPage } from './pages/IptvVsKabelPage';
import { FaqPage } from './pages/FaqPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper for all pages
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const reduce = useReducedMotion();
  useGlobalPress();

  return (
    <div className="min-h-screen flex flex-col text-[#0E1526] font-sans overflow-x-clip selection:bg-[#FFE9DF] selection:text-[#FF5A1F]">
      <Aurora />
      <ScrollToTop />
      {/* 1. Solid sticky header */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-1 w-full pb-20 md:pb-0">
        {/* page transition: each new page slides in with a soft blur */}
        <motion.div
          key={location.pathname}
          className={location.pathname === '/' ? '' : 'fx-inner'}
          initial={reduce ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none', transform: 'none' } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </main>

      {/* Shared footer */}
      <Footer />

      {/* Fixed bottom WhatsApp CTA for mobile */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-2 pb-[calc(10px+env(safe-area-inset-bottom))] bg-white/85 backdrop-blur-xl border-t border-white shadow-[0_-10px_30px_-12px_rgba(14,21,38,0.25)]">
        <WhatsAppButton
          message="Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: MOB-fixed-bar)"
          context={{ page: location.pathname, ref: 'MOB-fixed-bar' }}
          variant="fixed-mobile"
          fullWidth
        >
          Bestel via WhatsApp
        </WhatsAppButton>
      </div>

      {/* Compact Cookie Banner */}
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iptv-abonnement/" element={<AbonnementPage />} />
          <Route path="/iptv-abonnement" element={<AbonnementPage />} />

          <Route path="/zenderlijst/" element={<ZenderlijstPage />} />
          <Route path="/zenderlijst" element={<ZenderlijstPage />} />

          <Route path="/apparaten/" element={<ApparatenPage />} />
          <Route path="/apparaten" element={<ApparatenPage />} />
          <Route path="/apparaten/:deviceSlug/" element={<DeviceDetailPage />} />
          <Route path="/apparaten/:deviceSlug" element={<DeviceDetailPage />} />

          <Route path="/hoe-bestellen/" element={<HoeBestellenPage />} />
          <Route path="/hoe-bestellen" element={<HoeBestellenPage />} />

          <Route path="/iptv-vs-kabel/" element={<IptvVsKabelPage />} />
          <Route path="/iptv-vs-kabel" element={<IptvVsKabelPage />} />

          <Route path="/veelgestelde-vragen/" element={<FaqPage />} />
          <Route path="/veelgestelde-vragen" element={<FaqPage />} />

          <Route path="/over-ons/" element={<OverOnsPage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />

          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/privacybeleid/" element={<LegalPage />} />
          <Route path="/privacybeleid" element={<LegalPage />} />

          <Route path="/cookiebeleid/" element={<LegalPage />} />
          <Route path="/cookiebeleid" element={<LegalPage />} />

          <Route path="/algemene-voorwaarden/" element={<LegalPage />} />
          <Route path="/algemene-voorwaarden" element={<LegalPage />} />

          <Route path="/retourbeleid/" element={<LegalPage />} />
          <Route path="/retourbeleid" element={<LegalPage />} />

          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
