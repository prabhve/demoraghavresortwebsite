import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Train, 
  Plane, 
  Clock, 
  ShieldCheck, 
  Compass, 
  ArrowUpRight,
  Crown,
  Sparkles,
  Landmark,
  Trees,
  Waves,
  Building2,
  Navigation2
} from 'lucide-react';
import { 
  RESORT_INFO, 
  TRANSIT_PLACES, 
  FAMOUS_NEARBY_PLACES, 
  LocationPlace 
} from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'transit' | 'landmarks'>('transit');

  const getPlaceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Train': return <Train className="w-4 h-4 text-amber-400" />;
      case 'Plane': return <Plane className="w-4 h-4 text-cyan-400" />;
      case 'PlaneTakeoff': return <Plane className="w-4 h-4 text-cyan-400" />;
      case 'Landmark': return <Landmark className="w-4 h-4 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Trees': return <Trees className="w-4 h-4 text-emerald-400" />;
      case 'Waves': return <Waves className="w-4 h-4 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-4 h-4 text-amber-300" />;
      case 'Navigation': return <Navigation className="w-4 h-4 text-emerald-400" />;
      default: return <MapPin className="w-4 h-4 text-amber-400" />;
    }
  };

  const getCategoryBadge = (category: LocationPlace['category']) => {
    switch (category) {
      case 'Transit':
        return <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#040912] text-amber-300 border border-amber-500/30">Transit</span>;
      case 'Heritage':
        return <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/40">Heritage</span>;
      case 'Temple':
        return <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-500/15 text-amber-200 border border-amber-500/40">Spiritual</span>;
      case 'Nature':
        return <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">Nature Lake</span>;
      case 'Shopping':
        return <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">Lifestyle Mall</span>;
      default:
        return null;
    }
  };

  const activePlacesList = activeTab === 'transit' ? TRANSIT_PLACES : FAMOUS_NEARBY_PLACES;

  return (
    <section id="location" className="py-24 bg-[#040912] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Prime Highway Location & Surroundings
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            Find & Visit <span className="text-gold-gradient">Raghav Resort</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Situated directly on State Highway 38 (SH-38) between Kanpur and Unnao. Wide four-lane highway approach ensures seamless arrival for wedding baraats, guest buses, and outstation travelers.
          </p>
        </ScrollReveal>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Real-Time Navigation Places & Calling */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card with 3D Tilt */}
            <ScrollReveal animation="slide-left" duration={0.75}>
              <Card3D glowColor="gold" depth={8} className="p-6 sm:p-7 bg-[#081322]/95 space-y-4 shadow-2xl border-amber-500/35 backdrop-blur-xl">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Exact Resort Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-normal">
                      {RESORT_INFO.address}
                    </p>
                    <span className="inline-block mt-2 text-xs text-amber-300 font-bold">
                      Landmark: Near Lalau / Hindu Kheda, Deeh, Unnao (SH-38)
                    </span>
                  </div>
                </div>

                {/* Direct Maps Action Button */}
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 btn-gold-luxury text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-slate-950" />
                  <span>Open Raghav Resort in Google Maps App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Card3D>
            </ScrollReveal>

            {/* Interactive Navigation Hub & Famous Places Tabs */}
            <ScrollReveal animation="slide-left" delay={0.12} duration={0.75}>
              <div className="p-6 rounded-2xl bg-[#081322]/90 border border-amber-500/25 space-y-4 shadow-xl backdrop-blur-xl">
                
                {/* Header & Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Navigation2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Live Distance & Route Navigation</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Tap any route for turn-by-turn Google Maps GPS directions</p>
                  </div>

                  {/* Toggle Pills */}
                  <div className="flex items-center gap-1 bg-[#040912] p-1 rounded-xl border border-amber-500/25 shrink-0">
                    <button
                      onClick={() => setActiveTab('transit')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeTab === 'transit'
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-amber-300'
                      }`}
                    >
                      Transit (5)
                    </button>
                    <button
                      onClick={() => setActiveTab('landmarks')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeTab === 'landmarks'
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-amber-300'
                      }`}
                    >
                      Famous Places (6)
                    </button>
                  </div>
                </div>

                {/* Places Cards with Direct Route Redirection */}
                <div className="space-y-2.5">
                  {activePlacesList.map((item) => (
                    <a
                      key={item.id}
                      href={item.mapNavUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#040912] hover:bg-[#0c1e33] border border-amber-500/20 hover:border-amber-400/60 transition-all text-xs gap-2.5 shadow-sm"
                      title={`Open Google Maps route to ${item.place}`}
                    >
                      <div className="flex items-start gap-2.5 flex-1">
                        <div className="w-7 h-7 rounded-lg bg-[#081322] border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          {getPlaceIcon(item.icon)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-white font-bold group-hover:text-amber-300 transition-colors">
                              {item.place}
                            </span>
                            {getCategoryBadge(item.category)}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Distance & Navigate Action */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-amber-500/10">
                        <div className="text-left sm:text-right">
                          <span className="text-amber-300 font-bold block">{item.time}</span>
                          <span className="text-[10px] text-slate-400 font-medium">({item.distance})</span>
                        </div>
                        
                        <div className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-300 border border-amber-500/30 transition-all flex items-center gap-1 font-bold text-[11px]">
                          <span>Route</span>
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Direct Calling Helpline */}
            <ScrollReveal animation="slide-left" delay={0.2} duration={0.75}>
              <div className="p-6 rounded-2xl bg-[#081322]/90 border border-amber-500/25 space-y-3.5 shadow-xl backdrop-blur-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Resort Direct Call Lines:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {RESORT_INFO.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.number}`}
                      className="p-3.5 rounded-xl bg-[#040912] hover:bg-[#0c1e33] border border-amber-500/20 hover:border-amber-400 transition-colors flex items-center gap-2.5"
                    >
                      <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">{phone.label}</span>
                        <span className="text-white font-bold">{phone.display}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Google Maps Embed Frame with 3D Card */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <ScrollReveal animation="slide-right" duration={0.8}>
              <Card3D glowColor="gold" depth={6} className="overflow-hidden shadow-2xl flex-1 min-h-[580px] bg-[#081322] flex flex-col border-amber-500/35">
                
                {/* Map Title Bar */}
                <div className="p-4 bg-[#081322] border-b border-amber-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="font-bold text-white">Google Maps Pin: Raghav Resort</span>
                    <span className="text-amber-300/80 hidden sm:inline font-mono">(26.5034° N, 80.4993° E)</span>
                  </div>
                  <a
                    href={RESORT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-white hover:underline flex items-center gap-1 font-bold transition-colors"
                  >
                    <span>Full Map</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Google Map Iframe */}
                <div className="relative w-full flex-1 min-h-[500px]">
                  <iframe
                    title="Raghav Resort Google Maps Location"
                    src="https://maps.google.com/maps?q=26.5033977,80.4993461&hl=en&z=16&output=embed"
                    className="w-full h-full border-0 absolute inset-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating overlay card at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 p-4 bg-[#081322]/95 backdrop-blur-xl rounded-2xl border border-amber-500/40 shadow-2xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-black text-white font-serif-luxury">Raghav Resort</span>
                      <span className="text-[11px] font-bold text-amber-300 px-2 py-0.5 bg-amber-500/20 rounded border border-amber-500/30">24/7 Desk</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">
                      State Highway 38, Hindu Kheda, Unnao, Uttar Pradesh.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={RESORT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 btn-gold-luxury text-center text-xs rounded-xl shadow-sm"
                      >
                        Start GPS
                      </a>
                      <button
                        onClick={onOpenBooking}
                        className="flex-1 py-2 btn-whatsapp-luxury text-white font-bold text-center text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>

              </Card3D>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
