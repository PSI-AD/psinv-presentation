import React from 'react';
import { motion } from 'framer-motion';

const PerformanceScaleSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: CONTENT (Opposite of Previous Section) */}
        <div className="space-y-8">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <span className="text-[#00C875] font-black uppercase tracking-[0.25em] mb-4 block">Proven Stability</span>
             <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6">
               Ongoing Excellence.<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C875] to-[#0073EA]">Verified by Data.</span>
             </h2>
             <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
               Our team monitors core web vitals 24/7. These metrics aren't just numbers; they represent thousands of successful user journeys every day, backed by rigorous automated testing.
             </p>
           </motion.div>

           {/* Metrics Grid */}
           <div className="grid grid-cols-2 gap-6 pt-8">
              <MetricItem label="Organic Clicks" value="179K+" color="text-[#0073EA]" />
              <MetricItem label="Monthly Users" value="36K+" color="text-[#00C875]" />
              <MetricItem label="Backlinks" value="552K" color="text-[#FFCB00]" />
              <MetricItem label="Uptime" value="99.9%" color="text-purple-400" />
           </div>
        </div>

        {/* RIGHT: VISUALIZATION */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
           {/* Abstract Chart Representation */}
           <div className="relative z-10 bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
              <div className="h-64 flex items-end justify-between gap-4 px-4 pb-4 border-b border-slate-700">
                 {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-[#0073EA] to-[#00C875] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                    />
                 ))}
              </div>
              <div className="flex justify-between pt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                 <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
              </div>
           </div>

           {/* Decorative Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#00C875]/20 to-[#0073EA]/20 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

const MetricItem: React.FC<{label: string, value: string, color: string}> = ({ label, value, color }) => (
  <div className="border-l-4 border-slate-700 pl-4">
    <div className={`text-3xl font-black ${color}`}>{value}</div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</div>
  </div>
);

export default PerformanceScaleSection;