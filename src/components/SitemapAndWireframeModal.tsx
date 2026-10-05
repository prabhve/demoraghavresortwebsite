import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Layers, 
  Layout, 
  Smartphone, 
  Monitor, 
  Copy, 
  Check, 
  Download,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { RESORT_INFO, VENUE_SPACES, PACKAGES, TESTIMONIALS, DISTANCES, FAQS } from '../data/resortData';

interface SitemapAndWireframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SitemapAndWireframeModal: React.FC<SitemapAndWireframeModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'data' | 'sitemap' | 'wireframe'>('data');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Complete Structured Dataset for Website Population
  const structuredData = {
    property_identification: {
      name: "Raghav Resort",
      alternate_names: ["Hotel Raghav Resort", "OYO 23165 Raghav Resort", "Raghav Resort & Banquet Hall"],
      business_category: "Resort, Wedding Lawn, Banquet Hall & Swimming Pool",
      google_place_id: "0x399c14d70cffe171:0x6751f66e1fa88ca7",
      google_maps_url: RESORT_INFO.googleMapsUrl,
      coordinates: RESORT_INFO.coordinates
    },
    address_and_geography: {
      street_address: "State Highway 38 (SH-38), Lalau / Hindu Kheda",
      locality: "Deeh",
      city: "Unnao",
      state: "Uttar Pradesh",
      postal_code: "209801",
      country: "India",
      highway_corridor: "Kanpur-Unnao State Highway 38",
      connectivity_times: DISTANCES
    },
    contact_details: {
      primary_calling: RESORT_INFO.phones[0].display,
      primary_whatsapp: `+${RESORT_INFO.whatsappNumber}`,
      event_bookings: RESORT_INFO.phones[1].display,
      pool_reception: RESORT_INFO.phones[2].display,
      inquiry_channels: ["WhatsApp Direct Chat", "Direct Cellular Call", "In-Person Highway Visit"]
    },
    operating_hours_and_policies: {
      front_desk_hours: "24 Hours / 7 Days a week",
      banquet_event_timings: "Day Slot: 10:00 AM - 4:00 PM | Night Slot: 6:00 PM - 4:00 AM (Overnight Allowed)",
      swimming_pool_timings: "7:00 AM - 8:00 PM (Night party slots available on special booking)",
      check_in_time: RESORT_INFO.checkIn,
      check_out_time: RESORT_INFO.checkOut,
      alcohol_policy: "Regulated on property; valid event permit required for private banquets",
      outside_vendors: "Allowed upon management consultation; in-house decor & catering available"
    },
    metrics_and_reviews: {
      google_rating: RESORT_INFO.rating,
      total_reviews_analyzed: RESORT_INFO.totalReviews,
      rating_scale: "5.0 Stars",
      verified_highlights: [
        "Massive wedding lawn capacity (1000+ guests)",
        "Spacious parking directly on the highway (100+ vehicles)",
        "Uninterrupted generator power backup for AC and stage lights",
        "Sparkling clean outdoor swimming pool for private parties"
      ]
    },
    capacity_and_spaces: VENUE_SPACES.map(v => ({
      name: v.name,
      type: v.type,
      capacity_floating: v.capacity,
      seating: v.seating,
      dimensions: v.dimensions,
      ideal_for: v.idealFor,
      key_features: v.highlights
    })),
    accommodations: {
      room_count: "12+ Air-Conditioned Deluxe & Family Suites",
      bridal_suite: "Included with full vanity makeup mirror station",
      price_point_per_night: "Starting approximately ₹1,000/- with group package discounts"
    },
    amenities_inventory: [
      "22,000+ sq ft Lush Open Marriage Lawn",
      "Grand AC Banquet Hall 1 (300 guests)",
      "Intimate AC Banquet Hall 2 (200 guests)",
      "Swimming Pool & Sun Deck with Loungers",
      "12+ AC Deluxe Rooms & Bridal Dressing Suite",
      "100% Heavy Generator Power Backup",
      "100+ Car & Bus Parking Grounds",
      "24/7 Security Guards & CCTV Surveillance",
      "Pure Veg & Non-Veg Multi-Cuisine Catering",
      "High-Bass DJ & Dance Floor Setup",
      "Stage & Mandap Theme Decor"
    ]
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(structuredData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#091526] border border-amber-500/40 rounded-3xl shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-amber-500/20 flex items-center justify-between bg-[#050b14]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white">
                Property Blueprint & Data Dossier
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Google Maps Extracted Data • Mobile Sitemap • Homepage Wireframe
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-[#091526] hover:bg-white/10 rounded-full transition-colors cursor-pointer border border-amber-500/30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-amber-500/20 bg-[#070e1b] px-4 sm:px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('data')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'data'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>1. Extracted Structured Data (JSON)</span>
          </button>

          <button
            onClick={() => setActiveTab('sitemap')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'sitemap'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Mobile-Responsive Sitemap</span>
          </button>

          <button
            onClick={() => setActiveTab('wireframe')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'wireframe'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>3. Homepage Wireframe & UX Blueprint</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: Structured JSON Data */}
          {activeTab === 'data' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Normalized Raghav Resort Database
                  </h4>
                  <p className="text-xs text-stone-600">
                    Compiled from Google Maps (26.5034° N, 80.4993° E), Justdial, Weddingz & local records.
                  </p>
                </div>
                <button
                  onClick={handleCopyJson}
                  className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors border border-amber-300 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied JSON!' : 'Copy JSON'}</span>
                </button>
              </div>

              {/* JSON Viewer */}
              <div className="bg-[#1c1917] p-4 rounded-2xl border border-stone-800 overflow-x-auto text-xs font-mono text-emerald-400 max-h-[55vh]">
                <pre>{JSON.stringify(structuredData, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* TAB 2: Sitemap Architecture */}
          {activeTab === 'sitemap' && (
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-base font-serif-luxury font-bold text-stone-900">
                  Mobile-Responsive Sitemap Architecture
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Organized into a clean single-page application (SPA) with deep smooth-scrolling anchors, fast sub-views, and persistent conversion funnels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Home */}
                <div className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-black">1</span>
                    <span>Home (`#hero`)</span>
                  </div>
                  <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                    <li>Hero Banner & Cinematic Imagery</li>
                    <li>Value Proposition & Highway SH-38 Badges</li>
                    <li>3.9★ Google Rating & 790+ Reviews Trust Pill</li>
                    <li>Interactive Quick WhatsApp Date & Quote Estimator</li>
                    <li>Primary "Book on WhatsApp" & "Call Desk" CTAs</li>
                    <li>Key Metric Counters (1000+ lawn, 2 AC halls, Pool, 12+ rooms)</li>
                  </ul>
                </div>

                {/* 2. About Us */}
                <div className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-black">2</span>
                    <span>About Us (`#about`)</span>
                  </div>
                  <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                    <li>Property Introduction & Unnao-Kanpur Heritage</li>
                    <li>Management Hospitality Philosophy & Awadhi Welcoming</li>
                    <li>Solving Wedding Headaches (Parking, AC cooling, Backup)</li>
                    <li>4 Core Pillars: Indoor+Outdoor, Coordination, Pool, Rooms</li>
                    <li>Verified Property Guarantee Badges</li>
                  </ul>
                </div>

                {/* 3. Amenities */}
                <div className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-black">3</span>
                    <span>Amenities & Venues (`#amenities` & `#venues`)</span>
                  </div>
                  <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                    <li>Grand Royal Marriage Lawn (1,000 Capacity)</li>
                    <li>Grand Banquet Hall 1 (300 Capacity, Central AC)</li>
                    <li>Intimate Banquet Hall 2 (200 Capacity, Haldi/Mehendi)</li>
                    <li>Swimming Pool & Sun Deck (Private party spotlight)</li>
                    <li>12+ Deluxe AC Rooms & Bridal Makeup Suite</li>
                    <li>100% Heavy Generator Backup & 100+ Secured Car Parking</li>
                  </ul>
                </div>

                {/* 4. Gallery */}
                <div className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-black">4</span>
                    <span>Gallery (`#gallery`)</span>
                  </div>
                  <ul className="space-y-1 text-xs text-stone-700 list-disc list-inside">
                    <li>Category Filters: All, Lawn & Wedding, Banquets, Poolside, Rooms, Catering</li>
                    <li>High-Resolution Visual Showcase</li>
                    <li>Interactive Fullscreen Lightbox with Zoom & Captions</li>
                    <li>"Request More Photos on WhatsApp" CTA</li>
                  </ul>
                </div>

                {/* 5. Contact & Booking */}
                <div className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200 md:col-span-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black">5</span>
                    <span>Contact / Booking Funnel (`#contact` & `#location`)</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Google Maps Interactive Embed (`26.5034, 80.4990`)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Direct Navigation Button linking to user's Google Maps link</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>One-Tap WhatsApp Booking Modal with Pre-formatted text</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Click-to-Call Phone numbers (+91 9724539652 / +91 6387919276)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Distance & Transit Times from Unnao Jn & Kanpur Central</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Mobile Persistent Sticky Footer with Call, WhatsApp & Map buttons</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: Wireframe Blueprint */}
          {activeTab === 'wireframe' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-serif-luxury font-bold text-stone-900">
                  Homepage Wireframe & UX Conversion Funnel
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Visual structural schematic highlighting the placement of key information and the WhatsApp conversion engine across Desktop and Mobile viewports.
                </p>
              </div>

              {/* Wireframe Diagram Graphic */}
              <div className="bg-[#1c1917] p-5 rounded-2xl border border-stone-800 font-mono text-xs leading-relaxed space-y-4">
                
                {/* Desktop Schema */}
                <div className="space-y-2 border-b border-stone-800 pb-5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Monitor className="w-4 h-4" />
                    <span>Desktop Layout Schematic (1200px+)</span>
                  </div>
                  <pre className="text-stone-300 text-[11px] overflow-x-auto p-3 bg-stone-900/60 rounded-xl border border-stone-800">
{`+-------------------------------------------------------------------------------------------------+
| TOP NOTICE: Booking Open | 3.9★ (790+ Google Reviews) | Call: +91 97245 39652                   |
+-------------------------------------------------------------------------------------------------+
| [LOGO: Raghav Resort]   [Home] [About] [Venues] [Pool] [Gallery] [Location]    [🟢 BOOK ON WHATSAPP]|
+-------------------------------------------------------------------------------------------------+
|                                HERO SECTION                                                     |
|  [SH-38 Unnao-Kanpur] [3.9★ Google] [1,000 Guests]    |  [ QUICK WHATSAPP ESTIMATOR WIDGET ]    |
|  Headline: Welcome to Raghav Resort                   |  - Event Type: [ Wedding / Sangeet  v ] |
|  Subhead: Grand Lawn • 2 Banquets • Pool • AC Rooms   |  - Date: [ DD/MM/YYYY                 ] |
|  [ 🟢 Book on WhatsApp ]  [ 📞 Call Desk ]  [ 🗺️ Map ]|  - Guests: [ 300 - 600 Guests       v ] |
|  Key Badges: [ 1000+ Lawn ] [ 2 AC Halls ] [ Pool ]   |  [ 🟢 CHECK AVAILABILITY ON WHATSAPP  ] |
+-------------------------------------------------------------------------------------------------+
| AT A GLANCE: [ 1,000+ Lawn ] | [ 2 Banquets ] | [ Pool ] | [ 12+ Rooms ] | [ 100+ Parking ]     |
+-------------------------------------------------------------------------------------------------+
| ABOUT US: Property Story | Awadhi Hospitality | 4 Value Pillars | Highway Frontage              |
+-------------------------------------------------------------------------------------------------+
| VENUES & SPACES: Filters [ All | Lawn | Banquets | Pool | Rooms ] -> Cards with [WhatsApp Inquiry]|
+-------------------------------------------------------------------------------------------------+
| SWIMMING POOL SPOTLIGHT: Pool Parties | Rain Dance | Sundowner DJs | [ 🟢 Book Pool on WhatsApp ]|
+-------------------------------------------------------------------------------------------------+
| PACKAGES & RATES: Royal Wedding | Pre-Wedding | Pool Party | Rooms -> [ Get WhatsApp Quote ]    |
+-------------------------------------------------------------------------------------------------+
| PHOTO GALLERY: 6 Filter Tabs | Interactive Lightbox Fullscreen Preview                          |
+-------------------------------------------------------------------------------------------------+
| REVIEWS: 3.9★ Rating Breakdown | 790+ Reviews | Testimonial Cards | Link to Google Maps         |
+-------------------------------------------------------------------------------------------------+
| LOCATION & CONTACT: Embedded Google Map (26.5034, 80.4990) | Distance Matrix | Direct Call Lines|
+-------------------------------------------------------------------------------------------------+
| FOOTER: Resort Summary | Quick Navigation Links | Contact Numbers | Copyright & Direct WhatsApp |
+-------------------------------------------------------------------------------------------------+`}
                  </pre>
                </div>

                {/* Mobile Schema */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile Screen Schematic (&lt; 768px Viewport)</span>
                  </div>
                  <pre className="text-stone-300 text-[11px] overflow-x-auto p-3 bg-stone-900/60 rounded-xl border border-stone-800">
{`+--------------------------------------------------+
| [RR Logo] Raghav Resort         [🟢 Book] [ ☰ ] |
+--------------------------------------------------+
| HERO IMAGE (Illuminated Lawn Night)              |
| [3.9★ (790+ Reviews)] [SH-38 Unnao-Kanpur]      |
| "Welcome to Raghav Resort"                       |
| "Lawn • Banquets • Pool • AC Rooms"              |
| [ 🟢 BIG PROMINENT WHATSAPP BOOKING BUTTON ]    |
| [ 📞 Call ]  [ 🗺️ Open in Google Maps ]         |
+--------------------------------------------------+
| QUICK WHATSAPP FORM: Event -> Date -> Send       |
+--------------------------------------------------+
| STATS: 1000+ Lawn | 2 Banquets | Pool | 12 Rooms |
+--------------------------------------------------+
| ABOUT US & VENUES (Touch Swipeable Cards)        |
+--------------------------------------------------+
| SWIMMING POOL SPECIAL SECTION                    |
+--------------------------------------------------+
| PACKAGES & RATES ACCORDION                       |
+--------------------------------------------------+
| PHOTO GALLERY TAP-TO-ZOOM                        |
+--------------------------------------------------+
| GOOGLE MAP EMBED & DISTANCE TIMINGS              |
+--------------------------------------------------+
| ================================================ |
| PERSISTENT BOTTOM STICKY BAR (Always visible):   |
| [ 📞 Call Desk ] [ 🟢 BOOK ON WHATSAPP ] [ 🗺️ Map] |
| ================================================ |`}
                  </pre>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#050b14] border-t border-amber-500/20 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Raghav Resort Digital Architecture • Ready for Production Deployment
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="py-2.5 px-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all cursor-pointer border border-emerald-400/50"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Test Live WhatsApp Booking</span>
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-4 bg-[#091526] hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-amber-500/30"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
