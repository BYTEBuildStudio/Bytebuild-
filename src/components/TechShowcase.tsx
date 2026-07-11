import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Cpu, Layers, Terminal } from 'lucide-react';

export const TechShowcase: React.FC = () => {
  const techs = [
    {
      name: "React 19",
      role: "Frontend UI Engine",
      description: "Declarative state-driven functional components ensuring blazing-fast screen re-renders.",
      color: "text-[#61dafb]",
      glowColor: "rgba(97,218,251,0.25)",
      logoSvg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: "Next.js",
      role: "Enterprise Meta-Framework",
      description: "Server-side rendering (SSR), static site production (SSG), and edge routing logic.",
      color: "text-white",
      glowColor: "rgba(255,255,255,0.15)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none"/>
          <path d="M50 25 L50 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
          <path d="M50 45 L70 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
          <path d="M70 25 L70 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS v4",
      role: "Atomic Utility Styling",
      description: "Speedy compilation, native utility tokens, fluid container dimensions, and clean styling rules.",
      color: "text-[#38bdf8]",
      glowColor: "rgba(56,189,248,0.25)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
          <path d="M15 50 C25 35, 45 35, 55 50 C45 65, 25 65, 15 50 Z" stroke="currentColor" strokeWidth="6"/>
          <path d="M45 50 C55 35, 75 35, 85 50 C75 65, 55 65, 45 50 Z" stroke="currentColor" strokeWidth="6"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      role: "Static Type Security",
      description: "Locks in clean interfaces, solid data structures, and catches structural errors in dev.",
      color: "text-[#3178c6]",
      glowColor: "rgba(49,120,198,0.25)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="currentColor">
          <rect width="100" height="100" rx="10" fill="#3178c6"/>
          <text x="50" y="80" fontSize="60" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">TS</text>
        </svg>
      )
    },
    {
      name: "Supabase",
      role: "Serverless Database Core",
      description: "Robust open-source relational databases, user accounts setup, and secure tables storage.",
      color: "text-[#3ecf8e]",
      glowColor: "rgba(62,207,142,0.25)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="currentColor">
          <path d="M50 10 L85 35 L70 50 L85 50 L50 90 L15 65 L30 50 L15 50 Z" />
        </svg>
      )
    },
    {
      name: "Framer Motion",
      role: "Micro Interaction Animations",
      description: "Produces physical responsive animations, fluid layout morphing, and staggered scrolls.",
      color: "text-[#ff00a0]",
      glowColor: "rgba(255,0,160,0.25)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="currentColor">
          <path d="M15 15 H85 L50 50 Z" />
          <path d="M15 50 H85 L50 85 Z" />
        </svg>
      )
    },
    {
      name: "Vercel / Cloud CDN",
      role: "Global Edge Hosting",
      description: "Sub-second cold-starts, globally replicated web assets, and continuous code deployment integrations.",
      color: "text-white",
      glowColor: "rgba(255,255,255,0.15)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="currentColor">
          <path d="M50 15 L90 85 H10 Z" />
        </svg>
      )
    },
    {
      name: "GitHub Ecosystem",
      role: "Version Control & Automation",
      description: "Strict secure source repositories, testing loops automations, and absolute pipeline transparency.",
      color: "text-[#f0f6fc]",
      glowColor: "rgba(240,246,252,0.15)",
      logoSvg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="currentColor">
          <path d="M50 5 C25 5 5 25 5 50 C5 70 18 87 36 93 C38 93.5 39 92.5 39 91 V86 C26 89 24 80 24 80 C22 75 19 74 19 74 C15 71 19 71 19 71 C24 71.5 26 76.5 26 76.5 C30 83.5 37 81.5 40 80 C40 77 41.5 75 43 74 C33 73 22 69 22 51 C22 46 24 42 27 39 C26.5 38 25 33 27.5 27 C27.5 27 31 26 39 31.5 C42 30.5 46 30 50 30 C54 30 58 30.5 61 31.5 C69 26 72.5 27 72.5 27 C75 33 73.5 38 73 39 C76 42 78 46 78 51 C78 69 67 73 57 74 C59 75.5 61 78.5 61 83 V91 C61 92.5 62 93.5 64 93 C82 87 95 70 95 50 C95 25 75 5 50 5 Z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="tech-section" 
      className="py-24 relative bg-[#050505] overflow-hidden border-b border-white/5"
    >
      {/* Background radial overlay */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="tech-header">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            OUR PREFERRED TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
            We Build with Modern, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Future-Proof Technologies
            </span>
          </h2>
          <p className="text-gray-400 font-sans font-light text-base max-w-xl mx-auto">
            No WordPress sluggishness. We construct highly secure, lightning-fast statically compiled web applications using elite enterprise standards.
          </p>
        </div>

        {/* Technologies grid display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="tech-cards-grid">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 shadow-xl relative overflow-hidden group hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 text-left"
              id={`tech-card-${idx}`}
              whileHover={{ y: -4 }}
            >
              {/* Glowing Background Dot */}
              <div 
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: tech.glowColor }}
              />

              <div className="space-y-4 relative z-10">
                {/* Logo Shield */}
                <div className={`p-3.5 rounded-xl bg-neutral-950 border border-white/5 inline-block ${tech.color} group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  {tech.logoSvg}
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-black text-white group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">
                    {tech.role}
                  </span>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed pt-1">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
