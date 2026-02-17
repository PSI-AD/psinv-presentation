import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium Framed Tools Data
const tools = [
  { id: 'react', name: 'React Core', bg: 'bg-white', text: 'text-[#0073ea]', border: 'border-blue-100', icon: '⚛️', startX: '-30vw', startY: '-20vh' },
  { id: 'ts', name: 'TypeScript', bg: 'bg-white', text: 'text-blue-600', border: 'border-blue-200', icon: '📘', startX: '-15vw', startY: '-25vh' },
  { id: 'node', name: 'Node.js', bg: 'bg-white', text: 'text-green-600', border: 'border-green-200', icon: '🟢', startX: '-35vw', startY: '5vh' },
  { id: 'vite', name: 'Vite Engine', bg: 'bg-white', text: 'text-purple-500', border: 'border-purple-200', icon: '⚡', startX: '30vw', startY: '-20vh' },
  { id: 'git', name: 'Version Control', bg: 'bg-white', text: 'text-orange-500', border: 'border-orange-200', icon: '📦', startX: '15vw', startY: '-25vh' },
  { id: 'figma', name: 'Figma UI/UX', bg: 'bg-white', text: 'text-pink-500', border: 'border-pink-200', icon: '🎨', startX: '35vw', startY: '5vh' },
  { id: 'light', name: 'Lighthouse', bg: 'bg-white', text: 'text-orange-400', border: 'border-orange-200', icon: '📈', startX: '-25vw', startY: '25vh' },
  { id: 'sem', name: 'Semrush Audit', bg: 'bg-white', text: 'text-yellow-500', border: 'border-yellow-200', icon: '🔍', startX: '-10vw', startY: '30vh' },
  { id: 'fire', name: 'Firebase', bg: 'bg-white', text: 'text-amber-500', border: 'border-amber-200', icon: '☁️', startX: '25vw', startY: '25vh' },
  { id: 'cloud', name: 'Cloudflare', bg: 'bg-white', text: 'text-orange-500', border: 'border-orange-200', icon: '🛡️', startX: '10vw', startY: '30vh' }
];

const HeroDevVisual: React.FC = () => {
  const [isAssembled, setIsAssembled] = useState(false);

  // Auto-assemble after 1.5 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const triggerReplay = () => {
    setIsAssembled(false);
    setTimeout(() => setIsAssembled(true), 500);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[900px] flex flex-col items-center justify-center bg-gradient-to-b from-[#F4F7FB] to-white overflow-hidden">
      
      {/* Embedded Header Elements */}
      <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-monday-blue rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">P</div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">PSINV <span className="font-bold text-slate-400 text-sm tracking-normal">| Web Dev Dept</span></span>
        </div>
        <a 
          href="https://psinv.net" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-black text-monday-blue shadow-lg hover:border-monday-blue hover:shadow-blue-500/20 transition-all flex items-center gap-2"
        >
          Visit Platform <span className="text-lg leading-none">&rarr;</span>
        </a>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-monday-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00C875]/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Headers */}
      <div className="relative z-20 text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          The Anatomy of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-[#00C875]">Performance.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          We combined industry-leading frameworks, infrastructure, and auditing tools to engineer the ultimate real estate platform.
        </p>
      </div>

      {/* The Central Laptop Assembly Area */}
      <div 
        className="relative z-10 w-full max-w-5xl cursor-pointer"
        onMouseEnter={() => setIsAssembled(true)}
      >
        <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-900 rounded-t-[24px] border-[10px] border-b-0 border-slate-800 relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
          
          {/* Laptop Screen Header */}
          <div className="h-8 bg-slate-950 flex items-center px-4 space-x-2 border-b border-white/5 relative z-20">
            <div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/>
            <div className="ml-auto text-[10px] font-black text-slate-600 uppercase tracking-widest">System Architecture Matrix</div>
          </div>

          {/* The Grid / Docking Stations */}
          <div className="flex-1 p-6 md:p-10 relative z-10">
             
             {/* The Grand Success Message (Fades in when assembled) */}
             <AnimatePresence>
               {isAssembled && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.5 }}
                   className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm"
                 >
                   <div className="w-20 h-20 bg-monday-green/20 rounded-full flex items-center justify-center mb-6">
                     <span className="text-4xl">✅</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Architecture Deployed.</h2>
                   <p className="text-monday-green font-bold uppercase tracking-widest text-sm">All systems nominal. 100ms Latency Achieved.</p>
                 </motion.div>
               )}
             </AnimatePresence>

             {/* Grid layout for the specific slots */}
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 h-full relative z-10">
                {tools.map((tool) => (
                  <div key={tool.id} className="relative w-full h-full flex flex-col items-center justify-center">
                    
                    {/* Ghost Placeholder (Fades out when tool arrives) */}
                    <motion.div 
                      animate={{ opacity: isAssembled ? 0 : 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-slate-700"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dashed border-slate-700 mb-2" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-center">{tool.name}</span>
                    </motion.div>

                    {/* The Actual Tool Element */}
                    <motion.div
                      animate={
                        isAssembled 
                          ? { x: 0, y: 0, scale: 1, opacity: 1 } 
                          : { x: tool.startX, y: [tool.startY, `calc(${tool.startY} - 2vh)`, tool.startY], scale: 1.3, opacity: 0.9 }
                      }
                      transition={
                        isAssembled 
                          ? { type: "spring", stiffness: 40, damping: 12, mass: 1 } // Smooth, slow settlement
                          : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, type: "spring" } // Floating idle
                      }
                      className="absolute z-20 flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 md:w-20 md:h-20 ${tool.bg} rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-2xl border-4 ${tool.border}`}>
                        {tool.icon}
                      </div>
                      {/* Name tag appears only when floating */}
                      {!isAssembled && (
                        <div className="mt-3 px-3 py-1 bg-white rounded-full shadow-lg border border-gray-100">
                           <span className={`text-[10px] font-black uppercase tracking-widest ${tool.text}`}>{tool.name}</span>
                        </div>
                      )}
                    </motion.div>

                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="w-[105%] -ml-[2.5%] h-5 bg-slate-300 rounded-b-[16px] shadow-2xl relative z-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1.5 bg-slate-400 rounded-b-lg" />
        </div>
      </div>

      {/* Manual Replay Button */}
      <motion.button 
        onClick={triggerReplay}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-10 right-10 w-14 h-14 bg-white border border-gray-200 rounded-full shadow-xl flex items-center justify-center text-slate-600 hover:text-monday-blue hover:border-monday-blue transition-colors z-50 group"
        aria-label="Replay Assembly Animation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        {/* Tooltip */}
        <span className="absolute -top-10 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Replay Assembly
        </span>
      </motion.button>
    </section>
  );
};

export default HeroDevVisual;