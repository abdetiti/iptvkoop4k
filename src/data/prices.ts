/**
 * Pricing data for IPTV Koop 4K
 * Strictly based on iptv8knederland.com specifications.
 * Note: Always show the REAL TOTAL price of each package, never monthly calculations.
 */

export interface PricingPlan {
  tier: 'Standard' | 'Premium';
  devices: 1 | 2 | 3 | 4;
  months: 3 | 6 | 12;
  price: number;
}

export const BASE_PRICES = {
  Standard: {
    3: 25.99,
    6: 35.99,
    12: 58.99,
  },
  Premium: {
    3: 35.99,
    6: 45.99,
    12: 79.99,
  },
} as const;

export const MULTI_DEVICE_DISCOUNTS = {
  1: 1.0, // Standaardtarief
  2: 0.9, // 10% korting
  3: 0.8, // 20% korting
  4: 0.7, // 30% korting
} as const;

export const DEVICE_DISCOUNT_PERCENTAGES = {
  1: 0,
  2: 10,
  3: 20,
  4: 30,
} as const;

/**
 * Actie (comme sur iptv8knederland.com) : 12 maanden = 3 maanden gratis.
 * Pour l'arrêter : bonusMonths: 0 (bandeau, badges, textes et message WhatsApp disparaissent).
 */
export const PROMO = { months: 12, bonusMonths: 3 } as const;

export function promoActive(months: number): boolean {
  return PROMO.bonusMonths > 0 && months === PROMO.months;
}

export function calculatePrice(tier: 'Standard' | 'Premium', devices: 1 | 2 | 3 | 4, months: 3 | 6 | 12): number {
  const base = BASE_PRICES[tier][months];
  if (devices === 1) {
    return base;
  }
  const factor = MULTI_DEVICE_DISCOUNTS[devices];
  return Math.floor(base * devices * factor) + 0.99;
}

export function formatPrice(amount: number): string {
  return `€${amount.toFixed(2).replace('.', ',')}`;
}

export const TIER_DESCRIPTIONS = {
  Standard: {
    title: 'Standard',
    description: 'Toegang tot Nederlandse en internationale live tv-zenders en video on demand.',
  },
  Premium: {
    title: 'Premium',
    description: 'Een krachtigere server dan Standard.',
  },
} as const;

/**
 * Contenu de chaque pakket (chiffres du fournisseur, confirmés par l'utilisateur le 11/10/2026,
 * identiques à iptv8knederland.com).
 */
export const PACKAGE_CONTENT = {
  Standard: { channels: '50.000+', titles: '140.000+' },
  Premium: { channels: '80.000+', titles: '200.000+' },
} as const;

/** Inclus dans chaque pakket (mêmes faits que sur iptv8knederland.com). */
export const INCLUDED_IN_EVERY_PACKAGE: string[] = [
  'Nederlandse en internationale zenders',
  'Live sport, films en series',
  'Beeldkwaliteit van SD tot 4K',
  'Programmagids (EPG)',
  'Installatiehulp in het Nederlands via WhatsApp',
];

/** Avantage Premium. Règle de ce site : on ne parle pas de sport pour Premium. */
export const PREMIUM_EXTRAS: string[] = ['Krachtigere Premium-server dan Standard'];
