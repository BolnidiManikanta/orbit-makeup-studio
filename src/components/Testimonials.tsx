import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/makeupData';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF5F0] relative overflow-hidden">
      {/* Decorative background satin blur */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#F2E3D8]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Navigation, and Real Traditional Bride Visual (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            
            <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A5B52] uppercase">
              Testimonials
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#251513] leading-tight">
              Loved by <br />
              <span className="font-editorial italic font-normal text-[#5A3833]">
                Our Clients
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#654A43] leading-relaxed">
              Read how over 500+ brides and party clients experienced customized luxury, peaceful mornings, and long-lasting confidence on their biggest days.
            </p>

            {/* Real Bride Being Styled - Animated Motion Frame from screenshot */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#DFC9BA] shadow-lg max-w-sm aspect-4/3 bg-[#EAE0D6] group">
              <motion.img
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                src="/real_brides/bride_traditional_styling.jpg"
                alt="Real traditional bride being styled in silk saree and gold jewelry"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251513]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-serif-luxury">
                Real Wedding Moments · On-Location Styling
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="w-12 h-12 rounded-full border border-[#D5C0B0] bg-[#FAF5F0] hover:bg-[#2E1A17] hover:text-white hover:border-[#2E1A17] flex items-center justify-center text-[#3D2520] transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="w-12 h-12 rounded-full border border-[#D5C0B0] bg-[#FAF5F0] hover:bg-[#2E1A17] hover:text-white hover:border-[#2E1A17] flex items-center justify-center text-[#3D2520] transition-colors shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Counter label */}
              <span className="text-xs font-mono text-[#846860] pl-2 tabular-nums">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>

          </motion.div>

          {/* Right Column: Premium Quote Card matching mockup (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF4EF]/95 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-[#E3D1C2] shadow-xl relative min-h-[340px] flex flex-col justify-between">
              
              {/* Huge stylized quotation mark */}
              <div className="text-5xl sm:text-6xl font-serif-luxury text-[#B98E73] leading-none mb-3 select-none">
                “
              </div>

              {/* AnimatePresence for smooth quote slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif-luxury font-normal text-[#251513] leading-relaxed">
                    {current.quote}
                  </blockquote>

                  {/* Author & Star Rating row with real photography avatar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E8DACF]">
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D5BDAE] shrink-0 bg-[#E8D7CA] shadow-sm">
                        <img
                          src={current.avatar}
                          alt={`${current.clientName} - Real bride`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-serif-luxury font-semibold text-[#251513]">
                          {current.clientName}
                        </h4>
                        <p className="text-xs text-[#7A5B53]">
                          {current.role} · {current.occasion}
                        </p>
                      </div>
                    </div>

                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-lg">
                          ★
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#2E1A17]' : 'w-2 bg-[#D9C4B5]'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
