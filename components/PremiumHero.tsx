import React from 'react';

const tools = [
  { name: 'React', icon: '⚛️', bg: 'bg-blue-50' },
  { name: 'TypeScript', icon: '📘', bg: 'bg-blue-50' },
  { name: 'Node.js', icon: '🟢', bg: 'bg-green-50' },
  { name: 'Tailwind', icon: '🌊', bg: 'bg-cyan-50' },
  { name: 'Firebase', icon: '🔥', bg: 'bg-amber-50' },
  { name: 'Figma', icon: '🎨', bg: 'bg-pink-50' },
  { name: 'Vercel', icon: '🚀', bg: 'bg-slate-100' },
  { name: 'GitHub', icon: '🐙', bg: 'bg-slate-100' }
];

const PremiumHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-6 bg-[#F4F7FB] overflow-hidden flex flex-col items-center">
      
      {/* 1. Header/Nav embedded */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-50 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0073EA] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">P</div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">PSINV <span className="font-bold text-slate-400 text-sm tracking-normal">| Web Dev Dept</span></span>
        </div>
        <a href="https://psinv.net" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-black text-[#0073EA] shadow-sm hover:border-[#0073EA] transition-all">
          View Architecture
        </a>
      </div>

      {/* 2. Main Text */}
      <div className="text-center z-20 max-w-4xl mx-auto mb-16">
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          The Pinnacle of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073EA] to-[#00C875]">Digital Real Estate.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium">
          We engineered a high-velocity, scalable property ecosystem using the world's most powerful technologies.
        </p>
      </div>

      {/* 3. Clean Laptop Mockup */}
      <div className="relative z-20 w-full max-w-4xl mx-auto mb-16">
        <div className="aspect-[16/9] bg-slate-900 rounded-t-[24px] border-[10px] border-b-0 border-slate-800 shadow-2xl flex flex-col overflow-hidden">
          <div className="h-6 bg-slate-950 flex items-center px-4 space-x-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"/><div className="w-2.5 h-2.5 rounded-full bg-green-500"/>
          </div>
          {/* Inside the Laptop */}
          <div className="flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-8 text-center">
             <div className="w-16 h-16 bg-[#00C875]/20 rounded-full flex items-center justify-center mb-6 border border-[#00C875]/30 shadow-[0_0_30px_rgba(0,200,117,0.3)]">
               <span className="text-3xl">✅</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Ecosystem Integrated.</h2>
             <p className="text-[#00C875] font-bold uppercase tracking-widest text-xs md:text-sm">All systems nominal. 100ms Latency Achieved.</p>
          </div>
        </div>
        <div className="w-[105%] -ml-[2.5%] h-5 bg-slate-300 rounded-b-[16px] shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400 rounded-b-lg" />
        </div>
      </div>

      {/* 4. Static Tech Grid (Big, nice logos outside) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Powered by industry-leading infrastructure</p>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-transform">
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${tool.bg}`}>{tool.icon}</span>
              <span className="font-black text-slate-800 text-lg">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PremiumHero;