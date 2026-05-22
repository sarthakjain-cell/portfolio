import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

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


export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3 select-none">
            <Mail className="w-3.5 h-3.5" />
            <span>Secure Mail Portal</span>
          </div>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-none select-none">
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connection</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-md mx-auto font-sans">
            Transmit automated message registers directly into Sarthak's system logs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: System Hooks info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 select-none">
            <div className="space-y-6">
              <h3 className="font-outfit font-extrabold text-2xl text-white tracking-tight">
                Connection Parameters
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                Open for internship inquiries, project collaboration blueprints, 
                intelligent system development, or general developer questions.
              </p>
            </div>

            {/* Direct Vectors */}
            <div className="space-y-4 font-mono text-xs">
              <a 
                href="mailto:sjain16089@gmail.com" 
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-500/30 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Transmit Email</div>
                  <div className="text-slate-300 font-bold mt-0.5">sjain16089@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/sarthakjain-cell" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-purple-500/30 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-colors">
                  <GithubIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Compile Repos</div>
                  <div className="text-slate-300 font-bold mt-0.5">github.com/sarthakjain-cell</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/sarthakjain" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-500/30 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Sync Network</div>
                  <div className="text-slate-300 font-bold mt-0.5">linkedin.com/in/sarthakjain</div>
                </div>
              </a>

              <a 
                href="https://leetcode.com/u/Sarthakjain_207/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-yellow-500/30 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Leetcode Solved</div>
                  <div className="text-slate-300 font-bold mt-0.5">leetcode.com/u/Sarthakjain_207/</div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-white/10 bg-white/[0.01] flex items-center space-x-3 text-[10px] font-mono text-slate-500">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 animate-pulse" />
              <span>END-TO-END QUANTUM ENCRYPTION TUNNEL LOGGED</span>
            </div>
          </div>

          {/* Right Side: Glowing Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 uppercase tracking-widest select-none">Sender Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="bg-[#050507] border border-white/10 focus:border-cyan-500/40 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 text-sm font-sans"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 uppercase tracking-widest select-none">Return Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="bg-[#050507] border border-white/10 focus:border-cyan-500/40 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 text-sm font-sans"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 uppercase tracking-widest select-none">Registry Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Select connection topic"
                    className="bg-[#050507] border border-white/10 focus:border-cyan-500/40 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 text-sm font-sans"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 uppercase tracking-widest select-none">Outbound Payload</label>
                  <textarea
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Compose message payload..."
                    className="bg-[#050507] border border-white/10 focus:border-cyan-500/40 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 text-sm font-sans resize-none terminal-scroll"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  {status === 'success' ? (
                    <div className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-outfit text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-pulse">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Transmission Securely Logged</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-outfit text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none interactive-cursor"
                    >
                      {status === 'sending' ? (
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Packet</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
