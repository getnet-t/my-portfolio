import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Process', href: '#process' },
  { name: 'GitHub', href: '#github' },
];

export default function Navbar({ onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'capabilities', 'process', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080a0f]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-sm shadow-emerald-500/10">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                dev<span className="text-emerald-400">.</span>sys
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f1422]/70 border border-white/[0.06] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-sm shadow-black/50'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV / Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium text-black bg-emerald-400 hover:bg-emerald-300 font-semibold shadow-sm shadow-emerald-400/20 hover:shadow-emerald-400/30 transition-all cursor-pointer"
            >
              <span>Contact</span>
              <Send className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCvModal}
              aria-label="View CV"
              className="p-2 text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-mono">CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#090c14]/95 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/[0.08] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/[0.08] grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>CV / Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-black bg-emerald-400 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
