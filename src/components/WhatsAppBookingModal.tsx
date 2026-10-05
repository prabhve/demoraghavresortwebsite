import React, { useState } from 'react';
import { X, Send, Calendar, Users, Building, MessageSquare, Phone, CheckCircle2, Sparkles, Crown } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppLink } from '../data/resortData';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVenue?: string;
  initialEventType?: string;
}

export const WhatsAppBookingModal: React.FC<WhatsAppBookingModalProps> = ({
  isOpen,
  onClose,
  initialVenue = 'Grand Royal Marriage Lawn',
  initialEventType = 'Grand Wedding & Reception'
}) => {
  const [eventType, setEventType] = useState(initialEventType);
  const [venue, setVenue] = useState(initialVenue);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('300 - 500 Guests');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [catering, setCatering] = useState('Pure Veg Royal Buffet');
  const [note, setNote] = useState('');
  const [contactOption, setContactOption] = useState<'primary' | 'secondary'>('primary');

  if (!isOpen) return null;

  const eventTypes = [
    'Grand Wedding & Reception',
    'Pre-Wedding (Haldi / Mehendi / Sangeet)',
    'Ring Ceremony / Engagement',
    'Private Swimming Pool Party',
    'Birthday / Anniversary Celebration',
    'AC Deluxe Room Stay',
    'Corporate Event / Gathering'
  ];

  const venueOptions = [
    'Grand Royal Marriage Lawn (1,000 Guests)',
    'Grand Banquet Hall 1 (300 Guests)',
    'Intimate Banquet Hall 2 (200 Guests)',
    'Resort Swimming Pool & Deck',
    'AC Deluxe Guest Rooms & Bridal Suite',
    'Full Resort Package (Lawn + Banquets + Pool + Rooms)'
  ];

  const guestOptions = [
    '50 - 100 Guests',
    '100 - 250 Guests',
    '250 - 500 Guests',
    '500 - 800 Guests',
    '800 - 1,200+ Guests',
    'Just Rooms / Pool (Under 50)'
  ];

  const handleSendWhatsApp = () => {
    const customNote = `${note ? note + ' | ' : ''}Food: ${catering}`;
    const link = buildWhatsAppLink({
      eventType,
      venue,
      date: date || 'Date not finalized yet',
      guests,
      name: name || 'Interested Guest',
      phone: phone || 'Provided in WhatsApp',
      note: customNote,
      useSecondary: contactOption === 'secondary'
    });

    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#081322] border border-amber-500/40 rounded-3xl shadow-2xl text-white p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-[#040912] hover:bg-white/10 rounded-full transition-colors cursor-pointer border border-amber-500/30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-amber-500/20 pb-4">
          <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-serif-luxury font-bold text-white">
                Book on WhatsApp
              </h3>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-[#040912] text-amber-300 border border-amber-500/30">
                Direct Desk
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Connect directly with Raghav Resort management to check dates & get official quotes.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Celebration / Event Type *
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              >
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Preferred Venue Space */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Preferred Venue Space *
              </label>
              <select
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              >
                {venueOptions.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tentative Date */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Tentative Event Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Estimated Guest Count *
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              >
                {guestOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Catering Preference */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Catering Preference
              </label>
              <select
                value={catering}
                onChange={(e) => setCatering(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              >
                <option value="Pure Veg Royal Buffet">Pure Veg Royal Buffet (Awadhi / North Indian)</option>
                <option value="Veg + Non-Veg Multi Cuisine">Veg + Non-Veg Multi Cuisine</option>
                <option value="Outside Caterer (Venue Only)">Outside Caterer (Venue Only Option)</option>
                <option value="Undecided / Discuss on WhatsApp">Undecided / Discuss on WhatsApp</option>
              </select>
            </div>

            {/* Your Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Shukla"
                className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Contact Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full px-3.5 py-2.5 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Special Requests / Queries (Optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="e.g. Need DJ sound setup, bridal room, and decoration quote..."
              className="w-full px-3.5 py-2 bg-[#040912] border border-amber-500/30 rounded-xl text-white text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none resize-none"
            />
          </div>

          {/* Manager Destination Toggle */}
          <div className="pt-2 border-t border-amber-500/20">
            <span className="block text-xs font-bold text-slate-300 mb-2">
              Send WhatsApp Message To:
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                type="button"
                onClick={() => setContactOption('primary')}
                className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  contactOption === 'primary'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                    : 'bg-[#040912] border-amber-500/20 text-slate-400 hover:text-white'
                }`}
              >
                <span>Primary Desk</span>
                <span className="text-[10px] text-amber-400 font-mono">({RESORT_INFO.phones[0].display})</span>
              </button>

              <button
                type="button"
                onClick={() => setContactOption('secondary')}
                className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  contactOption === 'secondary'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                    : 'bg-[#040912] border-amber-500/20 text-slate-400 hover:text-white'
                }`}
              >
                <span>Event Bookings</span>
                <span className="text-[10px] text-amber-400 font-mono">({RESORT_INFO.phones[1].display})</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full sm:flex-1 py-3.5 btn-whatsapp-luxury text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Send to WhatsApp</span>
            </button>

            <a
              href={`tel:${contactOption === 'secondary' ? RESORT_INFO.phones[1].number : RESORT_INFO.phones[0].number}`}
              className="w-full sm:w-auto px-5 py-3.5 btn-glass-luxury font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Instead</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
