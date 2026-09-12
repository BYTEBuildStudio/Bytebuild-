import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Globe, 
  Cpu, 
  ShoppingBag, 
  Layers, 
  ExternalLink, 
  Sparkles, 
  Zap, 
  Target, 
  Terminal, 
  TrendingUp, 
  RefreshCw,
  Eye,
  Map,
  Palette,
  Hammer,
  Rocket,
  Wrench,
  Utensils,
  Dumbbell,
  GraduationCap,
  Store,
  Briefcase
} from 'lucide-react';
import { HeroVisual } from '../components/home/HeroVisual';
import { PROJECTS } from '../data/projectsData';
import { CTASection } from '../components/common/CTASection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  const whatWeBuild = [
    {
      number: "01",
      title: "Web Experiences",
      description: "Fast, bespoke websites engineered for brand authority, high conversion rates, and seamless mobile responsiveness.",
      icon: Globe,
      path: "/services/web-development",
      accent: "from-blue-500/20 to-indigo-500/5 hover:border-blue-500/40 text-blue-400"
    },
    {
      number: "02",
      title: "Web Applications",
      description: "State-driven client portals, interactive financial calculators, dashboards, and internal software tools built with modern React.",
      icon: Layers,
      path: "/services/web-development",
      accent: "from-teal-500/20 to-emerald-500/5 hover:border-teal-500/40 text-teal-400"
    },
    {
      number: "03",
      title: "AI & Automation",
      description: "Contextual customer assistants, automated lead qualification pipelines, and intelligent chatbots connected directly to WhatsApp.",
      icon: Cpu,
      path: "/services/ai-automation",
      accent: "from-purple-500/20 to-pink-500/5 hover:border-purple-500/40 text-purple-400"
    },
    {
      number: "04",
      title: "E-commerce & QR Menus",
      description: "Frictionless digital ordering, contactless tableside QR dining menus, and high-conversion retail shopping storefronts.",
      icon: ShoppingBag,
      path: "/services/ecommerce",
      accent: "from-amber-500/20 to-orange-500/5 hover:border-amber-500/40 text-amber-400"
    }
  ];

  const whyByteBuild = [
    {
      num: "01",
      title: "Performance",
      description: "Fast, responsive digital experiences. Every build is benchmarked to hit 95+ Core Web Vitals, ensuring zero visitor drop-off from sluggish load times.",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      num: "02",
      title: "Business-first thinking",
      description: "Technology designed around real business goals. We don't just write code; we design user pathways that turn casual visitors into paying customers.",
      icon: Target,
      color: "text-purple-400"
    },
    {
      num: "03",
      title: "Modern engineering",
      description: "Modern, scalable development practices. Clean TypeScript, React, modular component architectures, and secure serverless backend logic.",
      icon: Terminal,
      color: "text-emerald-400"
    },
    {
      num: "04",
      title: "Conversion-focused design",
      description: "Interfaces designed to guide users toward action. Clean typography hierarchy, clear call-to-actions, and effortless interactive micro-states.",
      icon: TrendingUp,
      color: "text-amber-400"
    },
    {
      num: "05",
      title: "Built to evolve",
      description: "Solutions that can grow with the business. Modular codebases designed for easy additions, from future booking modules to advanced payment gateways.",
      icon: RefreshCw,
      color: "text-cyan-400"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      desc: "Understand your business model, customer pain points, and specific goals. We identify exact conversion objectives before writing a line of code.",
      icon: Eye
    },
    {
      step: "02",
      title: "Plan",
      desc: "Map the information architecture, user journeys, and feature priorities. We define a lean, high-impact scope and timeline.",
      icon: Map
    },
    {
      step: "03",
      title: "Design",
      desc: "Craft a modern, distinctive interface system with clear typography hierarchy, generous spacing, and purposeful visual polish.",
      icon: Palette
    },
    {
      step: "04",
      title: "Build",
      desc: "Engineer with clean React, TypeScript, and modern styling. Lightweight, accessible, and optimized for speed on all devices.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Launch",
      desc: "Thorough testing on multiple screen sizes and mobile connections, followed by deployment to a high-speed global Content Delivery Network.",
      icon: Rocket
    },
    {
      step: "06",
      title: "Improve",
      desc: "Monitor performance and real user interactions. Provide continuous updates, enhancements, and ongoing technical support.",
      icon: Wrench
    }
  ];

  const sectors = [
    { name: "Restaurants & Cafes", icon: Utensils },
    { name: "Gyms & Nutrition Brands", icon: Dumbbell },
    { name: "Coaching & Academies", icon: GraduationCap },
    { name: "E-commerce & Retail", icon: Store },
    { name: "Professional Services", icon: Briefcase },
  ];

  return (
    <div className="bg-[#05070c] text-white overflow-hidden">
      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" id="home-hero">
        {/* Subtle ambient lighting */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Text & CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-blue-400">
                  DIGITAL TECHNOLOGY AGENCY
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white"
              >
                Digital experiences<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  built for growth.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-xl"
              >
                We engineer ultra-fast websites, custom web applications, and intelligent systems for growing businesses and modern brands. High-converting digital assets built for speed, reliability, and real business results.
              </motion.p>

              {/* Primary & Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                  id="hero-primary-cta"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/work')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-gray-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] active:scale-95 transition-all cursor-pointer"
                  id="hero-secondary-cta"
                >
                  <span>View Our Work</span>
                </button>
              </motion.div>

              {/* Quick Tagline */}
              <div className="pt-4 flex items-center gap-6 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Fast Turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> 95+ Core Web Vitals
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> 100% Code Ownership
                </span>
              </div>
            </div>

            {/* Right: Layered Floating Windows Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: TRUST & CREDIBILITY SECTION
      ========================================================================= */}
      <section className="py-12 bg-[#07090e] border-y border-white/[0.06]" id="credibility-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-8">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 font-medium">
              BUILT FOR AMBITIOUS BUSINESSES
            </p>
            <h3 className="text-lg sm:text-xl font-display font-semibold text-gray-200">
              From local businesses to emerging brands.
            </h3>
          </div>

          {/* Sector badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 transition-all text-sm font-medium text-gray-300 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{sec.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE BUILD (4 Interactive Cards)
      ========================================================================= */}
      <section className="py-24 relative" id="what-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-4 max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              What We Build
            </h2>
            <p className="text-gray-400 font-sans font-light text-base leading-relaxed">
              We design and engineer complete digital products tailored specifically to how your business operates and grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => onNavigate(item.path)}
                  className={`p-8 rounded-2xl bg-gradient-to-b ${item.accent} border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-gray-400 tracking-wider">
                      {item.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300 group-hover:text-white transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY BYTEBUILD (5 Strong Reasons)
      ========================================================================= */}
      <section className="py-24 bg-[#07090e] border-y border-white/[0.06]" id="why-bytebuild">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-4 max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-purple-400">
              <Zap className="w-3.5 h-3.5" />
              <span>THE BYTEBUILD STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Why ByteBuild
            </h2>
            <p className="text-gray-400 font-sans font-light text-base leading-relaxed">
              We replace sluggish templates and bloated page builders with focused digital engineering designed to achieve business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyByteBuild.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 transition-all space-y-4 text-left shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gray-400">
                      {r.num}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-white/5 ${r.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white">
                    {r.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {r.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SELECTED WORK (Real Existing Projects Showcase)
      ========================================================================= */}
      <section className="py-24 relative" id="selected-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400">
                <Target className="w-3.5 h-3.5" />
                <span>CASE STUDIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                Selected Work
              </h2>
              <p className="text-gray-400 font-sans font-light text-base leading-relaxed">
                Explore real, functional digital systems engineered for ambitious clients.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 transition-all overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Header */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="p-6 sm:px-8 sm:py-5 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/work/${project.id}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW WE WORK (Timeline / Interactive Process)
      ========================================================================= */}
      <section className="py-24 bg-[#07090e] border-y border-white/[0.06]" id="how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-4 max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              How We Work
            </h2>
            <p className="text-gray-400 font-sans font-light text-base leading-relaxed">
              A transparent, structured engineering journey with clear deliverables at every step.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left relative cursor-pointer ${
                    activeStep === idx
                      ? 'bg-blue-900/15 border border-blue-500/40 shadow-lg shadow-blue-500/5'
                      : 'bg-white/[0.02] border border-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-gray-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/process')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>Explore Our Complete Process Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CTA SECTION
      ========================================================================= */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
