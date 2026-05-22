import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Award } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ProjectModal({ isOpen, onClose, project, showToast }) {
  const handleLaunch = (e, url, type) => {
    if (url === 'https://demo.com' || url === 'https://github.com') {
      e.preventDefault();
      showToast(`[SYSTEM DIAGNOSTICS] ${type === 'demo' ? 'Live Prototype' : 'Code Repository'} node active. The actual live deployment is currently running inside the local workspace container environment.`);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#070709]/95 p-5 md:p-8 shadow-2xl relative glass-card z-10 max-h-[90vh] overflow-y-auto terminal-scroll select-text"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-all duration-300 hover:bg-white/15"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-4">
              {/* Media Section (Left) */}
              <div className="flex flex-col space-y-4">
                {/* Showcase Image / Visual Mockup */}
                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#0f0f12] aspect-video flex items-center justify-center group shadow-lg">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-950/20 to-purple-950/20 flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 mb-4 animate-pulse">
                        <Award className="w-6.5 h-6.5 text-cyan-400" />
                      </div>
                      <span className="font-outfit font-bold text-lg text-white mb-1">{project.title} Blueprint</span>
                      <span className="font-mono text-xs text-slate-500">System Blueprint Simulated Loop</span>
                    </div>
                  )}
                  {/* Glowing tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 border border-cyan-500/30 text-cyan-300 font-mono text-[9px] uppercase tracking-widest">
                    Secure_Node.exe
                  </div>
                </div>

                {/* Technical Statistics Panel */}
                <div className="grid grid-cols-2 gap-3">
                  {project.stats?.map((stat, index) => (
                    <div 
                      key={index} 
                      className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center"
                    >
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</span>
                      <span className="font-outfit font-extrabold text-base md:text-lg text-white mt-1 text-glow-cyan">{stat.value}</span>
                    </div>
                  )) || (
                    <>
                      <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">Reliability</span>
                        <span className="font-outfit font-extrabold text-lg text-white mt-1 text-glow-emerald">99.9%</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">Status</span>
                        <span className="font-outfit font-extrabold text-lg text-white mt-1 text-glow-cyan">Stable</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Information Section (Right) */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-outfit font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none mb-2 select-none">
                    {project.title}
                  </h3>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 rounded border border-white/5 bg-white/[0.03] text-slate-300 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {project.fullDescription || project.description}
                  </p>

                  {/* Core Features list */}
                  <div>
                    <h4 className="font-outfit font-bold text-xs text-white uppercase tracking-wider mb-3 select-none">Core Modules & Logic</h4>
                    <ul className="space-y-2">
                      {project.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-xs leading-normal">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      )) || (
                        <li className="flex items-start text-slate-400 text-xs">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                          <span>Highly secure and automated logic processes</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Actions Portal */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLaunch(e, project.demo, 'demo')}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-outfit text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all hover:scale-[1.01]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Prototype</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLaunch(e, project.github, 'github')}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-100 font-outfit text-sm font-semibold tracking-wide transition-all hover:scale-[1.01]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
