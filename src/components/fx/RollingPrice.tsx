import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

/** Price that rolls digit by digit when it changes (e.g. €58,99 → €106,99). */
export const RollingPrice: React.FC<{ value: string; className?: string }> = ({ value, className = '' }) => {
  const chars = value.split('');
  return (
    <span className={`inline-flex tabular-nums ${className}`} aria-label={value}>
      {chars.map((c, i) => (
        <span key={`${i}-${chars.length}`} className="relative inline-block overflow-hidden" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={c + i}
              className="inline-block"
              initial={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, delay: i * 0.035, ease: [0.16, 1, 0.3, 1] }}
            >
              {c}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};
