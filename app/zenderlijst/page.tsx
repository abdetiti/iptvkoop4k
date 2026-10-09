import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FaqList, faqSchema } from '@/components/FaqList';
import { Tv, Trophy, Clapperboard, Globe2, Baby, Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'IPTV Zenderlijst | 32.000+ zenders | IPTV Koop 4K' },
  description:
    'Wat kun je kijken met IPTV Koop 4K? 32.000+ zenders: Nederlandse tv, live sport, films en series, internationale en kinderzenders. Vraag naar jouw zender.',
  alternates: { canonical: '/zenderlijst/' },
};

const GROUPS = [
  { icon: Tv, title: 'Nederlandse zenders', text: 'Nieuws, entertainment, sport en bekende programma’s uit Nederland.' },
  { icon: Trophy, title: 'Live sport', text: 'Voetbal, Formule 1, basketbal, tennis en meer.' },
  { icon: Clapperboard, title: 'Films & series', text: 'Films, series en documentaires voor elk kijkmoment, met 180.000+ titels on demand.' },
  { icon: Globe2, title: 'Internationale tv', text: 'Zenders en entertainment uit verschillende landen en talen.' },
  { icon: Baby, title: 'Familie & kinderen', text: 'Kinderprogramma’s en entertainment voor het hele gezin.' },
  { icon: Newspaper, title: 'Nieuws & actualiteit', text: 'Nederlandse en internationale nieuwsprogramma’s.' },
];

const COMPETITIONS = [
  ['comp-eredivisie', 'Eredivisie'], ['comp-champions-league', 'UEFA Champions League'], ['comp-premier-league', 'Premier League'],
  ['comp-la-liga', 'LaLiga'], ['comp-serie-a', 'Serie A'], ['comp-bundesliga', 'Bundesliga'],
  ['comp-conference-league', 'UEFA Conference League'], ['comp-ligue-1', 'Ligue 1'], ['comp-formule-1', 'Formule 1'],
];

const POSTERS = ['sport-oranje', 'sport-champions-league-sterren', 'sport-messi-ronaldo', 'sport-f1-coureurs', 'sport-nba'];

const FAQ = [
  { q: 'Kan ik Nederlandse zenders bekijken?', a: 'Ja, de pakketten bevatten Nederlandse en internationale zenders. De actuele beschikbaarheid kan verschillen per pakket.' },
  { q: 'Zit mijn zender of competitie erbij?', a: 'Stuur ons via WhatsApp de naam van de zender of competitie. We vertellen je welke beschikbaar is in welk pakket.' },
  { q: 'Kan ik in HD en 4K kijken?', a: 'Ja, waar beschikbaar. De beeldkwaliteit hangt af van de bron, je scherm, je speler en je internetverbinding.' },
  { q: 'Is er een programmagids?', a: 'Ja, er is een programmagids (EPG). Laadt die niet? Op de pagina van je apparaat lees je hoe je dat oplost.' },
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Zenderlijst', href: '/zenderlijst/' }]} schema={[faqSchema(FAQ)]}>
      <PageHero
        eyebrow="Zenderlijst"
        title={<>IPTV zenderlijst — <span className="text-[#2BE07A]">32.000+ zenders</span></>}
        intro="Nederlandse tv, live sport, films en series, internationale en kinderzenders. Zoek je een specifieke zender? Vraag het ons, we checken het direct voor je."
      >
        <WhatsAppButton page="zenderlijst" refCode="ZENDERS-hero" message="Hoi IPTV Koop 4K, zit mijn zender in jullie pakket? Het gaat om:" label="Vraag naar jouw zender" pulse />
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk abonnementen</a>
      </PageHero>

      <Section eyebrow="Categorieën" title="Wat je kunt kijken">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${card} p-6`}>
              <Icon className="w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Live sport" title="Topcompetities" intro="Van de Eredivisie tot de Champions League en de Formule 1. Vraag naar de actuele beschikbaarheid van jouw wedstrijd.">
        <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {COMPETITIONS.map(([k, name]) => (
            <li key={k} className="text-center">
              <div className="aspect-square rounded-2xl bg-white p-2 grid place-items-center ring-1 ring-white/10">
                <img src={`/images/sport-competitions/${k}.webp`} alt={name} loading="lazy" className="w-full h-full object-contain" />
              </div>
              <p className="mt-2 text-[11px] text-slate-400 truncate">{name}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {POSTERS.map((k) => (
            <div key={k} className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src={`/images/sport-affiches/${k}.webp`} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Vragen" title="Veelgestelde vragen over de zenders">
        <FaqList items={FAQ} />
      </Section>

      <CtaBand title="Twijfel je over een zender?" text="Stuur ons de naam en we laten je weten in welk pakket hij zit.">
        <WhatsAppButton page="zenderlijst" refCode="ZENDERS-cta" message="Hoi IPTV Koop 4K, zit mijn zender in jullie pakket? Het gaat om:" label="Vraag naar jouw zender" />
      </CtaBand>
    </PageShell>
  );
}
