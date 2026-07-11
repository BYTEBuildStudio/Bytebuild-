import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mockup } from './Mockups';
import { ExternalLink, Info, CheckCircle, Smartphone, Flame, ArrowRight, X } from 'lucide-react';

interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  client: string;
  businessGoal: string;
  impact: string;
  features: string[];
  duration: string;
}

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'restaurant' | 'gym' | 'finance' | 'coaching'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectDetails | null>(null);

  const projects = [
    {
      id: "fitfuel",
      title: "FitFuel Nutrition",
      category: "gym",
      categoryLabel: "Gym & Nutrition Website",
      description: "A modern, high-intensity response platform constructed for a nutrition brand, featuring customized supplement catalog displays, fitness nutrition plans, an embedded BMI interactive calculator, and full mobile optimization.",
      techStack: ["React", "Tailwind CSS", "Motion", "Vite", "TypeScript"],
      liveDemoUrl: "https://fit-fuel-nutrition--maliv7511.replit.app/",
      accentColor: "border-orange-500/20 hover:border-orange-500/40 shadow-orange-500/5",
      badgeColor: "bg-orange-600/10 text-orange-500 border-orange-500/20"
    },
    {
      id: "gharkharch",
      title: "GharKharch Ledger",
      category: "finance",
      categoryLabel: "Personal Finance & Expense Manager",
      description: "A fully local budgeting web application built to help households log income, record multi-category expenditures, review ledger logs, and study budgets through real-time chart widgets.",
      techStack: ["React", "Tailwind CSS", "Lucide React", "Vite", "TypeScript"],
      liveDemoUrl: "https://gharkharchapp.netlify.app/",
      accentColor: "border-teal-500/20 hover:border-teal-500/40 shadow-teal-500/5",
      badgeColor: "bg-teal-600/10 text-teal-500 border-teal-500/20"
    },
    {
      id: "khubkhao",
      title: "KhubKhao Fine Dining",
      category: "restaurant",
      categoryLabel: "Restaurant Website & QR Menu",
      description: "A luxurious digital dining companion including dynamic organic banners, full food menu categories, tableside QR code mockups, and client table reservation modals that streamline booking queues.",
      techStack: ["React", "Vite", "Tailwind CSS", "Motion", "TypeScript"],
      liveDemoUrl: "https://premium-indian-resta-ba1f.bolt.host",
      accentColor: "border-amber-500/20 hover:border-amber-500/40 shadow-amber-500/5",
      badgeColor: "bg-amber-600/10 text-amber-500 border-amber-500/20"
    },
    {
      id: "eduflow",
      title: "EduFlow Academy",
      category: "coaching",
      categoryLabel: "Coaching Institute Website",
      description: "A sophisticated coaching portal designed to centralize student registrations, batch calendars, fee statistics, and feature an intelligent, context-aware AI Tutor Companion widget for homework questions.",
      techStack: ["React", "Tailwind CSS", "Vite", "Gemini AI API", "TypeScript"],
      liveDemoUrl: "https://lovable.dev/preview/25Jfm2svowRwtCsgSyyzvuEuQgKn2Rnj",
      accentColor: "border-indigo-500/20 hover:border-indigo-500/40 shadow-indigo-500/5",
      badgeColor: "bg-indigo-600/10 text-indigo-500 border-indigo-500/20"
    }
  ];

  const caseStudies: Record<string, ProjectDetails> = {
    fitfuel: {
      id: "fitfuel",
      title: "FitFuel Nutrition Platform",
      category: "Gym & Nutrition",
      client: "FitFuel Co. (Gurugram)",
      businessGoal: "Transform local offline gym supplement sales into an authoritative, digital-first subscription channel.",
      impact: "Captured 300+ subscriptions in the first 14 days and decreased sales cycle bounce rates by 45%.",
      features: [
        "Interactive BMI Calculator driving personalized protein product suggestions.",
        "Fully responsive 3D supplement hover catalog with premium visual tags.",
        "High-contrast dark-mode theme optimizing screen readability on gym floors.",
        "Smooth page layout transitions and lazy-loaded assets ensuring fast performance."
      ],
      duration: "10 Days"
    },
    gharkharch: {
      id: "gharkharch",
      title: "GharKharch Dashboard",
      category: "Personal Finance / Webapp",
      client: "GharKharch Open Ledger Initiative",
      businessGoal: "Simplify household expense logging by creating a zero-friction dashboard optimized for immediate ledger entries.",
      impact: "Enables users to input monthly expense sheets in under 3 minutes with zero network delays.",
      features: [
        "Lightweight local state storage maintaining privacy.",
        "Category-wise expenditures summary cards and dynamically calculated balances.",
        "Instant ledger logs with row deletions.",
        "Perfect mobile optimization allowing ledger updates on grocery lines."
      ],
      duration: "7 Days"
    },
    khubkhao: {
      id: "khubkhao",
      title: "KhubKhao Digital Menu",
      category: "Restaurant & Contactless QR Menu",
      client: "KhubKhao fine dining restaurant",
      businessGoal: "Modernize tableside menu discovery and eliminate physical menu reprint costs when changing prices.",
      impact: "Increased average order value by 22% through mouthwatering high-res food graphics and reduced tableside bottlenecks.",
      features: [
        "Fully digital contactless QR menu scanning matching tableside standees.",
        "Veg/Non-Veg tag selectors with interactive menu additions.",
        "Tableside booking and table reservation forms with SMS simulation.",
        "Organic warm colors increasing appetite stimulation and luxury vibe."
      ],
      duration: "12 Days"
    },
    eduflow: {
      id: "eduflow",
      title: "EduFlow Smart Coaching Portal",
      category: "Coaching Institute Portal",
      client: "EduFlow Tutorials (Jaipur)",
      businessGoal: "Help institute owners automate students inquiries and provide homework help outside standard hours.",
      impact: "Boosted admission inquiry signups by 60% and automated homework queries using intelligent student agents.",
      features: [
        "Built-in AI study companion responding to specific curriculum queries.",
        "Live batches scheduler tracker with automated tutor tags.",
        "Student fee graphs, registration charts, and active progress counters.",
        "Clean, responsive coaching branding maximizing parents' trust."
      ],
      duration: "14 Days"
    }
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section 
      id="portfolio" 
      className="py-24 relative bg-[#050505] overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="portfolio-header">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block">
              OUR PREMIUM PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
              Real Work. Real Conversions. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Explore Our Selected Builds
              </span>
            </h2>
            <p className="text-gray-400 font-sans font-light text-base">
              Every system we engineer is tailored to a specific business goal. Click on "View Details" to see the case studies or test the interactive mockups.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2 shrink-0 bg-white/5 border border-white/5 p-1.5 rounded-xl backdrop-blur-md" id="portfolio-filter-controls">
            {(['all', 'restaurant', 'gym', 'finance', 'coaching'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider font-semibold transition-all uppercase cursor-pointer ${
                  filter === cat 
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Show All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="p-6 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 shadow-2xl relative flex flex-col justify-between group transition-all duration-300 hover:border-white/10"
                id={`portfolio-card-${proj.id}`}
              >
                {/* Visual Canvas panel (Interactive Mockup inside) */}
                <div className="w-full h-72 rounded-xl overflow-hidden relative border border-white/5 mb-6 bg-[#050505] group-hover:scale-[1.01] transition-transform duration-300">
                  <Mockup type={proj.id as any} interactive={true} />
                </div>

                {/* Info Text panel */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-blue-400">
                      {proj.categoryLabel}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">100% RESPONSIVE</span>
                  </div>

                  <h3 className="text-xl font-display font-black text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech Stack list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-neutral-950 border border-white/5 text-[10px] font-mono text-gray-400 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="flex gap-3 items-center mt-6 pt-4 border-t border-white/5">
                  <a 
                    href={proj.liveDemoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors active:scale-95 cursor-pointer"
                  >
                    Open Live Demo <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>
                  <button 
                    onClick={() => setSelectedCaseStudy(caseStudies[proj.id])}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-bold py-2.5 px-4 rounded-xl text-xs transition-colors active:scale-95 cursor-pointer"
                  >
                    View Case Study <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            id="case-study-modal-container"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0a0a0a] border border-white/10 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative p-6 md:p-8"
              id="case-study-modal"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Case study content */}
              <div className="text-left space-y-6">
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    {selectedCaseStudy.category} • CASE STUDY
                  </span>
                  <h3 className="text-2xl font-display font-black text-white">
                    {selectedCaseStudy.title}
                  </h3>
                </div>

                {/* Metadata row */}
                <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/5 p-4 rounded-xl text-xs font-sans text-gray-400">
                  <div>
                    <span className="text-gray-500 block text-[10px] font-mono tracking-wider uppercase">CLIENT BRAND</span>
                    <strong className="text-gray-200">{selectedCaseStudy.client}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px] font-mono tracking-wider uppercase">LAUNCH DURATION</span>
                    <strong className="text-gray-200">{selectedCaseStudy.duration}</strong>
                  </div>
                </div>

                {/* Business Goal Block */}
                <div className="space-y-2">
                  <h4 className="text-sm font-display font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <Flame className="w-4 h-4 text-orange-500" /> Business Objective
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                    {selectedCaseStudy.businessGoal}
                  </p>
                </div>

                {/* solved outcomes features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-display font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Solved Key Features
                  </h4>
                  <div className="space-y-2 text-xs text-gray-300 font-sans">
                    {selectedCaseStudy.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <span className="text-emerald-400 shrink-0 mt-0.5">✔</span>
                        <p>{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Result Block */}
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">MEASURED IMPACT OUTCOME</span>
                  <p className="text-sm font-sans font-bold text-white">
                    {selectedCaseStudy.impact}
                  </p>
                </div>

                {/* Close action */}
                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedCaseStudy(null)}
                    className="w-full bg-white text-black font-bold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer hover:bg-gray-200 uppercase tracking-wider"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
