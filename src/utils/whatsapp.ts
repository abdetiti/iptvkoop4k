import { PROMO, promoActive } from '../data/prices';
/**
 * WhatsApp utility & conversion tracking for IPTV Koop 4K
 * Strictly preserves the phone number (447428914603), pre-filled texts (ref code only in GA4, not in the message),
 * and gtag/dataLayer tracking from the reference implementation.
 */

export const WHATSAPP_PHONE_NUMBER = '447428914603';

/**
 * Builds the official WhatsApp click URL.
 * The phone number is NEVER rendered as raw text in the UI.
 */
/** Marque discrète du site à la fin du message (8K = 👍, Koop 4K = 🙂). */
export const SITE_MARK = ' 🙂';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message + SITE_MARK)}`;
}

export interface WhatsAppTrackingContext {
  page?: string;
  plan?: string;
  ref: string;
}

/**
 * Fires the required `whatsapp_click` analytics event and dynamically attaches
 * attribution if available.
 */
export function handleWhatsAppClick(
  message: string,
  context: WhatsAppTrackingContext,
  event?: React.MouseEvent<HTMLAnchorElement>
): void {
  const payload = {
    page: context.page || 'home',
    plan: context.plan || 'general',
    ref: context.ref || 'unspecified',
  };

  if (typeof (window as unknown as { gtag?: (event: string, action: string, data: unknown) => void }).gtag === 'function') {
    (window as unknown as { gtag: (event: string, action: string, data: unknown) => void }).gtag('event', 'whatsapp_click', payload);
  } else {
    const win = window as unknown as { dataLayer?: unknown[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event: 'whatsapp_click', ...payload });
  }
  void message;
  void event;
}

/**
 * Helper to generate pre-filled subscription order messages
 */
export function buildOrderMessage(tier: 'Standard' | 'Premium', months: number, devices: number, refCode: string): string {
  const deviceText = devices === 1 ? '1 apparaat' : `${devices} apparaten`;
  const promo = promoActive(months) ? ` (+${PROMO.bonusMonths} maanden gratis)` : '';
  return `Hoi, ik wil graag het ${tier}-abonnement van ${months} maanden${promo} voor ${deviceText}.`;
}
