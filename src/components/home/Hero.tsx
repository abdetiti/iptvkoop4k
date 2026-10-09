import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { ArrowRight, MonitorSmartphone, Sparkles, Tv } from 'lucide-react';
import { WhatsAppButton } from '../WhatsAppButton';
import { PaymentLogos } from '../PaymentLogos';
import { KineticLines } from '../fx/Kinetic';

const SLIDES = [
  { src: '/images/hero/hero-voetbal-thuis.webp', tag: 'Live sport' },
  { src: '/images/sport-affiches/sport-f1-paysage.webp', tag: 'Live sport' },
  { src: '/images/fonds/bg-familie.webp', tag: 'Films & series' },
  { src: '/images/hero/hero-stadion.webp', tag: 'Live sport' },
  { src: '/images/hero/hero-zenders.webp', tag: 'Nederlandse & internationale zenders' },
  { src: '/images/fonds/bg-bioscoop.webp', tag: 'Films & series' },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/** Floating 3D screen that follows the pointer and plays our real images. */
function FloatingScreen() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 8]);
  const rotX = useTransform(sy, [-0.5, 0.5], [9, -5]);
  const near = (f: number) => ({
    x: useTransform(sx, [-0.5, 0.5], [-f, f]),
    y: useTransform(sy, [-0.5, 0.5], [-f * 0.7, f * 0.7]),
  });
  const l1 = near(26);
  const l2 = near(40);
  const l3 = near(18);

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % SLIDES.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my, reduce]);

  return (
    <div ref={ref} className="relative w-full" style={{ perspective: 1600 }}>
      <motion.div
        className="relative mx-auto w-full max-w-[640px]"
        style={{ rotateY: reduce ? -8 : rotY, rotateX: reduce ? 4 : rotX, transformStyle: 'preserve-3d' }}
        initial={reduce ? false : { opacity: 0, y: 40, rotateZ: -2 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.25 }}
      >
        {/* screen */}
        <div className="fx-holo relative rounded-[26px]">
          <div className="relative rounded-[26px] bg-[#0b1220] p-[9px] shadow-[0_60px_120px_-40px_rgba(14,21,38,.55)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#0b1220]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={SLIDES[i].src}
                  src={SLIDES[i].src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ animation: reduce ? undefined : 'fx-kenburns 6s ease-out forwards' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: EASE }}
                  decoding="async"
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              </AnimatePresence>
              {/* glass reflection */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.28)_0%,rgba(255,255,255,0)_32%,rgba(255,255,255,0)_68%,rgba(255,255,255,.1)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={SLIDES[i].tag + i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="rounded-full bg-white/15 px-3 py-1.5 text-[13px] font-semibold text-white backdrop-blur-md"
                  >
                    {SLIDES[i].tag}
                  </motion.span>
                </AnimatePresence>
                <div className="flex gap-1.5">
                  {SLIDES.map((_, k) => (
                    <span
                      key={k}
                      className="h-1 rounded-full bg-white/40 transition-all duration-700"
                      style={{ width: k === i ? 22 : 6, background: k === i ? '#fff' : undefined }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor glow */}
        <div className="pointer-events-none absolute -bottom-10 left-[8%] right-[8%] h-16 rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,90,31,.35),transparent)] blur-xl" />

        {/* floating chips (parallax depth) */}
        <motion.div style={reduce ? undefined : l2} className="absolute -left-4 top-[12%] hidden sm:block" >
          <div className="fx-glass fx-float flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[14px] font-bold text-[#0E1526]">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#0E1526] text-[11px] font-black text-white">4K</span>
            Tot 4K beeld
          </div>
        </motion.div>
        <motion.div style={reduce ? undefined : l1} className="absolute -right-3 top-[40%] hidden sm:block">
          <div className="fx-glass fx-float-2 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[14px] font-bold text-[#0E1526]">
            <MonitorSmartphone className="h-5 w-5 text-[#2E5BFF]" />
            1 tot 4 schermen
          </div>
        </motion.div>
        <motion.div style={reduce ? undefined : l3} className="absolute -bottom-6 left-[14%] hidden sm:block">
          <div className="fx-glass fx-float-3 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[14px] font-bold text-[#0E1526]">
            <Tv className="h-5 w-5 text-[#FF5A1F]" />
            32.000+ zenders
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-16 sm:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fx-glass mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-[#0E1526]"
          >
            <span className="fx-live-dot" />
            Live tv · sport · films · series
          </motion.div>

          <KineticLines
            as="h1"
            inView={false}
            delay={0.1}
            className="font-display text-[44px] font-bold leading-[0.98] tracking-[-0.045em] text-[#0E1526] sm:text-6xl lg:text-[76px]"
            lines={[
              <span className="fx-shimmer">IPTV kopen.</span>,
              <>Alles kijken,</>,
              <>op elk scherm.</>,
            ]}
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-5 max-w-[34rem] text-[16px] leading-relaxed text-[#5b6478] sm:text-lg"
          >
            32.000+ live tv-kanalen en 180.000+ films en series, tot 4K. Op je Smart TV, Fire TV Stick,
            telefoon of laptop, met hulp in het Nederlands.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton
              message="Hoi IPTV Koop 4K, ik wil graag IPTV kopen. (ref: HOME-hero)"
              context={{ page: 'home', ref: 'HOME-hero' }}
              variant="primary"
              className="min-h-[56px] px-7 text-[17px]"
            >
              Bestel via WhatsApp
            </WhatsAppButton>
            <Link
              to="/iptv-abonnement/"
              className="fx-press group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full px-6 text-[16px] font-bold text-[#0E1526] hover:bg-white/70"
            >
              Bekijk de pakketten
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <span className="fx-holo inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#0E1526]">
              <Sparkles className="h-4 w-4 text-[#FF5A1F]" />
              12 maanden vanaf <strong className="font-display text-[15px]">€58,99</strong>
            </span>
            <PaymentLogos size="sm" className="justify-start" />
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <FloatingScreen />
        </div>
      </div>
    </section>
  );
};
