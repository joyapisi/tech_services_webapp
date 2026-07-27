import React from 'react';
import { MessageSquare, Phone, Calendar, ArrowUpRight } from 'lucide-react';

interface FloatingActionsProps {
  onBookConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookConsultation }) => {
  const whatsappNumber = "0790281128";
  const whatsappUrl = `https://wa.me/254790281128?text=${encodeURIComponent("Hi Solved by Tech, I would like to book a consultation and inquire about your services.")}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-3 pointer-events-auto">
      
      {/* WhatsApp Direct Chat Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/95 hover:bg-slate-900 text-slate-100 border border-emerald-500/50 hover:border-emerald-400 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-semibold backdrop-blur-xl"
        title="Chat on WhatsApp (0790281128)"
      >
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-slate-950">
          <Phone className="w-4 h-4 fill-slate-950" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-emerald-400 font-mono leading-none">WhatsApp Us</span>
          <span className="font-mono text-xs font-bold text-slate-100 mt-0.5">{whatsappNumber}</span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      {/* Sticky Book a Consultation CTA Button */}
      <button
        onClick={onBookConsultation}
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full font-extrabold text-xs text-slate-950 bg-mustard-gradient hover:bg-mustard-hover shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 soft-glow-mustard"
      >
        <Calendar className="w-4 h-4 fill-slate-950" />
        <span>Book a Consultation</span>
      </button>

    </div>
  );
};
