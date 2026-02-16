
import React from 'react';
import { motion } from 'framer-motion';

const ClosingSections: React.FC = () => {
  return (
    <section className="bg-white dark:bg-monday-dark pt-20 pb-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Conversion Engine */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 dark:bg-slate-800 rounded-[48px] p-12 md:p-24 shadow-3xl overflow-hidden mb-32"
        >
          {/* Accent Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-monday-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-monday-green/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-monday-green uppercase tracking-[0.25em]">
              <span className="w-2 h-2 bg-monday-green rounded-full mr-3 animate-pulse"></span>
              Optimization Engine Active
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Ready to <span className="text-monday-blue">Transform</span> your workflow?
            </h2>
            
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Join the future of real estate discovery. Deploy the PSINV engine 
              today and experience unmatched performance and scale.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-monday-blue text-white font-black text-xl rounded-xl shadow-2xl shadow-monday-blue/40 transition-all"
            >
              Start Free Today
            </motion.button>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-32 pb-20">
          <div className="text-center mb-24">
            <h3 className="text-sm font-black text-monday-blue uppercase tracking-[0.3em] mb-4">The Innovation Core</h3>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Built by experts, for experts.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Pillar 
              icon={<UXIcon />}
              title="UX/UI Design"
              description="Crafting intuitive journeys that reduce friction and enhance asset visualization."
              color="#00C875"
            />
            <Pillar 
              icon={<PerformanceIcon />}
              title="Scale & Velocity"
              description="Engineered for 100ms response times across global data sets and local markets."
              color="#FFCB00"
            />
            <Pillar 
              icon={<DataIcon />}
              title="Data Mapping"
              description="Turning static listings into actionable intelligence with proprietary algorithms."
              color="#0073EA"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white dark:text-slate-900 font-black text-xl">P</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">PSINV</span>
          </div>
          
          <div className="text-slate-500 dark:text-slate-400 text-sm font-semibold text-center md:text-left">
            Precision Engineering by the <span className="text-slate-900 dark:text-white font-black">Development Team</span>
          </div>

          <div className="flex space-x-8 text-[11px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-monday-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-monday-blue transition-colors">Security</a>
            <a href="#" className="hover:text-monday-blue transition-colors">Terms</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

const Pillar: React.FC<{ icon: React.ReactNode, title: string, description: string, color: string }> = ({ icon, title, description, color }) => (
  <div className="flex flex-col items-center text-center p-12 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] transition-all hover:-translate-y-2 hover:shadow-xl group">
    <div className="w-20 h-20 rounded-[24px] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110" style={{ color }}>
      {icon}
    </div>
    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{title}</h4>
    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
      {description}
    </p>
  </div>
);

const UXIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>;
const PerformanceIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DataIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;

export default ClosingSections;
