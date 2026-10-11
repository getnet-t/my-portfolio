
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileText,
  Send,
  Database,
  Layers,
  CheckCircle,
} from 'lucide-react';

//getnet-tesfa-portrait.jpg
import { personalInfo } from '../../data/portfolioData';
import CodeVisual from './CodeVisual';
import developerPhoto from "../../assets/getnet-tesfa-portrait.jpg"
export default function Hero({ onOpenCvModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* =========================================================
              LEFT COLUMN
          ========================================================== */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Status / Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>

              <span>
                Information Systems & Software Engineering
              </span>
            </motion.div>

            {/* Developer Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-1"
            >
              <p className="text-sm font-mono text-emerald-400">
                Hello, I'm
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Getnet Tesfa
              </h2>
              <p className="text-sm text-slate-400">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Full-Stack Developer{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Building Real-World Software
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Key Focus Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1 pb-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400"
            >
              {/* ACID Transactions */}
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>ACID Transactions</span>
              </div>

              {/* Normalized Schemas */}
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Normalized Schemas</span>
              </div>

              {/* Practical Business Logic */}
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Practical Business Logic</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download CV */}
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0f1422] hover:bg-[#141c2e] text-slate-200 hover:text-white font-medium text-sm border border-white/[0.12] hover:border-white/[0.2] transition-all duration-200 cursor-pointer shadow-sm shadow-black"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT COLUMN
          ========================================================== */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">

              {/* Developer Photo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="relative z-10 mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border border-emerald-400/20 bg-slate-900 shadow-2xl shadow-emerald-500/10"
              >
                <img
                  src={developerPhoto}
                  alt="Getnet Tesfa - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Code Visual Behind Photo */}
              <div className="absolute -right-4 sm:-right-10 top-12 w-[85%] opacity-40 scale-90 -z-0 pointer-events-none">
                <CodeVisual />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-emerald-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

              {/* Small developer label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 bg-[#0b101c]/90 backdrop-blur-md border border-white/[0.1] rounded-xl px-4 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-200">
                    Full-Stack Developer
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

