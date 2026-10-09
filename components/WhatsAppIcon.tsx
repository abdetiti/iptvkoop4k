import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  variant?: 'white' | 'color';
}

/**
 * Official WhatsApp SVG Icon from /images/logos/whatsapp/
 * - whatsapp-blanc.svg: in all solid green WhatsApp buttons
 * - whatsapp-couleur.svg: on dark background (links, contact, mobile bar)
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  variant = 'white',
}) => {
  const iconSrc =
    variant === 'color'
      ? '/images/logos/whatsapp/whatsapp-couleur.svg'
      : '/images/logos/whatsapp/whatsapp-blanc.svg';

  return (
    <img
      src={iconSrc}
      alt="WhatsApp"
      className={`object-contain pointer-events-none select-none ${className}`}
      loading="lazy"
      width={24}
      height={24}
    />
  );
};
