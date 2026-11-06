import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EADBCE]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#EEDACD]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Details matching mockup (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            
            <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A5B52] uppercase">
              Get in Touch
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#251513] leading-tight">
              We'd Love <br />
              <span className="font-editorial italic font-normal text-[#5A3833]">
                to Hear from You
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A403A] max-w-lg leading-relaxed">
              Have a question, a request or want to book a look? Reach out to us anytime.
            </p>

            {/* Contact Information List matching mockup */}
            <div className="space-y-4 pt-2">
              
              {/* Phone */}
              <motion.a
                whileHover={{ x: 6, backgroundColor: 'rgba(244, 232, 223, 0.7)' }}
                href="tel:+919876543210"
                className="flex items-center gap-4 p-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#F3E5DA] border border-[#DECCBF] flex items-center justify-center text-[#4A2D26] group-hover:bg-[#2E1A17] group-hover:text-white transition-all shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7A5B53] font-medium uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="text-base sm:text-lg font-serif-luxury font-semibold text-[#251513]">
                    +91 98765 43210
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ x: 6, backgroundColor: 'rgba(244, 232, 223, 0.7)' }}
                href="mailto:hello@makeupbyaarya.com"
                className="flex items-center gap-4 p-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#F3E5DA] border border-[#DECCBF] flex items-center justify-center text-[#4A2D26] group-hover:bg-[#2E1A17] group-hover:text-white transition-all shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7A5B53] font-medium uppercase tracking-wider">
                    Email Inquiries
                  </div>
                  <div className="text-base sm:text-lg font-serif-luxury font-semibold text-[#251513]">
                    hello@makeupbyaarya.com
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#F3E5DA] border border-[#DECCBF] flex items-center justify-center text-[#4A2D26] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7A5B53] font-medium uppercase tracking-wider">
                    Studio Location
                  </div>
                  <div className="text-base sm:text-lg font-serif-luxury font-semibold text-[#251513]">
                    Pune, Maharashtra
                  </div>
                </div>
              </div>

            </div>

            {/* Social Icons matching mockup */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-[#7A5B52] uppercase tracking-wider mb-3">
                Follow On Social Media
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <motion.a
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#D5BDAE] bg-[#FAF5F0] hover:bg-[#2E1A17] hover:text-white text-[#4A2D26] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                {/* YouTube */}
                <motion.a
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#D5BDAE] bg-[#FAF5F0] hover:bg-[#2E1A17] hover:text-white text-[#4A2D26] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>

                {/* Pinterest */}
                <motion.a
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#D5BDAE] bg-[#FAF5F0] hover:bg-[#2E1A17] hover:text-white text-[#4A2D26] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Pinterest"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.97-.12-2.47.02-3.53.13-.96.85-6.19.85-6.19s-.22-.43-.22-1.07c0-1 .58-1.75 1.3-1.75.62 0 .91.46.91 1.01 0 .62-.39 1.55-.6 2.4-.17.72.36 1.3 1.07 1.3 1.28 0 2.27-1.35 2.27-3.3 0-1.73-1.24-2.94-3.01-2.94-2.05 0-3.26 1.54-3.26 3.13 0 .62.24 1.28.54 1.64.06.07.07.13.05.2-.05.22-.17.7-.2.8-.03.14-.11.17-.25.1-1-.46-1.62-1.92-1.62-3.1 0-2.52 1.83-4.84 5.29-4.84 2.78 0 4.93 1.98 4.93 4.63 0 2.76-1.74 4.98-4.16 4.98-.81 0-1.58-.42-1.84-.92l-.5 1.9c-.18.7-.67 1.57-1 2.1A12 12 0 1 0 12 0z" />
                  </svg>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#D5BDAE] bg-[#FAF5F0] hover:bg-[#25D366] hover:text-white text-[#4A2D26] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.488-.891-.795-1.492-1.777-1.667-2.077-.175-.3-.019-.462.131-.612.135-.135.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.506-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502 0 1.476 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.701.25-1.302.175-1.428-.075-.126-.275-.201-.575-.351zM12 21.82a9.774 9.774 0 0 1-4.99-1.37l-.358-.213-3.712.973.99-3.619-.234-.372A9.778 9.778 0 1 1 12 21.82zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.114 1.516 5.852L0 24l6.305-1.487A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Real Luxury Illuminated Vanity Mirror Visual (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glowing halo behind mirror */}
              <div className="absolute -inset-4 rounded-3xl bg-radial from-[#F1DECF]/70 to-transparent blur-xl pointer-events-none" />

              {/* Card with real vanity mirror image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFC9BA] bg-[#EFE3D8]">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7 }}
                  src="/images/contact_vanity_real.jpg"
                  alt="Real luxury illuminated vanity mirror with flowers and cosmetic bottles"
                  className="w-full h-auto object-cover max-h-[480px]"
                  referrerPolicy="no-referrer"
                />

                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#2E1A17]/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption on vanity image */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[#DFC9BA] text-center shadow-lg">
                  <span className="text-xs font-semibold text-[#251513] block">
                    Private Studio Appointments Available
                  </span>
                  <span className="text-[11px] text-[#7A5B53] font-normal">
                    Kalyani Nagar & Baner, Pune
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
