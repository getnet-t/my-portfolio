import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitFork, Star, ExternalLink, Terminal, Code2, FolderGit2, Check, Copy } from 'lucide-react';
import { Github } from '../ui/Icons';
import SectionHeading from '../ui/SectionHeading';
import { githubShowcaseData, personalInfo } from '../../data/portfolioData';

export default function GithubSection({ onPlaceholderClick }) {
  const [copiedUrl, setCopiedUrl] = useState(null);

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <section id="github" className="py-20 md:py-28 relative bg-[#07090f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="06 // Code Repositories"
          title="Open-Source & System Repositories"
          subtitle="Clean codebase architecture with strict commit discipline, modular controllers, and normalized schemas."
        />

        {/* GitHub Highlight Overview Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl mb-8 border border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-white">
                <Github className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg">
                    GitHub Workspace
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Development
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 font-mono">
                  Full-Stack Repositories • Express APIs • Relational Schemas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
  href={personalInfo.links.github || undefined}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(event) => {
    if (!personalInfo.links.github) {
      event.preventDefault();
      alert('Please add your GitHub profile URL in portfolioData.js');
    }
  }}
  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white text-xs font-mono border border-white/[0.1] transition-all"
>
  <span>Visit GitHub Profile</span>
  <ExternalLink className="w-3.5 h-3.5" />
</a>
            </div>
          </div>

          {/* Activity Matrix Aesthetic */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Development Activity & Commits</span>
              </span>
              <span className="text-[11px] text-slate-500">Regular commits & updates</span>
            </div>

            {/* Micro grid simulating commit heatmap */}
            <div className="grid grid-cols-12 sm:grid-cols-24 lg:grid-cols-48 gap-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
              {Array.from({ length: 48 }).map((_, i) => {
                const intensities = [
                  'bg-white/[0.04]',
                  'bg-emerald-950/60',
                  'bg-emerald-800/80',
                  'bg-emerald-500/80',
                  'bg-emerald-400',
                ];
                // Deterministic activity pattern
                const level = (i * 7 + 3) % 5;
                return (
                  <div
                    key={i}
                    className={`h-3 rounded-sm ${intensities[level]} transition-colors hover:ring-1 hover:ring-white/40`}
                    title={`Activity day ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubShowcaseData.map((repo, idx) => (
            <motion.div
              key={repo.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/35 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {repo.stars}
                  </span>
                </div>
                <h4 className="text-white font-mono font-semibold text-sm mb-2 group-hover:text-emerald-300 transition-colors truncate">
                  {repo.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">
                    {repo.language}
                  </span>

                  <a
  href={repo.url || undefined}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(event) => {
    if (!repo.url) {
      event.preventDefault();
      alert('Please add this repository URL in portfolioData.js');
    }
  }}
  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-[11px]"
>
  <span>Inspect Code</span>
  <ExternalLink className="w-3 h-3" />
</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

