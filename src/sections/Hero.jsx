import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, BrainCircuit } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* System Status Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-wider w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>AI / ML SYSTEM ACCESS ACTIVE</span>
          </motion.div>

          {/* Main Title Headers */}
          <motion.div variants={itemVariants} className="space-y-1.5">
            <h1 className="font-outfit font-black text-5xl sm:text-6xl md:text-7.5xl text-white tracking-tight leading-none">
              Sarthak <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-glow-cyan">Jain</span>
            </h1>
            <h2 className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl text-slate-300 tracking-wide">
              AI/ML Engineer • Full-Stack Developer • Problem Solver
            </h2>
          </motion.div>

          {/* Elevator Pitch */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            Building intelligent systems and immersive digital experiences. 
            Specializing in NLP systems development, full-stack software logic, 
            and modern dark cyber-aesthetic interfaces.
          </motion.p>

          {/* Dynamic Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <a 
              href="#contact"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-outfit text-sm font-bold tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-[1.02] interactive-cursor"
            >
              <span>Connect Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-outfit text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] interactive-cursor"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links Matrix */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-4 pt-6 border-t border-white/5"
          >
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest select-none">Social Array:</span>
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/sarthakjain-cell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] interactive-cursor"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] interactive-cursor"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Graphic (Cinematic Neural Radar) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative select-none"
        >
          {/* Outer glowing particle circle */}
          <div className="w-[370px] h-[370px] rounded-full border border-cyan-500/20 relative flex items-center justify-center animate-pulse-slow">
            <div className="absolute inset-0 rounded-full border border-cyan-500/5 scale-120 animate-ping opacity-15" style={{ animationDuration: '5s' }} />
            
            {/* Spinning code tracker circle */}
            <div className="absolute inset-[15px] rounded-full border border-dashed border-purple-500/30 loader-ring" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-[32px] rounded-full border border-white/5" />
            
            {/* Center Brain/Circuit Visual Node */}
            <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-950/20 to-purple-950/20 border border-cyan-500/25 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.1)] relative group overflow-hidden">
              <BrainCircuit className="w-18 h-18 text-cyan-400 group-hover:text-purple-400 group-hover:scale-105 transition-all duration-700 ease-out animate-float" />
              
              {/* Radial light glow reflection */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
            </div>

            {/* Glowing Orbit Nodes */}
            <div className="absolute top-10 right-10 w-3.5 h-3.5 rounded-full bg-purple-500 border border-white/20 shadow-[0_0_12px_rgba(168,85,247,0.6)] animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-12 left-10 w-2.5 h-2.5 rounded-full bg-cyan-400 border border-white/20 shadow-[0_0_10px_rgba(6,182,212,0.6)] animate-float" style={{ animationDelay: '2.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
