import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
}

/**
 * Concept 1: The Modern Geometric Screen & Signal (De Nederlandse Beeldbuis)
 * - Concept: A solid rounded 16:9 monitor frame in deep navy (#0E1526) framing
 *   a geometric forward play blade in Dutch Orange (#FF5A1F) with a precision '4K' stamp.
 * - Feel: Confident, crisp retail tech, highly readable down to a 16px favicon.
 */
export const LogoConcept1: React.FC<LogoProps> = ({ className = '', size = 'md', iconOnly = false }) => {
  const sizeMap = {
    sm: { h: 32, icon: 28, text: 'text-lg', badge: 'text-[9px] px-1 py-0.5' },
    md: { h: 42, icon: 36, text: 'text-2xl', badge: 'text-[10px] px-1.5 py-0.5' },
    lg: { h: 56, icon: 48, text: 'text-3xl', badge: 'text-xs px-2 py-1' },
    xl: { h: 72, icon: 64, text: 'text-4xl', badge: 'text-sm px-2.5 py-1' },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none font-sans ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer TV Bezel */}
        <rect
          x="3"
          y="6"
          width="42"
          height="32"
          rx="8"
          fill="#0E1526"
        />
        {/* Screen Glare Accent Line */}
        <path
          d="M10 11H26"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
        {/* Dutch Orange Play / Signal Core */}
        <path
          d="M18 15.5L32 22L18 28.5V15.5Z"
          fill="#FF5A1F"
        />
        {/* Dynamic Signal Arc in Secondary Blue */}
        <circle cx="37" cy="14" r="2.5" fill="#2E5BFF" />
        {/* Monitor Base Stand */}
        <path
          d="M19 40H29M24 38V41"
          stroke="#0E1526"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {!iconOnly && (
        <div className="flex items-center leading-none tracking-tight">
          <span className={`font-extrabold text-[#0E1526] tracking-tight ${current.text}`}>
            IPTV
          </span>
          <span className={`font-black text-[#FF5A1F] ml-1 tracking-tight ${current.text}`}>
            KOOP
          </span>
          <span
            className={`ml-1.5 font-black uppercase rounded-md bg-[#0E1526] text-white border border-[#FF5A1F]/30 tracking-wider ${current.badge}`}
          >
            4K
          </span>
        </div>
      )}
    </div>
  );
};
