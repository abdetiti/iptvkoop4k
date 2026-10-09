import React from 'react';
import { AmbientBackground } from './AmbientBackground';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyBar } from './MobileStickyBar';
import { CookieBanner } from './CookieBanner';
import { SITE_URL } from '../data/site';

export type Crumb = { name: string; href: string };

/** Coque commune des pages intérieures : fond, en-tête, fil d'Ariane, pied de page. */
export function PageShell({
  crumbs,
  children,
  schema = [],
}: {
  crumbs: Crumb[];
  children: React.ReactNode;
  schema?: object[];
}) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', href: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };
  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative isolate overflow-x-hidden">
      {[breadcrumb, ...schema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AmbientBackground />
      <Header />
      <main className="flex-grow pt-24 sm:pt-28">
        <nav aria-label="Kruimelpad" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 text-xs text-slate-400">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><a href="/" className="hover:text-[#2BE07A]">Home</a></li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <span aria-hidden="true">›</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-slate-300">{c.name}</span>
                ) : (
                  <a href={c.href} className="hover:text-[#2BE07A]">{c.name}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
      <CookieBanner />
    </div>
  );
}

/** En-tête de page : surtitre, H1 unique, introduction et actions. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-8 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-[420px] -z-10 hero-aurora opacity-70" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5 animate-fade-in-up">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2BE07A]/35 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2BE07A]">
            {eyebrow}
          </p>
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
            {title}
          </h1>
          {intro && <div className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">{intro}</div>}
          {children && <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/** Section titrée standard. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          {eyebrow && <p className="text-xs font-bold uppercase tracking-wider text-[#2BE07A] mb-2">{eyebrow}</p>}
          <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          {intro && <div className="mt-3 text-slate-300 leading-relaxed">{intro}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Bloc final d'appel à l'action. */
export function CtaBand({ title, text, children }: { title: string; text?: string; children: React.ReactNode }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#2BE07A]/25 bg-gradient-to-br from-[#0d2a1f] via-[#0a1a1f] to-[#0b1016] p-8 sm:p-12 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#2BE07A]/20 blur-[100px]" aria-hidden="true" />
          <h2 className="relative font-outfit text-2xl sm:text-4xl font-extrabold text-white">{title}</h2>
          {text && <p className="relative mt-3 text-slate-300 max-w-xl mx-auto">{text}</p>}
          <div className="relative mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">{children}</div>
        </div>
      </div>
    </section>
  );
}

export const linkBtn =
  'whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#2BE07A] border border-[#2BE07A]/60 hover:bg-[#2BE07A]/10 hover:border-[#2BE07A] transition-colors rounded-2xl';

export const card = 'rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl';
