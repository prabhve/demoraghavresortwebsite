import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Star, 
  ExternalLink, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Trees, 
  Waves,
  Crown
} from 'lucide-react';
import { RESORT_INFO, buildWhatsAppLink } from '../data/resortData';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const quickWhatsAppUrl = buildWhatsAppLink({
    customMessage: 'Namaste Raghav Resort team! I would like to check venue availability and request pricing details.'
  });

  return (
    <footer className="bg-[#02060c] text-slate-300 border-t border-amber-500/25 pt-12 sm:pt-16 pb-32 sm:pb-28 lg:pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-amber-500/20">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-[1.5px] shadow-md shadow-amber-500/20">
                <div className="w-full h-full rounded-[10px] bg-[#02060c] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif-luxury font-black tracking-wide text-white block">
                  Raghav Resort
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Lawn • Banquet • Pool • Unnao-Kanpur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              The premier destination on State Highway 38 for unforgettable Indian weddings, pre-wedding rituals, swimming pool parties, and comfortable AC room accommodations.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#081322] border border-amber-500/30 text-xs text-amber-300 hover:border-amber-400 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>3.9★ on Google (790+ Reviews)</span>
              </a>
              <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#081322] border border-amber-500/30 text-slate-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Resort Spaces & Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#venues" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Trees className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Grand Marriage Lawn (1,000 Guests)</span>
                </a>
              </li>
              <li>
                <a href="#venues" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Grand AC Banquet Hall 1 (300 Guests)</span>
                </a>
              </li>
              <li>
                <a href="#venues" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Intimate Banquet Hall 2 (200 Guests)</span>
                </a>
              </li>
              <li>
                <a href="#pool" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Waves className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Resort Swimming Pool & Sun Deck</span>
                </a>
              </li>
              <li>
                <a href="#venues" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>12+ AC Deluxe Rooms & Bridal Suites</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">
                  <span>Wedding & Celebration Packages</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  <span>Google Maps Location & Directions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Contact & Direct WhatsApp
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">
                  {RESORT_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <a href={`tel:${RESORT_INFO.phones[0].number}`} className="hover:text-amber-300 font-bold block text-white">
                    {RESORT_INFO.phones[0].display} (Main Desk)
                  </a>
                  <a href={`tel:${RESORT_INFO.phones[1].number}`} className="text-slate-400 hover:text-white text-xs block">
                    {RESORT_INFO.phones[1].display} (Events Desk)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-400/80 shrink-0" />
                <span className="text-slate-400 text-xs">
                  Front Desk Open 24/7 • Check-in: 12:00 PM
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-2">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 btn-whatsapp-luxury text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                <span>WhatsApp</span>
              </a>

              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 btn-glass-luxury font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 text-center"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 sm:gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Raghav Resort, Unnao. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-slate-400 justify-center">
            <span>Direct WhatsApp & Call Bookings with Property Management</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
