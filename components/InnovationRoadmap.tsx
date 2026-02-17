
import React from 'react';
import { motion } from 'framer-motion';

const InnovationRoadmap: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-[#18191C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">The 2026 Roadmap</h2>
          <p className="text-slate-500 font-medium">What's coming next for the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { q: "Q2 2026", title: "Voice Search", desc: "Natural language processing for hands-free property discovery.", color: "bg-[#FF9900]" },
            { q: "Q3 2026", title: "3D Virtual Tours", desc: "Browser-based VR walkthroughs without external plugins.", color: "bg-[#FF5F57]" },
            { q: "Q4 2026", title: "Smart Contracts", desc: "Blockchain integration for transparent offer management.", color: "bg-[#5D00FF]" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-slate-50 dark:bg-[#242529] border border-slate-100 dark:border-slate-800 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-10 rounded-bl-[100px]`} />
              <span className={`inline-block px-3 py-1 rounded-lg ${item.color} text-white text-[10px] font-black uppercase tracking-widest mb-6`}>
                {item.q}
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InnovationRoadmap;
