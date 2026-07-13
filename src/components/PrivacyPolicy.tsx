import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Lock, 
  Database, 
  Cookie, 
  RefreshCw, 
  Mail, 
  ChevronRight, 
  Home,
  CheckCircle,
  FileText
} from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Set Page Title and Meta Description for SEO
    document.title = "Privacy Policy | ByteBuild — Premium Web Engineering";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the ByteBuild Privacy Policy. Learn about how we collect, secure, and handle your information with absolute transparency.');
    }
  }, []);

  const sections = [
    {
      id: "info-collect",
      title: "Information We Collect",
      icon: Database,
      glowColor: "rgba(59, 130, 246, 0.15)",
      content: (
        <ul className="space-y-3 font-sans text-sm text-gray-400">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
            <span><strong className="text-white font-medium">Name:</strong> To identify you during communications and project scoping.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
            <span><strong className="text-white font-medium">Email address:</strong> For official correspondence, project updates, and deliveries.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
            <span><strong className="text-white font-medium">Phone number (if provided):</strong> For direct WhatsApp updates or immediate consultations.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
            <span><strong className="text-white font-medium">Project Details:</strong> Any objectives, budgets, and specifications submitted through our interactive form.</span>
          </li>
        </ul>
      )
    },
    {
      id: "info-use",
      title: "How We Use Your Information",
      icon: Eye,
      glowColor: "rgba(168, 85, 247, 0.15)",
      content: (
        <ul className="space-y-3 font-sans text-sm text-gray-400">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
            <span>Respond to your project inquiries and draft accurate blueprints in under 2 hours.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
            <span>Discuss, customize, and iterate on design structures.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
            <span>Provide high-performance, tailored full-stack development and optimization services.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
            <span>Improve our portfolio website to offer an increasingly authentic, streamlined browsing experience.</span>
          </li>
        </ul>
      )
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      glowColor: "rgba(236, 72, 153, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          We implement rigorous security measures to shield your details from unauthorized access. Your submitted form contents strictly formulate standard prefilled mail drafts without being stored in public databases. While we maintain a fortress-like setup, please note that no internet transmission mechanism can claim absolute 100% security.
        </p>
      )
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: FileText,
      glowColor: "rgba(14, 165, 233, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          Our cloud systems may leverage industry-leading services such as Vercel, GitHub, Google Fonts, and analytics providers. These third-party services operate independently and maintain their own comprehensive privacy frameworks which we recommend reviewing.
        </p>
      )
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: Cookie,
      glowColor: "rgba(16, 185, 129, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          We may deploy minimal cookies or local browser storage state parameters to enhance and customize your navigational flow. You hold the ultimate control and can easily modify, audit, or completely disable cookie acceptance inside your personal browser's settings panel.
        </p>
      )
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: RefreshCw,
      glowColor: "rgba(245, 158, 11, 0.15)",
      content: (
        <p className="font-sans text-sm text-gray-400 leading-relaxed">
          This Privacy Policy is subject to occasional iterations and updates. Any refined specifications or date changes will be dynamically updated and reflected live directly on this official page.
        </p>
      )
    },
    {
      id: "contact-details",
      title: "Contact Us",
      icon: Mail,
      glowColor: "rgba(59, 130, 246, 0.15)",
      content: (
        <div className="space-y-4">
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            If you have any questions, security concerns, or clarification requests regarding this Privacy Policy, please initiate direct contact.
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
            <span className="text-gray-300 uppercase">PRIVACY POLICY</span>
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
            <Shield className="w-3.5 h-3.5 animate-pulse" /> LEGAL DOCUMENTATION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-600" /> EFFECTIVE DATE: JULY 13, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> SECURED & COMPLIANT
            </span>
          </div>
          <p className="text-base text-gray-400 font-sans font-light leading-relaxed max-w-2xl pt-2">
            At ByteBuild, we value your privacy and are committed to protecting your personal information. This policy lays down our complete transparent parameters regarding data safety.
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
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

                {/* Decorative glow inside */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: section.glowColor }}
                />

                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-white/5 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-300 shrink-0">
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

        {/* Legal Disclaimer Footer Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white/2 border border-white/5 text-xs text-gray-500 leading-relaxed font-sans max-w-2xl">
          <p>
            Disclaimer: This document is formulated to govern the interaction channels of ByteBuild's digital portfolio. By submitting contact specifications or scoping parameters, you explicitly consent to the data collection systems detailed herein.
          </p>
        </div>

      </div>
    </div>
  );
};
