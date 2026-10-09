import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell, PageHero, Section, CtaBand, linkBtn, card } from '@/components/PageShell';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { DeviceIcon } from '@/components/DeviceIcon';
import { DEVICES, FIELDS, PROBLEMS } from '@/data/devices';
import { SITE_URL } from '@/data/site';
import { Lightbulb, ExternalLink, ArrowRight } from 'lucide-react';

export const dynamicParams = false;
export function generateStaticParams() {
  return DEVICES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = DEVICES.find((x) => x.slug === slug);
  if (!d) return {};
  return { title: { absolute: d.metaTitle }, description: d.metaDescription, alternates: { canonical: `/apparaten/${d.slug}/` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = DEVICES.find((x) => x.slug === slug);
  if (!d) notFound();

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: d.h1,
    description: d.intro,
    step: d.guides[0].steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s })),
    url: `${SITE_URL}/apparaten/${d.slug}/`,
  };
  const others = DEVICES.filter((x) => x.slug !== d.slug);

  return (
    <PageShell crumbs={[{ name: 'Apparaten', href: '/apparaten/' }, { name: d.name, href: `/apparaten/${d.slug}/` }]} schema={[howTo]}>
      <PageHero eyebrow={`Installatie · ${d.name}`} title={d.h1} intro={d.intro}>
        <WhatsAppButton page={`apparaat-${d.slug}`} plan="support" refCode={`APP-${d.slug}`} message={`Hoi IPTV Koop 4K, ik wil hulp bij de installatie op mijn ${d.name}.`} label="Hulp bij installatie" pulse />
        <a href="/iptv-abonnement/" className={linkBtn}>Nog geen abonnement?</a>
      </PageHero>

      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${card} p-5 flex items-start gap-4 max-w-3xl`}>
            <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-[#2BE07A]/15 ring-1 ring-[#2BE07A]/30 text-[#2BE07A]"><DeviceIcon icon={d.icon} /></span>
            <div>
              <p className="font-semibold text-white">Welke app?</p>
              <p className="text-sm text-slate-400">{d.apps}</p>
            </div>
          </div>
        </div>
      </section>

      {d.guides.map((g) => (
        <Section key={g.title} title={g.title}>
          <ol className="space-y-3 max-w-3xl">
            {g.steps.map((s, i) => (
              <li key={i} className={`${card} flex gap-4 p-5`}>
                <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#2BE07A] text-[#05080B] font-outfit font-extrabold">{i + 1}</span>
                <p className="text-slate-200 leading-relaxed pt-0.5">{s}</p>
              </li>
            ))}
          </ol>
          {(g.note || g.link) && (
            <div className="mt-4 max-w-3xl rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5 text-sm text-slate-300">
              {g.note && <p>{g.note}</p>}
              {g.link && (
                <a href={g.link.url} target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-flex items-center gap-1.5 font-semibold text-[#2BE07A]">
                  {g.link.label} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </Section>
      ))}

      {d.slug !== 'mag-box' && (
        <Section title="Welke gegevens vul je in?">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FIELDS.map(([k, v]) => (
              <div key={k} className={`${card} p-5`}>
                <dt className="font-semibold text-white">{k}</dt>
                <dd className="mt-1 text-sm text-slate-400">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section title="Tips">
        <ul className="space-y-3 max-w-3xl">
          {d.tips.map((t) => (
            <li key={t} className="flex gap-3 text-slate-300"><Lightbulb className="w-5 h-5 shrink-0 text-[#2BE07A]" />{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Lukt het niet?" intro="De meest voorkomende problemen en wat je kunt doen.">
        <div className="grid md:grid-cols-2 gap-4">
          {PROBLEMS.map((p) => (
            <div key={p.title} className={`${card} p-6`}>
              <h3 className="font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Andere apparaten">
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <a key={o.slug} href={`/apparaten/${o.slug}/`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-200 hover:border-[#2BE07A]/50">
              <DeviceIcon icon={o.icon} className="w-4 h-4 text-[#2BE07A]" /> {o.name} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </Section>

      <CtaBand title={`Kijken op je ${d.name}?`} text="Kies je abonnement en we helpen je bij de installatie via WhatsApp.">
        <WhatsAppButton page={`apparaat-${d.slug}`} refCode={`APP-${d.slug}-cta`} message={`Hoi IPTV Koop 4K, ik wil graag een abonnement voor mijn ${d.name}.`} />
        <a href="/iptv-abonnement/" className={linkBtn}>Bekijk abonnementen</a>
      </CtaBand>
    </PageShell>
  );
}
