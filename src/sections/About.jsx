import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Award, ArrowUpRight } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 90, damping: 14 } 
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/5 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <Brain className="w-3.5 h-3.5" />
            <span>Profile Core</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Intelligence</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-sans">
            A comprehensive look at my engineering specializations, deep structural academic background, and development principles.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: AIML Specialization (Large Span) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card glass-card-hover p-6 md:p-8 rounded-2xl relative overflow-hidden group select-none"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[60px] group-hover:bg-cyan-500/10 transition-colors duration-500" />
            
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Brain className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase">Module 01</span>
            </div>

            <h3 className="font-outfit font-bold text-xl md:text-2xl text-white mt-6 mb-3 tracking-tight">
              AI/ML & Intelligent Systems
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
              As a B.Tech CSE AIML specialist, I build predictive data models, deploy neural classifications, and configure natural language interfaces. I am deeply interested in intelligent pipelines that parse complex unstructured inputs into actionable structured database assets.
            </p>
            
            <div className="flex items-center space-x-6 text-xs font-mono text-slate-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />Transformers</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />Neural Networks</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />LLM Pipelines</span>
            </div>
          </motion.div>

          {/* Card 2: NLP Interest */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-card glass-card-purple-hover p-6 md:p-8 rounded-2xl relative overflow-hidden group select-none"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[40px] group-hover:bg-purple-500/10 transition-colors duration-500" />
            
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase">Module 02</span>
            </div>

            <h3 className="font-outfit font-bold text-xl text-white mt-6 mb-3 tracking-tight">
              Natural Language Processing
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 font-sans">
              Deep research focus in syntax parser logic and transformer parameters. Certified by IIT Kharagpur in NLP benchmarks.
            </p>

            <a 
              href="#certifications"
              className="inline-flex items-center space-x-1.5 text-purple-400 hover:text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <span>Explore Certificate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 3: Full Stack Frameworks */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-card glass-card-purple-hover p-6 md:p-8 rounded-2xl relative overflow-hidden group select-none"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[40px] group-hover:bg-purple-500/10 transition-colors duration-500" />
            
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Database className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase">Module 03</span>
            </div>

            <h3 className="font-outfit font-bold text-xl text-white mt-6 mb-3 tracking-tight">
              Full-Stack Architecture
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Architecting secure data relays and responsive user decks. Master of the MERN Stack and Flask backend controllers.
            </p>
          </motion.div>

          {/* Card 4: Mindset & Logic (Large Span) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card glass-card-hover p-6 md:p-8 rounded-2xl relative overflow-hidden group select-none"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[60px] group-hover:bg-cyan-500/10 transition-colors duration-500" />
            
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider uppercase">Module 04</span>
            </div>

            <h3 className="font-outfit font-bold text-xl md:text-2xl text-white mt-6 mb-3 tracking-tight">
              Systematic Problem Solving
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Dedicated to performance diagnostics and structural efficiency. Grounded in advanced Data Structures & Algorithms, I emphasize writing lean, clean code that performs reliably under production scale.
            </p>
            
            <div className="flex items-center space-x-6 text-xs font-mono text-slate-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />100+ LeetCode Logs</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />Clean Refactoring</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />Optimized Math</span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
