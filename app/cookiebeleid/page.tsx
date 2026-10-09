import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { COOKIES } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Cookiebeleid',
  description: 'Welke cookies IPTV Koop 4K gebruikt, waarom, en hoe je je toestemming beheert.',
  alternates: { canonical: '/cookiebeleid/' },
};

export default function Page() {
  return <LegalPage title="Cookiebeleid" updated="8 oktober 2026" body={COOKIES} />;
}
