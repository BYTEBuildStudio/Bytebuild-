import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Flame, 
  Search, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Cpu, 
  HeartHandshake,
  Workflow
} from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const benefits = [
    {
      title: "Premium Modern Design",
      description: "Visual aesthetics that compete with multi-million dollar tech startups. We craft custom color schemes, micro-animations, and typographic structures specific to your premium brand.",
      icon: Palette,
      color: "text-sky-400",
      bg: "bg-sky-500/5 border-sky-500/10"
    },
    {
      title: "AI-Assisted Fast Turnarounds",
      description: "We utilize advanced AI in our engineering workflows (like automated code testing and boilerplate drafting) to deliver premium products in days rather than months, keeping your costs down.",
      icon: Flame,
      color: "text-orange-400",
      bg: "bg-orange-500/5 border-orange-500/10"
    },
    {
      title: "Organic SEO Blueprint",
      description: "Every page is pre-structured with schema semantic tags, meta profiles, fast layouts, and clean URLs so that Google crawlers immediately index and rank your pages above local competitors.",
      icon: Search,
      color: "text-teal-400",
      bg: "bg-teal-500/5 border-teal-500/10"
    },
    {
      title: "True Native Responsiveness",
      description: "Every card, slider, layout, and image changes fluidly based on screen widths. Perfect pixel scaling on iPhones, Androids, standard laptops, tablets, and ultra-wide screens.",
      icon: Smartphone,
      color: "text-indigo-400",
      bg: "bg-indigo-500/5 border-indigo-500/10"
    },
    {
      title: "Lighthouse Speed (Score 95+)",
      description: "Static builds, lazy-loaded visual files, and minimal packages ensure that your webpage registers on visitor mobile browsers instantly, preventing bounces and securing leads.",
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/5 border-yellow-500/10"
    },
    {
      title: "Scalable Solutions",
      description: "Whether you want to add a booking platform, custom customer forms, blog layouts, or full product catalogues in the future, our architecture expands gracefully to support your growth.",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/5 border-emerald-500/10"
    },
    {
      title: "Clean Modern Architecture",
      description: "We build on modular, robust frameworks with strict type safety. That means no spaghetti code, no broken dependencies, and easy updates whenever you request adjustments.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/5 border-purple-500/10"
    },
    {
      title: "Reliable Support & Warranty",
      description: "We remain by your side even after your launch. Daily cloud backups, fast text support, and immediate patch fixes are always included on our watch.",
      icon: HeartHandshake,
      color: "text-rose-400",
      bg: "bg-rose-500/5 border-rose-500/10"
    },
    {
      title: "Business-Focused Workflows",
      description: "We don't get lost in tech jargon. We speak the language of sales, conversions, and client acquisitions. Every feature we construct must directly benefit your bottom line.",
      icon: Workflow,
      color: "text-blue-400",
      bg: "bg-blue-500/5 border-blue-500/10"
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-24 relative bg-[#050505] overflow-hidden"
    >
      {/* Absolute backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="why-choose-header">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            THE BYTEBUILD STANDARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
            Designed to Convert. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Built to Deliver Results.
            </span>
          </h2>
          <p className="text-gray-400 font-sans font-light text-base max-w-xl mx-auto">
            We merge cutting-edge modern engineering with strict consumer psychology. Here is why high-growth business owners chose ByteBuild.
          </p>
        </div>

        {/* Grid Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-choose-grid">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 shadow-xl relative overflow-hidden group hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 text-left"
                id={`why-choose-card-${idx}`}
                whileHover={{ y: -5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Decorative Hover Ring Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-4">
                  {/* Icon Shield */}
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-neutral-950 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-5 h-5 ${benefit.color}`} />
                  </div>

                  {/* Benefit Texts */}
                  <div className="space-y-2">
                    <h3 className="text-base font-display font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {benefit.description}
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
