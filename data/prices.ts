/**
 * PRIX DES ABONNEMENTS — repris du site actuel (même calcul que son script).
 * Pour changer un prix : modifier uniquement BASE_PRICES (prix pour 1 apparaat).
 * Les prix pour 2, 3 et 4 apparaten sont calculés comme sur le site actuel :
 *   Math.floor(base × apparaten × remise) + 0,99   (remise : 2 → 0,90 · 3 → 0,80 · 4 → 0,70)
 */
export type PackageType = 'Standard' | 'Premium';
export type DeviceCount = 1 | 2 | 3 | 4;
export type Months = 3 | 6 | 12;

export const BASE_PRICES: Record<PackageType, Record<Months, number>> = {
  Standard: { 3: 25.99, 6: 35.99, 12: 58.99 },
  Premium: { 3: 35.99, 6: 45.99, 12: 79.99 },
};

const MULTIPLIERS: Record<Exclude<DeviceCount, 1>, number> = { 2: 0.9, 3: 0.8, 4: 0.7 };

export function getPrice(pkg: PackageType, devices: DeviceCount, months: Months): number {
  const base = BASE_PRICES[pkg][months];
  if (devices === 1) return base;
  return Math.floor(base * devices * MULTIPLIERS[devices]) + 0.99;
}

/** Tableau complet, utilisé par la page et par les données structurées Google. */
export const PRICES: Record<PackageType, Record<DeviceCount, Record<Months, number | null>>> = {
  Standard: { 1: row('Standard', 1), 2: row('Standard', 2), 3: row('Standard', 3), 4: row('Standard', 4) },
  Premium: { 1: row('Premium', 1), 2: row('Premium', 2), 3: row('Premium', 3), 4: row('Premium', 4) },
};

function row(pkg: PackageType, d: DeviceCount): Record<Months, number> {
  return { 3: getPrice(pkg, d, 3), 6: getPrice(pkg, d, 6), 12: getPrice(pkg, d, 12) };
}

/**
 * Ce que Premium ajoute par rapport à Standard (affiché sur les cartes Premium).
 * Laisser vide tant que ce n'est pas défini : rien d'inventé ne s'affiche.
 */
export const PREMIUM_EXTRAS: string[] = [
  'Krachtigere Premium-server dan Standard',
  'Gemaakt voor drukke live-momenten, zoals sport',
];
