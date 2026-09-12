import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Code2, 
  Layers, 
  Clock, 
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { SERVICES_DATA, ServiceDetail } from '../data/servicesData';
import { CTASection } from '../components/common/CTASection';

interface ServiceDetailPageProps {
  slug: 'web-development' | 'ai-automation' | 'ecommerce';
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = SERVICES_DATA[slug] || SERVICES_DATA['web-development'];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            {service.heroHeadline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              {service.heroHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-2xl">
            {service.heroSubhead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-gray-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <span>View Relevant Work</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: WHO IT IS FOR */}
      <section className="py-16 bg-[#07090e] border-y border-white/[0.06] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 text-left">
            <span className="text-xs font-mono tracking-widest uppercase text-gray-500 font-semibold block mb-2">
              TARGET AUDIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whoItIsFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left"
              >
                <div className="p-1 rounded-full bg-blue-500/10 text-blue-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-sans text-gray-300 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-blue-400 font-semibold block mb-2">
            SOLUTION ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            What We Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.whatWeBuild.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: WHAT IS INCLUDED */}
      <section className="py-20 bg-[#07090e] border-y border-white/[0.06] mb-24 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-semibold block mb-2">
              EVERY PROJECT INCLUDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Deliverables & Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
              >
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-300 font-sans leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TYPICAL PROJECT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-400 font-semibold block mb-2">
            EXECUTION TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Typical Project Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-3"
            >
              <div className="text-xs font-mono font-bold text-blue-400">
                STEP {step.step}
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: TECH STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-gray-500 font-semibold block mb-1">
              PRODUCTION STACK
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Modern Technologies We Rely On
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-blue-400 font-semibold">
            TRANSPARENCY & CLARITY
          </span>
          <h2 className="text-3xl font-display font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-display font-semibold text-base text-gray-200">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-sm text-gray-400 font-sans leading-relaxed border-t border-white/[0.04]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
