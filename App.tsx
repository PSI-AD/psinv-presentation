import React from 'react';
import PremiumHero from './components/PremiumHero';
import TeamRolesSection from './components/TeamRolesSection';
import IdeaTimelineSection from './components/IdeaTimelineSection';
import AuditFlowchartSection from './components/AuditFlowchartSection';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import FinalCallToAction from './components/FinalCallToAction';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <main>
        {/* LIGHT THEME SECTIONS */}
        <PremiumHero />
        <TeamRolesSection />
        <IdeaTimelineSection />
        <AuditFlowchartSection />
        
        {/* DARK THEME SECTIONS (Hardcoded Dark Mode) */}
        <CoreTechnologySearch />
        <PerformanceScaleSection />
        
        {/* FOOTER AREA */}
        <div className="bg-white">
           <FinalCallToAction />
           <ClosingSections />
        </div>
      </main>
    </div>
  );
};
export default App;