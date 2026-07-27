import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Cpu, Mail, Phone, MapPin, GraduationCap, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab, sectionId?: string) => void;
  onOpenWorkshopRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenWorkshopRegister }) => {
  return (
    <footer className="bg-slate-950 border-t border-blue-900/40 relative overflow-hidden text-slate-400">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/30">
                <Cpu className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-heading text-xl font-bold text-slate-100">
                Solved <span className="text-blue-400 font-light">by Tech</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+254 790 281 128 / 0790281128</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-200">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('home', 'portfolio')} className="hover:text-amber-300 transition-colors">
                  Client Software Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home', 'services')} className="hover:text-amber-300 transition-colors">
                  Core Technology Services
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home', 'packages')} className="hover:text-amber-300 transition-colors">
                  Service Packages & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home', 'how-it-works')} className="hover:text-amber-300 transition-colors">
                  How We Work Process
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home', 'faq')} className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Teen Workshop Spotlight */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Teen Workshops</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hosted every holiday in April, August, and December for Junior & Senior High students.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-amber-300">Next Cohort:</span>
                <span className="text-slate-200 font-bold">April 2026</span>
              </div>
              <button
                onClick={onOpenWorkshopRegister}
                className="w-full py-2 rounded-lg bg-mustard-gradient text-slate-950 font-bold text-center block text-[11px] hover:bg-mustard-hover transition-all"
              >
                Register Teen Spot
              </button>
            </div>
          </div>

          {/* SEO Blog & Thought Leadership */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-200">SEO Tech Blog</h4>
            <p className="text-xs text-slate-300">
              Weekly automated AI insights covering modern tech stack trends, UI/UX best practices, and data strategies.
            </p>
            <button
              onClick={() => { setActiveTab('blog'); window.scrollTo(0,0); }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span>Explore Weekly Articles</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Solved by Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">Enterprise Security Verified</span>
            </span>
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
