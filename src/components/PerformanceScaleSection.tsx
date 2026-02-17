import React from 'react';
import { motion } from 'framer-motion';

const PerformanceScaleSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-monday-grey relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 relative z-10">
        {/* Left Side: Metrics Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetricCard title="Organic Clicks" metric="179K+" color="text-emerald-600" bg="bg-emerald-50" icon="📈" delay={0} />
          <MetricCard title="Active Users" metric="36K+" color="text-blue-600" bg="bg-blue-50" icon="👥" delay={0.1} />
          <MetricCard title="Backlinks" metric="552K" color="text-amber-600" bg="bg-amber-50" icon="🔗" delay={0.2} />
          <MetricCard title="Uptime" metric="99.99%" color="text-monday-navy" bg="bg-slate-200" icon="☁️" delay={0.3} />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-[45%] space-y-8 text-right lg:pl-12">
          <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.25em] block pr-4 border-r-4 border-emerald-600">Verified Impact</span>
          <h2 className="text-5xl font-black text-monday-navy leading-tight">
            Built for scale.<br /><span className="text-emerald-600">Proven by data.</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Our infrastructure isn't theoretical. It handles massive daily traffic loads while maintaining sub-second response times, verified independently by Google and Semrush.
          </p>
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  title: string;
  metric: string;
  color: string;
  bg: string;
  icon: string;
  delay: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, metric, color, bg, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }}
    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
    className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 flex flex-col justify-between h-[200px]"
  >
    <div className="flex justify-between items-start">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{title}</p>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${bg}`}>{icon}</div>
    </div>
    <h3 className={`text-5xl font-black ${color} tracking-tighter`}>{metric}</h3>
  </motion.div>
);
export default PerformanceScaleSection;