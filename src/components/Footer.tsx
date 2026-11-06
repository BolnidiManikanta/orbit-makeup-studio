import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241311] text-[#EAD8CB] border-t border-[#3D2520] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#3E2420]">
          
          {/* Brand Info (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl text-[#FAF5F0] font-medium">
                Makeup <span className="font-script text-3xl text-[#D8B49B]">by Aarya</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#BCA194] font-medium -mt-1">
                Professional Makeup Artist
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#BBA094] max-w-sm leading-relaxed">
              Bespoke bridal, event, and high-fashion makeup artistry celebrating your individuality and natural beauty with timeless elegance.
            </p>

            <div className="text-xs text-[#9E8276] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B49B]" />
              <span>Pune · Mumbai · Destination Weddings Worldwide</span>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF5F0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#BBA094]">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Aarya</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Price List</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Business Hours & Studio (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF5F0]">
              Studio Hours & Bookings
            </h4>
            <div className="text-xs text-[#BBA094] space-y-1.5 leading-relaxed">
              <p>Tuesday – Sunday: 08:00 AM – 08:00 PM</p>
              <p>Monday: By Appointment Only (Bridal Inquiries)</p>
              <p className="pt-2 text-[#D8B49B]">
                Direct Booking Hotline: +91 98765 43210
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#FAF5F0] hover:text-[#D8B49B] transition-colors cursor-pointer group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8276]">
          <p>© {new Date().getFullYear()} Makeup by Aarya. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with luxury aesthetic and precision artistry</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
