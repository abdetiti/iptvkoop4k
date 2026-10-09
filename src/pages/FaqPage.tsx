import React, { useState } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const allFaqs = [
    {
      q: 'Hoe start ik met IPTV Koop 4K?',
      a: 'Kies een abonnement dat past bij je apparaten en kijkwensen. Na bevestiging ontvang je je accountgegevens. Volg daarna de handleiding voor jouw apparaat.',
    },
    {
      q: 'Hoe snel ontvang ik mijn toegang?',
      a: 'Je ontvangt je inloggegevens nadat je bestelling is bevestigd en verwerkt. Vraag bij het bestellen naar de verwachte activatietijd.',
    },
    {
      q: 'Hoe betaal ik?',
      a: 'Je ontvangt een veilige betaallink via WhatsApp. Betalen kan met iDEAL, PayPal, Visa, Mastercard of Apple Pay.',
    },
    {
      q: 'Welke apparaten worden ondersteund?',
      a: 'Smart TV (Samsung, LG), Android TV, Google TV, Fire TV Stick, MAG, iPhone, iPad, Android-telefoons, Windows en Mac.',
    },
    {
      q: 'Welke apps kan ik gebruiken?',
      a: 'Bijvoorbeeld IPTV Smarters, TiviMate of IBO Player, of een andere app met ondersteuning voor M3U of Xtream Codes.',
    },
    {
      q: 'Kan ik in HD en 4K kijken?',
      a: 'Ja, waar beschikbaar. De kwaliteit hangt af van de bron, je scherm, je speler en je internetverbinding.',
    },
    {
      q: 'Kan ik Nederlandse zenders bekijken?',
      a: 'Ja, de pakketten bevatten Nederlandse en internationale zenders. De actuele beschikbaarheid kan verschillen per pakket.',
    },
    {
      q: 'Welke abonnementen zijn er?',
      a: 'Standard en Premium, met een looptijd van 3, 6 of 12 maanden, voor 1 tot 4 apparaten.',
    },
    {
      q: 'Kan ik op meerdere schermen tegelijk kijken?',
      a: 'Ja, met een abonnement voor 2, 3 of 4 apparaten.',
    },
    {
      q: 'Kan ik mijn abonnement pauzeren?',
      a: 'Vraag vóór het bestellen of pauzeren beschikbaar is voor jouw pakket en welke voorwaarden daarbij horen.',
    },
    {
      q: 'Is er een proefperiode of geld-terug-regeling?',
      a: 'Vraag vóór je bestelling naar de actuele proefmogelijkheden. Annuleren kan zolang de dienst nog niet is geactiveerd; de voorwaarden staan in ons retourbeleid.',
    },
    {
      q: 'Wat als het beeld hapert?',
      a: 'Controleer je internet, gebruik bij voorkeur een kabel, test een andere zender en herstart de speler. Blijft het haperen? Stuur ons je apparaat en app via WhatsApp.',
    },
    {
      q: 'Inloggen lukt niet, wat nu?',
      a: 'Controleer de server-URL, gebruikersnaam en wachtwoord (let op hoofdletters) en of je account al actief is.',
    },
    {
      q: 'De programmagids (EPG) laadt niet.',
      a: 'Vernieuw de EPG in je app en controleer of je de juiste bron gebruikt. Lukt het niet, stuur ons dan je app en apparaat via WhatsApp.',
    },
    {
      q: 'Is IPTV legaal in Nederland?',
      a: 'IPTV is een techniek voor televisie via internet. Of een dienst rechtmatig wordt aangeboden, hangt af van de rechten op de content. IPTV Koop 4K is een erkend reseller.',
    },
  ];

  const filtered = allFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Hulp &amp; Informatie
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            Veelgestelde vragen
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Vind snel antwoord op al je vragen over abonnementen, installatie, beeldkwaliteit en betaalmethoden.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Zoek in veelgestelde vragen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-[#F6F5F1] rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
          />
        </div>

        {/* FAQ list */}
        <div className="space-y-3.5 mb-16">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen ? 'border-[#FF5A1F]/50 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[16px] text-[#0E1526] font-display"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#FF5A1F]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Not found / WhatsApp CTA */}
        <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Staat jouw vraag er niet tussen?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Onze Nederlandstalige supportmedewerkers beantwoorden al je vragen direct via WhatsApp.
          </p>
          <WhatsAppButton
            message="Hoi IPTV Koop 4K, ik heb een vraag die niet in de FAQ staat. (ref: FAQ-vraag)"
            context={{ page: '/veelgestelde-vragen/', ref: 'FAQ-vraag' }}
            variant="primary"
          >
            Stel je vraag via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
