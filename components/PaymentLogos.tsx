import React from 'react';

/**
 * Official payment method SVGs from /images/logos/paiement/
 * - ideal.svg
 * - paypal.svg
 * - visa.svg
 * - mastercard.svg
 * - apple-pay.svg
 * Rendered as clean payment badges 24-28px high (h-6 to h-7).
 */
export const PaymentLogos: React.FC<{ className?: string }> = ({ className = '' }) => {
  const paymentMethods = [
    { name: 'iDEAL', src: '/images/logos/paiement/ideal.svg' },
    { name: 'PayPal', src: '/images/logos/paiement/paypal.svg' },
    { name: 'Visa', src: '/images/logos/paiement/visa.svg' },
    { name: 'Mastercard', src: '/images/logos/paiement/mastercard.svg' },
    { name: 'Apple Pay', src: '/images/logos/paiement/apple-pay.svg' },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {paymentMethods.map((method) => (
        <div
          key={method.name}
          className="h-6 sm:h-7 px-1 py-0.5 rounded bg-white/95 border border-white/20 shadow-sm flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
          title={`Betaal veilig met ${method.name}`}
        >
          <img
            src={method.src}
            alt={method.name}
            className="h-full w-auto max-w-[44px] object-contain"
            loading="lazy"
            height={28}
          />
        </div>
      ))}
    </div>
  );
};
