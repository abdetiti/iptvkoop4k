import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { VOORWAARDEN } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'De algemene voorwaarden voor de website en digitale diensten van IPTV Koop 4K.',
  alternates: { canonical: '/algemene-voorwaarden/' },
};

export default function Page() {
  return <LegalPage title="Algemene voorwaarden" updated="8 oktober 2026" body={VOORWAARDEN} />;
}
