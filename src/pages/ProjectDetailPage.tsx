import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Clock, 
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Code2
} from 'lucide-react';
import { getProjectById, PROJECTS, ProjectItem } from '../data/projectsData';
import { Mockup } from '../components/Mockups';
import { CTASection } from '../components/common/CTASection';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onNavigate }) => {
  const project = getProjectById(projectId) || PROJECTS[0];

  // Find next project index
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-left">
        <button
          onClick={() => onNavigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </button>
      </div>

      {/* Project Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="space-y-5 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-gray-400">
              Completed in {project.duration}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-blue-400 font-display font-medium">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            {project.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/20 hover:opacity-95 transition-all"
            >
              <span>Launch Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <span>Build Similar Solution</span>
            </button>
          </div>
        </div>
      </section>

      {/* Project Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
              Client Partner
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">
              {project.client}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
              Industry
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">
              {project.categoryLabel}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
              Engineering Time
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">
              {project.duration}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
              Deployment
            </span>
            <span className="text-sm sm:text-base font-semibold text-emerald-400">
              Live & Scaled
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Live Preview Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE WORKING SIMULATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Interactive Prototype Sandbox
            </h2>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Interact directly with this live build module below.
            </p>
          </div>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:underline"
          >
            <span>Open in Full Screen Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Live Mockup Component */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e] p-4 sm:p-6 shadow-2xl overflow-hidden">
          <Mockup type={project.mockupKey} interactive={true} />
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Challenge */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400">
              <Target className="w-4 h-4" />
              <span className="uppercase tracking-wider">The Challenge</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              What Needed Solving
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-wider">The Solution</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Engineering Architecture
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Key Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
              <Layers className="w-4 h-4" />
              <span className="uppercase tracking-wider">Engineered Capabilities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Key Project Highlights
            </h3>

            <div className="space-y-4 pt-2">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5"
                >
                  <div className="p-1 rounded-md bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-sans text-gray-300 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Outcomes (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Code2 className="w-4 h-4" />
                <span className="uppercase tracking-wider">Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact / Outcome Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span className="uppercase tracking-wider">Measurable Outcome</span>
              </div>
              <p className="text-sm sm:text-base font-sans text-gray-200 leading-relaxed font-medium">
                "{project.impact}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-gray-400 block mb-1">
              NEXT CASE STUDY
            </span>
            <h4 className="text-xl font-display font-bold text-white">
              {nextProject.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              {nextProject.categoryLabel}
            </p>
          </div>

          <button
            onClick={() => onNavigate(`/work/${nextProject.id}`)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>View Next Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
