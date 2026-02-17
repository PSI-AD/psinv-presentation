import React from 'react';

const HeroDevVisual: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 px-6 bg-[#F4F7FB] overflow-hidden min-h-[900px] flex flex-col">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">

        {/* Top Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Enterprise Architecture</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-5xl">
          Real Estate Intelligence, <br />
          <span className="text-[#0073EA]">Engineered.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          A high-performance ecosystem built for scale, speed, and absolute accuracy. No gimmicks, just verified data.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-lg transition-all shadow-lg hover:-translate-y-1">
            Explore Architecture
          </button>
          <button className="px-8 py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-lg transition-all shadow-md hover:-translate-y-1">
            View Live Metrics
          </button>
        </div>

        {/* The Tech Stack Grid (Clean Text Only) */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#61DAFB]" />
            <span className="text-sm font-bold text-slate-600">React</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#339933]" />
            <span className="text-sm font-bold text-slate-600">Node.js</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFCA28]" />
            <span className="text-sm font-bold text-slate-600">Firebase</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="text-sm font-bold text-slate-600">Vercel</span>
          </div>
        </div>

        {/* The Visual Mockup (Static Dashboard UI) */}
        <div className="w-full max-w-6xl mx-auto bg-white rounded-t-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Mockup Header */}
          <div className="h-14 bg-white border-b border-slate-100 flex items-center px-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-32 h-2 bg-slate-100 rounded-full" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-8 bg-slate-50 rounded-md" />
              <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200" />
            </div>
          </div>

          {/* Mockup Body */}
          <div className="flex h-[400px] bg-slate-50">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-100 bg-white p-6 space-y-4 hidden md:block">
              <div className="w-full h-8 bg-slate-100 rounded-md" />
              <div className="w-3/4 h-4 bg-slate-50 rounded-md" />
              <div className="w-full h-4 bg-slate-50 rounded-md" />
              <div className="w-5/6 h-4 bg-slate-50 rounded-md" />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-6 overflow-hidden">
              <div className="flex justify-between items-end mb-8">
                <div className="space-y-2">
                  <div className="w-48 h-6 bg-slate-200 rounded-md" />
                  <div className="w-32 h-4 bg-slate-100 rounded-md" />
                </div>
                <div className="w-24 h-8 bg-emerald-600 rounded-md" />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-32" />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-32" />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-32" />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-48 w-full flex items-end justify-between gap-2 px-12 pb-4">
                <div className="w-[8%] h-[40%] bg-emerald-100 rounded-t-sm" />
                <div className="w-[8%] h-[60%] bg-emerald-200 rounded-t-sm" />
                <div className="w-[8%] h-[80%] bg-emerald-300 rounded-t-sm" />
                <div className="w-[8%] h-[50%] bg-emerald-200 rounded-t-sm" />
                <div className="w-[8%] h-[70%] bg-emerald-400 rounded-t-sm" />
                <div className="w-[8%] h-[90%] bg-emerald-500 rounded-t-sm" />
                <div className="w-[8%] h-[60%] bg-emerald-300 rounded-t-sm" />
                <div className="w-[8%] h-[80%] bg-emerald-500 rounded-t-sm" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroDevVisual;