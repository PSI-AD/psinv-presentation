
import React from 'react';
import { motion } from 'framer-motion';

const SecurityInfrastructure: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#18191C]">
      <div className="max-w-7xl mx-auto bg-[#E3F5FF] dark:bg-[#00D2FF]/10 rounded-[48px] p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-[#00D2FF] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-cyan-500/30">
              Enterprise Grade
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#003E4F] dark:text-[#00D2FF] leading-tight">
              Fortified<br />Infrastructure.
            </h2>
            <p className="text-[#005F79] dark:text-cyan-100/70 text-lg font-medium leading-relaxed">
              Security isn't an afterthought. We deploy banking-grade SSL encryption, automated DDoS protection, and hourly cloud backups to ensure business continuity.
            </p>
            <div className="flex gap-4">
              {['SSL Secured', 'DDoS Shield', 'Cloud Backup'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-lg text-xs font-bold text-[#005F79] dark:text-cyan-200">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-[#111217] p-8 rounded-[32px] shadow-2xl border border-cyan-100 dark:border-cyan-900/30"
            >
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Current Status</p>
                  <p className="text-2xl font-black text-green-500">Operational</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.6)]" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold text-slate-600 dark:text-slate-400">
                  <span>Uptime (30 Days)</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#00D2FF] h-full w-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecurityInfrastructure;
