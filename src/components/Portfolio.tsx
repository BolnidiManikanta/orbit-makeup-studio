import React, { useState } from 'react';
import { ArrowUpRight, X, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/makeupData';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  onSelectLookForBooking: (lookTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectLookForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Bridal' | 'Engagement' | 'Party' | 'Editorial'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: ('All' | 'Bridal' | 'Engagement' | 'Party' | 'Editorial')[] = [
    'All',
    'Bridal',
    'Engagement',
    'Party',
    'Editorial',
  ];

  const displayedItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAF5F0] relative overflow-hidden scroll-mt-20">
      
      {/* Seamless transition connecting continuously with Services above */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#ECE2D6] via-[#FAF5F0]/60 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A5B52] uppercase">
              Our Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#251513] leading-tight">
              A Closer Look at <br className="hidden sm:inline" />
              Our Work
            </h2>
          </div>

          {/* Filter Buttons with Luxury Frosted Glass Texture */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/50 backdrop-blur-md rounded-full border border-white/80 shadow-xs self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat ? 'text-white' : 'text-[#5E423B] hover:text-[#251513] hover:bg-white/40'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#251513]/90 backdrop-blur-md border border-white/30 rounded-full shadow-md z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid with Real Bride Photos from User Screenshots in Animated Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[340px]"
        >
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(46, 26, 23, 0.2)' }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#E8D7CA] border-2 border-[#DFC9BA] shadow-sm cursor-pointer flex flex-col justify-end"
              >
                {/* Real Woman Makeup Image */}
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  src={item.image}
                  alt={`${item.title} - Real bride makeover`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom-focused satin gradient scrim - keeps face and jewelry crystal clear */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#20100E]/95 via-[#20100E]/40 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#3B2420] text-[10px] font-bold tracking-widest uppercase border border-[#E0CEBF]">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Info Lockup */}
                <div className="p-5 relative z-10 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] text-[#F3D7C1] font-mono block">
                      {item.clientName}
                    </span>
                    <h3 className="text-lg font-serif-luxury font-medium leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#2E1A17] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2E1A17] group-hover:text-white transition-all shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox for Portfolio Item with AnimatePresence */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 bg-[#251513]/75 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF5F0] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DFCEBF] p-6 sm:p-8 relative"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-[#38231F] hover:bg-[#EBD9CC] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="rounded-2xl overflow-hidden bg-[#E4D1C3] aspect-3/4 max-h-[460px] shadow-lg border border-[#DFC9BA]">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover object-top filter brightness-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFE2D6] text-[#5A3833]">
                        {selectedItem.category}
                      </span>
                      {selectedItem.location && (
                        <span className="text-xs text-[#7A5B53] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#A87A6C]" />
                          {selectedItem.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-serif-luxury font-medium text-[#2E1A17]">
                      {selectedItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C423B] leading-relaxed">
                      {selectedItem.details}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E8DACF]">
                      <span className="text-xs font-bold text-[#38231F] uppercase tracking-wider">
                        Key Cosmetics & Products:
                      </span>
                      <ul className="text-xs text-[#6B514A] space-y-1">
                        {selectedItem.productsUsed.map((prod, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9E6E5F]" />
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          const title = selectedItem.title;
                          setSelectedItem(null);
                          onSelectLookForBooking(title);
                        }}
                        className="w-full py-3.5 px-6 bg-[#251513]/90 hover:bg-[#251513] text-[#FAF5F0] rounded-full text-sm font-semibold backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Book This Look</span>
                        <ArrowUpRight className="w-4 h-4 text-[#E5C7A9]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
