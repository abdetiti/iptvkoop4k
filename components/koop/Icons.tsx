import React from 'react';

export function Chevron({ color = '#fff' }: { color?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="m6.6 3.6 6 5.4-6 5.4" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m3.2 8.4 3 3 6.6-6.8" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WaIcon({ className = '' }: { className?: string }) {
  // Logo officiel fourni (public/images/logos/whatsapp/whatsapp-blanc.svg)
  return <img src="/images/logos/whatsapp/whatsapp-blanc.svg" alt="" aria-hidden="true" className={className} width={24} height={24} />;
}

export function TvIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="23" height="15" rx="2.6" stroke="#101c33" strokeWidth="1.8" />
      <path d="M9.5 24h9" stroke="#101c33" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
