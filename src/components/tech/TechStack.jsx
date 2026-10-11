import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Database, Wrench, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { techStackData } from '../../data/portfolioData';

const categoryIcons = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const displayedGroups =
    selectedCategory === 'All'
      ? techStackData
      : techStackData.filter((group) => group.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="02 // Technical Skills"
          title="Practical Technologies I Build With"
          subtitle="Curated full-stack toolkit focused on high-performance web interfaces and transactional backend systems."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-400/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {displayedGroups.map((group) => {
                const Icon = categoryIcons[group.category] || Terminal;
                return (
                  <div key={group.category} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                          className="glass-card p-4 rounded-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.07] text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                            {skill.focus}
                          </p>
                          <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400/80 font-mono">
                            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                            <span>Verified in Projects</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
