import React from 'react';

export type Faq = { q: string; a: string };

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

/** Liste de questions dépliables, sans JavaScript (balises details/summary). */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3 max-w-3xl">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0} className="group rounded-2xl border border-white/10 bg-white/[0.035] open:border-[#2BE07A]/30 transition-colors">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span className="grid place-items-center w-7 h-7 shrink-0 rounded-full border border-white/15 text-[#2BE07A] transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="px-5 pb-5 -mt-1 text-slate-300 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
