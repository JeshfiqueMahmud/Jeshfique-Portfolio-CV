import React from 'react';
import { motion } from 'motion/react';
import { TypewriterText } from '../components/TypewriterText';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { InteractiveAvatar } from '../components/InteractiveAvatar';
import { PROFILE_DATA, PROJECTS_DATA } from '../data/portfolioData';
import {
  Boxes,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Brain,
  Github,
  Mail,
  Award,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { NavRoute } from '../types';

interface HomePageProps {
  onRouteChange: (route: NavRoute) => void;
  onOpenTerminal: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onOpenTerminal,
  onOpenContact,
  onOpenResume,
}) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SMC Labs — Bitcoin Core Architecture</span>
            </div>

            {/* Main Animated Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-slate-100">{PROFILE_DATA.name}</span>
              </h1>

              <div className="text-xl sm:text-3xl font-extrabold h-12 flex items-center">
                <TypewriterText words={PROFILE_DATA.subtitles} />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              Specialized in low-level <strong className="text-amber-300 font-semibold">C++ Bitcoin Core interpreter modification</strong>, custom opcode execution, SegWit validation, and <strong className="text-emerald-300 font-semibold">multimodal transformer AI architectures</strong>. Graduate from North South University with high-impact software engineering expertise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onRouteChange('projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-emerald-400 text-sm font-mono font-medium transition-all shadow-md hover:border-emerald-500/40"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch Opcode CLI</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">{stat.label}</span>
                  <span className="text-sm font-bold text-amber-300 block">{stat.value}</span>
                  <span className="text-[11px] text-slate-400 truncate block mt-0.5">{stat.detail}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Interactive 360-Degree Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
          >
            <InteractiveAvatar />
          </motion.div>

        </div>
      </section>

      {/* Highlights / Specializations */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Core Competency Pillars
            </h2>
            <p className="text-xs text-slate-400 font-mono">Specialized technical focus areas in C++, Bitcoin Core & Artificial Intelligence</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: Bitcoin Core & C++ */}
          <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all group hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Bitcoin Core & Systems C++
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
              Deep experience modifying Bitcoin Core interpreter behavior inside <code className="text-amber-300 font-mono">EvalScript/VerifyScript</code>. Author of custom unlocking logic using <code className="text-amber-300 font-mono">OP_SHA256</code>, SegWit, and compact block networking.
            </p>
            <span className="text-[11px] text-amber-400 font-mono inline-flex items-center gap-1">
              SMC Labs Architecture →
            </span>
          </div>

          {/* Pillar 2: Multimodal Deep Learning */}
          <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/40 transition-all group hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Multimodal AI & Transformers
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
              Pioneered fake news classification combining fine-tuned <strong className="text-slate-100">BERT</strong> (text) and <strong className="text-slate-100">ResNeXt-50</strong> (vision) deep learning feature fusion deployed on Streamlit.
            </p>
            <span className="text-[11px] text-emerald-400 font-mono inline-flex items-center gap-1">
              Capstone Thesis (NSU) →
            </span>
          </div>

          {/* Pillar 3: AI-Assisted Full-Stack & Systems */}
          <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all group hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              AI Automation & Full-Stack
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
              Production web applications built with Claude Code, Next.js, TypeScript, Sanity headless CMS, Resend API, and distributed TCP socket coordinator architectures.
            </p>
            <span className="text-[11px] text-indigo-400 font-mono inline-flex items-center gap-1">
              Production Solutions →
            </span>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Banner */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Engineering Highlights</h2>
            <p className="text-xs text-slate-400 font-mono">Select projects across AI Automation, Bitcoin Core, Deep Learning & Networking</p>
          </div>
          <button
            onClick={() => onRouteChange('projects')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>View All ({PROJECTS_DATA.length}) Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.filter((p) => p.featured).slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => onRouteChange('projects')}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all cursor-pointer group space-y-4 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider">
                    {project.badge || project.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-slate-400 shrink-0">
                  {project.period}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed">
                {project.description[0]}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tools.slice(0, 5).map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-[11px] font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Opcode CLI Callout Banner */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
            <Terminal className="w-3.5 h-3.5" /> Interactive C++ Bitcoin Sandbox
          </div>
          <h3 className="text-xl font-bold text-white">Test Bitcoin Core Opcodes Live</h3>
          <p className="text-xs text-slate-300 max-w-xl font-sans">
            Simulate EvalScript execution stack with <code className="text-emerald-300 font-mono">OP_DUP</code>, <code className="text-emerald-300 font-mono">OP_HASH256</code>, <code className="text-emerald-300 font-mono">OP_CHECKSIG</code>, and custom SegWit witness verification.
          </p>
        </div>

        <button
          onClick={onOpenTerminal}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono shrink-0 shadow-lg shadow-emerald-500/20 transition-all"
        >
          Open Opcode Terminal →
        </button>
      </section>

    </div>
  );
};
