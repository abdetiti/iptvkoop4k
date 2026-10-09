'use client';

import React from 'react';
import { getWhatsAppLink, handleWhatsAppClick } from '../../utils/whatsapp';

/** Lien WhatsApp : message pré-rempli + (ref: CODE) + événement whatsapp_click. */
export function Wa({
  message,
  refCode,
  page = 'home',
  plan = 'general',
  className,
  children,
  ariaLabel,
}: {
  message: string;
  refCode: string;
  page?: string;
  plan?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  const full = `${message} (ref: ${refCode})`;
  const params = { page, plan, ref: refCode };
  return (
    <a
      href={getWhatsAppLink(full, params)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => handleWhatsAppClick(full, params, e)}
    >
      {children}
    </a>
  );
}
