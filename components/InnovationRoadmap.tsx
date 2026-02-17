import React from 'react';

const InnovationRoadmap: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#F4F5F7] dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">The 2026 Roadmap</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { q: "Q2 2026", title: "Voice Search", desc: "Natural language processing for hands-free property discovery.", color: "bg-[#FF9900]" },
            { q: "Q3 2026", title: "3D Virtual Tours", desc: "Browser-based VR walkthroughs without external plugins.", color: "bg-[#FF5F57]" },
            { q: "Q4 2026", title: "Smart Contracts", desc: "Blockchain integration for transparent offer management.", color: "bg-[#5D00FF]" }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:-translate-y-2 transition-all shadow-sm hover:shadow-xl">
              <span className={`inline-block px-3 py-1 rounded-lg ${item.color} text-white text-[10px] font-black uppercase tracking-widest mb-6`}>{item.q}</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InnovationRoadmap;