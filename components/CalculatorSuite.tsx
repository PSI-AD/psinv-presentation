
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CalculatorSuite: React.FC = () => {
  const [amount, setAmount] = useState(450000);
  const monthly = Math.round((amount * 0.065) / 12);

  return (
    <div className="flex flex-col h-full justify-between p-10 bg-white dark:bg-slate-800 transition-colors">
      <div>
        <div className="w-14 h-14 bg-monday-yellow rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-xl shadow-monday-yellow/20">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Calculator Suite</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          Instantly verify the feasibility of any deal with real-time rate integration and browser-side logic.
        </p>
      </div>

      <div className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-[24px] p-8 border border-slate-200 dark:border-slate-700">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Loan Amount</span>
            <span className="text-lg font-black text-monday-blue">${amount.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="100000" 
            max="1000000" 
            step="10000"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-monday-blue"
          />
        </div>

        <div className="flex flex-col items-center">
          <motion.p 
            key={monthly}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-slate-900 dark:text-white"
          >
            ${monthly.toLocaleString()}
          </motion.p>
          <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase mt-2 tracking-widest">Est. Monthly Payment</span>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSuite;
