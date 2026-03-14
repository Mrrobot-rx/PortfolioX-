import React, { useState } from 'react';
import { ExternalLink, Github, Code, Eye, X } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [showDeepWork, setShowDeepWork] = useState(false);

  return (
    <>
      <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Code className="text-emerald-500/20 w-24 h-24 -mr-8 -mt-8 rotate-12" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-xs text-emerald-300 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
            {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-emerald-400 transition-colors">
                    <ExternalLink size={14} /> Live Demo
                </a>
            )}
            {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-emerald-400 transition-colors">
                    <Github size={14} /> Code
                </a>
            )}
            <button 
                onClick={() => setShowDeepWork(true)}
                className="ml-auto px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium transition-colors border border-emerald-500/20 flex items-center gap-2"
            >
                <Eye size={12} /> Deep Work
            </button>
        </div>
      </div>

      {/* Deep Work Modal */}
      {showDeepWork && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-emerald-500/30 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl relative shadow-2xl animate-in zoom-in-95 duration-300">
                <button 
                    onClick={() => setShowDeepWork(false)}
                    className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
                
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">{project.title}</h2>
                    <div className="space-y-6 text-slate-300">
                        <div>
                            <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-bold">The Challenge</h4>
                            <p className="leading-relaxed">{project.description}</p>
                        </div>
                        <div>
                            <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-bold">The Process (Deep Work)</h4>
                            <p className="leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-white/5">{project.details}</p>
                        </div>
                        <div>
                            <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-bold">Impact</h4>
                            <p className="leading-relaxed text-white">{project.impact}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex gap-4">
                             {project.link && <a href={project.link} target="_blank" className="text-emerald-400 hover:underline">Open Live Project</a>}
                             {project.github && <a href={project.github} target="_blank" className="text-emerald-400 hover:underline">View Source</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;