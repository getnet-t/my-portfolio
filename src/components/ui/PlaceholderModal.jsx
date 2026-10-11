import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Copy, Check, Info, FileCode } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (data.url) {
      navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-panel w-full max-w-md rounded-2xl border border-white/[0.12] overflow-hidden shadow-2xl shadow-black p-6 space-y-4"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  {data.type || 'Repository / Link Notice'}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {data.title}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Per development rules, no unverified or fake URLs have been generated. This link is currently using an annotated placeholder:
          </p>

          {/* Code box */}
          <div className="p-3 rounded-xl bg-black/50 border border-white/[0.08] flex items-center justify-between gap-2">
            <code className="text-xs font-mono text-emerald-400 truncate">
              {data.url}
            </code>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors shrink-0"
              title="Copy placeholder URL"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15 flex items-start gap-2 text-xs font-mono text-slate-400">
            <FileCode className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              To connect your real link, update the entry in <span className="text-slate-200">src/data/portfolioData.js</span>.
            </span>
          </div>

          {/* Action */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-semibold font-mono transition-colors cursor-pointer"
            >
              Got It
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
