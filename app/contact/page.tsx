import type { Metadata } from 'next';
import { PageShell, PageHero, Section, card } from '@/components/PageShell';
import { ContactChooser } from '@/components/ContactChooser';
import { Clock, BookOpen, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Hulp via WhatsApp',
  description:
    'Een vraag over je abonnement, de installatie of een technisch probleem? Kies je onderwerp en stuur ons direct een WhatsApp-bericht. 24/7 hulp in het Nederlands.',
  alternates: { canonical: '/contact/' },
};

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Contact', href: '/contact/' }]}>
      <PageHero
        eyebrow="Contact"
        title={<>Jouw vraag. <span className="text-[#2BE07A]">Direct naar de juiste hulp.</span></>}
        intro="Kies waar je hulp bij nodig hebt. Je bericht staat klaar in WhatsApp."
      />
      <Section title="Waar kunnen we je mee helpen?">
        <ContactChooser />
      </Section>
      <Section title="Snel zelf een antwoord vinden">
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`${card} p-6`}><Clock className="w-6 h-6 text-[#2BE07A]" /><h3 className="mt-3 font-bold text-white">24/7 hulp</h3><p className="mt-1 text-sm text-slate-400">Hulp in het Nederlands via WhatsApp.</p></div>
          <a href="/apparaten/" className={`${card} p-6 hover:border-[#2BE07A]/40 transition-colors`}><BookOpen className="w-6 h-6 text-[#2BE07A]" /><h3 className="mt-3 font-bold text-white">Installatiehandleidingen</h3><p className="mt-1 text-sm text-slate-400">Stap voor stap voor Smart TV, Firestick, Android TV, iPhone en meer.</p></a>
          <a href="/veelgestelde-vragen/" className={`${card} p-6 hover:border-[#2BE07A]/40 transition-colors`}><HelpCircle className="w-6 h-6 text-[#2BE07A]" /><h3 className="mt-3 font-bold text-white">Veelgestelde vragen</h3><p className="mt-1 text-sm text-slate-400">Bestellen, apparaten, zenders en problemen oplossen.</p></a>
        </div>
      </Section>
    </PageShell>
  );
}
