import React from 'react';
import { 
  Building2, 
  Trees, 
  Waves, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  MapPin, 
  MessageSquare,
  CheckCircle2,
  Crown
} from 'lucide-react';
import { FALLBACK_IMAGES } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#040912] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background Subtle Luxury Resort Watermark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06]">
        <img
          src={FALLBACK_IMAGES.hotelBackdrop}
          alt="Resort Architecture Backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040912] via-[#040912]/80 to-[#040912]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-md">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            About Raghav Resort
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            Unnao & Kanpur’s Trusted <span className="text-gold-gradient">Celebration Destination</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Nestled directly on State Highway 38, Raghav Resort combines royal Awadhi hospitality with modern event infrastructure — offering monumental open grounds, climate-controlled ballrooms, and lifetime memories.
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Visual Collage with Slide-Left Reveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="slide-left" duration={0.8}>
              <Card3D glowColor="gold" depth={10} className="bg-[#081322] overflow-hidden shadow-2xl border-amber-500/30">
                <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGES.lawn;
                    }}
                    alt="Raghav Resort Grand Wedding Setup"
                    className="w-full h-full object-cover filter brightness-100 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040912] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-[#081322]/95 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">790+ Celebrations Hosted</h4>
                          <p className="text-xs text-slate-300 font-medium">Weddings, Receptions, Pool Parties & Stays</p>
                        </div>
                      </div>
                      <span className="text-amber-300 font-extrabold text-sm px-2.5 py-1 bg-amber-500/15 rounded-lg border border-amber-400/40">
                        3.9★ Google
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>

              {/* Overlapping small accent card */}
              <div className="hidden sm:flex absolute -top-5 -right-5 p-3.5 rounded-2xl bg-[#081322]/95 border border-amber-500/30 shadow-2xl items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-white">Highway Frontage</div>
                  <div className="text-slate-300 font-medium">SH-38 Lalau / Hindu Kheda</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Values with Slide-Right Reveal */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="slide-right" duration={0.8} delay={0.15}>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-black text-gold-gradient">
                Where Royal Hospitality Meets Modern Infrastructure
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                At <strong className="text-white">Raghav Resort</strong>, we understand that an Indian wedding is the most cherished milestone for a family. Located conveniently on State Highway 38 connecting Unnao and Kanpur, our property is tailored to eliminate common party struggles: narrow village lanes, insufficient parking, suffocating heat, and power failures.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                With a grand 22,000+ sq. ft. open marriage lawn for 1,000+ attendees, two central AC banquet halls, a pristine swimming pool, and 12+ deluxe AC guest rooms, your guests enjoy comfort under one unified campus.
              </p>

              {/* Pillar Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-[#081322]/85 border border-amber-500/20 shadow-sm hover:border-amber-400/50 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 text-sm font-bold mb-1">
                    <HeartHandshake className="w-4 h-4 text-amber-400" />
                    <span>Personalized Coordination</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Direct management WhatsApp chat for instant menu customizations, vendor coordination, and date holds.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#081322]/85 border border-amber-500/20 shadow-sm hover:border-amber-400/50 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 text-sm font-bold mb-1">
                    <Trees className="w-4 h-4 text-amber-400" />
                    <span>Indoor + Outdoor Harmony</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Transition effortlessly from grand open-air Varmala on the lawn to chilled AC banquet halls for rituals and dining.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#081322]/85 border border-cyan-500/20 shadow-sm hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center gap-2 text-cyan-300 text-sm font-bold mb-1">
                    <Waves className="w-4 h-4 text-cyan-400" />
                    <span>Private Pool Leisure</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Enjoy vibrant pre-wedding Haldi poolside sundowners, rain dances, and refreshing day outings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#081322]/85 border border-amber-500/20 shadow-sm hover:border-amber-400/50 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 text-sm font-bold mb-1">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>Stay & Bridal Vanity</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    12+ on-premise AC rooms allow elderly relatives and the bride to rest and prepare comfortably.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="py-3 px-6 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Enquiry</span>
                </button>

                <a
                  href="#venues"
                  className="py-3 px-5 btn-glass-luxury font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center transition-colors shadow-sm"
                >
                  <span>Explore Venues</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
