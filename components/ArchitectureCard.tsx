import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureCard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        className="bg-[#00854d] rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-2xl overflow-hidden relative"
      >
        {/* Background Decor */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
        
        <div className="w-full md:w-1/2 relative z-10 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
            Core Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Your go-to property <br/>intelligence platform.
          </h2>
          <p className="text-lg text-green-100 font-medium leading-relaxed">
            We engineered a custom React architecture that eliminates page reloads. Users filter thousands of properties instantly, creating a frictionless journey from discovery to conversion.
          </p>
          <ul className="space-y-4">
            {['Zero-reload state management', 'Component-driven UI library', 'Real-time API integrations'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-bold text-white">
                <div className="w-6 h-6 rounded-full bg-white text-[#00854d] flex items-center justify-center text-xs">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <div className="bg-[#1e2330] rounded-[24px] p-6 shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-bold text-white/50 uppercase tracking-widest">React Tree</div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">Active</div>
             </div>
             <div className="space-y-3">
                <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4"><div className="h-2 w-1/3 bg-white/20 rounded-full"/></div>
                <div className="h-12 bg-white/10 rounded-xl border border-white/20 flex items-center px-4 ml-6"><div className="h-2 w-1/2 bg-white/40 rounded-full"/></div>
                <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 ml-12"><div className="h-2 w-1/4 bg-white/20 rounded-full"/></div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ArchitectureCard;