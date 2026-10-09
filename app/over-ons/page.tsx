import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Over ons | Erkend IPTV reseller',
  description:
    'IPTV Koop 4K draait om overzicht, duidelijke keuzes en hulp wanneer je die nodig hebt. Erkend reseller, support via WhatsApp in het Nederlands.',
  alternates: { canonical: '/over-ons/' },
};

const FACTS = [
  ['2', 'Pakketopties', 'Standard en Premium'],
  ['3', 'Looptijden', '3, 6 of 12 maanden'],
  ['1–4', 'Apparaten', 'Kies wat past bij jouw huishouden'],
  ['HD–4K', 'Beeldkwaliteit', 'Waar beschikbaar'],
];

const STEPS = [
  ['We beginnen bij jouw kijkwensen', 'Welke content wil je bekijken en welke apparaten gebruik je? Dat bepaalt welke optie het meest logisch is.'],
  ['Je kiest pakket, looptijd en apparaten', 'De keuzes zijn overzichtelijk, zodat je vooraf weet wat je selecteert.'],
  ['Je ontvangt je accountgegevens', 'Na bevestiging en verwerking ontvang je de gegevens om je IPTV-speler in te stellen.'],
  ['Je volgt de handleiding voor jouw apparaat', 'Smart TV, Android TV, Fire TV, iPhone of computer: de uitleg is per apparaat georganiseerd.'],
];

const VALUES = [
  ['Duidelijke informatie', 'Je moet vooraf begrijpen wat je kiest, welke apparaten geschikt zijn en welke stappen nodig zijn.'],
  ['Praktische installatiehulp', 'De handleidingen zijn per apparaat opgebouwd, zodat je alleen ziet wat voor jou relevant is.'],
  ['Keuzevrijheid', 'Met meerdere looptijden en apparaatopties stem je je abonnement af op hoe jij kijkt.'],
  ['Ondersteuning via WhatsApp', 'Bij vragen over installatie, activatie of je account neem je direct contact op.'],
  ['Transparantie', 'Prijzen, looptijd en apparaatkeuze zijn duidelijk voordat je bestelt. Externe appkosten staan los van het abonnement.'],
  ['Continu verbeteren', 'Apparaten, apps en kijkgewoonten veranderen. Daarom blijven uitleg en ondersteuning zich ontwikkelen.'],
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Over ons', href: '/over-ons/' }]}>
      <PageHero
        eyebrow="Over IPTV Koop 4K"
        title={<>IPTV dat eenvoudiger voelt. <span className="text-[#2BE07A]">Vanaf het eerste moment.</span></>}
        intro="IPTV Koop 4K draait om overzicht, duidelijke keuzes en hulp wanneer je die nodig hebt. Van pakket en apparaat tot installatie en dagelijks kijken. IPTV Koop 4K is een erkend reseller."
      >
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk abonnementen</a>
      </PageHero>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {FACTS.map(([v, l, s]) => (
            <div key={l} className={`${card} p-5`}>
              <div className="font-outfit text-3xl font-extrabold text-[#2BE07A]">{v}</div>
              <div className="mt-1 font-semibold text-white">{l}</div>
              <div className="text-xs text-slate-400">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="Zo werken we" title="Van keuze naar kijken, in duidelijke stappen">
        <ol className="grid md:grid-cols-2 gap-4">
          {STEPS.map(([t, d], i) => (
            <li key={t} className={`${card} p-6`}>
              <span className="font-outfit text-sm font-extrabold text-[#2BE07A]">0{i + 1}</span>
              <h3 className="mt-1 font-bold text-white">{t}</h3>
              <p className="mt-1 text-sm text-slate-400">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Waar we voor staan" title="Minder gedoe. Meer duidelijkheid.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map(([t, d]) => (
            <div key={t} className={`${card} p-6`}>
              <h3 className="font-bold text-white">{t}</h3>
              <p className="mt-1 text-sm text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Klaar om IPTV Koop 4K zelf te ontdekken?" text="Bekijk de abonnementen of stuur ons je apparaat en kijkwensen.">
        <WhatsAppButton page="over-ons" refCode="OVERONS" message="Hoi IPTV Koop 4K, ik wil graag meer informatie." label="Stel je vraag" />
      </CtaBand>
    </PageShell>
  );
}
