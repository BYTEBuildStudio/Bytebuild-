import React from 'react';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Mail, 
  Instagram, 
  ShieldCheck, 
  FileText,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Logo } from '../Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="bytebuild-footer" className="bg-[#05070c] text-white border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-blue-600/[0.04] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center text-left group cursor-pointer focus:outline-none"
            >
              <Logo size={36} withText={true} />
            </button>

            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
              We design and build high-performance websites, web applications, and AI-powered solutions that help ambitious businesses grow.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting New Client Projects</span>
            </div>
          </div>

          {/* Navigation Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/work')} className="hover:text-white transition-colors cursor-pointer">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/process')} className="hover:text-white transition-colors cursor-pointer">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-300 font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('/services/web-development')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/ai-automation')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/ecommerce')} className="hover:text-white transition-colors cursor-pointer text-left">
                  E-commerce & QR Menus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Custom Web Applications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Core Web Vitals Speed
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-300 font-semibold">
              Direct Channels
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:thebytebuildofficial@gmail.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">thebytebuildofficial@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916367207775"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-400 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>+91 6367207775</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/official.bytebuild"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>@official.bytebuild</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>Start Intake Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} BYTEBUILD. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-gray-700">•</span>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
