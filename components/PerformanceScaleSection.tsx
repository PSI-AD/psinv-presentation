import React from 'react';

// Define the shape of props for MetricCard
interface MetricCardProps {
  title: string;
  metric: string;
  subtitle: string;
  color: string;
}

const PerformanceScaleSection: React.FC = () => {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[11px] font-black text-mondayGreen uppercase tracking-[0.25em] mb-4 block">Verified Market Impact</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            Ongoing Excellence.<br />
            <span className="text-slate-400">Proven by Data.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            We don't just build; we maintain and optimize. Using enterprise tools like Semrush and Google Console, we continuously refine our architecture. The results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard title="Total Organic Clicks" metric="179K+" subtitle="Google Search Console" color="mondayBlue" />
          <MetricCard title="Active Global Users" metric="36,000+" subtitle="Google Analytics" color="mondayGreen" />
          <MetricCard title="Domain Backlinks" metric="552K" subtitle="Semrush Authority" color="mondayYellow" />
        </div>
      </div>
    </section>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({title, metric, subtitle, color}) => {
  const colorMap: Record<string, string> = {
    mondayBlue: 'text-[#0073EA]',
    mondayGreen: 'text-[#00C875]',
    mondayYellow: 'text-[#FFCB00]',
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-[32px] p-10 border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center text-center">
      <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">{title}</p>
      <h3 className={`text-6xl font-black ${colorMap[color]} mb-4`}>{metric}</h3>
      <div className="px-4 py-1.5 bg-slate-50 dark:bg-slate-900 rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
        {subtitle}
      </div>
    </div>
  );
};

export default PerformanceScaleSection;
