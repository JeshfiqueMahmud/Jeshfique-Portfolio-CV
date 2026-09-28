import React, { useState } from 'react';
import { NavRoute } from './types';
import { Navbar } from './components/Navbar';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { OpcodeTerminal } from './components/OpcodeTerminal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { FluidBackground } from './components/FluidBackground';
import { PROFILE_DATA } from './data/portfolioData';
import { Github, Mail, Phone, MapPin, Terminal, FileText, Heart, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<NavRoute>('home');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const renderRoute = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onRouteChange={setCurrentRoute}
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenContact={() => setContactOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />
        );
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      default:
        return (
          <HomePage
            onRouteChange={setCurrentRoute}
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenContact={() => setContactOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Interactive three-fluid-fx Background Layer */}
      <FluidBackground opacity={0.7} />

      {/* Subtle Background Glow Spheres */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Persistent Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={setCurrentRoute}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content Container with Route Transitions */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-20 relative z-10">
        <PageTransition key={currentRoute}>
          {renderRoute()}
        </PageTransition>
      </main>

      {/* Interactive Modals */}
      <OpcodeTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span>{PROFILE_DATA.name}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Blockchain & C++ Specialist | Bitcoin Core Architecture | Multimodal AI
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <button
              onClick={() => setTerminalOpen(true)}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Opcode Terminal</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setResumeOpen(true)}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full CV</span>
            </button>
            <span>•</span>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 font-mono text-center md:text-right">
            © {new Date().getFullYear()} Jeshfique Mahmud. Built with Three.js & Tailwind.
          </p>

        </div>
      </footer>

    </div>
  );
}
