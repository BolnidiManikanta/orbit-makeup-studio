import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMobilePreview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMobilePreview }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking for active underline indicator
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services ▾', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'opacity-100 translate-y-0 bg-[#180D0B]/95 backdrop-blur-md shadow-2xl border-b border-[#3E2420]/80 py-3 pointer-events-auto'
            : 'max-md:bg-[#180D0B]/70 max-md:backdrop-blur-xs py-3.5 md:opacity-0 md:-translate-y-3 md:pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Brand Wordmark / Logo */}
            <a href="#home" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
              {/* Lotus flower icon in gold */}
              <div className="w-8 h-8 flex items-center justify-center text-[#E5C7A9] group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="w-7 h-7 text-[#E5C7A9]"
                >
                  <path d="M20 6C20 14 13 22 13 26C13 30 16 33 20 33C24 33 27 30 27 26C27 22 20 14 20 6Z" fill="#E5C7A9" fillOpacity="0.3" />
                  <path d="M13 18C10 21 8 25 8 28C8 31 11 33 15 33C17 33 19 32 20 31C18 28 16 23 13 18Z" />
                  <path d="M27 18C30 21 32 25 32 28C32 31 29 33 25 33C23 33 21 32 20 31C22 28 24 23 27 18Z" />
                  <path d="M20 33V35M14 34L12 36M26 34L28 36" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif-luxury tracking-wide text-xl sm:text-2xl text-white leading-tight font-normal">
                  Makeup <span className="font-script text-2xl sm:text-3xl text-[#E5C7A9] -ml-1">by Aarya</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#CBB29C] font-light -mt-0.5">
                  Professional Makeup Artist
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links with dynamic active underline tracking */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-light text-white/90">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 ${
                      isActive
                        ? 'text-white font-normal after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E5C7A9]'
                        : 'text-white/80 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E5C7A9]/60 after:transition-all'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Outline Book Appointment button with Calendar icon matching image */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Mobile preview toggle with frosted glass texture */}
              <button
                onClick={onOpenMobilePreview}
                title="View Mobile Design Mockup"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#E5C7A9] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 rounded-full transition-all whitespace-nowrap shadow-xs cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#E5C7A9]" />
                <span>Mobile Preview</span>
              </button>

              {/* Exact Book Appointment pill button with calendar icon & frosted glass texture */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md transition-all duration-300 rounded-full border border-white/50 hover:border-white shadow-[0_4px_20px_rgba(229,199,169,0.25)] hover:shadow-[0_4px_25px_rgba(229,199,169,0.45)] active:scale-98 whitespace-nowrap cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#E5C7A9]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile Hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-md flex flex-col justify-start">
          <div className="bg-[#1C0E0C] w-full p-6 shadow-2xl border-b border-[#3E2420] text-white">
            <div className="flex items-center justify-between pb-4 border-b border-[#3E2420]">
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl text-white font-medium">
                  Makeup <span className="font-script text-2xl text-[#E5C7A9]">by Aarya</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#CBB29C]">
                  Professional Makeup Artist
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-light py-2 px-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-white/15 text-white font-medium'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#3E2420] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#1F100E] bg-[#E5C7A9] rounded-full shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#1F100E]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
