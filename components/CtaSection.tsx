'use client';

import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CtaSection: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-cta)',
    { page: 'home', plan: 'general', ref: 'HOME-cta' }
  );

  return (
    <section className="py-20 sm:py-28 bg-[#0a0f16] border-t border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#00f576]" />
          <span>Start vandaag</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
          Klaar voor IPTV Koop 4K?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Geniet vandaag nog van 32.000+ zenders, 180.000+ films en series en al je favoriete live sport. Met hulp bij de installatie, in het Nederlands.
        </p>

        {/* Action buttons: Solid green for WhatsApp, Outline green for Bekijk abonnementen */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {/* Solid WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleWhatsAppClick(
                'Hoi IPTV Koop 4K, ik wil graag een abonnement. (ref: HOME-cta)',
                { page: 'home', plan: 'general', ref: 'HOME-cta' },
                e
              )
            }
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all duration-200 rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] group"
          >
            <WhatsAppIcon variant="white" className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Bestel via WhatsApp</span>
          </a>

          {/* Outline green button */}
          <a
            href="#abonnementen"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#00f576] border border-[#00f576]/60 hover:border-[#00f576] hover:bg-[#00f576]/10 rounded-xl transition-all duration-200"
          >
            <span>Bekijk abonnementen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00f576]" />
            <span>Prijzen vooraf duidelijk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00f576]" />
            <span>Hulp via WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00f576]" />
            <span>Veilig betalen met iDEAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
