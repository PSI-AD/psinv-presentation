
import React from 'react';
import { motion } from 'framer-motion';
import MortgageCalculator from './MortgageCalculator';

const InteractiveToolsSection: React.FC = () => {
  return (
    <section className="bg-[#F0F4F8] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Center: Copy & Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-black text-[#6161FF] uppercase tracking-[0.2em] mb-4 block">Engineered Interactivity</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B2C32] leading-tight mb-8">
              Client-Side Processing:<br />
              <span className="text-gray-400">The Mortgage Engine.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Modern web experiences require interactivity. We developed our Mortgage Calculator 
              to process financial logic directly in the user's browser. This eliminates server lag, 
              allowing users to slide downpayments and interest rates in real-time. It transforms 
              passive browsing into active financial planning.
            </p>
          </motion.div>
        </div>

        {/* Bottom Center: Floating Calculator Card */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              duration: 0.8
            }}
            className="w-full max-w-lg bg-white rounded-[32px] p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white/50 relative z-10"
          >
            {/* Window Decor */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <div className="ml-4 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest">
                calc.v2.worker.js
              </div>
            </div>

            <MortgageCalculator />
          </motion.div>

          {/* Metric Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="flex items-center space-x-3 px-6 py-2.5 bg-[#2B2C32] rounded-full shadow-lg">
              <div className="w-2 h-2 bg-[#6161FF] rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                Calculation Latency: <span className="text-[#6161FF]">&lt; 10ms</span>
              </span>
            </div>
            <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Verified Browser-Side Execution
            </p>
          </motion.div>

          {/* Abstract background decorative shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6161FF]/5 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default InteractiveToolsSection;
