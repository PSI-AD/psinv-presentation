import React, { useState, useEffect } from 'react';
import HeroVisual from './components/HeroVisual';
import ArchitectureCard from './components/ArchitectureCard';
import ScaleMetricsCard from './components/ScaleMetricsCard';
import ConversionUXSection from './components/ConversionUXSection';
import ComparisonEngine from './components/ComparisonEngine';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark for the premium feel

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[#111111] font-sans text-white">
      {/* RESTORED: The Fixed Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0073EA] rounded-lg flex items-center justify-center text-white font-black text-lg">P</div>
            <span className="text-xl font-black text-white tracking-tight">PSINV</span>
          </div>
          <div className="flex items-center gap-6">
             <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
               {isDarkMode ? 'Light Mode' : 'Dark Mode'}
             </button>
             <button className="px-5 py-2 bg-white text-black text-sm font-black rounded-full hover:bg-gray-200 transition-colors">
               View Architecture
             </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero: Dark & Premium */}
        <HeroVisual />
        
        {/* 2. The Green Section (Restored) */}
        <section className="py-24 px-6 bg-[#F4F7FB] dark:bg-[#F4F7FB]">
           <ArchitectureCard />
        </section>

        {/* 3. The Navy Scale Section (Restored) */}
        <section className="py-24 px-6 bg-[#111111]">
           <ScaleMetricsCard />
        </section>

        {/* 4. Conversion UX (Light) */}
        <section className="py-24 px-6 bg-white text-slate-900">
           <ConversionUXSection />
        </section>

        {/* 5. Comparison Engine (Dark) */}
        <section className="py-24 px-6 bg-[#111111]">
           <ComparisonEngine />
        </section>

        {/* 6. Closing (Gradient/Clean) */}
        <ClosingSections />
      </main>
    </div>
  );
};
export default App;