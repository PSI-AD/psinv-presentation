
import React from 'react';
import { motion } from 'framer-motion';

const ScaleMetricsCard: React.FC = () => {
  return (
    <div className="bg-monday-navy rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="w-16 h-16 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
          📈
        </div>
        <h2 className="text-4xl font-black mb-6 tracking-tight">Proven Scale & Stability</h2>
        <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto">
          Our architecture isn't just theoretical. It handles massive traffic loads while maintaining a perfect 100/100 Google Lighthouse score.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <MetricItem 
          value="179K+" 
          label="Organic Clicks" 
          color="text-monday-blue" 
          sub="30-Day Volume"
        />
        <MetricItem 
          value="36K" 
          label="Active Users" 
          color="text-monday-green-dark" 
          sub="Global Access"
        />
        <MetricItem 
          value="552K" 
          label="Backlinks" 
          color="text-monday-yellow" 
          sub="Domain Authority"
        />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-monday-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
};

const MetricItem: React.FC<{value: string, label: string, color: string, sub: string}> = ({value, label, color, sub}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-default group backdrop-blur-sm"
  >
    <div className={`text-6xl font-black ${color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
      {value}
    </div>
    <div className="text-white font-bold text-lg mb-1">
      {label}
    </div>
    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold opacity-60">
      {sub}
    </div>
  </motion.div>
);

export default ScaleMetricsCard;
