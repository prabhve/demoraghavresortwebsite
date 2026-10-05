import React from 'react';
import { 
  Waves, 
  Sparkles, 
  Sun, 
  Music, 
  Clock, 
  ShieldCheck, 
  Check, 
  MessageSquare, 
  Phone,
  Droplet
} from 'lucide-react';
import { RESORT_INFO, FALLBACK_IMAGES, buildWhatsAppLink } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface PoolFeatureSectionProps {
  onOpenBooking: (venue?: string, eventType?: string) => void;
}

export const PoolFeatureSection: React.FC<PoolFeatureSectionProps> = ({ onOpenBooking }) => {
  const handleWhatsAppPoolBooking = () => {
    const link = buildWhatsAppLink({
      venue: 'Resort Swimming Pool & Sun Deck',
      eventType: 'Private Swimming Pool Party',
      note: 'Inquiring for swimming pool party slots, DJ rain dance setup, and poolside catering packages.'
    });
    window.open(link, '_blank');
  };

  return (
    <section id="pool" className="py-24 bg-[#030b14] relative overflow-hidden text-white border-t border-cyan-500/20">
      {/* Background Soft Sky Blue Radial Light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Visual Collage with Slide-Left Reveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="slide-left" duration={0.8}>
              <Card3D glowColor="cyan" depth={10} className="bg-[#071526] overflow-hidden shadow-2xl border-cyan-500/30">
                <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGES.pool;
                    }}
                    alt="Raghav Resort Swimming Pool"
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030b14] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#040912]/90 backdrop-blur-md text-cyan-300 text-xs font-bold rounded-full flex items-center gap-1.5 border border-cyan-500/40 shadow-md">
                      <Waves className="w-3.5 h-3.5 text-cyan-400" />
                      Signature Resort Amenity
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#071526]/95 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Droplet className="w-4 h-4 text-cyan-400" />
                          Sparkling Clean Filtered Water
                        </h4>
                        <p className="text-xs text-slate-300 font-medium">Continuous chemical filtration & on-site pool attendants</p>
                      </div>
                      <span className="text-cyan-300 text-xs font-bold px-2.5 py-1 bg-cyan-500/15 rounded-lg border border-cyan-400/30">
                        Open Slots
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>

              {/* Small floating 3D badge */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 p-3.5 rounded-2xl bg-[#071526]/95 border border-cyan-500/40 shadow-2xl items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold">
                  <Music className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-white">Poolside DJ Setup</div>
                  <div className="text-cyan-300 font-semibold">Rain dance & party sound</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pool Features & WhatsApp CTA with Slide-Right Reveal */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="slide-right" duration={0.8} delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#071526] text-cyan-300 border border-cyan-500/30 uppercase tracking-widest shadow-sm">
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                Beat The Heat In Royal Style
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white leading-tight mt-2">
                Hotel Raghav Resort & <span className="text-champagne-gradient">Swimming Pool</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                Raghav Resort stands out on the Unnao-Kanpur highway with its dedicated open-air swimming pool. Perfect for high-energy pre-wedding Haldi sundowners, birthday bashes, corporate team outings, or private weekend dips.
              </p>

              {/* Feature Checklist with Cyan Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-2">
                {[
                  'Exclusive private pool slots for parties',
                  'Comfortable sun loungers & deck seating',
                  'Rain dance system & outdoor sound facility',
                  'Night underwater pool lighting & mood lamps',
                  'Hygienic changing rooms, showers & lockers',
                  'Poolside mocktails & live snacks counter'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppPoolBooking}
                  className="py-3 px-6 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Book Pool on WhatsApp</span>
                </button>

                <a
                  href={`tel:${RESORT_INFO.phones[1].number}`}
                  className="py-3 px-5 btn-glass-luxury font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Desk</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
