import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Management System',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep state clean
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="07 // Get In Touch"
          title="Let's Build Something Useful."
          subtitle="Available for software engineering roles, full-stack web applications, and custom business management systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels and social placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have an open developer position, need an internal management portal, or want to discuss database architecture—feel free to reach out.
              </p>

              {/* Email Card with 1-Click Copy */}
             <a
  href={
    personalInfo.links.email.startsWith('mailto:')
      ? personalInfo.links.email
      : `mailto:${personalInfo.links.email}`
  }
  className="p-4 rounded-xl bg-[#0d1220] border border-white/[0.08] flex items-center gap-3 hover:border-emerald-500/40 transition-colors"
>
  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
    <Mail className="w-5 h-5" />
  </div>

  <div className="overflow-hidden">
    <span className="text-[11px] font-mono text-slate-400 block">
      Direct Email
    </span>
    <span className="text-xs sm:text-sm font-mono text-white truncate block">
      {personalInfo.links.email.replace('mailto:', '')}
    </span>
    <span className="text-[10px] text-emerald-400">
      Click to send an email
    </span>
  </div>

  <ArrowUpRight className="w-4 h-4 text-emerald-400 ml-auto shrink-0" />
</a>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Professional Profiles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {/* LinkedIn */}
  <a
    href={personalInfo.links.linkedin || undefined}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      if (!personalInfo.links.linkedin) {
        e.preventDefault();
        alert("Add your LinkedIn URL in portfolioData.js first.");
      }
    }}
    className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between text-left transition-all group"
  >
    <div className="flex items-center gap-2.5">
      <Linkedin className="w-4 h-4 text-cyan-400" />
      <div>
        <span className="text-xs font-semibold text-white block">
          LinkedIn
        </span>
        <span className="text-[10px] font-mono text-slate-500">
          Connect
        </span>
      </div>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
  </a>

  {/* GitHub */}
  <a
    href={personalInfo.links.github || undefined}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      if (!personalInfo.links.github) {
        e.preventDefault();
        alert("Add your GitHub URL in portfolioData.js first.");
      }
    }}
    className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between text-left transition-all group"
  >
    <div className="flex items-center gap-2.5">
      <Github className="w-4 h-4 text-emerald-400" />
      <div>
        <span className="text-xs font-semibold text-white block">
          GitHub
        </span>
        <span className="text-[10px] font-mono text-slate-500">
          Repositories
        </span>
      </div>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
  </a>
</div>
      
                </div>
              </div>
              {/* Notice regarding links */}
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the details below and I will respond to your inquiry promptly.
              </p>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. In this portfolio demonstration, form input validation passed cleanly. You can also reach me directly at <span className="text-emerald-400 font-mono">{personalInfo.links.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Business Management System', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-mono hover:bg-emerald-500/30 transition-colors"
                  >
          
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d17] border border-white/[0.08] focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d17] border border-white/[0.08] focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d17] border border-white/[0.08] focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-white text-sm transition-colors"
                    >
                      <option value="Business Management System">Business Management System</option>
                      <option value="Full-Stack Engineering Role">Full-Stack Engineering Role / Hiring</option>
                      <option value="Inventory or POS System">Inventory or POS System</option>
                      <option value="REST API & Database Design">REST API & Database Design</option>
                      <option value="General Software Inquiry">General Software Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, software requirements, or role details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d17] border border-white/[0.08] focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm shadow-md shadow-emerald-400/20 hover:shadow-emerald-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
