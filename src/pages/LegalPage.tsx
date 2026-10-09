import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LEGAL_DOCS } from '../data/legal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ArrowLeft, Shield } from 'lucide-react';

interface LegalPageProps {
  documentSlug?: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ documentSlug }) => {
  const location = useLocation();
  // slug from prop or path (e.g. /privacybeleid/ -> privacybeleid)
  const pathSlug = location.pathname.replace(/^\/|\/$/g, '');
  const activeSlug = documentSlug || pathSlug;
  const doc = LEGAL_DOCS[activeSlug] || LEGAL_DOCS['algemene-voorwaarden'];

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#FF5A1F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Terug naar home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <span className="text-xs font-black uppercase tracking-wider text-[#2E5BFF] block mb-2">
            Juridische Informatie
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-3">
            {doc.title}
          </h1>
          <p className="text-xs text-slate-500 mb-6">
            Laatst bijgewerkt: {doc.lastUpdated} · IPTV Koop 4K (www.iptvkoop4k.nl)
          </p>
          <p className="text-[16px] text-slate-700 leading-relaxed bg-[#F6F5F1] p-6 rounded-2xl border border-slate-200">
            {doc.intro}
          </p>
        </div>

        {/* Document Sections */}
        <div className="space-y-8 mb-16">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-[#0E1526] font-display">
                {section.title}
              </h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-[15px] text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact info for legal */}
        <div className="p-8 rounded-3xl bg-[#F6F5F1] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-[#0E1526] text-base mb-1 font-display">
              Vragen over onze voorwaarden of beleid?
            </h3>
            <p className="text-xs text-slate-600">
              Neem gerust contact op met onze klantenservice via WhatsApp.
            </p>
          </div>
          <WhatsAppButton
            message={`Hoi IPTV Koop 4K, ik heb een vraag over ${doc.title}. (ref: JURIDISCH-${doc.slug})`}
            context={{ page: location.pathname, ref: `JURIDISCH-${doc.slug}` }}
            variant="compact"
          >
            Vraag via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
