import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import InteractiveToolsSection from './components/InteractiveToolsSection';
import PerformanceDashboard from './components/PerformanceDashboard';
import InnovationRoadmap from './components/InnovationRoadmap';
import ClosingSections from './components/ClosingSections';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-lg">P</div>
            <span className="text-xl font-black text-slate-900 tracking-tight">PSINV</span>
          </div>
          <button className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-full text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
            Request Access
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          {/* Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-slate-50 to-white -z-20" />
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">v2.0 Platform Live</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
            >
              Real Estate Redefined <br />
              by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Intelligence.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              The complete ecosystem for modern real estate investment and management.
              Automated, data-driven, and designed for scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/30 hover:-translate-y-1">
                Explore Features
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full text-lg hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1">
                View Metrics
              </button>
            </motion.div>
          </div>
        </section>

        <InteractiveToolsSection />
        <PerformanceDashboard />
        <InnovationRoadmap />
        <ClosingSections />

        {/* Placeholder for future sections to keep the page length reasonable for scrolling effect testing */}
        <div className="h-[200px]" />
      </main>
    </div>
  );
};

export default App;