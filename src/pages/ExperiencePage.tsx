import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { GraduationCap, Building2, BookOpen, Award, CheckCircle2, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-10 pb-16">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
          <GraduationCap className="w-3.5 h-3.5" /> Career Journey & Academic History
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Work Experience & Education
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl font-sans">
          A chronological vertical timeline highlighting roles at SMC Labs, capstone multimodal thesis research at North South University, academic mentoring, and educational achievements.
        </p>
      </div>

      {/* Animated Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-orange-500 before:to-indigo-600">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative group"
          >
            {/* Timeline Marker Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 transition-transform flex items-center justify-center shadow-md shadow-amber-500/30 z-10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 shadow-xl space-y-4 hover:-translate-y-1">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {exp.company}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-amber-400 mt-0.5">{exp.role}</p>
                </div>

                <div className="text-right font-mono text-xs text-slate-400 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 block text-slate-300 font-bold">
                    {exp.period}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center justify-end gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-amber-400" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Supervisor Note */}
              {exp.supervisor && (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                  🎓 {exp.supervisor}
                </div>
              )}

              {/* Description Bullets */}
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Skills Used */}
              <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
