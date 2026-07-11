import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mockup } from './Mockups';
import { Sparkles, ArrowRight, Play, CheckCircle, Smartphone, Zap, Search, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeMockup, setActiveMockup] = useState<'fitfuel' | 'gharkharch' | 'khubkhao' | 'eduflow'>('eduflow');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
      id="home" 
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0)_80%,rgba(5,5,5,1)_100%)] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left Side) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6" id="hero-left-container">
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              id="hero-badge"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-mono">
                AI-Powered Digital Agency
              </span>
            </motion.div>

            {/* Powerful Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white"
              id="hero-headline"
            >
              We Build.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_2px_15px_rgba(59,130,246,0.2)]">
                You Grow.
              </span>
            </motion.h1>

            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-xl"
              id="hero-description"
            >
              We design and develop fast, modern, SEO-optimized websites that help businesses attract more customers, increase conversions, and build a commanding online presence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
              id="hero-cta-buttons"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all text-white cursor-pointer hover:opacity-90"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-sm font-bold px-8 py-4 rounded-xl hover:bg-white/10 active:scale-95 transition-all text-white cursor-pointer"
              >
                Start Your Project <span className="animate-bounce">🚀</span>
              </button>
            </motion.div>

            {/* Trust Indicators & Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/5 w-full space-y-6"
              id="hero-trust-indicators"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 shrink-0" id="hero-trust-avatars">
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-neutral-950 object-cover shadow-md" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                    alt="Client avatar" 
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-neutral-950 object-cover shadow-md" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                    alt="Client avatar" 
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-neutral-950 object-cover shadow-md" 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" 
                    alt="Client avatar" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-gray-400 font-sans text-left leading-tight">
                  Trusted by growing businesses <br />
                  <span className="text-gray-300 font-semibold font-medium">and personal brands like yours.</span>
                </p>
              </div>

              {/* Metrics panel */}
              <div className="flex items-center gap-6 sm:gap-8 pt-4 border-t border-white/5 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">120+</div>
                  <div className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold font-mono">Projects Delivered</div>
                </div>
                <div className="h-8 w-[1px] bg-white/10 shrink-0"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                  <div className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold font-mono">Satisfaction Rate</div>
                </div>
                <div className="h-8 w-[1px] bg-white/10 shrink-0"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                  <div className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold font-mono">Expert Support</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating 3D Browser Mockups (Right Side) */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center w-full mt-8 lg:mt-0" id="hero-right-container">
            {/* Ambient background glow lines behind the mockups */}
            <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
            
            {/* Neon Accent Ring around center of mockups */}
            <div className="absolute w-80 h-80 rounded-full border border-sky-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)] animate-pulse pointer-events-none" />

            {/* Floating stacked layout resembling the inspiration mockup */}
            <div className="relative w-full h-full" id="floating-mockups-stack">
              
              {/* TOP LEFT: FitFuel Nutrition Mockup */}
              <motion.div 
                className={`absolute w-[68%] aspect-[4/3] top-2 left-0 z-20 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeMockup === 'fitfuel' 
                    ? 'scale-[1.08] shadow-[0_20px_50px_rgba(249,115,22,0.3)] z-30 border-orange-500/50' 
                    : 'opacity-70 hover:opacity-95 hover:scale-105 shadow-2xl hover:z-30'
                }`}
                animate={{ 
                  y: activeMockup === 'fitfuel' ? [0, -12, 0] : [0, -8, 0],
                  rotateX: activeMockup === 'fitfuel' ? 10 : 8,
                  rotateY: activeMockup === 'fitfuel' ? -18 : -14,
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  rotateX: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                onClick={() => setActiveMockup('fitfuel')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent pointer-events-none z-10 rounded-lg" />
                <Mockup type="fitfuel" interactive={activeMockup === 'fitfuel'} />
              </motion.div>

              {/* TOP RIGHT: KhubKhao Restaurant Mockup */}
              <motion.div 
                className={`absolute w-[65%] aspect-[4/3] top-8 right-0 z-10 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeMockup === 'khubkhao' 
                    ? 'scale-[1.08] shadow-[0_20px_50px_rgba(217,119,6,0.3)] z-30 border-amber-600/50' 
                    : 'opacity-65 hover:opacity-95 hover:scale-105 shadow-2xl hover:z-30'
                }`}
                animate={{ 
                  y: activeMockup === 'khubkhao' ? [0, 10, 0] : [0, 8, 0],
                  rotateX: activeMockup === 'khubkhao' ? 12 : 10,
                  rotateY: activeMockup === 'khubkhao' ? 14 : 12,
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                  rotateX: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                onClick={() => setActiveMockup('khubkhao')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none z-10 rounded-lg" />
                <Mockup type="khubkhao" interactive={activeMockup === 'khubkhao'} />
              </motion.div>

              {/* CENTER/BOTTOM: EduFlow Coaching Mockup */}
              <motion.div 
                className={`absolute w-[72%] aspect-[4/3] bottom-16 left-8 z-25 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeMockup === 'eduflow' 
                    ? 'scale-[1.08] shadow-[0_25px_60px_rgba(99,102,241,0.35)] z-30 border-indigo-500/50' 
                    : 'opacity-80 hover:opacity-95 hover:scale-105 shadow-2xl hover:z-30'
                }`}
                animate={{ 
                  y: activeMockup === 'eduflow' ? [0, -14, 0] : [0, -10, 0],
                  rotateX: activeMockup === 'eduflow' ? 8 : 6,
                  rotateY: activeMockup === 'eduflow' ? -10 : -8,
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                  rotateX: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                onClick={() => setActiveMockup('eduflow')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent pointer-events-none z-10 rounded-lg" />
                <Mockup type="eduflow" interactive={activeMockup === 'eduflow'} />
              </motion.div>

              {/* RIGHT SLIDEOUT: GharKharch Dashboard */}
              <motion.div 
                className={`absolute w-[68%] aspect-[4/3] bottom-2 right-2 z-15 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeMockup === 'gharkharch' 
                    ? 'scale-[1.08] shadow-[0_20px_50px_rgba(20,184,166,0.3)] z-30 border-teal-500/50' 
                    : 'opacity-70 hover:opacity-95 hover:scale-105 shadow-2xl hover:z-30'
                }`}
                animate={{ 
                  y: activeMockup === 'gharkharch' ? [0, 12, 0] : [0, 9, 0],
                  rotateX: activeMockup === 'gharkharch' ? 6 : 4,
                  rotateY: activeMockup === 'gharkharch' ? 16 : 14,
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
                  rotateX: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                onClick={() => setActiveMockup('gharkharch')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent pointer-events-none z-10 rounded-lg" />
                <Mockup type="gharkharch" interactive={activeMockup === 'gharkharch'} />
              </motion.div>
            </div>

            {/* Instruction badge overlay */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-black/90 border border-white/10 text-gray-400 text-[10px] md:text-xs px-3.5 py-1.5 rounded-full backdrop-blur shadow-lg flex items-center gap-1.5 z-40 select-none animate-bounce">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>Click on any window to inspect and interact!</span>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Statistics Strip below the Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-16" id="hero-stats-strip">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 shadow-2xl">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg md:text-xl text-white">4+ Live</span>
            </div>
            <span className="text-xs text-gray-400 font-sans">Active Demo Projects</span>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg md:text-xl text-white">100%</span>
            </div>
            <span className="text-xs text-gray-400 font-sans">Responsive Experience</span>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-amber-500/10 text-amber-400">
                <Search className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg md:text-xl text-white">SEO</span>
            </div>
            <span className="text-xs text-gray-400 font-sans">Optimized & Prepped</span>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg md:text-xl text-white">AI Assisted</span>
            </div>
            <span className="text-xs text-gray-400 font-sans">Supercharged Delivery</span>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg md:text-xl text-white">Enterprise</span>
            </div>
            <span className="text-xs text-gray-400 font-sans">Clean & Secure Build</span>
          </div>

        </div>
      </div>
    </section>
  );
};
