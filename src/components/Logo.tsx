import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32, withText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="bytebuild-logo-container">
      <div 
        className="relative flex items-center justify-center rounded-full overflow-hidden"
        style={{ width: size, height: size }}
        id="logo-icon-wrapper"
      >
        {/* Stylized premium SVG symbol matching the logo image exactly */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glossy metallic border bezel gradient */}
            <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="30%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="75%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Dark background inside the logo disc */}
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#051622" />
              <stop offset="70%" stopColor="#02080c" />
              <stop offset="100%" stopColor="#000205" />
            </radialGradient>

            {/* Bright cyan front-facing parts of the 3D emblem */}
            <linearGradient id="cyanFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#00b8d4" />
            </linearGradient>

            {/* Deep dark shaded parts of the 3D emblem fold */}
            <linearGradient id="cyanShadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004d61" />
              <stop offset="100%" stopColor="#001a24" />
            </linearGradient>

            {/* Glow and shadow filter for the inner emblem */}
            <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00ffff" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Background circular disc */}
          <circle cx="50" cy="50" r="47" fill="url(#bgGrad)" />

          {/* Outer glossy metallic ring bezel */}
          <circle cx="50" cy="50" r="47" stroke="url(#bezelGrad)" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="50" r="45.5" stroke="#00ffff" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

          {/* Inner ambient shadow circle */}
          <circle cx="50" cy="50" r="44" stroke="#000000" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />

          {/* The 3D Emblem Symbol */}
          <g filter="url(#emblemGlow)">
            {/* 1. Top Bar (Trapezoid, bright cyan) */}
            <polygon 
              points="36,28 58,28 47,39 36,39" 
              fill="url(#cyanFront)" 
            />

            {/* 2. Top Shadow Fold (Diamond, dark blue/cyan shadow) */}
            <polygon 
              points="58,28 68,39 58,50 47,39" 
              fill="url(#cyanShadow)" 
            />

            {/* 3. Middle Bar (Hexagon, bright cyan) */}
            <polygon 
              points="47,39 58,39 67,50 58,61 47,61 38,50" 
              fill="url(#cyanFront)" 
            />

            {/* 4. Bottom Shadow Fold (Diamond, dark blue/cyan shadow) */}
            <polygon 
              points="47,61 58,61 47,72 36,61" 
              fill="url(#cyanShadow)" 
            />

            {/* 5. Bottom Bar (Trapezoid, bright cyan) */}
            <polygon 
              points="36,61 47,61 58,72 36,72" 
              fill="url(#cyanFront)" 
            />
          </g>
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col leading-none" id="logo-text-wrapper">
          <span className="font-display text-lg font-bold tracking-wider text-white">
            BYTE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BUILD</span>
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-slate-400 mt-0.5">
            WE BUILD. YOU GROW.
          </span>
        </div>
      )}
    </div>
  );
};
