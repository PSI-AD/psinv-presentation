
import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureCard: React.FC = () => {
  return (
    <div className="bg-monday-green-dark rounded-[48px] p-12 text-white shadow-2xl overflow-hidden relative group hover:scale-[1.01] transition-transform duration-500">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-md shadow-inner border border-white/20">
            🚀
          </div>
          <div>
            <span className="text-monday-green-light font-bold text-sm tracking-widest uppercase mb-2 block">Core Technology</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              React.js + AI Core
            </h2>
          </div>
          <p className="text-white/90 text-lg font-medium leading-relaxed max-w-md">
            We moved beyond static pages. Our platform is a dynamic application that pre-fetches data, rendering complex market analysis in milliseconds.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
             {['Zero-Reload Navigation', 'Predictive AI', 'Instant Search'].map(tag => (
               <motion.span 
                 whileHover={{ scale: 1.05 }}
                 key={tag} 
                 className="px-5 py-2.5 bg-white/10 rounded-full text-sm font-bold border border-white/20 backdrop-blur-sm hover:bg-white/20 cursor-default"
               >
                 {tag}
               </motion.span>
             ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-monday-navy/50 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
           <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="text-xs text-slate-400 ml-2 font-mono">AnalysisEngine.tsx</div>
           </div>
           <div className="space-y-4 font-mono text-sm text-green-200 leading-relaxed overflow-x-auto">
             <div className="flex flex-wrap gap-2">
                <span className="text-monday-yellow">import</span> 
                <span className="text-white">AnalysisEngine</span>
                <span className="text-monday-yellow">from</span>
                <span className="text-green-300">'@ai/core'</span>;
             </div>
             <div className="pl-4 border-l-2 border-white/10">
               <span className="text-purple-300">const</span> result = <span className="text-blue-300">await</span> ai.predict({'{'} <br/>
               &nbsp;&nbsp;market: <span className="text-green-300">'Dubai'</span>,<br/>
               &nbsp;&nbsp;roi: <span className="text-orange-300">8.5</span><br/>
               {'}'});
             </div>
             <div className="text-slate-400 opacity-50 text-xs">/* Optimized for 60fps rendering */</div>
           </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ArchitectureCard;
