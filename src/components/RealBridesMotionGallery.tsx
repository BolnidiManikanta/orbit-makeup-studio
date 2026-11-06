import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REAL_BRIDES_MARQUEE } from '../data/makeupData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface RealBridesMotionGalleryProps {
  onSelectBrideLook: (lookTitle: string) => void;
}

export const RealBridesMotionGallery: React.FC<RealBridesMotionGalleryProps> = ({
  onSelectBrideLook,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...REAL_BRIDES_MARQUEE, ...REAL_BRIDES_MARQUEE];

  return (
    <section className="py-14 sm:py-20 bg-[#F4EAE1] overflow-hidden relative">
      {/* Seamless transition connecting with Portfolio above */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FAF5F0] to-transparent pointer-events-none z-10" />
      {/* Seamless transition connecting with Booking below */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FAF4EF] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] text-[#7A5B52] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#A06C5D]" />
            <span>Real Brides In Motion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury text-[#251513]">
            Live Makeover Gallery
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6E534B] max-w-md">
          Continuous motion showcase of actual brides styled for Muhurtham, Sangeet, Receptions, and Catholic weddings. Hover to pause.
        </p>
      </div>

      {/* Infinite Motion Marquee Track */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge blur scrims */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4EAE1] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4EAE1] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: isPaused ? 0 : [0, -1800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-5 w-max"
        >
          {marqueeItems.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectBrideLook(`${item.name} (${item.style})`)}
              className="relative w-56 sm:w-64 h-80 rounded-3xl overflow-hidden shadow-md border-2 border-[#DEC9BB] bg-[#E9D9CC] shrink-0 cursor-pointer group"
            >
              <img
                src={item.image}
                alt={`${item.name} - ${item.style}`}
                className="w-full h-full object-cover object-top filter brightness-[1.02] group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Bottom-focused gradient scrim - keeps bride makeover and jewelry crystal clear */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#20100E]/95 via-[#20100E]/30 to-transparent pointer-events-none" />

              {/* Content Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white z-10">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F1D8C7] block">
                    {item.style}
                  </span>
                  <h3 className="text-base font-serif-luxury font-medium leading-tight">
                    Bride {item.name}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/90 text-[#2E1A17] flex items-center justify-center group-hover:bg-[#2E1A17] group-hover:text-white transition-all shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
