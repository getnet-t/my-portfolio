import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Check,
  Layers,
  Database,
  Shield,
  Activity,
  DollarSign,
  Package,
  FileCheck2,
  AlertCircle,
  CreditCard,
  UserCheck,
  Stethoscope,
} from 'lucide-react';
import { Github } from '../ui/Icons';

export default function ProjectCard({ project, onPlaceholderClick }) {
  const [activePreviewTab, setActivePreviewTab] = useState('overview');

  const isAgrotheck = project.id === 'agrotheck';

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/80 transition-all duration-300 hover:border-emerald-500/30">
      {/* Top Banner with Category & Title */}
      <div className="p-6 sm:p-8 border-b border-white/[0.06] bg-[#0c101c]/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
  href={project.githubUrl || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white text-xs font-mono border border-white/[0.1] transition-all"
>
  <Github className="w-4 h-4 text-emerald-400" />
  <span>GitHub Repository</span>
  <ExternalLink className="w-3.5 h-3.5" />
</a>

          {project.hasLiveDemo && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-mono font-semibold transition-all cursor-pointer shadow-md shadow-emerald-400/20"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={() => onPlaceholderClick('Live Demo', project.title, 'Demo available upon local environment setup or client demonstration.')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.02] text-slate-400 hover:text-slate-200 text-xs font-mono border border-white/[0.06] transition-all cursor-pointer"
              title="Live demo link status"
            >
            
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              <span>Live Demo (Local / Private)</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Description, Technologies, and Full Feature Checklist */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "{project.description}"
            </p>

            {/* Technologies Badges */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Implemented Business Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Engineered Core Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-slate-300"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Highlights Footer */}
          <div className="pt-6 border-t border-white/[0.06] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Architectural Rigor</span>
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">›</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Side: Interactive Business UI Preview Simulation */}
        <div className="lg:col-span-6 bg-[#090d16] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col justify-between">
          <div className="space-y-4">
            {/* Simulated UI Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {isAgrotheck ? 'agrotheck-erp-v1.0' : 'pharmacy-flow-v1.0'}
                </span>
              </div>

              {/* Preview Tabs */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActivePreviewTab('overview')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                    activePreviewTab === 'overview'
                      ? 'bg-emerald-500/20 text-emerald-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActivePreviewTab('workflow')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                    activePreviewTab === 'workflow'
                      ? 'bg-emerald-500/20 text-emerald-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAgrotheck ? 'P&L Ledger' : 'Prescription Pipeline'}
                </button>
              </div>
            </div>

            {/* Simulation Preview Body */}
            {isAgrotheck ? (
              activePreviewTab === 'overview' ? (
                <div className="space-y-4 font-mono text-xs">
                  {/* KPI metric cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-[#0e1322] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-emerald-400" />
                        Business Cash Balance
                      </span>
                      <span className="text-lg font-bold text-white mt-1 block">
                        $24,850.00
                      </span>
                      <span className="text-[10px] text-emerald-400">
                        +8.4% Realized Net Profit
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0e1322] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Package className="w-3 h-3 text-cyan-400" />
                        Tracked Inventory SKUs
                      </span>
                      <span className="text-lg font-bold text-white mt-1 block">
                        418 Items
                      </span>
                      <span className="text-[10px] text-slate-400">
                        12 low stock warnings
                      </span>
                    </div>
                  </div>

                  {/* Sample Data Table */}
                  <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0c101b]">
                    <div className="px-3 py-2 bg-white/[0.02] border-b border-white/[0.06] text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                      <span>Recent Sales & Debt Register</span>
                      <span className="text-emerald-400">Status</span>
                    </div>
                    <div className="divide-y divide-white/[0.04] text-[11px]">
                      <div className="p-2.5 flex items-center justify-between">
                        <div>
                          <span className="text-white block font-medium">Inv #1042 — Apex Agricultural</span>
                          <span className="text-[10px] text-slate-500">Fertilizer Grade A • 50 bags</span>
                        </div>
                        <div className="text-right">
                          <span className="text-white font-medium block">$3,200.00</span>
                          <span className="text-[10px] text-emerald-400">Paid in Full</span>
                        </div>
                      </div>
                      <div className="p-2.5 flex items-center justify-between">
                        <div>
                          <span className="text-white block font-medium">Inv #1043 — Delta Farm Co</span>
                          <span className="text-[10px] text-slate-500">Irrigation Pumps • 2 units</span>
                        </div>
                        <div className="text-right">
                          <span className="text-white font-medium block">$1,450.00</span>
                          <span className="text-[10px] text-amber-400">Debt: $450 bal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#0e1322] border border-white/[0.06]">
                    <h5 className="text-xs text-white font-semibold mb-1 flex items-center justify-between">
                      <span>Monthly Financial Ledger (P&L)</span>
                      <span className="text-emerald-400 text-[10px]">Real-time Calculation</span>
                    </h5>
                    <div className="space-y-1.5 text-[11px] pt-2 text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Gross Sales Revenue:</span>
                        <span className="text-white">$48,200.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Inventory Cost of Goods (COGS):</span>
                        <span className="text-rose-400">-$29,150.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Operational Expenses:</span>
                        <span className="text-rose-400">-$4,200.00</span>
                      </div>
                      <div className="pt-2 border-t border-white/[0.08] flex justify-between font-bold text-white">
                        <span>Net Operating Profit:</span>
                        <span className="text-emerald-400">+$14,850.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400">
                    <p>
                      Role-based access enforces that only <span className="text-emerald-400">Admin</span> accounts can view net financial margins, while <span className="text-slate-300">Cashiers</span> are restricted to sales invoice creation.
                    </p>
                  </div>
                </div>
              )
            ) : (
              // Pharmacy Management System Preview
              activePreviewTab === 'overview' ? (
                <div className="space-y-3 font-mono text-xs">
                  {/* Workflow progress line */}
                  <div className="p-3 rounded-xl bg-[#0e1322] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Prescription Ticket Verification Chain
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Stethoscope className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>1. Doctor Issue</span>
                      </div>
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <UserCheck className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>2. Pharmacist</span>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <CreditCard className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>3. Chapa Pay</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Patient Prescription Records */}
                  <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0c101b]">
                    <div className="px-3 py-2 bg-white/[0.02] border-b border-white/[0.06] text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                      <span>Active Prescription Queue</span>
                      <span className="text-cyan-400">Status</span>
                    </div>
                    <div className="divide-y divide-white/[0.04] text-[11px]">
                      <div className="p-2.5 flex items-center justify-between">
                        <div>
                          <span className="text-white block font-medium">Ticket #RX-884 — Patient John D.</span>
                          <span className="text-[10px] text-slate-500">Amoxicillin 500mg • Dr. Carter</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          Pharmacist Approved
                        </span>
                      </div>
                      <div className="p-2.5 flex items-center justify-between">
                        <div>
                          <span className="text-white block font-medium">Ticket #RX-885 — Patient Sarah M.</span>
                          <span className="text-[10px] text-slate-500">Paracetamol 500mg • Dr. Selam</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          Chapa Payment Paid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#0e1322] border border-white/[0.06]">
                    <h5 className="text-xs text-white font-semibold mb-2 flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Chapa Payment Gateway & ACID Commit</span>
                    </h5>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.04] text-[10px] text-slate-300 space-y-1">
                      <div><span className="text-slate-500">TX REF:</span> CHAPA-TX-9982410</div>
                      <div><span className="text-slate-500">AMOUNT:</span> 450.00 ETB (Verified Webhook)</div>
                      <div><span className="text-slate-500">SQL TRANSACTION:</span> <span className="text-emerald-400 font-bold">COMMIT</span></div>
                      <div><span className="text-slate-500">STOCK DEDUCTION:</span> 2 units deducted from Batch #B-409</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400">
                    <p>
                      Utilizes isolated MySQL transactions to prevent inventory discrepancy in case of payment webhook latency or network disconnects.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Quick Metrics Tag */}
          <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Production Database Design</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Full-Stack Architecture
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
