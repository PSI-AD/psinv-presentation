import React, { useEffect } from 'react';
import PremiumHero from './components/PremiumHero';
import TeamRolesSection from './components/TeamRolesSection';
import IdeaTimelineSection from './components/IdeaTimelineSection';
import AuditFlowchartSection from './components/AuditFlowchartSection';
import DepartmentsServedSection from './components/DepartmentsServedSection';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import PerformanceScaleSection from './components/PerformanceScaleSection';
import FinalCallToAction from './components/FinalCallToAction';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#0073EA] selection:text-white">
      
      {/* 1. LIGHT THEME TOP */}
      <main className="bg-white text-slate-900">
        <PremiumHero />
        <TeamRolesSection />
        <IdeaTimelineSection />
        <AuditFlowchartSection />
      </main>

      {/* 2. THE NEW DEPARTMENTS TRANSITION (Dark) */}
      <DepartmentsServedSection />

      {/* 3. DARK THEME BOTTOM */}
      <div className="bg-[#111217] text-white">
        <CoreTechnologySearch />
        <PerformanceScaleSection />
        
        <div className="py-24 px-6 max-w-5xl mx-auto">
          <div className="bg-[#1A1B20] border border-white/10 rounded-[32px] p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="text-[#0073EA]">Transform</span> your workflow?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join the future of real estate discovery. Deploy the PSINV engine today.
            </p>
            <button className="px-8 py-4 bg-[#0073EA] text-white font-black rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,115,234,0.4)]">
              Start Free Today
            </button>
          </div>
        </div>
      </div>

      {/* 4. LIGHT FOOTER */}
      <div className="bg-white text-slate-900 border-t border-slate-100">
        <ClosingSections />
      </div>

    </div>
  );
};
export default App;