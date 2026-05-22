import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import TerminalConsole from './components/TerminalConsole';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 4000);
  };

  // Splash loading progression
  useEffect(() => {
    const totalDuration = 1500;
    const intervalTime = 20;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setLoadProgress(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 250);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProject = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#030303] flex flex-col items-center justify-center font-mono select-none">
        {/* Loading ring */}
        <div className="w-14 h-14 rounded-full border-2 border-white/5 border-t-cyan-400 loader-ring mb-6" style={{ animationDuration: '1.2s' }} />
        
        {/* System initializing indicators */}
        <div className="text-center space-y-2">
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase block animate-pulse">
            System Initializing
          </span>
          <div className="text-slate-500 text-[10px] uppercase tracking-wider">
            Loading Modules... {loadProgress}%
          </div>
        </div>

        {/* Progress bar line */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-6">
          <div 
            className="h-full bg-cyan-400 transition-all duration-75"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030303] text-slate-100 overflow-x-hidden font-sans">
      
      {/* Visual background layers */}
      <MatrixBackground />

      {/* Mouse follow tracking */}
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar />

      {/* Core Sections Stack */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProject={handleOpenProject} showToast={showToast} />
        <Experience />
        <Certifications />
        <Achievements />
        <TerminalConsole />
        <Contact />
      </main>

      {/* Technical Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 py-10 text-center font-mono text-[9px] text-slate-500 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>PORTFOLIO_CORE_INDEX://SECURE_NODE</span>
          <span>© {new Date().getFullYear()} Sarthak Jain. Built with React + Vite + Tailwind CSS.</span>
          <span>SYSTEM_STATUS: SECURE_STABLE</span>
        </div>
      </footer>

      {/* Blueprint project details viewer */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseProject} 
        project={selectedProject} 
        showToast={showToast}
      />

      {/* Toast Notification Portal */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3.5 rounded-xl border border-cyan-500/35 bg-[#070709]/95 text-cyan-300 font-mono text-xs shadow-[0_0_25px_rgba(6,182,212,0.22)] flex items-center space-x-2.5 backdrop-blur-md select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
