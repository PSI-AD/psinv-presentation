import React, { useState, useEffect } from 'react';
import HeroDevVisual from './components/HeroDevVisual';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import InteractiveFeatureShowcase from './components/InteractiveFeatureShowcase';
import AiLayerSection from './components/AiLayerSection';
import IntegrationsSection from './components/IntegrationsSection';
import UxDesignHub from './components/UxDesignHub';
import PerformanceAudit from './components/PerformanceAudit';
import FinalCallToAction from './components/FinalCallToAction';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-monday-blue selection:text-white">
      {/* Floating Theme Toggle (Navbar is permanently deleted) */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 left-6 z-[100] p-3 rounded-full bg-white shadow-2xl border border-slate-100 text-slate-600 hover:scale-110 transition-transform"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <main>
        <HeroDevVisual />
        <CoreTechnologySearch />
        <PerformanceScaleSection />
        <InteractiveFeatureShowcase />
        <AiLayerSection />
        <IntegrationsSection />
        <UxDesignHub />
        <PerformanceAudit />
        <FinalCallToAction />
      </main>
    </div>
  );
};
export default App;