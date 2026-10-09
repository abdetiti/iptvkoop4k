import React from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PaymentLogos } from '../components/PaymentLogos';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const HoeBestellenPage: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Bestelprocedure
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            Hoe bestellen? IPTV in 4 stappen via WhatsApp
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Bij IPTV Koop 4K verloopt het bestelproces persoonlijk, snel en veilig via WhatsApp. Binnen 4 stappen heb je alles geregeld.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="space-y-6 mb-16">
          {/* Step 1 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F] font-bold text-lg flex items-center justify-center shrink-0 font-display">
              01
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0E1526] font-display mb-2">
                Stap 1: Kies je gewenste pakket
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
                Kies tussen het <strong>Standard</strong> of <strong>Premium</strong> abonnement (Premium draait op een krachtigere server). Selecteer een looptijd van 3, 6 of 12 maanden en het aantal gelijktijdige apparaten (1 t/m 4).
              </p>
              <Link to="/iptv-abonnement/" className="text-xs font-bold text-[#FF5A1F] hover:underline inline-flex items-center gap-1">
                Bekijk onze tarieven (12 maanden vanaf €58,99) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F] font-bold text-lg flex items-center justify-center shrink-0 font-display">
              02
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0E1526] font-display mb-2">
                Stap 2: Stuur je aanvraag via WhatsApp
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Klik op een van de bestelknoppen op onze website. Jouw keuze staat direct vooraf ingevuld in de chat met een unieke referentiecode. Controleer het bericht en verstuur het.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F] font-bold text-lg flex items-center justify-center shrink-0 font-display">
              03
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0E1526] font-display mb-2">
                Stap 3: Veilig betalen via de betaallink
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
                In het WhatsApp-gesprek ontvang je een beveiligde betaallink. Je rekent af via vertrouwde betaalmethoden zoals iDEAL, PayPal, Visa, Mastercard of Apple Pay.
              </p>
              <PaymentLogos className="justify-start pt-1" size="sm" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE9DF] text-[#FF5A1F] font-bold text-lg flex items-center justify-center shrink-0 font-display">
              04
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0E1526] font-display mb-2">
                Stap 4: Ontvang je inloggegevens en begin met kijken
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
                Nadat je bestelling is bevestigd en verwerkt, sturen we je server-URL, gebruikersnaam en wachtwoord via WhatsApp. Je voert deze gegevens in jouw speler (zoals TiviMate of IPTV Smarters) in en de zenders laden direct.
              </p>
              <p className="text-xs text-slate-500">
                Vraag bij het bestellen gerust naar de verwachte activatietijd.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ box for Ordering */}
        <div className="bg-[#F6F5F1] p-8 rounded-3xl border border-slate-200 mb-12 space-y-6">
          <h3 className="text-xl font-bold text-[#0E1526] font-display">
            Belangrijke bestelinformatie
          </h3>

          <div className="space-y-4 text-[15px] text-slate-700">
            <div>
              <h4 className="font-bold text-[#0E1526]">Hoe snel ontvang ik mijn toegang?</h4>
              <p className="text-slate-600 mt-1">
                Je ontvangt je inloggegevens nadat je bestelling is bevestigd en verwerkt. Vraag bij het bestellen naar de verwachte activatietijd.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0E1526]">Kan ik annuleren?</h4>
              <p className="text-slate-600 mt-1">
                Ja, zolang de digitale dienst nog niet is geleverd of geactiveerd. Neem zo snel mogelijk contact met ons op via WhatsApp. Alle voorwaarden staan in ons{' '}
                <Link to="/retourbeleid/" className="text-[#FF5A1F] underline">
                  retourbeleid
                </Link>
                .
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0E1526]">Wat als de installatie niet lukt?</h4>
              <p className="text-slate-600 mt-1">
                Stuur ons je apparaatmodel, de naam van je app en eventuele foutmelding via WhatsApp. Dan helpen we je stap voor stap.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#FF5A1F] text-center shadow-lg">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Klaar om te bestellen?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Druk op de knop: je bericht staat direct voor je klaar in WhatsApp.
          </p>
          <WhatsAppButton
            message="Hoi IPTV Koop 4K, ik wil graag bestellen in 4 stappen. (ref: BESTELLEN-cta)"
            context={{ page: '/hoe-bestellen/', ref: 'BESTELLEN-cta' }}
            variant="primary"
          >
            Bestel direct via WhatsApp
          </WhatsAppButton>
          <PaymentLogos size="sm" />
        </div>
      </div>
    </div>
  );
};
