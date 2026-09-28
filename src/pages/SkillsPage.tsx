import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES, PROFILE_DATA } from '../data/portfolioData';
import { Award, Boxes, Code2, BrainCircuit, Globe, Wrench, Sparkles, Filter, CheckCircle2, Cpu, Database, UserCheck, Languages } from 'lucide-react';
import { SkillItem } from '../types';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Domains' },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.id, label: c.title })),
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai_llm':
        return <Sparkles className="w-5 h-5" />;
      case 'blockchain_systems':
        return <Boxes className="w-5 h-5" />;
      case 'languages':
        return <Code2 className="w-5 h-5" />;
      case 'frameworks_ml':
        return <BrainCircuit className="w-5 h-5" />;
      case 'apis_integrations':
        return <Cpu className="w-5 h-5" />;
      case 'database_systems':
        return <Database className="w-5 h-5" />;
      case 'tools_platforms':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Header Section */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
          <Award className="w-3.5 h-3.5" /> Technical Arsenal & Competencies
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Skills & Technical Expertise
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl font-sans">
          Hover over any card to experience interactive 3D scale inspection. Includes AI & LLM tooling (Claude Code, v0), Bitcoin Core interpreter architecture, C++ systems, deep learning transformers, REST/JSON-RPC APIs, and databases.
        </p>
      </div>

      {/* Domain Category Filter Tabs */}
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

      {/* Skill Grids Categorized */}
      <div className="space-y-10">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            
            {/* Category Title Header */}
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                {getCategoryIcon(category.id)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">{category.title}</h2>
                <span className="text-xs text-slate-400 font-mono">
                  {category.skills.length} core technical competencies
                </span>
              </div>
            </div>

            {/* Grid of Pop-out Interactive Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.08,
                    y: -6,
                    boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.25), 0 8px 10px -6px rgba(245, 158, 11, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  onClick={() => setActiveSkill(skill)}
                  className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-400/80 cursor-pointer transition-all duration-200 relative overflow-hidden group"
                >
                  {/* Subtle glowing accent background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex items-start justify-between gap-2 mb-2 relative z-10">
                    <div>
                      <h3 className="font-bold text-slate-100 group-hover:text-amber-300 text-sm transition-colors">
                        {skill.name}
                      </h3>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 mt-1 inline-block">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 group-hover:scale-110 transition-transform">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden my-2 border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors font-sans leading-tight relative z-10">
                    {skill.highlight}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Additional Competencies: Soft Skills & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/80">
        
        {/* Soft Skills Card */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Professional & Soft Skills</h3>
              <span className="text-xs text-slate-400 font-mono">Work ethic & collaboration</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROFILE_DATA.softSkills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Languages Card */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Languages</h3>
              <span className="text-xs text-slate-400 font-mono">Communication proficiency</span>
            </div>
          </div>
          <div className="space-y-3">
            {PROFILE_DATA.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs"
              >
                <span className="font-bold text-white">{lang.name}</span>
                <span className="font-mono text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Selected Skill Detail Modal if clicked */}
      {activeSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-900 rounded-2xl border border-slate-700 p-6 space-y-4 text-slate-100 shadow-2xl relative">
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 font-bold font-mono">
                {activeSkill.level}%
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{activeSkill.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{activeSkill.tag}</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              <strong className="text-amber-300">Technical Context:</strong> {activeSkill.highlight}. Tested in production / academic C++, Python & TypeScript environments.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveSkill(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
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
