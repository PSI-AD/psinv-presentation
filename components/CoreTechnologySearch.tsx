import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologySearch: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#0f111a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Interactive Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative z-10 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            {/* Code Block Illusion */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"/>
              <div className="w-3 h-3 rounded-full bg-yellow-500"/>
              <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <div className="font-mono text-sm space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-2xl">⚛️</div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold">React Architecture</div>
                  <div className="text-slate-500 text-xs">Zero-Reload Framework</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-2xl">🧠</div>
                <div>
                  <div className="text-purple-600 dark:text-purple-400 font-bold">AI Structuring</div>
                  <div className="text-slate-500 text-xs">Automated Data Organization</div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-monday-blue to-cyan-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            >
              10x Faster
            </motion.div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
              Built with React & AI.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-purple-600">Engineered for Humans.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              We utilized React to build a frictionless experience. Instead of loading new pages, our platform filters thousands of properties instantly—feeling more like a native app than a website.
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap gap-3"
          >
            {['Instant Search', 'Predictive Loading', 'Automated Freshness'].map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CoreTechnologySearch;