import React from 'react';

const PerformanceScaleSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <span className="text-xs font-black text-[#00C875] uppercase tracking-[0.25em] mb-4 block">Proven Stability</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Ongoing Excellence.<br />Verified by Data.
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Our team monitors core web vitals 24/7. These metrics aren't just numbers; they represent thousands of successful user journeys every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MetricCard 
          label="Total Organic Clicks" 
          value="179K+" 
          source="Google Search Console" 
          color="text-[#0073EA]" 
        />
        <MetricCard 
          label="Active Monthly Users" 
          value="36,000+" 
          source="Google Analytics" 
          color="text-[#00C875]" 
        />
        <MetricCard 
          label="Authority Backlinks" 
          value="552K" 
          source="Semrush Audit" 
          color="text-[#FFCB00]" 
        />
      </div>
    </div>
  );
};

const MetricCard: React.FC<{label: string, value: string, source: string, color: string}> = ({label, value, source, color}) => (
  <div className="p-10 rounded-[32px] bg-white dark:bg-[#242529] border border-slate-100 dark:border-slate-700 shadow-xl card-hover text-center">
    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{label}</p>
    <h3 className={`text-6xl font-black ${color} mb-4 tracking-tighter`}>{value}</h3>
    <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wide">
      {source}
    </div>
  </div>
);
export default PerformanceScaleSection;
