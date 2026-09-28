import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Briefcase, Github, ExternalLink, Star, Code2, Sparkles, X, ChevronRight } from 'lucide-react';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai_automation', label: 'AI & Automation' },
    { id: 'blockchain', label: 'Blockchain & C++' },
    { id: 'ai_ml', label: 'Machine Learning' },
    { id: 'networking', label: 'Distributed & Networks' },
    { id: 'web', label: 'Web & POS' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Staggered motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
          <Briefcase className="w-3.5 h-3.5" /> Software Portfolio & Research
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl font-sans">
          Hover over any card to reveal the interactive tech stack overlay and architecture details. Includes open-source C++ Bitcoin interpreter extensions, Transformer deep learning models, and POS web suites.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-md">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Staggered Animated Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-400/80 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Card Header */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-widest block mb-1">
                    {project.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/40 shrink-0">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-xs text-amber-300/80 font-mono italic">
                {project.subtitle}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                {project.description[0]}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-[11px] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Glassmorphism Slide-In Overlay */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
              <div className="space-y-3 overflow-y-auto max-h-[80%] pr-1">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-bold text-amber-300">{project.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">{project.period}</span>
                </div>

                {project.institution && (
                  <p className="text-[11px] text-slate-400 font-mono">
                    🏛️ {project.institution}
                  </p>
                )}

                {project.supervisor && (
                  <p className="text-[11px] text-emerald-400 font-mono">
                    👨‍🏫 {project.supervisor}
                  </p>
                )}

                <div className="space-y-1.5 text-xs text-slate-200 font-sans">
                  {project.description.map((bullet, idx) => (
                    <p key={idx} className="flex items-start gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>

                {project.architectureDetails && (
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                    <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold">Architecture Pipeline:</span>
                    {project.architectureDetails}
                  </div>
                )}
              </div>

              {/* Action Buttons in Hover Overlay */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-amber-400" />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveProject(project)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md"
                >
                  <span>Full Inspector</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-6 py-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{project.period}</span>
              <span className="text-amber-400 group-hover:underline flex items-center gap-1">
                Hover to inspect →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Inspector Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-700 p-6 space-y-5 text-slate-100 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase font-mono text-amber-400 font-bold">
                {activeProject.category.replace('_', ' ')}
              </span>
              <h2 className="text-xl font-bold text-white">{activeProject.title}</h2>
              <p className="text-xs text-slate-400 font-mono italic">{activeProject.subtitle}</p>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-sans leading-relaxed">
              <h4 className="font-bold text-slate-200 uppercase tracking-wider font-mono text-[11px]">Detailed Specifications:</h4>
              {activeProject.description.map((bullet, idx) => (
                <p key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {bullet}
                </p>
              ))}
            </div>

            {activeProject.architectureDetails && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 space-y-1">
                <span className="text-slate-400 text-[10px] uppercase font-bold font-sans block">System Pipeline:</span>
                <p>{activeProject.architectureDetails}</p>
              </div>
            )}

            <div className="pt-2 flex justify-between items-center border-t border-slate-800">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
