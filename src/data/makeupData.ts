import { ServiceItem, PortfolioItem, TestimonialItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    tagline: 'Timeless & elegant bridal looks',
    description: 'Bespoke bridal artistry meticulously designed to reflect your heritage, elegance, and natural radiance on your wedding day.',
    price: '₹28,000 / $350',
    duration: '3.5 - 4 Hours',
    image: '/real_brides/bride_red_saree.jpg',
    category: 'bridal',
    features: [
      'High-Definition HD Airbrush / Traditional Foundation',
      'Luxury International Lashes & Precision Brow Shaping',
      'Bespoke Bridal Hair Styling & Fresh Floral Draping',
      'Dupatta Pinning & Full Jewelry Placement Assistance',
      'Pre-wedding Skin Assessment & Bespoke Touch-up Kit'
    ]
  },
  {
    id: 'party',
    title: 'Party Makeup',
    tagline: 'Glamorous looks for celebrations',
    description: 'High-impact yet weightless makeup engineered for cocktails, sangeets, receptions, and gala evenings that stays flawless all night.',
    price: '₹9,500 / $120',
    duration: '2 Hours',
    image: '/real_brides/bride_cocktail_glam.jpg',
    category: 'party',
    features: [
      'Luminous Soft Glam or Bold Cut-Crease Eye Artistry',
      'Custom Skin Sculpting & High-Definition Glow',
      'Premium Mink or Silk Eyelash Application',
      'Hair Styling (Soft Waves, Textured Ponytail or Bun)',
      '16-Hour Transfer-Resistant Setting Mist'
    ]
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    tagline: 'Soft & radiant pre-wedding looks',
    description: 'Effortlessly dewy, camera-ready aesthetic balancing contemporary pastel elegance with classic charm for rings and roka ceremonies.',
    price: '₹16,500 / $210',
    duration: '2.5 Hours',
    image: '/real_brides/bride_pink_saree.jpg',
    category: 'engagement',
    features: [
      'Glass-Skin Hydration Prep & Color Correction',
      'Shimmer & Neutral Smoky Eyes Tailored to Attire',
      'Modern Contemporary Hair Design & Floral Accents',
      'Saree or Lehenga Pallu Setting & Pleating',
      'Mini Lipstick & Blotting Touch-up Compact'
    ]
  },
  {
    id: 'personal',
    title: 'Personal Makeup',
    tagline: 'Everyday & professional looks',
    description: 'Subtle, polished makeup designed for high-profile corporate portraits, family shoots, branding sessions, or private masterclasses.',
    price: '₹6,500 / $85',
    duration: '1.5 Hours',
    image: '/real_brides/bride_white_gown.jpg',
    category: 'personal',
    features: [
      'Clean Girl "No-Makeup" Makeup or Executive Glam',
      'Natural Feathered Brow Grooming & Lip Tinting',
      'Skin-Enhancing Lightweight Mineral Base',
      'Sleek Blowout or Natural Curl Definition',
      'Quick 15-Minute Personalized Product Consultation'
    ]
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Makeup',
    tagline: 'Beautiful looks for your pre-wedding events',
    description: 'Radiant, candid-friendly styling for Mehendi, Haldi, or destination couple shoots with moisture-locked endurance.',
    price: '₹14,000 / $175',
    duration: '2.5 Hours',
    image: '/real_brides/bride_yellow_saree.jpg',
    category: 'bridal',
    features: [
      'Hydrating Water-Resistant Complexion Finish',
      'Boho-Chic Braids or Floral Bun Hair Styling',
      'Soft Pastel Peach & Coral Color Tones',
      'Haldi-Proof Sweat Resistant Setting Veil'
    ]
  },
  {
    id: 'reception',
    title: 'Reception Makeup',
    tagline: 'Graceful looks for your special night',
    description: 'Ultra-glamorous evening bridal transformation featuring sculpted cheekbones, sultry smokey eyes, and red-carpet radiance.',
    price: '₹22,000 / $280',
    duration: '3 Hours',
    image: '/real_brides/bride_glam_night.jpg',
    category: 'bridal',
    features: [
      'Ultra-HD 24K Gold Shimmer Contouring',
      'Hollywood Waves or Regal Royal Updo',
      'Custom Individual Eyelash Customization',
      'Luxury Gown or Heavy Zardozi Draping'
    ]
  },
  {
    id: 'o3-whitening',
    title: 'O3+ Whitening Facial',
    tagline: 'For tan & pigmented skin',
    description: 'Advanced clinical whitening formula with botanical actives that effectively diminishes pigmentation, sun tan, and post-acne blemishes.',
    price: '₹2,499',
    duration: '60 Mins',
    image: '/extracted/o3_panel_1.png',
    category: 'personal',
    features: [
      'Deep Cleansing Micro-Exfoliation & Steam',
      'O3+ Whitening Massage Cream & Lymphatic Drainage',
      'Pure Vitamin C & Arbutin Serum Infusion',
      'O3+ Whitening Rubber / Algae Peel-Off Mask',
      'UV Shield Complexion Sealant'
    ]
  },
  {
    id: 'o3-antiageing',
    title: 'O3+ Anti-Ageing Facial',
    tagline: 'Reduces fine lines & improves skin elasticity',
    description: 'Youth-restoring collagen infusion designed to smooth fine lines, tighten relaxed facial contours, and replenish cellular moisture.',
    price: '₹2,799',
    duration: '75 Mins',
    image: '/extracted/o3_panel_2.png',
    category: 'personal',
    features: [
      'Polypeptide Firming Cleanser & Glycolic Polish',
      'Ultrasonic Microcurrent Collagen Lift',
      'O3+ Anti-Ageing Cellular Massage Cream',
      'Intense Bio-Cellulose Moisture Lock Mask',
      'Peptide Plumping Eye & Neck Contouring'
    ]
  },
  {
    id: 'o3-brightening',
    title: 'O3+ Brightening Facial',
    tagline: 'For dull & uneven skin tone',
    description: 'Instant luminosity and radiant glow treatment designed to eliminate dullness and revive tired skin before weddings and gala evenings.',
    price: '₹2,499',
    duration: '60 Mins',
    image: '/extracted/o3_panel_3.png',
    category: 'personal',
    features: [
      'Enzyme Brightening Cleanser & AHA Peel',
      'Radiance Boosting Oxygen Jet Spray',
      'O3+ Brightening Cream Infused with Niacinamide',
      'Golden Glow Alginate Sheet Treatment',
      'Light-Reflecting Hyaluronic Hydration Dew'
    ]
  }
];

export const DETAILED_PACKAGES = [
  {
    id: 'royal-bridal-suite',
    name: 'The Royal Bridal Suite',
    badge: 'Most Popular',
    price: '₹38,000',
    originalPrice: '₹45,000',
    idealFor: 'Full Day Wedding Ceremony + Reception Look Change',
    inclusions: [
      'Morning Muhurtham / Phere complete look with traditional styling',
      'Evening Reception glam transformation & hairstyle change',
      'Airbrush Silicone-based HD finish (24-hour waterproof)',
      'Premium Mink Lashes, Eye jewelry & Swarovski accents',
      'Hairstylist with floral setting (Jasmine / Baby’s Breath / Orchids)',
      'Lehenga draping, cancan adjustment, and jewelry assistance',
      'Luxury Touch-up travel clutch for the bride'
    ]
  },
  {
    id: 'classic-bridal',
    name: 'Classic Bridal Signature',
    price: '₹28,000',
    originalPrice: '₹32,000',
    idealFor: 'Single Event (Wedding, Reception or Nikah)',
    inclusions: [
      'Single event complete bridal look by Aarya',
      'HD Cream-based or Airbrush complexion match',
      'Bespoke eye look tailored to wedding jewelry and lehenga',
      'Traditional or modern bridal hairstyle with accessories',
      'Dupatta draping and final camera check',
      'Complimentary mini emergency touch-up kit'
    ]
  },
  {
    id: 'intimate-celebrations',
    name: 'Celebration Duo (Engagement + Sangeet)',
    price: '₹22,000',
    originalPrice: '₹26,000',
    idealFor: 'Two Pre-Wedding Functions',
    inclusions: [
      'Two complete distinct signature looks for two events',
      'Look 1: Dewy romantic engagement aesthetic',
      'Look 2: Bold dance-proof glitter & contour sangeet glam',
      'Two custom hairstyles with styling accessories',
      'Lashes and skin prep included for both events'
    ]
  },
  {
    id: 'bridal-entourage',
    name: 'Bridal Entourage (Mom & Bridesmaids)',
    price: '₹6,000 / person',
    originalPrice: '₹8,000',
    idealFor: 'Mother of Bride/Groom & Bridesmaids (Group of 3+)',
    inclusions: [
      'Complimentary group coordination to complement bride’s color scheme',
      'Flawless party/festive makeup and lashes',
      'Hairstyling (Updo, curls, or traditional braids)',
      'Saree draping and safety pinning',
      'On-venue convenience alongside the bride'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'Heritage Temple Saree Bride',
    category: 'Bridal',
    image: '/images/portfolio/bride_red_saree_hd.jpg',
    clientName: 'Sneha Kulkarni',
    location: 'Pune Heritage Wedding',
    details: 'Traditional South/Maharashtrian bridal radiance featuring antique temple matha patti, soft bronze smoked eye liner, and velvet coral lip.',
    productsUsed: ['Charlotte Tilbury Hollywood Flawless Filter', 'NARS Natural Radiant Longwear', 'Pat McGrath Mothership Eyeshadow', 'MAC Retro Matte Lipstick']
  },
  {
    id: 'look-2',
    title: 'Emerald Cocktail Reception Glam',
    category: 'Party',
    image: '/images/portfolio/bride_cocktail_glam_hd.jpg',
    clientName: 'Aishwarya Deshpande',
    location: 'JW Marriott, Pune',
    details: 'Modern cocktail hour look with voluminous textured waves, soft sculpted cheeks, and glistening champagne eyelids pairing with diamond jewelry.',
    productsUsed: ['Dior Backstage Glow Face Palette', 'Rare Beauty Liquid Blush', 'Hourglass Ambient Lighting Powder']
  },
  {
    id: 'look-3',
    title: 'Yellow Floral Braid Artistry',
    category: 'Bridal',
    image: '/images/portfolio/bride_yellow_floral_hd.jpg',
    clientName: 'Tanvi Joshi',
    location: 'Ritz-Carlton, Pune',
    details: 'Intricate traditional bridal hair bun accented with fresh yellow marigold and rose buds, delicate hair pins, and classic kamarbandh setting.',
    productsUsed: ['Oribe Dry Texturizing Spray', 'Schwarzkopf Osis+ Freeze Hold', 'Moroccanoil Luminous Hairspray']
  },
  {
    id: 'look-4',
    title: 'Contemporary White Wedding Gown',
    category: 'Editorial',
    image: '/images/portfolio/bride_white_gown_hd.jpg',
    clientName: 'Vanessa Fernandes',
    location: 'Goa Destination Wedding',
    details: 'Ethereal dewy bridal look for church ceremony with blush pink rose bouquet, delicate pearl glow on shoulders, and glossy rosebud lips.',
    productsUsed: ['Huda Beauty Nude Palette', 'Inglot AMC Eyeliner Gel 77', 'Ardell Individuals Short & Medium Lashes']
  },
  {
    id: 'look-5',
    title: 'Maharashtrian Pink Saree Muhurtham',
    category: 'Bridal',
    image: '/images/portfolio/bride_pink_saree_hd.jpg',
    clientName: 'Pooja Shinde',
    location: 'Mumbai Grand Wedding',
    details: 'Radiant bride with traditional Brahmani pearl nath, crescent moon bindi, luminous HD foundation, and berry-pink pout.',
    productsUsed: ['Estée Lauder Double Wear Light', 'Fenty Beauty Match Stix', 'Laura Mercier Translucent Honey']
  },
  {
    id: 'look-6',
    title: 'Green & Gold Silk Saree Bride',
    category: 'Engagement',
    image: '/images/portfolio/bride_green_saree_hd.jpg',
    clientName: 'Rhea Nambiar',
    location: 'Bangalore Palace',
    details: 'Vibrant wedding saree makeover with layered gold haars, traditional mehendi hands, and warm peach skin sculpting.',
    productsUsed: ['Tatcha The Silk Canvas', 'Kryolan DermaColor Camouflage', 'Urban Decay All Nighter Extra Hold']
  },
  {
    id: 'look-7',
    title: 'Classic Fine-Art Bridal Portrait',
    category: 'Editorial',
    image: '/images/portfolio/bride_royal_lehenga_hd.jpg',
    clientName: 'Meera Kapoor',
    location: 'Udaipur Palace Wedding',
    details: 'Timeless heirloom bridal lehenga styling with heavily embellished blouse, kundan chura bangles, and dramatic winged kohl eyes.',
    productsUsed: ['MAC Studio Fix Fluid', 'Anastasia Beverly Hills Brow Wiz', 'Huda Beauty Matte Liquid Lip']
  },
  {
    id: 'look-8',
    title: 'Mint Pastel Sangeet Silhouette',
    category: 'Party',
    image: '/images/portfolio/bride_mint_sangeet_hd.jpg',
    clientName: 'Kritika Roy',
    location: 'Taj Falaknuma, Hyderabad',
    details: 'Full-length sangeet dance look in mint green outfit designed with sweat-proof airbrush setting to withstand all night dancing.',
    productsUsed: ['Urban Decay All Nighter', 'Fenty Pro Filt’r Powder', 'Too Faced Better Than Sex Waterproof']
  }
];

export const REAL_BRIDES_MARQUEE = [
  { image: '/images/portfolio/bride_red_saree_hd.jpg', name: 'Sneha', style: 'Heritage Saree Bride' },
  { image: '/images/portfolio/bride_white_gown_hd.jpg', name: 'Vanessa', style: 'Christian Bridal Gown' },
  { image: '/images/portfolio/bride_pink_saree_hd.jpg', name: 'Pooja', style: 'Maharashtrian Muhurtham' },
  { image: '/images/portfolio/bride_cocktail_glam_hd.jpg', name: 'Aishwarya', style: 'Cocktail Sangeet Glam' },
  { image: '/images/portfolio/bride_yellow_floral_hd.jpg', name: 'Tanvi', style: 'Floral Hair Styling' },
  { image: '/images/portfolio/bride_green_saree_hd.jpg', name: 'Rhea', style: 'Traditional Gold Bride' },
  { image: '/images/portfolio/bride_royal_lehenga_hd.jpg', name: 'Meera', style: 'Editorial Royal Lehenga' },
  { image: '/images/portfolio/bride_mint_sangeet_hd.jpg', name: 'Kritika', style: 'Pastel Reception' },
  { image: '/images/portfolio/artist_aarya_palette_hd.jpg', name: 'Aarya', style: 'Master Makeup Artistry' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'I always wanted to get a natural look on my wedding day, booking Aarya was the best decision I made. The makeup was flawless, long-lasting and felt so natural. I received so many compliments for both engagement and wedding!',
    clientName: 'Shruti Mehta',
    role: 'Traditional Bride',
    avatar: '/real_brides/bride_pink_saree.jpg',
    rating: 5,
    occasion: 'Grand Wedding, Pune',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    quote: 'From my morning pheras to the late night sangeet, my makeup did not budge an inch. Aarya has the most calming energy on the craziest wedding morning!',
    clientName: 'Ananya Deshmukh',
    role: 'Destination Bride',
    avatar: '/real_brides/bride_red_saree.jpg',
    rating: 5,
    occasion: 'Palace Wedding, Udaipur',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    quote: 'I usually hate heavy cakey makeup, but Aarya understood my skin undertone instantly. My skin looked so radiant, luminous, and authentically me in all 4K photos!',
    clientName: 'Rhea Kapoor',
    role: 'Reception Glam',
    avatar: '/real_brides/bride_cocktail_glam.jpg',
    rating: 5,
    occasion: 'Cocktail & Sangeet, Mumbai',
    date: 'March 2026'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Discuss your look, preferences & occasion',
    detail: 'We review your wedding outfits, jewelry, lighting, skin type, and personal aesthetic to curate mood boards.'
  },
  {
    step: '02',
    title: 'Look Planning',
    description: 'Personalized style & product selection',
    detail: 'Pre-event product selection, skin prep regime recommendations, and schedule synchronization for your bridal party.'
  },
  {
    step: '03',
    title: 'Makeup Session',
    description: 'Professional, comfortable & detailed application',
    detail: 'Relaxing, hygienic application with premium luxury tools, custom skin sculpting, and precision eye artistry.'
  },
  {
    step: '04',
    title: 'Final Touch',
    description: 'Long-lasting, camera ready perfection',
    detail: 'Jewelry placement, dupatta draping, setting sprays, and a customized touch-up kit to keep you glowing all day.'
  }
];
