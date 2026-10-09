import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AmbientBackground } from './AmbientBackground';

// Rendu simple : "## Titre", "### Sous-titre", "- élément", paragraphes, **gras**.
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong> : part
  );
}

function render(md: string) {
  const blocks = md.trim().split(/\n\s*\n/);
  return blocks.map((b, i) => {
    const lines = b.split('\n');
    if (b.startsWith('## ')) return <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-3">{b.slice(3)}</h2>;
    if (b.startsWith('### ')) return <h3 key={i} className="text-lg font-semibold text-white mt-6 mb-2">{b.slice(4)}</h3>;
    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={i} className="list-disc pl-5 space-y-1.5 my-3 marker:text-[#00f576]">
          {lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}
        </ul>
      );
    }
    return <p key={i} className="my-3">{inline(b)}</p>;
  });
}

export function LegalPage({ title, updated, body }: { title: string; updated: string; body: string }) {
  return (
    <div className="min-h-screen flex flex-col relative isolate overflow-x-hidden">
      <AmbientBackground />
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 text-slate-300 leading-relaxed text-[15px]">
          <nav aria-label="Kruimelpad" className="text-xs text-slate-400 mb-4">
            <a href="/" className="hover:text-[#00f576]">Home</a> <span className="mx-1">›</span> <span>{title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h1>
          <p className="text-xs text-slate-400 mt-2">Laatst bijgewerkt: {updated}</p>
          {render(body)}
        </article>
      </main>
      <Footer />
    </div>
  );
}
