import { Project, Service, Testimonial, WorkshopSession, BlogArticle, CoreServiceItem, ServicePackage } from '../types';

export const CORE_SERVICES: CoreServiceItem[] = [
  {
    id: "cs-1",
    title: "AI-Powered Web Applications",
    description: "Intelligent web and mobile applications engineered to automate repetitive workflows, enhance customer interactions, and leverage generative AI.",
    mainResult: "Saves time, automates repetitive work, and delivers personalized user experiences.",
    iconName: "Bot",
    category: "AI & Software"
  },
  {
    id: "cs-2",
    title: "SEO and Google Visibility",
    description: "Technical search engine optimization and automated high-quality content engines that rank your business on Google for high-intent queries.",
    mainResult: "Attracts qualified customers and drives sustainable organic web traffic.",
    iconName: "TrendingUp",
    category: "Search & Growth"
  },
  {
    id: "cs-3",
    title: "Website Analytics and Performance",
    description: "Deep speed optimization, user behavior mapping, traffic auditing, and conversion rate optimization across all digital channels.",
    mainResult: "Reveals exact visitor actions so you can convert more traffic into sales.",
    iconName: "BarChart3",
    category: "Analytics"
  },
  {
    id: "cs-4",
    title: "Social Media Analytics",
    description: "Data-driven audience tracking, content engagement metrics, campaign reach analysis, and multi-channel ROI reporting.",
    mainResult: "Ensures marketing budget is focused on content that drives real business growth.",
    iconName: "Share2",
    category: "Marketing Intelligence"
  },
  {
    id: "cs-5",
    title: "Business Data Consultancy",
    description: "Custom executive BI dashboards, revenue and inventory pipelines, data warehousing, and actionable decision frameworks.",
    mainResult: "Turns complex raw data into clear, confident executive decisions.",
    iconName: "Database",
    category: "Data Strategy"
  },
  {
    id: "cs-6",
    title: "UI/UX Design",
    description: "Human-centered digital product interfaces, Figma token design systems, interactive prototypes, and usability audits.",
    mainResult: "Improves user satisfaction and converts browsers into loyal clients.",
    iconName: "Layout",
    category: "Design"
  },
  {
    id: "cs-7",
    title: "OneKana Digital Presence",
    description: "Unified digital ecosystem setup, local search optimization, branding assets, and automated multi-channel touchpoints.",
    mainResult: "Establishes a commanding, highly professional online presence across platforms.",
    iconName: "Globe",
    category: "Digital Ecosystem"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-1",
    name: "Digital Presence Starter",
    idealFor: "For businesses and professionals establishing an online presence.",
    description: "Everything required to establish a strong, credible digital foundation that attracts customers and showcases your value.",
    features: [
      "Custom responsive website or OneKana digital presence",
      "Essential SEO & Google Business Profile optimization",
      "Website performance audit & analytics setup",
      "Contact form & direct WhatsApp messaging integration",
      "Mobile-first design & SSL security configuration"
    ],
    ctaText: "Request a Quote",
    ctaType: "quote"
  },
  {
    id: "pkg-2",
    name: "Business Growth Package",
    idealFor: "For businesses seeking better SEO, analytics, content insights, and online performance.",
    description: "An integrated growth system designed to scale organic traffic, optimize conversion rates, and track digital marketing performance.",
    features: [
      "Advanced technical SEO & automated content engine setup",
      "Comprehensive website & social media analytics tracking",
      "Conversion rate optimization & user behavior insights",
      "Monthly performance reports & keyword growth strategy",
      "UI/UX improvements for maximum engagement"
    ],
    ctaText: "Book a Consultation",
    ctaType: "consultation",
    highlighted: true
  },
  {
    id: "pkg-3",
    name: "AI Business Transformation",
    idealFor: "For organisations needing custom applications, automation, dashboards, UI/UX design, and data consultancy.",
    description: "A complete technology overhaul integrating intelligent AI web applications, custom business analytics, and operational automation.",
    features: [
      "Custom AI-powered web or mobile application development",
      "Executive BI analytics dashboards & data consultancy",
      "Full UI/UX product design & Figma design system",
      "Automated business process workflows & API integrations",
      "Dedicated tech strategy & ongoing engineering support"
    ],
    ctaText: "Request a Quote",
    ctaType: "quote"
  }
];

export const COMPANY_INFO = {
  name: "Solved by Tech",
  tagline: "High-Performance Software, Data Intelligence & Future-Ready Tech Talent.",
  description: "Solved by Tech builds elegant web/mobile applications, designs conversion-focused UI/UX systems, builds automated AI workflows, and empowers high schoolers through our premier 4-Day Holiday Teen Challenge.",
  contactEmail: "hello@solvedbytech.com",
  phone: "+1 (800) 589-TECH",
  officeAddress: "Tech Innovation Hub, Suite 400, Tech City",
  stats: [
    { value: "99.4%", label: "Client Satisfaction" },
    { value: "45+", label: "Enterprise Projects" },
    { value: "1,400+", label: "Teen Challenge Graduates" },
    { value: "3.5x", label: "Average Client ROI" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AuraPay - AI-Powered FinTech Mobile Ecosystem",
    client: "Aura Financial Group",
    industry: "FinTech",
    category: "AI & Web Applications",
    description: "End-to-end mobile banking design and real-time fraud prevention engine using predictive LLM prompts.",
    longDescription: "AuraPay needed a modern mobile platform that combined hyper-personalized user onboarding with instant transaction categorization and AI-assisted financial budgeting for Gen-Z and Millennials.",
    challenge: "High churn during multi-step KYC verification and opaque financial transaction histories caused drop-offs.",
    solution: "Designed a frictionless 2-minute biometric onboarding flow coupled with an automated AI transaction intelligence assistant.",
    results: [
      "240% increase in monthly active transaction volume",
      "88% reduction in KYC verification drop-offs",
      "Awarded Best Mobile UI/UX in Financial Services 2025"
    ],
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "Gemini API", "Express", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "proj-2",
    title: "OmniHealth Design System & Telehealth Suite",
    client: "OmniCare Health Network",
    industry: "Healthcare",
    category: "UI/UX Design",
    description: "Unified clinical design system and accessible patient portal for over 250,000 active patients.",
    longDescription: "Re-engineered 14 fragmented legacy web portals into a singular, high-contrast, WCAG AA accessible design system for doctors and patients.",
    challenge: "Inconsistent UI patterns across web and mobile led to appointment booking errors and extended doctor consultation prep time.",
    solution: "Created an atomized design system token library in Figma & Tailwind, reducing front-end development lead times by 60%.",
    results: [
      "4.9/5 patient rating across 50,000+ app store reviews",
      "60% faster front-end feature rollouts",
      "Zero compliance issues across HIPAA audits"
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Figma Design Tokens", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "proj-3",
    title: "Apex Analytics - Real-Time E-Commerce Revenue BI",
    client: "Apex Retail Brands",
    industry: "E-Commerce",
    category: "Business Analytics",
    description: "High-density data visualization platform processing $120M+ in annual omnichannel merchandise volume.",
    longDescription: "A custom executive analytics dashboard providing real-time inventory forecasting, customer lifetime value modeling, and automated marketing campaign attribution.",
    challenge: "Data silos across Amazon, Shopify, and brick-and-mortar stores forced executives to rely on stale weekly spreadsheets.",
    solution: "Architected a unified pipeline streaming live order events to interactive Recharts & D3 visualizations with anomaly alerts.",
    results: [
      "$1.4M saved annually in overstock inventory costs",
      "Sub-second query response across 50M+ order rows",
      "Adopted by 100% of executive leadership"
    ],
    techStack: ["React", "D3.js", "Recharts", "TypeScript", "Node.js / Express"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "proj-4",
    title: "OneKana Visibility Engine - Organic Search & Technical SEO",
    client: "OneKana Global Brands",
    industry: "Digital Media & Retail",
    category: "SEO & Digital Visibility",
    description: "Automated SEO engine & technical schema architecture ranking B2B businesses on Google page 1.",
    longDescription: "Engineered an automated content taxonomy, programmatic keyword engine, and Google Business Profile sync that propelled client organic search impressions by 380%.",
    challenge: "Low organic search visibility forced reliance on expensive paid acquisition ads.",
    solution: "Built automated keyword discovery tools, structured schema markup generators, and multi-channel content pipelines.",
    results: [
      "380% increase in organic search traffic in 90 days",
      "#1 Google rank for 40+ high-intent buyer keywords",
      "45% reduction in customer acquisition cost (CAC)"
    ],
    techStack: ["React", "Node.js", "Gemini API", "SEO Schema", "Google Search API"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "proj-5",
    title: "EduPulse - Next-Gen Learning Platform & Workshop Portal",
    client: "EduPulse & Teen Challenge",
    industry: "EdTech",
    category: "Teen Tech Workshop",
    description: "Collaborative learning workspace with real-time code execution, interactive UI design sandboxes, and student project showcases.",
    longDescription: "Inspired by our internal 4-Day Teen Challenge curriculum, we built a commercial EdTech SaaS platform enabling high schoolers to build AI engineering and UI/UX projects hands-on.",
    challenge: "Traditional learning management systems lacked interactive design sandboxes and automated student project feedback.",
    solution: "Integrated browser-based Figma-like canvas tools with AI automated mentor prompts for real-time design feedback.",
    results: [
      "Over 45,000 active student projects submitted",
      "94% course completion rate vs 15% industry average",
      "Licensed by 30+ regional school districts"
    ],
    techStack: ["React", "Motion", "Tailwind CSS", "Gemini API", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-6",
    title: "LogiFlow - Autonomous Supply Chain Automation",
    client: "LogiFlow Freight Inc.",
    industry: "Logistics",
    category: "AI & Web Applications",
    description: "AI dispatch agent and route optimization system handling 4,000+ daily freight shipments.",
    longDescription: "Automated route dispatching and freight documentation scanning using computer vision and LLM parsing.",
    challenge: "Manual bill-of-lading data entry caused 4-hour delay bottlenecks at distribution hubs.",
    solution: "Deployed an intelligent document parsing pipeline that extracts shipment metadata in 1.2 seconds.",
    results: [
      "75% reduction in dispatch waiting time",
      "99.8% extraction accuracy on multi-lingual bills of lading",
      "$3.2M operational savings in Year 1"
    ],
    techStack: ["Node.js", "Express", "TypeScript", "Gemini Vision API", "React"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "SEO Strategy for Businesses & Automated Content Engines",
    subtitle: "Client Acquisition via Organic Tech Thought Leadership",
    category: "Growth",
    description: "Deploy automated SEO content engines that generate weekly high-ranking technical articles to attract high-value corporate clients.",
    deliverables: [
      "Keyword research & technical taxonomy setup",
      "Automated AI article generation pipeline",
      "Technical article editing & schema markups",
      "Monthly SEO ranking & lead conversion reports"
    ],
    iconName: "TrendingUp",
    estimatedTimeline: "Ongoing Monthly Partnership",
    idealFor: "B2B Tech companies seeking organic lead channels."
  },
  {
    id: "serv-2",
    title: "Data & Business Analytics Solutions",
    subtitle: "Turn Raw Data into Executive Decisions",
    category: "Analytics",
    description: "Build custom interactive dashboards, automated KPI reports, and real-time data pipelines tailored to your key growth metrics.",
    deliverables: [
      "Executive real-time BI dashboards",
      "Automated revenue, user churn & inventory analytics",
      "Custom D3 & Recharts data visualizers",
      "Data pipeline integration & warehouse setup"
    ],
    iconName: "BarChart3",
    estimatedTimeline: "3 - 8 Weeks",
    idealFor: "Businesses wanting actionable data insights without spreadsheet headaches."
  },
  {
    id: "serv-3",
    title: "UI/UX App Design",
    subtitle: "Human-Centered Design That Converts",
    category: "Design",
    description: "We craft crisp, high-contrast user interfaces with intuitive navigation flows, interactive prototypes, and scalable Figma design systems.",
    deliverables: [
      "Complete UI/UX design wireframes and high-fidelity mockups",
      "Interactive Figma prototypes for user testing",
      "Tailwind CSS token libraries & component documentation",
      "Accessibility & usability audit reports"
    ],
    iconName: "Layout",
    estimatedTimeline: "2 - 6 Weeks",
    idealFor: "Products needing modern design revamps or high conversion rates."
  },
  {
    id: "serv-4",
    title: "Customised Websites with AI Features & Automation",
    subtitle: "Scalable Full-Stack Web & Mobile Applications",
    category: "Development",
    description: "From concept to production, we engineer clean, high-performance web and mobile platforms with embedded AI features and automated workflows.",
    deliverables: [
      "Production-ready React / Node.js web and mobile apps",
      "Custom Gemini & LLM AI agent integration",
      "RESTful & Real-time API backend development",
      "Automated CI/CD pipelines and deployment"
    ],
    iconName: "Code2",
    estimatedTimeline: "4 - 12 Weeks",
    idealFor: "Startups & Enterprises building core digital products."
  },
  {
    id: "serv-5",
    title: "4-Day Holiday Teen Challenge Workshop",
    subtitle: "Empowering Junior & Senior High Schoolers in Tech",
    category: "Education",
    description: "Our signature seasonal holiday challenge held every April, August, and December. High schoolers master UI/UX, Data Analytics, and AI.",
    deliverables: [
      "4 Days of hands-on practical project building",
      "Mastery in Figma UI/UX, Data Analytics & AI Prompting",
      "Working portfolio project & pitch showcase",
      "Official Certificate of Completion & Industry Mentorship"
    ],
    iconName: "GraduationCap",
    estimatedTimeline: "Held Every April, August & Dec",
    idealFor: "Junior & Senior High Schoolers (Ages 12-18)."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Marcus Vance",
    clientRole: "Chief Technology Officer",
    company: "Aura Financial",
    industry: "FinTech",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Solved by Tech delivered our mobile app in under 10 weeks. Their mastery of both UI/UX elegance and deep AI integration gave us an unbeatable market edge. Our user engagement tripled within 30 days of launch.",
    impactMetric: "+240% Engagement Increase",
    projectType: "Mobile Banking & AI Assistant",
    verified: true
  },
  {
    id: "test-2",
    clientName: "Dr. Elena Rostova",
    clientRole: "VP of Digital Health",
    company: "OmniCare Network",
    industry: "Healthcare",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "The design system built by Solved by Tech unified our entire clinical product suite. Patients constantly compliment the intuitive appointment scheduling flow. Outstanding craftsmanship and attention to detail.",
    impactMetric: "60% Faster Feature Rollouts",
    projectType: "UI/UX Design System",
    verified: true
  },
  {
    id: "test-3",
    clientName: "David Chen",
    clientRole: "Head of Operations",
    company: "Apex Retail Brands",
    industry: "E-Commerce",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "We replaced 5 disconnected BI tools with a single custom analytics dashboard created by Solved by Tech. The real-time inventory alerts saved us over $1.4 Million in overstock costs in the first year alone.",
    impactMetric: "$1.4M Saved in Year 1",
    projectType: "Data & BI Analytics",
    verified: true
  },
  {
    id: "test-4",
    clientName: "Sarah Jenkins",
    clientRole: "Parent & PTA Director",
    company: "Oakridge Academy",
    industry: "Parent Community",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "My 15-year-old daughter attended the August 4-Day Teen Challenge Workshop. In just four days, she built a complete working prototype of a recycling mobile app with AI scanning! Solved by Tech opened her eyes to software engineering.",
    impactMetric: "Built Working AI App in 4 Days",
    projectType: "Teen Challenge Workshop",
    verified: true
  },
  {
    id: "test-5",
    clientName: "Tariq Al-Mansoor",
    clientRole: "Founder & CEO",
    company: "LogiFlow Freight",
    industry: "Logistics",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Clean, responsive code, thin tech typography aesthetics, and rock-solid engineering. Solved by Tech is our go-to technology partner for all complex AI developments.",
    impactMetric: "75% Reduction in Processing Time",
    projectType: "AI Workflow Automation",
    verified: true
  }
];

export const WORKSHOP_SESSIONS: WorkshopSession[] = [
  {
    id: "ws-apr-2026",
    month: "April",
    year: 2026,
    dates: "April 14 - April 17, 2026 (Spring Holiday)",
    status: "Open for Registration",
    spotsAvailable: 12,
    location: "Tech City Campus & Live Interactive Virtual Cohort"
  },
  {
    id: "ws-aug-2026",
    month: "August",
    year: 2026,
    dates: "August 11 - August 14, 2026 (Summer Break)",
    status: "Upcoming",
    spotsAvailable: 25,
    location: "Tech City Campus & Live Interactive Virtual Cohort"
  },
  {
    id: "ws-dec-2026",
    month: "December",
    year: 2026,
    dates: "December 15 - December 18, 2026 (Winter Holiday)",
    status: "Upcoming",
    spotsAvailable: 30,
    location: "Tech City Campus & Live Interactive Virtual Cohort"
  }
];

export const INITIAL_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    title: "How Agentic AI and Natural UI/UX Are Redefining Enterprise Apps in 2026",
    slug: "agentic-ai-natural-uiux-enterprise-apps-2026",
    excerpt: "Discover why coupling intelligent background agent workflows with minimal design systems yields 3.5x higher user retention.",
    category: "AI Development",
    tags: ["Agentic AI", "UI/UX", "Enterprise Architecture", "Product Design"],
    author: "Solved by Tech Editorial Team",
    publishedAt: "2026-03-22",
    readTime: "5 min read",
    keyTakeaways: [
      "Agentic AI replaces multi-step navigation with predictive user intent.",
      "Minimalist design tokens eliminate cognitive fatigue in high-data dashboards.",
      "Early enterprise adopters see a 40% reduction in customer support tickets."
    ],
    content: `## The Shift from Manual Interfaces to Intent-Driven Experiences

For decades, enterprise software required users to navigate complex nested menus, complete dense multi-field forms, and manually export CSV files for analysis.

In 2026, the benchmark for enterprise software has fundamentally changed. The winning applications combine **minimalist, thin-typography UI/UX** with **embedded agentic intelligence**.

### 1. Zero-Friction Navigation

Rather than forcing users to guess where features live, modern interfaces utilize predictive contextual prompts. For example, in our work with *Aura Financial*, transaction details auto-expand based on user spending patterns, reducing clicks by 70%.

### 2. Design Tokens That Scale

A robust design system built on atomic tokens ensures that whether a user opens the app on a smartphone or a 32-inch ultrawide display, spacing, typography ratios, and contrast levels remain optical perfection.

\`\`\`typescript
// Example: Token configuration for subtle tech glows
export const TECH_GLOW_THEME = {
  cardBorder: "1px solid rgba(59, 130, 246, 0.2)",
  mustardAccent: "linear-gradient(135deg, #fcd34d, #f97316)",
  dropShadow: "0 20px 40px -15px rgba(2, 6, 23, 0.7)"
};
\`\`\`

### 3. Client Acquisition Through Thought Leadership

Companies that document their engineering principles publicly create an organic magnet for high-value clients. High-ranking technical articles prove capability before the first discovery call is even booked.`
  },
  {
    id: "art-2",
    title: "Why High Schoolers Should Learn UI/UX, Business Analytics & AI Before College",
    slug: "why-high-schoolers-should-learn-uiux-analytics-ai",
    excerpt: "The 3 critical tech pillars every junior and senior high schooler needs to build real-world products and lead tomorrow's tech industry.",
    category: "Tech Education",
    tags: ["Teen Workshop", "UI/UX", "Data Analytics", "AI Education"],
    author: "Solved by Tech Youth Education Lab",
    publishedAt: "2026-03-15",
    readTime: "4 min read",
    keyTakeaways: [
      "High schoolers who master UI/UX prototyping build empathy and problem-solving skills early.",
      "Data analytics literacy transforms abstract math concepts into practical business insight.",
      "Prompt engineering and AI building give teenagers the superpowers to construct full apps independently."
    ],
    content: `## Equipping Teenagers with Real-World Engineering Superpowers

Every school holiday—in **April, August, and December**—our team at *Solved by Tech* hosts the **4-Day Teen Challenge Workshop**. We welcome junior and senior high school students into an intensive, hands-on technology sprint.

### The 3 Essential Pillars

1. **Practical UI/UX App Design**: Students learn wireframing, color contrast, typography scale, and create interactive Figma prototypes.
2. **Data & Business Analytics**: Teenagers analyze real e-commerce datasets, create charts, and learn how business decisions are made.
3. **Building with AI**: Students harness Gemini LLM APIs, prompt engineering, and agentic workflows to build functional web applications.

On **Day 4 (Demo Day)**, students present their working apps to parents and industry engineers, proving that age is no barrier to high-impact technology creation.`
  },
  {
    id: "art-3",
    title: "Building Real-Time Data Dashboards with D3 and Recharts for Scalable BI",
    slug: "building-realtime-data-dashboards-d3-recharts",
    excerpt: "A practical guide to rendering high-density data visualizations without causing browser frame drops or state bottlenecks.",
    category: "Business Analytics",
    tags: ["Data Visualization", "Recharts", "D3.js", "React", "TypeScript"],
    author: "Solved by Tech Analytics Division",
    publishedAt: "2026-03-08",
    readTime: "6 min read",
    keyTakeaways: [
      "Combine Recharts for responsive layout with D3 calculations for custom mathematical charts.",
      "Debounce window resize observers to maintain 60 FPS performance.",
      "Use dark slate gradients and mustard highlight colors for maximum chart readability."
    ],
    content: `## Data Visualization at Scale

When displaying over 500,000 transaction events in real time, rendering performance is paramount. Standard React state updates on every event will lock the main browser thread.

### Optimization Strategy

By isolating data aggregation to Web Workers or lightweight Node.js Express streaming endpoints, frontend charts receive aggregated telemetry buckets.

\`\`\`typescript
// Aggregating streaming event metrics
export function aggregateMetrics(events: EventRow[]): ChartData[] {
  return events.reduce((acc, curr) => {
    const bucket = curr.timestamp.substring(0, 13); // hourly bucket
    acc[bucket] = (acc[bucket] || 0) + curr.amount;
    return acc;
  }, {});
}
\`\`\`

This approach powered our executive dashboard for *Apex Retail Brands*, saving over $1.4M in overstock costs.`
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What core services does Solved by Tech provide?",
    answer: "We specialize in AI-Powered Web Applications, SEO & Technical Google Visibility, Website & Social Media Analytics, Business Data Consultancy & Executive BI Dashboards, UI/UX Design, and OneKana Digital Presence packages. Additionally, we run our quarterly 4-Day Holiday Teen Challenge Workshop for high schoolers.",
    category: "Services"
  },
  {
    question: "How long does a typical web application or SEO project take?",
    answer: "Project timelines vary by scope. Digital Presence setup or website performance audits typically take 1 to 2 weeks. Custom SEO engines and analytics dashboards average 3 to 6 weeks. Full-scale AI-powered web applications range from 4 to 10 weeks with sprint milestones.",
    category: "Timeline"
  },
  {
    question: "How do you help businesses leverage AI and Data Analytics?",
    answer: "We don't just add AI for hype—we deploy practical AI tools that automate repetitive tasks (like document parsing, customer support, or content creation) and build custom BI dashboards (Recharts/D3) that turn complex data into clear, confident executive decisions.",
    category: "AI & Data"
  },
  {
    question: "What is the 4-Day Holiday Teen Challenge Workshop?",
    answer: "It's an intensive 4-day hands-on technology sprint hosted every school holiday in April, August, and December for Junior and Senior High School students (ages 12-18). Students learn practical UI/UX Design in Figma, Data Analytics, and how to build applications with generative AI.",
    category: "Teen Workshop"
  },
  {
    question: "How are your service packages priced?",
    answer: "We offer structured growth packages (Digital Presence Starter, Business Growth Package, and AI Business Transformation) as well as bespoke custom solutions. We provide clear upfront milestone quotes with zero hidden fees.",
    category: "Pricing"
  },
  {
    question: "How do I get started with a consultation or quote?",
    answer: "You can fill out our Contact form right on the homepage, click 'Book a Consultation', or reach out directly via WhatsApp at 0790281128 (+254 790 281 128) or email hello@solvedbytech.com. We usually respond within 2-4 business hours.",
    category: "Getting Started"
  }
];

