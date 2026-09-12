import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Mockup } from '../Mockups';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Maximize2,
  X,
  CheckCircle2,
  ChevronRight,
  MousePointerClick,
  Compass,
  Square,
  Box
} from 'lucide-react';

type MockupType = 'fitfuel' | 'khubkhao' | 'eduflow' | 'gharkharch';
type ViewMode = '3d' | 'flat' | 'drift';

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
    borderAccent: 'border-orange-500/60',
    glowAccent: 'rgba(249, 115, 22, 0.35)',
    icon: '🏋️‍♂️'
  },
  {
    id: 'khubkhao',
    title: 'KhubKhao Dining',
    tag: 'QR Menu & Table Booking',
    url: 'khubkhao-dining.in',
    accent: 'text-amber-400',
    borderAccent: 'border-amber-500/60',
    glowAccent: 'rgba(217, 119, 6, 0.35)',
    icon: '🍽️'
  },
  {
    id: 'eduflow',
    title: 'EduFlow Academy',
    tag: 'AI Study Companion',
    url: 'eduflow-ai.edu',
    accent: 'text-indigo-400',
    borderAccent: 'border-indigo-500/60',
    glowAccent: 'rgba(99, 102, 241, 0.4)',
    icon: '🎓'
  },
  {
    id: 'gharkharch',
    title: 'GharKharch Ledger',
    tag: 'Fintech Expense Tracker',
    url: 'gharkharch.app',
    accent: 'text-teal-400',
    borderAccent: 'border-teal-500/60',
    glowAccent: 'rgba(20, 184, 166, 0.35)',
    icon: '💳'
  }
];

export const HeroVisual: React.FC = () => {
  const [activeProject, setActiveProject] = useState<MockupType>('fitfuel');
  const [hoveredProject, setHoveredProject] = useState<MockupType | null>(null);
  const [modalProject, setModalProject] = useState<MockupType | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('3d');
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic 3D Mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 140, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Dynamic container tilts based on mouse position
  const dynamicRotateX = useTransform(springY, [-0.5, 0.5], [11, 1]);
  const dynamicRotateY = useTransform(springX, [-0.5, 0.5], [-16, 2]);

  // Light sheen reflection coordinates
  const sheenX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || viewMode === 'flat') return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredProject(null);
  };

  const currentMeta = PROJECTS.find(p => p.id === activeProject) || PROJECTS[0];

  // Helper to determine depth translateZ for each window
  const getWindowZ = (id: MockupType, baseLayerZ: number) => {
    if (viewMode === 'flat') return activeProject === id ? 30 : 0;
    if (activeProject === id) return 75; // Pops forward prominently
    if (hoveredProject === id) return baseLayerZ + 35; // Hover lift
    return baseLayerZ;
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto select-none" 
      id="hero-floating-showcase"
    >
      {/* Dynamic ambient background glow that responds to active project color */}
      <motion.div 
        animate={{
          boxShadow: `0 0 100px ${currentMeta.glowAccent}`,
        }}
        transition={{ duration: 0.8 }}
        className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-3xl blur-3xl opacity-70 pointer-events-none transition-all duration-700" 
      />

      {/* Decorative neon accent ring */}
      <div className="hidden lg:block absolute -top-10 -right-10 w-72 h-72 rounded-full border border-sky-500/15 shadow-[0_0_60px_rgba(14,165,233,0.08)] pointer-events-none animate-pulse" />

      {/* Quick Project Switcher Pill Bar & 3D Controls */}
      <div className="relative z-30 mb-4 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
        {/* Project Selector Pills */}
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

        {/* 3D Perspective Controls & Expand Demo */}
        <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-white/10">
          {/* 3D View Mode Toggle */}
          <button
            onClick={() => setViewMode(prev => prev === '3d' ? 'flat' : prev === 'flat' ? 'drift' : '3d')}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[10px] font-mono text-gray-300 hover:text-white transition-colors cursor-pointer"
            title={`Current View: ${viewMode.toUpperCase()}. Click to switch angle`}
            id="toggle-3d-perspective-mode"
          >
            {viewMode === '3d' && <Box className="w-3 h-3 text-sky-400" />}
            {viewMode === 'flat' && <Square className="w-3 h-3 text-emerald-400" />}
            {viewMode === 'drift' && <Compass className="w-3 h-3 text-purple-400" />}
            <span className="hidden sm:inline uppercase font-bold text-[10px]">
              {viewMode === '3d' ? '3D Tilt' : viewMode === 'flat' ? 'Front' : 'Drift'}
            </span>
          </button>

          {/* Expand Full Interactive Demo Modal */}
          <button
            onClick={() => setModalProject(activeProject)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-[10px] font-mono text-blue-400 shrink-0 cursor-pointer transition-colors"
            title="Open interactive preview"
            id="hero-expand-demo-btn"
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline font-semibold">EXPAND DEMO</span>
            <span className="sm:hidden font-semibold">EXPAND</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          UNIFIED OVERLAPPING FLOATING 3D WINDOWS STACK
          Features multi-plane Z-space depth, spring parallax, and interactive layers
      ========================================================================= */}
      <motion.div 
        className="relative h-[440px] sm:h-[490px] lg:h-[520px] w-full overflow-visible" 
        id="floating-mockups-stack"
        style={{ 
          perspective: 1200,
          transformStyle: 'preserve-3d',
          rotateX: viewMode === 'flat' ? 0 : dynamicRotateX,
          rotateY: viewMode === 'flat' ? 0 : dynamicRotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      >
        
        {/* WINDOW 1: FitFuel Nutrition (Top-Left) */}
        <motion.div
          className={`absolute w-[82%] sm:w-[75%] lg:w-[72%] h-[245px] sm:h-[285px] lg:h-[315px] top-0 left-0 rounded-xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
            activeProject === 'fitfuel'
              ? 'z-30 shadow-[0_30px_70px_rgba(249,115,22,0.35)] border-2 border-orange-500/70'
              : 'z-10 opacity-80 hover:opacity-100 shadow-2xl border border-white/15'
          }`}
          animate={{
            y: viewMode === 'drift' 
              ? [0, -14, 0] 
              : activeProject === 'fitfuel' ? [0, -8, 0] : [0, -5, 0],
            z: getWindowZ('fitfuel', 5),
            rotateX: viewMode === 'flat' ? 0 : activeProject === 'fitfuel' ? 2 : 5,
            rotateY: viewMode === 'flat' ? 0 : activeProject === 'fitfuel' ? -3 : -8,
            scale: activeProject === 'fitfuel' ? 1.03 : hoveredProject === 'fitfuel' ? 1.015 : 1,
          }}
          transition={{
            y: { repeat: Infinity, duration: 5.8, ease: 'easeInOut' },
            z: { type: 'spring', stiffness: 260, damping: 24 },
            scale: { duration: 0.3 },
            rotateX: { duration: 0.35 },
            rotateY: { duration: 0.35 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('fitfuel')}
          onMouseEnter={() => setHoveredProject('fitfuel')}
          id="floating-window-fitfuel"
        >
          <div className="w-full h-full relative">
            <Mockup type="fitfuel" interactive={activeProject === 'fitfuel'} />
            
            {/* Dynamic Glass Reflection Sheen */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-25 opacity-20"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 45%, rgba(255,255,255,0.05) 100%)`,
              }}
            />

            {activeProject !== 'fitfuel' && (
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent z-20 cursor-pointer flex items-end justify-end p-3 transition-colors">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/70 text-orange-300 border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to focus
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* WINDOW 2: KhubKhao Dining (Top-Right) */}
        <motion.div
          className={`absolute w-[80%] sm:w-[74%] lg:w-[70%] h-[240px] sm:h-[280px] lg:h-[310px] top-6 sm:top-7 lg:top-8 right-0 rounded-xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
            activeProject === 'khubkhao'
              ? 'z-30 shadow-[0_30px_70px_rgba(217,119,6,0.35)] border-2 border-amber-500/70'
              : 'z-15 opacity-80 hover:opacity-100 shadow-2xl border border-white/15'
          }`}
          animate={{
            y: viewMode === 'drift' 
              ? [0, 14, 0] 
              : activeProject === 'khubkhao' ? [0, 8, 0] : [0, 5, 0],
            z: getWindowZ('khubkhao', -15),
            rotateX: viewMode === 'flat' ? 0 : activeProject === 'khubkhao' ? 3 : 6,
            rotateY: viewMode === 'flat' ? 0 : activeProject === 'khubkhao' ? 3 : 8,
            scale: activeProject === 'khubkhao' ? 1.03 : hoveredProject === 'khubkhao' ? 1.015 : 1,
          }}
          transition={{
            y: { repeat: Infinity, duration: 6.6, ease: 'easeInOut' },
            z: { type: 'spring', stiffness: 260, damping: 24 },
            scale: { duration: 0.3 },
            rotateX: { duration: 0.35 },
            rotateY: { duration: 0.35 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('khubkhao')}
          onMouseEnter={() => setHoveredProject('khubkhao')}
          id="floating-window-khubkhao"
        >
          <div className="w-full h-full relative">
            <Mockup type="khubkhao" interactive={activeProject === 'khubkhao'} />
            
            {/* Dynamic Glass Reflection Sheen */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-25 opacity-20"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 45%, rgba(255,255,255,0.05) 100%)`,
              }}
            />

            {activeProject !== 'khubkhao' && (
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent z-20 cursor-pointer flex items-end justify-end p-3 transition-colors">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/70 text-amber-300 border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to focus
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* WINDOW 3: EduFlow Academy (Bottom-Left / Foreground) */}
        <motion.div
          className={`absolute w-[84%] sm:w-[78%] lg:w-[74%] h-[250px] sm:h-[290px] lg:h-[325px] bottom-10 sm:bottom-12 lg:bottom-14 left-2 sm:left-4 lg:left-6 rounded-xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
            activeProject === 'eduflow'
              ? 'z-30 shadow-[0_30px_70px_rgba(99,102,241,0.4)] border-2 border-indigo-500/70'
              : 'z-20 opacity-85 hover:opacity-100 shadow-2xl border border-white/15'
          }`}
          animate={{
            y: viewMode === 'drift' 
              ? [0, -12, 0] 
              : activeProject === 'eduflow' ? [0, -9, 0] : [0, -6, 0],
            z: getWindowZ('eduflow', 15),
            rotateX: viewMode === 'flat' ? 0 : activeProject === 'eduflow' ? 2 : 4,
            rotateY: viewMode === 'flat' ? 0 : activeProject === 'eduflow' ? -2 : -5,
            scale: activeProject === 'eduflow' ? 1.03 : hoveredProject === 'eduflow' ? 1.015 : 1,
          }}
          transition={{
            y: { repeat: Infinity, duration: 5.2, ease: 'easeInOut' },
            z: { type: 'spring', stiffness: 260, damping: 24 },
            scale: { duration: 0.3 },
            rotateX: { duration: 0.35 },
            rotateY: { duration: 0.35 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('eduflow')}
          onMouseEnter={() => setHoveredProject('eduflow')}
          id="floating-window-eduflow"
        >
          <div className="w-full h-full relative">
            <Mockup type="eduflow" interactive={activeProject === 'eduflow'} />
            
            {/* Dynamic Glass Reflection Sheen */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-25 opacity-20"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 45%, rgba(255,255,255,0.05) 100%)`,
              }}
            />

            {activeProject !== 'eduflow' && (
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent z-20 cursor-pointer flex items-end justify-end p-3 transition-colors">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/70 text-indigo-300 border border-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to focus
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* WINDOW 4: GharKharch Ledger (Bottom-Right) */}
        <motion.div
          className={`absolute w-[80%] sm:w-[74%] lg:w-[70%] h-[240px] sm:h-[280px] lg:h-[310px] bottom-2 sm:bottom-4 lg:bottom-6 right-0 sm:right-2 lg:right-4 rounded-xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
            activeProject === 'gharkharch'
              ? 'z-30 shadow-[0_30px_70px_rgba(20,184,166,0.35)] border-2 border-teal-500/70'
              : 'z-10 opacity-80 hover:opacity-100 shadow-2xl border border-white/15'
          }`}
          animate={{
            y: viewMode === 'drift' 
              ? [0, 12, 0] 
              : activeProject === 'gharkharch' ? [0, 8, 0] : [0, 5, 0],
            z: getWindowZ('gharkharch', -25),
            rotateX: viewMode === 'flat' ? 0 : activeProject === 'gharkharch' ? 2 : 4,
            rotateY: viewMode === 'flat' ? 0 : activeProject === 'gharkharch' ? 4 : 8,
            scale: activeProject === 'gharkharch' ? 1.03 : hoveredProject === 'gharkharch' ? 1.015 : 1,
          }}
          transition={{
            y: { repeat: Infinity, duration: 6.4, ease: 'easeInOut' },
            z: { type: 'spring', stiffness: 260, damping: 24 },
            scale: { duration: 0.3 },
            rotateX: { duration: 0.35 },
            rotateY: { duration: 0.35 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => setActiveProject('gharkharch')}
          onMouseEnter={() => setHoveredProject('gharkharch')}
          id="floating-window-gharkharch"
        >
          <div className="w-full h-full relative">
            <Mockup type="gharkharch" interactive={activeProject === 'gharkharch'} />
            
            {/* Dynamic Glass Reflection Sheen */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-25 opacity-20"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 45%, rgba(255,255,255,0.05) 100%)`,
              }}
            />

            {activeProject !== 'gharkharch' && (
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent z-20 cursor-pointer flex items-end justify-end p-3 transition-colors">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/70 text-teal-300 border border-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to focus
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Centered Floating Tooltip Pill (Interactive prompt) */}
        <motion.div 
          onClick={() => setModalProject(activeProject)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full bg-black/90 hover:bg-black/95 border border-white/25 text-gray-200 text-xs sm:text-sm font-mono shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
          id="floating-tooltip-pill"
          style={{ transform: 'translateZ(90px) translateX(-50%)' }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <span>Click on any window to inspect and interact!</span>
        </motion.div>
      </motion.div>

      {/* Bottom Information Sub-strip with live status indicators */}
      <div className="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-medium text-gray-300">Live Client Systems</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-gray-500">Active:</span>
          <span className={`font-semibold ${currentMeta.accent}`}>
            {currentMeta.title}
          </span>
        </div>
      </div>

      {/* =========================================================================
          FULL-SCREEN / EXPANDED INTERACTIVE INSPECTION MODAL
          Allows users to test the full live app mockup without boundary constraints
      ========================================================================= */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl h-[85vh] max-h-[750px] bg-slate-950 rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
              id="mockup-inspection-modal"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                    <span className="text-emerald-400 text-[10px]">🔒</span>
                    <span>{PROJECTS.find(p => p.id === modalProject)?.url}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 mr-2">
                    {PROJECTS.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => setModalProject(proj.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          modalProject === proj.id
                            ? 'bg-blue-600 text-white font-bold shadow'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {proj.icon} <span className="hidden sm:inline">{proj.title.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setModalProject(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Canvas */}
              <div className="flex-1 overflow-hidden relative">
                <Mockup type={modalProject} interactive={true} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
