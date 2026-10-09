import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { PaymentLogos } from '@/components/PaymentLogos';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FaqList, faqSchema } from '@/components/FaqList';
import { ListChecks, MessageCircle, CreditCard, Tv, BadgeCheck, RotateCcw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hoe bestellen? IPTV in 4 stappen via WhatsApp',
  description:
    'Zo bestel je IPTV bij IPTV Koop 4K: kies je pakket, stuur een WhatsApp-bericht, betaal veilig via een betaallink en ontvang je inloggegevens.',
  alternates: { canonical: '/hoe-bestellen/' },
};

const STEPS = [
  { icon: ListChecks, title: 'Kies je pakket', text: 'Standard of Premium, een looptijd van 3, 6 of 12 maanden en het aantal apparaten (1 tot 4).', link: { href: '/iptv-abonnement/', label: 'Bekijk de prijzen' } },
  { icon: MessageCircle, title: 'Stuur ons een WhatsApp-bericht', text: 'Laat weten welk pakket je kiest en op welk apparaat je wilt kijken. Het bericht staat al klaar als je op de knop drukt.' },
  { icon: CreditCard, title: 'Betaal veilig', text: 'Je ontvangt een veilige betaallink. Betalen kan met iDEAL, PayPal, Visa, Mastercard of Apple Pay.' },
  { icon: Tv, title: 'Ontvang je gegevens en kijk', text: 'Na betaling en verwerking ontvang je je inloggegevens. Wij helpen je bij de installatie op je tv of speler.', link: { href: '/apparaten/', label: 'Bekijk de handleidingen' } },
];

const FAQ = [
  { q: 'Hoe snel ontvang ik mijn toegang?', a: 'Je ontvangt je inloggegevens nadat je bestelling is bevestigd en verwerkt. Vraag bij het bestellen naar de verwachte activatietijd.' },
  { q: 'Welke betaalmethoden zijn er?', a: 'iDEAL, PayPal, Visa, Mastercard en Apple Pay, via een veilige betaallink die je in WhatsApp ontvangt.' },
  { q: 'Kan ik annuleren?', a: 'Ja, zolang de digitale dienst nog niet is geleverd of geactiveerd. Neem zo snel mogelijk contact met ons op. Alle voorwaarden staan in ons retourbeleid.' },
  { q: 'Wat als de installatie niet lukt?', a: 'Stuur ons je apparaatmodel, de naam van je app en eventuele foutmelding via WhatsApp. Dan helpen we je stap voor stap.' },
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Hoe bestellen', href: '/hoe-bestellen/' }]} schema={[faqSchema(FAQ)]}>
      <PageHero
        eyebrow="Hoe bestellen"
        title={<>Zo bestel je IPTV in <span className="text-[#2BE07A]">4 stappen</span></>}
        intro="Geen account aanmaken, geen formulieren: je bestelt via WhatsApp en wij helpen je tot je kijkt."
      >
        <WhatsAppButton page="hoe-bestellen" refCode="BESTELLEN-hero" message="Hoi IPTV Koop 4K, ik wil graag bestellen." pulse />
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk abonnementen</a>
      </PageHero>

      <Section title="Van keuze naar kijken">
        <ol className="grid md:grid-cols-2 gap-4">
          {STEPS.map(({ icon: Icon, title, text, link }, i) => (
            <li key={title} className={`${card} relative p-6 sm:p-7`}>
              <span className="absolute top-5 right-6 font-outfit text-5xl font-extrabold text-white/[0.06]">{String(i + 1).padStart(2, '0')}</span>
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#2BE07A]/15 ring-1 ring-[#2BE07A]/30"><Icon className="w-5 h-5 text-[#2BE07A]" /></span>
              <h3 className="mt-4 text-lg font-bold text-white">{i + 1}. {title}</h3>
              <p className="mt-1.5 text-slate-300 leading-relaxed">{text}</p>
              {link && <a href={link.href} className="mt-3 inline-block text-sm font-semibold text-[#2BE07A] underline underline-offset-4">{link.label} →</a>}
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Uit de chat" title="Zo helpen we je verder" intro="Een echt gesprek met een klant (gegevens onherkenbaar gemaakt): eerst samen installeren, daarna kijken.">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="mx-auto w-full max-w-[300px] rounded-[2rem] p-2 bg-[#0f151b] border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
            <img src="/images/reviews/review-whatsapp-4.webp" alt="Klantgesprek via WhatsApp over de installatie" loading="lazy" className="w-full rounded-[1.6rem]" />
          </div>
          <div className="space-y-4">
            <div className={`${card} p-6`}>
              <CreditCard className="w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">Betaalmethoden</h3>
              <div className="mt-3"><PaymentLogos /></div>
            </div>
            <div className={`${card} p-6`}>
              <RotateCcw className="w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">Annuleren vóór activatie</h3>
              <p className="mt-1 text-sm text-slate-400">Zolang je dienst nog niet is geactiveerd, kun je annuleren. <a href="/retourbeleid/" className="text-[#2BE07A] underline underline-offset-4">Retourbeleid</a></p>
            </div>
            <div className={`${card} p-6`}>
              <BadgeCheck className="w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">Erkend reseller</h3>
              <p className="mt-1 text-sm text-slate-400">IPTV Koop 4K is een erkend reseller. <a href="/over-ons/" className="text-[#2BE07A] underline underline-offset-4">Over ons</a></p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Vragen" title="Veelgestelde vragen over bestellen">
        <FaqList items={FAQ} />
      </Section>

      <CtaBand title="Klaar om te bestellen?" text="Druk op de knop: je bericht staat al klaar in WhatsApp.">
        <WhatsAppButton page="hoe-bestellen" refCode="BESTELLEN-cta" message="Hoi IPTV Koop 4K, ik wil graag bestellen." />
      </CtaBand>
    </PageShell>
  );
}
