import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import HeroDevVisual from './components/HeroDevVisual';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';

// NEW LAZY IMPORTS
const TeamRolesSection = React.lazy(() => import('./components/TeamRolesSection'));
const IdeaTimelineSection = React.lazy(() => import('./components/IdeaTimelineSection'));
const AuditFlowchartSection = React.lazy(() => import('./components/AuditFlowchartSection'));
const InteractiveFeatureShowcase = React.lazy(() => import('./components/InteractiveFeatureShowcase'));
const AiLayerSection = React.lazy(() => import('./components/AiLayerSection'));
const IntegrationsSection = React.lazy(() => import('./components/IntegrationsSection'));
const UxDesignHub = React.lazy(() => import('./components/UxDesignHub'));
const PerformanceAudit = React.lazy(() => import('./components/PerformanceAudit'));
const FinalCallToAction = React.lazy(() => import('./components/FinalCallToAction'));

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-monday-blue selection:text-white">
      {/* Floating Theme Toggle (Moved from the deleted Navbar) */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <main>
        <HeroDevVisual />
        
        {/* New Team & Process Sections */}
        <React.Suspense fallback={<div className="h-96"/>}>
          <TeamRolesSection />
          <IdeaTimelineSection />
          <AuditFlowchartSection />
        
          <CoreTechnologySearch />
          <PerformanceScaleSection />
          <InteractiveFeatureShowcase />
          <AiLayerSection />
          <IntegrationsSection />
          <UxDesignHub />
          <PerformanceAudit />
          <FinalCallToAction />
        </React.Suspense>
      </main>
    </div>
  );
};
export default App;