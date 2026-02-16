
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Metric {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const METRICS: Metric[] = [
  { id: 'roi', label: 'ROI Projection', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
  { id: 'amenities', label: 'Amenities Score', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l6.857-2.143L11 3z" /> },
  { id: 'connectivity', label: 'Connectivity Index', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0m-15.557-5.657a14 14 0 0119.8 0" /> },
  { id: 'developer', label: 'Developer Rating', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
];

const ComparisonEngine: React.FC = () => {
  const [activeMetrics, setActiveMetrics] = useState<string[]>(['roi', 'amenities']);

  const toggleMetric = (id: string) => {
    setActiveMetrics(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#F7F8FC] dark:bg-[#1A1B20] rounded-[32px] p-8 md:p-12 border border-[#E5E7EB] dark:border-[#333538] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#2B2C32] dark:text-white mb-4 tracking-tight">
            Beyond Listings: <span className="text-[#6161FF]">Smart Project Evaluation.</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#6161FF] rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Panel: Property Cards */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            <PropertyCard 
              id="A"
              title="Aether Residences"
              price="$1.2M"
              stats={{ roi: '8.4%', amenities: '94/100', connectivity: 'High', developer: '5 Stars' }}
              activeMetrics={activeMetrics}
              gradient="from-[#6161FF] to-[#9292FF]"
            />
            <PropertyCard 
              id="B"
              title="The Obsidian"
              price="$1.45M"
              stats={{ roi: '7.2%', amenities: '98/100', connectivity: 'Medium', developer: '4.8 Stars' }}
              activeMetrics={activeMetrics}
              gradient="from-[#2B2C32] to-[#4A4B53] dark:from-[#333538] dark:to-[#1A1B20]"
            />
          </div>

          {/* Right Panel: Metric Selector */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            <div className="bg-white dark:bg-[#242529] rounded-2xl p-8 border border-gray-100 dark:border-[#333538] shadow-sm transition-colors duration-500">
              <h3 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Compare Metrics</h3>
              <motion.div 
                className="space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {METRICS.map((metric) => (
                  <motion.button
                    key={metric.id}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    onClick={() => toggleMetric(metric.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeMetrics.includes(metric.id) 
                        ? 'bg-[#F1F1FB] dark:bg-[#6161FF]/10 border-[#6161FF] shadow-sm' 
                        : 'bg-transparent border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg transition-colors ${activeMetrics.includes(metric.id) ? 'bg-[#6161FF] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {metric.icon}
                        </svg>
                      </div>
                      <span className={`font-bold transition-colors ${activeMetrics.includes(metric.id) ? 'text-[#2B2C32] dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                        {metric.label}
                      </span>
                    </div>
                    <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${activeMetrics.includes(metric.id) ? 'bg-[#6161FF]' : 'bg-gray-200 dark:bg-gray-700'}`}>
                      <motion.div
                        animate={{ x: activeMetrics.includes(metric.id) ? 20 : 2 }}
                        className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                      />
                    </div>
                  </motion.button>
                ))}
              </motion.div>
              <p className="mt-8 text-[11px] font-medium text-gray-400 dark:text-gray-500 leading-relaxed italic">
                *Comparison based on proprietary PSINV data algorithms and verified market sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  id: string;
  title: string;
  price: string;
  stats: Record<string, string>;
  activeMetrics: string[];
  gradient: string;
}

const PropertyCard: React.FC<CardProps> = ({ title, price, stats, activeMetrics, gradient }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-[#242529] rounded-2xl border border-gray-100 dark:border-[#333538] shadow-sm overflow-hidden flex flex-col transition-colors duration-500"
    >
      <div className={`h-32 bg-gradient-to-br ${gradient} p-6 flex flex-col justify-end relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <h4 className="text-white text-xl font-black relative z-10">{title}</h4>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Base Value</span>
          <span className="text-lg font-black text-[#2B2C32] dark:text-white">{price}</span>
        </div>

        <div className="space-y-3">
          {METRICS.map(m => (
            <AnimatePresence key={m.id}>
              {activeMetrics.includes(m.id) && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center justify-between p-3 bg-[#F9FAFB] dark:bg-[#1A1B20] rounded-lg border border-gray-100 dark:border-[#333538] transition-colors duration-500">
                    <div className="flex items-center space-x-2">
                       <svg className="w-3.5 h-3.5 text-[#6161FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {m.icon}
                        </svg>
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{m.label}</span>
                    </div>
                    <span className="text-[11px] font-black text-[#6161FF]">{stats[m.id]}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <div className="pt-4 mt-auto">
          <button className="w-full py-2.5 rounded-lg border-2 border-gray-100 dark:border-[#333538] text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:border-[#6161FF] dark:hover:border-[#6161FF] hover:text-[#6161FF] dark:hover:text-white transition-all">
            Full Audit Report
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonEngine;
