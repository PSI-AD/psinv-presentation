
import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import HeroVisual from './components/HeroVisual';
import AdvancedIntelligenceSearch from './components/AdvancedIntelligenceSearch';
import CalculatorSuite from './components/CalculatorSuite';
import MapDiscovery from './components/MapDiscovery';
import ProjectComparison from './components/ProjectComparison';
import MapLifestyleIntelligence from './components/MapLifestyleIntelligence';
import ComparisonEngine from './components/ComparisonEngine';
import PerformanceDashboard from './components/PerformanceDashboard';
import ClosingSections from './components/ClosingSections';
import CoreTechnologySearch from './components/CoreTechnologySearch';
import DesignSystemSection from './components/DesignSystemSection';
import InteractiveToolsSection from './components/InteractiveToolsSection';
import ConversionUXSection from './components/ConversionUXSection';
import PerformanceScaleSection from './components/PerformanceScaleSection';

const bentoItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-9 h-9 bg-monday-blue rounded-lg flex items-center justify-center shadow-lg shadow-monday-blue/20">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">PSINV</span>
          </motion.div>
          
          <div className="hidden lg:flex space-x-8 text-sm font-bold text-slate-600 dark:text-slate-300">
            {['Architecture', 'UX & Design', 'Performance', 'Tools', 'Analytics'].map((link) => (
              <a key={link} href="#" className="hover:text-monday-blue transition-colors relative group py-2">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-monday-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:ring-2 hover:ring-monday-blue/50 transition-all"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:block px-6 py-2.5 bg-monday-blue text-white text-sm font-black rounded-lg shadow-lg shadow-monday-blue/30 hover:brightness-110 transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* HERO SECTION - Video Background */}
        <HeroVisual />

        {/* ECOSYSTEM - bg-slate-50 */}
        <section className="bg-slate-50 dark:bg-monday-dark py-32 px-6 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-black text-monday-green uppercase tracking-[0.2em] mb-4 block">Comprehensive Tools</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Product Ecosystem</h2>
              <div className="h-1.5 w-24 bg-monday-blue rounded-full mx-auto" />
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={bentoItemVariants} className="md:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[32px] overflow-hidden shadow-sm shadow-slate-200/50 dark:shadow-none min-h-[400px]">
                <AdvancedIntelligenceSearch />
              </motion.div>

              <motion.div variants={bentoItemVariants} className="md:col-span-1 md:row-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[32px] overflow-hidden shadow-sm shadow-slate-200/50 dark:shadow-none">
                <CalculatorSuite />
              </motion.div>

              <motion.div variants={bentoItemVariants} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[32px] overflow-hidden shadow-sm shadow-slate-200/50 dark:shadow-none min-h-[240px]">
                <MapDiscovery />
              </motion.div>

              <motion.div variants={bentoItemVariants} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[32px] overflow-hidden shadow-sm shadow-slate-200/50 dark:shadow-none min-h-[240px]">
                <ProjectComparison />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PERFORMANCE - bg-white */}
        <section className="py-32 px-6 bg-white dark:bg-[#18191C] border-y border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto">
            <PerformanceDashboard />
          </div>
        </section>

        {/* CORE TECH - bg-slate-50 */}
        <div className="bg-slate-50 dark:bg-monday-dark">
          <CoreTechnologySearch />
        </div>

        {/* DESIGN SYSTEM - bg-white */}
        <div className="bg-white dark:bg-[#18191C]">
          <DesignSystemSection />
        </div>

        {/* SCALE - bg-slate-50 */}
        <div className="bg-slate-50 dark:bg-monday-dark">
          <PerformanceScaleSection />
        </div>

        {/* TOOLS - bg-white */}
        <div className="bg-white dark:bg-[#18191C]">
          <InteractiveToolsSection />
        </div>

        {/* CONVERSION - bg-slate-50 */}
        <div className="bg-slate-50 dark:bg-monday-dark">
          <ConversionUXSection />
        </div>

        {/* COMPARISON - bg-white */}
        <section className="py-32 px-6 bg-white dark:bg-[#18191C] border-t border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto">
            <ComparisonEngine />
          </div>
        </section>

        {/* MAP INTELLIGENCE - bg-slate-50 */}
        <section className="py-32 px-6 bg-slate-50 dark:bg-monday-dark transition-colors">
          <div className="max-w-7xl mx-auto">
            <MapLifestyleIntelligence />
          </div>
        </section>

        {/* CLOSING - bg-white */}
        <ClosingSections />

      </main>
    </div>
  );
};

export default App;
