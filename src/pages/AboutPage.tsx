import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu,
  HeartHandshake
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      title: "Utility Over Novelty",
      description: "Technology should solve real business problems, not simply look impressive. An interface with high visual flair that confuses visitors or loads slowly is a failed product. We build for genuine business utility.",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Zero Tolerance for Bloat",
      description: "We refuse to build on clunky legacy CMS templates or heavyweight drag-and-drop builders. Clean, handwritten React, TypeScript, and Tailwind code ensures sub-second load times and long-term maintainability.",
      icon: Zap,
      color: "text-purple-400"
    },
    {
      title: "Business-First Architecture",
      description: "Code and design are merely instruments to achieve business outcomes: acquiring customers, lowering booking friction, increasing average order values, and building lasting client trust.",
      icon: TrendingUpIcon,
      color: "text-emerald-400"
    },
    {
      title: "Direct Engineer Access",
      description: "When you collaborate with ByteBuild, you talk directly with the engineers building your product. No layers of non-technical account managers or communication delays.",
      icon: HeartHandshake,
      color: "text-amber-400"
    }
  ];

  function TrendingUpIcon(props: any) {
    return <Terminal {...props} />;
  }

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT BYTEBUILD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Technology should solve problems,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              not simply look impressive.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            ByteBuild is an agile digital technology studio. We partner with ambitious founders, local businesses, and emerging brands to design and engineer digital systems that drive measurable growth.
          </p>
        </div>
      </section>

      {/* Narrative Section: What We Believe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-blue-400 font-semibold block">
              OUR PHILOSOPHY
            </span>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-snug">
              Why We Started ByteBuild
            </h2>

            <p className="text-base text-gray-300 font-sans leading-relaxed">
              Too many businesses end up with websites that look like generic templates or feel like heavy, slow digital brochures. They spend money on site builders, deal with broken plugins, and wonder why their digital presence isn't generating actual leads.
            </p>

            <p className="text-base text-gray-300 font-sans leading-relaxed">
              We built ByteBuild to offer an honest alternative: a dedicated engineering partner who treats your website as a high-performing digital asset. From day one, our focus is simple: high-speed loading, clear conversion hierarchy, clean code you 100% own, and responsive communication.
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs font-mono text-gray-400">
              <div>
                <span className="text-white font-bold block text-sm">Remote-First Studio</span>
                <span>Distributed Engineering</span>
              </div>
              <div>
                <span className="text-white font-bold block text-sm">Under 2 Hours</span>
                <span>Average WhatsApp Response</span>
              </div>
              <div>
                <span className="text-white font-bold block text-sm">Zero Plugin Bloat</span>
                <span>Hand-crafted React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-400 font-semibold block mb-2">
            CORE VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            How We Operate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 ${p.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {p.description}
                </p>
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
