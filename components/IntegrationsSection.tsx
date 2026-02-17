
import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight relative z-20 mb-6"
        >
          Connect <br/><span className="text-gray-300 font-light">everything.</span>
        </motion.h2>
        <p className="text-lg text-gray-500 font-medium relative z-20 mb-16">
          Seamlessly integrated with industry-leading tools to unite your data pipeline.
        </p>

        {/* Abstract Floating Integration Nodes */}
        <div className="relative h-[300px] w-full max-w-2xl mx-auto">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-0 left-10 w-20 h-20 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-3xl z-10">📊</motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-4xl z-20">🎯</motion.div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} className="absolute top-10 right-1/4 w-28 h-28 bg-white rounded-[32px] shadow-2xl border border-gray-100 flex items-center justify-center text-5xl z-20">⚙️</motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }} className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-2xl z-10">🔒</motion.div>
          
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-monday-blue rounded-full shadow-[0_0_80px_rgba(0,115,234,0.4)] flex items-center justify-center text-white font-black text-3xl z-0">
             API
          </div>
        </div>

      </div>
    </section>
  );
};
export default IntegrationsSection;
