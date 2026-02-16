
import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString() + suffix);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [target, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const PerformanceDashboard: React.FC = () => {
  const lineData = [
    { users: 400 }, { users: 600 }, { users: 550 }, { users: 900 }, 
    { users: 1200 }, { users: 1100 }, { users: 1500 }, { users: 1400 },
    { users: 1800 }, { users: 1750 }, { users: 2100 }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Panel */}
        <div className="lg:w-[55%] space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] font-black text-monday-blue uppercase tracking-[0.25em]">Velocity Layer</span>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">Engineered for<br />Absolute Velocity.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Real-time infrastructure that updates faster than the market. Our sub-second indexing ensures your data is always current, providing a competitive edge in fast-moving real estate cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[24px] p-8 transition-all hover:border-monday-blue/30">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Network Score</span>
                <span className="text-xl font-black text-monday-green">99.9%</span>
              </div>
              <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '99.9%' }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-monday-blue"
                />
              </div>
              <p className="mt-6 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Server Uptime Consistency</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[24px] p-8 transition-all hover:border-monday-blue/30 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Traffic Load</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-monday-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Live</span>
                </div>
              </div>
              <div className="flex-grow h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <Line type="monotone" dataKey="users" stroke="#0073EA" strokeWidth={4} dot={false} />
                    <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-[45%] flex flex-col justify-center">
          <div className="bg-slate-900 dark:bg-slate-800 rounded-[32px] p-12 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-monday-blue/10 rounded-full blur-[80px]" />
            
            <div className="mb-12 relative z-10">
              <h4 className="text-7xl font-black text-monday-blue mb-4">
                <Counter target={2000} suffix="+" />
              </h4>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Daily Global Updates</p>
            </div>

            <div className="space-y-10 relative z-10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-monday-blue">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-2xl font-black mb-1">Data on Demand.</div>
                  <div className="text-sm text-slate-400 font-medium leading-relaxed">Instant processing for complex multi-factor queries.</div>
                </div>
              </div>
              
              <div className="pt-10 border-t border-white/10">
                <p className="text-sm text-slate-400 font-medium leading-relaxed italic">
                  "The fastest search experience we've ever deployed in the MENA region."
                </p>
                <div className="mt-4 text-[10px] font-black text-monday-blue uppercase tracking-widest">Global Ops Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
