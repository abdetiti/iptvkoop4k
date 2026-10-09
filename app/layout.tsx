import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/outfit';
import './globals.css';


// IDs propres à ce site : à créer puis à mettre dans les variables Vercel.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || '';
const GSC_TOKEN = process.env.NEXT_PUBLIC_GSC_TOKEN || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iptvkoop4k.nl'),
  title: {
    default: 'IPTV kopen | Live tv, sport en films tot 4K – IPTV Koop 4K',
    template: '%s | IPTV Koop 4K',
  },
  description:
    'IPTV kopen zonder gedoe: kies Standard of Premium, 3, 6 of 12 maanden, voor 1 tot 4 apparaten. Tot 4K, bestellen en hulp via WhatsApp. Vanaf €4,92 per maand.',
  applicationName: 'IPTV Koop 4K',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'IPTV Koop 4K',
    title: 'IPTV kopen | Live tv, sport en films tot 4K – IPTV Koop 4K',
    description:
      'Live tv, sport, films en series op 1 tot 4 apparaten, tot 4K. Bestellen en installatiehulp via WhatsApp. Vanaf €4,92 per maand.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'IPTV Koop 4K' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  ...(GSC_TOKEN ? { verification: { google: GSC_TOKEN } } : {}),
};

export const viewport: Viewport = { themeColor: '#E9EFF6', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className="bg-[#05080B] text-slate-100 antialiased">
        {/* Google Consent Mode v2 : tout refusé par défaut, mis à jour par la bannière cookies */}
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
            analytics_storage: 'denied', wait_for_update: 500
          });
          try {
            if (localStorage.getItem('koop4k_cookie_consent') === 'accepted') {
              gtag('consent', 'update', {
                ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
              });
            }
          } catch (e) {}
        `}</Script>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`gtag('js', new Date()); gtag('config', '${GA_ID}');${ADS_ID ? ` gtag('config', '${ADS_ID}');` : ''}`}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
