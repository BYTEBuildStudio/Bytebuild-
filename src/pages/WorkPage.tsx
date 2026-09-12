import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Sparkles, Filter, Code2, CheckCircle2 } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/projectsData';
import { CTASection } from '../components/common/CTASection';

interface WorkPageProps {
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-apps' | 'ecommerce' | 'hospitality' | 'ai'>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-apps', label: 'Web Applications' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'hospitality', label: 'Hospitality & QR Menus' },
    { id: 'ai', label: 'AI & Education' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT BUILDS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Work that delivers<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              measurable business value.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            Every project below represents a real, engineered digital solution built to convert customers, streamline operations, and scale with the business.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
            >
              {/* Content Header */}
              <div className="p-8 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {project.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mb-4">
                    Client: {project.client}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Key feature bullets */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action bar */}
              <div className="p-6 sm:px-8 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/work/${project.id}`)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
