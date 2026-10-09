import React from 'react';
import { handleWhatsAppClick, getWhatsAppUrl, WhatsAppTrackingContext } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  message: string;
  context: WhatsAppTrackingContext;
  children?: React.ReactNode;
  variant?: 'primary' | 'fixed-mobile' | 'compact' | 'pill';
  className?: string;
  fullWidth?: boolean;
}

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-5 h-5', size = 20 }) => (
  <img
    src="/images/logos/whatsapp/whatsapp-blanc.svg"
    alt="WhatsApp"
    width={size}
    height={size}
    className={`object-contain pointer-events-none select-none shrink-0 ${className}`}
    loading="lazy"
  />
);

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  context,
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
}) => {
  const url = getWhatsAppUrl(message);

  const baseStyles =
    'fx-press fx-shine relative inline-flex items-center justify-center font-bold select-none text-white tracking-[-0.01em] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(37,211,102,.65)]';

  if (variant === 'fixed-mobile') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleWhatsAppClick(message, context, e)}
        className={`${baseStyles} min-h-[52px] bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/30 rounded-full px-5 text-[16px] gap-2.5 w-full ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span>{children || 'Bestel via WhatsApp'}</span>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleWhatsAppClick(message, context, e)}
        className={`${baseStyles} min-h-[48px] bg-[#25D366] hover:bg-[#20ba59] rounded-full px-4 text-[15px] gap-2 shadow-sm ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span>{children || 'Bestel via WhatsApp'}</span>
      </a>
    );
  }

  // Primary
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => handleWhatsAppClick(message, context, e)}
      className={`${baseStyles} min-h-[50px] bg-[#25D366] hover:bg-[#20ba59] hover:shadow-md hover:shadow-[#25D366]/25 rounded-full px-6 text-[16px] gap-2.5 ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span>{children || 'Bestel via WhatsApp'}</span>
    </a>
  );
};
