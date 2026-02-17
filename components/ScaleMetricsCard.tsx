
import React from 'react';
import { motion } from 'framer-motion';

const ScaleMetricsCard: React.FC = () => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-monday-navy rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 card-shadow text-white"
    >
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">Built for <br/><span className="text-monday-blue-light">innovation.</span></h2>
        <p className="text-gray-400 font-medium">Proven stability backed by continuous optimization.</p>
      </div>
      
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 hover:bg-white/10 transition-colors">
           <div className="text-5xl font-black text-monday-yellow mb-2">179K+</div>
           <div className="text-sm font-bold text-gray-300 uppercase tracking-widest">Organic Clicks</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 hover:bg-white/10 transition-colors">
           <div className="text-5xl font-black text-monday-green-dark mb-2">36,000+</div>
           <div className="text-sm font-bold text-gray-300 uppercase tracking-widest">Active Users</div>
        </div>
      </div>
    </motion.div>
  );
};
export default ScaleMetricsCard;
