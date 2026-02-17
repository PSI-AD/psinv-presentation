
import React from 'react';
import { motion } from 'framer-motion';

const AiLayerSection: React.FC = () => {
  return (
    <section className="bg-monday-navy py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-[45%] space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Run faster <br/><span className="text-monday-blue-light">with AI.</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Our proprietary intelligence engine automatically categorizes unstructured CRM data, tags property amenities, and calculates lifestyle scores—turning raw feeds into an instantly searchable index.
          </p>
          <ul className="space-y-4 pt-4">
            {['Automated data mapping', 'Predictive search caching', 'Smart lifestyle scoring'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-bold text-gray-300">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[55%] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1e2240] border border-white/10 rounded-[32px] p-8 shadow-2xl relative z-10"
          >
            {/* Abstract AI Dashboard UI */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
               </div>
               <div className="px-3 py-1 bg-monday-blue/20 text-monday-blue-light rounded-full text-[10px] font-black uppercase tracking-widest">Neural Core Active</div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((row) => (
                <div key={row} className="bg-white/5 rounded-xl p-4 flex items-center gap-4 relative overflow-hidden group">
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }} 
                    transition={{ duration: 2, delay: row * 0.3, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                  />
                  <div className="w-10 h-10 rounded-lg bg-monday-blue/20 flex items-center justify-center text-monday-blue text-lg">⚡</div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 bg-white/20 rounded-full w-1/3" />
                    <div className="h-2 bg-white/10 rounded-full w-2/3" />
                  </div>
                  <div className="text-[10px] font-black text-monday-green-dark uppercase tracking-widest">Processed</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-monday-blue/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
export default AiLayerSection;
