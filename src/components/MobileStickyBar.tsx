import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Navigation
} from 'lucide-react';
import { RESORT_INFO, buildWhatsAppLink } from '../data/resortData';

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = () => {
  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: 'Namaste Raghav Resort! I am interested in booking an event/stay at your resort (Unnao-Kanpur Highway). Please share venue availability and pricing details.'
  });

  return (
    <>
      {/* Floating Desktop WhatsApp Widget (Bottom-Right on lg screens) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2 group">
        <div className="bg-[#081322] border border-amber-500/30 text-amber-300 text-xs px-3.5 py-1.5 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-bold">Chat with Raghav Resort Desk</span>
        </div>
        
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-luxury p-3.5 text-white rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span className="font-bold text-xs pr-1">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on mobile & tablet < lg) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#040912]/95 backdrop-blur-xl border-t border-amber-500/25 p-2 px-3 shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
        <div className="max-w-md mx-auto flex items-center gap-2">
          
          {/* Call button */}
          <a
            href={`tel:${RESORT_INFO.phones[0].number}`}
            className="flex-1 py-2 px-2 bg-[#081322] hover:bg-[#0e213d] text-amber-300 rounded-xl border border-amber-500/30 flex flex-col items-center justify-center text-center active:scale-95 transition-transform shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[10px] font-bold">Call Desk</span>
          </a>

          {/* Direct WhatsApp Primary Button (Opens WhatsApp App Directly - No Form) */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2.5] py-2.5 px-3 btn-whatsapp-luxury active:scale-95 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm text-xs sm:text-sm cursor-pointer text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white/20 shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Google Maps Directions */}
          <a
            href={RESORT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2 bg-[#081322] hover:bg-[#0e213d] text-slate-300 rounded-xl border border-amber-500/30 flex flex-col items-center justify-center text-center active:scale-95 transition-transform shadow-sm"
          >
            <Navigation className="w-4 h-4 text-rose-400 mb-0.5" />
            <span className="text-[10px] font-bold">Map</span>
          </a>

        </div>
      </div>
    </>
  );
};
