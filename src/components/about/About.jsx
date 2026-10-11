import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Monitor, ShieldCheck, Cpu, Code2, Workflow } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const corePillars = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description:
      'Crafting clean, responsive user interfaces in React. Focus on intuitive layouts, component modularity, clear form validation, and snappy state handling.',
  },
  {
    icon: Server,
    title: 'Backend & REST APIs',
    description:
      'Engineering organized Node.js and Express backend servers with clear route separation, input sanitization, middleware chains, and predictable JSON APIs.',
  },
  {
    icon: Database,
    title: 'Database Design & SQL',
    description:
      'Designing normalized relational schemas (3NF) in MySQL with foreign key constraints, indexing, and ACID transactions to ensure data consistency.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Business Logic',
    description:
      'Implementing stateless JWT authentication, salted bcrypt password hashing, and role-based permissions (RBAC) across full enterprise workflows.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="01 // Profile"
          title="Engineering Software for Business Realities"
          subtitle="Combining Information Systems theory with practical full-stack engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  Full-Stack Software Developer
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  Information Systems Student
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Summary Pill Row */}
            <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <span className="text-slate-400 block text-[11px]">Primary Focus</span>
                <span className="text-white font-medium">Business Applications</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <span className="text-slate-400 block text-[11px]">Backend RDBMS</span>
                <span className="text-emerald-400 font-medium">MySQL & Node/Express</span>
              </div>
            </div>
          </motion.div>

          {/* Right Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
