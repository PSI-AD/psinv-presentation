
import React from 'react';
import { motion } from 'framer-motion';

const HeroDevVisual: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-black text-monday-navy leading-[1.1] tracking-tight mb-6"
      >
        Develop with precision <br/>
        <span className="text-monday-green-dark">and speed.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 font-medium mb-10"
      >
        The advanced real estate engine built for high-performance discovery and seamless UX.
      </motion.p>

      {/* Floating Tech Stack Badges */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {['React.js Architecture', 'Tailwind CSS', 'Firebase Cloud', 'Node.js Engine'].map((tech, i) => (
          <div key={i} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-bold text-gray-700 flex items-center gap-2 hover:border-monday-green-dark transition-colors cursor-default">
            <div className="w-2 h-2 rounded-full bg-monday-green-dark" />
            {tech}
          </div>
        ))}
      </motion.div>

      {/* Hero Abstract UI Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "spring" }}
        className="w-full max-w-5xl bg-monday-navy rounded-t-[32px] p-6 pt-10 shadow-2xl relative overflow-hidden h-[400px]"
      >
         <div className="absolute top-4 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
         </div>
         <div className="mt-8 grid grid-cols-3 gap-6 h-full">
            <div className="col-span-1 bg-white/10 rounded-2xl border border-white/5 p-6 flex flex-col gap-4">
               <div className="h-4 w-1/2 bg-white/20 rounded-full" />
               <div className="h-2 w-full bg-white/10 rounded-full" />
               <div className="h-2 w-3/4 bg-white/10 rounded-full" />
               <div className="mt-auto h-10 w-full bg-monday-blue rounded-xl" />
            </div>
            <div className="col-span-2 bg-white/5 rounded-2xl border border-white/5 p-6">
               <div className="h-40 bg-gradient-to-r from-monday-blue/20 to-monday-green-dark/20 rounded-xl mb-4" />
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-white/10 rounded-xl" />
                  <div className="h-20 bg-white/10 rounded-xl" />
               </div>
            </div>
         </div>
      </motion.div>
    </div>
  );
};
export default HeroDevVisual;
