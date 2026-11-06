import React from 'react';
import { ArrowRight, Play, ChevronDown, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenShowreel }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#180D0B]">
      
      {/* =========================================================================
          DESKTOP VIEW: EXACT PIXEL-PERFECT HERO MATCHING USER IMAGE (image_445e564e.png)
          ========================================================================= */}
      <div className="hidden md:block relative w-full aspect-1672/941 min-h-[680px] bg-[#180D0B] overflow-hidden select-none">
        
        {/* The Exact Background Render from image_445e564e.png */}
        <img
          src="/images/hero_banner.jpg"
          alt="Enhancing Your Natural Beauty - Makeup by Aarya"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Animated Floating Rose Petals in Motion */}
        <FloatingPetals />

        {/* Subtle Golden Arc Breathing Shimmer on the Bride Halo */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] right-[28%] w-80 h-80 rounded-full bg-gradient-to-tr from-[#E5C7A9]/30 to-transparent blur-2xl pointer-events-none"
        />

        {/* Animated Concentric Pulsing Ring on the "Watch Showreel" Play Button */}
        <div
          className="absolute top-[61.5%] left-[26.4%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 pointer-events-none"
        >
          <span className="absolute inset-0 rounded-full border border-[#E5C7A9] animate-ping opacity-35" />
          <span className="absolute inset-[-4px] rounded-full border border-white/20 animate-pulse opacity-50" />
        </div>

        {/* =========================================================================
            INTERACTIVE HOTSPOTS OVER THE EXACT DESIGN ELEMENTS
            ========================================================================= */}

        {/* 1. TOP NAV: Logo Hotspot */}
        <a
          href="#home"
          title="Makeup by Aarya - Home"
          className="absolute top-[3%] left-[4.5%] w-[16%] h-[7%] rounded-xl hover:bg-white/5 transition-colors cursor-pointer z-20"
        />

        {/* 2. TOP NAV: Links Hotspots */}
        <a
          href="#home"
          title="Home"
          className="absolute top-[4.5%] left-[29%] w-[4.5%] h-[4.5%] rounded-lg hover:bg-white/10 transition-colors cursor-pointer z-20"
        />
        <a
          href="#about"
          title="About Aarya"
          className="absolute top-[4.5%] left-[35.5%] w-[4.5%] h-[4.5%] rounded-lg hover:bg-white/10 transition-colors cursor-pointer z-20"
        />
        <a
          href="#portfolio"
          title="Portfolio Gallery"
          className="absolute top-[4.5%] left-[42%] w-[5.5%] h-[4.5%] rounded-lg hover:bg-white/10 transition-colors cursor-pointer z-20"
        />
        <a
          href="#testimonials"
          title="Client Testimonials"
          className="absolute top-[4.5%] left-[49.5%] w-[7%] h-[4.5%] rounded-lg hover:bg-white/10 transition-colors cursor-pointer z-20"
        />
        <a
          href="#contact"
          title="Contact Us"
          className="absolute top-[4.5%] left-[59%] w-[5.5%] h-[4.5%] rounded-lg hover:bg-white/10 transition-colors cursor-pointer z-20"
        />

        {/* 3. TOP NAV: Book Appointment Button Hotspot */}
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(229, 199, 169, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenBooking}
          title="Book Appointment with Aarya"
          className="absolute top-[3.8%] right-[5.8%] w-[15.5%] h-[5.6%] rounded-full cursor-pointer z-20 border border-transparent hover:border-white/80 transition-all flex items-center justify-center"
        >
          {/* Subtle hover indicator label */}
          <span className="sr-only">Book Appointment</span>
        </motion.button>

        {/* 4. HERO: "Book Your Look →" Primary CTA Hotspot */}
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(229, 199, 169, 0.6)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenBooking}
          title="Book Your Look"
          className="absolute top-[58.8%] left-[8%] w-[15.8%] h-[6.8%] rounded-full cursor-pointer z-20 border-2 border-transparent hover:border-white/60 transition-all"
        >
          <span className="sr-only">Book Your Look</span>
        </motion.button>

        {/* 5. HERO: "Watch Showreel" Secondary CTA Hotspot */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenShowreel}
          title="Watch 4K Showreel - Our Work in Motion"
          className="absolute top-[58.5%] left-[25.2%] w-[17.5%] h-[7.2%] rounded-full cursor-pointer z-20 border border-transparent hover:bg-white/5 transition-all"
        >
          <span className="sr-only">Watch Showreel</span>
        </motion.button>

        {/* 6. BOTTOM: "Scroll Down" Interactive Mouse Hotspot */}
        <motion.button
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={scrollToAbout}
          title="Scroll Down to Explore Meet Aarya"
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[9%] h-[9%] flex flex-col items-center justify-center cursor-pointer z-30 hover:opacity-100 transition-opacity"
        >
          <span className="sr-only">Scroll Down</span>
        </motion.button>

        {/* Seamless ethereal veil feathering into About Me section - eliminates any hard bottom edge */}
        <div className="absolute -bottom-1 inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#180D0B]/50 to-[#180D0B] pointer-events-none z-10" />

        {/* Translucent silk organza wave bridging from the bride's dupatta into About */}
        <div className="absolute -bottom-4 left-0 right-0 h-24 pointer-events-none z-15 overflow-hidden opacity-40">
          <svg viewBox="0 0 1672 100" fill="none" className="w-full h-full preserve-3d">
            <path
              d="M0,50 Q418,100 836,40 T1672,60 L1672,100 L0,100 Z"
              fill="url(#silkTransitionGradient)"
            />
            <defs>
              <linearGradient id="silkTransitionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C7A9" stopOpacity="0.15" />
                <stop offset="60%" stopColor="#DEC9B8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#180D0B" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      {/* =========================================================================
          MOBILE VIEW: FULLY RESPONSIVE DARK LUXURY HERO FOR PHONES & SMALL TABLETS
          ========================================================================= */}
      <div className="block md:hidden min-h-[92vh] pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-[#180D0B] via-[#241310] to-[#180D0B] flex flex-col justify-between">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#E5C7A9]/20 rounded-full blur-3xl pointer-events-none" />

        <FloatingPetals />

        <div className="relative z-10 space-y-6">
          
          {/* Kicker */}
          <div className="text-[10px] tracking-[0.25em] text-[#D8BFA8] uppercase font-medium">
            Bridal · Party · Event · Personal
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-serif-luxury text-white leading-tight">
            Enhancing <br />
            Your Natural{' '}
            <span className="font-editorial italic font-normal text-[#E5C7A9]">
              Beauty
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#D5BFAB] font-light leading-relaxed">
            Professional Makeup Artistry for Brides, Events and Special Occasions
          </p>

          {/* Mobile Image Card with Bride Portrait & Ethereal Veil */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DFCBBD]/40 aspect-4/3 bg-[#2E1A17] my-4">
            <img
              src="/images/hero_banner.jpg"
              alt="Bridal Beauty"
              className="w-full h-full object-cover object-right"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180D0B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif-luxury flex items-center justify-between">
              <span>Signature Bridal Look</span>
              <span className="text-[#E5C7A9] font-editorial italic">2026 Collection</span>
            </div>
          </div>

          {/* Action Buttons with Luxury Frosted Glass Texture */}
          <div className="space-y-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-full bg-[#E5C7A9]/90 hover:bg-[#E5C7A9] backdrop-blur-md border border-white/40 text-[#22120F] font-semibold text-sm shadow-[0_4px_25px_rgba(229,199,169,0.4)] flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
            >
              <span>Book Your Look</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenShowreel}
              className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-xs flex items-center justify-center gap-3 transition-all cursor-pointer shadow-md"
            >
              <div className="w-7 h-7 rounded-full bg-white/25 border border-white/40 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <div className="text-left">
                <span className="font-semibold block">Watch Showreel</span>
                <span className="text-[10px] text-[#CDB49E]">Our Work in Motion</span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Scroll Indicator */}
        <div className="pt-8 text-center">
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center gap-1 text-xs text-[#CDB49E] hover:text-white transition-colors"
          >
            <span>Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>

    </section>
  );
};
