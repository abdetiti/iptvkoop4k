/**
 * Home page — IPTV Koop 4K (www.iptvkoop4k.nl)
 * Design "Future Light": living light background, floating 3D screen, kinetic type,
 * smooth coverflow carousels, interactive price studio. Total prices only.
 */
import React from 'react';
import { Hero } from '../components/home/Hero';
import { PricingStudio } from '../components/home/PricingStudio';
import {
  CompetitionStrip,
  Devices,
  Faq,
  FilmsAndPlatforms,
  FinalCta,
  LiveSport,
  Reviews,
  Steps,
} from '../components/home/HomeSections';

export const HomePage: React.FC = () => (
  <div className="w-full">
    <Hero />
    <CompetitionStrip />
    <LiveSport />
    <PricingStudio />
    <FilmsAndPlatforms />
    <Steps />
    <Reviews />
    <Devices />
    <Faq />
    <FinalCta />
  </div>
);
