import React from 'react';
import { X, Download, FileText, Building2, GraduationCap, Award, BookOpen, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import { PROFILE_DATA, EXPERIENCE_DATA, SKILL_CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const aiProjects = PROJECTS_DATA.filter((p) => p.category === 'ai_automation' || p.id === 'cricket_ml_prediction');
  const otherProjects = PROJECTS_DATA.filter((p) => p.category !== 'ai_automation' && p.id !== 'cricket_ml_prediction');
  const workExperience = EXPERIENCE_DATA.filter((e) => e.id === 'smc_labs');
  const teachingExperience = EXPERIENCE_DATA.filter((e) => e.type === 'teaching');
  const thesisExperience = EXPERIENCE_DATA.filter((e) => e.type === 'thesis');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col text-slate-100">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Curriculum Vitae — Jeshfique Mahmud</h2>
              <span className="text-xs text-slate-400 font-mono">B.Sc. CSE | Blockchain & C++ Developer | AI & Full-Stack</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 bg-slate-900 font-sans text-xs text-slate-300 print:bg-white print:text-slate-900 print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5 print:border-slate-300 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-black text-white print:text-black tracking-tight">{PROFILE_DATA.name}</h1>
            <p className="text-amber-400 print:text-amber-700 font-medium text-xs sm:text-sm mt-1">{PROFILE_DATA.title}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-slate-400 print:text-slate-600 mt-2 font-mono text-[11px]">
              <span>{PROFILE_DATA.phone}</span>
              <span>•</span>
              <span>{PROFILE_DATA.email}</span>
              <span>•</span>
              <span>GITHUB: github.com/{PROFILE_DATA.github}</span>
              <span>•</span>
              <span>{PROFILE_DATA.location}</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50">
                <div className="flex justify-between font-bold text-slate-100 print:text-black">
                  <span>North South University</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">2021 – 2025</span>
                </div>
                <div className="text-slate-300 print:text-slate-700 font-medium">Bachelor of Science in Computer Science and Engineering</div>
                <div className="text-slate-500 print:text-slate-500 text-[11px] mt-0.5">Dhaka, Bangladesh</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50">
                <div className="flex justify-between font-bold text-slate-100 print:text-black">
                  <span>Scholastica PVT LTD</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">2016 – 2018</span>
                </div>
                <div className="text-slate-300 print:text-slate-700 font-medium">O’ Level and A Level</div>
                <div className="text-slate-500 print:text-slate-500 text-[11px] mt-0.5">Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> EXPERIENCE
            </h3>
            <div className="space-y-4">
              {workExperience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-2">
                  <div className="flex justify-between items-start font-bold text-slate-100 print:text-black">
                    <div>
                      <span className="text-sm font-bold text-white print:text-black">• {exp.company}</span>
                      <span className="font-normal text-slate-400 print:text-slate-600 ml-2">Dhaka, Bangladesh</span>
                      <div className="text-amber-400 print:text-amber-700 font-semibold text-xs mt-0.5">{exp.role}</div>
                    </div>
                    <span className="font-mono text-slate-400 print:text-slate-600 shrink-0 text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-800 leading-relaxed pl-1">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="text-[11px] leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AI & AUTOMATION PROJECTS */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> AI & AUTOMATION PROJECTS
            </h3>
            <div className="space-y-3.5">
              {aiProjects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-1.5">
                  <div className="flex justify-between items-start font-bold text-slate-100 print:text-black">
                    <div>
                      <span className="text-sm font-bold text-white print:text-black">• {proj.title}</span>
                      {proj.badge && (
                        <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 print:border print:text-black">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{proj.period}</span>
                  </div>
                  <div className="text-slate-400 print:text-slate-600 text-[11px] font-mono">
                    <strong className="text-slate-300 print:text-black font-semibold">Tools:</strong> {proj.tools.join(', ')}
                  </div>
                  {proj.githubUrl && (
                    <div className="text-amber-400 print:text-blue-600 text-[11px] font-mono">
                      GitHub Link: {proj.githubUrl.replace('https://github.com/', '')}
                    </div>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-800 pl-1">
                    {proj.description.map((d, idx) => (
                      <li key={idx} className="text-[11px] leading-relaxed">{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* THESIS */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> THESIS
            </h3>
            <div className="space-y-3">
              {thesisExperience.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-1.5">
                  <div className="flex justify-between items-start font-bold text-slate-100 print:text-black">
                    <span className="text-sm font-bold text-white print:text-black">• Multimodal Fake News Detection using Transformer Architectures</span>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 print:text-slate-600 text-[11px] font-mono">
                    <strong className="text-slate-300 print:text-black font-semibold">Tools:</strong> BERT, ResNeXt-50, PyTorch, OpenCV, Streamlit
                    <span className="ml-3 text-slate-500">North South University</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-800 pl-1">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="text-[11px] leading-relaxed">{bullet}</li>
                    ))}
                    {exp.supervisor && (
                      <li className="text-[11px] text-amber-400 print:text-amber-800 font-medium">{exp.supervisor}</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> PROJECTS
            </h3>
            <div className="space-y-3.5">
              {otherProjects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-1.5">
                  <div className="flex justify-between items-start font-bold text-slate-100 print:text-black">
                    <span className="text-sm font-bold text-white print:text-black">• {proj.title}</span>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{proj.period}</span>
                  </div>
                  <div className="text-slate-400 print:text-slate-600 text-[11px] font-mono">
                    <strong className="text-slate-300 print:text-black font-semibold">Tools:</strong> {proj.tools.join(', ')}
                    {proj.institution && <span className="ml-2 text-slate-500">{proj.institution}</span>}
                  </div>
                  {proj.githubUrl && (
                    <div className="text-amber-400 print:text-blue-600 text-[11px] font-mono">
                      GitHub Link: {proj.githubUrl.replace('https://github.com/', '')}
                    </div>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-800 pl-1">
                    {proj.description.map((d, idx) => (
                      <li key={idx} className="text-[11px] leading-relaxed">{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TEACHING EXPERIENCE */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> TEACHING EXPERIENCE
            </h3>
            <div className="space-y-3">
              {teachingExperience.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-1">
                  <div className="flex justify-between items-start font-bold text-slate-100 print:text-black">
                    <span className="text-sm font-bold text-white print:text-black">• {exp.role}</span>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-800 text-[11px] leading-relaxed">
                    {exp.description.join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-3">SKILLS</h3>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 space-y-2 text-[11px] leading-relaxed">
              <p><strong className="text-white print:text-black">• AI & LLM Tools:</strong> Claude Code, v0, Prompt Engineering, AI-Assisted Development, AutoGluon</p>
              <p><strong className="text-white print:text-black">• Programming Languages:</strong> Python, TypeScript, JavaScript, C, C++, Java, PHP, ARM Assembly</p>
              <p><strong className="text-white print:text-black">• Frameworks & Libraries:</strong> Next.js, React, Tailwind CSS, CodeIgniter, PyTorch, Transformers, TensorFlow, Scikit-Learn, XGBoost, Streamlit, OpenCV, NumPy, Pandas, Matplotlib</p>
              <p><strong className="text-white print:text-black">• APIs & Integrations:</strong> REST APIs, JSON-RPC, Resend Email API, Sanity Headless CMS (GROQ), Form Validation, Rate Limiting, Authentication</p>
              <p><strong className="text-white print:text-black">• Database Systems:</strong> MySQL, SQLite</p>
              <p><strong className="text-white print:text-black">• Tools & Platforms:</strong> Git, GitHub, Vercel, Docker, Postman, Linux, VS Code, XAMPP, Google Colab, Kaggle, Overleaf (LaTeX)</p>
              <p><strong className="text-white print:text-black">• Blockchain & Systems:</strong> Bitcoin Core, Regtest, RPC, TCP Sockets, Linux Debugging</p>
              <p><strong className="text-white print:text-black">• Soft Skills:</strong> Hard-working, Eye for Detail, Self-Learner, Team Player, Analytical Thinker, Problem Solver, Quick Learner</p>
            </div>
          </div>

          {/* LANGUAGES */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-widest font-mono mb-2">LANGUAGES</h3>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:border-slate-200 print:bg-slate-50 flex flex-wrap gap-x-8 gap-y-2 text-[11px]">
              <div><strong className="text-white print:text-black">• Bengali:</strong> Native</div>
              <div><strong className="text-white print:text-black">• English:</strong> Fluent (IELTS 7.5 equivalent)</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
