import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Waves, 
  Building2, 
  Trees, 
  ArrowUpRight,
  ChevronRight,
  Crown
} from 'lucide-react';
import { motion } from 'motion/react';
import { RESORT_INFO, FALLBACK_IMAGES, buildWhatsAppLink } from '../data/resortData';
import { Card3D } from './Card3D';

interface HeroProps {
  onOpenBooking: (venue?: string, eventType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedEventType, setSelectedEventType] = useState('Grand Wedding & Reception');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('300 - 600 Guests');

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink({
      eventType: selectedEventType,
      date: selectedDate || 'Date to be finalized',
      guests: selectedGuests,
      note: 'Hero instant check enquiry from website'
    });
    window.open(link, '_blank');
  };

  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: 'Namaste! I would like to check venue availability and rate package for Raghav Resort (Unnao-Kanpur Highway).'
  });

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden pt-4 pb-14 sm:pt-6 sm:pb-16 lg:py-20 bg-[#040912]">
      {/* Background Soft Radiant Visual & Hotel Ambiance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.38 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={FALLBACK_IMAGES.hero}
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK_IMAGES.hotelBackdrop;
          }}
          alt="Raghav Resort Marriage Lawn & Hotel Ambiance"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
        />
        {/* Deep Royal Midnight Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040912] via-[#040912]/85 to-[#040912]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040912] via-transparent to-[#040912]/90" />
        <div className="absolute inset-0 bg-radial-regal" />

        {/* Luminous Warm Golden & Subtle Amber Flares */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[90px] sm:blur-[110px]" 
        />
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Heading, Badges, Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 shadow-sm backdrop-blur-md">
                <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Premier Destination Resort</span>
              </span>
              
              <a 
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#081322] text-white border border-amber-400/30 hover:border-amber-400 transition-all shadow-sm backdrop-blur-md"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <span className="text-amber-400 font-extrabold">3.9★</span>
                <span className="text-slate-300 font-medium">(790+ Reviews)</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#081322] text-slate-200 border border-emerald-500/30 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SH-38 Highway</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-[54px] font-serif-luxury font-black text-white tracking-tight leading-[1.18] sm:leading-[1.14]">
                Royal Celebrations & Grand Weddings at{' '}
                <span className="text-gold-gradient block mt-1">
                  Raghav Resort
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Kanpur-Unnao Highway’s most celebrated resort campus. Featuring a <strong className="text-amber-300 font-bold">1,000+ guest marriage lawn</strong>, <strong className="text-amber-300 font-bold">2 central AC banquet halls</strong>, crystal-clear <strong className="text-cyan-300 font-bold">swimming pool</strong>, and <strong className="text-emerald-300 font-bold">12+ luxury AC rooms</strong>.
              </p>
            </div>

            {/* Feature Mini-Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#081322]/85 border border-amber-500/20 text-left transition-all shadow-sm group hover:border-amber-500/40">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/15 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform border border-amber-500/30">
                  <Trees className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-[11px] sm:text-sm font-black text-white leading-tight">1,000+ Guests</div>
                <div className="text-[9px] sm:text-[11px] text-amber-300/80 font-medium truncate">Party Lawn</div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[#081322]/85 border border-amber-500/20 text-left transition-all shadow-sm group hover:border-amber-500/40">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/15 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform border border-amber-500/30">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-[11px] sm:text-sm font-black text-white leading-tight">2 AC Banquets</div>
                <div className="text-[9px] sm:text-[11px] text-amber-300/80 font-medium truncate">Chandelier Halls</div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[#081322]/85 border border-cyan-500/20 text-left transition-all shadow-sm group hover:border-cyan-500/40">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform border border-cyan-500/30">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-[11px] sm:text-sm font-black text-white leading-tight">Private Pool</div>
                <div className="text-[9px] sm:text-[11px] text-cyan-300/80 font-medium truncate">Poolside Parties</div>
              </div>
            </div>

            {/* Action Buttons: Responsive full width on small screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={`tel:${RESORT_INFO.phones[0].number}`}
                className="w-full sm:w-auto px-5 py-3.5 btn-glass-luxury font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Desk: {RESORT_INFO.phones[0].display}</span>
              </a>

              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3.5 py-2.5 sm:py-3 text-slate-400 hover:text-amber-300 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Map Route</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            </div>

            {/* Trust metrics */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Direct owner pricing
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                100% generator power backup
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                100+ vehicle parking
              </span>
            </div>
          </motion.div>

          {/* Right Column: Instant Rate Quote Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Card3D glowColor="gold" depth={8} className="bg-[#081322]/95 border-amber-500/30 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 border-b border-amber-500/20 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Direct Booking Desk
                  </span>
                  <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-white mt-0.5">
                    Check Date & Rate Quote
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Google Rating</span>
                  <span className="text-xs font-black text-amber-400">3.9 ★ (790+)</span>
                </div>
              </div>

              <form onSubmit={handleQuickEnquiry} className="space-y-3 sm:space-y-3.5">
                {/* Event Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Celebration / Event Type *
                  </label>
                  <select
                    value={selectedEventType}
                    onChange={(e) => setSelectedEventType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#040912] border border-amber-500/25 rounded-lg text-white text-xs focus:border-amber-400 focus:outline-none font-semibold"
                  >
                    <option value="Grand Wedding & Reception">Grand Wedding & Reception (Lawn + Banquets)</option>
                    <option value="Pre-Wedding (Haldi / Mehendi / Sangeet)">Pre-Wedding (Haldi, Mehendi, Sangeet)</option>
                    <option value="Private Swimming Pool Party">Private Swimming Pool Party</option>
                    <option value="Birthday / Anniversary Party">Birthday or Anniversary Celebration</option>
                    <option value="AC Deluxe Room Stay">AC Deluxe Room Stay</option>
                    <option value="Corporate / Community Event">Corporate / Community Gathering</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#040912] border border-amber-500/25 rounded-lg text-white text-xs focus:border-amber-400 focus:outline-none font-medium"
                  />
                </div>

                {/* Expected Guests */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Expected Number of Guests
                  </label>
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#040912] border border-amber-500/25 rounded-lg text-white text-xs focus:border-amber-400 focus:outline-none font-medium"
                  >
                    <option value="50 - 150 Guests">50 - 150 Guests (Intimate / Haldi / Birthday)</option>
                    <option value="150 - 300 Guests">150 - 300 Guests (Banquet Hall 1)</option>
                    <option value="300 - 600 Guests">300 - 600 Guests (Grand Lawn + Hall)</option>
                    <option value="600 - 1,000+ Guests">600 - 1,000+ Guests (Full Grand Wedding)</option>
                    <option value="Pool Party / Rooms only">Pool Party / AC Rooms Only</option>
                  </select>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3 btn-whatsapp-luxury text-white font-bold rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Check on WhatsApp</span>
                </button>
              </form>

              {/* Direct WhatsApp Callout */}
              <div className="mt-3 pt-2.5 border-t border-amber-500/20 text-center">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:text-white transition-colors inline-flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Chat directly with resort manager</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </Card3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
