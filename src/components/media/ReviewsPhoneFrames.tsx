import React from 'react';

export const ReviewsPhoneFrames: React.FC = () => {
  const reviews = [
    { src: '/images/reviews/review-whatsapp-1.webp', id: '1' },
    { src: '/images/reviews/review-whatsapp-2.webp', id: '2' },
    { src: '/images/reviews/review-whatsapp-3.webp', id: '3' },
    { src: '/images/reviews/review-whatsapp-4.webp', id: '4' },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-black uppercase tracking-wider text-[#25D366] block mb-1">
          Klantervaringen
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0E1526] font-display">
          Echte WhatsApp Gesprekken
        </h3>
        <p className="text-slate-600 text-[15px] mt-1 max-w-xl mx-auto">
          Bekijk hoe onze klanten het bestelproces en de ondersteuning via WhatsApp ervaren.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900 rounded-[36px] p-3 shadow-xl border-4 border-slate-800 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Notch */}
              <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2"></div>
              {/* Screen */}
              <div className="rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200 aspect-[9/18] relative">
                <img
                  src={rev.src}
                  alt={`WhatsApp Klantreview ${rev.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
