/**
 * Centralized image configuration for iptv8knederland.com
 * Source: MEDIAS.md (pack local in /images)
 * All paths start with "/" and point to local files.
 * Reviews (WhatsApp screenshots) are kept from online URLs as per MEDIAS.md rule 9.
 */

export interface ImageMeta {
  url: string;
  alt: string;
  title?: string;
  role?: string;
  width?: number;
  height?: number;
  isTodo?: boolean;
}

export const IMAGES: Record<string, ImageMeta> = {
  // --- Identiteit (Logo & Favicon propres créés pour le site) ---
  'logo.svg': {
    url: '/logo.svg',
    alt: 'IPTV Koop 4K logo',
    role: 'Logo principal vectoriel en-tête et pied de page',
  },
  'logo.png': {
    url: '/logo.png',
    alt: 'IPTV Koop 4K logo',
    role: 'Logo principal bitmap',
  },
  'icon.svg': {
    url: '/icon.svg',
    alt: 'IPTV Koop 4K symbool',
    role: 'Symbole du site vectoriel',
  },
  'icon.png': {
    url: '/icon.png',
    alt: 'IPTV Koop 4K icoon',
    role: 'Icône carrée 512x512',
  },

  // --- Hero & Fonds ---
  'hero/hero-voetbal-thuis.webp': {
    url: '/images/hero/hero-voetbal-thuis.webp',
    alt: 'Vrienden kijken samen live voetbal op tv met IPTV Koop 4K',
    role: 'Accueil → Hero (image principale plein écran, ne pas lazy-load)',
    width: 2000,
    height: 1601,
  },
  'hero/hero-stadion.webp': {
    url: '/images/hero/hero-stadion.webp',
    alt: 'Voetbalstadion vol sfeer',
    role: 'Accueil → fond de la section Live sport ; page Zenderlijst → section Sport',
    width: 1100,
    height: 733,
  },
  'hero/hero-zenders.webp': {
    url: '/images/hero/hero-zenders.webp',
    alt: 'Honderden tv-zenders en streamingdiensten',
    role: 'fond de la rangée de chiffres (32.000+ zenders)',
    width: 2000,
    height: 1116,
  },
  'fonds/bg-bioscoop.webp': {
    url: '/images/fonds/bg-bioscoop.webp',
    alt: 'Lege bioscoopzaal met rode stoelen',
    role: 'Accueil → fond de la rangée affiches (Een verhaal voor jou), avec voile sombre',
    width: 1000,
    height: 667,
  },
  'fonds/bg-smart-tv.webp': {
    url: '/images/fonds/bg-smart-tv.webp',
    alt: 'Smart TV met streaming-apps in de woonkamer',
    role: 'Accueil → section Apparaten',
    width: 736,
    height: 414,
  },
  'fonds/bg-zendermuur.webp': {
    url: '/images/fonds/bg-zendermuur.webp',
    alt: 'Kijkers voor een muur vol tv-zenders',
    role: 'Accueil → section Waarom IPTV / Hoe het werkt',
    width: 736,
    height: 483,
  },
  'fonds/bg-abonnement.webp': {
    url: '/images/fonds/bg-abonnement.webp',
    alt: 'Tv met IPTV-menu en afstandsbediening',
    role: 'Page /iptv-abonnement/ → Hero',
    width: 736,
    height: 1104,
  },
  'fonds/bg-apparaten.webp': {
    url: '/images/fonds/bg-apparaten.webp',
    alt: 'Gezin kijkt samen tv',
    role: 'Page /apparaten/ → Hero',
    width: 735,
    height: 588,
  },
  'fonds/bg-hoe-bestellen.webp': {
    url: '/images/fonds/bg-hoe-bestellen.webp',
    alt: 'Iemand bestelt IPTV op zijn telefoon voor de tv',
    role: 'Page /hoe-bestellen/ → Hero',
    width: 736,
    height: 1318,
  },
  'fonds/bg-familie.webp': {
    url: '/images/fonds/bg-familie.webp',
    alt: 'Familie kijkt samen naar series',
    role: 'Page /over-ons/ → Hero',
    width: 900,
    height: 720,
  },
  'fonds/bg-formule-1.webp': {
    url: '/images/fonds/bg-formule-1.webp',
    alt: "Formule 1-auto's van bovenaf",
    role: 'Fond vertical mobile de la section Sport (Formule 1)',
    width: 736,
    height: 1308,
  },
  'fonds/bg-faq.webp': {
    url: '/images/fonds/bg-faq.webp',
    alt: 'Live sportmoment',
    role: 'Page /veelgestelde-vragen/ → Hero',
    width: 736,
    height: 1104,
  },

  // --- Sport Affiches (Rangée Live sport, affiches verticales dans l'ordre strict) ---
  'sport-affiches/sport-oranje.webp': {
    url: '/images/sport-affiches/sport-oranje.webp',
    alt: 'Nederlands elftal live kijken',
    title: 'Nederlands elftal',
    width: 700,
    height: 875,
  },
  'sport-affiches/sport-champions-league-sterren.webp': {
    url: '/images/sport-affiches/sport-champions-league-sterren.webp',
    alt: 'Champions League sterren live',
    title: 'Champions League sterren',
    width: 700,
    height: 875,
  },
  'sport-affiches/sport-messi-ronaldo.webp': {
    url: '/images/sport-affiches/sport-messi-ronaldo.webp',
    alt: 'Messi en Ronaldo live kijken',
    title: 'Messi & Ronaldo',
    width: 700,
    height: 790,
  },
  'sport-affiches/sport-f1-coureurs.webp': {
    url: '/images/sport-affiches/sport-f1-coureurs.webp',
    alt: 'Formule 1 coureurs 2026',
    title: 'Formule 1 coureurs 2026',
    width: 700,
    height: 751,
  },
  'sport-affiches/sport-f1-poster.webp': {
    url: '/images/sport-affiches/sport-f1-poster.webp',
    alt: 'Formule 1 live kijken',
    title: 'Formule 1 Grand Prix',
    width: 700,
    height: 1513,
  },
  'sport-affiches/sport-nba.webp': {
    url: '/images/sport-affiches/sport-nba.webp',
    alt: 'NBA live kijken',
    title: 'NBA',
    width: 700,
    height: 875,
  },
  'sport-affiches/sport-f1-paysage.webp': {
    url: '/images/sport-affiches/sport-f1-paysage.webp',
    alt: 'Verstappen, Norris en Leclerc',
    title: 'Verstappen, Norris en Leclerc',
    width: 1195,
    height: 896,
  },

  // --- Sport Compétitions (Bandeau compétitions sous Live sport, Eredivisie en premier) ---
  'sport-competitions/comp-eredivisie.webp': {
    url: '/images/sport-competitions/comp-eredivisie.webp',
    alt: 'Eredivisie',
    title: 'Eredivisie',
    width: 500,
    height: 500,
  },
  'sport-competitions/comp-champions-league.webp': {
    url: '/images/sport-competitions/comp-champions-league.webp',
    alt: 'UEFA Champions League',
    title: 'UEFA Champions League',
    width: 500,
    height: 481,
  },
  'sport-competitions/comp-premier-league.webp': {
    url: '/images/sport-competitions/comp-premier-league.webp',
    alt: 'Premier League',
    title: 'Premier League',
    width: 500,
    height: 281,
  },
  'sport-competitions/comp-la-liga.webp': {
    url: '/images/sport-competitions/comp-la-liga.webp',
    alt: 'LaLiga',
    title: 'LaLiga',
    width: 500,
    height: 500,
  },
  'sport-competitions/comp-serie-a.webp': {
    url: '/images/sport-competitions/comp-serie-a.webp',
    alt: 'Serie A',
    title: 'Serie A',
    width: 500,
    height: 801,
  },
  'sport-competitions/comp-bundesliga.webp': {
    url: '/images/sport-competitions/comp-bundesliga.webp',
    alt: 'Bundesliga',
    title: 'Bundesliga',
    width: 500,
    height: 500,
  },
  'sport-competitions/comp-conference-league.webp': {
    url: '/images/sport-competitions/comp-conference-league.webp',
    alt: 'UEFA Conference League',
    title: 'UEFA Conference League',
    width: 500,
    height: 500,
  },
  'sport-competitions/comp-ligue-1.webp': {
    url: '/images/sport-competitions/comp-ligue-1.webp',
    alt: 'Ligue 1',
    title: 'Ligue 1',
    width: 500,
    height: 500,
  },
  'sport-competitions/comp-formule-1.webp': {
    url: '/images/sport-competitions/comp-formule-1.webp',
    alt: 'Formule 1',
    title: 'Formule 1',
    width: 500,
    height: 500,
  },

  // --- Logos Plateformes (logos/plateformes/) ---
  'logos/plateformes/netflix-couleur.svg': {
    url: '/images/logos/plateformes/netflix-couleur.svg',
    alt: 'Netflix',
    title: 'Netflix',
  },
  'logos/plateformes/apple-tv-blanc.svg': {
    url: '/images/logos/plateformes/apple-tv-blanc.svg',
    alt: 'Apple TV+',
    title: 'Apple TV+',
  },
  'logos/plateformes/paramount-plus-blanc.svg': {
    url: '/images/logos/plateformes/paramount-plus-blanc.svg',
    alt: 'Paramount+',
    title: 'Paramount+',
  },

  // --- Plateformes (plateformes/) ---
  'plateformes/hbo-max.webp': {
    url: '/images/plateformes/hbo-max.webp',
    alt: 'HBO Max',
    title: 'HBO Max',
    width: 500,
    height: 281,
  },
  'plateformes/disney-plus.webp': {
    url: '/images/plateformes/disney-plus.webp',
    alt: 'Disney+',
    title: 'Disney+',
    width: 500,
    height: 500,
  },
  'plateformes/prime-video.webp': {
    url: '/images/plateformes/prime-video.webp',
    alt: 'Prime Video',
    title: 'Prime Video',
    width: 500,
    height: 500,
  },
  'plateformes/apple-tv-plus.webp': {
    url: '/images/plateformes/apple-tv-plus.webp',
    alt: 'Apple TV+',
    title: 'Apple TV+',
    width: 500,
    height: 281,
  },
  'plateformes/paramount-plus.webp': {
    url: '/images/plateformes/paramount-plus.webp',
    alt: 'Paramount+',
    title: 'Paramount+',
    width: 500,
    height: 500,
  },
  'plateformes/peacock.webp': {
    url: '/images/plateformes/peacock.webp',
    alt: 'Peacock',
    title: 'Peacock',
    width: 500,
    height: 262,
  },
  'plateformes/hulu.webp': {
    url: '/images/plateformes/hulu.webp',
    alt: 'Hulu',
    title: 'Hulu',
    width: 500,
    height: 164,
  },
  'plateformes/pluto-tv.webp': {
    url: '/images/plateformes/pluto-tv.webp',
    alt: 'Pluto TV',
    title: 'Pluto TV',
    width: 500,
    height: 281,
  },
  'plateformes/trutv.webp': {
    url: '/images/plateformes/trutv.webp',
    alt: 'truTV',
    title: 'truTV',
    width: 500,
    height: 500,
  },

  // --- Affiches Films & Séries (films/ dans l'ordre 1 à 11) ---
  'films/poster-outer-banks.webp': {
    url: '/images/films/poster-outer-banks.webp',
    alt: 'Outer Banks',
    title: 'Outer Banks',
    width: 405,
    height: 600,
  },
  'films/poster-venom-the-last-dance.webp': {
    url: '/images/films/poster-venom-the-last-dance.webp',
    alt: 'Venom: The Last Dance',
    title: 'Venom: The Last Dance',
    width: 450,
    height: 600,
  },
  'films/poster-spider-man-brand-new-day.webp': {
    url: '/images/films/poster-spider-man-brand-new-day.webp',
    alt: 'Spider-Man: Brand New Day',
    title: 'Spider-Man: Brand New Day',
    width: 509,
    height: 755,
  },
  'films/poster-the-odyssey.webp': {
    url: '/images/films/poster-the-odyssey.webp',
    alt: 'The Odyssey',
    title: 'The Odyssey',
    width: 477,
    height: 755,
  },
  'films/poster-the-mentalist.webp': {
    url: '/images/films/poster-the-mentalist.webp',
    alt: 'The Mentalist',
    title: 'The Mentalist',
    width: 535,
    height: 727,
  },
  'films/poster-paw-patrol.webp': {
    url: '/images/films/poster-paw-patrol.webp',
    alt: 'PAW Patrol',
    title: 'PAW Patrol',
    width: 450,
    height: 600,
  },
  'films/poster-loki.webp': {
    url: '/images/films/poster-loki.webp',
    alt: 'Loki',
    title: 'Loki',
    width: 405,
    height: 600,
  },
  'films/poster-champions-league.webp': {
    url: '/images/films/poster-champions-league.webp',
    alt: 'UEFA Champions League',
    title: 'UEFA Champions League',
    width: 474,
    height: 842,
  },
  'films/poster-wk-2026.webp': {
    url: '/images/films/poster-wk-2026.webp',
    alt: 'FIFA World Cup 2026',
    title: 'FIFA World Cup 2026',
    width: 600,
    height: 850,
  },
  'films/poster-uefa-euro.webp': {
    url: '/images/films/poster-uefa-euro.webp',
    alt: 'UEFA EURO',
    title: 'UEFA EURO',
    width: 600,
    height: 1013,
  },
  'films/poster-formule-1.webp': {
    url: '/images/films/poster-formule-1.webp',
    alt: 'Formule 1',
    title: 'Formule 1',
    width: 530,
    height: 750,
  },

  // --- Logos WhatsApp ---
  'logos/whatsapp/whatsapp-blanc.svg': {
    url: '/images/logos/whatsapp/whatsapp-blanc.svg',
    alt: 'WhatsApp',
    title: 'WhatsApp',
  },
  'logos/whatsapp/whatsapp-couleur.svg': {
    url: '/images/logos/whatsapp/whatsapp-couleur.svg',
    alt: 'WhatsApp',
    title: 'WhatsApp',
  },

  // --- Logos Paiement ---
  'logos/paiement/ideal.svg': {
    url: '/images/logos/paiement/ideal.svg',
    alt: 'iDEAL',
    title: 'iDEAL',
  },
  'logos/paiement/paypal.svg': {
    url: '/images/logos/paiement/paypal.svg',
    alt: 'PayPal',
    title: 'PayPal',
  },
  'logos/paiement/visa.svg': {
    url: '/images/logos/paiement/visa.svg',
    alt: 'Visa',
    title: 'Visa',
  },
  'logos/paiement/mastercard.svg': {
    url: '/images/logos/paiement/mastercard.svg',
    alt: 'Mastercard',
    title: 'Mastercard',
  },
  'logos/paiement/apple-pay.svg': {
    url: '/images/logos/paiement/apple-pay.svg',
    alt: 'Apple Pay',
    title: 'Apple Pay',
  },

  // --- Avis clients (captures WhatsApp, non présentes dans le pack, conservées via URL distante) ---
  'review-whatsapp-1.jpg': {
    url: '/images/reviews/review-whatsapp-1.webp',
    alt: 'Klantgesprek via WhatsApp 1',
    role: 'Avis client WhatsApp 1',
  },
  'review-whatsapp-2.jpg': {
    url: '/images/reviews/review-whatsapp-2.webp',
    alt: 'Klantgesprek via WhatsApp 2',
    role: 'Avis client WhatsApp 2',
  },
  'review-whatsapp-3.jpg': {
    url: '/images/reviews/review-whatsapp-3.webp',
    alt: 'Klantgesprek via WhatsApp 3',
    role: 'Avis client WhatsApp 3',
  },
  'review-whatsapp-4.jpg': {
    url: '/images/reviews/review-whatsapp-4.webp',
    alt: 'Klantgesprek via WhatsApp 4',
    role: 'Avis client WhatsApp 4',
  },
};

/** Helper to get image meta by key */
export function getImage(key: keyof typeof IMAGES | string): ImageMeta {
  if (key in IMAGES) {
    return IMAGES[key];
  }
  return {
    url: key.startsWith('/') ? key : `/images/${key}`,
    alt: key,
  };
}
