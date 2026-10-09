/**
 * WhatsApp utility & conversion tracking for IPTV Koop 4K
 * Strictly preserves the phone number (447577339206), pre-filled texts with (ref: CODE),
 * and gtag/dataLayer tracking from the reference implementation.
 */

export const WHATSAPP_PHONE_NUMBER = '447577339206';
const ATTRIBUTION_STORAGE_KEY = 'iptvkoop4k_source';

/**
 * Capture source attribution (gclid or utm_source) from URL query
 */
export function getAttributionSource(): string | null {
  try {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const utmSource = params.get('utm_source');

    if (gclid) {
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, `G-${gclid.slice(-6)}`);
    } else if (utmSource) {
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, `U-${utmSource.slice(0, 12)}`);
    }

    return sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Builds the official WhatsApp click URL.
 * The phone number is NEVER rendered as raw text in the UI.
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
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

  const attribution = getAttributionSource();
  if (attribution && event?.currentTarget instanceof HTMLAnchorElement) {
    event.currentTarget.href = getWhatsAppUrl(`${message} [${attribution}]`);
  }
}

/**
 * Helper to generate pre-filled subscription order messages
 */
export function buildOrderMessage(tier: 'Standard' | 'Premium', months: number, devices: number, refCode: string): string {
  const deviceText = devices === 1 ? '1 apparaat' : `${devices} apparaten`;
  return `Hoi, ik wil graag het ${tier}-abonnement van ${months} maanden voor ${deviceText}. (ref: ${refCode})`;
}
