
import React from 'react';
import { motion } from 'framer-motion';

const PerformanceAudit: React.FC = () => {
  const scores = [
    { label: "Performance", score: 99, color: "text-emerald-400", ring: "ring-emerald-400" },
    { label: "Accessibility", score: 100, color: "text-emerald-400", ring: "ring-emerald-400" },
    { label: "Best Practices", score: 100, color: "text-emerald-400", ring: "ring-emerald-400" },
    { label: "SEO", score: 100, color: "text-emerald-400", ring: "ring-emerald-400" }
  ];

  return (
    <section className="bg-monday-navy py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Engineered for <span className="text-emerald-400">Perfection.</span></h2>
        <p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">
          Independent Google Lighthouse audits confirm our architecture meets the highest possible standards for modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {scores.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className={`w-32 h-32 rounded-full ring-4 ${item.ring} flex items-center justify-center bg-emerald-400/10 mb-6 shadow-[0_0_30px_rgba(52,211,153,0.2)]`}>
                <span className={`text-4xl font-black ${item.color}`}>{item.score}</span>
              </div>
              <h4 className="text-white font-bold tracking-wide">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PerformanceAudit;
