import React from 'react';

const PremiumHero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 px-6 overflow-hidden bg-[#F0F4F8] min-h-[850px] flex items-center">
      {/* Embedded Logo & Button (Replaces Navbar) */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0073EA] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">P</div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">PSINV <span className="font-bold text-slate-400 text-sm tracking-normal">| Web Dev Dept</span></span>
        </div>
        <a href="https://psinv.net" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-black text-[#0073EA] shadow-md hover:border-[#0073EA] transition-all">
          Visit Platform &rarr;
        </a>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#0073EA] animate-pulse mr-3" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">PSINV Development Hub</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
            The Pinnacle of<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073EA] to-[#00C875]">Digital Real Estate.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
            We didn't just build a website. We engineered a high-velocity, scalable property ecosystem that sets a new industry standard.
          </p>
        </div>

        {/* Visual Mockup: Computer / Code / UI (No broken animations) */}
        <div className="relative">
          <div className="w-full aspect-[4/3] bg-slate-800 rounded-t-3xl border-[8px] border-slate-900 flex flex-col overflow-hidden shadow-2xl">
            <div className="h-6 bg-slate-900 flex items-center px-4 space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-yellow-500"/><div className="w-2 h-2 rounded-full bg-green-500"/>
            </div>
            <div className="flex-1 flex bg-[#0d1117]">
              <div className="w-1/2 border-r border-slate-700/50 p-6 font-mono text-[10px] text-slate-400">
                <p className="text-pink-400">import <span className="text-blue-300">{' { AI_Engine } '}</span>from <span className="text-green-300">'@psinv/core'</span>;</p>
                <p className="mt-4 text-purple-400">const <span className="text-yellow-300">initPlatform</span> = async () =&gt; {'{'}</p>
                <p className="ml-4 text-slate-500">// Bootstrapping properties</p>
                <p className="ml-4">await <span className="text-blue-300">AI_Engine</span>.index();</p>
                <p className="ml-4">return <span className="text-green-300">"100ms Latency"</span>;</p>
                <p>{'}'}</p>
              </div>
              <div className="w-1/2 p-6 bg-white relative">
                <div className="h-4 w-1/2 bg-slate-200 rounded mb-6" />
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center px-3 gap-3">
                      <div className="w-6 h-6 rounded bg-[#0073EA]/20" />
                      <div className="space-y-1.5 flex-1"><div className="h-1.5 w-3/4 bg-slate-200 rounded" /><div className="h-1.5 w-1/2 bg-slate-100 rounded" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[110%] -ml-[5%] h-4 bg-slate-300 rounded-b-xl shadow-xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-slate-400 rounded-b-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PremiumHero;