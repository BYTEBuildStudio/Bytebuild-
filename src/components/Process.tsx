import React from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Map, 
  Layers, 
  Terminal, 
  BadgeCheck, 
  Rocket, 
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      description: "We deep-dive into your business model, target audiences, and primary digital competitors. We map out high-value conversion pathways and outline a perfect feature list.",
      icon: Eye,
      color: "from-sky-500 to-cyan-500",
      glowColor: "rgba(14,165,233,0.3)"
    },
    {
      num: "02",
      title: "Strategy & Wireframing",
      description: "We compile an interactive navigation roadmap, planning user actions and content hierarchy. Every button placement, marketing copy, and page flow is strategized for client acquisition.",
      icon: Map,
      color: "from-blue-500 to-indigo-500",
      glowColor: "rgba(59,130,246,0.3)"
    },
    {
      num: "03",
      title: "Bespoke Premium Design",
      description: "No generic templates. We construct a customized, futuristic design system complete with luxurious color tones, refined typography pairings, and micro-interactions.",
      icon: Layers,
      color: "from-indigo-500 to-purple-500",
      glowColor: "rgba(99,102,241,0.3)"
    },
    {
      num: "04",
      title: "Blazing-Fast Engineering",
      description: "We translate the approved design system into optimized code. Utilizing React, Tailwind CSS, and lightweight libraries, we secure exceptional core performance and safety.",
      icon: Terminal,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168,85,247,0.3)"
    },
    {
      num: "05",
      title: "Rigorous QA & Testing",
      description: "We review the applet on over 15 different physical dimensions (browsers, responsive widths, and form triggers). We tune Core Web Vitals to lock in scores of 95+.",
      icon: BadgeCheck,
      color: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16,185,129,0.3)"
    },
    {
      num: "06",
      title: "Cinematic Launch",
      description: "We link domain registrations, configure server-side caches, deploy to fast Content Delivery Networks (CDNs), and make your brand accessible globally with a live ceremony.",
      icon: Rocket,
      color: "from-amber-500 to-orange-500",
      glowColor: "rgba(245,158,11,0.3)"
    },
    {
      num: "07",
      title: "Compounding Growth & Support",
      description: "We stay in your corner. Daily cloud backups, real-time uptime monitoring, fast structural changes, and marketing optimizations are handled in our monthly guard.",
      icon: LifeBuoy,
      color: "from-rose-500 to-red-500",
      glowColor: "rgba(244,63,94,0.3)"
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 relative bg-[#050505] overflow-hidden"
    >
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/3 to-purple-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="process-header">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            OUR STRATEGIC BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
            How We Translate Your Vision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Into a High-Converting Engine
            </span>
          </h2>
          <p className="text-gray-400 font-sans font-light text-base max-w-xl mx-auto">
            From initial discovery to post-launch compounding, our process is designed to be fully transparent, incredibly structured, and entirely stress-free.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-white/5 max-w-4xl mx-auto text-left pl-6 md:pl-10 space-y-12" id="process-timeline">
          
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div 
                key={idx}
                className="relative group"
                id={`process-step-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Glowing step node point */}
                <div 
                  className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-neutral-950 border-2 border-white/5 flex items-center justify-center text-[10px] md:text-xs font-mono font-bold text-gray-300 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  style={{ 
                    boxShadow: `0 0 15px ${step.glowColor}`,
                  }}
                >
                  <span className="relative z-10 group-hover:scale-110 transition-transform">{step.num}</span>
                  {/* Hover background slide */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* Grid or bento layout for each step */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 group-hover:bg-[#111]/60 group-hover:border-white/10 transition-all duration-300 shadow-xl flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
                  
                  {/* Micro gradient background indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${step.color}`} />

                  {/* Icon Panel */}
                  <div className="p-3 rounded-xl bg-neutral-950 border border-white/5 text-gray-300 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <IconComp className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>

                  {/* Content Panel */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-bold text-white tracking-wide flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                      {step.title}
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
