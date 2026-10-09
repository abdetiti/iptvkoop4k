'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { getPrice, PREMIUM_EXTRAS, type DeviceCount, type Months, type PackageType } from '../../data/prices';
import { Check, Chevron } from './Icons';
import { Wa } from './Wa';
import { PayLogos } from './Hero';

const eur = (n: number) => '€' + n.toFixed(2).replace('.', ',');

function Seg<T extends string | number>({
  label, options, value, onChange, render, hint,
}: {
  hint?: string;
  label: string; options: readonly T[]; value: T; onChange: (v: T) => void; render: (v: T) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 5, width: 0 });
  useLayoutEffect(() => {
    const el = ref.current?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]');
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [value]);
  return (
    <div className="k-seg k-glass" ref={ref} role="group" aria-label={label}>
      {hint && <span className="k-seg__hint k-show-sm" aria-hidden="true">{hint}</span>}
      <span className="k-seg__pill" style={{ left: pill.left, width: pill.width }} aria-hidden="true" />
      {options.map((o) => (
        <button key={String(o)} type="button" aria-pressed={o === value} onClick={() => onChange(o)}>
          {render(o)}
        </button>
      ))}
    </div>
  );
}

const ORDER: Months[] = [12, 6, 3];

export function Pricing() {
  const [pkg, setPkg] = useState<PackageType>('Standard');
  const [dev, setDev] = useState<DeviceCount>(1);
  const key = `${pkg}-${dev}`;

  return (
    <section className="k-section" id="abonnementen" aria-labelledby="k-prijs">
      <div className="k-wrap">
        <div className="k-head">
          <div className="k-reveal">
            <p className="k-kicker"><span>01</span>Abonnementen</p>
            <h2 className="k-h2" id="k-prijs">Wat kost IPTV kopen? <em>Je ziet het meteen.</em></h2>
            <p className="k-lead">Kies Standard of Premium en het aantal schermen. Je ziet meteen wat je betaalt, per maand en in totaal.</p>
          </div>
          <div className="k-price-ctrl k-reveal" style={{ ['--d' as string]: '.1s' }}>
            <Seg<PackageType> label="Pakket" options={['Standard', 'Premium'] as const} value={pkg} onChange={setPkg} render={(v) => String(v)} />
            <Seg<DeviceCount> hint="Schermen" label="Aantal apparaten" options={[1, 2, 3, 4] as const} value={dev} onChange={setDev}
              render={(v) => <>{v}<span className="k-hide-sm"> {v === 1 ? 'scherm' : 'schermen'}</span></>} />
          </div>
        </div>

        <div className="k-plans">
          {ORDER.map((m, i) => {
            const total = getPrice(pkg, dev, m);
            const perMonth = total / m;
            const hero = m === 12;
            const short = pkg === 'Standard' ? 'sta' : 'pre';
            const ref = `KOOP-${short}${m}-${dev}app`;
            const devLabel = `${dev} ${dev === 1 ? 'apparaat' : 'apparaten'}`;
            return (
              <article key={m} className={`k-plan k-reveal${hero ? ' k-plan--hero' : ''}`} style={{ ['--d' as string]: `${0.08 * i}s` }}>
                <div className="k-plan__top">
                  <span className="k-plan__months">{m} maanden · {pkg}</span>
                  {hero && <span className="k-badge">Meest gekozen</span>}
                </div>
                <div className="k-plan__price">
                  <b key={key + 'pm'} className="k-roll is-rolling">{eur(Math.round(perMonth * 100) / 100)}</b>
                  <span>/mnd</span>
                </div>
                <p className="k-plan__total"><span key={key + 't'} className="k-roll is-rolling">{eur(total)}</span> in totaal · {devLabel}</p>
                <ul>
                  <li><Check />Live tv, sport, films en series</li>
                  <li><Check />Beeldkwaliteit van SD tot 4K</li>
                  <li><Check />{dev === 1 ? 'Kijken op 1 apparaat' : `Kijken op ${dev} apparaten tegelijk`}</li>
                  <li><Check />Installatiehulp via WhatsApp</li>
                  {pkg === 'Premium' && PREMIUM_EXTRAS[0] && <li><Check />{PREMIUM_EXTRAS[0]}</li>}
                </ul>
                <Wa
                  message={`Hoi IPTV Koop 4K, ik wil graag IPTV kopen: ${pkg}, ${m} maanden, ${devLabel} (${eur(total)}).`}
                  refCode={ref}
                  plan={`${pkg}-${m}m-${dev}`}
                  className="k-btn k-btn--wa"
                >
                  Bestel dit pakket
                  <span className="k-knob"><Chevron /></span>
                </Wa>
              </article>
            );
          })}
        </div>

        <div className="k-price-foot k-reveal">
          <div>
            <span>Betalen via een veilige betaallink</span>
            <PayLogos />
          </div>
          <p>
            Premium draait op een krachtigere server, gemaakt voor drukke live-momenten zoals sport. ·{' '}
            <a href="/iptv-abonnement/">Alle prijzen en details</a>
          </p>
        </div>
      </div>
    </section>
  );
}
