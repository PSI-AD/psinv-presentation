
import React from 'react';
import { motion } from 'framer-motion';

const PerformanceScaleSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#18191C] py-32 px-6 overflow-hidden border-t border-gray-50 dark:border-[#333538] transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Panel: The Proof (Cascading Layout) */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] flex items-center justify-center">
          {/* Dashboard Card 1: Google Analytics Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[80%] bg-[#2B2C32] dark:bg-[#242529] rounded-[24px] p-8 shadow-2xl z-20 border border-white/5 dark:border-white/10"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-black text-[#6161FF] uppercase tracking-[0.2em]">Real-time Audience</span>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-40" />
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-5xl font-black text-white mb-2">36,412</h4>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Active Users (Last 30 Days)</p>
            </div>
            {/* Abstract Line Graph */}
            <div className="h-24 w-full flex items-end space-x-1">
              {[40, 60, 45, 90, 65, 80, 55, 100, 85, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 1 }}
                  className="flex-1 bg-[#6161FF]/40 rounded-t-sm hover:bg-[#6161FF] transition-colors"
                />
              ))}
            </div>
          </motion.div>

          {/* Dashboard Card 2: Search Console Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-[75%] bg-white dark:bg-[#18191C] border border-gray-100 dark:border-[#333538] rounded-[24px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-10 transition-colors duration-500"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FFCB00]/10 flex items-center justify-center text-[#FFCB00]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Organic Performance</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-2xl font-black text-[#2B2C32] dark:text-white">179K</p>
                <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Total Clicks</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#6161FF]">4.2M</p>
                <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Impressions</p>
              </div>
            </div>
            {/* Abstract Area Graph */}
            <div className="h-16 w-full relative">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <motion.path
                  d="M0 20 L0 15 Q25 5 50 12 T100 8 L100 20 Z"
                  fill="#F1F1FB"
                  className="fill-[#F1F1FB] dark:fill-[#242529]/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                />
                <motion.path
                  d="M0 15 Q25 5 50 12 T100 8"
                  fill="none"
                  stroke="#6161FF"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Panel: The Why */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-6">
            <span className="text-[11px] font-black text-[#6161FF] uppercase tracking-[0.2em]">Infrastructure Layer</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B2C32] dark:text-white leading-tight">
              Built for Scale.<br />
              <span className="text-gray-300 dark:text-gray-600">Engineered for Speed.</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              Our traffic demands peak performance. By optimizing our asset delivery, compressing images, and utilizing modern web vitals practices, we maintain top-tier Lighthouse performance scores. A faster website means higher Google rankings, lower bounce rates, and the ability to serve tens of thousands of global users simultaneously without degradation.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100 dark:border-[#333538]">
            <MetricBlock 
              label="Global Reach" 
              value="10+ Countries" 
              description="Distributed nodes for global low-latency access." 
            />
            <MetricBlock 
              label="Asset Delivery" 
              value="High-Speed" 
              description="Optimized media pipeline for instant rendering." 
            />
            <MetricBlock 
              label="SEO Optimized" 
              value="Architecture" 
              description="Built to dominate search engine result pages." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricBlock: React.FC<{ label: string; value: string; description: string }> = ({ label, value, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-5 bg-[#F9FAFB] dark:bg-[#242529] rounded-2xl border border-gray-100 dark:border-[#333538] transition-all hover:bg-white dark:hover:bg-[#2B2C32] hover:shadow-xl hover:border-[#6161FF]/20 dark:hover:border-[#6161FF]/40"
  >
    <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-sm font-black text-[#2B2C32] dark:text-white mb-2">{value}</p>
    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium leading-tight">{description}</p>
  </motion.div>
);

export default PerformanceScaleSection;
