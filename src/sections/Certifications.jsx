import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Bookmark, X, Download, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/5 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials Registry</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-md mx-auto font-sans">
            Professional certifications verified by leading academic and industrial centers.
          </p>
        </div>

        {/* Certificate Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', duration: 0.7 }}
          className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 relative overflow-hidden group select-none flex flex-col md:flex-row items-center gap-8 border-l-4 border-l-cyan-400"
        >
          {/* Faint ambient light glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[50px] group-hover:bg-cyan-500/10 transition-colors" />

          {/* Left: Certificate Graphic Icon */}
          <div className="shrink-0 w-24 h-24 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center relative shadow-inner">
            <Award className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
            {/* Spinning background badge */}
            <div className="absolute inset-2 border border-dashed border-cyan-500/10 rounded-lg loader-ring" style={{ animationDuration: '12s' }} />
          </div>

          {/* Right: Certificate Info details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="font-outfit font-extrabold text-xl md:text-2xl text-white tracking-tight leading-tight">
                  Natural Language Processing
                </h3>
                <span className="font-outfit font-bold text-sm text-cyan-400 uppercase tracking-wide">
                  IIT Kharagpur — NPTEL Online Certification
                </span>
              </div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider self-center">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Passed</span>
              </span>
            </div>

            {/* Performance telemetry panel */}
            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] grid grid-cols-3 gap-2 font-mono text-center select-none">
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Consolidated</div>
                <div className="text-sm font-bold text-white mt-0.5 text-glow-cyan">54%</div>
              </div>
              <div className="border-x border-white/5">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Assignments</div>
                <div className="text-sm font-bold text-white mt-0.5">22.19 / 25</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Proctored</div>
                <div className="text-sm font-bold text-white mt-0.5">31.5 / 75</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
              Successfully completed the 12-week advanced course (Jan - Apr 2026) in Natural Language Processing. Specialized in lexical parsing, syntactic grammar sequences, TF-IDF vector models, spaCy lemmatization, RNN nodes, and transformer semantic architectures. Verified among 4,939 successful candidates.
            </p>

            {/* Credential Metadata & View Link */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-500">
                <span className="flex items-center">
                  <Bookmark className="w-3.5 h-3.5 text-slate-600 mr-1.5" />
                  <span>Roll: NPTEL26CS45S1055101334</span>
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                  <span>IIT Kharagpur SWAYAM</span>
                </span>
              </div>
              
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/15 text-cyan-300 font-sans text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] interactive-cursor cursor-pointer"
              >
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Futuristic Certificate Lightbox Modal */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCertModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md select-none"
          >
            {/* Modal Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#070709]/95 border border-cyan-500/30 rounded-2xl p-4 md:p-6 max-w-4xl w-full relative shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Metadata Banner */}
              <div className="w-full text-left mb-4 pr-12">
                <h3 className="font-outfit font-extrabold text-lg md:text-xl text-white tracking-tight">
                  Natural Language Processing Online Certification
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  IIT Kharagpur | SWAYAM Online Portal | Roll: NPTEL26CS45S1055101334
                </p>
              </div>

              {/* Certificate Image Frame */}
              <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2 flex items-center justify-center relative group">
                <img 
                  src="sarthak_jain_nptel_nlp.jpg" 
                  alt="Sarthak Jain NPTEL NLP Certificate" 
                  className="max-w-full h-auto max-h-[60vh] object-contain rounded shadow-lg"
                />
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-wrap items-center justify-end gap-3 mt-4 pt-4 border-t border-white/5">
                <a
                  href="sarthak_jain_nptel_nlp.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-sans text-xs font-semibold tracking-wide transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Full Size</span>
                </a>
                <a
                  href="sarthak_jain_nptel_nlp.jpg"
                  download="Sarthak_Jain_NPTEL_NLP_Certificate.jpg"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-sans text-xs font-semibold tracking-wide transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
