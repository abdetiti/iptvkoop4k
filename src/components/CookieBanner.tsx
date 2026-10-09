import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('iptvkoop4k_cookie_consent');
    if (!stored) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('iptvkoop4k_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-[86px] md:bottom-5 right-3 left-3 md:left-auto md:right-5 md:max-w-sm z-50 flex items-center justify-between gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 text-slate-600 shadow-[0_20px_40px_-20px_rgba(14,21,38,.45)] backdrop-blur-xl">
      <div>
        <p className="text-[13px] leading-snug text-slate-600">
          We gebruiken cookies.{' '}
          <Link to="/cookiebeleid/" className="text-[#FF5A1F] underline">
            Meer info
          </Link>
          .
        </p>
      </div>
      <button
        type="button"
        onClick={handleAccept}
        className="fx-press min-h-[40px] shrink-0 rounded-full bg-[#0E1526] px-4 text-[13px] font-bold text-white"
      >
        Akkoord
      </button>
    </div>
  );
};
