/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyHighlights } from './components/PropertyHighlights';
import { AboutSection } from './components/AboutSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { VenuesSection } from './components/VenuesSection';
import { PoolFeatureSection } from './components/PoolFeatureSection';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { FALLBACK_IMAGES } from './data/resortData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalVenue, setModalVenue] = useState<string>('Grand Royal Marriage Lawn');
  const [modalEventType, setModalEventType] = useState<string>('Grand Wedding & Reception');

  const handleOpenBooking = (venue?: string, eventType?: string) => {
    if (venue) setModalVenue(venue);
    if (eventType) setModalEventType(eventType);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#040912] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Global Atmospheric Hotel Backdrop Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.035]">
        <img
          src={FALLBACK_IMAGES.hotelBackdrop}
          alt=""
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040912] via-transparent to-[#040912]" />
      </div>

      {/* Dynamic Luminous Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Navbar: Clean, Prestigious & Well-Mannered */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
      />

      <main className="flex-1 relative z-10">
        {/* 1. Home Section: Hero with interactive quote generator & Instant WhatsApp Booking */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Property Highlights at a Glance */}
        <PropertyHighlights />

        {/* 2. About Us Section: Origin, Heritage & Awadhi Hospitality */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Amenities Section: Complete Inventory Breakdown */}
        <AmenitiesSection onOpenBooking={() => handleOpenBooking()} />

        {/* Venues & Spaces: Grand Lawn, Banquet 1, Banquet 2, Poolside, Deluxe Rooms */}
        <VenuesSection onOpenBooking={handleOpenBooking} />

        {/* Swimming Pool Special Feature Section */}
        <PoolFeatureSection onOpenBooking={handleOpenBooking} />

        {/* Curated Celebration Packages & Rates */}
        <PackagesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Gallery Section: Categorized Photos with Lightbox Modal */}
        <GallerySection onOpenBooking={() => handleOpenBooking()} />

        {/* Verified Reviews & 3.9★ Google Ratings Breakdown */}
        <ReviewsSection />

        {/* 5. Contact & Booking: Embedded Map, Distance Timings & Direct Calling */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Persistent Mobile Bottom Sticky Bar & Desktop Floating WhatsApp CTA */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialVenue={modalVenue}
        initialEventType={modalEventType}
      />
    </div>
  );
}
