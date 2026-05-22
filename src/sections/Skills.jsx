import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Server, Database, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML Specialization',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    skills: ['Python', 'Machine Learning', 'NLP / Text Mining', 'Flask APIs', 'Data Structures & Algorithms'],
    levels: ['92%', '88%', '90%', '85%', '89%']
  },
  {
    title: 'Frontend Architecture',
    icon: <Layout className="w-5 h-5 text-purple-400" />,
    skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'Responsive layouts'],
    levels: ['85%', '88%', '90%', '80%', '92%']
  },
  {
    title: 'Backend Systems',
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: ['Node.js', 'Express', 'Flask Controllers', 'RESTful API Design'],
    levels: ['82%', '80%', '85%', '88%']
  },
  {
    title: 'Databases & Storage',
    icon: <Database className="w-5 h-5 text-yellow-400" />,
    skills: ['MongoDB', 'SQL Basics', 'Local Storage / Sessions'],
    levels: ['85%', '72%', '90%']
  },
  {
    title: 'DevOps & Tooling',
    icon: <GitBranch className="w-5 h-5 text-sky-400" />,
    skills: ['Git & GitHub', 'VS Code', 'Package Managers (npm/pip)', 'Vercel Deployment'],
    levels: ['90%', '95%', '88%', '85%']
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 95, damping: 13 } 
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Registry</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500">Matrix</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-lg mx-auto font-sans">
            Modular arrays of programming languages, machine learning architectures, frameworks, and deployment databases.
          </p>
        </div>

        {/* Grid Deck */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group select-none flex flex-col justify-between"
            >
              <div>
                {/* Title & Icon */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-col space-y-3">
                  {category.skills.map((skill, sIdx) => {
                    const level = category.levels[sIdx] || '80%';
                    return (
                      <div 
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-xs md:text-sm font-medium text-slate-300 font-mono">{skill}</span>
                        {/* Faint blue bar mockup */}
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-[10px] text-slate-500">{level}</span>
                          <div className="w-14 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000" 
                              style={{ width: level }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Metadata tags */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600">
                <span>SYSTEM_REGISTRY://CORE</span>
                <span>STATUS: STABLE</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
