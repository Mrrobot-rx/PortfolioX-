import React, { useState } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import BubbleAssistant from './components/BubbleAssistant';
import Terminal from './components/Terminal';
import { PROJECTS, EXPERIENCE, SKILLS, PERSONAL_INFO } from './constants';
import { Briefcase, Cpu, GraduationCap, Github, Mail, Phone, MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/70 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">
            MR.<span className="text-emerald-500">ROBOT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative">
        <Hero />

        {/* About / Bio Section */}
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <GraduationCap className="text-emerald-400" /> The Pivot
                    </h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p>
                            Born in Tébessa and based in Alger, I started my journey in <strong className="text-slate-200">Law</strong> before discovering my true passion for technology.
                        </p>
                        <p>
                            The transition wasn't easy. It required deep, self-directed learning—from mastering Python basics to building complex NLP models for Algerian Derja.
                        </p>
                        <p>
                            My background in foreign languages (Arabic, French, English) gives me a unique edge in NLP, allowing me to understand the linguistic nuances that code needs to capture.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1 text-slate-400">
                                <span>Python (AI/ML)</span>
                                <span>90%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[90%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1 text-slate-400">
                                <span>NLP & Linguistics</span>
                                <span>85%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[85%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1 text-slate-400">
                                <span>Web Dev (React/Streamlit)</span>
                                <span>75%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[75%]"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex flex-wrap gap-2">
                        {SKILLS.ai.concat(SKILLS.tools).map(skill => (
                            <span key={skill} className="px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Cpu className="text-emerald-400" /> Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Briefcase className="text-emerald-400" /> Experience
            </h2>
            <div className="space-y-8">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative pl-8 border-l-2 border-slate-800 hover:border-emerald-500 transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500"></div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p className="text-emerald-400 text-sm mb-2">{job.company} • {job.period}</p>
                         <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
                            <MapPin size={12} /> {job.location}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400">
                            {job.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            <div className="flex flex-wrap justify-center gap-6">
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all">
                    <Mail className="text-emerald-400" size={20} />
                    <span>{PERSONAL_INFO.email}</span>
                </a>
                 <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all">
                    <Github className="text-emerald-400" size={20} />
                    <span>GitHub</span>
                </a>
                 <div className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl">
                    <Phone className="text-emerald-400" size={20} />
                    <span>{PERSONAL_INFO.phone}</span>
                </div>
            </div>
        </section>

        <Terminal />
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Samet Salim. Built with React, Tailwind & Gemini AI.</p>
      </footer>

      <BubbleAssistant />
    </div>
  );
};

export default App;