import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#030303]/60 backdrop-blur-md border-b border-white/5' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          onClick={() => scrollTo('home')}
          className="flex items-center space-x-2 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center p-[1.2px]">
            <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center transition-colors group-hover:bg-transparent">
              <Cpu className="w-4.5 h-4.5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </div>
            {/* Logo shadow glow */}
            <div className="absolute inset-0 -z-10 rounded-lg bg-cyan-400/20 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-outfit font-bold text-lg tracking-wider text-white group-hover:text-cyan-300 transition-all duration-300 select-none">
            SARTHAK<span className="text-cyan-400">.J</span>
          </span>
        </motion.div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 glass-card p-1.5 rounded-full border-white/5 px-2.5 bg-black/45">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-1.5 rounded-full font-outfit text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/12 to-purple-600/12 border border-cyan-500/35 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  style={{
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.15)'
                  }}
                />
              )}
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Button: Developer Terminal Link */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => scrollTo('terminal')}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/15 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Console.exe</span>
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => scrollTo('terminal')}
            className="p-1.5 rounded-lg border border-purple-500/30 bg-purple-500/5 text-purple-300 hover:bg-purple-500/15 transition-all"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-[#030303]/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left font-outfit text-base font-medium py-2 px-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-500/5 border-l-2 border-cyan-400 pl-4'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
