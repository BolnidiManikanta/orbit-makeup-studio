import React from 'react';
import { MessageCircleHeart, Palette, Sparkles, CheckCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/makeupData';
import { motion } from 'motion/react';

export const Process: React.FC = () => {
  const icons = [
    <MessageCircleHeart key="1" className="w-6 h-6 text-[#4A2D26]" />,
    <Palette key="2" className="w-6 h-6 text-[#4A2D26]" />,
    <Sparkles key="3" className="w-6 h-6 text-[#4A2D26]" />,
    <CheckCheck key="4" className="w-6 h-6 text-[#4A2D26]" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6EDE5] border-t border-[#EADBCE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block matching mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20"
        >
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A5B52] uppercase">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#251513] leading-tight">
            A Seamless <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-[#5A3833]">
              Beauty Experience
            </span>
          </h2>
        </motion.div>

        {/* 4 Connected Step Nodes matching mockup */}
        <div className="relative">
          
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-[#DCC6B5] via-[#C8AFA0] to-[#DCC6B5] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Icon Node */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-full bg-[#FAF5F0] border-2 border-[#D6BFB0] shadow-sm flex items-center justify-center mb-5 group-hover:border-[#2E1A17] transition-colors relative cursor-default"
                >
                  {icons[idx]}
                </motion.div>

                {/* Step number label */}
                <span className="text-xs font-mono font-semibold tracking-wider text-[#8A6A61] mb-1">
                  {step.step}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-serif-luxury font-medium text-[#251513] mb-2 group-hover:text-[#5A3833] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#664D46] leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
