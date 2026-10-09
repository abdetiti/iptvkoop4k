import type { Metadata } from 'next';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { DeviceIcon } from '@/components/DeviceIcon';
import { DEVICES, FIELDS, PROBLEMS } from '@/data/devices';
import { Wifi, KeyRound, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV installeren | Handleiding per apparaat',
  description:
    'IPTV installeren op Smart TV, Android TV, Fire TV Stick, MAG Box, iPhone, iPad of computer. Kies je apparaat en volg de stappen, met hulp via WhatsApp.',
  alternates: { canonical: '/apparaten/' },
};

export default function Page() {
  return (
    <PageShell crumbs={[{ name: 'Apparaten', href: '/apparaten/' }]}>
      <PageHero
        eyebrow="Installatie"
        title={<>IPTV installeren — <span className="text-[#2BE07A]">kies je apparaat</span></>}
        intro="Kies je apparaat, volg de stappen en voeg je ontvangen gegevens toe. Lukt het niet? We helpen je via WhatsApp."
      >
        <WhatsAppButton page="apparaten" refCode="APPARATEN-hero" message="Hoi IPTV Koop 4K, ik heb hulp nodig bij de installatie. Mijn apparaat:" label="Hulp bij installatie" pulse />
        <a href="/iptv-abonnement/" className={linkBtn}>Nog geen abonnement?</a>
      </PageHero>

      <Section title="In drie stappen klaar">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            [Wifi, 'Verbind je apparaat', 'Zorg voor een werkende, stabiele internetverbinding.'],
            [KeyRound, 'Leg je gegevens klaar', 'Gebruik de account- of portalgegevens die je hebt ontvangen.'],
            [BookOpen, 'Kies de juiste handleiding', 'Hieronder vind je de stappen voor jouw apparaat.'],
          ].map(([Icon, t, d]: any, i) => (
            <div key={t} className={`${card} p-6`}>
              <span className="font-outfit text-sm font-extrabold text-[#2BE07A]">0{i + 1}</span>
              <Icon className="mt-2 w-6 h-6 text-[#2BE07A]" />
              <h3 className="mt-3 font-bold text-white">{t}</h3>
              <p className="mt-1 text-sm text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Handleidingen" title="Waar wil je IPTV installeren?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEVICES.map((d) => (
            <a key={d.slug} href={`/apparaten/${d.slug}/`} className={`${card} group p-6 hover:border-[#2BE07A]/50 transition-colors`}>
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#2BE07A]/15 ring-1 ring-[#2BE07A]/30 text-[#2BE07A]"><DeviceIcon icon={d.icon} /></span>
              <h3 className="mt-4 text-lg font-bold text-white">{d.name}</h3>
              <p className="text-sm text-slate-400">{d.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2BE07A]">Bekijk de stappen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Welke gegevens vul je in?" intro="Bij een Xtream Codes-login gebruik je deze velden in je speler. Gebruik je een MAG Box of VLC? Volg dan de uitleg voor je portaladres of M3U-link.">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FIELDS.map(([k, v]) => (
            <div key={k} className={`${card} p-5`}>
              <dt className="font-semibold text-white">{k}</dt>
              <dd className="mt-1 text-sm text-slate-400">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="problemen" eyebrow="Support" title="Problemen oplossen" intro="Kies wat er misgaat. Blijft het probleem? Stuur ons je apparaatmodel, de naam van je speler en de foutmelding.">
        <div className="grid md:grid-cols-2 gap-4">
          {PROBLEMS.map((p) => (
            <div key={p.title} className={`${card} p-6 flex flex-col`}>
              <h3 className="font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400 flex-1">{p.text}</p>
              <div className="mt-4"><WhatsAppButton page="apparaten" plan="support" refCode={p.ref} message={p.msg} label="Vraag hulp" size="md" /></div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Nog geen abonnement?" text="Kies het pakket dat past bij jouw apparaten. We helpen je bij de installatie.">
        <WhatsAppButton page="apparaten" refCode="APPARATEN-cta" message="Hoi IPTV Koop 4K, ik wil graag een abonnement." />
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk abonnementen</a>
      </CtaBand>
    </PageShell>
  );
}
