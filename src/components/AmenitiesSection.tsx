import React from 'react';
import { 
  Sparkles, 
  Trees, 
  Building2, 
  Waves, 
  BedDouble, 
  Car, 
  Zap, 
  ShieldCheck, 
  UtensilsCrossed, 
  Wifi, 
  Music, 
  Clock, 
  Check, 
  MessageSquare,
  Sparkle,
  Crown
} from 'lucide-react';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface AmenitiesSectionProps {
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  const categories = [
    {
      title: 'Grand Wedding & Event Facilities',
      glow: 'emerald' as const,
      icon: <Trees className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: '1,000+ Capacity Green Lawn', desc: 'Sprawling manicured open lawn under the sky' },
        { name: '2 Air-Conditioned Banquet Halls', desc: 'Hall 1 (300 guests) & Hall 2 (200 guests) with crystal chandeliers' },
        { name: 'Raised Stage & Royal Mandap Area', desc: 'Customizable backdrop trusses and floral decoration frames' },
        { name: 'Spacious Baraat Runway Entrance', desc: 'Wide illuminated entrance gate suitable for grand processions' },
        { name: 'Dedicated DJ & Acoustic Sound Area', desc: 'High-bass acoustic setup with ambient disco truss lights' },
        { name: 'Multi-Station Buffet & Live Chaat Counters', desc: 'Separate clean dining zones for pure veg and non-veg spreads' },
      ]
    },
    {
      title: 'Swimming Pool & Recreational Deck',
      glow: 'cyan' as const,
      icon: <Waves className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: 'Clean Filtered Resort Swimming Pool', desc: 'Daily hygienic chemical treatment & active water filtration' },
        { name: 'Poolside Party Sun Deck', desc: 'Deck seating, loungers, and standing cocktail tables' },
        { name: 'Rain Dance & Music Setup', desc: 'High pressure overhead rain showers with music console' },
        { name: 'Night Underwater Illumination', desc: 'Submerged pool lights creating radiant evening ambience' },
        { name: 'Private Changing & Shower Rooms', desc: 'Dedicated clean male & female shower cubicles' },
        { name: 'Poolside Snack & Mocktail Bar', desc: 'Arrangements for live finger food and summer drinks' },
      ]
    },
    {
      title: 'AC Deluxe Guest Rooms & Bridal Suites',
      glow: 'gold' as const,
      icon: <BedDouble className="w-5 h-5 text-amber-400" />,
      items: [
        { name: '12+ Air-Conditioned Guest Rooms', desc: 'Comfortable king/queen bedding with fresh sanitized linens' },
        { name: 'Spacious Bridal Makeup Suite', desc: 'Full length vanity mirrors, dressing stations & bright ring lights' },
        { name: 'Attached Bathrooms with Geysers', desc: 'Modern sanitary fittings and instant hot water supply' },
        { name: 'Flat Screen TV & High Speed Wi-Fi', desc: 'Free uninterrupted internet connectivity across property' },
        { name: '24-Hour Room Service & Housekeeping', desc: 'Prompt tea, coffee, breakfast, and room assistance' },
        { name: 'Group Family Blocks Available', desc: 'Discounts on bulk room booking alongside wedding packages' },
      ]
    },
    {
      title: 'Logistics, Power Backup & Safety',
      glow: 'ruby' as const,
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      items: [
        { name: '100% Heavy Generator Power Backup', desc: 'Zero blackouts for stage lighting, AC cooling, and sound' },
        { name: '100+ Vehicle Secured Parking Grounds', desc: 'Ample space for guest cars, tempo travelers, and buses' },
        { name: '24/7 Gated Security & Perimeter CCTV', desc: 'Active security guards at gates ensuring family privacy' },
        { name: 'Direct State Highway 38 Frontage', desc: 'No narrow village lanes; smooth highway approach' },
        { name: 'Dedicated In-House Electrician & Plumber', desc: 'On-standby staff throughout the event for instant troubleshooting' },
        { name: 'Fire Safety & First Aid Protocol', desc: 'Compliant safety gear, fire extinguishers, and first-aid kits' },
      ]
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#050c18] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background soft ambient flares */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Complete Property Amenities
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            Engineered for <span className="text-gold-gradient">Flawless Grand Events</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything your celebration requires under one grand boundary wall. We eliminate logistical bottlenecks so you can focus on making memories.
          </p>
        </ScrollReveal>

        {/* Categories 2x2 Grid with 3D Flip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <ScrollReveal
              key={cat.title}
              animation="3d-flip"
              delay={idx * 0.12}
              duration={0.7}
            >
              <Card3D
                glowColor={cat.glow}
                depth={8}
                className="bg-[#081322]/90 border-amber-500/30 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl h-full flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6 border-b border-amber-500/20 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#040912] border border-amber-500/30 flex items-center justify-center shadow-inner">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white">
                        {cat.title}
                      </h3>
                      <span className="text-xs text-amber-300/80 font-bold">
                        6 Verified Features
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-1">
                        <div className="flex items-start gap-2 text-xs font-bold text-white">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-6 leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Available for all bookings
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-extrabold text-amber-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Check with this setup</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal animation="fade-up" delay={0.25} className="mt-12 text-center">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#081322] via-[#061120] to-[#04141d] border border-amber-500/35 max-w-4xl mx-auto shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg font-serif-luxury font-black text-white">
                Need Customized Mandap Trusses or Specific Decor Setups?
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Our resident event manager coordinates directly with leading florists and caterers across Kanpur & Unnao.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="shrink-0 px-6 py-3 btn-whatsapp-luxury text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Discuss Requirements</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
