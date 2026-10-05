import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Camera,
  MessageSquare
} from 'lucide-react';
import { GALLERY_ITEMS, FALLBACK_IMAGES, buildWhatsAppLink } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Lawn & Wedding', 'Banquets', 'Poolside', 'Rooms', 'Dining & Catering'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: 'Namaste Raghav Resort! Please share the latest photo portfolio and video tour of wedding setups, lawn, banquet halls & rooms.'
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#040912] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-black text-white tracking-tight leading-tight">
            Property <span className="text-gold-gradient">Photo Gallery</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Take a visual tour through our illuminated marriage lawn, grand chandelier banquet halls, private swimming pool, and luxury guest suites.
          </p>

          {/* Interactive Category Filter Pills (Swipeable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105 border border-amber-300'
                    : 'bg-[#081322] text-slate-300 hover:text-amber-300 hover:bg-[#0e1f38] border border-amber-500/25 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="zoom"
              delay={(index % 6) * 0.08}
              duration={0.65}
            >
              <Card3D
                glowColor={index % 2 === 0 ? 'gold' : 'cyan'}
                depth={6}
                className="overflow-hidden bg-[#081322]/95 cursor-pointer shadow-2xl border-amber-500/30 group h-full backdrop-blur-xl"
              >
                <div 
                  onClick={() => openLightbox(index)}
                  className="relative h-56 sm:h-64 overflow-hidden bg-slate-900"
                >
                  <img
                    src={item.url}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGES.lawn;
                    }}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-[#081322]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold bg-[#040912]/90 backdrop-blur-md text-amber-300 rounded-full border border-amber-500/30 shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity p-1.5 sm:p-2 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h4 className="text-sm sm:text-base font-serif-luxury font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 line-clamp-1 font-medium">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={0.6} className="mt-10 sm:mt-14 text-center">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 btn-whatsapp-luxury text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Request Photos on WhatsApp</span>
          </a>
        </ScrollReveal>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-colors cursor-pointer border border-white/20 z-50"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-colors cursor-pointer shadow-2xl border border-white/20 z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-colors cursor-pointer shadow-2xl border border-white/20 z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Photo & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] flex flex-col items-center px-4"
          >
            <img
              src={filteredItems[selectedPhotoIndex].url}
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_IMAGES.lawn;
              }}
              alt={filteredItems[selectedPhotoIndex].title}
              className="max-w-full max-h-[65vh] sm:max-h-[72vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-amber-500/30"
            />
            <div className="mt-3 sm:mt-4 text-center max-w-xl">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 font-extrabold">
                {filteredItems[selectedPhotoIndex].category}
              </span>
              <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-white mt-1">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 sm:mt-1">
                {filteredItems[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
