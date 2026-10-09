import React from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { PRICES } from '../data/prices';

const BASE = 'https://www.iptvkoop4k.nl';

export const JsonLd: React.FC = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IPTV Koop 4K',
    url: `${BASE}/`,
    inLanguage: 'nl-NL',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPTV Koop 4K',
    url: `${BASE}/`,
    logo: `${BASE}/icon-512.png`,
  };

  // Offres : uniquement les prix réellement communiqués (voir data/prices.ts)
  const offers = (['Standard', 'Premium'] as const).flatMap((pkg) =>
    ([1, 2, 3, 4] as const).flatMap((dev) =>
      ([3, 6, 12] as const).flatMap((m) => {
        const price = PRICES[pkg][dev][m];
        return price === null
          ? []
          : [{
              '@type': 'Offer',
              name: `${pkg} · ${m} maanden · ${dev} ${dev === 1 ? 'apparaat' : 'apparaten'}`,
              price: price.toFixed(2),
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${BASE}/#abonnementen`,
            }];
      })
    )
  );

  const productSchema = offers.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'IPTV Koop 4K abonnement',
        description: 'IPTV abonnement voor live tv, sport, films en series op 1 tot 4 apparaten, tot 4K.',
        brand: { '@type': 'Brand', name: 'IPTV Koop 4K' },
        image: `${BASE}/og-image.jpg`,
        offers,
      }
    : null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const schemas = [websiteSchema, organizationSchema, faqSchema, productSchema].filter(Boolean);

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
};
