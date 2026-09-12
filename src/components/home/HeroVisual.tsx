import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mockup } from '../Mockups';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Smartphone, 
  Laptop,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

type MockupType = 'fitfuel' | 'khubkhao' | 'eduflow' | 'gharkharch';

interface ProjectMeta {
  id: MockupType;
  title: string;
  tag: string;
  url: string;
  accent: string;
  borderAccent: string;
  glowAccent: string;
  icon: string;
}

const PROJECTS: ProjectMeta[] = [
  {
    id: 'fitfuel',
    title: 'FitFuel Nutrition',
    tag: 'E-Commerce & Wellness',
    url: 'fitfuel-nutrition.com',
    accent: 'text-orange-400',
    borderAccent: 'border-orange-500/40',
    glowAccent: 'from-orange-500/20 to-amber-500/10',
    icon: '🏋️‍♂️'
  },
  {
    id: 'khubkhao',
    title: 'KhubKhao Dining',
    tag: 'QR Menu & Table Booking',
    url: 'khubkhao-dining.in',
    accent: 'text-amber-400',
    borderAccent: 'border-amber-500/40',
    glowAccent: 'from-amber-500/20 to-orange-500/10',
    icon: '🍽️'
  },
  {
    id: 'eduflow',
    title: 'EduFlow Academy',
    tag: 'AI Study Companion',
    url: 'eduflow-ai.edu',
    accent: 'text-indigo-400',
    borderAccent: 'border-indigo-500/40',
    glowAccent: 'from-indigo-500/20 to-purple-500/10',
    icon: '🎓'
  },
  {
    id: 'gharkharch',
    title: 'GharKharch Ledger',
    tag: 'Fintech Expense Tracker',
    url: 'gharkharch.app',
    accent: 'text-teal-400',
    borderAccent: 'border-teal-500/40',
    glowAccent: 'from-teal-500/20 to-emerald-500/10',
    icon: '💳'
  }
];

export const HeroVisual: React.FC = () => {
  const [activeProject, setActiveProject] = useState<MockupType>('fitfuel');
  const { theme } = useTheme();

  const currentMeta = PROJECTS.find(p => p.id === activeProject) || PROJECTS[0];

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none" id="hero-floating-showcase">
      {/* Ambient background glow ring */}
      <div 
        className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-3xl blur-3xl opacity-70 pointer-events-none transition-all duration-700" 
      />

      {/* Decorative neon accent ring */}
      <div className="hidden lg:block absolute -top-10 -right-10 w-72 h-72 rounded-full border border-sky-500/15 shadow-[0_0_60px_rgba(14,165,233,0.08)] pointer-events-none animate-pulse" />

      {/* Quick Project Switcher Pill Bar */}
      <div className="relative z-30 mb-3 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1 min-w-max">
          {PROJECTS.map((proj) => {
            const isSelected = activeProject === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? theme === 'light'
                      ? 'text-slate-900 font-bold bg-white shadow-md border border-slate-200'
                      : 'text-white font-bold bg-white/10 shadow-md border border-white/15'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
                id={`project-tab-${proj.id}`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-showcase-tab"
                    className="absolute inset-0 rounded-xl bg-blue-500/10 border border-blue-500/30 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span>{proj.icon}</span>
                <span className="truncate">{proj.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Live operational badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>INTERACTIVE</span>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP: LAYERED 3D FLOATING WINDOWS CONCEPT (lg and above)
      ========================================================================= */}
      <div className="hidden lg:block relative h-[480px] w-full" id="floating-mockups-stack" style={{ perspective: 1200 }}>
        
        {/* WINDOW 1: FitFuel (Top-Left / Primary when active) */}
        <motion.div
          className={`absolute w-[78%] h-[370px] top-0 left-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
            activeProject === 'fitfuel'
              ? 'z-30 scale-[1.03] shadow-[0_25px_60px_rgba(249,115,22,0.25)] border-2 border-orange-500/50'
              : 'z-10 opacity-70 hover:opacity-95 hover:scale-[1.01] shadow-xl border border-white/10'
          }`}
          animate={{
            y: activeProject === 'fitfuel' ? [0, -10, 0] : [0, -6, 0],
            rotateX: activeProject === 'fitfuel' ? 4 : 8,
            rotateY: activeProject === 'fitfuel' ? -6 : -14,
          }}
          transition={{
            y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
            rotateX: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('fitfuel')}
          id="floating-window-fitfuel"
        >
          <div className="w-full h-full">
            <Mockup type="fitfuel" interactive={activeProject === 'fitfuel'} />
          </div>
        </motion.div>

        {/* WINDOW 2: KhubKhao (Top-Right) */}
        <motion.div
          className={`absolute w-[76%] h-[360px] top-6 right-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
            activeProject === 'khubkhao'
              ? 'z-30 scale-[1.03] shadow-[0_25px_60px_rgba(217,119,6,0.25)] border-2 border-amber-500/50'
              : 'z-15 opacity-70 hover:opacity-95 hover:scale-[1.01] shadow-xl border border-white/10'
          }`}
          animate={{
            y: activeProject === 'khubkhao' ? [0, 9, 0] : [0, 6, 0],
            rotateX: activeProject === 'khubkhao' ? 5 : 10,
            rotateY: activeProject === 'khubkhao' ? 5 : 12,
          }}
          transition={{
            y: { repeat: Infinity, duration: 6.8, ease: 'easeInOut' },
            rotateX: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('khubkhao')}
          id="floating-window-khubkhao"
        >
          <div className="w-full h-full">
            <Mockup type="khubkhao" interactive={activeProject === 'khubkhao'} />
          </div>
        </motion.div>

        {/* WINDOW 3: EduFlow (Bottom-Left) */}
        <motion.div
          className={`absolute w-[80%] h-[370px] bottom-4 left-6 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
            activeProject === 'eduflow'
              ? 'z-30 scale-[1.03] shadow-[0_25px_60px_rgba(99,102,241,0.28)] border-2 border-indigo-500/50'
              : 'z-20 opacity-75 hover:opacity-95 hover:scale-[1.01] shadow-2xl border border-white/10'
          }`}
          animate={{
            y: activeProject === 'eduflow' ? [0, -11, 0] : [0, -8, 0],
            rotateX: activeProject === 'eduflow' ? 3 : 6,
            rotateY: activeProject === 'eduflow' ? -4 : -8,
          }}
          transition={{
            y: { repeat: Infinity, duration: 5.4, ease: 'easeInOut' },
            rotateX: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('eduflow')}
          id="floating-window-eduflow"
        >
          <div className="w-full h-full">
            <Mockup type="eduflow" interactive={activeProject === 'eduflow'} />
          </div>
        </motion.div>

        {/* WINDOW 4: GharKharch (Bottom-Right) */}
        <motion.div
          className={`absolute w-[78%] h-[370px] bottom-0 right-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
            activeProject === 'gharkharch'
              ? 'z-30 scale-[1.03] shadow-[0_25px_60px_rgba(20,184,166,0.25)] border-2 border-teal-500/50'
              : 'z-15 opacity-70 hover:opacity-95 hover:scale-[1.01] shadow-xl border border-white/10'
          }`}
          animate={{
            y: activeProject === 'gharkharch' ? [0, 10, 0] : [0, 7, 0],
            rotateX: activeProject === 'gharkharch' ? 3 : 5,
            rotateY: activeProject === 'gharkharch' ? 6 : 14,
          }}
          transition={{
            y: { repeat: Infinity, duration: 6.2, ease: 'easeInOut' },
            rotateX: { duration: 0.4 },
            rotateY: { duration: 0.4 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('gharkharch')}
          id="floating-window-gharkharch"
        >
          <div className="w-full h-full">
            <Mockup type="gharkharch" interactive={activeProject === 'gharkharch'} />
          </div>
        </motion.div>

        {/* Interactive Instruction Pill */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-black/80 border border-white/10 text-gray-300 text-[11px] font-mono shadow-xl backdrop-blur flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>Click any floating window to interact live</span>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET: RESPONSIVE FOCUSED FLOATING WINDOW STAGE (< lg)
      ========================================================================= */}
      <div className="block lg:hidden relative w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full"
          >
            <Mockup type={activeProject} interactive={true} />
          </motion.div>
        </AnimatePresence>

        {/* Mobile quick indicator */}
        <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-black/80 backdrop-blur border border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-300 z-30">
          <span className="flex items-center gap-1.5">
            <span className="text-blue-400">{currentMeta.icon}</span>
            <span className="font-semibold">{currentMeta.title}</span>
          </span>
          <span className="text-gray-500">Tap tabs to switch demo</span>
        </div>
      </div>

      {/* Bottom Information Sub-strip */}
      <div className="mt-7 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-medium text-gray-300">Live Client Systems</span>
        </div>
        <span className="text-gray-400 font-sans">
          Engineered for Speed, SEO & High Conversion
        </span>
      </div>
    </div>
  );
};
