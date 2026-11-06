import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Award, Gem, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';

interface AboutProps {
  onOpenBooking?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [activePhilosophyPillar, setActivePhilosophyPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'enhance',
      title: 'Enhance',
      subtitle: 'Your Natural Beauty',
      icon: 'lotus',
      desc: 'Skin-first artistry that celebrates your unique bone structure and undertones without heavy, mask-like layers.',
    },
    {
      id: 'create',
      title: 'Create',
      subtitle: 'Timeless Looks',
      icon: 'diamond',
      desc: 'Classic elegance engineered with 16-hour sweat and humidity-proof longevity for memories that endure decades.',
    },
    {
      id: 'radiant',
      title: 'Make You Feel',
      subtitle: 'Confident & Radiant',
      icon: 'heart',
      desc: 'A calming, luxurious experience on your wedding morning so you walk down the aisle feeling effortless and queenly.',
    },
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#180D0B] scroll-mt-24 pt-4 md:pt-8">
      
      {/* Subtle soft ambient transition connecting continuously with the bottom of Hero */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#180D0B] via-[#1A0E0C]/90 to-transparent pointer-events-none z-10" />

      {/* =========================================================================
          DESKTOP VIEW: SEAMLESS ABOUT SECTION (FULL HEADROOM & COMPLETE GOLDEN ARCH)
          ========================================================================= */}
      <div className="hidden md:block relative w-full aspect-1671/941 min-h-[700px] bg-[#180D0B] overflow-hidden select-none">
        
        {/* Full pristine image with complete arch and headroom (navbar seamlessly removed) */}
        <img
          src="/extracted/about_seamless.jpg"
          alt="Meet Aarya - About Professional Makeup Artist"
          className="absolute inset-0 w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Floating Rose Petals in Motion continuing from Hero */}
        <FloatingPetals />

        {/* Glowing Halo Arc Shimmer behind Aarya's portrait */}
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.04, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] right-[20%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#E5C7A9]/30 to-transparent blur-3xl pointer-events-none"
        />

        {/* Floating Side Card 1 (Brushes): Interactive subtle hover tilt */}
        <motion.div
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[21.5%] right-[8.6%] w-[12%] h-[26%] rounded-3xl cursor-pointer z-20"
          title="Curated Luxury Makeup Brushes & Tools"
        />

        {/* Floating Side Card 2 (Illuminated Mirror): Interactive subtle hover tilt */}
        <motion.div
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[44%] right-[5.5%] w-[13.5%] h-[28.5%] rounded-3xl cursor-pointer z-20"
          title="Private Studio Vanity & Floral Setting"
        />

        {/* =========================================================================
            BOTTOM "MY PHILOSOPHY" PILLARS HOTSPOTS
            ========================================================================= */}
        {/* Pillar 1: Enhance Your Natural Beauty */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActivePhilosophyPillar(activePhilosophyPillar === 'enhance' ? null : 'enhance')}
          title="Philosophy: Enhance Your Natural Beauty (Click to view details)"
          className="absolute top-[81.3%] left-[43.7%] w-[14.4%] h-[13.8%] rounded-2xl cursor-pointer z-20 border border-transparent hover:border-[#D5B094]/50 hover:bg-white/10 transition-all"
        />

        {/* Pillar 2: Create Timeless Looks */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActivePhilosophyPillar(activePhilosophyPillar === 'create' ? null : 'create')}
          title="Philosophy: Create Timeless Looks (Click to view details)"
          className="absolute top-[81.3%] left-[59.2%] w-[14.4%] h-[13.8%] rounded-2xl cursor-pointer z-20 border border-transparent hover:border-[#D5B094]/50 hover:bg-white/10 transition-all"
        />

        {/* Pillar 3: Make You Feel Confident & Radiant */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActivePhilosophyPillar(activePhilosophyPillar === 'radiant' ? null : 'radiant')}
          title="Philosophy: Make You Feel Confident & Radiant (Click to view details)"
          className="absolute top-[81.3%] left-[74.8%] w-[15.0%] h-[13.8%] rounded-2xl cursor-pointer z-20 border border-transparent hover:border-[#D5B094]/50 hover:bg-white/10 transition-all"
        />

        {/* Interactive Pillar Tooltip Popup */}
        {activePhilosophyPillar && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[64%] left-[43%] right-[8%] bg-[#FAF0E6] text-[#22120F] rounded-2xl p-5 shadow-2xl border-2 border-[#D5BDAE] z-30 flex items-center justify-between gap-4"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B52]">
                Aarya's Artistry Pillar
              </div>
              <p className="text-sm font-medium mt-0.5">
                {pillars.find((p) => p.id === activePhilosophyPillar)?.desc}
              </p>
            </div>
            <button
              onClick={() => setActivePhilosophyPillar(null)}
              className="text-xs text-[#7A5B52] hover:text-[#22120F] font-bold px-3 py-1.5 rounded-lg bg-[#EFE2D6] cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        )}

      </div>

      {/* =========================================================================
          MOBILE VIEW: SEAMLESS RESPONSIVE ABOUT SECTION
          ========================================================================= */}
      <div className="block md:hidden py-16 px-4 relative overflow-hidden bg-gradient-to-b from-[#180D0B] via-[#241310] to-[#180D0B] text-white">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 -right-16 w-72 h-72 bg-[#E5C7A9]/20 rounded-full blur-3xl pointer-events-none" />

        <FloatingPetals />

        <div className="relative z-10 space-y-6">
          
          {/* Kicker */}
          <div className="text-[10px] tracking-[0.25em] text-[#D8BFA8] uppercase font-medium">
            About Me
          </div>

          {/* Headline */}
          <h2 className="text-4xl font-serif-luxury text-white leading-tight">
            Meet{' '}
            <span className="font-editorial italic font-normal text-[#E5C7A9]">
              Aarya
            </span>
          </h2>

          {/* Bio text */}
          <p className="text-sm text-[#D5BFAB] font-light leading-relaxed">
            A professional makeup artist passionate about bringing out your natural beauty and confidence for life's most special moments.
          </p>

          {/* 3 Stats Row with Vertical Dividers matching desktop layout */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#3E2420] text-center">
            <div>
              <div className="text-2xl font-serif-luxury font-medium text-white">
                8+
              </div>
              <div className="text-[10px] text-[#CBB29C] mt-0.5">
                Years of Experience
              </div>
            </div>

            <div className="border-x border-[#3E2420]">
              <div className="text-2xl font-serif-luxury font-medium text-white">
                500+
              </div>
              <div className="text-[10px] text-[#CBB29C] mt-0.5">
                Happy Clients
              </div>
            </div>

            <div>
              <div className="text-2xl font-serif-luxury font-medium text-white flex items-center justify-center gap-1">
                <span>4.9</span>
                <span className="text-amber-500 text-lg">★</span>
              </div>
              <div className="text-[10px] text-[#CBB29C] mt-0.5">
                Client Rating
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="text-3xl font-script text-[#E5C7A9] py-1">
            Aarya
          </div>

          {/* Mobile Image: Glowing Arch Portrait of Aarya holding brushes */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E5C7A9]/40 aspect-4/3 bg-[#2E1A17] my-4">
            <img
              src="/extracted/about_aarya_exact.jpg"
              alt="Aarya professional makeup artist with brushes"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180D0B] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-serif-luxury">
              Master Artist · Certified Airbrush Specialist
            </div>
          </div>

          {/* "My Philosophy" Banner matching image_9a028684.png */}
          <div className="bg-[#FAF0E6] rounded-3xl p-6 text-[#22120F] shadow-xl border border-[#DFCEBF] space-y-4">
            
            <div className="flex items-center gap-3 pb-3 border-b border-[#E3D1C2]">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E2C7B8] shrink-0 border border-[#CEB2A0]">
                <img
                  src="/extracted/about_powder_swatch.jpg"
                  alt="Cosmetic powder swatch"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif-luxury font-medium">
                My Philosophy
              </h3>
            </div>

            <div className="space-y-3">
              {pillars.map((p) => (
                <div key={p.id} className="p-3 rounded-2xl bg-white/70 border border-[#EADBCE]">
                  <div className="text-xs font-serif-luxury font-bold text-[#22120F]">
                    {p.title} {p.subtitle}
                  </div>
                  <p className="text-[11px] text-[#6E534B] mt-0.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Booking CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                if (onOpenBooking) onOpenBooking();
                else {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#E5C7A9] hover:bg-[#D4B08C] text-[#22120F] font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book Look with Aarya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
