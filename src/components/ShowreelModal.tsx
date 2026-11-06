import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  if (!isOpen) return null;

  const reelClips = [
    {
      title: 'Bridal Heritage Transformation',
      location: 'Udaipur Palace Wedding',
      image: '/images/hero_bride_real.jpg',
      time: '0:42',
      details: 'Muhurtham look creation with kundan gold jewelry placement and 16-hour sweat-proof skin finish.'
    },
    {
      title: 'Cocktail Sangeet Shimmer',
      location: 'JW Marriott Pune',
      image: '/images/service_party_real.jpg',
      time: '0:35',
      details: 'High-impact smoky bronze lids, sculpted cheekbones, and effortless Hollywood waves.'
    },
    {
      title: 'Dewy Pastel Engagement',
      location: 'Ritz-Carlton Pune',
      image: '/images/portfolio_5_bride_smile_real.jpg',
      time: '0:38',
      details: 'Glass-skin hydration prep, peach monochromatic blush, and feathered natural brows.'
    }
  ];

  const currentClip = reelClips[activeClipIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#251513]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FAF5F0] rounded-[2.5rem] max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#DFCEBF] flex flex-col relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF5F0]/80 backdrop-blur-xs text-[#2E1A17] hover:bg-[#EBD9CC] transition-colors cursor-pointer"
          aria-label="Close showreel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display Container */}
        <div className="relative aspect-16/9 bg-[#1E0F0D] overflow-hidden group">
          <img
            src={currentClip.image}
            alt={currentClip.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105' : 'scale-100 filter brightness-90'
            }`}
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#251513]/80 via-transparent to-black/30 pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Showreel 4K
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
              {currentClip.location}
            </span>
          </div>

          {/* Center Play/Pause button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-white/90 text-[#2E1A17] hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-2xl cursor-pointer"
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
            </button>
          </div>

          {/* Bottom Player Overlay Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm">{currentClip.title}</span>
              <span className="text-white/70">({currentClip.time})</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/30">
            <div
              className={`h-full bg-[#E5B598] transition-all duration-300 ${
                isPlaying ? 'w-2/3' : 'w-1/3'
              }`}
            />
          </div>
        </div>

        {/* Reel Clips Switcher */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A5B52]">
              Select Beauty Reel Chapter
            </span>
            <span className="text-xs text-[#8A6B63]">
              Filmed on location in Pune & Rajasthan
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {reelClips.map((clip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveClipIndex(idx);
                  setIsPlaying(true);
                }}
                className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                  activeClipIndex === idx
                    ? 'bg-[#F2E5DC] border-[#4A2D26] shadow-xs'
                    : 'bg-[#FAF4EF] border-[#E5D4C7] hover:border-[#D0B9AA]'
                }`}
              >
                <div className="text-[11px] font-semibold text-[#251513] truncate">
                  {clip.title}
                </div>
                <div className="text-[10px] text-[#7A5B53] truncate">
                  {clip.location}
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-[#634942] leading-relaxed pt-1">
            {currentClip.details}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8DACF]">
            <div className="flex items-center gap-2 text-xs text-[#7A5B52]">
              <Sparkles className="w-4 h-4 text-[#8A5A4D]" />
              <span>Available for 2026-2027 Wedding Bookings</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="py-2.5 px-6 rounded-full bg-[#2E1A17] hover:bg-[#452823] text-white text-xs font-semibold shadow-xs cursor-pointer"
            >
              Reserve Wedding Date →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
