import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>(["Welcome to Samet's Terminal v1.0. Type 'help' for commands."]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';

      switch (cmd) {
        case 'help':
          output = "Available commands: about, contact, skills, github, clear";
          break;
        case 'about':
          output = PERSONAL_INFO.bio;
          break;
        case 'contact':
          output = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}`;
          break;
        case 'skills':
          output = "Python, NLP, React, TypeScript, Streamlit, Algerian Derja Processing";
          break;
        case 'github':
          window.open(PERSONAL_INFO.github, '_blank');
          output = "Opening GitHub...";
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          output = `Command not found: ${cmd}. Try 'help'.`;
      }

      setHistory([...history, `> ${input}`, output]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-10 p-4">
      <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
          <TermIcon size={14} className="text-slate-400" />
          <span className="text-slate-400">guest@mr-robot:~/portfolio</span>
          <div className="flex gap-1.5 ml-auto">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
        </div>
        <div className="p-4 h-48 overflow-y-auto text-emerald-500/90 custom-scrollbar">
          {history.map((line, i) => (
            <div key={i} className="mb-1 break-words">{line}</div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-blue-400">➜</span>
            <span className="text-purple-400">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-emerald-100 flex-1 focus:ring-0"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;