import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGroup, motion } from 'motion/react';
import { Check, Cpu, Zap } from 'lucide-react';
import { calculatePrice, formatPrice, DEVICE_DISCOUNT_PERCENTAGES } from '../../data/prices';
import { buildOrderMessage } from '../../utils/whatsapp';
import { WhatsAppButton } from '../WhatsAppButton';
import { PaymentLogos } from '../PaymentLogos';
import { RollingPrice } from '../fx/RollingPrice';
import { KineticLines, Reveal } from '../fx/Kinetic';

type Tier = 'Standard' | 'Premium';
type Dev = 1 | 2 | 3 | 4;
type Months = 12 | 6 | 3;

const EASE = [0.16, 1, 0.3, 1] as const;
const ACCENT: Record<Tier, string> = { Standard: '#FF5A1F', Premium: '#2E5BFF' };

/** Segmented control with a sliding pill (shared layout animation). */
function Segmented<T extends string | number>({
  id, options, value, onChange, render, label,
}: {
  id: string; options: readonly T[]; value: T; onChange: (v: T) => void; render: (v: T) => React.ReactNode; label: string;
}) {
  return (
    <div className="fx-glass flex rounded-full p-1.5" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={String(o)}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={o === value}
          className={`fx-press relative min-h-[46px] flex-1 rounded-full px-4 text-[15px] font-bold transition-colors duration-300 ${
            o === value ? 'text-white' : 'text-[#5b6478] hover:text-[#0E1526]'
          }`}
        >
          {o === value && (
            <motion.span
              layoutId={`pill-${id}`}
              className="absolute inset-0 rounded-full"
              style={{ background: 'var(--fx-accent)', boxShadow: '0 10px 24px -10px var(--fx-accent)' }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          <span className="relative z-10 whitespace-nowrap">{render(o)}</span>
        </button>
      ))}
    </div>
  );
}

export const PricingStudio: React.FC = () => {
  const [tier, setTier] = useState<Tier>('Standard');
  const [devices, setDevices] = useState<Dev>(1);
  const [months, setMonths] = useState<Months>(12);

  const short = tier === 'Standard' ? 'sta' : 'pre';
  const devText = devices === 1 ? '1 apparaat' : `${devices} apparaten`;

  return (
    <section
      id="prijzen"
      className="relative py-20 sm:py-28"
      style={{ ['--fx-accent' as string]: ACCENT[tier], transition: '--fx-accent .5s' } as React.CSSProperties}
    >
      {/* accent glow that changes with the tier */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        animate={{ background: `radial-gradient(closest-side, ${ACCENT[tier]}22, transparent)` }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--fx-accent)' }}>
                Abonnementen
              </span>
            </Reveal>
            <KineticLines
              className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
              lines={['Stel je pakket samen.', 'Zie direct de prijs.']}
            />
          </div>
          <Reveal delay={0.1} className="flex w-full flex-col gap-3 lg:w-auto">
            <Segmented
              id="tier"
              label="Pakket"
              options={['Standard', 'Premium'] as const}
              value={tier}
              onChange={setTier}
              render={(v) => v}
            />
            <Segmented
              id="dev"
              label="Aantal apparaten"
              options={[1, 2, 3, 4] as const}
              value={devices}
              onChange={setDevices}
              render={(v) => (
                <>
                  {v}
                  <span className="hidden sm:inline"> {v === 1 ? 'scherm' : 'schermen'}</span>
                </>
              )}
            />
          </Reveal>
        </div>

        <Reveal>
          <motion.div
            key={tier}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fx-glass mb-8 flex items-center gap-3 rounded-2xl px-5 py-4 text-[15px] text-[#0E1526]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: 'var(--fx-accent)' }}>
              {tier === 'Premium' ? <Cpu className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
            </span>
            {tier === 'Premium' ? (
              <p><strong>Premium</strong> draait op een krachtigere server dan Standard.</p>
            ) : (
              <p><strong>Standard</strong>: live tv, films en series, tot 4K, op 1 tot 4 apparaten.</p>
            )}
            {devices > 1 && (
              <span className="ml-auto hidden shrink-0 rounded-full px-3 py-1 text-[13px] font-bold text-white sm:inline" style={{ background: 'var(--fx-accent)' }}>
                {DEVICE_DISCOUNT_PERCENTAGES[devices]}% korting
              </span>
            )}
          </motion.div>
        </Reveal>

        <LayoutGroup>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {([12, 6, 3] as const).map((m, idx) => {
              const price = formatPrice(calculatePrice(tier, devices, m));
              const selected = months === m;
              const ref = `HOME-${short}${m}-${devices}app`;
              return (
                <Reveal key={m} delay={idx * 0.08}>
                  <motion.div
                    layout
                    onClick={() => setMonths(m)}
                    animate={{ y: selected ? -8 : 0, scale: selected ? 1 : 0.985 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    className={`fx-spot relative flex h-full cursor-pointer flex-col rounded-[28px] p-7 sm:p-8 ${
                      selected ? 'fx-holo bg-white shadow-[0_40px_80px_-40px_rgba(14,21,38,.45)]' : 'fx-glass'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="plan-glow"
                        className="pointer-events-none absolute inset-0 rounded-[28px]"
                        style={{ background: 'radial-gradient(120% 60% at 50% 0%, color-mix(in srgb, var(--fx-accent) 12%, transparent), transparent 70%)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#0E1526]">{m} maanden</h3>
                      {m === 12 && (
                        <span className="rounded-full px-3 py-1 text-[12px] font-bold text-white" style={{ background: 'var(--fx-accent)' }}>
                          Meest gekozen
                        </span>
                      )}
                    </div>
                    <p className="relative mt-1 text-[14px] text-[#5b6478]">{tier} · {devText}</p>

                    <div className="relative mt-8 font-display text-[54px] font-bold leading-none tracking-[-0.04em] text-[#0E1526]">
                      <RollingPrice value={price} />
                    </div>
                    <p className="relative mt-2 text-[14px] text-[#5b6478]">Totaal voor {m} maanden</p>

                    <ul className="relative mt-7 space-y-3 border-t border-[rgba(14,21,38,.08)] pt-6 text-[15px] text-[#0E1526]">
                      {[
                        'Live tv, films en series',
                        'Beeld tot 4K',
                        devices === 1 ? 'Kijken op 1 apparaat' : `Kijken op ${devices} apparaten tegelijk`,
                        'Installatiehulp via WhatsApp',
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <span className="grid h-5 w-5 place-items-center rounded-full text-white" style={{ background: 'var(--fx-accent)' }}>
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="relative mt-auto pt-8" onClick={(e) => e.stopPropagation()}>
                      <WhatsAppButton
                        message={buildOrderMessage(tier, m, devices, ref)}
                        context={{ page: 'home', plan: `${tier}-${m}m-${devices}`, ref }}
                        variant="primary"
                        fullWidth
                      >
                        Bestel voor {price}
                      </WhatsAppButton>
                      <PaymentLogos size="sm" className="mt-2" />
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </LayoutGroup>

        <p className="mt-8 text-center text-[14px] text-[#5b6478]">
          Betalen gaat via een veilige betaallink in WhatsApp.{' '}
          <Link to="/iptv-abonnement/" className="font-bold text-[#0E1526] underline decoration-[var(--fx-accent)] decoration-2 underline-offset-4">
            Alle prijzen en details
          </Link>
        </p>
      </div>
    </section>
  );
};
