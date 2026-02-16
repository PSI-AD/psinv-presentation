
import React from 'react';
import { motion } from 'framer-motion';

const tags = [
  "Price Range", "Near Metro", "ROI > 7%", "Multi-family", "Cap Rate 5%+", 
  "Fixer Upper", "Turnkey", "Zoned R3", "Distressed", "Commercial", 
  "School District", "Walk Score > 80", "Solar Ready", "HOA Free", "Newly Renovated"
];

const AdvancedIntelligenceSearch: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden py-10 px-6">
      <div className="relative z-20 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 shadow-xl flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#6161FF] rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <div className="h-2 w-32 bg-gray-100 rounded-full mb-2" />
            <div className="h-3 w-48 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Animated Tags */}
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 400 - 200, 
            y: Math.random() * 200 - 100, 
            opacity: 0 
          }}
          animate={{ 
            x: [
              Math.random() * 400 - 200, 
              Math.random() * 400 - 200, 
              Math.random() * 400 - 200
            ],
            y: [
              Math.random() * 200 - 100, 
              Math.random() * 200 - 100, 
              Math.random() * 200 - 100
            ],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute z-10 px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 shadow-sm whitespace-nowrap"
        >
          {tag}
        </motion.div>
      ))}
      
      <div className="mt-8 text-center relative z-20">
        <h3 className="text-xl font-black text-[#2B2C32]">Advanced Intelligence Search</h3>
        <p className="text-sm text-gray-400 font-medium">Predictive filtering for high-yield assets.</p>
      </div>
    </div>
  );
};

export default AdvancedIntelligenceSearch;
