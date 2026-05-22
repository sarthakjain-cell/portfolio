import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Code2, Users2, Layers, BarChart3 } from 'lucide-react';

const stats = [
  { id: 1, label: 'LeetCode Solved', value: 100, suffix: '+', icon: <Code2 className="w-5 h-5 text-cyan-400" />, href: 'https://leetcode.com/u/Sarthakjain_207/' },
  { id: 2, label: 'Tech Stack Skills', value: 12, suffix: '+', icon: <Layers className="w-5 h-5 text-purple-400" /> },
  { id: 3, label: 'Completed Platforms', value: 3, suffix: '', icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
  { id: 4, label: 'Workshop Mentorships', value: 150, suffix: '+', icon: <Users2 className="w-5 h-5 text-yellow-400" /> }
];

export default function Achievements() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Telemetry Diagnostics</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Metrics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Achievements</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-sans">
            Realtime telemetry values monitoring coding diagnostics, system outputs, and social leadership benchmarks.
          </p>
        </div>

        {/* Counter Panels Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <CounterCard key={stat.id} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual counter card with increment animation
function CounterCard({ stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    if (start === end) return;

    const totalDuration = 1200; // Total milliseconds for count-up
    const stepTime = Math.abs(Math.floor(totalDuration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 6));

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const CardWrapper = stat.href ? 'a' : 'div';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ type: 'spring', duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="flex"
    >
      <CardWrapper
        href={stat.href}
        target={stat.href ? "_blank" : undefined}
        rel={stat.href ? "noopener noreferrer" : undefined}
        className={`glass-card p-6 rounded-2xl relative overflow-hidden group select-none flex flex-col justify-between w-full ${stat.href ? 'interactive-cursor hover:border-cyan-500/35 transition-colors duration-300' : ''}`}
      >
        {/* Light pulse overlay */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full blur-[30px]" />
        
        {/* Icon Container */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 w-fit flex items-center justify-center mb-6">
          {stat.icon}
        </div>

        {/* Numerical Counter */}
        <div>
          <div className="font-outfit font-black text-4xl md:text-5.5xl text-white tracking-tight leading-none">
            <span className="text-glow-cyan">{count}</span>
            <span className="text-cyan-400">{stat.suffix}</span>
          </div>
          
          {/* Label */}
          <p className="text-slate-400 font-mono text-xs md:text-sm mt-3 uppercase tracking-wider">
            {stat.label}
          </p>
        </div>

        {/* Faint border diagnostics */}
        <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-600">
          <span>METRIC_ID: #{stat.id}0A</span>
          <span className="group-hover:text-cyan-400 transition-colors duration-300 font-bold">{stat.href ? 'VERIFY LINE ➜' : 'STABLE'}</span>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
