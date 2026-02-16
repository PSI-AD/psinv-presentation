
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedSearch: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['Multi-family', 'Cap Rate > 5%', 'Turnkey']);
  const availableTags = ['Distressed', 'Fixer Upper', 'Single Family', 'Commercial', 'Zoned R3'];

  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h3 className="font-bold text-xl text-[#2B2C32]">Advanced Filters</h3>
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live Engine</span>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#6161FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Search by neighborhood or ZIP..." 
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#6161FF] focus:ring-4 focus:ring-[#6161FF]/5 text-sm transition-all"
          readOnly
        />
      </div>

      <div className="space-y-4">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Active Criteria</p>
        <div className="flex flex-wrap gap-2 min-h-[32px]">
          <AnimatePresence mode="popLayout">
            {tags.map(tag => (
              <motion.button 
                key={tag}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => toggleTag(tag)}
                className="px-4 py-1.5 bg-[#6161FF] text-white text-[11px] font-bold rounded-full flex items-center space-x-2 hover:bg-[#5252FF] shadow-sm transition-colors"
              >
                <span>{tag}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em] mt-6">Suggested Parameters</p>
        <div className="flex flex-wrap gap-2">
          {availableTags.filter(t => !tags.includes(t)).map(tag => (
            <motion.button 
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleTag(tag)}
              className="px-4 py-1.5 border border-gray-200 text-gray-500 text-[11px] font-semibold rounded-full hover:border-[#6161FF] hover:text-[#6161FF] hover:bg-indigo-50 transition-all"
            >
              + {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
