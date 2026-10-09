import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { PricingSection } from '@/components/PricingSection';
import { PaymentLogos } from '@/components/PaymentLogos';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FaqList, faqSchema } from '@/components/FaqList';
import { Check, Tv, Trophy, Clapperboard, Globe2, Baby, Newspaper, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'IPTV Abonnement Nederland | Vanaf €4,92 per maand' },
  description:
    'Kies je IPTV abonnement: Standard of Premium, 3, 6 of 12 maanden, voor 1 tot 4 apparaten. Je ziet meteen wat je betaalt. Bestellen via WhatsApp.',
  alternates: { canonical: '/iptv-abonnement/' },
};

const INCLUDED = [
  'Nederlandse en internationale zenders',
  'Live sport',
  'Films en series on demand',
  'Programmagids (EPG)',
  'Beeldkwaliteit van SD tot 4K',
  'Installatiehulp via WhatsApp',
];

const CATEGORIES = [
  { icon: Tv, title: 'Nederlandse zenders', text: 'Nieuws, entertainment, sport en bekende programma’s uit Nederland.' },
  { icon: Trophy, title: 'Live sport', text: 'Voetbal, Formule 1, basketbal, tennis en meer.' },
  { icon: Clapperboard, title: 'Films & series', text: 'Films, series en documentaires voor elk kijkmoment.' },
  { icon: Globe2, title: 'Internationale tv', text: 'Zenders en entertainment uit verschillende landen en talen.' },
  { icon: Baby, title: 'Familie & kinderen', text: 'Kinderprogramma’s en entertainment voor het hele gezin.' },
  { icon: Newspaper, title: 'Nieuws & actualiteit', text: 'Nederlandse en internationale nieuwsprogramma’s.' },
];

const FAQ = [
  { q: 'Welke IPTV abonnementen zijn er?', a: 'Je kiest tussen Standard en Premium, met een looptijd van 3, 6 of 12 maanden en voor 1 tot 4 apparaten. De prijs zie je direct in het overzicht.' },
  { q: 'Kan ik op meerdere schermen tegelijk kijken?', a: 'Ja. Kies een abonnement voor 2, 3 of 4 apparaten. Per extra apparaat betaal je minder dan voor een los abonnement.' },
  { q: 'Zijn er extra kosten?', a: 'Nee, je betaalt het totaalbedrag voor je gekozen looptijd. Een eventuele betaalde IPTV-app staat los van je abonnement.' },
  { q: 'Is er een proefperiode of geld-terug-regeling?', a: 'Vraag vóór je bestelling via WhatsApp naar de actuele proefmogelijkheden. Annuleren kan zolang de dienst nog niet is geactiveerd; lees ons retourbeleid voor alle voorwaarden.' },
  { q: 'Kan ik mijn abonnement pauzeren?', a: 'Vraag vóór het bestellen of pauzeren mogelijk is voor jouw pakket en welke voorwaarden daarbij horen.' },
  { q: 'Hoe betaal ik?', a: 'Na je WhatsApp-bericht ontvang je een veilige betaallink. Je betaalt met iDEAL, PayPal, Visa, Mastercard of Apple Pay.' },
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Abonnementen', href: '/iptv-abonnement/' }]} schema={[faqSchema(FAQ)]}>
      <PageHero
        eyebrow="Abonnementen"
        title={<>IPTV abonnement — <span className="text-[#2BE07A]">een pakket dat bij je past</span></>}
        intro="Kies je pakket, het aantal apparaten en je looptijd. Je ziet meteen wat je betaalt. Vanaf €4,92 per maand."
      >
        <WhatsAppButton page="abonnement" refCode="ABO-hero" message="Hoi IPTV Koop 4K, ik wil graag een abonnement." pulse />
        <a href="/hoe-bestellen/" className={linkBtn}>Zo werkt bestellen</a>
      </PageHero>

      <PricingSection />

      <Section eyebrow="Altijd inbegrepen" title="In elk pakket">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INCLUDED.map((t) => (
            <li key={t} className={`${card} flex items-center gap-3 px-5 py-4 text-slate-200`}>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-[#2BE07A]/15"><Check className="w-4 h-4 text-[#2BE07A]" /></span>
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Wat je kunt kijken" title="Alles wat je wilt kijken, op één plek" intro={<>Benieuwd of jouw zender of competitie erbij zit? Bekijk de <a href="/zenderlijst/" className="text-[#2BE07A] underline underline-offset-4">zenderlijst</a> of stel je vraag via WhatsApp.</>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${card} p-6`}>
              <Icon className="w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Zekerheid" title="Duidelijk vooraf">
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`${card} p-6`}>
            <ShieldCheck className="w-6 h-6 text-[#2BE07A]" />
            <h3 className="mt-3 font-bold text-white">Veilig betalen</h3>
            <p className="mt-1 text-sm text-slate-400 mb-4">Je betaalt via een veilige betaallink die je in WhatsApp ontvangt.</p>
            <PaymentLogos />
          </div>
          <div className={`${card} p-6`}>
            <RotateCcw className="w-6 h-6 text-[#2BE07A]" />
            <h3 className="mt-3 font-bold text-white">Annuleren vóór activatie</h3>
            <p className="mt-1 text-sm text-slate-400">Zolang je dienst nog niet is geactiveerd, kun je annuleren. <a href="/retourbeleid/" className="text-[#2BE07A] underline underline-offset-4">Lees het retourbeleid</a>.</p>
          </div>
          <div className={`${card} p-6`}>
            <Headphones className="w-6 h-6 text-[#2BE07A]" />
            <h3 className="mt-3 font-bold text-white">Hulp bij installatie</h3>
            <p className="mt-1 text-sm text-slate-400">We helpen je via WhatsApp op elk apparaat. <a href="/apparaten/" className="text-[#2BE07A] underline underline-offset-4">Bekijk de handleidingen</a>.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Vragen over prijzen" title="Veelgestelde vragen over abonnementen">
        <FaqList items={FAQ} />
      </Section>

      <CtaBand title="Klaar om te kiezen?" text="Stuur ons je keuze via WhatsApp. Je ontvangt een veilige betaallink en we helpen je bij de installatie.">
        <WhatsAppButton page="abonnement" refCode="ABO-cta" message="Hoi IPTV Koop 4K, ik wil graag een abonnement." />
      </CtaBand>
    </PageShell>
  );
}
