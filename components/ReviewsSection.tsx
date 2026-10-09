'use client';

import React, { useRef, useState } from 'react';
import { IMAGES } from '../images';
import { ChevronLeft, ChevronRight, Star, MessageSquare, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      key: 'review-whatsapp-1.jpg',
      label: 'Hulp bij films en series',
      customer: 'Klantgesprek via WhatsApp #1',
    },
    {
      key: 'review-whatsapp-2.jpg',
      label: 'Hulp bij installatie',
      customer: 'Klantgesprek via WhatsApp #2',
    },
    {
      key: 'review-whatsapp-3.jpg',
      label: 'Afspeellijst toevoegen',
      customer: 'Klantgesprek via WhatsApp #3',
    },
    {
      key: 'review-whatsapp-4.jpg',
      label: 'Werkt het? Ja.',
      customer: 'Klantgesprek via WhatsApp #4',
    },
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetChild = container.children[index] as HTMLElement;
      if (targetChild) {
        container.scrollTo({
          left: targetChild.offsetLeft - container.offsetLeft,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  };

  const nextReview = () => {
    const newIdx = (activeIndex + 1) % reviews.length;
    scrollToIndex(newIdx);
  };

  const prevReview = () => {
    const newIdx = (activeIndex - 1 + reviews.length) % reviews.length;
    scrollToIndex(newIdx);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f576] mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#00f576]" />
              <span>Een kijkje achter het kijkmoment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Echte gesprekken met onze klanten
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Blader door gedeelde gesprekken met onze klanten en bekijk de berichten zelf.
            </p>
          </div>

          {/* Trust Stars + Carousel controls */}
          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-200 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                aria-label="Vorige review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f576]/50 text-slate-200 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                aria-label="Volgende review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel of Phone Mockups */}
        <div
          ref={scrollContainerRef}
          onScroll={(e) => {
            const container = e.currentTarget;
            const scrollLeft = container.scrollLeft;
            const cardWidth = 310;
            const calculatedIdx = Math.round(scrollLeft / cardWidth);
            if (calculatedIdx !== activeIndex && calculatedIdx >= 0 && calculatedIdx < reviews.length) {
              setActiveIndex(calculatedIdx);
            }
          }}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((rev, idx) => {
            const imgData = IMAGES[rev.key];
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[270px] sm:w-[300px] snap-start flex flex-col group"
              >
                {/* Smartphone Frame */}
                <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/80 shadow-2xl shadow-black/80 hover:border-[#00f576]/60 transition-all duration-300">
                  {/* Speaker / camera notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20" />

                  {/* Phone screen with WhatsApp Screenshot */}
                  <div className="rounded-[28px] overflow-hidden bg-[#0b141a] relative aspect-[9/16] flex flex-col">
                    <img
                      src={imgData?.url}
                      alt={imgData?.alt || rev.customer}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fb = target.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />

                    {/* Fallback frame */}
                    <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-[#0e1620] text-slate-300">
                      <MessageSquare className="w-8 h-8 text-[#00f576] mb-2" />
                      <p className="text-xs font-semibold text-white">{rev.customer}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{rev.label}</p>
                    </div>

                    {/* Subtle gradient overlay at bottom of screen */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Subtitle / note under phone */}
                <div className="mt-3 text-center px-2">
                  <p className="text-xs font-bold text-white group-hover:text-[#00f576] transition-colors">
                    {rev.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {rev.customer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                activeIndex === i ? 'w-6 bg-[#00f576]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ga naar review ${i + 1}`}
            />
          ))}
        </div>

        {/* Outline link to Hoe het werkt */}
        <div className="mt-8 text-center">
          <a
            href="/hoe-bestellen/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#00f576]/60 text-[#00f576] hover:border-[#00f576] hover:bg-[#00f576]/10 text-xs sm:text-sm font-medium transition-all"
          >
            <span>Bekijk het bestelproces</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
