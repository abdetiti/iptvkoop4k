/**
 * Sélecteur de prix (même logique que iptv8knederland.com) :
 * 1. looptijd, 2. aantal apparaten, 3. deux cartes Standard / Premium côte à côte.
 * Prix total uniquement (règle de ce site : pas de prix par mois).
 * `source` = 'home' (ref HOME-…) ou 'abonnement' (ref ABO-…).
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Crown, Tv } from 'lucide-react';
import {
  calculatePrice,
  formatPrice,
  DEVICE_DISCOUNT_PERCENTAGES,
  PACKAGE_CONTENT,
  INCLUDED_IN_EVERY_PACKAGE,
  PREMIUM_EXTRAS,
} from '../../data/prices';
import { buildOrderMessage } from '../../utils/whatsapp';
import { WhatsAppButton } from '../WhatsAppButton';
import { PaymentLogos } from '../PaymentLogos';
import { RollingPrice } from '../fx/RollingPrice';
import { KineticLines, Reveal } from '../fx/Kinetic';

type Tier = 'Standard' | 'Premium';
type Dev = 1 | 2 | 3 | 4;
type Months = 12 | 6 | 3;

const ORANGE = '#FF5A1F';
const COBALT = '#2E5BFF';
const PREMIUM_LIGHT = '#8FA8FF';

const DURATIONS: { months: Months; note?: string }[] = [
  { months: 12, note: 'Beste deal' },
  { months: 6 },
  { months: 3 },
];

const PACKAGES: { id: Tier; intro: string }[] = [
  { id: 'Standard', intro: 'Onze vaste server. Voor de meeste kijkers ruim voldoende.' },
  { id: 'Premium', intro: 'Alles van Standard, op een krachtigere server.' },
];

export const PricingStudio: React.FC<{ source?: 'home' | 'abonnement'; showHeading?: boolean }> = ({
  source = 'home',
  showHeading = true,
}) => {
  const [months, setMonths] = useState<Months>(12);
  const [devices, setDevices] = useState<Dev>(1);
  const prefix = source === 'home' ? 'HOME' : 'ABO';
  const page = source === 'home' ? 'home' : '/iptv-abonnement/';
  const devText = devices === 1 ? '1 apparaat' : `${devices} apparaten`;

  return (
    <section id="prijzen" className={`relative scroll-mt-20 ${showHeading ? 'py-20 sm:py-28' : 'pb-4'}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[520px] w-[900px] max-w-full -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${ORANGE}1a, transparent)` }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-8">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Abonnementen
              </span>
            </Reveal>
            <KineticLines
              className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0E1526] sm:text-6xl"
              lines={['Kies je abonnement.', 'Zie direct de prijs.']}
            />
            <p className="mt-4 max-w-2xl text-[16px] text-[#5b6478] sm:text-lg">
              Kies de looptijd en het aantal apparaten. Je ziet meteen wat je betaalt, zonder extra kosten.
            </p>
          </div>
        )}

        {/* 1. Looptijd */}
        <fieldset>
          <legend className="mb-3 text-[15px] font-bold text-[#0E1526]">1. Looptijd</legend>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {DURATIONS.map((d) => {
              const active = months === d.months;
              return (
                <button
                  key={d.months}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMonths(d.months)}
                  className={`relative min-h-[60px] transition-transform active:scale-[.97] rounded-2xl border-2 bg-white px-2 py-3 text-center transition-colors ${
                    active ? 'text-[#0E1526] shadow-[0_10px_26px_-16px_rgba(255,90,31,.9)]' : 'border-[rgba(14,21,38,.1)] text-[#5b6478] hover:border-[rgba(14,21,38,.25)]'
                  }`}
                  style={active ? { borderColor: ORANGE } : undefined}
                >
                  {d.note && (
                    <span
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={active ? { background: ORANGE, color: '#fff' } : { background: '#FFE9DF', color: ORANGE }}
                    >
                      {d.note}
                    </span>
                  )}
                  <span className="font-display block text-[17px] font-bold leading-tight sm:text-xl">{d.months} maanden</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* 2. Aantal apparaten */}
        <fieldset className="mt-6">
          <legend className="mb-3 text-[15px] font-bold text-[#0E1526]">2. Op hoeveel apparaten tegelijk?</legend>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {([1, 2, 3, 4] as const).map((n) => {
              const active = devices === n;
              return (
                <button
                  key={n}
                  type="button"
                  aria-pressed={active}
                  aria-label={`${n} ${n === 1 ? 'apparaat' : 'apparaten'}`}
                  onClick={() => setDevices(n)}
                  className={`fx-press flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-2xl border-2 bg-white px-1 py-2.5 transition-colors ${
                    active ? 'text-[#0E1526]' : 'border-[rgba(14,21,38,.1)] text-[#5b6478] hover:border-[rgba(14,21,38,.25)]'
                  }`}
                  style={active ? { borderColor: ORANGE } : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <Tv className="h-4 w-4" style={active ? { color: ORANGE } : undefined} />
                    <span className="font-display text-xl font-bold leading-none">{n}</span>
                  </span>
                  <span className="text-[12px] leading-none sm:text-[13px]">
                    {n === 1 ? 'apparaat' : `${DEVICE_DISCOUNT_PERCENTAGES[n]}% korting`}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* 3. Les deux pakketten */}
        <h3 className="mb-3 mt-8 text-[15px] font-bold text-[#0E1526]">3. Kies je pakket</h3>
        <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-2">
          {PACKAGES.map(({ id, intro }) => {
            const premium = id === 'Premium';
            const price = formatPrice(calculatePrice(id, devices, months));
            const short = premium ? 'pre' : 'sta';
            const ref = `${prefix}-${short}${months}-${devices}app`;
            const content = PACKAGE_CONTENT[id];
            const check = premium ? PREMIUM_LIGHT : ORANGE;

            return (
              <article
                key={id}
                className={`relative flex flex-col rounded-[28px] p-6 sm:p-7 ${
                  premium
                    ? 'bg-[#0E1526] text-white shadow-[0_30px_60px_-30px_rgba(14,21,38,.75)]'
                    : 'border border-[rgba(14,21,38,.08)] bg-white text-[#0E1526] shadow-[0_24px_50px_-34px_rgba(14,21,38,.5)]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-display flex items-center gap-2 text-2xl font-bold tracking-[-0.03em]">
                    {premium && <Crown className="h-5 w-5" style={{ color: PREMIUM_LIGHT }} />}
                    {id}
                  </h4>
                  {months === 12 && premium && (
                    <span className="rounded-full px-3 py-1 text-[12px] font-bold text-white" style={{ background: COBALT }}>
                      Meest gekozen
                    </span>
                  )}
                </div>
                <p className={`mt-1.5 text-[15px] ${premium ? 'text-[#c3cadb]' : 'text-[#5b6478]'}`}>{intro}</p>

                <div className={`mt-5 border-b pb-5 ${premium ? 'border-white/15' : 'border-[rgba(14,21,38,.08)]'}`}>
                  <div className="font-display text-[2.9rem] font-bold leading-none tracking-[-0.04em] sm:text-5xl">
                    <RollingPrice value={price} />
                  </div>
                  <p className={`mt-2 text-[15px] ${premium ? 'text-[#c3cadb]' : 'text-[#5b6478]'}`}>
                    Totaal voor {months} maanden · {devText}
                  </p>
                </div>

                <ul className="mt-5 space-y-3 text-[15px]">
                  {[`${content.channels} live tv-kanalen`, `${content.titles} films en series`].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0" style={{ color: check }} strokeWidth={2.5} />
                      <span className="font-bold">{t}</span>
                    </li>
                  ))}
                  {INCLUDED_IN_EVERY_PACKAGE.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0" style={{ color: check }} strokeWidth={2.5} />
                      <span className={premium ? 'text-[#e4e8f2]' : 'text-[#2a3348]'}>{t}</span>
                    </li>
                  ))}
                  {premium &&
                    PREMIUM_EXTRAS.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Crown className="h-5 w-5 shrink-0" style={{ color: PREMIUM_LIGHT }} />
                        <span className="font-semibold text-white">{t}</span>
                      </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6">
                  <WhatsAppButton
                    message={buildOrderMessage(id, months, devices, ref)}
                    context={{ page, plan: `${id}-${months}m-${devices}app`, ref }}
                    variant="primary"
                    fullWidth
                  >
                    Bestel voor {price}
                  </WhatsAppButton>
                  <p className={`mt-2.5 text-center text-[13px] ${premium ? 'text-[#c3cadb]' : 'text-[#5b6478]'}`}>
                    Je keuze staat al in het bericht. Betalen doe je daarna via een veilige link.
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-sm text-[#5b6478]">Betaal met</span>
            <PaymentLogos size="sm" />
          </div>
          {source === 'home' ? (
            <Link to="/iptv-abonnement/" className="text-[15px] font-bold text-[#0E1526] underline decoration-2 underline-offset-4" style={{ textDecorationColor: ORANGE }}>
              Alle prijzen en details
            </Link>
          ) : (
            <Link to="/hoe-bestellen/" className="text-[15px] font-bold text-[#0E1526] underline decoration-2 underline-offset-4" style={{ textDecorationColor: ORANGE }}>
              Zo werkt bestellen
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
