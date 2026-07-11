import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  QrCode, 
  ShoppingBag, 
  Layers, 
  GraduationCap, 
  Cpu, 
  Search, 
  Settings2,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Business Websites",
      description: "Establish strong authority and build client trust with fully bespoke corporate platforms designed to capture high-value leads and present your services beautifully.",
      value: "Convert random visitors into loyal high-paying clients with engineered trust indicators.",
      icon: Globe,
      gradient: "from-sky-500/20 to-blue-600/5 hover:border-sky-500/50",
      accentColor: "text-sky-400"
    },
    {
      title: "Digital QR Menus",
      description: "Replace legacy printed menus with elegant QR code tableside digital menus that are easy to update, eliminate reprint costs, and streamline order flow.",
      value: "Boost average order value by 20% with beautiful visual dish showcasing and instant scanning.",
      icon: QrCode,
      gradient: "from-amber-500/20 to-yellow-600/5 hover:border-amber-500/50",
      accentColor: "text-amber-400"
    },
    {
      title: "E-commerce Websites",
      description: "Launch highly optimized online retail stores with blazing-fast product load times, frictionless checkout steps, secure payment setups, and simple inventory portals.",
      value: "Recover abandoned carts and scale your sales 24/7 with a frictionless shop architecture.",
      icon: ShoppingBag,
      gradient: "from-emerald-500/20 to-teal-600/5 hover:border-emerald-500/50",
      accentColor: "text-emerald-400"
    },
    {
      title: "Landing Pages",
      description: "Laser-focused single page campaigns built specifically to convert cold traffic from paid ads (Google, Facebook, Instagram) into immediate business registrations.",
      value: "Double your ad campaign ROI by removing distractions and guiding users to a single CTA.",
      icon: Layers,
      gradient: "from-purple-500/20 to-pink-600/5 hover:border-purple-500/50",
      accentColor: "text-purple-400"
    },
    {
      title: "Coaching Websites",
      description: "Modern websites designed for coaching institutes featuring course showcases, admissions inquiry structures, class schedule managers, and dynamic branding.",
      value: "Increase student enrollments and manage inquiries from a unified digital student desk.",
      icon: GraduationCap,
      gradient: "from-indigo-500/20 to-blue-600/5 hover:border-indigo-500/50",
      accentColor: "text-indigo-400"
    },
    {
      title: "AI Integrations",
      description: "Deploy custom intelligent assistants, 24/7 smart customer support agents, automated booking workflows, and smarter logic within your web assets.",
      value: "Cut administrative overhead and answer prospects' questions instantly without hiring more staff.",
      icon: Cpu,
      gradient: "from-violet-500/20 to-purple-600/5 hover:border-violet-500/50",
      accentColor: "text-violet-400"
    },
    {
      title: "SEO Optimization",
      description: "Deep structured SEO including high-intent local keywords, Schema.org metadata, Sitemap builds, and Core Web Vitals speed tuneups to rise to Page 1 of Google search.",
      value: "Stop paying for every single click. Build a compounding asset of free organic inbound traffic.",
      icon: Search,
      gradient: "from-blue-500/20 to-cyan-600/5 hover:border-blue-500/50",
      accentColor: "text-blue-400"
    },
    {
      title: "Website Maintenance",
      description: "24/7 active uptime monitoring, secure daily clouds backups, ongoing software patches, speed updates, and unlimited minor changes as your business adapts.",
      value: "Focus entirely on running your business while an elite engineering team keeps your site bulletproof.",
      icon: Settings2,
      gradient: "from-rose-500/20 to-red-600/5 hover:border-rose-500/50",
      accentColor: "text-rose-400"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 relative bg-[#050505] overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            WHAT WE DO BEST
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
            High-Performance Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Engineered for Business Growth
            </span>
          </h2>
          <p className="text-gray-400 font-sans font-light text-base max-w-2xl mx-auto">
            We don't just build pages. We build digital assets that act as 24/7 client-acquisition machines for local brands, restaurants, gyms, and coaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {services.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <motion.div
                key={idx}
                className="relative flex flex-col justify-between p-6 bg-[#0a0a0a]/60 rounded-2xl border border-white/5 shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden hover:bg-neutral-900/60"
                id={`service-card-${idx}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                <div className="space-y-4">
                  {/* Service Icon with Glow */}
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-neutral-950 border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${svc.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-display font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Business Value Highlight Block */}
                <div className="mt-6 pt-4 border-t border-white/5 text-left space-y-2">
                  <div className="flex items-center gap-1 text-[10px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
                    <TrendingUp className="w-3.5 h-3.5" /> IMPACT VALUE
                  </div>
                  <p className="text-[11px] font-sans font-medium text-gray-300 leading-snug italic group-hover:text-white transition-colors">
                    "{svc.value}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA Banner inside Services */}
        <div className="mt-16 bg-black/40 border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden" id="services-global-cta">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight text-white">
              Not sure which digital asset fits your roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-lg mx-auto">
              Schedule a completely free, 15-minute Strategy Consultation. We'll analyze your current setup and suggest high-conversion improvements.
            </p>
            <div className="pt-2">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 group text-xs tracking-wider font-mono uppercase hover:bg-gray-200"
              >
                BOOK FREE CONSULTATION <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
