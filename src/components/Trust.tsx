import React from 'react';
import { 
  Utensils, 
  Dumbbell, 
  GraduationCap, 
  Rocket, 
  Store, 
  UserCheck, 
  Briefcase 
} from 'lucide-react';

export const Trust: React.FC = () => {
  const categories = [
    { name: 'Restaurants', icon: Utensils, color: 'text-amber-500', bg: 'from-amber-500/10 to-transparent' },
    { name: 'Gyms & Fitness', icon: Dumbbell, color: 'text-orange-500', bg: 'from-orange-500/10 to-transparent' },
    { name: 'Coaching Institutes', icon: GraduationCap, color: 'text-blue-500', bg: 'from-blue-500/10 to-transparent' },
    { name: 'Startups & Tech', icon: Rocket, color: 'text-purple-500', bg: 'from-purple-500/10 to-transparent' },
    { name: 'Local Businesses', icon: Store, color: 'text-emerald-500', bg: 'from-emerald-500/10 to-transparent' },
    { name: 'Personal Brands', icon: UserCheck, color: 'text-sky-500', bg: 'from-sky-500/10 to-transparent' },
    { name: 'Small & Medium Biz', icon: Briefcase, color: 'text-indigo-500', bg: 'from-indigo-500/10 to-transparent' },
  ];

  return (
    <section 
      id="trust-section" 
      className="py-12 bg-[#050505] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-mono tracking-[0.25em] uppercase text-gray-500 font-semibold">
          WE ENGINEER HIGH-CONVERTING DIGITAL EXPERIENCE FOR
        </p>
      </div>

      {/* Infinity Scrolling Marquee */}
      <div className="relative w-full flex items-center overflow-hidden" id="marquee-container">
        {/* Left Blur Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        {/* Right Blur Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Track (duplicating for seamless infinite loop) */}
        <div className="flex gap-4 animate-[marquee_25s_linear_infinite] whitespace-nowrap py-2" id="marquee-track">
          {[...categories, ...categories, ...categories].map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={index}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-white/10 transition-all duration-300 group select-none"
              >
                <div className={`p-2 rounded-xl bg-gradient-to-b ${cat.bg} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-5 h-5 ${cat.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`} />
                </div>
                <span className="text-sm font-sans font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
