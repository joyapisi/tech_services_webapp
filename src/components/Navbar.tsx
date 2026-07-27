import React, { useState } from 'react';
import { PageTab } from '../types';
import { Cpu, Menu, X, GraduationCap, Sparkles, Briefcase, Layers, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab, sectionId?: string) => void;
  onOpenWorkshopRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenWorkshopRegister
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', sectionId: 'hero', label: 'Home', icon: <Cpu className="w-4 h-4" /> },
    { id: 'home', sectionId: 'services', label: 'Services', icon: <Layers className="w-4 h-4" /> },
    { id: 'home', sectionId: 'packages', label: 'Packages', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'home', sectionId: 'portfolio', label: 'Portfolio', icon: <Briefcase className="w-4 h-4" /> },
    { 
      id: 'home', 
      sectionId: 'teen-workshop', 
      label: 'Teen Tech Workshop', 
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />, 
      badge: 'Holiday' 
    },
    { id: 'home', sectionId: 'faq', label: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'blog', sectionId: undefined, label: 'Insights', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'home', sectionId: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: PageTab, sectionId?: string) => {
    setActiveTab(tab, sectionId);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-blue-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home', 'hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 border border-blue-500/30 group-hover:border-amber-400/60 transition-all duration-300 soft-drop-shadow">
              <Cpu className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl font-bold tracking-tight text-slate-100 group-hover:text-amber-300 transition-colors">
                  Solved <span className="text-blue-400 font-light">by Tech</span>
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-mono text-slate-400">Software • Analytics • AI</p>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-blue-900/40">
            {navItems.map((item, idx) => {
              const isActive = activeTab === item.id && (!item.sectionId || item.sectionId === 'hero');
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.id as PageTab, item.sectionId)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-slate-950 font-semibold bg-mustard-gradient soft-glow-mustard'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-slate-950 text-amber-300' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWorkshopRegister}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all duration-300 soft-glow-mustard hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Register Teen Workshop</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenWorkshopRegister}
              className="sm:hidden px-3 py-1.5 text-[11px] font-semibold text-slate-950 bg-mustard-gradient rounded-lg"
            >
              Teen Workshop
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-blue-800/40 text-slate-300 hover:text-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-blue-900/40 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4">
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-3 pb-1">Navigation Menu</p>
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.id as PageTab, item.sectionId)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          
          <div className="pt-4 border-t border-slate-800/80">
            <button
              onClick={() => {
                onOpenWorkshopRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-slate-950 bg-mustard-gradient soft-glow-mustard"
            >
              <GraduationCap className="w-5 h-5 text-slate-950" />
              <span>Register for April/Aug/Dec Workshop</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
