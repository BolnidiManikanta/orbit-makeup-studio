import React from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
}

const PETALS: Petal[] = [
  { id: 1, left: 12, size: 18, duration: 9, delay: 0, sway: 30 },
  { id: 2, left: 28, size: 14, duration: 11, delay: 2, sway: -25 },
  { id: 3, left: 45, size: 22, duration: 8, delay: 4, sway: 40 },
  { id: 4, left: 62, size: 16, duration: 10, delay: 1, sway: -35 },
  { id: 5, left: 78, size: 20, duration: 12, delay: 3, sway: 25 },
  { id: 6, left: 88, size: 15, duration: 9.5, delay: 5, sway: -20 },
  { id: 7, left: 35, size: 19, duration: 10.5, delay: 6, sway: 35 },
  { id: 8, left: 52, size: 13, duration: 8.5, delay: 7, sway: -30 },
];

export const FloatingPetals: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            top: '-5%',
            left: `${petal.left}%`,
            opacity: 0,
            rotate: 0,
            scale: 0.8,
          }}
          animate={{
            top: '105%',
            left: [`${petal.left}%`, `${petal.left + petal.sway / 10}%`, `${petal.left - petal.sway / 15}%`, `${petal.left}%`],
            opacity: [0, 0.85, 0.85, 0],
            rotate: [0, 90, 180, 270],
            scale: [0.8, 1, 0.9, 0.7],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
          className="absolute"
        >
          {/* Stylized Rose Petal SVG matching the petals in the user image */}
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            className="filter drop-shadow-xs"
          >
            <path
              d="M15 0C8 10 0 20 5 30C10 40 25 38 28 28C30 18 22 10 15 0Z"
              fill="url(#petalGradient)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5A3B7" />
                <stop offset="50%" stopColor="#E27D95" />
                <stop offset="100%" stopColor="#C95973" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
