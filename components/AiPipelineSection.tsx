
import React from 'react';
import { motion } from 'framer-motion';

const AiPipelineSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#111217] text-white overflow-hidden relative">
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A259FF]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black text-[#A259FF] uppercase tracking-[0.25em] mb-4 block"
          >
            Backend Intelligence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Structuring Chaos<br /><span className="text-[#A259FF]">Into Clarity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our proprietary node.js pipeline processes 50,000+ data points nightly, normalizing disparate feeds into a unified, high-speed search index.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { title: "Raw Data Ingestion", icon: "⬇️", desc: "Automated cleaning of 15+ external CRM feeds." },
            { title: "Neural Classification", icon: "🧠", desc: "AI tagging of property features and amenities." },
            { title: "Instant Indexing", icon: "⚡", desc: "Pushing to edge nodes in < 200ms." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1D24] border border-[#A259FF]/20 p-10 rounded-[32px] relative overflow-hidden group hover:border-[#A259FF]/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A259FF] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl mb-6 bg-[#2B2C33] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AiPipelineSection;
