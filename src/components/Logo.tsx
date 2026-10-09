import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
}

/**
 * Official Logo for IPTV Koop 4K (Concept 2: De Oranje Lus & K-Vector)
 * - Interlocking geometric ribbons forming a digital streaming chevron and a letter 'K' for Koop.
 * - Deep navy (#0E1526) pillar, Dutch orange (#FF5A1F) dynamic ribbon, and #2E5BFF precision node.
 * - Works crisp at 24px and large display formats.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', iconOnly = false }) => {
  const sizeMap = {
    sm: { h: 32, icon: 28, text: 'text-lg', badge: 'text-[9px] px-1 py-0.5' },
    md: { h: 42, icon: 34, text: 'text-2xl', badge: 'text-[10px] px-1.5 py-0.5' },
    lg: { h: 52, icon: 44, text: 'text-3xl', badge: 'text-xs px-2 py-1' },
    xl: { h: 68, icon: 60, text: 'text-4xl', badge: 'text-sm px-2.5 py-1' },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
        aria-hidden="true"
      >
        {/* Soft Tint Background Disc */}
        <rect width="48" height="48" rx="14" fill="#FFE9DF" />

        {/* Navy Vertical Pillar (left stem of K) */}
        <rect x="10" y="11" width="6" height="26" rx="3" fill="#0E1526" />

        {/* Top diagonal ribbon in Dutch Orange */}
        <path
          d="M17 24L32 12C33.5 10.8 35.8 11.8 35.8 13.8V17.5C35.8 18.5 35.2 19.5 34.2 20.2L24 27"
          fill="#FF5A1F"
        />

        {/* Bottom diagonal ribbon in Deep Navy */}
        <path
          d="M21 24.5L34.3 35.5C35.3 36.3 35.8 37.4 35.8 38.5V38.5C35.8 40.2 33.8 41.2 32.4 40.1L17 28"
          fill="#0E1526"
        />

        {/* Precision Node in Secondary Blue */}
        <circle cx="36" cy="24" r="3" fill="#2E5BFF" />
      </svg>

      {!iconOnly && (
        <div className="flex items-center leading-none tracking-tight font-display">
          <span className={`font-bold tracking-tight text-[#0E1526] ${current.text}`}>
            IPTV
          </span>
          <span className={`font-medium ml-1.5 text-[#0E1526] ${current.text}`}>
            KOOP
          </span>
          <div className="ml-1.5 flex flex-col justify-center">
            <span
              className={`font-bold rounded bg-[#FF5A1F] text-white tracking-wider ${current.badge}`}
            >
              4K
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
