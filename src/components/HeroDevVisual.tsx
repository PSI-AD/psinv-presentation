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
  { name: 'Docker', icon: '🐳', type: 'Containerization' },
  { name: 'Webpack', icon: '📦', type: 'Asset Bundling' },
  { name: 'Lighthouse', icon: '🚥', type: 'Performance QA' },
  { name: 'Semrush', icon: '🎯', type: 'SEO Analytics' },
  { name: 'Jira', icon: '🎫', type: 'Agile Management' },
  { name: 'VS Code', icon: '💻', type: 'Development' },
];

const HeroDevVisual: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[900px] flex flex-col items-center justify-start bg-gradient-to-b from-[#F4F7FB] to-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-monday-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00C875]/5 rounded-full blur-[120px]" />
      </div>

      {/* Embedded Header Elements (Kept from previous version) */}
      <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-monday-blue rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">P</div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">PSINV <span className="font-bold text-slate-400 text-sm tracking-normal">| Web Dev Dept</span></span>
        </div>
        <a href="https://psinv.net" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-black text-monday-blue shadow-lg hover:border-monday-blue hover:shadow-blue-500/20 transition-all flex items-center gap-2">
          Visit Platform <span className="text-lg leading-none">&rarr;</span>
        </a>
      </div>

      {/* Hero Headers */}
      <div className="relative z-20 text-center mb-12 mt-8">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          Powered by the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-[#00C875]">World's Best Tools.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
          We don't compromise on architecture. Our team utilizes an elite stack of industry-leading technologies to engineer a real estate platform that is faster, smarter, and infinitely scalable.
        </p>
      </div>

      {/* THE TECH WALL - Large, Clear, Non-Overlapping */}
      <div className="relative z-20 w-full max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white px-6 py-4 rounded-[20px] shadow-lg border border-slate-100 flex items-center gap-4 hover:border-monday-blue hover:-translate-y-1 transition-all duration-300">
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
      <div className="relative z-20 w-full max-w-5xl mt-auto">
        <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-900 rounded-t-[24px] border-[10px] border-b-0 border-slate-800 relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
          {/* Laptop Screen Header */}
          <div className="h-8 bg-slate-950 flex items-center px-4 space-x-2 border-b border-white/5 relative z-20">
            <div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/>
            <div className="ml-auto text-[10px] font-black text-slate-600 uppercase tracking-widest">System Architecture Matrix</div>
          </div>
          {/* Screen Content */}
          <div className="flex-1 relative bg-gradient-to-br from-[#111217] to-[#1A1B20] flex items-center justify-center p-10">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
             <div className="relative z-10 text-center">
               <div className="w-20 h-20 bg-monday-green/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-monday-green/30">
                 <span className="text-4xl">✅</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Ecosystem Integrated.</h2>
               <p className="text-monday-green font-bold uppercase tracking-widest text-sm">All systems nominal. Ready to scale.</p>
             </div>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="w-[105%] -ml-[2.5%] h-5 bg-slate-300 rounded-b-[16px] shadow-2xl relative z-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1.5 bg-slate-400 rounded-b-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroDevVisual;