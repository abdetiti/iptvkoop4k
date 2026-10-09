'use client';

import React, { useState } from 'react';
import { HelpCircle, Euro, Download, Wrench } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

const TOPICS = [
  { key: 'algemeen', icon: HelpCircle, title: 'Algemene vraag', text: 'Informatie over IPTV Koop 4K.', msg: 'Hoi IPTV Koop 4K, ik heb een algemene vraag.' },
  { key: 'abonnement', icon: Euro, title: 'Hulp bij mijn keuze', text: 'Looptijd, pakket en aantal apparaten.', msg: 'Hoi IPTV Koop 4K, ik wil hulp bij het kiezen van een abonnement.' },
  { key: 'installatie', icon: Download, title: 'Ik krijg het niet ingesteld', text: 'Apparaat, speler en installatiehulp.', msg: 'Hoi IPTV Koop 4K, ik heb hulp nodig bij de installatie. Mijn apparaat:' },
  { key: 'technisch', icon: Wrench, title: 'Er werkt iets niet goed', text: 'Buffering, inloggen, EPG of een foutmelding.', msg: 'Hoi IPTV Koop 4K, er werkt iets niet goed. Het probleem:' },
];

export function ContactChooser() {
  const [active, setActive] = useState(TOPICS[0].key);
  const t = TOPICS.find((x) => x.key === active)!;
  return (
    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
      <div className="grid sm:grid-cols-2 gap-3">
        {TOPICS.map(({ key, icon: Icon, title, text }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            aria-pressed={active === key}
            className={`text-left rounded-2xl border p-5 transition-colors ${active === key ? 'border-[#2BE07A]/60 bg-[#2BE07A]/10' : 'border-white/10 bg-white/[0.035] hover:border-white/25'}`}
          >
            <Icon className="w-6 h-6 text-[#2BE07A]" />
            <span className="mt-3 block font-bold text-white">{title}</span>
            <span className="mt-1 block text-sm text-slate-400">{text}</span>
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#0B141A] p-6 flex flex-col">
        <p className="text-xs font-bold uppercase tracking-wider text-[#2BE07A]">Je bericht</p>
        <div className="mt-3 rounded-xl rounded-tr-none bg-[#005C4B] px-4 py-3 text-sm text-white self-end max-w-[90%]">{t.msg}</div>
        <p className="mt-4 text-xs text-slate-400">Je bericht opent in WhatsApp. Je controleert het daar zelf voordat je het verstuurt. Deel geen wachtwoorden of betaalgegevens.</p>
        <div className="mt-auto pt-6">
          <WhatsAppButton page="contact" plan={t.key} refCode={`CONTACT-${t.key}`} message={t.msg} label="Open in WhatsApp" className="w-full" />
        </div>
      </div>
    </div>
  );
}
