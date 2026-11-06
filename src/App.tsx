/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { RealBridesMotionGallery } from './components/RealBridesMotionGallery';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicePriceListModal } from './components/ServicePriceListModal';
import { ShowreelModal } from './components/ShowreelModal';
import { MobileDevicePreviewModal } from './components/MobileDevicePreviewModal';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isMobilePreviewOpen, setIsMobilePreviewOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#2E1A17] selection:bg-[#EAD1C2] selection:text-[#251513]">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMobilePreview={() => setIsMobilePreviewOpen(true)}
      />

      <main>
        {/* 1. Hero: Enhancing Your Natural Beauty */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenShowreel={() => setIsShowreelOpen(true)}
        />

        {/* 2. About Me: Meet Aarya */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 3. Services: Signature Beauty Services */}
        <Services
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenPriceListModal={() => setIsPriceListOpen(true)}
        />

        {/* 4. Portfolio: A Closer Look at Our Work (Seamless Flow from Services) */}
        <Portfolio
          onSelectLookForBooking={handleSelectServiceForBooking}
        />

        {/* 5. Real Brides In Motion (Continuous Live Makeover Gallery) */}
        <RealBridesMotionGallery
          onSelectBrideLook={handleSelectServiceForBooking}
        />

        {/* 5. Booking System: Let's Create Your Look */}
        <Booking
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService('')}
        />

        {/* 6. Testimonials: Loved by Our Clients */}
        <Testimonials />

        {/* 7. Process: A Seamless Beauty Experience */}
        <Process />

        {/* 8. Contact: We'd Love to Hear from You */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ServicePriceListModal
        isOpen={isPriceListOpen}
        onClose={() => setIsPriceListOpen(false)}
        onSelectService={handleSelectServiceForBooking}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <MobileDevicePreviewModal
        isOpen={isMobilePreviewOpen}
        onClose={() => setIsMobilePreviewOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Button (WhatsApp Quick Connect) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        <a
          href="https://wa.me/919876543210?text=Hello%20Aarya,%20I%20would%20like%20to%20inquire%20about%20makeup%20services."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Aarya on WhatsApp"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 text-xs font-semibold cursor-pointer group"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Chat with Aarya</span>
        </a>
      </div>

    </div>
  );
}
