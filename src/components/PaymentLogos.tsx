import React from 'react';

interface PaymentLogosProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const PaymentLogos: React.FC<PaymentLogosProps> = ({ className = '', size = 'sm' }) => {
  const heightClass = size === 'sm' ? 'h-5' : 'h-6';

  const paymentMethods = [
    { src: '/images/logos/paiement/ideal.svg', alt: 'iDEAL' },
    { src: '/images/logos/paiement/paypal.svg', alt: 'PayPal' },
    { src: '/images/logos/paiement/visa.svg', alt: 'Visa' },
    { src: '/images/logos/paiement/mastercard.svg', alt: 'Mastercard' },
    { src: '/images/logos/paiement/apple-pay.svg', alt: 'Apple Pay' },
  ];

  return (
    <div className={`flex items-center justify-center flex-wrap gap-2.5 pt-2 ${className}`}>
      {paymentMethods.map((method) => (
        <img
          key={method.alt}
          src={method.src}
          alt={method.alt}
          className={`${heightClass} object-contain opacity-80 hover:opacity-100 transition-opacity`}
          loading="lazy"
        />
      ))}
    </div>
  );
};
