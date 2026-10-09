'use client';

import React from 'react';
import { getWhatsAppLink, handleWhatsAppClick } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

/** Bouton WhatsApp réutilisable : message pré-rempli + code de référence + suivi du clic. */
export function WhatsAppButton({
  message,
  refCode,
  page,
  plan = 'general',
  label = 'Bestel via WhatsApp',
  size = 'lg',
  pulse = false,
  className = '',
}: {
  message: string;
  refCode: string;
  page: string;
  plan?: string;
  label?: string;
  size?: 'md' | 'lg';
  pulse?: boolean;
  className?: string;
}) {
  const full = `${message} (ref: ${refCode})`;
  const params = { page, plan, ref: refCode };
  const sizes = size === 'lg' ? 'px-7 py-4 text-base rounded-2xl gap-3' : 'px-5 py-3 text-sm rounded-xl gap-2';
  return (
    <a
      href={getWhatsAppLink(full, params)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => handleWhatsAppClick(full, params, e)}
      className={`${pulse ? 'wa-pulse ' : ''}whitespace-nowrap inline-flex items-center justify-center font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group ${sizes} ${className}`}
    >
      <WhatsAppIcon variant="white" className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{label}</span>
    </a>
  );
}
