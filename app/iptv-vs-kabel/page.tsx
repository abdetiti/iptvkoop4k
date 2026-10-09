import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FaqList, faqSchema } from '@/components/FaqList';

export const metadata: Metadata = {
  title: 'IPTV vs kabel: wat past bij jou in 2026?',
  description:
    'IPTV of kabel-tv? Vergelijk prijs, contractduur, zenders en apparaten. Met actuele prijzen van tv-abonnementen bij kabel en glasvezel (oktober 2026).',
  alternates: { canonical: '/iptv-vs-kabel/' },
};

// Prix relevés le 8–9 octobre 2026. À revérifier régulièrement.
const ROWS = [
  ['Prijs', 'Vanaf €4,92 per maand (12 maanden, 1 apparaat, €58,99 in één keer)', 'Internet + tv bij kabel vanaf €26,75 per maand (actieprijs, daarna hoger); bij glasvezel vanaf €35 per maand (actie, eerste 6 maanden)'],
  ['Contractduur', '3, 6 of 12 maanden, vooraf betaald', 'Meestal 12 of 24 maanden'],
  ['Wat heb je nodig?', 'Een internetverbinding en een geschikte app', 'Een internet- en tv-pakket, vaak met decoder'],
  ['Zenders', '32.000+ live tv-kanalen, Nederlands en internationaal', 'Afhankelijk van het pakket'],
  ['Films & series', '180.000+ titels on demand', 'Vaak via losse streamingdiensten of extra pakketten'],
  ['Apparaten', 'Smart TV, Firestick, Android TV, iPhone, iPad, laptop, MAG; 1 tot 4 tegelijk', 'Decoder en app van de aanbieder'],
  ['Installatie', 'Zelf in een paar stappen, met hulp via WhatsApp', 'Decoder aansluiten, soms met monteur'],
];

const SOURCES = [
  { label: 'Selectra: Ziggo internet + tv (prijzen bijgewerkt 8 oktober 2026)', url: 'https://selectra.nl/telecom/telecomaanbieder/ziggo/tv' },
  { label: 'iPhoned: KPN internet + tv (4 september 2026)', url: 'https://www.iphoned.nl/deals/kpn-prijsverhoging-1-oktober/' },
];

const FAQ = [
  { q: 'Heb ik voor IPTV nog internet nodig?', a: 'Ja. IPTV werkt via je internetverbinding. Je vervangt dus je tv-abonnement, niet je internet.' },
  { q: 'Is IPTV goedkoper dan kabel-tv?', a: 'Een IPTV-abonnement kost vanaf €4,92 per maand. Hoeveel je bespaart, hangt af van je huidige pakket en of je internet los kunt houden.' },
  { q: 'Heb ik een decoder nodig?', a: 'Nee. Je kijkt via een app op je Smart TV, Firestick, Android TV, telefoon, tablet of computer.' },
  { q: 'Kan ik op meerdere tv’s kijken?', a: 'Ja, met een abonnement voor 2, 3 of 4 apparaten.' },
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'IPTV vs kabel', href: '/iptv-vs-kabel/' }]} schema={[faqSchema(FAQ)]}>
      <PageHero
        eyebrow="Vergelijking"
        title={<>IPTV vs kabel: <span className="text-[#2BE07A]">wat past bij jou?</span></>}
        intro="Kabel-tv of IPTV? We zetten prijs, contractduur, zenders en apparaten naast elkaar, zodat je zelf kunt kiezen."
      >
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk de IPTV-prijzen</a>
      </PageHero>

      <Section title="De verschillen op een rij">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-semibold text-slate-400 w-[22%]"> </th>
                <th className="p-4 font-bold text-[#2BE07A]">IPTV Koop 4K</th>
                <th className="p-4 font-bold text-white">Kabel / glasvezel tv</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([k, a, b]) => (
                <tr key={k} className="border-t border-white/10 align-top">
                  <th className="p-4 text-left font-semibold text-white">{k}</th>
                  <td className="p-4 text-slate-200 bg-[#2BE07A]/[0.04]">{a}</td>
                  <td className="p-4 text-slate-300">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Prijzen van kabel- en glasvezelaanbieders zijn actieprijzen voor internet + tv, gecontroleerd in oktober 2026 en kunnen wijzigen. Bronnen:{' '}
          {SOURCES.map((s, i) => (
            <span key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2 hover:text-slate-300">{s.label}</a>
              {i < SOURCES.length - 1 ? '; ' : '.'}
            </span>
          ))}
        </p>
      </Section>

      <Section title="Wanneer kies je voor IPTV?">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Je wilt geen lang contract', 'Kies zelf 3, 6 of 12 maanden en betaal vooraf, zonder decoder.'],
            ['Je kijkt op meerdere schermen', 'Kijk op 1 tot 4 apparaten: tv, telefoon, tablet of laptop.'],
            ['Je wilt meer sport en films', 'Live sport, internationale zenders en 180.000+ films en series on demand.'],
          ].map(([t, d]) => (
            <div key={t} className={`${card} p-6`}>
              <h3 className="font-bold text-white">{t}</h3>
              <p className="mt-1 text-sm text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Vragen" title="Veelgestelde vragen over IPTV en kabel">
        <FaqList items={FAQ} />
      </Section>

      <CtaBand title="Overstappen naar IPTV?" text="Vertel ons wat je nu kijkt, dan adviseren we het pakket dat past.">
        <WhatsAppButton page="iptv-vs-kabel" refCode="VS-KABEL" message="Hoi IPTV Koop 4K, ik wil overstappen van kabel naar IPTV. Welk pakket past bij mij?" label="Vraag advies" />
      </CtaBand>
    </PageShell>
  );
}
