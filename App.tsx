
import React, { Suspense } from 'react';
import HeroDevVisual from './components/HeroDevVisual';
import PremiumHero from './components/PremiumHero';

// Lazy load below-the-fold components
const CoreTechnologySearch = React.lazy(() => import('./components/CoreTechnologySearch'));
const ArchitectureCard = React.lazy(() => import('./components/ArchitectureCard'));
const PerformanceScaleSection = React.lazy(() => import('./components/PerformanceScaleSection'));
const InteractiveFeatureShowcase = React.lazy(() => import('./components/InteractiveFeatureShowcase'));
const AiPipelineSection = React.lazy(() => import('./components/AiPipelineSection'));
const SecurityInfrastructure = React.lazy(() => import('./components/SecurityInfrastructure'));
const InnovationRoadmap = React.lazy(() => import('./components/InnovationRoadmap'));
const AiLayerSection = React.lazy(() => import('./components/AiLayerSection'));
const IntegrationsSection = React.lazy(() => import('./components/IntegrationsSection'));
const UxDesignHub = React.lazy(() => import('./components/UxDesignHub'));
const PerformanceAudit = React.lazy(() => import('./components/PerformanceAudit'));
const FinalCallToAction = React.lazy(() => import('./components/FinalCallToAction'));


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-monday-blue selection:text-white">
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-monday-blue rounded-lg flex items-center justify-center text-white font-black text-lg">P</div>
            <span className="text-2xl font-black text-monday-navy tracking-tighter">PSINV <span className="font-medium text-gray-500 text-sm tracking-normal">| Web Dev Dept</span></span>
          </div>
          <button className="px-5 py-2 bg-monday-blue text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors" aria-label="View Architecture">
            View Architecture
          </button>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* NEW: Jaw-Dropping Hero */}
        <PremiumHero />

        {/* Section 1: Light Green Hero (Loaded Instantly) */}
        <section className="bg-monday-green-light pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <HeroDevVisual />
          </div>
        </section>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-monday-blue font-bold">Loading Engine...</div>}>
          
          <CoreTechnologySearch />

          {/* Section 2: Dark Green Engine Card */}
          <section className="bg-white py-12 px-6 -mt-16 relative z-10">
            <div className="max-w-6xl mx-auto">
               <ArchitectureCard />
            </div>
          </section>

          {/* NEW: AI Backend Pipeline */}
          <AiPipelineSection />

          {/* Section 3: Deep Navy Scale Card */}
          <section className="bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
               <PerformanceScaleSection />
            </div>
          </section>

          {/* NEW: Security Infrastructure */}
          <SecurityInfrastructure />

          {/* Section 4: Interactive Toolset */}
          <InteractiveFeatureShowcase />
          
          {/* NEW: AI Layer & Integrations */}
          <AiLayerSection />
          <IntegrationsSection />

          {/* NEW: UX, Performance, Final CTA */}
          <UxDesignHub />
          <PerformanceAudit />
          <FinalCallToAction />
          
          {/* NEW: Innovation Roadmap */}
          <InnovationRoadmap />
          
        </Suspense>
      </main>
    </div>
  );
};
export default App;
