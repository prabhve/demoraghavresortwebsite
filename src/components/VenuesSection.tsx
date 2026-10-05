import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Phone, 
  Maximize2, 
  Trees, 
  Building2, 
  Waves, 
  BedDouble, 
  ArrowRight,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { VENUE_SPACES, VenueSpace, FALLBACK_IMAGES, buildWhatsAppLink } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface VenuesSectionProps {
  onOpenBooking: (venue?: string, eventType?: string) => void;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lawn' | 'Banquet' | 'Pool' | 'Rooms'>('All');

  const filteredVenues = activeFilter === 'All' 
    ? VENUE_SPACES 
    : VENUE_SPACES.filter((v) => v.type === activeFilter);

  const handleDirectWhatsAppForVenue = (venue: VenueSpace) => {
    const link = buildWhatsAppLink({
      venue: `${venue.name} (${venue.capacity})`,
      eventType: venue.type === 'Rooms' ? 'AC Deluxe Room Stay' : venue.type === 'Pool' ? 'Swimming Pool Party' : 'Wedding / Event',
      note: `Inquiring for date availability and price quote for ${venue.name}.`
    });
    window.open(link, '_blank');
  };

  const getGlowType = (type: string): 'gold' | 'emerald' | 'cyan' | 'ruby' => {
    if (type === 'Pool') return 'cyan';
    if (type === 'Lawn') return 'emerald';
    if (type === 'Rooms') return 'gold';
    return 'gold';
  };

  return (
    <section id="venues" className="py-16 sm:py-24 bg-[#040912] text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Background Subtle Hotel Lawn Watermark Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src={FALLBACK_IMAGES.lawn}
          alt="Hotel Lawn Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040912] via-[#040912]/80 to-[#040912]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-md">
            <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Explore 5 Premier Event Spaces</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-black text-white tracking-tight leading-tight">
            Spaces Designed for <span className="text-gold-gradient">Every Royal Celebration</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            From the grand open-air lawn under star-lit skies to crystal chandelier banquet ballrooms, private pool decks, and luxury suites.
          </p>

          {/* Interactive Filter Pills (Swipeable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mt-6 sm:mt-8">
            {(['All', 'Lawn', 'Banquet', 'Pool', 'Rooms'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105 border border-amber-300'
                    : 'bg-[#081322] text-slate-300 hover:text-amber-300 hover:bg-[#0e1f38] border border-amber-500/25 shadow-sm'
                }`}
              >
                {filter === 'All' ? 'All Spaces (5)' : filter === 'Lawn' ? 'Grand Lawn (1000+)' : filter === 'Banquet' ? '2 AC Banquets' : filter === 'Pool' ? 'Swimming Pool' : '12+ AC Rooms'}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Venues 3D Grid with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredVenues.map((venue, idx) => (
            <ScrollReveal
              key={venue.id}
              animation="3d-flip"
              delay={idx * 0.12}
              duration={0.75}
            >
              <Card3D
                glowColor={getGlowType(venue.type)}
                depth={8}
                className="bg-[#081322]/95 overflow-hidden flex flex-col justify-between group shadow-2xl border-amber-500/30 h-full backdrop-blur-xl"
              >
                {/* Image & Capacity Badge */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={venue.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGES.lawn;
                    }}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081322] via-[#081322]/30 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                    <span className="px-2.5 sm:px-3 py-1 bg-[#040912]/90 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[11px] sm:text-xs font-bold rounded-full flex items-center gap-1.5 shadow-md">
                      {venue.type === 'Lawn' && <Trees className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      {venue.type === 'Banquet' && <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      {venue.type === 'Pool' && <Waves className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                      {venue.type === 'Rooms' && <BedDouble className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      <span>{venue.type}</span>
                    </span>
                  </div>

                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2.5 sm:px-3 py-1 bg-[#081322]/90 backdrop-blur-md text-amber-300 text-[11px] sm:text-xs font-bold rounded-full border border-amber-400/40 shadow-sm">
                      {venue.capacity}
                    </span>
                  </div>

                  {/* Bottom Overlay Title on Image */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif-luxury font-black text-white group-hover:text-amber-300 transition-colors drop-shadow leading-tight">
                      {venue.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-amber-300/80 mt-0.5 sm:mt-1 font-medium truncate">
                      {venue.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {venue.description}
                    </p>

                    {/* Highlights list */}
                    <div className="mt-4 sm:mt-5 space-y-2">
                      <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                        Key Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-slate-300">
                        {venue.highlights.slice(0, 4).map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For Tags */}
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-amber-500/20">
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block mb-1.5 uppercase tracking-wider font-semibold">
                        Ideal For:
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {venue.idealFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[11px] sm:text-xs bg-[#040912] rounded-md text-amber-300 border border-amber-500/25 font-bold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <button
                      onClick={() => handleDirectWhatsAppForVenue(venue)}
                      className="flex-1 py-3 px-4 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-white/20" />
                      <span>WhatsApp Quote</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking(venue.name)}
                      className="py-3 px-4 btn-glass-luxury font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Check Date</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Full Property Buyout Banner with Scroll Animation */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={0.7} className="mt-10 sm:mt-14">
          <Card3D glowColor="gold" depth={8} className="p-5 sm:p-7 md:p-9 bg-gradient-to-r from-[#081322] via-[#061120] to-[#04141d] text-white border-amber-500/40 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black bg-amber-400 text-[#040912] uppercase tracking-wider shadow-sm">
                  Exclusive Wedding Buyout
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-luxury font-black text-white mt-2 leading-tight">
                  Want Exclusive Private Access to the Entire Resort?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
                  Book the Grand Lawn + both AC Banquet Halls + Swimming Pool + all 12+ AC Deluxe Rooms for total private wedding exclusivity with 100% privacy and dedicated staff.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking('Full Resort Package (Lawn + Banquets + Pool + Rooms)', 'Full Resort Wedding Buyout')}
                className="w-full md:w-auto px-6 py-3.5 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Buyout Quote</span>
              </button>
            </div>
          </Card3D>
        </ScrollReveal>

      </div>
    </section>
  );
};
