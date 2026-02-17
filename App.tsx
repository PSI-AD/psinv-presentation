
import React, { useState, useEffect } from 'react';
import HeroVisual from './components/HeroVisual';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import ConversionUXSection from './components/ConversionUXSection';
import ComparisonEngine from './components/ComparisonEngine';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#18191C] transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-[#18191C]/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0073EA] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">P</div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">PSINV</span>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white font-bold text-sm hover:ring-2 ring-[#0073EA] transition-all"
          >
            {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <HeroVisual />
        {/* Alternating Backgrounds for Rhythm */}
        <section className="py-24 px-6 bg-[#F9FAFB] dark:bg-[#1A1B20] transition-colors duration-500">
          <CoreTechnologySearch />
        </section>
        <section className="py-24 px-6 bg-white dark:bg-[#18191C] transition-colors duration-500">
          <PerformanceScaleSection />
        </section>
        <section className="py-24 px-6 bg-[#F9FAFB] dark:bg-[#1A1B20] transition-colors duration-500">
          <ConversionUXSection />
        </section>
        <section className="py-24 px-6 bg-white dark:bg-[#18191C] transition-colors duration-500">
          <ComparisonEngine />
        </section>
        <ClosingSections />
      </main>
    </div>
  );
};
export default App;
