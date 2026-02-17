import React from 'react';

const CoreTechnologySearch: React.FC = () => {
  return (
    <section className="bg-[#111217] py-32 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <div className="relative bg-[#1A1B20] border border-white/10 rounded-2xl p-8 shadow-2xl">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
             </div>
             <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"/>
                <div className="h-4 bg-white/10 rounded w-1/2"/>
                <div className="mt-8 flex gap-4">
                   <div className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/30">React Architecture</div>
                   <div className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/30">AI Indexing</div>
                </div>
             </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Built with React & AI.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Engineered for Humans.</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            We utilized React to build a frictionless experience. Instead of loading new pages, our platform filters thousands of properties instantly.
          </p>
          <div className="flex gap-3">
             {['Instant Search', 'Predictive Loading', 'Automated Freshness'].map(tag => (
               <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300">{tag}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreTechnologySearch;