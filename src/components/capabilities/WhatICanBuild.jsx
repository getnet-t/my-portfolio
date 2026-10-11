import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Package,
  TrendingUp,
  LayoutDashboard,
  Server,
  Database,
  ShieldCheck,
  Users,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { whatICanBuildData } from '../../data/portfolioData';

const iconMap = {
  Briefcase,
  Package,
  TrendingUp,
  LayoutDashboard,
  Server,
  Database,
  ShieldCheck,
  Users,
};

export default function WhatICanBuild() {
  return (
    <section id="capabilities" className="py-20 md:py-28 relative bg-[#07090f]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="04 // System Capabilities"
          title="What I Can Build for Your Business"
          subtitle="Specialized in software that manages operations, safeguards financial records, and powers daily workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whatICanBuildData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Briefcase;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 transition-all">
                    <Icon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-emerald-400 transition-colors">
                  <span>Production Ready</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
