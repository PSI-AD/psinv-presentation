
import React from 'react';
import { motion } from 'framer-motion';

const HeroDevVisual: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-white rounded-full shadow-sm text-xs font-black text-monday-green-dark uppercase tracking-widest border border-monday-green-dark/10"
        >
          Internal Presentation
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-monday-navy leading-[1.1] tracking-tight">
          The <span className="text-monday-blue">Digital Engine</span><br />
          Behind PSINV.
        </h1>
        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
          A deep dive into the React architecture, AI integration, and scalable infrastructure powering our real estate intelligence platform.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-monday-green-dark animate-pulse"></div>
             <span className="text-sm font-bold text-slate-700">Systems Online</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-monday-blue animate-pulse"></div>
             <span className="text-sm font-bold text-slate-700">AI Active</span>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative">
         <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-white rounded-[40px] p-8 card-shadow border border-white/50 relative z-10 overflow-hidden"
         >
           <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 rounded-2xl bg-monday-blue/10 flex items-center justify-center text-2xl">⚛️</div>
             <div>
               <div className="h-4 w-32 bg-slate-100 rounded-md mb-2"></div>
               <div className="h-3 w-20 bg-slate-100 rounded-md"></div>
             </div>
           </div>
           <div className="space-y-4">
             <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full animate-[shimmer_2s_infinite]"></div>
             </div>
             <div className="flex gap-4">
               <div className="h-16 bg-monday-blue/5 rounded-2xl w-1/3"></div>
               <div className="h-16 bg-monday-green-light/50 rounded-2xl w-1/3"></div>
               <div className="h-16 bg-monday-yellow/10 rounded-2xl w-1/3"></div>
             </div>
           </div>
         </motion.div>
         {/* Decorative elements */}
         <div className="absolute top-10 -right-10 w-32 h-32 bg-monday-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>
         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-monday-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroDevVisual;
