import React from 'react';
import { 
  Check, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Crown, 
  CalendarCheck,
  Zap
} from 'lucide-react';
import { PACKAGES, PackageOffer, FALLBACK_IMAGES, buildWhatsAppLink } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface PackagesSectionProps {
  onOpenBooking: (venue?: string, eventType?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  const handleWhatsAppPackage = (pkg: PackageOffer) => {
    const link = buildWhatsAppLink({
      eventType: pkg.name,
      note: `Inquiring for package rates and date availability for: "${pkg.name}".`
    });
    window.open(link, '_blank');
  };

  const getPackageGlow = (idx: number): 'gold' | 'emerald' | 'cyan' | 'ruby' => {
    if (idx === 0) return 'gold';
    if (idx === 1) return 'ruby';
    if (idx === 2) return 'cyan';
    return 'gold';
  };

  return (
    <section id="packages" className="py-24 bg-[#050c18] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Curated Celebration Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            Transparent & <span className="text-gold-gradient">Customizable Packages</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every celebration is unique. Choose from our complete wedding bundles or build your custom package directly on WhatsApp with our resort banquet manager.
          </p>
        </ScrollReveal>

        {/* Packages 3D Cards Grid with ScrollReveal - Perfectly Uniform & Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <ScrollReveal
              key={pkg.id}
              animation="3d-flip"
              delay={idx * 0.1}
              duration={0.7}
              className="h-full"
            >
              <Card3D
                glowColor={getPackageGlow(idx)}
                depth={8}
                className="bg-[#081322]/95 overflow-hidden flex flex-col justify-between group shadow-2xl border-amber-500/30 h-full backdrop-blur-xl"
              >
                <div className="flex flex-col flex-1">
                  {/* Image Header with Badge */}
                  <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={pkg.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_IMAGES.lawn;
                      }}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-transparent to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full shadow-md uppercase tracking-wider">
                        {pkg.tag}
                      </span>
                    </div>

                    {pkg.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 text-[10px] font-semibold bg-[#040912]/90 text-amber-300 border border-amber-400/40 rounded-full backdrop-blur-md shadow-sm">
                          {pkg.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content - Standardized Min Heights for 100% Horizontal Alignment */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Package Title (Equalized height) */}
                    <div className="min-h-[52px] flex items-start">
                      <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {pkg.name}
                      </h3>
                    </div>
                    
                    {/* Subtitle / Popular For (Equalized height) */}
                    <div className="min-h-[34px] flex items-center">
                      <p className="text-[11px] text-amber-400 font-semibold leading-tight line-clamp-2">
                        {pkg.popularFor}
                      </p>
                    </div>

                    {/* Description (Equalized height) */}
                    <div className="min-h-[44px] mt-1.5">
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Features list with Checkmarks (Equalized height) */}
                    <div className="mt-4 pt-4 border-t border-amber-500/20 flex-1 flex flex-col">
                      <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block mb-2">
                        Package Inclusions:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300 flex-1">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Price & CTA - Locked to Baseline via mt-auto across all cards */}
                <div className="p-5 pt-0 mt-auto shrink-0">
                  <div className="p-2.5 bg-[#040912] rounded-xl border border-amber-500/20 mb-3 text-center shadow-inner h-[54px] flex flex-col justify-center">
                    <span className="text-[10px] text-slate-400 block font-medium leading-none mb-1">Pricing & Availability</span>
                    <span className="text-xs font-bold text-amber-300 leading-tight">
                      {pkg.priceEstimate}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppPackage(pkg)}
                    className="w-full py-2.5 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom Event Note */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={0.6}>
          <div className="mt-12 text-center text-xs text-slate-300 flex items-center justify-center gap-2 font-medium">
            <CalendarCheck className="w-4 h-4 text-amber-400" />
            <span>Need a specific date or special requirements? Chat on WhatsApp to hold your wedding date before it fills up.</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
