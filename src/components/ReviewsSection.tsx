import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  MapPin,
  Heart,
  Crown
} from 'lucide-react';
import { TESTIMONIALS, RESORT_INFO } from '../data/resortData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#070e1b] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#091526] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Guest Experiences & Verified Ratings
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            What Families & <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Rated 3.9 Stars by over 790 guests across Google Maps and Justdial. See why Kanpur and Unnao families trust Raghav Resort for their most precious milestones.
          </p>

          {/* Rating Summary Card with 3D Tilt & ScrollReveal */}
          <div className="mt-9 max-w-md mx-auto">
            <Card3D glowColor="gold" depth={8} className="p-6 sm:p-7 bg-[#091526]/95 flex items-center justify-around shadow-2xl border-amber-500/35 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-gold-gradient font-serif-luxury">
                  {RESORT_INFO.rating}
                </div>
                <div className="flex items-center justify-center gap-1 mt-1 text-amber-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <Star className="w-4 h-4 fill-amber-400/30" />
                </div>
                <div className="text-xs text-slate-300 font-bold mt-1">
                  Out of 5.0 Stars
                </div>
              </div>

              <div className="h-16 w-px bg-amber-500/25" />

              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {RESORT_INFO.totalReviews}+
                </div>
                <div className="text-xs text-amber-300 mt-1 font-semibold">
                  Verified Reviews
                </div>
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-white hover:underline mt-1 font-bold transition-colors"
                >
                  <span>Read on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card3D>
          </div>
        </ScrollReveal>

        {/* Reviews 3D Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <ScrollReveal
              key={review.id}
              animation="3d-flip"
              delay={idx * 0.12}
              duration={0.7}
            >
              <Card3D
                glowColor={idx % 2 === 0 ? 'gold' : 'emerald'}
                depth={6}
                className="p-6 sm:p-8 bg-[#091526]/90 relative flex flex-col justify-between shadow-xl hover:shadow-2xl border-amber-500/25 h-full backdrop-blur-xl"
              >
                <div>
                  {/* Rating stars & event badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="px-3 py-1 bg-[#050b14] text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 shadow-md">
                      {review.event}
                    </span>
                  </div>

                  {/* Comment quote */}
                  <p className="text-slate-200 text-sm leading-relaxed italic font-normal">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author & Verification */}
                <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {review.author}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-0.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{review.source}</span>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    {review.timeAgo}
                  </span>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
