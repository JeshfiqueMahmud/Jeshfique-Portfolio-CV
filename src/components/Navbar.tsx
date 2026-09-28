import React, { useState, useEffect } from 'react';
import { NavRoute } from '../types';
import { Home, Award, Briefcase, GraduationCap, Terminal, FileText, Sparkles, Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  currentRoute: NavRoute;
  onRouteChange: (route: NavRoute) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenTerminal,
  onOpenResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY + 5 && currentScrollY > 60) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else if (currentScrollY < lastScrollY - 5 || currentScrollY <= 20) {
        setIsVisible(true); // Reveal navbar when scrolling up or near top
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: NavRoute; label: string; icon: React.ReactNode }[] = [
    { route: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { route: 'skills', label: 'Skills', icon: <Award className="w-4 h-4" /> },
    { route: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { route: 'experience', label: 'Experience', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'pt-2 sm:pt-3 pb-1' : 'pt-0 pb-0'}`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-amber-500/5'
            : 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}
        >
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => {
              onRouteChange('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div
              className={`relative rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all ${
                isScrolled ? 'w-8 h-8' : 'w-9 h-9'
              }`}
            >
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400 font-bold font-mono text-sm sm:text-base">
                JM
              </div>
            </div>
            <div>
              <span className="text-slate-100 font-bold text-sm sm:text-base tracking-tight group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                Jeshfique Mahmud
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono block">
                Blockchain & C++ | AI & Full-Stack
              </span>
            </div>
          </button>

          {/* Desktop Navigation Routes */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-slate-800/80 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => onRouteChange(item.route)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Opcode CLI Terminal, Resume, Contact */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all shadow-sm"
              title="Interactive Bitcoin Opcode Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>OP_CODE CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-md shadow-amber-500/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg text-emerald-400 bg-emerald-950/40 border border-emerald-500/30"
              title="Opcode CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <div className="bg-slate-950/95 border border-slate-800 rounded-2xl p-4 space-y-2 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => {
                      onRouteChange(item.route);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-amber-300 bg-amber-500/20 border border-amber-500/30'
                        : 'text-slate-300 bg-slate-900 border border-slate-800'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                View Resume
              </button>
              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
