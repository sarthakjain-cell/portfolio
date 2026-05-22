import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, Award, ShieldAlert } from 'lucide-react';

const experiences = [
  {
    role: 'Mail Lead',
    company: 'GeeksforGeeks Student Club',
    duration: 'Active Member',
    description: 'Managed official outbound communication networks and student newsletters, reaching hundreds of members. Orchestrated technical announcements, content strategy, and coordinated workshop campaigns.',
    bullets: [
      'Spearheaded technical email delivery systems and newsletters, increasing engagement metrics.',
      'Mentored and structured workshops on programming fundamentals, web development, and AI tools.',
      'Coordinated technical events, hackathons, and mock interviews for CSE juniors.'
    ],
    icon: <Users className="w-5 h-5 text-cyan-400" />
  },
  {
    role: 'Workshop Mentor',
    company: 'Technical Student Events',
    duration: 'Project Tenure',
    description: 'Instructed and guided peer learning pathways on specialized frameworks, coding paradigms, and data structure execution.',
    bullets: [
      'Mentored 150+ students across workshops covering Python foundations, Machine Learning basics, and Web Systems.',
      'Constructed modular hands-on coding repositories for junior developers.',
      'Evaluated system designs and offered architectural troubleshooting recommendations.'
    ],
    icon: <Award className="w-5 h-5 text-purple-400" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Telemetry Timeline</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Leadership</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-md mx-auto font-sans">
            Tracking active roles in student bodies, mentorship programs, and coordinate workshop campaigns.
          </p>
        </div>

        {/* Timeline Visual Grid */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', duration: 0.6, delay: idx * 0.15 }}
              className="relative select-none"
            >
              {/* Spinning / Glowing Timeline Node */}
              <div className="absolute -left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0a0a0c] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)] z-10">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Glass Card content */}
              <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="font-outfit font-semibold text-sm text-cyan-400 tracking-wide">
                      {exp.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 font-mono text-xs text-slate-500 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-md self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-xs md:text-sm text-slate-300 leading-normal font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2.5 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
