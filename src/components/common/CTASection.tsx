import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onNavigate: (path: string) => void;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  onNavigate,
  title = "Have an idea? Let's build it.",
  subtitle = "Tell us what you're trying to build. We'll help turn the idea into a practical, high-performance digital solution.",
  badge = "START A CONVERSATION"
}) => {
  return (
    <section className="py-24 relative bg-[#07090e] overflow-hidden border-t border-white/[0.08]" id="cta-section">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-blue-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto">
            {title.includes("Let's build it.") ? (
              <>
                Have an idea?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Let's build it.
                </span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all cursor-pointer"
              id="cta-start-project-btn"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/916367207775"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-gray-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-gray-400 font-sans">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct engineer consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>No obligation or aggressive sales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
