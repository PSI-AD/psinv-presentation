import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologySearch: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 relative z-10">
          <span className="text-[11px] font-black text-purple-600 uppercase tracking-[0.25em] block pl-4 border-l-4 border-purple-600">The React Advantage</span>
          <h2 className="text-5xl font-black text-monday-navy leading-tight">
            Zero Loads.<br /><span className="text-purple-600">Instant Discovery.</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            We ditched traditional page reloads. By utilizing React's virtual DOM, we've created a search experience that feels less like a website and more like a native application, filtering thousands of properties in milliseconds.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="px-6 py-3 bg-purple-50 rounded-xl font-bold text-purple-700 flex items-center gap-3">⚡ Instant State</div>
            <div className="px-6 py-3 bg-purple-50 rounded-xl font-bold text-purple-700 flex items-center gap-3">🧠 Smart Caching</div>
          </div>
        </div>
        
        {/* Right Side: The Card */}
        <motion.div whileHover={{ scale: 1.02, rotate: 1 }} className="w-full lg:w-1/2 relative z-0">
           <div className="absolute inset-0 bg-purple-200 rounded-[40px] blur-3xl opacity-30 transform rotate-6"></div>
           <div className="bg-white relative rounded-[40px] p-12 shadow-2xl border-2 border-purple-100/50 flex flex-col justify-between min-h-[400px]">
             <div>
               <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-8">⚛️</div>
               <h3 className="text-3xl font-black text-monday-navy mb-4">Component-Driven Architecture</h3>
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 ml-8">
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CoreTechnologySearch;