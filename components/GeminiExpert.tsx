
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GeminiExpert: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!query) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setQuery('');
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#2B2C32] rounded-[12px] p-6 text-white shadow-xl relative overflow-hidden group">
      {/* Subtle Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6161FF]/10 rounded-full blur-3xl group-hover:bg-[#6161FF]/20 transition-all duration-700"></div>
      
      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6161FF] to-[#9292FF] flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-sm tracking-tight leading-none">Investment AI</h3>
          <span className="text-[10px] text-[#6161FF] font-black uppercase tracking-widest mt-1">Experimental</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 rounded-[8px] p-4 border border-white/10"
        >
          <p className="text-[11px] text-gray-400 italic font-medium">"Analyze the 5-year cap rate projection for the Williamsburg industrial zone."</p>
        </motion.div>
        
        <div className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="w-full bg-white/5 border border-white/10 rounded-[8px] py-3 px-4 text-xs focus:outline-none focus:border-[#6161FF] focus:ring-2 focus:ring-[#6161FF]/20 pr-12 transition-all placeholder:text-gray-600"
          />
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAnalyze}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#6161FF] rounded-[6px] flex items-center justify-center text-white shadow-lg"
          >
            {isAnalyzing ? (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center relative z-10">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Powered by Gemini 3</span>
        <div className="flex space-x-1.5">
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#6161FF]"></motion.div>
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#6161FF]"></motion.div>
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#6161FF]"></motion.div>
        </div>
      </div>
    </div>
  );
};

export default GeminiExpert;
