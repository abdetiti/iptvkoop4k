import type { MetadataRoute } from 'next';
import { DEVICES } from '../data/devices';

const BASE = 'https://www.iptvkoop4k.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page('/', 1, 'weekly'),
    page('/iptv-abonnement/', 0.9, 'weekly'),
    page('/zenderlijst/', 0.8),
    page('/apparaten/', 0.8),
    ...DEVICES.map((d) => page(`/apparaten/${d.slug}/`, 0.7)),
    page('/hoe-bestellen/', 0.7),
    page('/iptv-vs-kabel/', 0.6),
    page('/veelgestelde-vragen/', 0.6),
    page('/over-ons/', 0.4),
    page('/contact/', 0.4),
    page('/privacybeleid/', 0.1, 'yearly'),
    page('/cookiebeleid/', 0.1, 'yearly'),
    page('/algemene-voorwaarden/', 0.1, 'yearly'),
    page('/retourbeleid/', 0.1, 'yearly'),
  ];
}
