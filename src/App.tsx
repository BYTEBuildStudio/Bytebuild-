import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Logo } from './components/Logo';
import { Sparkles, Cpu } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    // Scroll tracking for top progress indicator
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Fast, sleek initial loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate-changed', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate-changed', handleLocationChange);
    };
  }, []);

  // Dynamic SEO Page Title & Canonical Synchronization
  useEffect(() => {
    let pageTitle = 'ByteBuild | High-Performance Websites & AI Solutions';
    let pageDescription = 'We design and build high-performance websites, web applications, and AI-powered solutions that help ambitious businesses grow.';

    if (currentPath === '/services') {
      pageTitle = 'Services | ByteBuild — Digital Technology Agency';
      pageDescription = 'Explore our engineering services: Web Development, AI & Automation, E-commerce, QR Menus, and custom software systems.';
    } else if (currentPath === '/services/web-development') {
      pageTitle = 'Web Development Services | ByteBuild';
      pageDescription = 'High-performance bespoke websites and web applications built with modern React, TypeScript, and 95+ Core Web Vitals.';
    } else if (currentPath === '/services/ai-automation') {
      pageTitle = 'AI & Automation Services | ByteBuild';
      pageDescription = 'Context-aware AI customer agents, automated lead qualification, and WhatsApp inquiry pipelines.';
    } else if (currentPath === '/services/ecommerce') {
      pageTitle = 'E-commerce & QR Menus | ByteBuild';
      pageDescription = 'Frictionless storefronts and contactless tableside QR dining menus for modern retail and restaurants.';
    } else if (currentPath === '/work') {
      pageTitle = 'Selected Work & Case Studies | ByteBuild';
      pageDescription = 'Explore real digital systems engineered for restaurants, fitness brands, academies, and financial applications.';
    } else if (currentPath.startsWith('/work/')) {
      const proj = currentPath.replace('/work/', '');
      pageTitle = `${proj.toUpperCase()} Case Study | ByteBuild`;
      pageDescription = 'In-depth engineering breakdown, interactive sandbox, and business outcomes.';
    } else if (currentPath === '/process') {
      pageTitle = 'Engineering Process & Roadmap | ByteBuild';
      pageDescription = 'Our 7-phase transparent engineering process: Discover, Strategy, Design, Build, Test, Launch, and Improve.';
    } else if (currentPath === '/about') {
      pageTitle = 'About ByteBuild | Digital Technology Agency';
      pageDescription = 'Technology should solve problems, not simply look impressive. Learn about our philosophy and standards.';
    } else if (currentPath === '/contact') {
      pageTitle = 'Start a Project | ByteBuild';
      pageDescription = 'Tell us about your business, idea, or problem. Get a transparent quote and direct engineer consultation.';
    } else if (currentPath === '/privacy-policy' || currentPath === '/privacy') {
      pageTitle = 'Privacy Policy | ByteBuild';
      pageDescription = 'Official privacy policy and data governance practices at ByteBuild.';
    } else if (currentPath === '/terms-and-conditions' || currentPath === '/terms') {
      pageTitle = 'Terms & Conditions | ByteBuild';
      pageDescription = 'Official terms of service and client project agreements at ByteBuild.';
    }

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate-changed'));
  };

  const renderCurrentView = () => {
    if (currentPath === '/services') {
      return <ServicesPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/services/web-development') {
      return <ServiceDetailPage slug="web-development" onNavigate={navigateTo} />;
    }
    if (currentPath === '/services/ai-automation') {
      return <ServiceDetailPage slug="ai-automation" onNavigate={navigateTo} />;
    }
    if (currentPath === '/services/ecommerce') {
      return <ServiceDetailPage slug="ecommerce" onNavigate={navigateTo} />;
    }
    if (currentPath === '/work') {
      return <WorkPage onNavigate={navigateTo} />;
    }
    if (currentPath.startsWith('/work/')) {
      const projectId = currentPath.replace('/work/', '').split('/')[0];
      return <ProjectDetailPage projectId={projectId} onNavigate={navigateTo} />;
    }
    if (currentPath === '/process') {
      return <ProcessPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/privacy-policy' || currentPath === '/privacy') {
      return <PrivacyPolicy onNavigate={navigateTo} />;
    }
    if (currentPath === '/terms-and-conditions' || currentPath === '/terms') {
      return <TermsAndConditions onNavigate={navigateTo} />;
    }
    return <HomePage onNavigate={navigateTo} />;
  };

  return (
    <div className="bg-[#05070c] text-white min-h-screen relative font-sans antialiased selection:bg-blue-500/30 selection:text-white" id="bytebuild-root">
      
      {/* Scroll Progress indicator at the very top */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-line"
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Sleek Agency Splash Loader */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#05070c] flex flex-col items-center justify-center p-4"
            id="applet-preloader"
          >
            <div className="relative space-y-5 flex flex-col items-center max-w-xs w-full text-center">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Logo size={64} withText={false} />
              </motion.div>

              <div className="space-y-1.5">
                <h2 className="font-display font-extrabold text-xl tracking-wider text-white">
                  BYTE<span className="text-blue-400">BUILD</span>
                </h2>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" /> DIGITAL TECHNOLOGY AGENCY
                </p>
              </div>

              {/* Progress Bar container */}
              <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Agency Shell */
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col min-h-screen"
            id="bytebuild-main-content"
          >
            {/* Global Sticky Navigation */}
            <Navbar currentPath={currentPath} onNavigate={navigateTo} />

            {/* Structured Page View */}
            <main className="flex-1" id="page-view-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPath}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {renderCurrentView()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Global Comprehensive Footer */}
            <Footer currentPath={currentPath} onNavigate={navigateTo} />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
