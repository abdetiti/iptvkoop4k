import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
}

/**
 * Concept 3: The Architectural Monogram (4K Precision Aperture)
 * - Concept: 4 geometric quadrant tiles symbolizing 4K pixel fidelity and multi-device streaming.
 *   Top-right quadrant is vivid Dutch Orange (#FF5A1F), other quadrants in Deep Navy (#0E1526).
 *   Clean Swiss/Dutch typographical symmetry with strict horizontal discipline.
 * - Feel: Premium, architectural, rock-solid consumer trust.
 */
export const LogoConcept3: React.FC<LogoProps> = ({ className = '', size = 'md', iconOnly = false }) => {
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
        {/* Quadrant 1 (Top-Left): Deep Navy with rounded top-left corner */}
        <rect x="6" y="6" width="16" height="16" rx="4" fill="#0E1526" />
        {/* Quadrant 2 (Top-Right): Dutch Orange with energetic rounded top-right corner */}
        <rect x="26" y="6" width="16" height="16" rx="6" fill="#FF5A1F" />
        {/* Play indicator inside orange square */}
        <path d="M32 11L37 14L32 17V11Z" fill="white" />

        {/* Quadrant 3 (Bottom-Left): Deep Navy */}
        <rect x="6" y="26" width="16" height="16" rx="4" fill="#0E1526" />

        {/* Quadrant 4 (Bottom-Right): Deep Navy with blue accent dot */}
        <rect x="26" y="26" width="16" height="16" rx="4" fill="#0E1526" />
        <circle cx="34" cy="34" r="3" fill="#2E5BFF" />
      </svg>

      {!iconOnly && (
        <div className="flex items-baseline tracking-tight">
          <span className={`font-black text-[#0E1526] tracking-tighter ${current.text}`}>
            IPTV
          </span>
          <span className={`font-light text-[#0E1526] mx-1 tracking-normal ${current.text}`}>
            KOOP
          </span>
          <span className="font-extrabold text-[#FF5A1F] text-sm tracking-widest uppercase ml-0.5 bg-[#FFE9DF] px-1.5 py-0.5 rounded">
            4K
          </span>
        </div>
      )}
    </div>
  );
};
