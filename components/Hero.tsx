import React, { useEffect, useState } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Sbah l'khir");
    else if (hour < 18) setGreeting("Msel khir");
    else setGreeting("Masa'u l'khir");
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/85 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          aria-hidden="true"
        >
          {/* Using a Matrix/Digital Rain style video to fit Mr Robot theme */}
          <source src="https://cdn.pixabay.com/video/2019/04/20/22908-332462438_large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-emerald-500/20 backdrop-blur-md mb-4 animate-fade-in-down shadow-lg shadow-emerald-500/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{PERSONAL_INFO.availability}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
          <span className="block text-slate-400 text-2xl md:text-3xl font-normal mb-4 font-mono">{greeting}, I am</span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
           <span className="text-emerald-400 font-mono">&lt; {PERSONAL_INFO.username} /&gt;</span> {PERSONAL_INFO.tagline}
        </p>

        <p className="text-slate-500 max-w-lg mx-auto drop-shadow-sm">
            Focusing on <span className="text-slate-300">NLP</span> and <span className="text-slate-300">Data Science</span> to empower low-resource languages.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="#projects" className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg shadow-white/5">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 bg-slate-900/50 text-white border border-white/10 rounded-lg font-semibold hover:bg-slate-900/80 transition-colors backdrop-blur-sm shadow-lg">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 z-10">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;