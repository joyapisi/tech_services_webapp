import React, { useState, useEffect } from 'react';
import { PageTab, Project } from '../types';
import { 
  COMPANY_INFO, 
  CORE_SERVICES, 
  SERVICE_PACKAGES, 
  PROJECTS, 
  TESTIMONIALS,
  FAQ_ITEMS 
} from '../data/mockData';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Code2, 
  Layout, 
  BarChart3, 
  Star, 
  CheckCircle2, 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowUpRight,
  Clock,
  Bot,
  TrendingUp,
  Share2,
  Database,
  Globe,
  MessageSquare,
  Building2,
  Briefcase,
  Layers,
  HelpCircle,
  PhoneCall,
  Check,
  ChevronDown,
  X,
  Mail,
  MapPin,
  Send,
  Phone
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  initialScrollSection?: string;
  onOpenWorkshopRegister: () => void;
  selectedProjectId?: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  initialScrollSection,
  onOpenWorkshopRegister,
  selectedProjectId
}) => {
  // Portfolio state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    selectedProjectId ? PROJECTS.find(p => p.id === selectedProjectId) || null : null
  );

  // FAQ open/close state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact Form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: 'AI-Powered Web Applications',
    budgetRange: '$2,000 - $5,000',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Service drawer / scroll helper
  const handleSelectServiceAndScroll = (serviceTitle: string) => {
    setContactForm(prev => ({ ...prev, serviceNeeded: serviceTitle }));
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (initialScrollSection) {
      const el = document.getElementById(initialScrollSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialScrollSection]);

  const categories = [
    'All',
    'AI & Web Applications',
    'UI/UX Design',
    'SEO & Digital Visibility',
    'Business Analytics',
    'Teen Tech Workshop'
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-amber-400" />;
      case 'Database': return <Database className="w-6 h-6 text-amber-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-amber-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-amber-400" />;
      default: return <Code2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-12 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-radial opacity-90 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />
        
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-mono soft-drop-shadow">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300">AI • Data Intelligence • Digital Growth</span>
              <span className="text-amber-400 font-bold">| Solved by Tech</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Helping Businesses Grow with{' '}
              <span className="text-mustard-gradient block mt-2">
                AI, Data and Digital Solutions
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              We create intelligent digital solutions, improve online visibility, analyse business performance, and help organisations use technology and data to make better decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('core-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all duration-300 soft-glow-mustard flex items-center justify-center gap-3 text-base group hover:scale-105 active:scale-95"
              >
                <span>Explore Core Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-blue-800/50 hover:border-amber-400 flex items-center justify-center gap-2.5 text-base transition-all duration-300 soft-drop-shadow"
              >
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Book a Consultation</span>
              </button>

              <button
                onClick={onOpenWorkshopRegister}
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-amber-300 bg-slate-950/80 hover:bg-slate-900 border border-amber-500/40 flex items-center justify-center gap-2 text-sm transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Teen Tech Workshop</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Outcome & Results Focused</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Zero Technical Jargon</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Data-Driven Decisions</span>
              </span>
            </div>

          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 rounded-2xl bg-slate-900/70 border border-blue-900/40 backdrop-blur-md soft-drop-shadow">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 rounded-xl bg-slate-950/60 border border-blue-900/20">
                <div className="text-3xl sm:text-4xl font-extrabold text-mustard-gradient font-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. WHO WE HELP SECTION */}
      <section id="who-we-help" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Tailored Growth Pathways</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Who We Help
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            We partner with businesses, founders, executive leaders, and young learners to solve operational challenges and drive digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 hover:border-amber-400/40 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-100">Growing Businesses & SMEs</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Businesses looking to boost Google search visibility, attract qualified online clients, and convert visitors into steady revenue.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-amber-400 font-mono">
              Focus: Organic SEO, Local Presence & Conversions
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 hover:border-amber-400/40 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-100">Startups & Product Teams</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Founders who need high-performance web applications, intelligent AI integrations, intuitive UI/UX design, and scalable tech infrastructure.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-amber-400 font-mono">
              Focus: Custom Software & AI Workflows
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 hover:border-amber-400/40 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-amber-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-100">Corporate & Leaders</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Organizations needing interactive executive BI dashboards, data pipeline automation, and expert data consultancy for confident decision-making.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-amber-400 font-mono">
              Focus: Business Data & Performance Analytics
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 space-y-4 flex flex-col justify-between soft-glow-mustard">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-slate-100">High Schoolers & Parents</h3>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold uppercase">Holiday</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Junior and senior high school students looking to gain practical hands-on skills in UI/UX design, data analytics, and AI building during school breaks.
              </p>
            </div>
            <button 
              onClick={onOpenWorkshopRegister}
              className="text-xs font-bold text-amber-300 flex items-center gap-1 hover:text-amber-200 pt-2 border-t border-amber-500/30"
            >
              <span>Register Teen Workshop</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Specialized Capabilities</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Core Technology Services
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            We deliver outcomes that save time, attract customers, automate repetitive work, and give you complete clarity over business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-blue-card p-7 rounded-2xl border border-blue-900/40 hover:border-amber-400/50 transition-all duration-300 space-y-5 flex flex-col justify-between group hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800/40">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1">
                  <span className="text-[9px] font-mono text-amber-400 uppercase font-bold block">Key Client Result</span>
                  <p className="text-xs font-semibold text-slate-100">
                    {service.mainResult}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <button
                  onClick={() => handleSelectServiceAndScroll(service.title)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-slate-950 bg-slate-900 hover:bg-mustard-gradient border border-slate-700 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:border-amber-400"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICE PACKAGES SECTION */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Structured Engagements</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Service Packages
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Clear, outcome-focused packages tailored to your current stage of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-3xl space-y-6 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 border-2 border-amber-400/80 soft-glow-mustard scale-105 z-10'
                  : 'bg-blue-card border border-blue-900/40 hover:border-slate-700'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-mustard-gradient text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-wider soft-glow-mustard">
                  Most Popular for Growth
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-semibold block">
                    {pkg.idealFor}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-slate-100">
                    {pkg.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {pkg.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-2">
                <button
                  onClick={() => handleSelectServiceAndScroll(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    pkg.highlighted
                      ? 'bg-mustard-gradient text-slate-950 hover:bg-mustard-hover soft-glow-mustard'
                      : 'bg-slate-900 text-slate-100 hover:text-slate-950 hover:bg-mustard-gradient border border-slate-700'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-slate-400 font-mono">
                  Custom quote prepared based on scope
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-800/50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800/40 text-xs font-mono font-bold">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Bespoke Engineering</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-100">
                Need a Custom Solution?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Have specific technical requirements, complex legacy integrations, custom multi-tier data pipelines, or specialized operational workflows? We build custom software architectures tailored to your exact specifications.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => handleSelectServiceAndScroll('Custom Software Solution')}
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all text-xs soft-glow-mustard flex items-center justify-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/254790281128?text=Hi%20Solved%20by%20Tech,%20I%20have%20a%20custom%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp (0790281128)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION (DEDICATED SECTION ON HOMEPAGE) */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-amber-400">
            <Briefcase className="w-4 h-4" />
            <span>Case Studies & Software Artifacts</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Client Software Portfolio
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Explore real-world platforms, design systems, data engines, and AI agents engineered by Solved by Tech.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-mustard-gradient text-slate-950 soft-glow-mustard'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-blue-900/40 hover:border-blue-500/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bg-blue-card rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between soft-drop-shadow border border-blue-900/40 hover:border-amber-400/50"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-950/90 text-amber-300 border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs text-slate-400 font-mono">{project.client} • {project.industry}</div>
                  <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-blue-900/40">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TEEN TECH WORKSHOP SECTION */}
      <section id="teen-workshop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 border border-amber-500/50 soft-glow-mustard">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Quarterly Holiday Tech Challenge</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
                4-Day Holiday Teen Challenge Workshop
              </h2>

              <p className="text-amber-300 text-xs font-mono font-medium italic">
                "Don't let the holiday slip away through scrolling social media."
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                Every holiday in <strong className="text-amber-300 font-semibold">April, August, and December</strong>, Solved by Tech hosts an intensive 4-day challenge for junior and senior high schoolers. Teenagers learn practical <strong className="text-slate-100">UI/UX App Design</strong>, <strong className="text-slate-100">Data/Business Analytics</strong>, and <strong className="text-slate-100">Building with AI</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-800/40">
                  <div className="text-amber-400 font-bold">Pillar 1</div>
                  <div className="text-slate-200 mt-0.5">UI/UX App Design (Figma)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-800/40">
                  <div className="text-amber-400 font-bold">Pillar 2</div>
                  <div className="text-slate-200 mt-0.5">Data & Business Analytics</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-800/40">
                  <div className="text-amber-400 font-bold">Pillar 3</div>
                  <div className="text-slate-200 mt-0.5">Building with AI (Gemini)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/90 rounded-2xl p-6 border border-amber-500/40 space-y-4 text-center">
              <div className="text-xs uppercase font-mono text-slate-400">Next Upcoming Cohort</div>
              <div className="text-3xl font-extrabold text-amber-300 font-heading">April 2026</div>
              <p className="text-xs text-slate-300">April 14 - April 17 • Junior & Senior High Students</p>
              
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold flex items-center justify-between">
                <span>Workshop Tuition Fee</span>
                <span className="text-emerald-400 font-extrabold">KES 5,000</span>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenWorkshopRegister}
                  className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all text-sm soft-glow-mustard"
                >
                  Register Student Spot
                </button>
              </div>

              <div className="text-[10px] text-slate-400 font-mono">
                Pay via M-Pesa STK, Paybill (542542), or Card
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK SECTION */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Our Proven Process</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            How We Work
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            A transparent, structured 4-step framework focused on driving measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-amber-400/30">01</span>
            <h3 className="font-heading text-lg font-bold text-slate-100">Discovery & Strategy</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We assess your business goals, target audience, technical bottlenecks, and SEO visibility opportunities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-amber-400/30">02</span>
            <h3 className="font-heading text-lg font-bold text-slate-100">Design & Architecture</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We create intuitive UI/UX wireframes, design systems, and map scalable system and data architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-amber-400/30">03</span>
            <h3 className="font-heading text-lg font-bold text-slate-100">Build & AI Integration</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We engineer full-stack web software, connect analytics pipelines, and integrate intelligent AI capabilities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-card border border-blue-900/40 space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-amber-400/30">04</span>
            <h3 className="font-heading text-lg font-bold text-slate-100">Launch & Optimization</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We deploy securely, monitor traffic performance, track conversion rates, and continuously optimize for growth.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE SOLVED TECH */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Our Advantage</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Why Choose Solved Tech
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            We combine high-end software craftsmanship with practical business sense and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-100">Outcome-Driven</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We focus strictly on results that matter: saving team time, attracting customers, and driving decision-making.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-100">AI & Data Expertise</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Deep experience integrating Gemini generative AI, analytics pipelines, and interactive executive dashboards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-100">Clear Communication</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              No technical buzzwords or confusion. We speak your language and communicate progress transparently.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-100">Youth Tech Mentorship</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Proud creators of the 4-Day Teen Challenge, empowering junior and senior high students with real tech skills.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">Got Questions?</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-100">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Everything you need to know about working with Solved by Tech.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/90 border border-blue-900/40 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-100">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-800 text-amber-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CONTACT / BOOK CONSULTATION SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/95 border border-amber-500/40 relative overflow-hidden soft-glow-mustard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100">
                Book a Consultation or Request a Quote
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Ready to accelerate your software, SEO visibility, or data analytics capability? Tell us about your project goals and we will prepare a tailored solution.
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs text-slate-300">
                <a 
                  href="https://wa.me/254790281128?text=Hi%20Solved%20by%20Tech,%20I'd%20like%20to%20book%20a%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-slate-100 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-bold">WhatsApp Direct</span>
                    <span className="font-bold text-sm">0790281128 (+254 790 281 128)</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-blue-900/40 text-slate-300">
                  <div className="p-2 rounded-lg bg-blue-900/40 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Direct Email</span>
                    <span className="font-bold text-slate-100">{COMPANY_INFO.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-blue-900/40 text-slate-300">
                  <div className="p-2 rounded-lg bg-blue-900/40 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Headquarters</span>
                    <span className="text-slate-100">{COMPANY_INFO.officeAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-900/40 space-y-6">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-100">Consultation Request Received!</h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-amber-300">{contactForm.name}</strong>. Our technology strategist will review your inquiry and reach out within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs text-amber-400 font-mono font-bold"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="0790281128 or +254..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Company / Organization</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g. Apex Tech Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Service Needed</label>
                      <select
                        value={contactForm.serviceNeeded}
                        onChange={(e) => setContactForm({ ...contactForm, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      >
                        <option value="AI-Powered Web Applications">AI-Powered Web Applications</option>
                        <option value="SEO and Google Visibility">SEO and Google Visibility</option>
                        <option value="Website Analytics and Performance">Website Analytics and Performance</option>
                        <option value="Social Media Analytics">Social Media Analytics</option>
                        <option value="Business Data Consultancy">Business Data Consultancy</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="OneKana Digital Presence">OneKana Digital Presence</option>
                        <option value="Digital Presence Starter Package">Digital Presence Starter Package</option>
                        <option value="Business Growth Package">Business Growth Package</option>
                        <option value="AI Business Transformation Package">AI Business Transformation Package</option>
                        <option value="4-Day Holiday Teen Challenge Workshop">4-Day Holiday Teen Challenge Workshop</option>
                        <option value="Custom Software Solution">Custom Software Solution</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Estimated Budget</label>
                      <select
                        value={contactForm.budgetRange}
                        onChange={(e) => setContactForm({ ...contactForm, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors"
                      >
                        <option value="Under $1,000 / KES 100k">Under $1,000 / KES 100k</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Teen Workshop (KES 5,000)">Teen Workshop Tuition (KES 5,000)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Project Overview / Goals</label>
                    <textarea
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Briefly describe what you're trying to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all text-xs soft-glow-mustard flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED PROJECT MODAL (FOR PORTFOLIO CASE STUDIES) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 soft-glow-mustard relative">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                {activeModalProject.category}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-100">
                {activeModalProject.title}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Client: {activeModalProject.client} | Industry: {activeModalProject.industry}
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-900/40">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/20 space-y-2">
                <h4 className="font-heading font-bold text-red-400 uppercase tracking-wider text-[11px]">The Challenge</h4>
                <p className="text-slate-300">{activeModalProject.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-2">
                <h4 className="font-heading font-bold text-emerald-400 uppercase tracking-wider text-[11px]">The Solution</h4>
                <p className="text-slate-300">{activeModalProject.solution}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-bold text-amber-300 text-sm">Key Quantifiable Impact</h4>
              <ul className="space-y-2 text-xs">
                {activeModalProject.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-bold text-slate-200 text-xs">Technologies Employed</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-blue-300 border border-blue-800/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  handleSelectServiceAndScroll(activeModalProject.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all text-xs"
              >
                Inquire About Similar Build
              </button>

              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
