import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ShieldAlert, Sparkles } from 'lucide-react';

const SKILLS_BARS = `
[AI/ML]      █████████░ [90%] (Python, NLP, ML models, Flask)
[Frontend]   ████████░░ [80%] (React, Vite, Tailwind CSS)
[Backend]    ████████░░ [80%] (Node.js, Express, REST APIs)
[Databases]  ███████░░░ [70%] (MongoDB, SQL)
[Tools]      ████████░░ [80%] (Git, GitHub, VS Code)
`;

const INITIAL_HISTORY = [
  { text: 'SYSTEM INITIALIZATION SECURE... SUCCESS.', type: 'system' },
  { text: 'Welcome to Sarthak\'s Interactive System Core. [v1.0.4]', type: 'system' },
  { text: 'Type "help" to display available systems commands.', type: 'info' },
  { text: '', type: 'input' }
];

export default function TerminalConsole() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll terminal to bottom on command execution
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isMatrixActive]);

  const focusInput = () => {
    if (!isMatrixActive) {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, [isMatrixActive]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    const newHistory = [...history];
    
    // Add current input line to history
    newHistory.push({ text: `guest@sarthak-portfolio:~$ ${cmdText}`, type: 'input' });

    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const args = trimmed.split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        newHistory.push({ 
          text: `Available Commands:
  about          - Print profile introduction
  skills         - Display technical skill matrices
  projects       - List featured engineering projects
  experience     - View leadership & mentoring history
  certifications - Display professional certificates
  contact        - Get quick communication links
  matrix         - Initialize digital stream (Easter Egg!)
  clear          - Flush console memory`, 
          type: 'info' 
        });
        break;

      case 'about':
        newHistory.push({ 
          text: `Sarthak Jain - B.Tech CSE AIML Student.
--------------------------------------------------
Highly focused on Natural Language Processing (NLP), Intelligent Systems,
and full-stack software architecture. Builds real-world practical tools 
to solve complex logic puzzles.`, 
          type: 'success' 
        });
        break;

      case 'skills':
        newHistory.push({ text: SKILLS_BARS, type: 'info' });
        break;

      case 'projects':
        newHistory.push({ 
          text: `Featured Engineering Blueprints:
--------------------------------------------------
1. AI Resume Analyzer & ATS Score Predictor
   - Stack: Python, NLP, Flask, React
   - Description: Deep scanning parser matching resume benchmarks.

2. Smart Flooring & Sanitary E-Commerce
   - Stack: React, Node.js, Express, MongoDB
   - Description: Full e-comm stack with premium transaction mockups.

3. Parking Lot Management System
   - Stack: JavaScript, Tailwind CSS, Local Storage
   - Description: Smart allocation slots with secure ticket timers.`, 
          type: 'success' 
        });
        break;

      case 'experience':
        newHistory.push({ 
          text: `Leadership & Experience Log:
--------------------------------------------------
* GeeksforGeeks Student Club - Mail Lead
  - Spearheaded technical newsletters and communication systems.
  - Mentored 150+ students in structural technical workshops.`, 
          type: 'info' 
        });
        break;

      case 'certifications':
        newHistory.push({ 
          text: `Academic Credentials:
--------------------------------------------------
* NPTEL NLP Certification - IIT Kharagpur
  - Score: Elite Certification in advanced natural language modeling.`, 
          type: 'success' 
        });
        break;

      case 'contact':
        newHistory.push({ 
          text: `Secure Portals Hooked:
--------------------------------------------------
Email: sjain16089@gmail.com
GitHub: github.com/sarthakjain-cell
LinkedIn: linkedin.com/in/sarthakjain (Simulated)
LeetCode: leetcode.com/u/Sarthakjain_207/`, 
          type: 'info' 
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'matrix':
        setIsMatrixActive(true);
        setTimeout(() => {
          setIsMatrixActive(false);
          setHistory(prev => [...prev, { text: 'Stream terminated. Matrix core secure.', type: 'system' }]);
        }, 6000);
        setInput('');
        return;

      default:
        newHistory.push({ text: `bash: command not found: ${command}. Type "help" for valid registers.`, type: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-black/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Shell Interface</span>
          </div>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Interact With The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Core CLI</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-lg mx-auto">
            Recruiter-friendly terminal simulation. Access Sarthak's database by compiling commands directly.
          </p>
        </div>

        {/* Terminal Container */}
        <div 
          onClick={focusInput}
          className="w-full rounded-xl overflow-hidden border border-white/10 bg-black/85 shadow-2xl relative"
        >
          {/* Header Bar */}
          <div className="bg-[#0f0f14] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-500 font-semibold tracking-wide">guest@sarthak-portfolio:~</span>
            <div className="w-4" /> {/* Spacer */}
          </div>

          {/* Terminal Console Viewport */}
          <div className="p-5 font-mono text-sm h-[380px] overflow-y-auto terminal-scroll select-text relative">
            {isMatrixActive ? (
              <MatrixRainMockup />
            ) : (
              <>
                {history.map((log, index) => {
                  let colorClass = 'text-slate-300';
                  if (log.type === 'system') colorClass = 'text-cyan-400/90 font-semibold';
                  if (log.type === 'success') colorClass = 'text-emerald-400 font-semibold';
                  if (log.type === 'error') colorClass = 'text-rose-400';
                  if (log.type === 'info') colorClass = 'text-purple-400';
                  if (log.type === 'input') colorClass = 'text-slate-100';

                  return (
                    <div key={index} className={`whitespace-pre-wrap mb-2 leading-relaxed ${colorClass}`}>
                      {log.text}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </>
            )}
          </div>

          {/* Prompt line (fixed at bottom when not clearing) */}
          {!isMatrixActive && (
            <div className="px-5 pb-5 pt-1 flex items-center font-mono text-sm bg-black/80 select-none">
              <span className="text-cyan-400 mr-2 shrink-0">guest@sarthak-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="bg-transparent border-none outline-none text-slate-100 w-full p-0 m-0 focus:ring-0"
                autoComplete="off"
                spellCheck="false"
                maxLength="50"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Mini Matrix Rain Effect Component
function MatrixRainMockup() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+-/=';
    const interval = setInterval(() => {
      setLines(prev => {
        const newLine = Array(15).fill(0).map(() => 
          chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('   ');
        
        return [newLine, ...prev.slice(0, 12)];
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-black flex flex-col justify-start p-6 text-emerald-400 overflow-hidden font-bold select-none text-glow-emerald">
      <div className="flex items-center space-x-2 text-xs border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded mb-4 self-center font-mono">
        <ShieldAlert className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
        <span>INITIALIZING DIGITAL STREAM PROTOCOL... MATRIX CORRUPTION STABLE</span>
      </div>
      <div className="flex-1 overflow-hidden leading-relaxed tracking-widest text-center opacity-85 font-mono text-xs select-none">
        {lines.map((line, idx) => (
          <div key={idx} className="opacity-90 transition-opacity duration-300">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
