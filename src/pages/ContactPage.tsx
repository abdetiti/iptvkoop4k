import React, { useState } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { MessageSquare, HelpCircle, Wrench, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'algemeen' | 'keuze' | 'installatie' | 'storing'>('keuze');

  const topics = [
    {
      id: 'algemeen' as const,
      title: 'Algemene vraag',
      desc: 'Informatie over IPTV Koop 4K en onze zenderpakketten.',
      icon: MessageSquare,
      ref: 'CONTACT-algemeen',
      message: 'Hoi IPTV Koop 4K, ik heb een algemene vraag over jullie dienst. (ref: CONTACT-algemeen)',
    },
    {
      id: 'keuze' as const,
      title: 'Hulp bij mijn keuze',
      desc: 'Advies over looptijd (3, 6, 12 maanden), Standard vs Premium en aantal schermen.',
      icon: HelpCircle,
      ref: 'CONTACT-keuze',
      message: 'Hoi IPTV Koop 4K, ik wil graag advies over het juiste abonnement voor mijn apparaten. (ref: CONTACT-keuze)',
    },
    {
      id: 'installatie' as const,
      title: 'Ik krijg het niet ingesteld',
      desc: 'Hulp bij de installatie op je Smart TV, Firestick, Android TV of ander apparaat.',
      icon: Wrench,
      ref: 'CONTACT-installatie',
      message: 'Hoi IPTV Koop 4K, ik heb hulp nodig bij het instellen van mijn apparaat en mediaspeler. (ref: CONTACT-installatie)',
    },
    {
      id: 'storing' as const,
      title: 'Er werkt iets niet goed',
      desc: 'Vragen over buffering, inloggen, EPG-programmagids of een foutmelding.',
      icon: AlertTriangle,
      ref: 'CONTACT-storing',
      message: 'Hoi IPTV Koop 4K, er werkt iets niet goed (buffering/inloggen/EPG). Kunnen jullie meekijken? (ref: CONTACT-storing)',
    },
  ];

  const current = topics.find((t) => t.id === selectedTopic) || topics[0];

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Klantenservice
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            Contact met IPTV Koop 4K
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Jouw vraag direct naar de juiste helpdeskmedewerker. Kies hieronder jouw onderwerp en start direct een WhatsApp chat.
          </p>
        </div>

        {/* WhatsApp Subject Chooser */}
        <div className="mb-10">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Waar kunnen we je mee helpen?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedTopic === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedTopic(item.id)}
                  className={`p-5 rounded-2xl text-left transition-all border flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-white border-[#FF5A1F] ring-2 ring-[#FF5A1F]/20 shadow-md'
                      : 'bg-[#F6F5F1] border-slate-200 hover:bg-white text-slate-700'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#FFE9DF] text-[#FF5A1F]' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] text-[#0E1526] font-display mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Action Card */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#25D366] shadow-lg mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-1">
            Geselecteerd onderwerp
          </span>
          <h2 className="text-2xl font-bold text-[#0E1526] font-display mb-3">
            {current.title}
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 font-mono text-xs text-slate-700">
            {current.message}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <WhatsAppButton
              message={current.message}
              context={{ page: '/contact/', ref: current.ref }}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Start WhatsApp gesprek ({current.title})
            </WhatsAppButton>

            <span className="text-xs text-slate-500 text-center sm:text-right">
              Je controleert het bericht zelf in WhatsApp voordat je het verstuurt.
            </span>
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-5 rounded-2xl bg-[#F6F5F1] border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong>Veiligheidsherinnering:</strong> Deel nooit wachtwoorden, pincodes of bankgegevens via WhatsApp. Onze medewerkers zullen hier nooit om vragen.
          </p>
        </div>
      </div>
    </div>
  );
};
