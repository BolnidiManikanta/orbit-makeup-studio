import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, Clock, Check, ArrowRight, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenPriceListModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForBooking,
  onOpenPriceListModal,
}) => {
  // All 7 Signature Makeup Services from the Reference Image (In Exact Left-to-Right Order)
  // All 7 Signature Makeup Services from the Reference Image (In Exact Left-to-Right Order)
  // Index 3 is 'Bridal Makeup', which centers on initial load matching the reference image.
  const services = [
    {
      id: 'pre-wedding-makeup',
      title: 'Pre-Wedding Makeup',
      subtitle: 'Pre-wedding for your day',
      price: '₹15,000',
      duration: '120 Mins',
      category: 'Outdoor & Shoot',
      iconType: 'camera',
      cardImg: '/extracted/card_prewedding.png',
      portrait: '/images/services/portrait_prewedding_hd.jpg',
      fallbackPortrait: '/extracted/portrait_prewedding.png',
      productImg: '/images/services/o3_product_diamond_clear.jpg',
      fallbackProduct: '/extracted/o3_product_diamond_clear.jpg',
      productName: 'O3+ Diamond Luxury Treatment Kit',
      productDesc: 'Pre-wedding radiant diamond skin priming',
      description: 'Humidity-proof outdoor photo shoot makeup, natural golden hour glow, breeze-friendly romantic loose curls, and lightweight all-day comfort.',
      features: [
        'Natural Daylight Color Balancing',
        'Humidity & Sweat-Resistant Base',
        'Romantic Loose Waves & Floral Pins',
        'Touch-up Kit for Location Shoots',
      ],
    },
    {
      id: 'engagement-makeup',
      title: 'Engagement Makeup',
      subtitle: 'Glamorous looks for celebrations',
      price: '₹16,500',
      duration: '120 Mins',
      category: 'Celebration Glam',
      iconType: 'ring',
      cardImg: '/extracted/card_engagement.png',
      portrait: '/images/services/portrait_engagement_hd.jpg',
      fallbackPortrait: '/extracted/portrait_engagement.png',
      productImg: '/images/services/o3_product_diamond_clear.jpg',
      fallbackProduct: '/extracted/o3_product_diamond_clear.jpg',
      productName: 'O3+ Diamond Luxury Treatment Kit',
      productDesc: 'Diamond facial cream & radiance serum prep',
      description: 'Dewy glass skin preparation, soft halo smokey eye palette, sculpted cream contour, romantic textured hair updo, and 16-hour long-wear finish.',
      features: [
        'Dewy Glass Skin Hydration Veil',
        'Soft Halo Smokey Eyeshadow Palette',
        'Textured Romantic French Updo / Waves',
        'Silk Flutter False Lash Application',
      ],
    },
    {
      id: 'party-makeup',
      title: 'Party Makeup',
      subtitle: 'Glamorous looks for celebrations',
      price: '₹9,500',
      duration: '75 Mins',
      category: 'Occasion Glam',
      iconType: 'cocktail',
      cardImg: '/extracted/card_party.png',
      portrait: '/images/services/portrait_party_hd.jpg',
      fallbackPortrait: '/extracted/portrait_party.png',
      productImg: '/images/services/o3_product_brightening_clear.jpg',
      fallbackProduct: '/extracted/o3_product_brightening_clear.jpg',
      productName: 'O3+ Skin Brightening Facial Kit',
      productDesc: 'Skin brightening cream & power serum',
      description: 'High-definition photo-ready base, custom shimmer eyeshadow, sculpted cheekbone glow, and transfer-resistant velvet pout tailored to your attire.',
      features: [
        'HD Photo-Ready Base Application',
        'Custom Shimmer & Metallic Eye Accent',
        'Sculpted Cheekbone Highlighter Glow',
        'Transfer-Resistant Velvet Lip Finish',
      ],
    },
    {
      id: 'bridal-makeup',
      title: 'Bridal Makeup',
      subtitle: 'Timeless and elegant bridal looks',
      price: '₹28,000',
      duration: '180 Mins',
      category: 'Bridal Couture',
      iconType: 'lotus',
      cardImg: '/extracted/card_bridal.png',
      portrait: '/images/services/portrait_bridal_hd.jpg',
      fallbackPortrait: '/extracted/portrait_bridal.png',
      productImg: '/images/services/o3_product_bridal_gold_clear.jpg',
      fallbackProduct: '/extracted/o3_product_bridal_gold_clear.jpg',
      productName: 'O3+ 24K Gold Bridal Radiance Kit',
      productDesc: '24K Gold Day Cream & Radiance Serum',
      description: 'Signature 3D HD airbrush waterproof base, 24K gold foil eye artistry, traditional matha patti and nath setting, luxury false lashes, and royal dupatta drape.',
      features: [
        '3D HD Airbrush Waterproof Base',
        '24K Gold Foil Eye Artistry',
        'Traditional Matha Patti & Nath Setting',
        'Royal Dupatta & Saree Pleat Draping',
      ],
    },
    {
      id: 'personal-makeup',
      title: 'Personal Makeup',
      subtitle: 'Everyday & professional looks',
      price: '₹6,500',
      duration: '60 Mins',
      category: 'Editorial & Everyday',
      iconType: 'face',
      cardImg: '/extracted/card_personal.png',
      portrait: '/images/services/portrait_personal_hd.jpg',
      fallbackPortrait: '/extracted/portrait_personal.png',
      productImg: '/images/services/o3_product_whitening_clear.jpg',
      fallbackProduct: '/extracted/o3_product_whitening_clear.jpg',
      productName: 'O3+ Professional Whitening Kit',
      productDesc: 'Whitening cream jar & hydrating seal',
      description: 'Clean luxury minimalism, breathable skin tint, defined natural brows, subtle tightline mascara, and polished blowout for professional or private events.',
      features: [
        'Lightweight Breathable Skin Tint',
        'Natural Feathered Brow Architecture',
        'Subtle Tightline & Mascara Lift',
        'Polished Salon Blowout Styling',
      ],
    },
    {
      id: 'hd-makeup',
      title: 'HD Makeup',
      subtitle: 'Camera-ready flawless finish',
      price: '₹12,500',
      duration: '90 Mins',
      category: 'Studio Artistry',
      iconType: 'hd',
      cardImg: '/extracted/card_hd.png',
      portrait: '/images/services/portrait_hd_hd.jpg',
      fallbackPortrait: '/extracted/portrait_hd.png',
      productImg: '/images/services/o3_product_antiageing_clear.jpg',
      fallbackProduct: '/extracted/o3_product_antiageing_clear.jpg',
      productName: 'O3+ Anti-Ageing Youth Serum Kit',
      productDesc: 'Anti-ageing cream & high-frequency serum',
      description: 'Micro-pigment light-reflecting base engineered for 4K video and photography, zero-flashback silica finish, precision contouring, and dimensional eye glam.',
      features: [
        'Micro-Pigment 4K Camera Diffusion',
        'Zero-Flashback Silica Setting Powder',
        'Dimensional Precision Contour & Highlight',
        'High-Definition False Lash Volume',
      ],
    },
    {
      id: 'reception-makeup',
      title: 'Reception Makeup',
      subtitle: 'Elegant looks for your big day',
      price: '₹18,000',
      duration: '120 Mins',
      category: 'Evening Couture',
      iconType: 'diamond',
      cardImg: '/extracted/card_reception.png',
      portrait: '/images/services/portrait_reception_hd.jpg',
      fallbackPortrait: '/extracted/portrait_reception.png',
      productImg: '/images/services/o3_product_bridal_gold_clear.jpg',
      fallbackProduct: '/extracted/o3_product_bridal_gold_clear.jpg',
      productName: 'O3+ 24K Gold Bridal Radiance Kit',
      productDesc: '24K gold radiance & luminous glow protocol',
      description: 'Dramatic cut-crease eye glam, diamond sparkle accents, structured regal contour, high-shine collarbone glow, and evening gown hair styling.',
      features: [
        'Dramatic Cut-Crease Metallic Eyes',
        'Diamond & Crystal Sparkle Accents',
        'Sculpted Royal Contour & Collarbone Glow',
        'Red Carpet Hollywood Waves or Updo',
      ],
    },
  ];

  // Active Index starts at 3 (Bridal Makeup) matching the reference image
  const [activeIndex, setActiveIndex] = useState(3);
  const [selectedModalService, setSelectedModalService] = useState<typeof services[0] | null>(null);
  const [inspectedProduct, setInspectedProduct] = useState<typeof services[0] | null>(null);
  const touchStartXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const total = services.length;
  const activeService = services[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.getElementById('services');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Render Service Icon
  const renderServiceIcon = (type: string, isCenter: boolean) => {
    const strokeColor = isCenter ? '#FFE082' : '#DEB76E';
    const iconSize = isCenter ? 'w-8 h-8' : 'w-6 h-6';

    switch (type) {
      case 'lotus':
        return (
          <svg viewBox="0 0 40 40" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <path
              d="M20 7 C20 18, 11 24, 6 26 C11 28, 17 28, 20 33 C23 28, 29 28, 34 26 C29 24, 20 18, 20 7 Z"
              fill={isCenter ? 'rgba(255,224,130,0.22)' : 'rgba(222,183,110,0.12)'}
            />
            <path d="M20 11 C18 19, 15 25, 12 28 C16 30, 20 31.5, 20 33 C20 31.5, 24 30, 28 28 C25 25, 22 19, 20 11 Z" />
            <path d="M20 6 L20 34" strokeDasharray="1 2" opacity="0.6" />
          </svg>
        );
      case 'ring':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <circle cx="12" cy="14" r="6" strokeWidth="1.8" />
            <path d="M9 8l3-4 3 4-1.5 2h-3L9 8z" fill={isCenter ? 'rgba(255,224,130,0.3)' : 'transparent'} />
          </svg>
        );
      case 'cocktail':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <path d="M4 5h16l-8 9-8-9z" fill={isCenter ? 'rgba(255,224,130,0.22)' : 'transparent'} />
            <path d="M12 14v6" />
            <path d="M8 20h8" />
          </svg>
        );
      case 'face':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <path d="M12 4a7 7 0 00-7 7c0 4.5 3.5 8 7 9 3.5-1 7-4.5 7-9a7 7 0 00-7-7z" fill={isCenter ? 'rgba(255,224,130,0.2)' : 'transparent'} />
            <circle cx="9.5" cy="11.5" r="1" fill={strokeColor} />
            <circle cx="14.5" cy="11.5" r="1" fill={strokeColor} />
            <path d="M12 13.5v1.5" />
            <path d="M10 17c1 .5 3 .5 4 0" />
          </svg>
        );
      case 'hd':
        return (
          <div className={`px-2 py-0.5 rounded border border-[#FFE082] bg-[#FFE082]/15 text-[#FFE082] text-xs font-bold tracking-wider font-mono shadow-xs`}>
            HD
          </div>
        );
      case 'camera':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" fill={isCenter ? 'rgba(255,224,130,0.2)' : 'transparent'} />
            <circle cx="12" cy="13" r="4" />
          </svg>
        );
      case 'diamond':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" className={iconSize}>
            <path d="M6 3h12l4 7-10 11L2 10l4-7z" fill={isCenter ? 'rgba(255,224,130,0.22)' : 'transparent'} />
            <path d="M2 10h20" />
            <path d="M12 21L7.5 10 10 3" />
            <path d="M12 21l4.5-11L14 3" />
          </svg>
        );
      default:
        return <Sparkles className={`${iconSize} text-[#FFE082]`} />;
    }
  };

  return (
    <section
      id="services"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#180D0B] scroll-mt-16 select-none overflow-hidden"
    >
      {/* Full-bleed stage container with adaptive height so the footer is always prominently visible */}
      <div className="relative w-full min-h-[780px] lg:min-h-[850px] flex flex-col justify-between py-2 sm:py-4">
        
        {/* Clean Luxury Stage Background: Espresso Backdrop, Floating Makeup Brush, Golden Ribbon, Glowing Floor Dais */}
        <img
          src="/images/services/services_stage_hd.jpg"
          alt="Complete Makeup Service Collection - Makeup by Aarya"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('clean_services_stage')) {
              target.src = '/extracted/clean_services_stage.jpg';
            }
          }}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none filter contrast-[1.03]"
          referrerPolicy="no-referrer"
        />

        {/* Top Floating Stardust Shimmer (Subtle ambient light pulse) */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#180D0B]/70 via-[#251513]/20 to-transparent pointer-events-none z-10" />

        {/* =========================================================================
            TOP HEADER (EXACT TYPOGRAPHY & COPY MATCHING REFERENCE IMAGE)
            "OUR SERVICES"
            "Complete Makeup"
            "Service Collection" (with Collection in elegant luxury script italic)
            "Explore our wide range of professional makeup services..."
            ========================================================================= */}
        <div className="relative z-25 pt-6 sm:pt-8 md:pt-10 px-6 sm:px-10 lg:px-16 max-w-2xl text-left pointer-events-auto">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#D4AF37] uppercase block mb-1">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif-luxury font-medium text-[#FAF4ED] leading-[1.12] tracking-wide">
            Complete Makeup <br />
            <span className="font-normal">Service</span>{' '}
            <span className="font-serif italic font-normal text-[#FFE099]">Collection</span>
          </h2>
          <p className="text-xs sm:text-[13px] text-[#D4C3B5] leading-relaxed mt-2.5 max-w-lg font-light">
            Explore our wide range of professional makeup services, crafted for every occasion and every style.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D2520]/80 border border-[#FFD978]/60 text-[10px] sm:text-[11px] font-semibold text-[#FFE099] shadow-md backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-[#FFD978]" />
              <span>Infused with Authentic O3+ Clinical Skincare Protocols</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            3D CAROUSEL COVERFLOW STAGE
            Standing gracefully on the circular glowing golden floor rings
            ========================================================================= */}
        <div className="relative flex-1 w-full flex items-center justify-center perspective-[1200px] z-20 my-auto py-2">
          
          {/* Navigation Controls: Left Arrow (<) */}
          <button
            onClick={handlePrev}
            title="Previous Look"
            className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/25 bg-[#251513]/65 hover:bg-[#3D2520]/85 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Curved Cards Container */}
          <div className="relative w-full max-w-5xl h-[390px] sm:h-[430px] md:h-[460px] flex items-center justify-center">
            {services.map((item, index) => {
              // Calculate relative offset around the ring (-3 to +3)
              let offset = (index - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // Hide cards too far around the back
              if (Math.abs(offset) > 3) return null;

              const isCenter = offset === 0;

              // 3D Transform math for graceful cylindrical arc
              const xTranslation = offset * (window.innerWidth < 640 ? 125 : window.innerWidth < 1024 ? 175 : 220);
              const zTranslation = -Math.abs(offset) * 85;
              const yRotation = offset * -18;
              const cardScale = isCenter ? 1.0 : Math.max(0.68, 1 - Math.abs(offset) * 0.12);
              const cardOpacity = isCenter ? 1 : Math.max(0.48, 1 - Math.abs(offset) * 0.18);
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: xTranslation,
                    z: zTranslation,
                    rotateY: yRotation,
                    scale: cardScale,
                    opacity: cardOpacity,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  style={{ zIndex }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    }
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isCenter
                      ? 'w-[245px] sm:w-[290px] md:w-[335px] lg:w-[355px] h-[365px] sm:h-[415px] md:h-[445px] border-2 border-[#FFD978] shadow-[0_0_40px_rgba(255,200,90,0.7),inset_0_0_15px_rgba(255,220,120,0.2)]'
                      : 'w-[200px] sm:w-[235px] md:w-[265px] h-[320px] sm:h-[365px] md:h-[395px] border border-[#DEB76E]/60 shadow-[0_0_15px_rgba(255,200,90,0.25)] hover:border-[#FFD978]/90'
                  } rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300`}
                >
                  {/* Glassmorphic Smoked Translucent Body - crisp rendering */}
                  <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#381F1A]/85 via-[#231210]/90 to-[#140807]/96 backdrop-blur-xs p-3.5 sm:p-4 text-left select-none overflow-hidden">
                    
                    {/* Top Model Portrait with Crisp High-Resolution Clarity & Error Fallback */}
                    <div className={`relative w-full ${isCenter ? 'h-[43%] sm:h-[45%]' : 'h-[48%] sm:h-[50%]'} rounded-2xl overflow-hidden shrink-0 bg-[#251310]`}>
                      <img
                        src={item.portrait}
                        alt={item.title}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (item.fallbackPortrait && target.src !== item.fallbackPortrait) {
                            target.src = item.fallbackPortrait;
                          }
                        }}
                        className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle soft bottom bleed only at the bottom edge */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#140807] to-transparent pointer-events-none opacity-85" />
                    </div>

                    {/* Bottom Area: Service Details (Left/Center) + BIG Highly Highlighted O3+ Product Image (Bottom-Right) */}
                    <div className="relative w-full flex-1 flex flex-col justify-between pt-1.5">
                      
                      {/* Service Icon & Protocol Tag */}
                      <div className="flex items-center gap-1.5">
                        {renderServiceIcon(item.iconType, isCenter)}
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37]">
                          O3+ Skincare Protocol
                        </span>
                      </div>

                      {/* Content block with right padding so it never collides with bottom-right big product */}
                      <div className={`${isCenter ? 'pr-34 sm:pr-40 md:pr-46' : 'pr-20 sm:pr-22 md:pr-24'} space-y-0.5`}>
                        <h3 className={`font-serif-luxury font-medium text-white tracking-wide transition-all leading-tight ${
                          isCenter ? 'text-lg sm:text-xl lg:text-[22px] text-[#FFF7ED]' : 'text-sm sm:text-base text-[#EEDBCB]'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-[#DCC7B5] line-clamp-1 font-light">
                          {item.subtitle}
                        </p>

                        {/* Highlighted O3+ Skincare Treatment Callout */}
                        <div className="text-[9px] sm:text-[10px] text-[#FFE099] flex items-center gap-1 font-medium truncate pt-0.5">
                          <Sparkles className="w-2.5 h-2.5 text-[#FFD88A] shrink-0" />
                          <span className="truncate">{item.productName.replace(' Kit', '')}</span>
                        </div>

                        {/* Price Pill & Direct Booking CTA */}
                        <div className="pt-0.5 flex items-center gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FFD88A] to-[#FFCF70] text-[#2E1812] text-[10px] sm:text-[11px] font-serif-luxury font-bold shadow-xs">
                            {item.price}
                          </span>

                          {isCenter && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectServiceForBooking(item.title);
                              }}
                              className="text-[10px] font-bold text-[#FFE099] hover:underline cursor-pointer flex items-center gap-0.5"
                            >
                              <span>Book Look</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* BIG Highly Highlighted Actual O3+ Product Image Placed at the Bottom-Right of each card */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectedProduct(item);
                        }}
                        title={`Click to inspect ${item.productName} in full 3D detail`}
                        className={`group/prod absolute bottom-0 right-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                          isCenter
                            ? 'w-34 h-34 sm:w-40 sm:h-40 md:w-46 md:h-46 lg:w-48 lg:h-48 border-2 border-[#FFD978] shadow-[0_0_35px_rgba(255,215,120,0.9),0_12px_24px_rgba(0,0,0,0.85)] hover:scale-105 hover:border-white'
                            : 'w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 border border-[#DEB76E]/80 shadow-[0_4px_14px_rgba(0,0,0,0.7)] hover:border-[#FFD978]'
                        } bg-gradient-to-b from-[#3D2520] via-[#241310] to-[#120806] z-20 flex flex-col justify-between p-1.5`}
                      >
                        {/* Luminous Top Golden Badge */}
                        <div className="flex items-center justify-between w-full px-1 pt-0.5 z-10">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#FFD88A] to-[#FFCF70] text-[#2E1812] text-[8px] sm:text-[9px] font-bold tracking-tight shadow-xs">
                            <Sparkles className="w-2.5 h-2.5 text-[#7A4010]" />
                            <span>O3+ Protocol</span>
                          </span>
                          {isCenter && (
                            <span className="text-[8px] sm:text-[9px] font-semibold text-[#FFE099] opacity-90 group-hover/prod:opacity-100 flex items-center gap-0.5 bg-black/40 px-1.5 py-0.5 rounded-full">
                              <span>3D View</span>
                              <ArrowRight className="w-2 h-2" />
                            </span>
                          )}
                        </div>

                        {/* High-Resolution 3D Product Image on Golden Spotlight */}
                        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-0.5">
                          <div className="absolute inset-0 bg-radial from-[#FFE599]/30 via-transparent to-transparent pointer-events-none" />
                          <img
                            src={item.productImg}
                            alt={item.productName}
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (item.fallbackProduct && target.src !== item.fallbackProduct) {
                                target.src = item.fallbackProduct;
                              } else {
                                target.src = '/extracted/o3_product_bridal_gold_clear.jpg';
                              }
                            }}
                            className="w-full h-full object-contain object-center filter brightness-[1.08] contrast-[1.04] drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover/prod:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Golden Pedestal Dais Reflection Line */}
                        <div className="w-full px-1 pb-0.5">
                          <div className="w-full h-1 rounded-full bg-gradient-to-r from-transparent via-[#FFE082]/90 to-transparent shadow-[0_0_8px_rgba(255,224,130,0.8)]" />
                          <p className={`text-[#E5D2C2] truncate text-center font-medium mt-0.5 ${
                            isCenter ? 'text-[8px] sm:text-[9px] md:text-[10px]' : 'text-[7px] sm:text-[8px]'
                          }`}>
                            {item.productName.replace(' Kit', '').replace('O3+ ', '')}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Floor Reflection Under Card (Simulated Mirror Light on Dais) */}
                  <div className="absolute -bottom-16 inset-x-0 h-16 pointer-events-none opacity-20 scale-y-[-1] filter blur-xs bg-gradient-to-t from-transparent to-[#FFD88A]/30" />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls: Right Arrow (>) */}
          <button
            onClick={handleNext}
            title="Next Look"
            className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/25 bg-[#251513]/65 hover:bg-[#3D2520]/85 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* =========================================================================
            SERVICE PAGE FOOTER BAR (PROMINENT, UNCLIPPED & FULLY FEATURED)
            ========================================================================= */}
        <div className="relative z-30 pt-4 pb-8 px-4 sm:px-8 max-w-5xl mx-auto w-full flex flex-col items-center justify-center gap-4 text-center">
          
          {/* Active Look & Interactive Pagination Dais Indicator */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-[#261310]/85 border border-[#FFD978]/40 rounded-full px-5 py-2.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
              <span>Look {activeIndex + 1} of {total}</span>
              <span className="text-white/40">·</span>
              <span className="text-white font-medium">{activeService.title}</span>
            </span>

            {/* Glowing Pagination Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to ${services[i].title}`}
                  title={`${services[i].title} (${services[i].price})`}
                  className={`transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-7 h-2.5 rounded-full bg-gradient-to-r from-[#FFE099] to-[#FFD88A] shadow-[0_0_12px_rgba(255,215,120,0.95)]'
                      : 'w-2.5 h-2.5 rounded-full bg-white/35 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Service Guarantee Badges Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#20100E]/70 border border-[#DEB76E]/30 text-[11px] text-[#D8C6B6]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD978] shrink-0" />
              <span>100% Authentic O3+ Clinical Protocols</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#20100E]/70 border border-[#DEB76E]/30 text-[11px] text-[#D8C6B6]">
              <Clock className="w-3.5 h-3.5 text-[#FFD978] shrink-0" />
              <span>16+ Hour Water-Resistant Radiance</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#20100E]/70 border border-[#DEB76E]/30 text-[11px] text-[#D8C6B6]">
              <Check className="w-3.5 h-3.5 text-[#FFD978] shrink-0" />
              <span>Hospital-Grade Sanitized Brushes</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenPriceListModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFE099] via-[#FFD88A] to-[#FFCF70] text-[#2E1812] text-xs font-serif-luxury font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View Full 26+ Services & Price List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectServiceForBooking(activeService.title)}
              className="px-5 py-2.5 rounded-full border border-[#FFD978]/70 bg-[#2E1714]/90 hover:bg-[#3D201A] text-xs font-medium text-[#FFE099] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FFD978]" />
              <span>Book Active Look: {activeService.title} ({activeService.price})</span>
            </button>
          </div>

        </div>

      </div>

      {/* Smooth bottom blend into Portfolio */}
      <div className="h-6 bg-gradient-to-b from-[#180D0B] to-[#FAF5F0]/10 pointer-events-none" />

      {/* =========================================================================
          SERVICE DETAIL MODAL (WHEN USER CLICKS ARROW ON CENTER CARD)
          ========================================================================= */}
      <AnimatePresence>
        {selectedModalService && (
          <div className="fixed inset-0 z-50 bg-[#180D0B]/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#2E1A17] to-[#1C0E0C] border border-[#DEB76E]/60 p-6 sm:p-7 shadow-2xl text-[#FAF4ED] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#D4C3B5] hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                {/* Look Portrait */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#DEB76E] shrink-0 bg-[#251513]">
                  <img
                    src={selectedModalService.portrait}
                    alt={selectedModalService.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (selectedModalService.fallbackPortrait && target.src !== selectedModalService.fallbackPortrait) {
                        target.src = selectedModalService.fallbackPortrait;
                      }
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Actual O3+ Product Kit - Prominently Highlighted with Golden Pedestal */}
                <div
                  onClick={() => {
                    setInspectedProduct(selectedModalService);
                  }}
                  title="Click to inspect O3+ Kit in full 3D detail"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#FFD978] shrink-0 bg-gradient-to-b from-[#3D2520] to-[#120806] p-1 shadow-[0_0_15px_rgba(255,215,120,0.6)] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-between"
                >
                  <div className="w-full flex items-center justify-between px-0.5">
                    <span className="text-[7.5px] font-bold text-[#FFE082] uppercase">O3+ Kit</span>
                    <Sparkles className="w-2 h-2 text-[#FFE082]" />
                  </div>
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedModalService.productImg}
                      alt={selectedModalService.productName}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (selectedModalService.fallbackProduct && target.src !== selectedModalService.fallbackProduct) {
                          target.src = selectedModalService.fallbackProduct;
                        } else {
                          target.src = '/extracted/o3_product_bridal_gold.jpg';
                        }
                      }}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#FFE082]/70 to-transparent" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {selectedModalService.category}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#FFE082]/20 border border-[#FFE082]/40 text-[#FFE082]">
                      O3+ Powered
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-white truncate">
                    {selectedModalService.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm font-serif-luxury font-bold text-[#FFE099]">
                      {selectedModalService.price}
                    </span>
                    <span className="text-xs text-[#C5B3A5] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {selectedModalService.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4C3B5] leading-relaxed mb-4">
                {selectedModalService.description}
              </p>

              <div className="border-t border-white/10 pt-3 mb-5 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Included in this Look:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#EAE0D6]">
                      <Check className="w-3.5 h-3.5 text-[#FFE099] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const title = selectedModalService.title;
                    setSelectedModalService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#FFD88A] via-[#FFE099] to-[#FFCF70] text-[#2E1812] text-xs font-serif-luxury font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#5A3126]" />
                  <span>Reserve This Look ({selectedModalService.price})</span>
                </button>
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-4 py-2.5 rounded-full border border-white/20 text-xs text-[#D4C3B5] hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          O3+ PRODUCT 3D INSPECTOR MODAL (OPENED BY CLICKING HIGHLIGHTED PRODUCT IMAGE)
          ========================================================================= */}
      <AnimatePresence>
        {inspectedProduct && (
          <div className="fixed inset-0 z-50 bg-[#180D0B]/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#2E1A17] via-[#221210] to-[#160B09] border-2 border-[#FFD978]/80 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,215,120,0.35),0_20px_40px_rgba(0,0,0,0.9)] text-[#FAF4ED] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setInspectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#D4C3B5] hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glowing Background Spotlight */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFD88A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                {/* Left: Prominent 3D Product Staging on Golden Pedestal */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#FFD978] shadow-[0_0_30px_rgba(255,215,120,0.6),inset_0_0_20px_rgba(255,220,120,0.2)] bg-gradient-to-b from-[#3D2520] via-[#251513] to-[#120806] p-3 flex flex-col items-center justify-between shrink-0">
                  <div className="w-full flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FFD88A] to-[#FFCF70] text-[#2E1812] text-[9px] font-bold tracking-wider uppercase">
                      Official O3+
                    </span>
                    <span className="text-[10px] text-[#FFE082] flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3 text-[#FFE082]" />
                      Clinical Formula
                    </span>
                  </div>

                  <div className="relative w-full flex-1 flex items-center justify-center my-1">
                    <img
                      src={inspectedProduct.productImg}
                      alt={inspectedProduct.productName}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (inspectedProduct.fallbackProduct && target.src !== inspectedProduct.fallbackProduct) {
                          target.src = inspectedProduct.fallbackProduct;
                        } else {
                          target.src = '/extracted/o3_product_bridal_gold.jpg';
                        }
                      }}
                      className="w-full h-full object-contain filter brightness-[1.06] drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Golden Base Dais */}
                  <div className="w-full pt-1 border-t border-[#FFD978]/40 text-center">
                    <span className="text-[10px] font-serif-luxury font-medium text-[#FFE099] tracking-wider">
                      Salon Professional Grade
                    </span>
                  </div>
                </div>

                {/* Right: Skincare Kit Specs & Benefits */}
                <div className="flex-1 text-left space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      Paired with {inspectedProduct.title}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-white leading-tight">
                      {inspectedProduct.productName}
                    </h3>
                    <p className="text-xs text-[#FFE099] font-medium">
                      {inspectedProduct.productDesc}
                    </p>
                  </div>

                  <p className="text-xs text-[#D4C3B5] leading-relaxed">
                    Every luxury makeup session begins with tailored O3+ dermatological skin preparation. This clinical protocol seals moisture, smoothens micro-texture, and prevents foundation oxidation, ensuring your bridal or occasion glam stays pristine for 16+ hours.
                  </p>

                  <div className="border-t border-white/10 pt-3 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                      3-Phase Application Ritual:
                    </span>
                    <div className="space-y-1 text-xs text-[#EAE0D6]">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#FFE099] shrink-0 mt-0.5" />
                        <span><strong>Phase 1:</strong> Gentle deep-pore cleanser & thermal radiance mist</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#FFE099] shrink-0 mt-0.5" />
                        <span><strong>Phase 2:</strong> High-penetration active radiance serum infusion</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#FFE099] shrink-0 mt-0.5" />
                        <span><strong>Phase 3:</strong> 24K gold/diamond barrier seal cream for velvet finish</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => {
                        const title = inspectedProduct.title;
                        setInspectedProduct(null);
                        onSelectServiceForBooking(title);
                      }}
                      className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#FFD88A] via-[#FFE099] to-[#FFCF70] text-[#2E1812] text-xs font-serif-luxury font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-[#5A3126]" />
                      <span>Book Look with this Protocol ({inspectedProduct.price})</span>
                    </button>
                    <button
                      onClick={() => setInspectedProduct(null)}
                      className="px-4 py-2.5 rounded-full border border-white/20 text-xs text-[#D4C3B5] hover:text-white transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
