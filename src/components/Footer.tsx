import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, MessageCircle, Instagram, Globe, Heart, Shield, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

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
    <footer 
      className="bg-[#050505] border-t border-white/5 pt-16 pb-8 relative overflow-hidden"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Brand description */}
          <div className="md:col-span-4 text-left space-y-4">
            <Logo size={46} />
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm font-light">
              We design and engineer bespoke, ultra-fast web systems optimized for high-intent conversions and authentic consumer experiences.
            </p>
            {/* Social channels */}
            <div className="flex gap-3 pt-2">
              <a 
                href="mailto:thebytebuildofficial@gmail.com"
                className="w-8 h-8 rounded-lg bg-neutral-900/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/10 transition-colors cursor-pointer"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/916367207775"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/10 transition-colors cursor-pointer"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/official.bytebuild"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/10 transition-colors cursor-pointer"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-gray-300 uppercase">QUICK LINKS</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans font-medium">
              <button onClick={() => scrollToSection('home')} className="hover:text-white text-left cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-white text-left cursor-pointer">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-white text-left cursor-pointer">Our Work</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-white text-left cursor-pointer">Process Blueprint</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white text-left cursor-pointer">Consultation Desk</button>
            </div>
          </div>

          {/* Services block */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-gray-300 uppercase">OUR SOLUTIONS</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans">
              <span className="hover:text-white text-left">Corporate Business Sites</span>
              <span className="hover:text-white text-left">Tableside Contactless QR Menus</span>
              <span className="hover:text-white text-left">Highly Scalable E-commerce Storefronts</span>
              <span className="hover:text-white text-left">High-Intent Ad Landing Pages</span>
              <span className="hover:text-white text-left">Academic Coaching Portals</span>
              <span className="hover:text-white text-left">Custom AI Assistant Integrations</span>
            </div>
          </div>

          {/* Location / Status info */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-gray-300 uppercase">AGENCY FOCUS</h4>
            <div className="space-y-3.5 text-xs text-gray-400 font-sans font-light">
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p>Engineering premium digital products globally from India.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">24/7 ACTIVE STATUS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-gray-500 font-sans">
          
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <span>© {currentYear} ByteBuild. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-900">|</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-purple-500 fill-purple-500 animate-pulse" /> for ambitious businesses.
            </span>
          </div>

          <div className="flex gap-5 items-center">
            <button 
              className="hover:text-gray-300 flex items-center gap-1 cursor-pointer"
              onClick={() => setActiveModal('privacy')}
            >
              <Shield className="w-3.5 h-3.5 text-gray-600" /> Privacy Policy
            </button>
            <button 
              className="hover:text-gray-300 flex items-center gap-1 cursor-pointer"
              onClick={() => setActiveModal('terms')}
            >
              <FileText className="w-3.5 h-3.5 text-gray-600" /> Terms of Service
            </button>
          </div>

        </div>

      </div>

      {/* MODAL SYSTEM OVERLAYS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl z-10 text-left"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModal === 'privacy' ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Shield className="w-5 h-5" />
                    <h3 className="font-display font-bold text-lg text-white">Privacy Policy</h3>
                  </div>
                  <div className="text-sm text-gray-400 space-y-3 font-sans font-light leading-relaxed">
                    <p>
                      ByteBuild is committed to protecting your personal information and privacy. 
                    </p>
                    <p>
                      Any details collected through our digital agency's communication desks—including full names, email coordinates, and business specifications—are stored strictly for consultation schedules and drafting email messages.
                    </p>
                    <p>
                      We strictly enforce serverless parameters: your coordinates are never compiled into marketing databases or leased to third-party aggregators. 
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <FileText className="w-5 h-5" />
                    <h3 className="font-display font-bold text-lg text-white">Terms of Service</h3>
                  </div>
                  <div className="text-sm text-gray-400 space-y-3 font-sans font-light leading-relaxed">
                    <p>
                      Welcome to ByteBuild. By exploring our digital engineering systems or commissioning code structures, you acknowledge standard parameters:
                    </p>
                    <p>
                      All delivered high-performance web systems are fully customized and include a comprehensive 12-month software warranty spanning browser patches and database optimizations.
                    </p>
                    <p>
                      Standard service contracts and source files will be finalized inside planning schedules upon receipt of initial retainer agreements.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="bg-white hover:bg-gray-200 text-black font-mono text-xs font-bold px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  I UNDERSTAND
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
