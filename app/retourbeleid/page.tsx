import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { RETOUR } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Retour- en restitutiebeleid',
  description: 'Wanneer annuleren mogelijk is en hoe een terugbetaling wordt beoordeeld bij IPTV Koop 4K.',
  alternates: { canonical: '/retourbeleid/' },
};

export default function Page() {
  return <LegalPage title="Retour- en restitutiebeleid" updated="8 oktober 2026" body={RETOUR} />;
}
