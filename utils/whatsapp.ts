/**
 * WhatsApp : liens, suivi des clics et code de campagne.
 * - Chaque clic envoie l'événement GA4 `whatsapp_click` (page, plan, ref).
 * - Si le visiteur vient d'une annonce Google (gclid) ou d'une campagne (utm_source),
 *   un code court est ajouté à la fin du message pour relier la conversation au clic.
 */

export const WHATSAPP_PHONE = '447577339206';

export interface WhatsAppClickParams {
  page?: string;
  plan?: string;
  ref?: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SOURCE_KEY = 'koop4k_source';

/** Retient gclid / utm_source à l'arrivée sur le site (une fois par session). */
function getSourceCode(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const utm = params.get('utm_source');
    if (gclid) sessionStorage.setItem(SOURCE_KEY, `G-${gclid.slice(-6)}`);
    else if (utm) sessionStorage.setItem(SOURCE_KEY, `U-${utm.slice(0, 12)}`);
    return sessionStorage.getItem(SOURCE_KEY);
  } catch {
    return null;
  }
}

export function getWhatsAppLink(message: string, _params?: WhatsAppClickParams): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function trackWhatsAppClick(params: WhatsAppClickParams) {
  if (typeof window === 'undefined') return;
  const payload = {
    page: params.page || 'home',
    plan: params.plan || 'general',
    ref: params.ref || 'unspecified',
  };
  if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', payload);
  else (window.dataLayer = window.dataLayer || []).push({ event: 'whatsapp_click', ...payload });
}

/** À appeler dans onClick : suivi + ajout du code de campagne au message. */
export function handleWhatsAppClick(message: string, params: WhatsAppClickParams, e?: React.MouseEvent) {
  trackWhatsAppClick(params);
  const source = getSourceCode();
  if (source && e?.currentTarget instanceof HTMLAnchorElement) {
    e.currentTarget.href = getWhatsAppLink(`${message} [${source}]`);
  }
}

// Mémoriser la source dès le chargement de la page
if (typeof window !== 'undefined') getSourceCode();
