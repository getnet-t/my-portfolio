import React from 'react';
import { ArrowUp, Terminal, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080e] pt-12 pb-10 text-slate-400 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">

          {/* Developer identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>

            <div>
              <span className="text-white font-semibold font-sans block text-sm">
                {personalInfo.name}
              </span>
              <span className="text-slate-400 text-[11px]">
                {personalInfo.role} • Information Systems
              </span>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href={personalInfo.links.github || undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (!personalInfo.links.github) {
                  event.preventDefault();
                  alert('Add your GitHub URL in portfolioData.js first.');
                }
              }}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-emerald-400 border border-white/[0.06] transition-colors"
              title="Open GitHub Profile"
              aria-label="Open GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.links.linkedin || undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (!personalInfo.links.linkedin) {
                  event.preventDefault();
                  alert('Add your LinkedIn URL in portfolioData.js first.');
                }
              }}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-400 border border-white/[0.06] transition-colors"
              title="Open LinkedIn Profile"
              aria-label="Open LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors cursor-pointer flex items-center gap-1.5"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Copyright and technology stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, Vite, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
