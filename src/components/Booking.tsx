import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { BookingSubmission } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface BookingProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const Booking: React.FC<BookingProps> = ({
  preselectedService = '',
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Bridal Makeup',
    date: '',
    timeSlot: 'Morning (08:00 AM - 12:00 PM)',
    city: 'Pune',
    message: '',
  });

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [submittedBooking, setSubmittedBooking] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: BookingSubmission = {
        id: `MUA-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        date: formData.date || new Date().toISOString().split('T')[0],
        timeSlot: formData.timeSlot,
        venueCity: formData.city,
        message: formData.message,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };
      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Bridal Makeup',
      date: '',
      timeSlot: 'Morning (08:00 AM - 12:00 PM)',
      city: 'Pune',
      message: '',
    });
    if (onClearPreselectedService) onClearPreselectedService();
  };

  return (
    <section id="booking" className="py-20 lg:py-28 relative bg-[#F7EFE8] border-t border-[#EADBCE] overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E8D4C5]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Brushes Visual matching mockup (Span 6) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            
            <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#7A5B52] uppercase">
              Book An Appointment
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#251513] leading-tight">
              Let's Create <br />
              <span className="font-editorial italic font-normal text-[#5A3833]">
                Your Look
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#5A403A] max-w-lg leading-relaxed">
              Share your details and preferred date, and we'll get in touch to confirm your booking.
            </p>

            {/* Key trust bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#4E3530]">
                <div className="w-5 h-5 rounded-full bg-[#E5D2C4] flex items-center justify-center text-[#5A3833] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Free 20-minute video or in-person pre-consultation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4E3530]">
                <div className="w-5 h-5 rounded-full bg-[#E5D2C4] flex items-center justify-center text-[#5A3833] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>100% genuine luxury cosmetics (Dior, Charlotte Tilbury, NARS)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4E3530]">
                <div className="w-5 h-5 rounded-full bg-[#E5D2C4] flex items-center justify-center text-[#5A3833] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Available for on-location venue travel across India & destination</span>
              </div>
            </div>

            {/* Real Professional Brushes Artwork */}
            <div className="relative rounded-3xl overflow-hidden border border-[#DECBBB] shadow-md max-w-md bg-[#EADACD] group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/images/booking_brushes_real.jpg"
                alt="Real professional makeup artist brushes and cosmetic palette"
                className="w-full h-auto object-cover max-h-[200px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E1A17]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-serif-luxury tracking-wide">
                Sanitized & sterilized medical-grade tools
              </div>
            </div>

          </motion.div>

          {/* Right Column: Appointment Form Card matching mockup (Span 6) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#FAF4EF]/95 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-[#E2CFBF] shadow-lg">
              
              <AnimatePresence mode="wait">
                {!submittedBooking ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    
                    {/* Name field */}
                    <div>
                      <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] placeholder-[#9E867E] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] placeholder-[#9E867E] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] placeholder-[#9E867E] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all"
                        />
                      </div>
                    </div>

                    {/* Service dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                        Service *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all appearance-none cursor-pointer"
                        >
                          {preselectedService && (
                            <option value={preselectedService}>
                              ★ {preselectedService} (Selected Treatment)
                            </option>
                          )}
                          <optgroup label="Signature Makeup & Bridal Suites">
                            <option value="Bridal Makeup">Bridal Makeup (from ₹28,000)</option>
                            <option value="Party Makeup">Party Makeup (from ₹9,500)</option>
                            <option value="Engagement">Engagement Look (from ₹16,500)</option>
                            <option value="Personal Makeup">Personal / Shoot Makeup (from ₹6,500)</option>
                            <option value="The Royal Bridal Suite">The Royal Bridal Suite (₹38,000)</option>
                            <option value="Celebration Duo (Engagement + Sangeet)">Celebration Duo (₹22,000)</option>
                            <option value="Bridal Entourage (Mom & Bridesmaids)">Bridal Entourage (₹6,000 / person)</option>
                          </optgroup>
                          <optgroup label="Beauty Parlour & Skincare Treatments (26 Rituals)">
                            <option value="Acne Treatments">Acne Treatments (₹1,999)</option>
                            <option value="Blow Dry">Blow Dry (₹999)</option>
                            <option value="Body Waxing">Body Waxing (₹1,899)</option>
                            <option value="Brazilian Waxing">Brazilian Waxing (₹2,199)</option>
                            <option value="Bridal Services">Bridal Services (₹14,999)</option>
                            <option value="Eyebrow Beautification">Eyebrow Beautification (₹899)</option>
                            <option value="Eyebrow Shaping">Eyebrow Shaping (₹399)</option>
                            <option value="Eyebrow Threading">Eyebrow Threading (₹199)</option>
                            <option value="Facials">Facials (₹2,499)</option>
                            <option value="Haircut">Haircut (₹1,199)</option>
                            <option value="Hair Extensions">Hair Extensions (₹6,499)</option>
                            <option value="Hairstyling">Hairstyling (₹2,299)</option>
                            <option value="Hair Threading">Hair Threading (₹299)</option>
                            <option value="Make-up">Make-up (₹3,999)</option>
                            <option value="Make-up Services">Make-up Services (₹4,499)</option>
                            <option value="Manicure">Manicure (₹1,299)</option>
                            <option value="Massage">Massage (₹2,799)</option>
                            <option value="Online Beauty Salon Booking">Online Beauty Salon Booking (Complimentary)</option>
                            <option value="Pedicure">Pedicure (₹1,499)</option>
                            <option value="Shampoo & Conditioning">Shampoo & Conditioning (₹799)</option>
                            <option value="Skin Care">Skin Care (₹2,299)</option>
                            <option value="Spa Services">Spa Services (₹4,999)</option>
                            <option value="Tanning">Tanning (₹2,199)</option>
                            <option value="Waxing">Waxing (₹799)</option>
                            <option value="Wedding and Event Preparation">Wedding and Event Preparation (₹8,999)</option>
                            <option value="Bridal Makeup & Styling">Bridal Makeup & Styling (₹12,999)</option>
                          </optgroup>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6E4F47]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Date & Time Slot Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                          Preferred Time Slot
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all cursor-pointer"
                        >
                          <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                          <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                          <option value="Evening (04:00 PM - 09:00 PM)">Evening (04:00 PM - 09:00 PM)</option>
                          <option value="Full Day Bridal Booking">Full Day Bridal Booking</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#3D2520] uppercase tracking-wider mb-1.5">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your wedding theme, venue location, outfit colors, or special requirements..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4E9E0] border border-[#DDCBC0] text-sm text-[#251513] placeholder-[#9E867E] focus:outline-hidden focus:ring-2 focus:ring-[#8A5A4D] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button matching mockup */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-[#251513]/90 hover:bg-[#251513] text-white rounded-full text-sm sm:text-base font-semibold backdrop-blur-md border border-white/30 shadow-[0_4px_25px_rgba(46,26,23,0.3)] hover:shadow-[0_4px_30px_rgba(46,26,23,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 active:scale-98"
                      >
                        {isSubmitting ? (
                          <span>Reserving Date...</span>
                        ) : (
                          <>
                            <span>Book Appointment</span>
                            <ArrowRight className="w-4 h-4 text-[#E5C7A9] group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-center text-[11px] text-[#7A5B53] pt-1">
                      🔒 No advance payment needed online. Aarya will contact you directly within 2 hours.
                    </p>

                  </motion.form>
                ) : (
                  /* Success Booking Receipt */
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-[#E5D4C7] text-[#4A2D26] mx-auto flex items-center justify-center shadow-inner"
                    >
                      <CheckCircle2 className="w-9 h-9" />
                    </motion.div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7A5B52]">
                        Booking Request Received
                      </span>
                      <h3 className="text-2xl font-serif-luxury font-medium text-[#251513]">
                        Thank you, {submittedBooking.name}!
                      </h3>
                      <p className="text-xs text-[#6B514A]">
                        Reference ID:{' '}
                        <span className="font-mono font-bold text-[#351E19]">
                          {submittedBooking.id}
                        </span>
                      </p>
                    </div>

                    <div className="bg-[#F3E6DC] rounded-2xl p-4 text-left text-xs sm:text-sm text-[#4E3530] space-y-2 border border-[#E0CEBF]">
                      <div className="flex justify-between border-b border-[#E3D3C6] pb-2">
                        <span className="text-[#7A5B52]">Reserved Service:</span>
                        <span className="font-semibold text-[#251513]">{submittedBooking.service}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#E3D3C6] pb-2">
                        <span className="text-[#7A5B52]">Date & Slot:</span>
                        <span className="font-semibold text-[#251513]">
                          {submittedBooking.date} ({submittedBooking.timeSlot.split(' ')[0]})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7A5B52]">Phone Contact:</span>
                        <span className="font-semibold text-[#251513]">{submittedBooking.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/919876543210?text=Hi%20Aarya,%20I%20just%20submitted%20a%20booking%20request%20(${submittedBooking.id})%20for%20${encodeURIComponent(submittedBooking.service)}%20on%20${submittedBooking.date}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 shadow-xs"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp</span>
                      </a>

                      <button
                        onClick={handleReset}
                        className="w-full py-3 px-4 rounded-full text-xs font-semibold bg-[#F0E1D5] hover:bg-[#E8D4C5] text-[#3D2520] border border-[#DAC6B7] transition-colors"
                      >
                        Book Another Date
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
