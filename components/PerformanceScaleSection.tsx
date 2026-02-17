import React from 'react';

const PerformanceScaleSection: React.FC = () => {
  return (
    <section className="bg-[#0B0C10] py-32 px-6 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <span className="text-[11px] font-black text-green-400 uppercase tracking-[0.25em]">Verified Stability</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Ongoing Excellence.<br />
            <span className="text-blue-500">Verified by Data.</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            We don't just build; we maintain. Our traffic demands peak performance, and our live metrics prove it.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
             <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-black text-blue-400">179K+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Clicks</div>
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-black text-green-400">36,000+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Users</div>
             </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
           <div className="bg-[#1A1B20] p-8 rounded-3xl border border-white/5 shadow-2xl">
              <div className="h-40 flex items-end justify-between gap-2">
                 {[40, 70, 50, 90, 60, 80, 50, 100].map((h, i) => (
                    <div key={i} style={{height: `${h}%`}} className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80" />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
export default PerformanceScaleSection;