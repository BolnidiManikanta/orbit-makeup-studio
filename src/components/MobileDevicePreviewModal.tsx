import React, { useState } from 'react';
import { X, Smartphone, ArrowRight, Menu } from 'lucide-react';

interface MobileDevicePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MobileDevicePreviewModal: React.FC<MobileDevicePreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#251513]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF5F0] rounded-[2.5rem] max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#DFCEBF] p-6 sm:p-10 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-[#38231F] hover:bg-[#EBD9CC] transition-colors cursor-pointer"
          aria-label="Close mobile preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE2D6] text-[11px] font-semibold text-[#5A3833] uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Exact Design Specification · Panel 9</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-medium text-[#251513]">
            Mobile View — Fully Responsive & Elegant
          </h2>
          <p className="text-xs sm:text-sm text-[#664D46]">
            Compare the responsive mobile layouts directly matching the mobile screen composition in the design blueprint.
          </p>
        </div>

        {/* 3 Phone Mockup Frames matching Panel 9 in the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Phone Frame 1: Mobile Hero */}
          <div className="bg-[#1E110F] p-3 rounded-[3rem] shadow-2xl border-4 border-[#3D2520] max-w-[310px] mx-auto w-full">
            {/* Screen Inner */}
            <div className="bg-[#FAF5F0] rounded-[2.4rem] overflow-hidden p-4 space-y-4 text-center border border-[#DFCEBF] relative min-h-[520px] flex flex-col justify-between">
              
              {/* Top notch & bar */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EBD9CD]">
                  <div className="text-left">
                    <div className="font-serif-luxury text-sm font-semibold text-[#251513]">
                      Makeup <span className="font-script text-base text-[#5A3833]">by Aarya</span>
                    </div>
                  </div>
                  <Menu className="w-4 h-4 text-[#2E1A17]" />
                </div>

                <div className="pt-3 space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#7A5B52]">
                    Our Process
                  </span>
                  <h3 className="text-xl font-serif-luxury font-normal text-[#251513] leading-snug">
                    Enhancing <br />
                    Your Natural <span className="font-editorial italic">Beauty</span>
                  </h3>
                  <p className="text-[11px] text-[#664D46] px-1">
                    Professional Makeup Artistry for Brides, Events and Special Occasions
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-full bg-[#2E1A17] text-white text-xs font-semibold shadow-xs"
                >
                  Book Your Look →
                </button>

                {/* Hero image preview */}
                <div className="rounded-2xl overflow-hidden aspect-4/3 bg-[#E8D7CA]">
                  <img
                    src="/images/hero_bride_real.jpg"
                    alt="Hero mobile view"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Phone Frame 2: Mobile Services */}
          <div className="bg-[#1E110F] p-3 rounded-[3rem] shadow-2xl border-4 border-[#3D2520] max-w-[310px] mx-auto w-full">
            {/* Screen Inner */}
            <div className="bg-[#FAF5F0] rounded-[2.4rem] overflow-hidden p-4 space-y-3 border border-[#DFCEBF] relative min-h-[520px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EBD9CD]">
                  <div className="font-serif-luxury text-sm font-semibold text-[#251513]">
                    Makeup <span className="font-script text-base text-[#5A3833]">by Aarya</span>
                  </div>
                  <Menu className="w-4 h-4 text-[#2E1A17]" />
                </div>

                <h3 className="text-lg font-serif-luxury font-semibold text-[#251513] pt-3 pb-2">
                  Our Services
                </h3>

                {/* Stacked Mini Service Cards */}
                <div className="space-y-2.5 text-left">
                  {/* Card 1 */}
                  <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F6EDE5] border border-[#E4D1C3]">
                    <img src="/images/service_bridal_real.jpg" alt="Bridal" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div>
                      <div className="text-xs font-serif-luxury font-bold text-[#251513]">Bridal Makeup</div>
                      <div className="text-[10px] text-[#7A5B53]">Complete bridal looks with a timeless touch</div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F6EDE5] border border-[#E4D1C3]">
                    <img src="/images/service_party_real.jpg" alt="Party" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div>
                      <div className="text-xs font-serif-luxury font-bold text-[#251513]">Party Makeup</div>
                      <div className="text-[10px] text-[#7A5B53]">Glamorous & elegant for special events</div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#F6EDE5] border border-[#E4D1C3]">
                    <img src="/images/service_engagement_real.jpg" alt="Engagement" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div>
                      <div className="text-xs font-serif-luxury font-bold text-[#251513]">Engagement</div>
                      <div className="text-[10px] text-[#7A5B53]">Soft, radiant & photogenic looks</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#7A5B53] font-medium">
                  Swipe cards or tap to expand details
                </span>
              </div>

            </div>
          </div>

          {/* Phone Frame 3: Mobile Booking */}
          <div className="bg-[#1E110F] p-3 rounded-[3rem] shadow-2xl border-4 border-[#3D2520] max-w-[310px] mx-auto w-full">
            {/* Screen Inner */}
            <div className="bg-[#FAF5F0] rounded-[2.4rem] overflow-hidden p-4 space-y-3 border border-[#DFCEBF] relative min-h-[520px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EBD9CD]">
                  <div className="font-serif-luxury text-sm font-semibold text-[#251513]">
                    Makeup <span className="font-script text-base text-[#5A3833]">by Aarya</span>
                  </div>
                  <Menu className="w-4 h-4 text-[#2E1A17]" />
                </div>

                <h3 className="text-lg font-serif-luxury font-semibold text-[#251513] pt-2 pb-1 text-center">
                  Book Appointment
                </h3>

                {/* Form fields mockup */}
                <div className="space-y-2 text-left pt-1">
                  <div>
                    <span className="text-[10px] font-semibold text-[#4A2D26]">Name *</span>
                    <div className="h-8 rounded-xl bg-[#F2E5DC] border border-[#DFCEBF] px-3 flex items-center text-xs text-[#8A6A61]">
                      Priya Sharma
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-[#4A2D26]">Phone Number *</span>
                    <div className="h-8 rounded-xl bg-[#F2E5DC] border border-[#DFCEBF] px-3 flex items-center text-xs text-[#8A6A61]">
                      +91 98765 43210
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-[#4A2D26]">Service *</span>
                    <div className="h-8 rounded-xl bg-[#F2E5DC] border border-[#DFCEBF] px-3 flex items-center justify-between text-xs text-[#38231F]">
                      <span>Bridal Makeup</span>
                      <span>▼</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-[#4A2D26]">Preferred Date *</span>
                    <div className="h-8 rounded-xl bg-[#F2E5DC] border border-[#DFCEBF] px-3 flex items-center justify-between text-xs text-[#38231F]">
                      <span>Nov 18, 2026</span>
                      <span>📅</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#2E1A17] text-white text-xs font-semibold shadow-xs"
                >
                  Book Appointment →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-[#E8DACF] text-center text-xs text-[#7A5B53]">
          The entire website is automatically responsive across smartphones, tablets, and desktop displays.
        </div>

      </div>
    </div>
  );
};
