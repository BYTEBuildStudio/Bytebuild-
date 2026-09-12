import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Cpu, 
  ShoppingBag, 
  MessageCircle, 
  Mail,
  Sparkles
} from 'lucide-react';
import { Logo } from '../Logo';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'Services', 
      path: '/services',
      hasDropdown: true 
    },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
  ];

  const serviceItems = [
    {
      title: 'Web Development',
      desc: 'High-performance websites and web applications',
      path: '/services/web-development',
      icon: Globe,
      color: 'text-blue-400'
    },
    {
      title: 'AI & Automation',
      desc: 'Smart copilots, chatbots and automated workflows',
      path: '/services/ai-automation',
      icon: Cpu,
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce & QR Menus',
      desc: 'Conversion storefronts & tableside digital menus',
      path: '/services/ecommerce',
      icon: ShoppingBag,
      color: 'text-emerald-400'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        id="bytebuild-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center text-left group cursor-pointer focus:outline-none"
              id="nav-brand-logo"
            >
              <Logo size={36} withText={true} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate(item.path)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                          isActive(item.path)
                            ? 'text-white bg-white/10 font-semibold'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        id="nav-services-dropdown-btn"
                      >
                        {item.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-[#0b0e17] border border-white/10 shadow-2xl backdrop-blur-xl z-50"
                          >
                            <div className="px-3 py-2 border-b border-white/5 mb-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">
                                Digital Capabilities
                              </span>
                            </div>
                            {serviceItems.map((s) => {
                              const Icon = s.icon;
                              return (
                                <button
                                  key={s.path}
                                  onClick={() => {
                                    setServicesDropdownOpen(false);
                                    onNavigate(s.path);
                                  }}
                                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all group cursor-pointer"
                                >
                                  <div className={`p-2 rounded-lg bg-white/5 ${s.color} mt-0.5 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                                      {s.title}
                                    </div>
                                    <div className="text-xs text-gray-400 leading-snug">
                                      {s.desc}
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                            <div className="pt-2 mt-1 border-t border-white/5">
                              <button
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  onNavigate('/services');
                                }}
                                className="w-full text-center py-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-1 cursor-pointer"
                              >
                                View All Services <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? 'text-white bg-white/10 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA & Theme Switcher */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
                id="nav-cta-btn"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button & Theme Switcher */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle compact={true} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-[#07090e]/98 backdrop-blur-2xl border-b border-white/10 overflow-y-auto px-6 py-6 md:hidden flex flex-col justify-between"
            id="mobile-nav-panel"
          >
            <div className="space-y-6">
              <div className="space-y-1 border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold px-2">
                  Navigation
                </span>
                {navLinks.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className={`w-full text-left px-3 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-white/5'
                        : 'text-gray-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>

              {/* Quick Services Links */}
              <div className="space-y-2 border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold px-2">
                  Capabilities
                </span>
                {serviceItems.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.path}
                      onClick={() => onNavigate(s.path)}
                      className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <Icon className={`w-4 h-4 ${s.color}`} />
                      <span className="text-sm font-medium text-gray-300">{s.title}</span>
                    </button>
                  );
                })}
              </div>
              {/* Theme Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-mono text-gray-400">Interface Theme</span>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Actions Footer */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full py-3.5 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/916367207775"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:thebytebuildofficial@gmail.com"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
