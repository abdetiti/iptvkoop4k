import '@fontsource-variable/inter';
import './koop.css';
import { JsonLd } from '@/components/JsonLd';
import { CookieBanner } from '@/components/CookieBanner';
import { Header } from '@/components/koop/Header';
import { Hero } from '@/components/koop/Hero';
import { PRE_SCRIPT } from '@/components/koop/HeroMotion';
import { Pricing } from '@/components/koop/Pricing';
import { Categories, Devices, Steps, Reviews, Why, Faq, FinalCta, Footer } from '@/components/koop/Sections';
import { RevealObserver, StickyBar } from '@/components/koop/Client';

export default function HomePage() {
  return (
    <div className="k-root">
      {/* Cache les éléments animés avant le premier rendu (rien ne se passe si « réduire les animations ») */}
      <script dangerouslySetInnerHTML={{ __html: PRE_SCRIPT }} />
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Categories />
        <Devices />
        <Steps />
        <Reviews />
        <Why />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
      <RevealObserver />
      <CookieBanner />
    </div>
  );
}
