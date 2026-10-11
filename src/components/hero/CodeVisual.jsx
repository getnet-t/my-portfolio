import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, Copy, Terminal, Shield, Database, CheckCircle2 } from 'lucide-react';
import { codeSnippets } from '../../data/codeSnippets';

export default function CodeVisual() {
  const [activeTab, setActiveTab] = useState(codeSnippets[0].id);
  const [copied, setCopied] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState(null);

  const currentSnippet = codeSnippets.find((s) => s.id === activeTab) || codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setSimulating(true);
    setSimOutput(null);

    setTimeout(() => {
      setSimulating(false);
      if (activeTab === 'transaction') {
        setSimOutput({
          status: 201,
          time: '42ms',
          message: 'ACID Transaction Committed: Stock atomically deducted (-2), Sales record #1042 created, Cash ledger logged.',
        });
      } else if (activeTab === 'rbac') {
        setSimOutput({
          status: 200,
          time: '18ms',
          message: 'Authorization Success: JWT verified, role [admin] granted access to protected financial ledger.',
        });
      } else {
        setSimOutput({
          status: 200,
          time: '29ms',
          message: 'Schema Validated: InnoDB tables configured with foreign key constraints and calculated debt balance.',
        });
      }
    }, 650);
  };

  // Helper to colorize code lines cleanly
  const renderCode = (code) => {
    return code.split('\n').map((line, idx) => {
      // Basic syntax highlighter styling for developer aesthetic
      let formattedLine = line;
      let isComment = line.trim().startsWith('//') || line.trim().startsWith('--');

      return (
        <div key={idx} className="table-row font-mono text-xs leading-5">
          <span className="table-cell text-right pr-4 select-none text-slate-600 w-8">
            {idx + 1}
          </span>
          <span
            className={`table-cell whitespace-pre ${
              isComment
                ? 'text-slate-500 italic'
                : 'text-slate-300'
            }`}
          >
            {isComment ? (
              line
            ) : (
              line.split(/(\b(?:const|let|var|async|await|try|catch|finally|import|export|from|return|function|new|throw|if|else|CREATE|TABLE|PRIMARY|KEY|INT|VARCHAR|DECIMAL|TIMESTAMP|DEFAULT|CONSTRAINT|FOREIGN|REFERENCES|ON|DELETE|FOR|UPDATE|SELECT|INSERT|INTO|VALUES)\b|".*?"|'.*?'|`.*?`)/g).map((token, tIdx) => {
                if (!token) return null;
                // Keywords
                if (/^(const|let|var|async|await|try|catch|finally|import|export|from|return|function|new|throw|if|else|CREATE|TABLE|PRIMARY|KEY|INT|VARCHAR|DECIMAL|TIMESTAMP|DEFAULT|CONSTRAINT|FOREIGN|REFERENCES|ON|DELETE|FOR|UPDATE|SELECT|INSERT|INTO|VALUES)$/.test(token)) {
                  return <span key={tIdx} className="text-emerald-400 font-semibold">{token}</span>;
                }
                // Strings
                if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
                  return <span key={tIdx} className="text-cyan-300">{token}</span>;
                }
                // Numbers
                if (/^\d+$/.test(token)) {
                  return <span key={tIdx} className="text-amber-300">{token}</span>;
                }
                return <span key={tIdx}>{token}</span>;
              })
            )}
          </span>
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-2xl mx-auto lg:max-w-none"
    >
      {/* Decorative gradient glow behind the IDE */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-emerald-500/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main IDE Window */}
      <div className="rounded-xl border border-white/[0.1] bg-[#0c101c] overflow-hidden shadow-2xl shadow-black/80">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
              server-core // fullstack-system
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs flex items-center gap-1 font-mono"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleSimulate}
              disabled={simulating}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className={`w-3 h-3 ${simulating ? 'animate-spin' : ''}`} />
              <span className="font-mono text-[11px]">{simulating ? 'Executing...' : 'Run Test'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-white/[0.06] bg-[#0a0e19] overflow-x-auto scrollbar-none px-2 pt-1 gap-1">
          {codeSnippets.map((snippet) => {
            const isActive = activeTab === snippet.id;
            return (
              <button
                key={snippet.id}
                onClick={() => {
                  setActiveTab(snippet.id);
                  setSimOutput(null);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-md transition-colors cursor-pointer border-t-2 ${
                  isActive
                    ? 'bg-[#0c101c] text-emerald-400 border-emerald-400 font-medium'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.02]'
                }`}
              >
                {snippet.id === 'transaction' && <Database className="w-3.5 h-3.5 text-emerald-400" />}
                {snippet.id === 'rbac' && <Shield className="w-3.5 h-3.5 text-cyan-400" />}
                {snippet.id === 'schema' && <Terminal className="w-3.5 h-3.5 text-slate-400" />}
                <span>{snippet.filename}</span>
              </button>
            );
          })}
        </div>

        {/* Feature badge bar */}
        <div className="px-4 py-2 bg-[#0a0e1a]/70 border-b border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
          <span className="text-emerald-400/90 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {currentSnippet.badge}
          </span>
          <span className="text-slate-500 hidden sm:inline">
            Node.js • Express • MySQL
          </span>
        </div>

        {/* Code Content Area */}
        <div className="p-4 overflow-x-auto max-h-[340px] scrollbar-thin scrollbar-thumb-slate-800">
          <div className="table w-full">
            {renderCode(currentSnippet.code)}
          </div>
        </div>

        {/* Interactive Simulation Console Drawer */}
        {simOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-emerald-500/20 bg-emerald-950/20 px-4 py-3 flex items-start gap-2.5 text-xs font-mono text-emerald-300"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.2 bg-emerald-500/20 rounded text-[10px] text-emerald-300 font-semibold">
                  HTTP {simOutput.status}
                </span>
                <span className="text-slate-400 text-[10px]">Response time: {simOutput.time}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {simOutput.message}
              </p>
            </div>
          </motion.div>
        )}

        {/* Status footer */}
        <div className="px-4 py-2 bg-[#080b13] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Ready
            </span>
            <span className="hidden sm:inline">UTF-8</span>
            <span>Tab: 2 spaces</span>
          </div>
          <span className="text-slate-400">Real-World Business Architecture</span>
        </div>
      </div>
    </motion.div>
  );
}
