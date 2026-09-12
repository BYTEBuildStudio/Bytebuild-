import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', compact = false }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border transition-all duration-500 select-none ${
        theme === 'light'
          ? 'bg-slate-200/70 border-slate-300/80 shadow-inner'
          : 'bg-white/[0.04] border-white/10 shadow-inner'
      } ${className}`}
      role="group"
      aria-label="Theme mode switcher"
      id="theme-switcher-control"
    >
      {/* Day Mode Button */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`relative flex items-center justify-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
          theme === 'light'
            ? 'text-amber-700 font-bold'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-pressed={theme === 'light'}
        aria-label="Activate Day mode"
        id="theme-day-btn"
      >
        {theme === 'light' && (
          <motion.div
            layoutId="active-theme-pill"
            className="absolute inset-0 rounded-full bg-white shadow-md border border-amber-500/20"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10 text-sm leading-none" role="img" aria-label="Sun">
          ☀️
        </span>
        {!compact && <span className="relative z-10 text-[11px] tracking-wide">Day</span>}
      </button>

      {/* Night Mode Button */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`relative flex items-center justify-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
          theme === 'dark'
            ? 'text-blue-400 font-bold'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={theme === 'dark'}
        aria-label="Activate Night mode"
        id="theme-night-btn"
      >
        {theme === 'dark' && (
          <motion.div
            layoutId="active-theme-pill"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 shadow-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10 text-sm leading-none" role="img" aria-label="Moon">
          🌙
        </span>
        {!compact && <span className="relative z-10 text-[11px] tracking-wide">Night</span>}
      </button>
    </div>
  );
};
