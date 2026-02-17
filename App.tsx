import React, { useState, useEffect } from 'react';
import PremiumHero from './components/PremiumHero';
import TeamRolesSection from './components/TeamRolesSection';
import IdeaTimelineSection from './components/IdeaTimelineSection';
import AuditFlowchartSection from './components/AuditFlowchartSection';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 left-6 z-[100] p-3 rounded-full bg-white shadow-2xl border border-slate-100 text-slate-600 hover:scale-110 transition-transform"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <main>
        <PremiumHero />
        <TeamRolesSection />
        <IdeaTimelineSection />
        <AuditFlowchartSection />
        <CoreTechnologySearch />
        <PerformanceScaleSection />
        <ClosingSections />
      </main>
    </div>
  );
};
export default App;