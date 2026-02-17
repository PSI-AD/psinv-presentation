import React, { useState, useEffect } from 'react';
import HeroVisual from './components/HeroVisual';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import ConversionUXSection from './components/ConversionUXSection';
import ComparisonEngine from './components/ComparisonEngine';
import ClosingSections from './components/ClosingSections';

const tailwindLink = document.createElement('script');
tailwindLink.src = "https://cdn.tailwindcss.com";
document.head.appendChild(tailwindLink);

// @ts-ignore
window.tailwind = window.tailwind || {};
// @ts-ignore
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mondayBlue: '#0073EA',
        mondayGreen: '#00C875',
        mondayRed: '#E2445C',
        mondayYellow: '#FFCB00',
        mondayDark: '#18191C'
      }
    }
  }
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-mondayDark transition-colors duration-500">
      <nav className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-mondayDark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-mondayBlue rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">PSINV</span>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-mondayBlue"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <HeroVisual />
        <div className="bg-slate-50 dark:bg-slate-900/50 py-24"><CoreTechnologySearch /></div>
        <div className="bg-white dark:bg-mondayDark py-24"><PerformanceScaleSection /></div>
        <div className="bg-slate-50 dark:bg-slate-900/50 py-24"><ConversionUXSection /></div>
        <div className="bg-white dark:bg-mondayDark py-24"><ComparisonEngine /></div>
        <ClosingSections />
      </main>
    </div>
  );
};

export default App;
