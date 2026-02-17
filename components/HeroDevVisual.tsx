import React from 'react';

const tools = [
  { name: 'React.js', icon: '⚛️', type: 'Frontend Core' },
  { name: 'Node.js', icon: '🟢', type: 'Backend Engine' },
  { name: 'TypeScript', icon: '📘', type: 'Architecture' },
  { name: 'Tailwind CSS', icon: '🌊', type: 'UI Framework' },
  { name: 'Firebase', icon: '🔥', type: 'Cloud Database' },
  { name: 'Vercel', icon: '🚀', type: 'Edge Network' },
  { name: 'Figma', icon: '🎨', type: 'UX Design' },
  { name: 'GitHub', icon: '🐙', type: 'Version Control' },
  { name: 'Lighthouse', icon: '🚥', type: 'Performance QA' },
  { name: 'Semrush', icon: '🎯', type: 'SEO Analytics' },
];

const HeroDevVisual: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 px-6 min-h-[900px] flex flex-col bg-[#F4F7FB] overflow-hidden">
      
      {/* Embedded Header Elements */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-50 mb-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-monday-blue rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">P</div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">PSINV <span className="font-bold text-slate-400 text-sm tracking-normal">| Web Dev Dept</span></span>
        </div>
        <a href="https://psinv.net" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-black text-monday-blue shadow-lg hover:border-monday-blue transition-all flex items-center gap-2">
          Visit Platform &rarr;
        </a>
      </div>

      <div className="relative z-20 text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          Powered by the <br/>
          <span className="text-monday-blue">World's Best Tools.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
          We utilize an elite stack of industry-leading technologies to engineer a real estate platform that is faster, smarter, and infinitely scalable.
        </p>
      </div>

      {/* THE TECH WALL */}
      <div className="relative z-20 w-full max-w-6xl mx-auto mb-20">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white px-6 py-4 rounded-[20px] shadow-md border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <span className="text-4xl">{tool.icon}</span>
              <div className="flex flex-col text-left">
                <span className="font-black text-lg text-slate-900 leading-tight">{tool.name}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tool.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Central Laptop */}
      <div className="relative z-20 w-full max-w-5xl mx-auto mt-auto">
        <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-900 rounded-t-[24px] border-[10px] border-b-0 border-slate-800 shadow-2xl flex flex-col">
          <div className="h-8 bg-slate-950 flex items-center px-4 space-x-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#111217] to-[#1A1B20] flex items-center justify-center p-10">
             <div className="text-center">
               <div className="text-4xl mb-4">✅</div>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Ecosystem Integrated.</h2>
               <p className="text-monday-green font-bold uppercase tracking-widest text-sm">All systems nominal.</p>
             </div>
          </div>
        </div>
        <div className="w-[105%] -ml-[2.5%] h-5 bg-slate-300 rounded-b-[16px] shadow-2xl" />
      </div>
    </section>
  );
};
export default HeroDevVisual;