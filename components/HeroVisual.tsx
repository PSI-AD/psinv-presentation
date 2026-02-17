import React from 'react';
import { motion } from 'framer-motion';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter">
            Real Estate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073EA] to-[#00C875]">Redefined.</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-lg">
            A technical showcase of the React.js architecture, AI-driven search, and 99.9% uptime infrastructure.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#0073EA] text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
              View Architecture
            </button>
          </div>
        </div>
        
        {/* Simple Dashboard Mockup - No Complex 3D */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
           <div className="bg-[#1e2330] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                 <div className="text-2xl font-black text-white">14.2%</div>
                 <div className="text-xs text-gray-500 uppercase font-bold">ROI Index</div>
              </div>
              <div className="flex gap-1 h-32 items-end">
                 <div className="w-full bg-[#0073EA] h-[40%] rounded-t-sm" />
                 <div className="w-full bg-[#0073EA] h-[70%] rounded-t-sm" />
                 <div className="w-full bg-[#0073EA] h-[50%] rounded-t-sm" />
                 <div className="w-full bg-[#00C875] h-[90%] rounded-t-sm" />
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};
export default HeroVisual;