import React from 'react';
import { 
  Trees, 
  Building2, 
  Waves, 
  BedDouble, 
  Star, 
  Car, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Utensils 
} from 'lucide-react';
import { KEY_STATS } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

export const PropertyHighlights: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Trees': return <Trees className="w-6 h-6 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Waves': return <Waves className="w-6 h-6 text-cyan-400" />;
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-amber-400" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      case 'Car': return <Car className="w-6 h-6 text-rose-400" />;
      default: return <Building2 className="w-6 h-6 text-amber-400" />;
    }
  };

  const getGlow = (idx: number): 'gold' | 'emerald' | 'cyan' | 'ruby' => {
    const glows: ('gold' | 'emerald' | 'cyan' | 'ruby')[] = ['emerald', 'gold', 'cyan', 'gold', 'gold', 'ruby'];
    return glows[idx % glows.length];
  };

  return (
    <section className="py-14 bg-[#070e1b] border-y border-amber-500/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid with 3D Tilt & Staggered Scroll Animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {KEY_STATS.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              animation="3d-flip"
              delay={idx * 0.08}
              duration={0.6}
            >
              <Card3D
                glowColor={getGlow(idx)}
                depth={8}
                className="p-4 sm:p-5 bg-[#091526]/90 text-center flex flex-col items-center justify-center group shadow-xl hover:shadow-2xl h-full border-amber-500/30 backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#050b14] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-inner border border-amber-500/30">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-xl sm:text-2xl font-black font-serif-luxury text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-bold mt-1">
                  {stat.label}
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Badges Bar with ScrollReveal */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={0.7}>
          <div className="mt-8 pt-8 border-t border-amber-500/20 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#091526]/80 border border-amber-500/25 shadow-md">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-bold">100% Power Generator</strong>
                <span className="text-slate-400">Zero interruption for stage & AC</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#091526]/80 border border-rose-500/25 shadow-md">
              <div className="w-9 h-9 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-bold">100+ Vehicle Parking</strong>
                <span className="text-slate-400">Dedicated secured grounds</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#091526]/80 border border-emerald-500/25 shadow-md">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-bold">Veg & Non-Veg Catering</strong>
                <span className="text-slate-400">Awadhi & North Indian royal buffet</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#091526]/80 border border-cyan-500/25 shadow-md">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-bold">24x7 Banquet Care</strong>
                <span className="text-slate-400">Dedicated manager & hospitality team</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
