import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DEVICE_GUIDES } from '../data/devices';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ArrowLeft, Check, HelpCircle } from 'lucide-react';

export const DeviceDetailPage: React.FC = () => {
  const { deviceSlug } = useParams<{ deviceSlug: string }>();
  const guide = deviceSlug ? DEVICE_GUIDES[deviceSlug] : null;

  if (!guide) {
    return <Navigate to="/apparaten/" replace />;
  }

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/apparaten/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#FF5A1F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Terug naar apparatenoverzicht
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5A1F] block mb-2">
            {guide.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0E1526] font-display tracking-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            {guide.intro}
          </p>
        </div>

        {/* Quick Facts Box */}
        <div className="p-5 rounded-2xl bg-[#F6F5F1] border border-slate-200 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-bold text-slate-500 block mb-1">Aanbevolen mediaspelers:</span>
            <span className="text-sm font-extrabold text-[#0E1526]">{guide.apps.join(', ')}</span>
          </div>
          <div>
            <span className="font-bold text-slate-500 block mb-1">Inlogmethode:</span>
            <span className="text-sm font-extrabold text-[#2E5BFF]">{guide.loginMethod}</span>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-[#0E1526] font-display mb-6">
            Stap-voor-stap installatie
          </h2>

          <div className="space-y-4">
            {guide.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#FFE9DF] text-[#FF5A1F] font-bold text-xs flex items-center justify-center font-display">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#0E1526] font-display">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed pl-10">
                  {step.instruction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-[#0E1526] font-display mb-6">
            Probleemoplossing &amp; Tips
          </h2>

          <div className="space-y-4">
            {guide.troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F6F5F1] border border-slate-200"
              >
                <h3 className="font-bold text-base text-[#0E1526] font-display mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FF5A1F]" />
                  {item.q}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Help CTA */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#FF5A1F] text-center shadow-md">
          <h3 className="text-2xl font-bold text-[#0E1526] font-display mb-2">
            Lukt de installatie op jouw {guide.shortTitle} niet?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
            Stuur ons via WhatsApp de naam van je speler en eventuele melding. Onze Nederlandstalige helpdesk kijkt direct met je mee.
          </p>
          <WhatsAppButton
            message={`Hoi IPTV Koop 4K, ik heb hulp nodig bij de installatie op mijn ${guide.shortTitle}. (ref: HANDLEIDING-${guide.slug})`}
            context={{ page: `/apparaten/${guide.slug}/`, ref: `HANDLEIDING-${guide.slug}` }}
            variant="primary"
          >
            Vraag hulp voor {guide.shortTitle}
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
