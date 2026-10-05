import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  Phone,
  Crown
} from 'lucide-react';
import { FAQS, RESORT_INFO, buildWhatsAppLink } from '../data/resortData';
import { ScrollReveal } from './ScrollReveal';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskOnWhatsApp = () => {
    const link = buildWhatsAppLink({
      customMessage: 'Namaste Raghav Resort! I have a question regarding event booking policies and date availability.'
    });
    window.open(link, '_blank');
  };

  return (
    <section id="faqs" className="py-24 bg-[#050c18] text-white border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#081322] text-amber-300 border border-amber-400/40 uppercase tracking-widest mb-3.5 shadow-lg">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-black text-white tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Everything you need to know about celebrating at Raghav Resort.
          </p>
        </ScrollReveal>

        {/* Accordion list with ScrollReveal */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 0.08}
                duration={0.6}
              >
                <div className="rounded-2xl border border-amber-500/25 bg-[#081322]/90 overflow-hidden transition-all duration-200 shadow-xl backdrop-blur-xl hover:border-amber-400/50">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-amber-300' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-amber-500/20 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions WhatsApp prompt */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={0.6} className="mt-14 p-7 rounded-3xl bg-gradient-to-r from-[#081322] via-[#0a182c] to-[#04141d] border border-amber-500/35 text-center space-y-4 shadow-2xl">
          <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white">
            Have a Specific Question or Custom Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto font-normal">
            Our resort banquet team is available on WhatsApp to answer inquiries about wedding dates, decorator permissions, special menu tastings, or pool party timings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleAskOnWhatsApp}
              className="px-6 py-3 btn-whatsapp-luxury text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </button>
            <a
              href={`tel:${RESORT_INFO.phones[0].number}`}
              className="px-6 py-3 btn-glass-luxury font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Manager ({RESORT_INFO.phones[0].display})</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
