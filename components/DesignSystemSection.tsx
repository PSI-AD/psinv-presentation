
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hotspot: React.FC<{ x: string; y: string; label: string }> = ({ x, y, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute z-30 pointer-events-auto" 
      style={{ left: x, top: y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative cursor-help">
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-monday-blue rounded-full"
        />
        <div className="w-5 h-5 bg-monday-blue border-4 border-white dark:border-slate-800 rounded-full shadow-xl" />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-[16px] shadow-2xl text-xs font-bold leading-relaxed z-50 border border-white/10"
            >
              {label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 dark:bg-slate-800 rotate-45 -mt-1.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const DesignSystemSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-monday-dark py-32 px-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        
        {/* Editorial Typography */}
        <div className="w-full lg:w-[45%] space-y-10">
          <div className="space-y-6">
            <span className="text-[11px] font-black text-monday-blue uppercase tracking-[0.25em]">Visual Engineering</span>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
              Information Architecture & <span className="text-monday-blue">Typography.</span>
            </h2>
          </div>

          <div className="space-y-8 text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            <p>
              Data density is the enemy of decision making. To prevent cognitive overload, we engineered a custom typography system focused on speed.
            </p>
            <p>
              By utilizing specialized font hierarchies that scale across 4K monitors and mobile viewports, we ensure payment plans and technical amenities are effortlessly readable at any resolution.
            </p>
          </div>

          <div className="pt-10 flex items-center space-x-12 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900 dark:text-white">Figtree</span>
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1">Interface Typeface</span>
            </div>
            <div className="w-px h-14 bg-slate-100 dark:bg-slate-800" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900 dark:text-white">Semibold</span>
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1">Optical Clarity</span>
            </div>
          </div>
        </div>

        {/* Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%]"
        >
          <div className="relative bg-slate-50 dark:bg-slate-800/80 rounded-[48px] p-8 md:p-16 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden min-h-[500px]">
            <div className="flex justify-between items-center mb-16">
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">Marina Vista</h3>
                <p className="text-base font-bold text-slate-400 dark:text-slate-500">Premium Beachfront, Emaar</p>
              </div>
              <div className="px-6 py-2.5 bg-white dark:bg-slate-900 rounded-full shadow-lg text-xs font-black text-monday-blue uppercase tracking-[0.2em]">
                Verified Asset
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
              <Hotspot x="10%" y="25%" label="High-contrast headings guide the eye instantly to key value metrics." />
              <Hotspot x="85%" y="60%" label="Icon-driven layouts for amenities ensure rapid context scanning." />
              
              <div className="space-y-8">
                <div className="p-8 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group hover:border-monday-blue transition-all">
                  <div className="absolute top-0 left-0 w-2 h-full bg-monday-blue" />
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">Price Estimate</span>
                  <p className="text-4xl font-black text-slate-900 dark:text-white">AED 2,100,000</p>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-3 w-[85%] bg-slate-200 dark:bg-slate-700 rounded-full opacity-60" />
                  <div className="h-3 w-[60%] bg-slate-200 dark:bg-slate-700 rounded-full opacity-40" />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-sm p-8">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 block">Amenities Matrix</span>
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-monday-blue">
                        <div className="w-4 h-4 bg-monday-blue/20 rounded" />
                      </div>
                      <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-monday-blue/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSystemSection;
