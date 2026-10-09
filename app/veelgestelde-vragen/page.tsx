import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FaqList, faqSchema } from '@/components/FaqList';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen over IPTV',
  description:
    'Antwoorden over bestellen, activatie, apparaten, zenders, 4K, buffering, proefperiode en terugbetaling bij IPTV Koop 4K.',
  alternates: { canonical: '/veelgestelde-vragen/' },
};

const GROUPS = [
  {
    title: 'Starten & activatie',
    items: [
      { q: 'Hoe start ik met IPTV Koop 4K?', a: 'Kies een abonnement dat past bij je apparaten en kijkwensen. Na bevestiging ontvang je je accountgegevens. Volg daarna de handleiding voor jouw apparaat.' },
      { q: 'Hoe snel ontvang ik mijn toegang?', a: 'Je ontvangt je inloggegevens nadat je bestelling is bevestigd en verwerkt. Vraag bij het bestellen naar de verwachte activatietijd.' },
      { q: 'Hoe betaal ik?', a: 'Je ontvangt een veilige betaallink via WhatsApp. Betalen kan met iDEAL, PayPal, Visa, Mastercard of Apple Pay.' },
    ],
  },
  {
    title: 'Kijken & apparaten',
    items: [
      { q: 'Welke apparaten worden ondersteund?', a: 'Smart TV (Samsung, LG), Android TV, Google TV, Fire TV Stick, MAG, iPhone, iPad, Android-telefoons, Windows en Mac.' },
      { q: 'Welke apps kan ik gebruiken?', a: 'Bijvoorbeeld IPTV Smarters, TiviMate of IBO Player, of een andere app met ondersteuning voor M3U of Xtream Codes.' },
      { q: 'Kan ik in HD en 4K kijken?', a: 'Ja, waar beschikbaar. De kwaliteit hangt af van de bron, je scherm, je speler en je internetverbinding.' },
      { q: 'Kan ik Nederlandse zenders bekijken?', a: 'Ja, de pakketten bevatten Nederlandse en internationale zenders. De actuele beschikbaarheid kan verschillen per pakket.' },
    ],
  },
  {
    title: 'Abonnement & gebruik',
    items: [
      { q: 'Welke abonnementen zijn er?', a: 'Standard en Premium, met een looptijd van 3, 6 of 12 maanden, voor 1 tot 4 apparaten.' },
      { q: 'Kan ik op meerdere schermen tegelijk kijken?', a: 'Ja, met een abonnement voor 2, 3 of 4 apparaten.' },
      { q: 'Kan ik mijn abonnement pauzeren?', a: 'Vraag vóór het bestellen of pauzeren beschikbaar is voor jouw pakket en welke voorwaarden daarbij horen.' },
      { q: 'Is er een proefperiode of geld-terug-regeling?', a: 'Vraag vóór je bestelling naar de actuele proefmogelijkheden. Annuleren kan zolang de dienst nog niet is geactiveerd; de voorwaarden staan in ons retourbeleid.' },
    ],
  },
  {
    title: 'Problemen oplossen',
    items: [
      { q: 'Wat als het beeld hapert?', a: 'Controleer je internet, gebruik bij voorkeur een kabel, test een andere zender en herstart de speler. Blijft het haperen? Stuur ons je apparaat en app via WhatsApp.' },
      { q: 'Inloggen lukt niet, wat nu?', a: 'Controleer de server-URL, gebruikersnaam en wachtwoord (let op hoofdletters) en of je account al actief is.' },
      { q: 'De programmagids (EPG) laadt niet.', a: 'Vernieuw de EPG in je app en controleer of je de juiste bron gebruikt. Lukt het niet, stuur ons dan je app en apparaat.' },
    ],
  },
  {
    title: 'Goed om te weten',
    items: [
      { q: 'Is IPTV legaal in Nederland?', a: 'IPTV is een techniek voor televisie via internet. Of een dienst rechtmatig wordt aangeboden, hangt af van de rechten op de content. IPTV Koop 4K is een erkend reseller.' },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Veelgestelde vragen', href: '/veelgestelde-vragen/' }]} schema={[faqSchema(ALL)]}>
      <PageHero
        eyebrow="FAQ"
        title={<>Veelgestelde <span className="text-[#2BE07A]">vragen</span></>}
        intro="Alles over bestellen, apparaten, zenders en problemen oplossen. Staat je vraag er niet tussen? Stuur ons een bericht."
      />
      {GROUPS.map((g) => (
        <Section key={g.title} title={g.title} className="!py-8">
          <FaqList items={g.items} />
        </Section>
      ))}
      <CtaBand title="Staat je vraag er niet bij?" text="Stel je vraag direct via WhatsApp, in het Nederlands.">
        <WhatsAppButton page="faq" refCode="FAQ" message="Hoi IPTV Koop 4K, ik heb een vraag die niet in de FAQ staat." label="Stel je vraag" />
      </CtaBand>
    </PageShell>
  );
}
