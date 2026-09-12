import React from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Map, 
  Palette, 
  Terminal, 
  BadgeCheck, 
  Rocket, 
  RefreshCw, 
  Sparkles, 
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Understand the business and core problem.",
      description: "We don't start with code or templates. We interview you about your current business bottlenecks, primary customer types, revenue drivers, and competitor landscape. We define clear, measurable targets for the digital product.",
      deliverables: [
        "Business requirements specification",
        "Target customer conversion journey map",
        "Competitor analysis & differentiation angle"
      ],
      icon: Eye,
      color: "text-blue-400",
      accent: "from-blue-500/10 to-transparent"
    },
    {
      num: "02",
      title: "STRATEGY",
      subtitle: "Define requirements, architecture and direction.",
      description: "We outline the technology stack, page hierarchy, and user flows. Every button placement, form field, and headline is planned for maximum clarity and minimal friction.",
      deliverables: [
        "Content & information architecture",
        "Interactive low-fidelity wireframe",
        "Technical scope & timeline commitment"
      ],
      icon: Map,
      color: "text-indigo-400",
      accent: "from-indigo-500/10 to-transparent"
    },
    {
      num: "03",
      title: "DESIGN",
      subtitle: "Create the experience and bespoke visual system.",
      description: "We design a custom, modern visual identity. Tight typography pairing, spacious layout rhythm, and subtle depth that makes your brand look like an established market leader.",
      deliverables: [
        "Full-fidelity interactive design mockup",
        "Tailored typography & color token system",
        "Mobile-first responsive layout specifications"
      ],
      icon: Palette,
      color: "text-purple-400",
      accent: "from-purple-500/10 to-transparent"
    },
    {
      num: "04",
      title: "BUILD",
      subtitle: "Develop the product with modern engineering.",
      description: "We write clean, modular TypeScript, React, and Tailwind CSS. We avoid bloated third-party page builders to ensure near-zero runtime latency and absolute security.",
      deliverables: [
        "Componentized frontend codebase",
        "Interactive states & smooth layout transitions",
        "Integration of API webhooks or data storage"
      ],
      icon: Terminal,
      color: "text-pink-400",
      accent: "from-pink-500/10 to-transparent"
    },
    {
      num: "05",
      title: "TEST",
      subtitle: "Check performance, responsiveness and functionality.",
      description: "We subject the build to rigorous testing across mobile screen widths (360px, 390px, 412px, 430px) and standard desktop resolutions. We tune Google Core Web Vitals to score 95+.",
      deliverables: [
        "Cross-browser and multi-device verification",
        "Lighthouse performance audit score 95+",
        "Form submission & WhatsApp link end-to-end checks"
      ],
      icon: BadgeCheck,
      color: "text-emerald-400",
      accent: "from-emerald-500/10 to-transparent"
    },
    {
      num: "06",
      title: "LAUNCH",
      subtitle: "Deploy and hand over complete ownership.",
      description: "We connect your custom domain, set up global CDN caching via Cloudflare, verify SSL certificates, and configure SEO search indexing before celebrating the launch.",
      deliverables: [
        "Production deployment to global edge CDN",
        "Full intellectual property code handover",
        "Search Console & Google Analytics integration"
      ],
      icon: Rocket,
      color: "text-amber-400",
      accent: "from-amber-500/10 to-transparent"
    },
    {
      num: "07",
      title: "IMPROVE",
      subtitle: "Continue improving when required.",
      description: "Digital systems are living assets. As your business introduces new offerings or campaigns, we provide ongoing speed audits, feature updates, and iterative enhancements.",
      deliverables: [
        "Continuous uptime & performance monitoring",
        "Iterative feature additions & menu updates",
        "Direct engineer support via WhatsApp and email"
      ],
      icon: RefreshCw,
      color: "text-cyan-400",
      accent: "from-cyan-500/10 to-transparent"
    }
  ];

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 7-PHASE FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            A transparent, structured<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              engineering process.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            No guesswork, no missed deadlines, and no confusing technical jargon. Here is exactly how we take your project from initial concept to a high-performing digital reality.
          </p>
        </div>
      </section>

      {/* Structured Process Steps Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all relative overflow-hidden"
              >
                {/* Ambient edge glow */}
                <div className={`absolute top-0 right-0 w-80 h-40 bg-gradient-to-l ${step.accent} blur-2xl pointer-events-none`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left (Step number & header) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-extrabold text-gray-500">
                        PHASE
                      </span>
                      <span className={`text-2xl font-mono font-extrabold ${step.color}`}>
                        {step.num}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 text-gray-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm font-mono text-gray-300">
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Right (Deliverables box) */}
                  <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block font-semibold">
                      KEY DELIVERABLES:
                    </span>
                    <div className="space-y-2.5">
                      {step.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
