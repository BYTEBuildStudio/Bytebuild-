import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Portfolio } from './components/Portfolio';
import { TechShowcase } from './components/TechShowcase';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Sparkles, Cpu } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll tracking for progress indicator
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Simulated premium asset compiler loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-sky-500/30 selection:text-white" id="bytebuild-root">
      
      {/* Scroll Progress indicator at the very top */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 z-55 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-line"
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          // LUXURIOUS FULL-SCREEN INITIAL PRELOADER
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-60 bg-slate-950 flex flex-col items-center justify-center p-4"
            id="applet-preloader"
          >
            {/* Elegant high-contrast space circles background */}
            <div className="absolute w-96 h-96 bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_60%)] animate-pulse pointer-events-none" />
            
            <div className="relative space-y-6 flex flex-col items-center max-w-sm w-full text-center">
              {/* Spinning geometric glowing circle around logo */}
              <div className="relative p-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/10 animate-spin [animation-duration:15s]" />
                <div className="absolute inset-2 rounded-full border border-indigo-500/15 animate-spin [animation-duration:8s] [animation-direction:reverse]" />
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <Logo size={80} withText={false} />
                </motion.div>
              </div>

              {/* Title Assembly */}
              <div className="space-y-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-display font-black text-2xl tracking-wider text-white"
                >
                  BYTE<span className="text-sky-400">BUILD</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500 flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" /> WE BUILD. YOU GROW.
                </motion.p>
              </div>

              {/* Progress Bar container */}
              <div className="w-48 h-[2px] bg-slate-900 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                />
              </div>

              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[9px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-slate-700 animate-spin" /> Compiling Brand Assets...
              </motion.span>
            </div>
          </motion.div>
        ) : (
          // MAIN PREMIUM WEBSITE CONTAINER
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
            id="bytebuild-main-content"
          >
            {/* Sticky Navigation */}
            <Navbar />

            {/* Structured Page Sections */}
            <main className="flex-1">
              
              {/* Section 1: Hero Segment */}
              <Hero />

              {/* Section 2: Trust scroller segment */}
              <Trust />

              {/* Section 3: Premium Services segment */}
              <Services />

              {/* Section 4: Why Chose Bytebuild segment */}
              <WhyChoose />

              {/* Section 5: Dynamic Portfolio builds segment */}
              <Portfolio />

              {/* Section 6: Our Process Blueprint timeline segment */}
              <Process />

              {/* Section 7: Technological Bento segment */}
              <TechShowcase />

              {/* Section 8: Split inquiries Contact segment */}
              <Contact />

            </main>

            {/* Footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
