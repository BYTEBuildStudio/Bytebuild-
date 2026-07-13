import React from 'react';
import { Logo } from './Logo';
import { Mail, MessageCircle, Instagram, Globe, Heart, Shield, FileText } from 'lucide-react';

interface FooterProps {
  currentPath: string;
  onNavigate: (path: string, targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPath, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    if (currentPath !== '/') {
      onNavigate('/', id);
    } else {
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
            <button onClick={() => scrollToSection('home')} className="cursor-pointer text-left focus:outline-none" aria-label="Go to Home">
              <Logo size={46} />
            </button>
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
              <span className="text-left">Corporate Business Sites</span>
              <span className="text-left">Tableside Contactless QR Menus</span>
              <span className="text-left">Highly Scalable E-commerce Storefronts</span>
              <span className="text-left">High-Intent Ad Landing Pages</span>
              <span className="text-left">Academic Coaching Portals</span>
              <span className="text-left">Custom AI Assistant Integrations</span>
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
              className="hover:text-gray-300 flex items-center gap-1 cursor-pointer font-sans"
              onClick={() => onNavigate('/privacy-policy')}
            >
              <Shield className="w-3.5 h-3.5 text-gray-600" /> Privacy Policy
            </button>
            <button 
              className="hover:text-gray-300 flex items-center gap-1 cursor-pointer font-sans"
              onClick={() => onNavigate('/terms-and-conditions')}
            >
              <FileText className="w-3.5 h-3.5 text-gray-600" /> Terms & Conditions
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
