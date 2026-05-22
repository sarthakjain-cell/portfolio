import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer & ATS Score Predictor',
    description: 'Deep scanning Python parser evaluating resume text against job description semantic indices, returning real-time ATS match metrics.',
    fullDescription: 'A high-performance Python and NLP scanning parser that measures resume text benchmarks against job description models, calculating ATS compatibility scores, extracting structural keywords, and rendering analytics charts using React. Built on Flask API relays.',
    tech: ['Python', 'NLP', 'Flask', 'React', 'Tailwind CSS'],
    stats: [
      { label: 'Parser Accuracy', value: '94.5%' },
      { label: 'Response Latency', value: '< 1.2s' }
    ],
    features: [
      'NLP semantic keyword mapping',
      'ATS compatibility index predictor',
      'Fuzzy matching phrase algorithms',
      'Dynamic PDF/Docx secure parsers'
    ],
    github: 'https://github.com/sarthakjain-cell/Resume-ATS-Finder-Professional-Tailoring-Tool',
    demo: 'https://github.com/sarthakjain-cell/Resume-ATS-Finder-Professional-Tailoring-Tool'
  },
  {
    id: 2,
    title: 'Smart Flooring & Sanitary E-Commerce Platform',
    description: 'Enterprise scale e-commerce catalog utilizing the MERN stack with complete cart states, category parameters, and secure mock invoice billing.',
    fullDescription: 'Enterprise e-commerce application constructed with the MERN stack. Features deep product search indexing, visual catalog categories, smooth checkout animations, cart management engines, and simulated electronic transactions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    stats: [
      { label: 'Catalog Volume', value: '500+ Items' },
      { label: 'Query Response', value: '< 180ms' }
    ],
    features: [
      'Full checkout cart state machines',
      'Responsive category tiles',
      'Dynamic search parameter queries',
      'Simulated electronic invoicing sandbox'
    ],
    github: 'https://github.com/sarthakjain-cell/Smart-Flooring-Sanitary-E-Commerce-System',
    demo: 'https://github.com/sarthakjain-cell/Smart-Flooring-Sanitary-E-Commerce-System'
  },
  {
    id: 3,
    title: 'Parking Lot Management System',
    description: 'Smart terminal allocation logic organizing active parking slot registries, persistent ticketing billing, and occupancy monitors.',
    fullDescription: 'Smart allocation logic system controlling active slot vacancies. Features custom entry ticketing, real-time hourly rate calculators, persistence caching logs, and clean terminal grid visualization.',
    tech: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Local Storage'],
    stats: [
      { label: 'Slot Allocations', value: '200 slots' },
      { label: 'Register Latency', value: 'Realtime' }
    ],
    features: [
      'Automated slot vacancy trackers',
      'Ticketing billing duration engines',
      'Persistent caching databases',
      'Visual occupancy indicators'
    ],
    github: 'https://github.com/sarthakjain-cell/parking-lot-management',
    demo: 'https://sarthakjain-cell.github.io/parking-lot-management'
  }
];

export default function Projects({ onOpenProject, showToast }) {
  const handleLaunch = (e, url, type) => {
    if (url === 'https://demo.com' || url === 'https://github.com') {
      e.preventDefault();
      showToast(`[SYSTEM DIAGNOSTICS] ${type === 'demo' ? 'Live Prototype' : 'Code Repository'} node active. The actual live deployment is currently running inside the local workspace container environment.`);
    }
  };

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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/5 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Index</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Blueprints</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-sans">
            A showcase of production-ready systems constructed utilizing advanced algorithms, reliable pipelines, and aesthetic interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden p-6 relative flex flex-col justify-between group select-none"
            >
              {/* Radial light glow reflection */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors duration-500" />
              
              <div>
                {/* Tech tag list */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-slate-400 font-mono text-[9px]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-slate-500 font-mono text-[9px]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="font-outfit font-bold text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Action and expand area */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenProject(project)}
                  className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors interactive-cursor"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Review Blueprint</span>
                </button>

                <div className="flex items-center space-x-2.5">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLaunch(e, project.github, 'github')}
                    className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white transition-all interactive-cursor"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLaunch(e, project.demo, 'demo')}
                    className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white transition-all interactive-cursor"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
