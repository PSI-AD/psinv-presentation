import React from 'react';
import { motion } from 'framer-motion';

const PremiumHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-[#F0F4F8] dark:bg-slate-900 transition-colors min-h-[900px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-monday-blue/10 dark:bg-monday-blue/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00C875]/10 dark:bg-[#00C875]/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="w-2 h-2 rounded-full bg-monday-blue animate-pulse mr-3" />
            <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-[0.2em]">PSINV Development Hub</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
            The Pinnacle of<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-[#00C875]">Digital Real Estate.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
            We didn't just build a website. We engineered a high-velocity, AI-powered property ecosystem that sets a new industry standard.
          </motion.p>
        </div>

        {/* Visual Mockup: Computer / Code / UI */}
        <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: 10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative perspective-1000">
          <div className="w-full aspect-[4/3] bg-slate-800 rounded-t-3xl rounded-b-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 flex flex-col overflow-hidden relative">
            
            {/* Screen Header */}
            <div className="h-6 bg-slate-900 flex items-center px-4 space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-yellow-500"/><div className="w-2 h-2 rounded-full bg-green-500"/>
            </div>

            {/* Screen Content Split */}
            <div className="flex-1 flex bg-[#0d1117]">
              {/* Left: Code Editor */}
              <div className="w-1/2 border-r border-slate-700/50 p-6 font-mono text-[10px] text-slate-400">
                <p className="text-pink-400">import <span className="text-blue-300">{' { AI_Engine } '}</span>from <span className="text-green-300">'@psinv/core'</span>;</p>
                <p className="mt-4 text-purple-400">const <span className="text-yellow-300">initPlatform</span> = async () =&gt; {'{'}</p>
                <p className="ml-4 text-slate-500">// Bootstrapping 50k properties</p>
                <p className="ml-4">await <span className="text-blue-300">AI_Engine</span>.index();</p>
                <p className="ml-4">return <span className="text-green-300">"100ms Latency"</span>;</p>
                <p>{'}'}</p>
              </div>

              {/* Right: Abstract UI Output */}
              <div className="w-1/2 p-6 bg-white relative overflow-hidden">
                <div className="h-4 w-1/2 bg-slate-200 rounded mb-6" />
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center px-3 gap-3">
                      <div className="w-6 h-6 rounded bg-monday-blue/20" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 w-3/4 bg-slate-200 rounded" />
                        <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="text-3xl">🚀</div>
              <div>
                <div className="text-xs font-black text-slate-900">React Core</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Compiled</div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-8 bottom-20 bg-[#00C875] text-white p-4 rounded-2xl shadow-xl border border-[#00A05D] flex items-center gap-3">
              <div className="text-3xl">🧮</div>
              <div>
                <div className="text-xs font-black">Live Mortgage</div>
                <div className="text-[9px] text-green-100 uppercase tracking-widest mt-1">Active</div>
              </div>
            </motion.div>
          </div>
          {/* Laptop Base */}
          <div className="w-[110%] -ml-[5%] h-4 bg-slate-300 rounded-b-xl shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-slate-400 rounded-b-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default PremiumHero;