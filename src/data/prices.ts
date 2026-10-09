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
