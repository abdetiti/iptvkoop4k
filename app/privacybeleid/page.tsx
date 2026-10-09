import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { PRIVACY } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Hoe IPTV Koop 4K omgaat met je persoonsgegevens: welke gegevens, waarom, met wie en jouw rechten.',
  alternates: { canonical: '/privacybeleid/' },
};

export default function Page() {
  return <LegalPage title="Privacybeleid" updated="8 oktober 2026" body={PRIVACY} />;
}
