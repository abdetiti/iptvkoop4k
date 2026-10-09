import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Line-by-line masked rise for headlines. Each child line is revealed once. */
export const KineticLines: React.FC<{
  lines: React.ReactNode[];
  className?: string;
  as?: 'h1' | 'h2' | 'p';
  delay?: number;
  inView?: boolean;
}> = ({ lines, className = '', as = 'h2', delay = 0, inView = true }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      {...(inView ? { whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } } : { animate: 'show' })}
      variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', rotate: 2 },
              show: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

/** Soft fade-up reveal for any block. */
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string; y?: number }> = ({
  children,
  delay = 0,
  className = '',
  y = 28,
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};
