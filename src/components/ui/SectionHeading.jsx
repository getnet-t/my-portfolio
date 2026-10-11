import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase mb-3 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{tag}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
