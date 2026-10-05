import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Crown,
  Navigation,
  ArrowRight
} from 'lucide-react';
import { RESORT_INFO, buildWhatsAppLink } from '../data/resortData';

interface NavbarProps {
  onOpenBooking?: (venue?: string, eventType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: 'Namaste Raghav Resort! I would like to inquire about event booking and check date availability.'
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Venues & Spaces', href: '#venues' },
    { label: 'Swimming Pool', href: '#pool' },
    { label: 'Packages & Rates', href: '#packages' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Location & Map', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Notice Bar (Clean, Royal & Dignified) */}
      <div className="bg-[#02060c] text-amber-200/90 text-xs py-1.5 px-4 border-b border-amber-500/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Key Highlights */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-slate-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Grand Wedding Lawn (1,000+ Guests) • 2 AC Banquets • Swimming Pool</span>
            </span>
            <span className="text-amber-500/30">•</span>
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <MapPin className="w-3 h-3 text-rose-400" />
              <span>SH-38 Unnao-Kanpur Highway</span>
            </span>
          </div>

          {/* Right: Reviews & Helpline */}
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={RESORT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors font-semibold"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>3.9★ Google (790+ Reviews)</span>
            </a>

            <span className="text-amber-500/30">|</span>

            <a 
              href={`tel:${RESORT_INFO.phones[0].number}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 font-bold transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Desk: {RESORT_INFO.phones[0].display}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#040912]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-2xl py-2.5'
            : 'bg-[#040912]/90 backdrop-blur-md border-b border-amber-500/15 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Typography (Spacious & Clean on all screens) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-[1.5px] shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full rounded-[10px] bg-[#040912] flex items-center justify-center">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-lg md:text-xl font-serif-luxury font-black tracking-wide text-white group-hover:text-amber-300 transition-colors block leading-tight truncate">
                Raghav Resort
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] tracking-wider text-amber-400 font-bold uppercase block truncate">
                Lawn • Banquet • Pool • Rooms
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on Large screens) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action CTAs (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Direct Call Button */}
            <a
              href={`tel:${RESORT_INFO.phones[0].number}`}
              className="p-2.5 rounded-xl bg-[#081322] hover:bg-[#0d1f38] text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all shadow-sm group"
              title="Call Raghav Resort Desk"
            >
              <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            </a>

            {/* Direct 'WhatsApp' Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-luxury px-4 py-2.5 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Action Controls (Clean, Uncluttered, Spaced with 0 Overflow) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Direct Dial Icon Button */}
            <a
              href={`tel:${RESORT_INFO.phones[0].number}`}
              className="p-2 rounded-xl bg-[#081322] active:scale-95 text-amber-400 border border-amber-500/30 hover:bg-[#0d1f38] transition-all shadow-sm flex items-center justify-center"
              aria-label="Call Raghav Resort"
              title="Call Desk"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#081322] active:scale-95 text-amber-300 border border-amber-500/30 hover:bg-[#0d1f38] transition-all shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-amber-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Full-Featured Luxury Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[53px] sm:top-[57px] bottom-0 bg-[#040912]/98 backdrop-blur-2xl border-t border-amber-500/25 px-5 py-6 flex flex-col justify-between overflow-y-auto z-50 animate-fadeIn">
            
            {/* Top Quick Status & Rating */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#081322] border border-amber-500/25">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-xs font-bold text-white">Open for Bookings</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>3.9★ (790+ Google Reviews)</span>
                </div>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-[#081322] text-xs font-bold text-slate-200 hover:text-amber-300 border border-amber-500/20 active:scale-95 transition-all flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-amber-500/20 space-y-2.5 mt-auto">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${RESORT_INFO.phones[0].number}`}
                  className="py-2.5 px-3 bg-[#081322] text-amber-300 font-bold text-xs rounded-xl border border-amber-500/30 flex items-center justify-center gap-1.5 active:scale-95 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#081322] text-slate-200 font-bold text-xs rounded-xl border border-amber-500/30 flex items-center justify-center gap-1.5 active:scale-95 text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-400" />
                  <span>Map Route</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                State Highway 38 (SH-38), Hindu Kheda, Unnao
              </p>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};
