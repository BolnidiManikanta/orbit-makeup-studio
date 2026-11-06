import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { DETAILED_PACKAGES, SERVICES } from '../data/makeupData';

interface ServicePriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServicePriceListModal: React.FC<ServicePriceListModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'individual' | 'addons'>('packages');

  if (!isOpen) return null;

  const addons = [
    { title: 'Airbrush HD Upgrade', price: '₹4,500', desc: 'Silicone based sweat & water resistant 24-hr finish' },
    { title: 'Pre-Wedding Trial Session', price: '₹7,000', desc: 'Full consultation with half-face comparison and hair draft' },
    { title: 'Saree Pre-Pleating & Box Folding', price: '₹1,500 / saree', desc: 'Ironed, measured and ready to slip into in 3 minutes' },
    { title: 'Groom Grooming & Hair', price: '₹4,000', desc: 'Complexion balance, beard shaping and styling for the groom' },
    { title: 'Destination Outstation Travel Fee', price: 'Bespoke', desc: 'Airfare, local lodging, and airport transfers' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#251513]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF5F0] rounded-[2.5rem] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DFCEBF] p-6 sm:p-10 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-[#38231F] hover:bg-[#EBD9CC] transition-colors cursor-pointer"
          aria-label="Close price list"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE2D6] text-[11px] font-semibold text-[#5A3833] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-medium text-[#251513]">
            Service Price List & Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#664D46]">
            Every look includes premium international makeup products, high-grade hygiene protocols, lashes, hair styling, and personalized touch-up kits.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-[#EFE1D5] rounded-full border border-[#DCC5B5] inline-flex">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-[#2E1A17] text-white shadow-xs'
                  : 'text-[#5E423B] hover:text-[#251513]'
              }`}
            >
              Curated Packages
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'individual'
                  ? 'bg-[#2E1A17] text-white shadow-xs'
                  : 'text-[#5E423B] hover:text-[#251513]'
              }`}
            >
              Occasion Rates
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'addons'
                  ? 'bg-[#2E1A17] text-white shadow-xs'
                  : 'text-[#5E423B] hover:text-[#251513]'
              }`}
            >
              Add-ons & Upgrades
            </button>
          </div>
        </div>

        {/* Tab 1: Detailed Packages */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DETAILED_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FAF4EF] rounded-3xl p-6 border border-[#E3D0C1] shadow-xs flex flex-col justify-between hover:border-[#D5BDAE] transition-all relative overflow-hidden"
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-[#2E1A17] text-[#FAF5F0] text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-bl-xl">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif-luxury font-medium text-[#251513]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#7A5B53] mt-0.5 font-medium">
                      Ideal for: {pkg.idealFor}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#2E1A17] tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#9B8077] line-through tabular-nums">
                      {pkg.originalPrice}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#EADBCE]">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#523A34] leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#8A5A4D] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-[#EADBCE]">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(pkg.name);
                    }}
                    className="w-full py-3 px-4 rounded-full text-xs font-semibold bg-[#2E1A17] hover:bg-[#432621] text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Individual Occasion Rates */}
        {activeTab === 'individual' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-[#FAF4EF] rounded-3xl p-5 border border-[#E3D0C1] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-serif-luxury font-medium text-[#251513]">
                      {s.title}
                    </h4>
                    <span className="text-sm font-bold text-[#2E1A17] bg-[#EFE2D6] px-3 py-1 rounded-full">
                      {s.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B514A] leading-relaxed">
                    {s.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-[#7A5B52] uppercase tracking-wider">
                      Includes:
                    </span>
                    <ul className="space-y-1 text-xs text-[#523A34]">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A4D]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectService(s.title);
                  }}
                  className="mt-5 w-full py-2.5 rounded-full text-xs font-semibold bg-[#2E1A17] hover:bg-[#452823] text-white transition-colors cursor-pointer"
                >
                  Book {s.title}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Add-ons */}
        {activeTab === 'addons' && (
          <div className="space-y-4">
            {addons.map((a, i) => (
              <div
                key={i}
                className="bg-[#FAF4EF] rounded-2xl p-4 sm:p-5 border border-[#E3D0C1] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-base font-serif-luxury font-semibold text-[#251513]">
                    {a.title}
                  </h4>
                  <p className="text-xs text-[#6B514A]">{a.desc}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-base font-serif-luxury font-bold text-[#2E1A17]">
                    {a.price}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(`Add-on: ${a.title}`);
                    }}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#EFE2D6] hover:bg-[#2E1A17] hover:text-white text-[#38231F] transition-all cursor-pointer"
                  >
                    Add to Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guarantee Banner */}
        <div className="mt-8 pt-6 border-t border-[#E8DACF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E534B]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8A5A4D]" />
            <span>Strict hygiene standards: disposable applicators, sanitized palettes & brushes</span>
          </div>
          <div>
            <span>Customized quotes available for 5+ person wedding parties</span>
          </div>
        </div>

      </div>
    </div>
  );
};
