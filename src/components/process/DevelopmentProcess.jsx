import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, FileCode2, Database, ShieldCheck, Rocket, GitBranch } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { developmentProcessData } from '../../data/portfolioData';

const stepIcons = [
  FileCode2,
  Database,
  GitBranch,
  ShieldCheck,
  Rocket,
];

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="05 // Methodology"
          title="How I Engineer Business Software"
          subtitle="A structured, disciplined engineering workflow ensuring requirements are thoroughly modeled, schemas are normalized, and applications are reliable."
        />

        <div className="relative">
          {/* Vertical flow connector line for desktop & tablet */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/40 to-emerald-500/10 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {developmentProcessData.map((phase, idx) => {
              const Icon = stepIcons[idx] || CheckCircle;
              const isLast = idx === developmentProcessData.length - 1;

              return (
                <div key={phase.step} className="relative flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex-1 flex flex-col justify-between group h-full"
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25">
                          STEP {phase.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-emerald-400 group-hover:bg-emerald-500/10 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-base mb-1 group-hover:text-emerald-300 transition-colors">
                        {phase.title}
                      </h3>

                      <span className="text-[11px] font-mono text-cyan-400 block mb-3">
                        {phase.subtitle}
                      </span>

                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {phase.description}
                      </p>
                    </div>

                    {/* Deliverables tags */}
                    <div className="pt-3 border-t border-white/[0.05]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                        Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {phase.deliverables.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile & Tablet arrow indicator */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center py-2 text-emerald-400/50">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
