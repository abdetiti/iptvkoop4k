import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

const NAV = [
  { to: '/iptv-abonnement/', label: 'Abonnementen' },
  { to: '/zenderlijst/', label: 'Zenderlijst' },
  { to: '/apparaten/', label: 'Apparaten' },
  { to: '/hoe-bestellen/', label: 'Hoe bestellen' },
  { to: '/iptv-vs-kabel/', label: 'IPTV vs kabel' },
  { to: '/veelgestelde-vragen/', label: 'FAQ' },
  { to: '/contact/', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  const isActive = (to: string) => norm(pathname) === to || norm(pathname).startsWith(to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 rounded-[22px] border border-white bg-white/[0.94] px-3 pl-4 backdrop-blur-xl transition-shadow duration-500 sm:px-4 ${
          scrolled ? 'shadow-[0_18px_40px_-22px_rgba(14,21,38,.45)]' : 'shadow-[0_0_0_1px_rgba(14,21,38,.06)]'
        }`}
      >
        <Link to="/" aria-label="IPTV Koop 4K – home" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 whitespace-nowrap xl:flex" aria-label="Hoofdmenu">
          {NAV.map((l) => {
            const active = isActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`fx-press relative rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${
                  active ? 'text-white' : 'text-[#3b4558] hover:text-[#0E1526]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-[#0E1526]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppButton
              message="Hoi IPTV Koop 4K, ik heb interesse in een abonnement. (ref: NAV-bestel)"
              context={{ page: pathname, ref: 'NAV-bestel' }}
              variant="compact"
            >
              Bestel via WhatsApp
            </WhatsAppButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="fx-press grid h-12 w-12 place-items-center rounded-2xl bg-[#0E1526] text-white xl:hidden"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <motion.i animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 block h-[2px] w-5 rounded bg-white" />
              <motion.i animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="absolute bottom-0 left-0 block h-[2px] w-5 rounded bg-white" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-7xl origin-top rounded-[24px] border border-white bg-white/95 p-3 shadow-[0_30px_60px_-30px_rgba(14,21,38,.5)] backdrop-blur-xl xl:hidden"
            aria-label="Mobiel menu"
          >
            {NAV.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * i }}>
                <Link
                  to={l.to}
                  className={`fx-press flex min-h-[52px] items-center rounded-2xl px-4 text-[17px] font-semibold ${
                    isActive(l.to) ? 'bg-[#0E1526] text-white' : 'text-[#0E1526] hover:bg-[#F6F5F1]'
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-2">
              <WhatsAppButton
                message="Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: MOB-nav)"
                context={{ page: pathname, ref: 'MOB-nav' }}
                variant="primary"
                fullWidth
              >
                Bestel via WhatsApp
              </WhatsAppButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
