import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ArrowLeft, 
  Calendar, 
  Cpu, 
  Briefcase, 
  Award, 
  DollarSign, 
  AlertTriangle, 
  ExternalLink, 
  RefreshCw, 
  Scale, 
  ChevronRight, 
  Home,
  CheckCircle,
  Mail
} from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigate: (path: string) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Set Page Title and Meta Description for SEO
    document.title = "Terms & Conditions | ByteBuild — Premium Web Engineering";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the ByteBuild Terms & Conditions. Review standard legal regulations, copyrights, payment systems, and governing law.');
    }
  }, []);

  const sections = [
    {
      id: "services",
      title: "Services Provided",
      icon: Briefcase,
      glowColor: "rgba(59, 130, 246, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          ByteBuild designs, architects, and engineers bespoke high-performance web systems. This spans custom web design, high-fidelity web development, responsive UI/UX architecture, contactless table menus, scalable e-commerce storefronts, and premium business portfolios optimized for active conversions.
        </p>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Award,
      glowColor: "rgba(168, 85, 247, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          All materials published on this website—including visual branding guides, site blueprints, vector graphics, code layouts, and the interactive platform structure—are the exclusive intellectual property of ByteBuild, unless explicitly credited otherwise. Unauthorized copying, extraction, or reproduction is strictly prohibited.
        </p>
      )
    },
    {
      id: "project-work",
      title: "Project Scope & Execution",
      icon: Cpu,
      glowColor: "rgba(236, 72, 153, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          The complete developmental scope, design constraints, feedback schedules, timelines, and precise product deliverables are mutually agreed upon individual-by-individual before any web compilation begins. Our strategic blueprint ensures absolute timeline compliance and transparency.
        </p>
      )
    },
    {
      id: "payments",
      title: "Payments & Invoices",
      icon: DollarSign,
      glowColor: "rgba(16, 185, 129, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          All financial compensations and transaction checkpoints are guided by quotation files or official invoice sheets. Code deployment and system initialization will follow standard agreed-upon advance parameters.
        </p>
      )
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: AlertTriangle,
      glowColor: "rgba(239, 68, 68, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          To the maximum extent permitted by applicable laws, ByteBuild is not liable for any indirect, incident-based, or consequential loss of coordinates, analytics records, or operating revenue arising from your deployment of our digital products.
        </p>
      )
    },
    {
      id: "external-links",
      title: "External Integration Links",
      icon: ExternalLink,
      glowColor: "rgba(14, 165, 233, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          Our pages may contain links or integrated APIs to external third-party portals. We hold no responsibility, oversight, or security warranties regarding their content and operations.
        </p>
      )
    },
    {
      id: "updates",
      title: "Modifications to Terms",
      icon: RefreshCw,
      glowColor: "rgba(245, 158, 11, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          We reserve the right to modify these Terms & Conditions at any point. The latest, active version will always be directly accessible and timestamped on this official page.
        </p>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Scale,
      glowColor: "rgba(59, 130, 246, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          These Terms & Conditions, and any development contracts stemming from them, are governed by and construed in absolute accordance with the laws of India.
        </p>
      )
    },
    {
      id: "contact-details",
      title: "Contact Desk",
      icon: Mail,
      glowColor: "rgba(59, 130, 246, 0.15)",
      content: (
        <div className="space-y-4">
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            For any direct inquiries, clarification schedules, or legal reviews regarding these Terms & Conditions, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-mono text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-all duration-300"
            >
              Go to Contact Form
            </button>
            <a
              href="mailto:thebytebuildofficial@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 text-blue-400 font-mono text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-all duration-300"
            >
              Email official.bytebuild
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-start text-left">
        
        {/* Navigation Breadcrumbs & Back Trigger */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-white/5 pb-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-gray-500" aria-label="Breadcrumb">
            <button 
              onClick={() => onNavigate('/')} 
              className="hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" /> HOME
            </button>
            <ChevronRight className="w-3 h-3 text-gray-700" />
            <span className="text-gray-300 uppercase">TERMS & CONDITIONS</span>
          </nav>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors cursor-pointer self-start sm:self-auto bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </button>
        </div>

        {/* Hero Segment */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/15 text-xs font-mono text-blue-400">
            <FileText className="w-3.5 h-3.5 animate-pulse" /> REGULATORY CHARTER
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Conditions</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-600" /> EFFECTIVE DATE: JULY 13, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <CheckCircle className="w-3.5 h-3.5" /> LEGALLY BINDING
            </span>
          </div>
          <p className="text-base text-gray-400 font-sans font-light leading-relaxed max-w-2xl pt-2">
            By accessing or utilizing our digital portfolio website, you explicitly declare your compliance and agreement to these standard regulatory Terms & Conditions.
          </p>
        </div>

        {/* Content Bento Grid Cards */}
        <div className="w-full space-y-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 hover:bg-[#111]/60 hover:border-white/10 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                {/* Micro gradient background indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />

                {/* Decorative glow inside */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: section.glowColor }}
                />

                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-white/5 text-purple-400 group-hover:scale-110 group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h2 className="text-lg font-display font-bold text-white tracking-wide">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Disclaimer Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white/2 border border-white/5 text-xs text-gray-500 leading-relaxed font-sans max-w-2xl">
          <p>
            Regulatory Note: These specifications govern all interactive activities. If you disagree with any segment, we advise terminating active sessions on the ByteBuild web servers immediately.
          </p>
        </div>

      </div>
    </div>
  );
};
