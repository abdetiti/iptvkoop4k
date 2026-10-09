import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ShieldCheck, HeartHandshake, Sparkles, Check } from 'lucide-react';

export const OverOnsPage: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            Over Ons
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            Over IPTV Koop 4K
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            IPTV dat helder en eenvoudig aanvoelt vanaf het allereerste contactmoment.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-[15px] text-slate-700 leading-relaxed mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#0E1526] font-display mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />
              IPTV dat eenvoudiger voelt
            </h2>
            <p className="mb-3">
              Bij IPTV Koop 4K draait alles om overzicht, duidelijke keuzes en hulp wanneer je die nodig hebt. Je bestelt via WhatsApp, in het Nederlands.
            </p>
            <p>
              Geen vage contactformulieren of ticketsystemen waarin je dagen moet wachten: bij ons heb je direct contact met een Nederlandstalige specialist via WhatsApp.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200">
            <h2 className="text-xl font-bold text-[#0E1526] font-display mb-3 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#2E5BFF]" />
              Onze Werkwijze
            </h2>
            <p className="mb-4">
              Wij geloven in transparantie vooraf. Daarom zie je bij ons exact wat je kiest:
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#FF5A1F] mt-1 shrink-0 stroke-[3]" />
                <span><strong>Duidelijke tarieven:</strong> Vaste totaalprijs per periode (12 maanden vanaf €58,99) zonder verborgen kosten.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#FF5A1F] mt-1 shrink-0 stroke-[3]" />
                <span><strong>Installatiehulp:</strong> We sturen uitgebreide handleidingen voor Smart TV, Firestick, Android TV, iOS en MAG.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#FF5A1F] mt-1 shrink-0 stroke-[3]" />
                <span><strong>Veilige betaling:</strong> Betaal uitsluitend via beveiligde betaallinks met o.a. iDEAL en PayPal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#FF5A1F] text-center shadow-md">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Wil je meer weten of direct bestellen?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Neem vrijblijvend contact op via WhatsApp. We staan voor je klaar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppButton
              message="Hoi IPTV Koop 4K, ik heb een vraag over jullie dienst. (ref: OVERONS-chat)"
              context={{ page: '/over-ons/', ref: 'OVERONS-chat' }}
              variant="primary"
            >
              Stel je vraag via WhatsApp
            </WhatsAppButton>
            <Link
              to="/iptv-abonnement/"
              className="min-h-[50px] inline-flex items-center justify-center px-6 rounded-xl font-bold text-[15px] bg-[#F6F5F1] text-[#0E1526] hover:bg-slate-200 transition-colors border border-slate-200"
            >
              Bekijk alle abonnementen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
