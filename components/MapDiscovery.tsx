
import React from 'react';
import { motion } from 'framer-motion';

const MapDiscovery: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="relative mb-6">
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 bg-[#00D1FF] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 bg-[#00D1FF] rounded-full"
        />
        <div className="relative w-16 h-16 bg-[#00D1FF] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-cyan-500/20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-black text-[#2B2C32]">Map Discovery</h3>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Global Reach</p>
    </div>
  );
};

export default MapDiscovery;
