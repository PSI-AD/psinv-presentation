
import React from 'react';
import { motion } from 'framer-motion';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata"
          poster="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920"
          aria-hidden="true"
          className="w-full h-full object-cover grayscale opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42358-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 glass-panel rounded-full text-[11px] font-black text-white uppercase tracking-[0.25em]"
          >
            <span className="w-2 h-2 bg-monday-yellow rounded-full mr-3 animate-pulse"></span>
            2026 Innovation Cycle
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter"
          >
            Real Estate<br />
            <span className="text-monday-blue">Redefined</span> by<br />
            Intelligence.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-xl text-slate-200 font-medium leading-relaxed"
          >
            Experience a high-performance search engine built for scale, 
            comparison, and financial mapping. Engineered for the future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="px-10 py-5 bg-monday-blue text-white font-black text-lg rounded-xl shadow-2xl shadow-monday-blue/40 hover:scale-105 active:scale-95 transition-all">
              Deploy PSINV
            </button>
            <button className="px-10 py-5 glass-panel text-white font-black text-lg rounded-xl hover:bg-white/20 transition-all">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating UI Elements over Video */}
        <div className="hidden lg:block relative h-[500px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-0 right-0 w-[440px] glass-panel p-8 rounded-[32px] shadow-3xl overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-monday-red rounded-full" />
                <div className="w-3 h-3 bg-monday-yellow rounded-full" />
                <div className="w-3 h-3 bg-monday-green rounded-full" />
              </div>
              <div className="text-[10px] font-black text-white/50 uppercase tracking-widest">Yield Dashboard</div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm font-bold text-white/60 mb-1 uppercase">Est. ROI</div>
                  <div className="text-5xl font-black text-monday-green">14.2%</div>
                </div>
                <div className="flex items-end space-x-1 h-16">
                  {[30, 60, 45, 90, 70, 100].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="w-4 bg-monday-blue rounded-t-sm" 
                    />
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex gap-4">
                 <div className="flex-1 h-10 bg-monday-blue/20 rounded-lg flex items-center justify-center text-monday-blue font-black text-xs uppercase tracking-widest">Analysis</div>
                 <div className="flex-1 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 font-black text-xs uppercase tracking-widest">Reports</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
            className="absolute bottom-10 left-0 px-6 py-4 glass-panel rounded-2xl shadow-xl flex items-center space-x-4 border-l-4 border-monday-yellow"
          >
            <div className="w-12 h-12 bg-monday-yellow/20 rounded-xl flex items-center justify-center text-monday-yellow">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-xl font-black text-white leading-none">0.2ms</div>
              <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">Data Index Latency</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-monday-dark to-transparent z-10" />
    </div>
  );
};

export default HeroVisual;
